package com.pazzioliweb.productosmodule.repositori;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.pazzioliweb.productosmodule.entity.Lineas;
import com.pazzioliweb.productosmodule.entity.UnidadesMedida;

public interface UnidadesMedidaRepository extends JpaRepository<UnidadesMedida, Integer>{
	UnidadesMedida findByDescripcion(String descripcion);
	Page<UnidadesMedida>  findByDescripcionContainingIgnoreCase(String descripcion,Pageable pageable);

	
}
