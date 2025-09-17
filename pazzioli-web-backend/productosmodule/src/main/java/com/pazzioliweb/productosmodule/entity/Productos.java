package com.pazzioliweb.productosmodule.entity;

import java.util.ArrayList;
import java.util.List;

import com.pazzioliweb.commonbacken.entity.Impuestos;
import com.pazzioliweb.usuariosbacken.entity.Usuario;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "productos")

public class Productos {
	  @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	  	private int producto_id;
	
	private String codigo_contable;
	private String codigo_barras;
	private String referencia;
	private String descripcion;
	private double costo;
	@ManyToOne
	@JoinColumn(name = "impuesto_id", nullable = false)
	private Impuestos impuestos;
	
	@ManyToOne
    @JoinColumn(name = "linea_id", nullable = false)
 	private Lineas linea;

	@ManyToOne
    @JoinColumn(name = "grupo_id", nullable = false)
 	private Grupos grupo;
 
	@ManyToOne
    @JoinColumn(name = "usuario_creo_id", nullable = false)
 	private Usuario usuario;
	
	private String fecha_creacion;
	private int codigo_usuario_modifico;
	private String fecha_modificacion;
	private String estado;
	private String fecha_ultima_venta;
	private String fecha_ultima_compra;
	
	public int getProducto_id() {
		return producto_id;
	}
	public void setProducto_id(int producto_id) {
		this.producto_id = producto_id;
	}
	public String getCodigo_contable() {
		return codigo_contable;
	}
	public void setCodigo_contable(String codigo_contable) {
		this.codigo_contable = codigo_contable;
	}
	public String getCodigo_barras() {
		return codigo_barras;
	}
	public void setCodigo_barras(String codigo_barras) {
		this.codigo_barras = codigo_barras;
	}
	public String getReferencia() {
		return referencia;
	}
	public void setReferencia(String referencia) {
		this.referencia = referencia;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public double getCosto() {
		return costo;
	}
	public void setCosto(double costo) {
		this.costo = costo;
	}
	public String getFecha_creacion() {
		return fecha_creacion;
	}
	public void setFecha_creacion(String fecha_creacion) {
		this.fecha_creacion = fecha_creacion;
	}
	public int getCodigo_usuario_modifico() {
		return codigo_usuario_modifico;
	}
	public void setCodigo_usuario_modifico(int codigo_usuario_modifico) {
		this.codigo_usuario_modifico = codigo_usuario_modifico;
	}
	public String getFecha_modificacion() {
		return fecha_modificacion;
	}
	public void setFecha_modificacion(String fecha_modificacion) {
		this.fecha_modificacion = fecha_modificacion;
	}
	public String getEstado() {
		return estado;
	}
	public void setEstado(String estado) {
		this.estado = estado;
	}
	public String getFecha_ultima_venta() {
		return fecha_ultima_venta;
	}
	public void setFecha_ultima_venta(String fecha_ultima_venta) {
		this.fecha_ultima_venta = fecha_ultima_venta;
	}
	public String getFecha_ultima_compra() {
		return fecha_ultima_compra;
	}
	public void setFecha_ultima_compra(String fecha_ultima_compra) {
		this.fecha_ultima_compra = fecha_ultima_compra;
	}
	
	@OneToMany(mappedBy = "producto", cascade = CascadeType.ALL, orphanRemoval = false)
    private List<Existencias> existencias = new ArrayList<>();
	
	public List<Existencias> getExistencias() {
        return existencias;
    }

    public void setExistencias(List<Existencias> existencias) {
        this.existencias = existencias;
    }
	
	
	 
	
}
