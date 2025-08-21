package com.pazzioliweb.empresasback.repositori;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pazzioliweb.empresasback.entyti.Bodegas;
import com.pazzioliweb.empresasback.entyti.Empresas;
@Repository
public interface BodegasRepository extends JpaRepository<Bodegas, Long>{

}
