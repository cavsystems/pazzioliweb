package com.pazzioliweb.comprasmodule.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Data
@Entity
@Table(name = "ordenes_compra")
public class OrdenCompra {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String numeroOrden;
    
    @Column(nullable = false)
    private Long proveedorId;
    
    @Column(nullable = false)
    private Long bodegaId;
    
    @Column(nullable = false)
    private LocalDate fechaEmision;
    
    @Column(nullable = false)
    private LocalDate fechaEntregaEsperada;
    
    @Column(nullable = false)
    private String estado; //  por defecto arranque como PENDIENTE, RECIBIDA_PARCIAL, RECIBIDA, ANULADA
    
    @Column(columnDefinition = "TEXT")
    private String observaciones;

    @Column(nullable = false)
    private BigDecimal gravada = BigDecimal.ZERO;

    @Column(nullable = false)
    private BigDecimal iva = BigDecimal.ZERO;

    @Column(nullable = false)
    private BigDecimal descuentos = BigDecimal.ZERO;
    
    @Column(nullable = false)
    private BigDecimal totalOrdenCompra = BigDecimal.ZERO;
    
    @OneToMany(mappedBy = "ordenCompra", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<DetalleOrdenCompra> items;
    
    @Column(nullable = false)
    private String usuarioCreacion;
    
    @Column(nullable = false)
    private LocalDate fechaCreacion = LocalDate.now();
    
    // Getters y setters generados por Lombok
}
