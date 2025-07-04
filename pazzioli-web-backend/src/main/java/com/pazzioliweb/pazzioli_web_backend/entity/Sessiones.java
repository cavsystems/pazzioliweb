package com.pazzioliweb.pazzioli_web_backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Sessiones {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long codigo;
    
    @Column(nullable = false,length = 50)
    private long codigoUsuario;

    @Column(length = 20)
    private String estado;

    @Column(length = 20)
    private String fechaInicio;

    @Column(length = 20)
    private String fechaFin;
}
