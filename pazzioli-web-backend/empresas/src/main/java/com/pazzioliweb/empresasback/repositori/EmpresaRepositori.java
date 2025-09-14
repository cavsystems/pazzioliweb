package com.pazzioliweb.empresasback.repositori;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pazzioliweb.empresasback.entity.Bodegas;
import com.pazzioliweb.empresasback.entity.Empresa;

public interface EmpresaRepositori extends JpaRepository<Empresa, Long> {
	

}
