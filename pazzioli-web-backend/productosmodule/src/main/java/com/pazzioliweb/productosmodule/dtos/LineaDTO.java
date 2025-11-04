package com.pazzioliweb.productosmodule.dtos;

import com.pazzioliweb.productosmodule.entity.Lineas;


public class LineaDTO {
	private Integer id;
    private String descripcion;

    public LineaDTO(Integer id, String descripcion) {
        this.id = id;
        this.descripcion = descripcion;
    }

    public static LineaDTO fromEntity(Lineas linea) {
        return linea != null ? new LineaDTO(linea.getId(), linea.getDescripcion()) : null;
    }
    
    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public String getDescripcion() { return descripcion; }
    public void setDescripcion(String descripcion) { this.descripcion = descripcion; }
}
