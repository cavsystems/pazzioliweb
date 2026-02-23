package com.pazzioliweb.comprasmodule.service.impl;

import com.pazzioliweb.comprasmodule.client.ProductoClient;
import com.pazzioliweb.comprasmodule.dtos.*;
import com.pazzioliweb.comprasmodule.entity.DetalleOrdenCompra;
import com.pazzioliweb.comprasmodule.entity.OrdenCompra;
import com.pazzioliweb.comprasmodule.exception.OrdenCompraException;
import com.pazzioliweb.comprasmodule.mapper.OrdenCompraMapper;
import com.pazzioliweb.comprasmodule.repository.OrdenCompraRepository;
import com.pazzioliweb.comprasmodule.service.CuentaPorPagarService;
import com.pazzioliweb.comprasmodule.service.OrdenCompraService;
import com.pazzioliweb.comprasmodule.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class OrdenCompraServiceImpl implements OrdenCompraService {

    private final OrdenCompraRepository ordenCompraRepository;
    private final OrdenCompraMapper ordenCompraMapper;
    private final ProductoService productoService;
    private final ProductoClient productoClient;
    private final CuentaPorPagarService cuentaPorPagarService;

    @Autowired
    public OrdenCompraServiceImpl(OrdenCompraRepository ordenCompraRepository,
                                 OrdenCompraMapper ordenCompraMapper,
                                 ProductoService productoService,
                                 ProductoClient productoClient,
                                 CuentaPorPagarService cuentaPorPagarService) {
        this.ordenCompraRepository = ordenCompraRepository;
        this.ordenCompraMapper = ordenCompraMapper;
        this.productoService = productoService;
        this.productoClient = productoClient;
        this.cuentaPorPagarService = cuentaPorPagarService;
    }

    @Override
    @Transactional(readOnly = true)
    public Page<OrdenCompraDTO> buscarConFiltros(String estado, LocalDate fechaDesde,
                                               LocalDate fechaHasta, Long proveedorId,
                                               Pageable pageable) {
        return ordenCompraRepository.buscarConFiltros(estado, fechaDesde, fechaHasta, proveedorId, pageable)
                .map(ordenCompraMapper::toDto);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<OrdenCompraDTO> obtenerPorId(Long id) {
        return ordenCompraRepository.findById(id)
                .map(ordenCompraMapper::toDto);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<OrdenCompraDTO> obtenerPorNumeroOrden(String numeroOrden) {
        return ordenCompraRepository.findByNumeroOrden(numeroOrden)
                .map(ordenCompraMapper::toDto);
    }

    @Override
    @Transactional
    public OrdenCompraDTO crear(OrdenCompraDTO ordenCompraDTO) {
        // This method is outdated, kept for compatibility
        throw new UnsupportedOperationException("Use realizarOrden for new orders");
    }

    @Override
    @Transactional
    public OrdenCompraDTO actualizar(OrdenCompraDTO ordenCompraDTO) {
        // Implementation for updating existing orders
        OrdenCompra ordenExistente = ordenCompraRepository.findById(ordenCompraDTO.getId())
                .orElseThrow(() -> new OrdenCompraException("La orden de compra no existe"));

        if (!"PENDIENTE".equals(ordenExistente.getEstado())) {
            throw new OrdenCompraException("Solo se pueden modificar órdenes en estado PENDIENTE");
        }

        ordenExistente.setObservaciones(ordenCompraDTO.getObservaciones());
        ordenExistente.setFechaEntregaEsperada(ordenCompraDTO.getFechaEntregaEsperada());
        ordenExistente.setGravada(ordenCompraDTO.getSubtotal());
        ordenExistente.setIva(ordenCompraDTO.getIva());
        ordenExistente.setTotalOrdenCompra(ordenCompraDTO.getTotal());

        ordenExistente.getItems().clear();
        ordenCompraDTO.getItems().forEach(itemDto -> {
            DetalleOrdenCompra detalle = new DetalleOrdenCompra();
            detalle.setCodigoProducto(itemDto.getCodigoProducto());
            detalle.setDescripcionProducto(itemDto.getDescripcionProducto());
            detalle.setCantidad(itemDto.getCantidad());
            detalle.setPrecioUnitario(itemDto.getPrecioUnitario());
            detalle.setDescuento(itemDto.getDescuento() != null ? itemDto.getDescuento() : BigDecimal.ZERO);
            detalle.setIva(itemDto.getIvaPorcentaje() != null ? itemDto.getIvaPorcentaje() : BigDecimal.ZERO);
            detalle.setOrdenCompra(ordenExistente);
            ordenExistente.getItems().add(detalle);
        });

        OrdenCompra ordenActualizada = ordenCompraRepository.save(ordenExistente);
        return ordenCompraMapper.toDto(ordenActualizada);
    }

    @Override
    @Transactional
    public void anular(Long id, String motivo) {
        OrdenCompra orden = ordenCompraRepository.findById(id)
                .orElseThrow(() -> new OrdenCompraException("La orden de compra no existe"));

        if (!"PENDIENTE".equals(orden.getEstado())) {
            throw new OrdenCompraException("Solo se pueden anular órdenes en estado PENDIENTE");
        }

        orden.setEstado("ANULADA");
        orden.setObservaciones(orden.getObservaciones() + "\nAnulada: " + motivo);
        ordenCompraRepository.save(orden);
    }

    @Override
    @Transactional
    public void recibirOrden(Long id, List<ItemRecibidoDTO> itemsRecibidos) {
        OrdenCompra orden = ordenCompraRepository.findById(id)
                .orElseThrow(() -> new OrdenCompraException("La orden de compra no existe"));

        if ("ANULADA".equals(orden.getEstado()) || "RECIBIDA".equals(orden.getEstado())) {
            throw new OrdenCompraException("No se puede recibir una orden " + orden.getEstado());
        }

        for (ItemRecibidoDTO itemRecibido : itemsRecibidos) {
            DetalleOrdenCompra detalle = orden.getItems().stream()
                    .filter(d -> d.getId().equals(itemRecibido.getDetalleId()))
                    .findFirst()
                    .orElseThrow(() -> new OrdenCompraException("Detalle de orden no encontrado: " + itemRecibido.getDetalleId()));

            int cantidadPendiente = detalle.getCantidad() - detalle.getCantidadRecibida();
            if (itemRecibido.getCantidadRecibida() > cantidadPendiente) {
                throw new OrdenCompraException("La cantidad recibida no puede ser mayor a la pendiente");
            }

            int nuevaCantidadRecibida = detalle.getCantidadRecibida() + itemRecibido.getCantidadRecibida();
            detalle.setCantidadRecibida(nuevaCantidadRecibida);
            detalle.setRecibido(nuevaCantidadRecibida >= detalle.getCantidad());

            actualizarInventario(detalle, itemRecibido, orden.getBodegaId());
        }

        boolean todosRecibidos = orden.getItems().stream().allMatch(DetalleOrdenCompra::isRecibido);
        boolean algunosRecibidos = orden.getItems().stream().anyMatch(d -> d.getCantidadRecibida() > 0);

        if (todosRecibidos) {
            orden.setEstado("RECIBIDA");
            actualizarCostosYPrecios(orden);
        } else if (algunosRecibidos) {
            orden.setEstado("RECIBIDA_PARCIAL");
        }

        ordenCompraRepository.save(orden);
    }

    @Override
    @Transactional(readOnly = true)
    public List<OrdenCompraDTO> obtenerOrdenesPendientes() {
        return ordenCompraRepository.buscarConFiltros("PENDIENTE", null, null, null, Pageable.unpaged())
                .getContent()
                .stream()
                .map(ordenCompraMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public Map<String, Long> contarTotalOrdenes() {
        long total = ordenCompraRepository.count();
        return Collections.singletonMap("totalOrdenes", total);
    }

    @Override
    @Transactional
    public OrdenCompraDTO realizarOrden(RealizarOrdenRequestDTO request) {
        // 1. Procesar productos: actualizar o crear productos con variantes
        procesarProductosDesdeRequest(request.getOrden_compra().getProducts());

        // 2. Crear la orden de compra
        OrdenCompra ordenCompra = crearOrdenDesdeRequest(request);

        // 3. Crear detalles de la orden
        List<DetalleOrdenCompra> detalles = crearDetallesDesdeRequest(ordenCompra, request.getOrden_compra().getProducts());
        ordenCompra.setItems(detalles);

        // 4. Guardar la orden
        OrdenCompra ordenGuardada = ordenCompraRepository.save(ordenCompra);

        // 5. Crear cuenta por pagar
        crearCuentaPorPagarDesdeRequest(ordenGuardada, request);

        return ordenCompraMapper.toDto(ordenGuardada);
    }

    private void procesarProductosDesdeRequest(List<RealizarOrdenRequestDTO.ProductoRequestPayloadDTO> products) {
        for (RealizarOrdenRequestDTO.ProductoRequestPayloadDTO product : products) {
            ProductoActualizarCrearDTO productoDTO = mapToProductoActualizarCrearDTO(product);
            productoService.actualizarOCrearProducto(productoDTO);
        }
    }

    private ProductoActualizarCrearDTO mapToProductoActualizarCrearDTO(RealizarOrdenRequestDTO.ProductoRequestPayloadDTO product) {
        ProductoActualizarCrearDTO dto = new ProductoActualizarCrearDTO();
        dto.setCodigo(product.getCodigo());
        dto.setTipoProducto(product.getTipo_producto());
        dto.setDescripcion(product.getDescripcion());
        dto.setReferencia(product.getReferencia());
        dto.setUnidadMedida(product.getUnidad_medida());
        dto.setImpuesto(product.getImpuesto());
        dto.setCosto(product.getCosto());
        dto.setLinea(product.getLinea());
        dto.setGrupo(product.getGrupo());
        dto.setCodigoBarras(product.getCodigobarras());
        dto.setUbicacion(product.getUbicacion());

        if (product.getVariantes() != null && !product.getVariantes().isEmpty()) {
            List<ProductoActualizarCrearDTO.VarianteDTO> variantes = new ArrayList<>();
            for (RealizarOrdenRequestDTO.VariantePayloadDTO variante : product.getVariantes()) {
                ProductoActualizarCrearDTO.VarianteDTO v = new ProductoActualizarCrearDTO.VarianteDTO();
                v.setCodigoBarraVariante(variante.getCodigobarravariante());
                v.setCantidad(variante.getCantidad());
                v.setNotas(variante.getNotas());

                if (variante.getAtributos() != null) {
                    List<ProductoActualizarCrearDTO.AtributoDTO> atributos = new ArrayList<>();
                    for (RealizarOrdenRequestDTO.AtributoPayloadDTO attr : variante.getAtributos()) {
                        ProductoActualizarCrearDTO.AtributoDTO a = new ProductoActualizarCrearDTO.AtributoDTO();
                        a.setNombre(attr.getNombre());
                        a.setValor(attr.getValor());
                        atributos.add(a);
                    }
                    v.setAtributos(atributos);
                }
                variantes.add(v);
            }
            dto.setVariantes(variantes);
        }

        return dto;
    }

    private OrdenCompra crearOrdenDesdeRequest(RealizarOrdenRequestDTO request) {
        OrdenCompra orden = new OrdenCompra();
        orden.setNumeroOrden("OC-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase());
        orden.setEstado("PENDIENTE");

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM/dd/yyyy");
        LocalDate fechaInicial = LocalDate.parse(request.getFechainicial(), formatter);
        orden.setFechaEmision(fechaInicial);

        LocalDate fechaEntrega;
        if (request.getFechafinal() != null && !request.getFechafinal().isEmpty()) {
            fechaEntrega = LocalDate.parse(request.getFechafinal(), formatter);
        } else {
            fechaEntrega = fechaInicial.plusDays(request.getPlazo() != null ? request.getPlazo() : 30);
        }
        orden.setFechaEntregaEsperada(fechaEntrega);

        orden.setUsuarioCreacion("SYSTEM");
        orden.setFechaCreacion(LocalDate.now());

        orden.setGravada(request.getOrden_compra().getGravada());
        orden.setIva(request.getOrden_compra().getIva());
        orden.setDescuentos(request.getOrden_compra().getDescuentos());
        orden.setTotalOrdenCompra(request.getOrden_compra().getTotalproduct());

        orden.setProveedorId((long) request.getProvedor().getTerceroId());
        orden.setBodegaId(1L); // Default, can be enhanced

        return orden;
    }

    private List<DetalleOrdenCompra> crearDetallesDesdeRequest(OrdenCompra orden, List<RealizarOrdenRequestDTO.ProductoRequestPayloadDTO> products) {
        List<DetalleOrdenCompra> detalles = new ArrayList<>();
        for (RealizarOrdenRequestDTO.ProductoRequestPayloadDTO product : products) {
            if (product.getVariantes() != null && !product.getVariantes().isEmpty()) {
                for (RealizarOrdenRequestDTO.VariantePayloadDTO variante : product.getVariantes()) {
                    DetalleOrdenCompra detalle = new DetalleOrdenCompra();
                    detalle.setOrdenCompra(orden);
                    detalle.setCodigoProducto(product.getCodigo());
                    detalle.setCodigoBarras(variante.getCodigobarravariante());
                    detalle.setDescripcionProducto(product.getDescripcion());
                    detalle.setObservacionProducto("");
                    detalle.setCantidad(variante.getCantidad());
                    detalle.setPrecioUnitario(product.getCosto());
                    detalle.setDescuento(variante.getDescuento() != null ? variante.getDescuento() : BigDecimal.ZERO);
                    detalle.setIva(product.getImpuesto() != null ? BigDecimal.valueOf(product.getImpuesto()) : BigDecimal.ZERO);
                    detalle.setRecibido(false);
                    detalle.setCantidadRecibida(0);
                    detalles.add(detalle);
                }
            } else {
                DetalleOrdenCompra detalle = new DetalleOrdenCompra();
                detalle.setOrdenCompra(orden);
                detalle.setCodigoProducto(product.getCodigo());
                detalle.setCodigoBarras(product.getCodigobarras());
                detalle.setDescripcionProducto(product.getDescripcion());
                detalle.setObservacionProducto("");
                detalle.setCantidad(0);
                detalle.setPrecioUnitario(product.getCosto());
                detalle.setDescuento(BigDecimal.ZERO);
                detalle.setIva(product.getImpuesto() != null ? BigDecimal.valueOf(product.getImpuesto()) : BigDecimal.ZERO);
                detalle.setRecibido(false);
                detalle.setCantidadRecibida(0);
                detalles.add(detalle);
            }
        }
        return detalles;
    }

    private void crearCuentaPorPagarDesdeRequest(OrdenCompra orden, RealizarOrdenRequestDTO request) {
        CuentaPorPagarDTO cuenta = new CuentaPorPagarDTO();
        cuenta.setNit(request.getProvedor().getIdentificacion());
        cuenta.setNombre(request.getProvedor().getNombre());
        cuenta.setNumeroFactura(orden.getNumeroOrden());
        cuenta.setFechaVencimiento(orden.getFechaEntregaEsperada());
        cuenta.setValorNeto(orden.getTotalOrdenCompra());
        cuenta.setEstado("PENDIENTE");

        cuentaPorPagarService.crear(cuenta);
    }


    private void actualizarInventario(DetalleOrdenCompra detalle, ItemRecibidoDTO itemRecibido, Long bodegaId) {
        productoService.actualizarInventario(
            detalle.getCodigoProducto(),
            itemRecibido.getLote(),
            itemRecibido.getCantidadRecibida(),
            bodegaId
        );
    }

    private void actualizarCostosYPrecios(OrdenCompra orden) {
        for (DetalleOrdenCompra detalle : orden.getItems()) {
            if (detalle.getCantidadRecibida() > 0) {
                ProductoActualizarCrearDTO productoDTO = new ProductoActualizarCrearDTO();
                productoDTO.setCodigo(detalle.getCodigoProducto());
                productoDTO.setCosto(detalle.getPrecioUnitario());
                productoService.actualizarOCrearProducto(productoDTO);
            }
        }
    }
}
