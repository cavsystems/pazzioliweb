package com.pazzioliweb.usuariosbacken.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.pazzioliweb.usuariosbacken.entity.Usuario;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Optional<Usuario> findByUsuario(String usuario);
    Optional <Usuario> findByCodigo(int codigo);
    @Query("SELECT u FROM Usuario u JOIN u.codigorol r WHERE r.codigo = :codigo")
    Optional<Usuario> findByNombreRol(@Param("codigo") int codigo);

}