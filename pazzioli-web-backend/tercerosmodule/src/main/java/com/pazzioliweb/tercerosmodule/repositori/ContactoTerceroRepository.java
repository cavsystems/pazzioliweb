package com.pazzioliweb.tercerosmodule.repositori;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.pazzioliweb.tercerosmodule.dtos.ContactoTerceroDTO;
import com.pazzioliweb.tercerosmodule.entity.ContactoTercero;

public interface ContactoTerceroRepository extends JpaRepository<ContactoTercero, Integer> {
	@Query("SELECT c FROM ContactoTercero c WHERE c.tercero.terceroId = :terceroId")
    List<ContactoTerceroDTO> findByTerceroId(Integer terceroId);
}
