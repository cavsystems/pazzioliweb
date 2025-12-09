package com.pazzioliweb.productosmodule.repositori;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.pazzioliweb.productosmodule.entity.ProductoVarianteDetalle;

public interface ProductoVarianteDetalleRepository extends JpaRepository<ProductoVarianteDetalle, Long>{
	
	@EntityGraph(attributePaths = { "productoVariante", "caracteristica" })
	@Query("SELECT pv FROM ProductoVarianteDetalle pv")
	Page<ProductoVarianteDetalle> traerProductosVariantesDetalles(Pageable pageable);
	
	Page<ProductoVarianteDetalle> findByProductoVariante_ProductoVarianteId(Long varianteId, Pageable pageable);
	
}
