package com.pazzioliweb.pazzioli_web_backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pazzioliweb.pazzioli_web_backend.entity.Sesiones;


public interface SessionRepository  extends  JpaRepository<Sesiones, Long>{
	 Optional<Sesiones> findByCodigoAndCodigoUsuario(long codigo,long CodigoUsuario);
	 Optional<Sesiones> findFirstBycodigoUsuarioAndEstadoOrderByCodigoDesc(long CodigoUsuario,String estado);
}
