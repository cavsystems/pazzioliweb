package com.pazzioliweb.productosmodule.repositori;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.pazzioliweb.productosmodule.entity.Grupos;
import com.pazzioliweb.productosmodule.entity.Lineas;

public interface GrupoRepositori extends JpaRepository<Grupos,Integer>  {
	Page<Grupos>  findByDescripcionContainingIgnoreCase(String descripcion,Pageable pageable);
}
