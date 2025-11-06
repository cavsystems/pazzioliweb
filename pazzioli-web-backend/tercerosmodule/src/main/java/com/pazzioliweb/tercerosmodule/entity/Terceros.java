package com.pazzioliweb.tercerosmodule.entity;

import java.util.ArrayList;
import java.util.List;

import com.pazzioliweb.commonbacken.entity.Tipoidentificacion;
import com.pazzioliweb.empresasback.entity.Regimen;
import com.pazzioliweb.productosmodule.entity.Precios;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "terceros")
@Data
public class Terceros {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tercero_id")
    private Integer terceroId;
	
	@ManyToOne
	@JoinColumn(name = "tipo_identificacion_id")
    private Tipoidentificacion tipoIdentificacion;

    @Column(name = "identificacion", nullable = false, length = 100)
    private String identificacion;

    @Column(name = "dv", length = 20)
    private String dv;

    @Column(name = "nombre_1", length = 100)
    private String nombre1;

    @Column(name = "nombre_2", length = 100)
    private String nombre2;

    @Column(name = "apellido_1", length = 100)
    private String apellido1;

    @Column(name = "apellido_2", length = 100)
    private String apellido2;

    @Column(name = "razon_social", length = 100)
    private String razonSocial;

    @Column(name = "direccion", length = 100)
    private String direccion;
    
    @Column(name = "plazo", nullable = false)
    private Integer plazo = 0;

    @Column(name = "cupo", nullable = false)
    private Integer cupo = 0;
    
    @ManyToOne
    @JoinColumn(name = "regimen_id")
    private Regimen regimen;
    
    @ManyToOne
    @JoinColumn(name = "clasificacion_tercero_id")
    private ClasificacionTercero clasificacionTercero;
    
    @ManyToOne
    @JoinColumn(name = "precio_id")
    private Precios precio;
    
	public Integer getTerceroId() {
		return terceroId;
	}

	public void setTerceroId(Integer terceroId) {
		this.terceroId = terceroId;
	}

	public Tipoidentificacion getTipoIdentificacion() {
		return tipoIdentificacion;
	}

	public void setTipoIdentificacion(Tipoidentificacion tipoIdentificacion) {
		this.tipoIdentificacion = tipoIdentificacion;
	}

	public String getIdentificacion() {
		return identificacion;
	}

	public void setIdentificacion(String identificacion) {
		this.identificacion = identificacion;
	}

	public String getDv() {
		return dv;
	}

	public void setDv(String dv) {
		this.dv = dv;
	}

	public String getNombre1() {
		return nombre1;
	}

	public void setNombre1(String nombre1) {
		this.nombre1 = nombre1;
	}

	public String getNombre2() {
		return nombre2;
	}

	public void setNombre2(String nombre2) {
		this.nombre2 = nombre2;
	}

	public String getApellido1() {
		return apellido1;
	}

	public void setApellido1(String apellido1) {
		this.apellido1 = apellido1;
	}

	public String getApellido2() {
		return apellido2;
	}

	public void setApellido2(String apellido2) {
		this.apellido2 = apellido2;
	}

	public String getRazonSocial() {
		return razonSocial;
	}

	public void setRazonSocial(String razonSocial) {
		this.razonSocial = razonSocial;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public Integer getPlazo() {
		return plazo;
	}

	public void setPlazo(Integer plazo) {
		this.plazo = plazo;
	}

	public Integer getCupo() {
		return cupo;
	}

	public void setCupo(Integer cupo) {
		this.cupo = cupo;
	}
	
	
	public Regimen getRegimen() {
		return regimen;
	}

	public void setRegimen(Regimen regimen) {
		this.regimen = regimen;
	}

	public ClasificacionTercero getClasificacionTercero() {
		return clasificacionTercero;
	}

	public void setClasificacionTercero(ClasificacionTercero clasificacionTercero) {
		this.clasificacionTercero = clasificacionTercero;
	}

	public Precios getPrecio() {
		return precio;
	}

	public void setPrecio(Precios precio) {
		this.precio = precio;
	}
	
	@OneToMany(mappedBy = "tercero", fetch = FetchType.LAZY)
    private List<ContactoTercero> contactos = new ArrayList<>();

    @OneToMany(mappedBy = "tercero", fetch = FetchType.LAZY)
    private List<SedeTercero> sedes = new ArrayList<>();

	public List<ContactoTercero> getContactos() {
		return contactos;
	}

	public void setContactos(List<ContactoTercero> contactos) {
		this.contactos = contactos;
	}

	public List<SedeTercero> getSedes() {
		return sedes;
	}

	public void setSedes(List<SedeTercero> sedes) {
		this.sedes = sedes;
	}
}
