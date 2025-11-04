package com.pazzioliweb.productosmodule.entity;

import java.util.ArrayList;
import java.util.List;

import com.pazzioliweb.commonbacken.entity.Impuestos;
import com.pazzioliweb.usuariosbacken.entity.Usuario;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
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
    @Column(name = "producto_id")
    private Integer productoId;

    @Column(name = "codigo_contable")
    private String codigoContable;

    @Column(name = "codigo_barras")
    private String codigoBarras;

    private String referencia;
    private String descripcion;
    private Double costo;

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

    @Column(name = "fecha_creacion")
    private String fechaCreacion;

    @Column(name = "codigo_usuario_modifico")
    private Integer codigoUsuarioModifico;

    @Column(name = "fecha_modificacion")
    private String fechaModificacion;

    private String estado;

    @Column(name = "fecha_ultima_venta")
    private String fechaUltimaVenta;

    @Column(name = "fecha_ultima_compra")
    private String fechaUltimaCompra;
	
	@OneToMany(mappedBy = "producto", cascade = CascadeType.ALL, orphanRemoval = false)
    private List<Existencias> existencias = new ArrayList<>();
	
	
	
	public Integer getProductoId() {
		return productoId;
	}

	public void setProductoId(Integer productoId) {
		this.productoId = productoId;
	}

	public String getCodigoContable() {
		return codigoContable;
	}

	public void setCodigoContable(String codigoContable) {
		this.codigoContable = codigoContable;
	}

	public String getCodigoBarras() {
		return codigoBarras;
	}

	public void setCodigoBarras(String codigoBarras) {
		this.codigoBarras = codigoBarras;
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

	public Double getCosto() {
		return costo;
	}

	public void setCosto(Double costo) {
		this.costo = costo;
	}

	public String getFechaCreacion() {
		return fechaCreacion;
	}

	public void setFechaCreacion(String fechaCreacion) {
		this.fechaCreacion = fechaCreacion;
	}

	public Integer getCodigoUsuarioModifico() {
		return codigoUsuarioModifico;
	}

	public void setCodigoUsuarioModifico(Integer codigoUsuarioModifico) {
		this.codigoUsuarioModifico = codigoUsuarioModifico;
	}

	public String getFechaModificacion() {
		return fechaModificacion;
	}

	public void setFechaModificacion(String fechaModificacion) {
		this.fechaModificacion = fechaModificacion;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public String getFechaUltimaVenta() {
		return fechaUltimaVenta;
	}

	public void setFechaUltimaVenta(String fechaUltimaVenta) {
		this.fechaUltimaVenta = fechaUltimaVenta;
	}

	public String getFechaUltimaCompra() {
		return fechaUltimaCompra;
	}

	public void setFechaUltimaCompra(String fechaUltimaCompra) {
		this.fechaUltimaCompra = fechaUltimaCompra;
	}

	public void setImpuestos(Impuestos impuestos) {
		this.impuestos = impuestos;
	}

	public void setLinea(Lineas linea) {
		this.linea = linea;
	}

	public void setGrupo(Grupos grupo) {
		this.grupo = grupo;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public List<Existencias> getExistencias() {return existencias;}
    public void setExistencias(List<Existencias> existencias) {this.existencias = existencias;}
    
    public Impuestos getImpuestos() { return impuestos; }
    public Lineas getLinea() { return linea; }
    public Grupos getGrupo() { return grupo; }
    public Usuario getUsuario() { return usuario; }
}
