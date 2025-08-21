package com.pazzioliweb.commonbacken.repositorio;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pazzioliweb.commonbacken.entyti.Municipio;
import com.pazzioliweb.commonbacken.entyti.Pais;
import com.pazzioliweb.commonbacken.entyti.Sesiones;

public interface PaisRepositori  extends  JpaRepository<Pais, Long>{
	public Optional<Pais> findByCodigo(int codigo);
}
