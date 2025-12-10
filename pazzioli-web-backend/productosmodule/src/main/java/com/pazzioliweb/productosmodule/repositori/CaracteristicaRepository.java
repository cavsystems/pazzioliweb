package com.pazzioliweb.productosmodule.repositori;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.pazzioliweb.productosmodule.dtos.CaracteristicaDTO;
import com.pazzioliweb.productosmodule.entity.Caracteristica;

public interface CaracteristicaRepository extends JpaRepository<Caracteristica, Long>{
	Page<Caracteristica> findByTipoTipoCaracteristicaId(Long tipoId, Pageable pageable);
	
	@Query("""
		    SELECT new com.pazzioliweb.productosmodule.dtos.CaracteristicaDTO(
        c.caracteristicaId AS caracteristicaId,
        c.nombre AS nombre,
        
       t
    ) 
		    FROM Caracteristica c 
		    JOIN c.tipo t
		    WHERE t.nombre = :tipo
		      AND c.nombre LIKE CONCAT('%', :ca, '%')
		""")
	Page<CaracteristicaDTO> traerCaracteristicasDetalle(  @Param("ca") String ca,
	        @Param("tipo") String tipo,Pageable pageable);
	
	
}
