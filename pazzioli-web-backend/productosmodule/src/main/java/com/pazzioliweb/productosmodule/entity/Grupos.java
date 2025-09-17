package com.pazzioliweb.productosmodule.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name ="grupos")
public class Grupos {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int grupo_id;
	
	private String descripcion;

	public int getGrupo_id() {
		return grupo_id;
	}

	public void setGrupo_id(int grupo_id) {
		this.grupo_id = grupo_id;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	
	
}
