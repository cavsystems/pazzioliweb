package com.pazzioliweb.productosmodule.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name ="Linea")
public class  Lineas {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int codigo;

}
