package com.pazzioliweb.productosmodule.repositori;


import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.pazzioliweb.productosmodule.dtos.LineaProductosDTO;
import com.pazzioliweb.productosmodule.dtos.TotalInventarioDTO;
import com.pazzioliweb.productosmodule.entity.Productos;

public interface ProductosRespitori  extends JpaRepository<Productos,Integer> {
	List<Productos> findByDescripcionContainingIgnoreCase(String descripcion);
	 
	@Query("""
			SELECT 
	        sum(p.costo * x.existencia) AS total,
	        sum(x.existencia) as cantidadTotal,
	        'GLOBAL' AS bodega
		    FROM Productos p
		    JOIN p.existencias x
		    JOIN x.bodega b
			""")
		Optional<TotalInventarioDTO> getTotalInventarioProductosGlobal();
		
		@Query("""
				SELECT 
		        sum(p.costo * x.existencia) AS total,
		        sum(x.existencia) as cantidadTotal,
		        b.nombre AS bodega
			    FROM Productos p
			    JOIN p.existencias x
				JOIN x.bodega b
				WHERE b.codigo = :bodegaId 
				""")
			Optional<TotalInventarioDTO> getTotalInventarioProductosXBodega(@Param("bodegaId")Integer bodedaId);
	
	@Query("select l.descripcion as descripcion, sum(p.costo * x.existencia) as totalLinea,sum(x.existencia) as cantidadLinea, 'GLOBAL' as bodega " +
		       "from Productos p " +
		       "join p.linea l " +
		       "join p.existencias x " +
		       "group by l.descripcion")
		List<LineaProductosDTO> getTotalesPorLineaGlobal();
	
	@Query("""
		    SELECT 
	        l.descripcion AS descripcion,
	        sum(p.costo * x.existencia) AS totalLinea,
	        sum(x.existencia) as cantidadLinea,
	        b.nombre AS bodega
		    FROM Productos p
		    JOIN p.linea l
		    JOIN p.existencias x
		    JOIN x.bodega b
		    GROUP BY l.descripcion, b.nombre
		""")
		List<LineaProductosDTO> getTotalesPorLineaXBodegas();
	
	@Query("""
			SELECT 
	        l.descripcion AS descripcion,
	        sum(p.costo * x.existencia) AS totalLinea,
	        sum(x.existencia) as cantidadLinea,
	        b.nombre AS bodega
		    FROM Productos p
		    JOIN p.linea l
		    JOIN p.existencias x
		    JOIN x.bodega b
		    WHERE b.codigo = :bodegaId 
		    GROUP BY l.descripcion
			""")
		List<LineaProductosDTO> getTotalesPorLineaXBodega(@Param("bodegaId")Integer bodedaId);
}