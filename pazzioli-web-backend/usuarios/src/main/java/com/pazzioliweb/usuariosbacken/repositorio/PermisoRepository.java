package com.pazzioliweb.usuariosbacken.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pazzioliweb.usuriosbacken.entyti.Permiso;

import java.util.List;

public interface PermisoRepository extends JpaRepository<Permiso, Long> {
    List<Permiso> findByNombre(String nombre);

}