package com.pazzioliweb.pazzioli_web_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pazzioliweb.pazzioli_web_backend.entity.Usuario;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Optional<Usuario> findByLogin(String login);
}
