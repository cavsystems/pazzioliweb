package com.pazzioliweb.usuariosbacken.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.pazzioliweb.usuriosbacken.entyti.PermisoRol;
import com.pazzioliweb.usuriosbacken.entyti.Permiso;

import java.util.List;
import java.util.Optional;

public interface PermisoRolRepository extends JpaRepository<PermisoRol, Integer> {
	@Query("SELECT p FROM PermisoRol p JOIN p.codigopermiso  cp join p.codigorol cr WHERE cr.codigo = :codigo AND p.estado='ACTIVO'")
    List<PermisoRol> findPermisosActivosByRol(@Param("codigo") int codigo);
    
    //Optional<PermisoRol> findByCodigoAndEstado(int codigoRol, String estado);

}