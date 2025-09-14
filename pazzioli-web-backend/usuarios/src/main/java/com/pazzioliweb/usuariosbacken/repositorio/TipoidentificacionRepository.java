package com.pazzioliweb.usuariosbacken.repositorio;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pazzioliweb.usuariosbacken.entity.Tipoidentificacion;
import com.pazzioliweb.usuariosbacken.entity.Tipopersona;

public interface TipoidentificacionRepository  extends JpaRepository<Tipoidentificacion, Long> {

	Optional<Tipoidentificacion> findByCodigo(int codigo);
}
