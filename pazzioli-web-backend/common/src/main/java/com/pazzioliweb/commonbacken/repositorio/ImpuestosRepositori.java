package com.pazzioliweb.commonbacken.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pazzioliweb.commonbacken.entyti.Impuestos;
import com.pazzioliweb.commonbacken.entyti.Municipio;

public interface ImpuestosRepositori extends JpaRepository<Impuestos, Long> {

}
