package com.pazzioliweb.commonbacken.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pazzioliweb.commonbacken.entyti.Departamento;
import com.pazzioliweb.commonbacken.entyti.Sesiones;

public interface DepartamentoRepositori extends  JpaRepository<Departamento, Long>{

}
