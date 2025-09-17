package com.pazzioliweb.productosmodule.entity;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.Data;

@Entity
@Data
@Table(
    name = "existencias",
    uniqueConstraints = {
        @UniqueConstraint(name = "uq_existencias_producto_bodega", columnNames = {"producto_id", "bodega_id"})
    }
)
public class Existencias {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "existencia_id")
    private Integer existencia_id;

    // Relación con Producto
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "producto_id", referencedColumnName = "producto_id", nullable = false)
    private Productos producto;

    // Relación con Bodega
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "bodega_id", referencedColumnName = "codigo", nullable = false)
    private Bodegas bodega;

    @Column(name = "existencia", precision = 10, scale = 2)
    private BigDecimal existencia = BigDecimal.ZERO;

    @Column(name = "stock_min", precision = 10, scale = 2)
    private BigDecimal stockMin = BigDecimal.ZERO;

    @Column(name = "stock_max", precision = 10, scale = 2)
    private BigDecimal stockMax = BigDecimal.ZERO;

    @Column(name = "fecha_ultimo_movimiento")
    private LocalDateTime fechaUltimoMovimiento;

    // --- Getters & Setters ---

    public Integer getExistencia_id() {
        return existencia_id;
    }

    public void setId(Integer existencia_id) {
        this.existencia_id = existencia_id;
    }

    public Productos getProducto() {
        return producto;
    }

    public void setProducto(Productos producto) {
        this.producto = producto;
    }

    public Bodegas getBodega() {
        return bodega;
    }

    public void setBodega(Bodegas bodega) {
        this.bodega = bodega;
    }

    public BigDecimal getExistencia() {
        return existencia;
    }

	public void setExistencia(BigDecimal existencia) {
        this.existencia = existencia;
    }

    public BigDecimal getStockMin() {
        return stockMin;
    }

    public void setStockMin(BigDecimal stockMin) {
        this.stockMin = stockMin;
    }

    public BigDecimal getStockMax() {
        return stockMax;
    }

    public void setStockMax(BigDecimal stockMax) {
        this.stockMax = stockMax;
    }

    public LocalDateTime getFechaUltimoMovimiento() {
        return fechaUltimoMovimiento;
    }

    public void setFechaUltimoMovimiento(LocalDateTime fechaUltimoMovimiento) {
        this.fechaUltimoMovimiento = fechaUltimoMovimiento;
    }
}
