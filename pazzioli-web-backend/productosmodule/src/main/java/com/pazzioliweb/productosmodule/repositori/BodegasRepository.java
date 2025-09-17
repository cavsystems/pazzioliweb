package com.pazzioliweb.productosmodule.repositori;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pazzioliweb.productosmodule.entity.Bodegas;

@Repository
public interface BodegasRepository extends JpaRepository<Bodegas, Long>{

}
