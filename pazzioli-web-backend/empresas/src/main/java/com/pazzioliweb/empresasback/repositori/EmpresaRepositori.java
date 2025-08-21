package com.pazzioliweb.empresasback.repositori;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pazzioliweb.empresasback.entyti.Bodegas;
import com.pazzioliweb.empresasback.entyti.Empresa;

public interface EmpresaRepositori extends JpaRepository<Empresa, Long> {
	

}
