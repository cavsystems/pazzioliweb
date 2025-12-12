package com.pazzioliweb.movimientosinventariomodule.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.pazzioliweb.movimientosinventariomodule.dtos.MovimientoDTO;
import com.pazzioliweb.movimientosinventariomodule.entity.MovimientoInventario;

public interface MovimientoInventarioRepository extends JpaRepository<MovimientoInventario, Long>, JpaSpecificationExecutor<MovimientoDTO>{

}
