package com.pazzioliweb.productosmodule.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.pazzioliweb.productosmodule.entity.Grupos;

public interface GruposService {
	Grupos crear(Grupos g);
	
	Grupos actualizar(Integer id, Grupos g);
	
	void eliminar(Integer id);
	
	Grupos buscarPorId(Integer id);
	
	Page<Grupos> listar(String descripcion,	Pageable pageable);
}
