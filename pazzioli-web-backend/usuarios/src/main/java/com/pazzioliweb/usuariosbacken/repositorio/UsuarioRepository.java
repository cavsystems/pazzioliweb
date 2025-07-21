package com.pazzioliweb.usuariosbacken.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pazzioliweb.usuriosbacken.entyti.Usuario;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Optional<Usuario> findByLogin(String login);
}