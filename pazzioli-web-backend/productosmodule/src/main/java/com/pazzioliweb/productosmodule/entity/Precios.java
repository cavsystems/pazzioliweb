package com.pazzioliweb.productosmodule.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "precios")
public class Precios {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int precio_id;
	private String descripcion;
	public int getPrecio_id() {
		return precio_id;
	}
	public void setPrecio_id(int precio_id) {
		this.precio_id = precio_id;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	
	
}
