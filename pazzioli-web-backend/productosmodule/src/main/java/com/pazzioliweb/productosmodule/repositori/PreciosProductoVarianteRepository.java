package com.pazzioliweb.productosmodule.repositori;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.pazzioliweb.productosmodule.dtos.PreciosProductoVarianteDTO;
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
	
	@Query(
	  		  value = """
	  		        SELECT
	  		  			pp.valor,
	  		  			pp.producto_variantes_id as productoVarianteId,
	  		  		    pp.precios_producto_id as productoVarianteId,
	  		  		    p.precio_id as precioId,
	  		  		    p.descripcion
	  		        FROM precios_producto_variante as pp
	  		        JOIN precios p ON p.precio_id = pp.precio_id
	  		        WHERE pp.producto_variantes_id = :varianteId
	  		        """,
	  		  countQuery = "SELECT COUNT(*) FROM precios_producto_variante",
	  		  nativeQuery = true
	  		)
	    Page<PreciosProductoVarianteDTO> preciosPrpductoVariante(@Param("varianteId")  Integer varianteId, Pageable pageable);
	

}
