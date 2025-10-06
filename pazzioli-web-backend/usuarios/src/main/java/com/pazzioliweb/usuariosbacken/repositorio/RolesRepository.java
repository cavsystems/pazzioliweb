package com.pazzioliweb.usuariosbacken.repositorio;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pazzioliweb.usuariosbacken.dtos.RolesDTOS;
import com.pazzioliweb.usuariosbacken.entity.Permiso;
import com.pazzioliweb.usuariosbacken.entity.Roles;

public interface RolesRepository extends JpaRepository<Roles, Long>{
public List<RolesDTOS>  findByNombreNot(String nombre);
}
