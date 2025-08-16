package com.pazzioliweb.commonbacken.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pazzioliweb.commonbacken.entyti.Pais;
import com.pazzioliweb.commonbacken.entyti.Sesiones;

public interface PaisRepositori  extends  JpaRepository<Pais, Long>{

}
