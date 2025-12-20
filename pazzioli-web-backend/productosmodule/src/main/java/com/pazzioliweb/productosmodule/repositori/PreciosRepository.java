package com.pazzioliweb.productosmodule.repositori;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.pazzioliweb.productosmodule.controller.ExistenciasBodegaDTO;
import com.pazzioliweb.productosmodule.dtos.PreciosProductoVarianteDTO;
import com.pazzioliweb.productosmodule.entity.Precios;

public interface PreciosRepository extends JpaRepository<Precios, Integer> {
	

}
