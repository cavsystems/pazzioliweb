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
public class PermisosRol{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int codigo;
	
	@OneToMany(mappedBy = "codigopermiso")
	private List<Permisos> permisos;
	
	
	 @OneToMany(mappedBy= "codigorol")
	private List<Roles> Roles;


	 public int getCodigo() {
		 return codigo;
	 }


	 public void setCodigo(int codigo) {
		 this.codigo = codigo;
	 }


	 public List<Permisos> getPermisos() {
		 return permisos;
	 }


	 public void setPermisos(List<Permisos> permisos) {
		 this.permisos = permisos;
	 }


	 public List<Roles> getRoles() {
		 return Roles;
	 }


	 public void setRoles(List<Roles> roles) {
		 Roles = roles;
	 }
	
	
	
	
}