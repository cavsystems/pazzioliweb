package com.pazzioliweb.comprasmodule.service;

import com.pazzioliweb.comprasmodule.dtos.ProductoActualizarCrearDTO;

public interface ProductoService {
    void actualizarOCrearProducto(ProductoActualizarCrearDTO productoDTO);
    void actualizarInventario(String codigoProducto, String codigoVariante, Integer cantidad, Long bodegaId);
    boolean existeProducto(String codigo);
}
