package com.pazzioliweb.productosmodule.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "lineas")

public class Lineas {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int linea_id;
	
	private String descripcion;

	public int getLinea_id() {
		return linea_id;
	}

	public void setLinea_id(int linea_id) {
		this.linea_id = linea_id;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	
	
}
