package com.pazzioliweb.commonbacken.entyti;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "municipios")
@Data
public class Municipio {
	  @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int codigo;
	  
	  private String municipio;

	  public int getCodigo() {
		  return codigo;
	  }

	  public void setCodigo(int codigo) {
		  this.codigo = codigo;
	  }

	  public String getMunicipio() {
		  return municipio;
	  }

	  public void setMunicipio(String municipio) {
		  this.municipio = municipio;
	  }
}
