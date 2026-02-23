package com.pazzioliweb.comprasmodule.repository;

import com.pazzioliweb.comprasmodule.dtos.EstadisticasProveedorDTO;
import com.pazzioliweb.comprasmodule.dtos.EstadisticasPorEstadoDTO;
import com.pazzioliweb.comprasmodule.entity.OrdenCompra;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.domain.PageRequest;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;


public interface OrdenCompraRepository extends JpaRepository<OrdenCompra, Long> {
    
    Optional<OrdenCompra> findByNumeroOrden(String numeroOrden);
    
    @Query("SELECT o FROM OrdenCompra o WHERE " +
           "(:estado IS NULL OR o.estado = :estado) AND " +
           "(:fechaDesde IS NULL OR o.fechaEmision >= :fechaDesde) AND " +
           "(:fechaHasta IS NULL OR o.fechaEmision <= :fechaHasta) AND " +
           "(:proveedorId IS NULL OR o.proveedor.id = :proveedorId)")
    Page<OrdenCompra> buscarConFiltros(
        @Param("estado") String estado,
        @Param("fechaDesde") LocalDate fechaDesde,
        @Param("fechaHasta") LocalDate fechaHasta,
        @Param("proveedorId") Long proveedorId,
        Pageable pageable
    );
    
    @Query("SELECT o FROM OrdenCompra o WHERE o.estado IN ('PENDIENTE', 'RECIBIDA_PARCIAL')")
    List<OrdenCompra> findOrdenesPendientes();
    
    @Query("SELECT COALESCE(SUM(o.total), 0) FROM OrdenCompra o WHERE " +
           "o.bodega.id = :bodegaId AND o.fechaEmision BETWEEN :fechaInicio AND :fechaFin")
    Double sumTotalByPeriodo(
        @Param("bodegaId") Long bodegaId,
        @Param("fechaInicio") LocalDate fechaInicio,
        @Param("fechaFin") LocalDate fechaFin
    );
    
    @Query("SELECT COUNT(o) FROM OrdenCompra o WHERE " +
           "o.bodega.id = :bodegaId AND o.fechaEmision BETWEEN :fechaInicio AND :fechaFin")
    Long countByPeriodo(
        @Param("bodegaId") Long bodegaId,
        @Param("fechaInicio") LocalDate fechaInicio,
        @Param("fechaFin") LocalDate fechaFin
    );
    
    @Query("SELECT NEW com.pazzioliweb.comprasmodule.dtos.EstadisticasPorEstadoDTO(o.estado, COUNT(o)) " +
           "FROM OrdenCompra o WHERE o.bodega.id = :bodegaId AND o.fechaEmision BETWEEN :fechaInicio AND :fechaFin " +
           "GROUP BY o.estado")
    List<EstadisticasPorEstadoDTO> countByEstadoAndPeriodo(
        @Param("bodegaId") Long bodegaId,
        @Param("fechaInicio") LocalDate fechaInicio,
        @Param("fechaFin") LocalDate fechaFin
    );
    
    @Query("SELECT NEW com.pazzioliweb.comprasmodule.dtos.EstadisticasProveedorDTO(" +
           "p.id, p.nombre, COUNT(o), COALESCE(SUM(o.total), 0)) " +
           "FROM OrdenCompra o JOIN o.proveedor p " +
           "WHERE o.bodega.id = :bodegaId AND o.fechaEmision BETWEEN :fechaInicio AND :fechaFin " +
           "GROUP BY p.id, p.nombre " +
           "ORDER BY SUM(o.total) DESC")
    List<EstadisticasProveedorDTO> findTopProveedores(
        @Param("bodegaId") Long bodegaId,
        @Param("fechaInicio") LocalDate fechaInicio,
        @Param("fechaFin") LocalDate fechaFin,
        @Param("limit") int limit,
        Pageable pageable
    );
    
    default List<EstadisticasProveedorDTO> findTopProveedores(
        Long bodegaId, LocalDate fechaInicio, LocalDate fechaFin, int limit) {
        return findTopProveedores(bodegaId, fechaInicio, fechaFin, limit, PageRequest.of(0, limit));
    }

    @Query("SELECT o FROM OrdenCompra o WHERE " +
           "(:bodegaId IS NULL OR o.bodega.id = :bodegaId) AND " +
           "(:proveedorId IS NULL OR o.proveedor.id = :proveedorId) AND " +
           "o.fechaEmision BETWEEN :fechaInicio AND :fechaFin AND " +
           "(:estado IS NULL OR o.estado = :estado)")
    Page<OrdenCompra> findHistorialCompras(
        @Param("bodegaId") Long bodegaId,
        @Param("proveedorId") Long proveedorId,
        @Param("fechaInicio") LocalDate fechaInicio,
        @Param("fechaFin") LocalDate fechaFin,
        @Param("estado") String estado,
        Pageable pageable
    );
}
