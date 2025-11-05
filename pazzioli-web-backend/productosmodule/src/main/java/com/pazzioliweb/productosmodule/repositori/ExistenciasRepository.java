package com.pazzioliweb.productosmodule.repositori;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.pazzioliweb.productosmodule.dtos.ExistenciaDTO;
import com.pazzioliweb.productosmodule.entity.Existencias;

public interface ExistenciasRepository extends JpaRepository<Existencias, Integer> {
	
	@Query("""
	        SELECT 
	            e.existencia_id AS existenciaId,
	            p.productoId AS productoId,
	            p.descripcion AS productoDescripcion,
	            p.codigoContable AS productoCodigoContable,
	            b.codigo AS bodegaCodigo,
	            b.nombre AS bodegaNombre,
	            e.existencia AS existencia,
	            e.stockMin AS stockMin,
	            e.stockMax AS stockMax,
	            e.fechaUltimoMovimiento AS fechaUltimoMovimiento,
	            e.ubicacion AS ubicacion
	        FROM Existencias e
	        JOIN e.producto p
	        JOIN e.bodega b
	        """)
	    List<ExistenciaDTO> findAllExistencias();

	    @Query("""
	        SELECT 
	            e.existencia_id AS existenciaId,
	            p.productoId AS productoId,
	            p.descripcion AS productoDescripcion,
	            p.codigoContable AS productoCodigoContable,
	            b.codigo AS bodegaCodigo,
	            b.nombre AS bodegaNombre,
	            e.existencia AS existencia,
	            e.stockMin AS stockMin,
	            e.stockMax AS stockMax,
	            e.fechaUltimoMovimiento AS fechaUltimoMovimiento,
	            e.ubicacion AS ubicacion
	        FROM Existencias e
	        JOIN e.producto p
	        JOIN e.bodega b
	        WHERE b.codigo = :bodegaId
	        """)
	    List<ExistenciaDTO> findByBodega(@Param("bodegaId") Integer bodegaId);

	    @Query("""
	        SELECT 
	            e.existencia_id AS existenciaId,
	            p.productoId AS productoId,
	            p.descripcion AS productoDescripcion,
	            p.codigoContable AS productoCodigoContable,
	            b.codigo AS bodegaCodigo,
	            b.nombre AS bodegaNombre,
	            e.existencia AS existencia,
	            e.stockMin AS stockMin,
	            e.stockMax AS stockMax,
	            e.fechaUltimoMovimiento AS fechaUltimoMovimiento,
	            e.ubicacion AS ubicacion
	        FROM Existencias e
	        JOIN e.producto p
	        JOIN e.bodega b
	        WHERE p.productoId = :productoId
	        """)
	    List<ExistenciaDTO> findByProducto(@Param("productoId") Integer productoId);
}
