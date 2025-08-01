package com.pazzioliweb.usuariosbacken.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pazzioliweb.usuriosbacken.entyti.Permisos;

import java.util.List;
import java.util.Optional;

public interface PermisoRepository extends JpaRepository<Permisos, Long> {
    List<Permisos> findByPermiso(String permiso);

}