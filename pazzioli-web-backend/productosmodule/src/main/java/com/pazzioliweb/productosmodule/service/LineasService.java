package com.pazzioliweb.productosmodule.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.pazzioliweb.productosmodule.entity.Lineas;

public interface LineasService {
	Lineas crear(Lineas l);
	
	Lineas actualizar(Integer id, Lineas l);
	
	void eliminar(Integer id);
	
	Lineas buscarPorId(Integer id);
	
	Page<Lineas> listar(String descripcion,Pageable pageable);
	
}
