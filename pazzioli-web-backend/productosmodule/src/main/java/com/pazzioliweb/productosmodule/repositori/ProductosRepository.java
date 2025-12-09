package com.pazzioliweb.productosmodule.repositori;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.pazzioliweb.productosmodule.entity.Productos;

public interface ProductosRepository extends JpaRepository<Productos, Integer>{
	
	boolean existsByCodigoContableAndProductoIdNot(String codigoContable, Integer productoId);
	boolean existsByCodigoBarrasAndProductoIdNot(String codigoBarras, Integer productoId);
	
	boolean existsByCodigoContable(String codigoContable);
	boolean existsByCodigoBarras(String codigoBarras);
	
	@EntityGraph(attributePaths = {
		    "grupo",
		    "linea",
		    "impuestos",
		    "usuario"
		})
		@Query("SELECT p FROM Productos p WHERE p.productoId = :id")
		Optional<Productos> findByIdWithRelations(@Param("id") Integer id);
	
	@EntityGraph(attributePaths = {
		    "impuestos",
		    "linea",
		    "grupo",
		    "usuario"
		})
		@Query("SELECT p FROM Productos p")
		Page<Productos> traerProductos(Pageable pageable);
	
	@EntityGraph(attributePaths = {
		    "impuestos",
		    "linea",
		    "grupo",
		    "usuario"
		})
		@Query("""
		    SELECT p FROM Productos p
		    WHERE p.descripcion LIKE %:busqueda%
		       OR p.codigoContable LIKE %:busqueda%
		       OR p.codigoBarras LIKE %:busqueda%
		       OR p.referencia LIKE %:busqueda%
		""")
		Page<Productos> traerProductosXFiltro(@Param("busqueda") String busqueda, Pageable pageable);
}
