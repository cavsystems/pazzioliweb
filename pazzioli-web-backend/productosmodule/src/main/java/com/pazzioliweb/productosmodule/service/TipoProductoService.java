package com.pazzioliweb.productosmodule.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.pazzioliweb.productosmodule.entity.TipoProducto;

public interface TipoProductoService {
	TipoProducto crear(TipoProducto t);
	
	TipoProducto actualizar(Integer id, TipoProducto t);
	
	void eliminar(Integer id);
	
	TipoProducto buscarPorId(Integer id);
	
	Page<TipoProducto> listar(Pageable pageable);
}
