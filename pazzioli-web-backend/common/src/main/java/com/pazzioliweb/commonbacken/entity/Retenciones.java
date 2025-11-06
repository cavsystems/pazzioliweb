package com.pazzioliweb.commonbacken.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "retenciones")
@Data
public class Retenciones {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int retencion_id;
	 
	 private int codigo;
	 private  String nombre;
	 private double base;
	 private double porcentage;
}
