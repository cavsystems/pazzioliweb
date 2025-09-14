package com.pazzioliweb.commonbacken.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "impuestos")
@Data
public class Impuestos {
	  @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int codigo;
	  private String nombre;
	  private int tarifa;
	  private int base;
	  private String estado;
	  public void setEstado(String estado) {
		this.estado = estado;
	}
	  public int getCodigo() {
		return codigo;
	}
	  public void setCodigo(int codigo) {
		  this.codigo = codigo;
	  }
	  public String getNombre() {
		  return nombre;
	  }
	  public void setNombre(String nombre) {
		  this.nombre = nombre;
	  }
	  public int getTarifa() {
		  return tarifa;
	  }
	  public void setTarifa(int tarifa) {
		  this.tarifa = tarifa;
	  }
	  public int getBase() {
		  return base;
	  }
	  public void setBase(int base) {
		  this.base = base;
	  }
	  public String getSigla() {
		  return sigla;
	  }
	  public void setSigla(String sigla) {
		  this.sigla = sigla;
	  }
	  private String sigla;
}
