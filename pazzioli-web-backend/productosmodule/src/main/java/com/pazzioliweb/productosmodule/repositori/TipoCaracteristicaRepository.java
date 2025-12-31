package com.pazzioliweb.productosmodule.repositori;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.pazzioliweb.productosmodule.entity.Lineas;
import com.pazzioliweb.productosmodule.entity.TipoCaracteristica;

public interface TipoCaracteristicaRepository extends JpaRepository<TipoCaracteristica, Long>{
	Page<TipoCaracteristica>  findByNombreContainingIgnoreCase(String descripcion,Pageable pageable);

}
