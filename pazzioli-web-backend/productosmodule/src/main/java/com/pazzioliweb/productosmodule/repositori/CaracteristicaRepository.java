package com.pazzioliweb.productosmodule.repositori;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.pazzioliweb.productosmodule.dtos.CaracteristicaDTO;
import com.pazzioliweb.productosmodule.entity.Caracteristica;

public interface CaracteristicaRepository extends JpaRepository<Caracteristica, Long>{
	Page<Caracteristica> findByTipoTipoCaracteristicaId(Long tipoId, Pageable pageable);
	
	@Query("""
		    SELECT c FROM Caracteristica c LEFT JOIN FETCH c.tipo
		""")
	Page<CaracteristicaDTO> traerCaracteristicasDetalle(Pageable pageable);
}
