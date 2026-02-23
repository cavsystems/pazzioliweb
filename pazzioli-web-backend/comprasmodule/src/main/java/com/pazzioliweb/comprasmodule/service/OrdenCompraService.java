package com.pazzioliweb.comprasmodule.service;

import com.pazzioliweb.comprasmodule.dtos.ItemRecibidoDTO;
import com.pazzioliweb.comprasmodule.dtos.OrdenCompraDTO;
import com.pazzioliweb.comprasmodule.dtos.RealizarOrdenRequestDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface OrdenCompraService {
    Page<OrdenCompraDTO> buscarConFiltros(String estado, LocalDate fechaDesde, LocalDate fechaHasta, 
                                         Long proveedorId, Pageable pageable);
    
    Optional<OrdenCompraDTO> obtenerPorId(Long id);
    Optional<OrdenCompraDTO> obtenerPorNumeroOrden(String numeroOrden);
    OrdenCompraDTO crear(OrdenCompraDTO ordenCompraDTO);
    OrdenCompraDTO actualizar(OrdenCompraDTO ordenCompraDTO);
    void anular(Long id, String motivo);
    void recibirOrden(Long id, List<ItemRecibidoDTO> itemsRecibidos);
    List<OrdenCompraDTO> obtenerOrdenesPendientes();
    
    /**
     * Realiza la orden de compra: actualiza productos, crea orden y cuentas por pagar.
     */
    OrdenCompraDTO realizarOrden(RealizarOrdenRequestDTO request);
    
    /**
     * Cuenta el número total de órdenes de compra en el sistema.
     * @return Mapa con el conteo total de órdenes.
     */
    java.util.Map<String, Long> contarTotalOrdenes();
}
