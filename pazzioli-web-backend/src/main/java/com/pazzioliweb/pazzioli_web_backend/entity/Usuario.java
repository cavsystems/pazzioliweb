package com.pazzioliweb.pazzioli_web_backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "usuario")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long codigo;

    @Column(nullable = false, length = 50)
    private String nombre;

    @Column(nullable = false, unique = true, length = 50)
    private String login;

    @Column(nullable = false)
    @JsonIgnore
    private String password;

    @Column(length = 20)
    private long nivel;

    @Column(length = 20)
    private String estado;
}