package com.pazzioliweb.productosmodule.repositori;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pazzioliweb.productosmodule.entity.PreciosProductoVariante;

public interface PreciosProductoVarianteRepository extends JpaRepository<PreciosProductoVariante, Long> {
	boolean existsByProductoVariante_ProductoVarianteIdAndPrecio_PrecioId(
	        Long productoVarianteId,
	        Integer precioId
	);

	Optional<PreciosProductoVariante> findByProductoVariante_ProductoVarianteIdAndPrecio_PrecioId(
	        Long productoVarianteId,
	        Integer precioId
	);
}
