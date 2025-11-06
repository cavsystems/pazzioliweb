package com.pazzioliweb.tercerosmodule.repositori;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.pazzioliweb.tercerosmodule.dtos.SedeTerceroDTO;
import com.pazzioliweb.tercerosmodule.entity.SedeTercero;

public interface SedeTerceroRepository extends JpaRepository<SedeTercero, Integer> {
	@Query("SELECT s FROM SedeTercero s WHERE s.tercero.terceroId = :terceroId")
    List<SedeTerceroDTO> findByTerceroId(Integer terceroId);
}
