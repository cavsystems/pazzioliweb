package com.pazzioliweb.productosmodule.repositori;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pazzioliweb.productosmodule.entity.Precios;

public interface PreciosRepository extends JpaRepository<Precios, Integer> {
	
}
