package com.pazzioliweb.productosmodule.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "unidades_medida")
public class UnidadesMedida {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int unidad_medida_id;
	
	private String descripcion;
	private String sigla;
	public int getUnidad_medida_id() {
		return unidad_medida_id;
	}
	public void setUnidad_medida_id(int unidad_medida_id) {
		this.unidad_medida_id = unidad_medida_id;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public String getSigla() {
		return sigla;
	}
	public void setSigla(String sigla) {
		this.sigla = sigla;
	}
}
