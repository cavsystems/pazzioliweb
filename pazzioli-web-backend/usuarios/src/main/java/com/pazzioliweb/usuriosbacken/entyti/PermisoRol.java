package com.pazzioliweb.usuriosbacken.entyti;

import java.util.Date;
import java.util.List;

import io.micrometer.observation.transport.Propagator.Getter;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "permisos_roles")
public class PermisoRol{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int codigo;
	/*
	@OneToMany(mappedBy = "codigopermiso")
	private List<Permisos> permisos;
	
	
	 @OneToMany(mappedBy= "codigorol")
	private List<Roles> Roles;*/
	 
	 @ManyToOne
	 @JoinColumn(name = "codigo_permiso")
	 private Permiso permiso;

	 @ManyToOne
	 @JoinColumn(name = "codigo_rol")
	 private Roles rol;
	 
	 private String estado;

	 public int getCodigo() {
		 return codigo;
	 }


	 public void setCodigo(int codigo) {
		 this.codigo = codigo;
	 }

	 public Permiso getPermiso() {
		 return permiso;
	 }
	 
	 public void setPermiso(Permiso permiso) {
		 this.permiso=permiso;
	 }
	 
	 public Roles getRol() {
		 return rol;
	 }
	 
	 public void setRol(Roles rol) {
		 this.rol=rol;
	 }
	 
	 public String getEstado() {
		 return estado;
	 }
	 
	 public void setEstado(String estado) {
		 this.estado=estado;
	 }
}