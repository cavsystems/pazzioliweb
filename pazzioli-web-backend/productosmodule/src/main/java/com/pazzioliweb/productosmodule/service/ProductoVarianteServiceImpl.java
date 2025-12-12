package com.pazzioliweb.productosmodule.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pazzioliweb.productosmodule.dtos.ProductoInventarioDTO;
import com.pazzioliweb.productosmodule.dtos.ProductoVarianteConDetallesDTO;
import com.pazzioliweb.productosmodule.dtos.ProductoVarianteCreateDTO;
import com.pazzioliweb.productosmodule.dtos.ProductoVarianteResponseDTO;
import com.pazzioliweb.productosmodule.dtos.ProductoVarianteUpdateDTO;
import com.pazzioliweb.productosmodule.entity.ProductoVariante;
import com.pazzioliweb.productosmodule.entity.Productos;
import com.pazzioliweb.productosmodule.mapper.ProductoVarianteMapper;
import com.pazzioliweb.productosmodule.repositori.ProductoVarianteRepository;
import com.pazzioliweb.productosmodule.repositori.ProductosRepository;

import jakarta.persistence.EntityNotFoundException;


@Service
public class ProductoVarianteServiceImpl implements ProductoVarianteService{
	
	private final ProductoVarianteRepository varianteRepository;
    private final ProductosRepository productosRepository;
    private final ProductoVarianteMapper mapper;

    public ProductoVarianteServiceImpl(
            ProductoVarianteRepository varianteRepository,
            ProductosRepository productosRepository,ProductoVarianteMapper mapper) {
        this.varianteRepository = varianteRepository;
        this.productosRepository = productosRepository;
        this.mapper = mapper;
    }

    @Override
    @Transactional
    public ProductoVarianteResponseDTO crear(ProductoVarianteCreateDTO dto) {

        Productos producto = productosRepository.findById(dto.getProductoId())
                .orElseThrow(() -> new EntityNotFoundException("Producto no encontrado"));

        ProductoVariante variante = mapper.fromCreateDto(dto, producto);

        variante = varianteRepository.save(variante);

        return mapper.toResponseDto(variante);
    }

    @Override
    @Transactional
    public ProductoVarianteResponseDTO actualizar(Long id, ProductoVarianteUpdateDTO dto) {
    	
    	// 1. Verificar que la variante existe
        ProductoVariante existente = varianteRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Variante no encontrada"));
        
     // 2. VALIDACIÓN: Código de barras repetido en otra variante
        if (dto.getCodigoBarras() != null) {
            boolean existeCodigoBarras = varianteRepository
                    .existsByCodigoBarrasAndProductoVarianteIdNot(dto.getCodigoBarras(), id);

            if (existeCodigoBarras) {
                throw new IllegalArgumentException(
                    "El código de barras ya está asignado a otra variante."
                );
            }
        }
        
        mapper.updateFromDto(dto, existente);

        varianteRepository.save(existente);

        return mapper.toResponseDto(existente);
    }

    @Override
    public void eliminar(Long id) {
        if (!varianteRepository.existsById(id)) {
            throw new EntityNotFoundException("La variante no existe");
        }
        varianteRepository.deleteById(id);
    }

    @Override
    public ProductoVariante buscarPorId(Long id) {
        return varianteRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Variante no encontrada"));
    }

    @Override
    public Page<ProductoVarianteResponseDTO> listar(Pageable pageable) {

        Page<ProductoVariante> pagina = varianteRepository.traerProductosVariantes(pageable);

        return pagina.map(mapper::toResponseDto);
    }

    @Override
    public Page<ProductoVarianteResponseDTO> listarPorProducto(Integer productoId, Pageable pageable) {
    	Page<ProductoVariante> pagina = varianteRepository.findByProductoProductoId(productoId, pageable);
    	
        return pagina.map(mapper::toResponseDto); 
    }
    
    @Override
    public Page<ProductoInventarioDTO> listarInventarioBasico(Pageable pageable){
    	Page<ProductoInventarioDTO> pagina = varianteRepository.listarInventario(pageable);
    	return pagina;
    }
    
    @Override
    public Page<ProductoVarianteConDetallesDTO> listarConDetallesPorProducto(Integer productoId, Pageable pageable){
    	Page<ProductoVariante> variantes =
                varianteRepository.findByProductoProductoId(productoId, pageable);

    	return variantes.map(variant -> {
    	    ProductoVarianteConDetallesDTO dto = new ProductoVarianteConDetallesDTO();
    	    dto.setProductoVarianteId(variant.getProductoVarianteId());
    	    dto.setSku(variant.getSku());
    	    dto.setReferenciaVariantes(variant.getReferenciaVariantes());
    	    dto.setCodigoBarras(variant.getCodigoBarras());
    	    dto.setActivo(variant.getActivo());

    	    // MAPEO de entidad → DTO
    	    List<ProductoVarianteConDetallesDTO.DetalleDTO> detalleDTOs =
    	        variant.getDetalles().stream().map(det -> {
    	            ProductoVarianteConDetallesDTO.DetalleDTO d = 
    	                new ProductoVarianteConDetallesDTO.DetalleDTO();
    	            d.setDetalleId(det.getProductoVariantesDetalleId());
    	            d.setCaracteristicaId(det.getCaracteristica().getCaracteristicaId());
    	            d.setCaracteristicaNombre(det.getCaracteristica().getNombre());
    	            d.setTipo(det.getCaracteristica().getTipo().getNombre());
    	            return d;
    	        }).toList();

    	    dto.setDetalles(detalleDTOs);

    	    return dto;
    	});
    }
}
