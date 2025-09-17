package com.pazzioliweb.productosmodule.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "precios_producto")
public class PreciosProducto {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int precios_producto_id;
	@ManyToOne
    @JoinColumn(name = "producto_id", nullable = false)
    private Productos producto;

    @ManyToOne
    @JoinColumn(name = "precio_id", nullable = false)
    private Precios precio;

    @Column(nullable = false)
    private double valor;

    @Column(name = "fecha_creacion")
    private String fechaCreacion;

    @Column(name = "fecha_modificacion")
    private String fechaModificacion;

    @Column(name = "fecha_inicio")
    private String fechaInicio;

    @Column(name = "fecha_fin")
    private String fechaFin;
	
}
