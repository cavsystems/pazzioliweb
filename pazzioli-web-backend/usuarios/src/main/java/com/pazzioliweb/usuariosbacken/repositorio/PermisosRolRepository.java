package com.pazzioliweb.usuariosbacken.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.pazzioliweb.usuriosbacken.entyti.PermisosRol;
import com.pazzioliweb.usuriosbacken.entyti.Permisos;

import java.util.List;
import java.util.Optional;

public interface PermisosRolRepository extends JpaRepository<PermisosRol, Integer> {
	@Query("SELECT p FROM Permisos_Roles p JOIN p.codigopermiso cp join p.codigorol cr WHERE cr.codigo = :codigo AND p.estado='ACTIVO'")
    List<PermisosRol> findPermisosActivosByRol(@Param("codigo") int codigo);
    
    Optional<Permisos> findBycodigoRolAndEstado(int codigoRol, String estado);

}