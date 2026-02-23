package com.pazzioliweb.comprasmodule.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.math.BigDecimal;

@Data
@Entity
@Table(name = "detalles_orden_compra")
public class DetalleOrdenCompra {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "orden_compra_id", nullable = false)
    private OrdenCompra ordenCompra;
    
    @Column(nullable = false)
    private String codigoProducto;

    @Column(nullable = false)
    private String codigoBarras;
    
    @Column(nullable = false)
    private String descripcionProducto;

    @Column(nullable = false)
    private String observacionProducto;
    
    @Column(nullable = false)
    private Integer cantidad;
    
    @Column(nullable = false)
    private BigDecimal precioUnitario;
    
    @Column(nullable = false)
    private BigDecimal descuento = BigDecimal.ZERO;
    
    @Column(nullable = false)
    private BigDecimal iva;
    
    @Column(nullable = false)
    private BigDecimal total;
    
    @Column(nullable = false)
    private boolean recibido = false;
    
    private Integer cantidadRecibida = 0;
    
    // Getters y setters generados por Lombok
}
