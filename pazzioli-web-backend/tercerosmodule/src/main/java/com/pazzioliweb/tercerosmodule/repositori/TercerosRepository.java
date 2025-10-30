package com.pazzioliweb.tercerosmodule.repositori;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.pazzioliweb.tercerosmodule.dtos.TerceroDTO;
import com.pazzioliweb.tercerosmodule.entity.Terceros;

@Repository
public interface TercerosRepository extends JpaRepository<Terceros, Integer>{
	Optional<Terceros> findByIdentificacion(String identificacion);
	
	@Query("""
		    SELECT 
		        t.terceroId AS terceroId,
		        t.identificacion AS identificacion,
		        t.dv AS dv,
		        t.nombre1 AS nombre1,
		        t.nombre2 AS nombre2,
		        t.apellido1 AS apellido1,
		        t.apellido2 AS apellido2,
		        t.razonSocial AS razonSocial,
		        t.direccion AS direccion,
		        t.contactos AS contactos,
		        t.correo AS correo,
		        t.plazo AS plazo,
		        t.cupo AS cupo,
		        ti AS tipoIdentificacion,
		         c AS clasificacionTercero,
		         p as precio,
		         r as regimen
		    FROM Terceros t
		    LEFT JOIN t.tipoIdentificacion ti
		    LEFT JOIN t.clasificacionTercero c
		    LEFT JOIN t.precio p
		    LEFT JOIN t.regimen r
		    """)
	Page<TerceroDTO> traerTerceros(Pageable pageable);
}
