package com.pazzioliweb.empresasback.repositori;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pazzioliweb.empresasback.entyti.Actividadeconomica;
import com.pazzioliweb.empresasback.entyti.Regimen;

public interface  RegimenRepositori  extends JpaRepository<Regimen, Long> {
 Optional<Regimen> findByCodigo(int codigo);
}
