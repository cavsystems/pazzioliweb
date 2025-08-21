package com.pazzioliweb.usuariosbacken.repositorio;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pazzioliweb.usuriosbacken.entyti.Tipoidentificacion;
import com.pazzioliweb.usuriosbacken.entyti.Tipopersona;

public interface TipoidentificacionRepository  extends JpaRepository<Tipoidentificacion, Long> {

	Optional<Tipoidentificacion> findByCodigo(int codigo);
}
