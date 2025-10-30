package com.pazzioliweb.usuariosbacken.dtos;



public class CrearusuarioDTOS {
    private String nombre;

    public CrearusuarioDTOS() {} // 👈 constructor vacío obligatorio

    public CrearusuarioDTOS(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; } // 👈 setter obligatorio
}

