package com.pazzioliweb.tercerosmodule.dtos;

import com.pazzioliweb.tercerosmodule.entity.ClasificacionTercero;

public class ClasificacionTerceroDTOImpl implements ClasificacionTerceroDTO {
    private Integer clasificacionTerceroId;
    private String nombre;

    public static ClasificacionTerceroDTOImpl fromEntity(ClasificacionTercero entity) {
        ClasificacionTerceroDTOImpl dto = new ClasificacionTerceroDTOImpl();
        dto.clasificacionTerceroId = entity.getClasificacionTerceroId();
        dto.nombre = entity.getNombre();
        return dto;
    }

    @Override public Integer getClasificacionTerceroId() { return clasificacionTerceroId; }
    @Override public String getNombre() { return nombre; }
}