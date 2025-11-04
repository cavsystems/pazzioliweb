package com.pazzioliweb.productosmodule.dtos;

import com.pazzioliweb.productosmodule.entity.Grupos;

public class GrupoDTO {
	private Integer id;
    private String descripcion;

    public GrupoDTO(Integer id, String descripcion) {
        this.id = id;
        this.descripcion = descripcion;
    }

    public static GrupoDTO fromEntity(Grupos grupo) {
        return grupo != null ? new GrupoDTO(grupo.getId(), grupo.getDescripcion()) : null;
    }
    
    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public String getDescripcion() { return descripcion; }
    public void setDescripcion(String descripcion) { this.descripcion = descripcion; }
}
