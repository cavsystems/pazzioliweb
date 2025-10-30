package com.pazzioliweb.facturacionmodule.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "facturas")
@Data
public class Facturas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "factura_id")
    private Integer facturaId;

    @Column(nullable = false)
    private Integer consecutivo;

    @Column(name = "comprobante_id", nullable = false)
    private Integer comprobanteId;

    @Column(name = "tercero_id", nullable = false)
    private Integer terceroId;

    @Column(name = "fecha_creacion", nullable = false, updatable = false)
    private LocalDateTime fechaCreacion;

    @Column(name = "fecha_emision", nullable = false)
    private LocalDate fechaEmision;

    @Column(name = "fecha_vencimiento", nullable = false)
    private LocalDate fechaVencimiento;

    @Column(nullable = false)
    private Integer plazo = 0;

    @Column(name = "usuario_ingreso_id", nullable = false)
    private Integer usuarioIngresoId;

    @Column(name = "fecha_anulo")
    private LocalDateTime fechaAnulo;

    @Column(name = "usuario_anulo_id")
    private Integer usuarioAnuloId;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private EstadoFactura estado = EstadoFactura.ACTIVO;

    @Column(name = "pedido_id")
    private Integer pedidoId;

    @Column(name = "remision_id")
    private Integer remisionId;

    @Column(name = "vendedor_id")
    private Integer vendedorId;

    @Column
    private Double descuento = 0.00;

    @Column(name = "caja_id")
    private Integer cajaId;

    @Column(length = 255)
    private String observaciones;

    @Column
    private Double saldo = 0.00;

    @Column(name = "total_factura")
    private Double totalFactura = 0.00;

    public enum EstadoFactura {
        ACTIVO,
        INACTIVO
    }
    
    @OneToMany(mappedBy = "factura", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<TipoTotalesFacturas> tipoTotales = new HashSet<>();

    @OneToMany(mappedBy = "factura", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<MetodosPagoFacturas> metodosPago = new HashSet<>();
    
}
