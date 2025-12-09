package com.pazzioliweb.productosmodule.repositori;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.pazzioliweb.productosmodule.entity.Existencias;

public interface ExistenciasRepository extends JpaRepository<Existencias, Integer> {
	Page<Existencias> findByProductoVariante_ProductoVarianteId(Integer varianteId, Pageable pageable);
	
	Optional<Existencias> findByProductoVarianteProductoVarianteIdAndBodegaCodigo(Long varianteId, Integer bodegaId);

    Page<Existencias> findByBodega_Codigo(Integer bodegaId, Pageable pageable);
}
