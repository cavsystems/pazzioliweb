package com.pazzioliweb.productosmodule.repositori;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.pazzioliweb.productosmodule.dtos.LineaProductosDTO;
import com.pazzioliweb.productosmodule.dtos.TotalInventarioDTO;
import com.pazzioliweb.productosmodule.entity.ProductoVariante;

public interface ProductoVarianteRepository extends JpaRepository<ProductoVariante, Long> {
	
	boolean existsByCodigoBarrasAndProductoVarianteIdNot(String codigoBarras, Long varianteId);
	
	boolean existsBySku(String sku);
	boolean existsByCodigoBarras(String codigoBarras);
	
	@EntityGraph(attributePaths = { "producto" })
	@Query("SELECT p FROM ProductoVariante p")
	Page<ProductoVariante> traerProductosVariantes(Pageable pageable);
	
	@Query("""
			SELECT new com.pazzioliweb.productosmodule.dtos.TotalInventarioDTO(
		        sum(p.costo * x.existencia) AS total,
		        sum(x.existencia) as cantidadTotal,
		        'GLOBAL' AS bodega
		    )
		    FROM ProductoVariante pv
		    JOIN pv.producto p
		    JOIN pv.existencias x
		    JOIN x.bodega b
			""")
	Optional<TotalInventarioDTO> getTotalInventarioProductosGlobal();
	
	@Query("""
			SELECT new com.pazzioliweb.productosmodule.dtos.TotalInventarioDTO(
		        sum(p.costo * x.existencia) AS total,
		        sum(x.existencia) as cantidadTotal,
		        b.nombre AS bodega
		    )
		    FROM ProductoVariante pv
		    JOIN pv.producto p
		    JOIN pv.existencias x
			JOIN x.bodega b
			WHERE b.codigo = :bodegaId 
			""")
		Optional<TotalInventarioDTO> getTotalInventarioProductosXBodega(@Param("bodegaId")Integer bodedaId);
	
	@Query("""
		    SELECT 
		        l.descripcion AS descripcion,
		        SUM(p.costo * e.existencia) AS totalLinea,
		        SUM(e.existencia) AS cantidadLinea,
		        'GLOBAL' AS bodega
		    FROM ProductoVariante pv
		    JOIN pv.producto p
		    JOIN p.linea l
		    JOIN pv.existencias e
		    GROUP BY l.descripcion
		""")
		Page<LineaProductosDTO> getTotalesPorLineaGlobal(Pageable pageable);
	
	@Query("""
		    SELECT 
		        l.descripcion AS descripcion,
		        SUM(p.costo * e.existencia) AS totalLinea,
		        SUM(e.existencia) AS cantidadLinea,
		        b.nombre AS bodega
		    FROM ProductoVariante pv
		    JOIN pv.producto p
		    JOIN p.linea l
		    JOIN pv.existencias e
		    JOIN e.bodega b
		    WHERE b.codigo = :bodegaId
		    GROUP BY l.descripcion, b.nombre
		""")
		Page<LineaProductosDTO> getTotalesPorLineaXBodega(@Param("bodegaId") Integer bodegaId, Pageable pageable);
	
	@Query("""
		    SELECT 
		        l.descripcion AS descripcion,
		        SUM(p.costo * e.existencia) AS totalLinea,
		        SUM(e.existencia) AS cantidadLinea,
		        b.nombre AS bodega
		    FROM ProductoVariante pv
		    JOIN pv.producto p
		    JOIN p.linea l
		    JOIN pv.existencias e
		    JOIN e.bodega b
		    GROUP BY l.descripcion, b.nombre
		""")
		Page<LineaProductosDTO> getTotalesPorLineaXBodegas(Pageable pageable);
	
	@Query("""
		    SELECT 
		        l.descripcion AS descripcion,
		        SUM(p.costo * e.existencia) AS totalLinea,
		        SUM(e.existencia) AS cantidadLinea,
		        b.nombre AS bodega
		    FROM ProductoVariante pv
		    JOIN pv.producto p
		    JOIN p.linea l
		    JOIN pv.existencias e
		    JOIN e.bodega b
		    GROUP BY l.descripcion, b.nombre
		""")
		List<LineaProductosDTO> getTotalesPorLineaXBodegastotal();
	
	
	Page<ProductoVariante> findByProductoProductoId(Integer productoId, Pageable pageable);
	
}
