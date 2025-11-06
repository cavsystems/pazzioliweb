package com.pazzioliweb.empresaback.dtos;

import com.pazzioliweb.empresasback.entity.Regimen;

public class RegimenDTOImpl implements com.pazzioliweb.empresaback.dtos.RegimenDTO {

    private Integer regimenId;
    private String codigoRegimen;
    private String nombre;
    private String estado;

    public static RegimenDTOImpl fromEntity(Regimen r) {
        if (r == null) return null;
        RegimenDTOImpl dto = new RegimenDTOImpl();
        dto.regimenId = r.getCodigo();
        dto.codigoRegimen = r.getCodigoRegimen();
        dto.nombre = r.getDescripcion();
        dto.estado = r.getEstado();
        return dto;
    }

    @Override
    public Integer getCodigo() {
        return regimenId;
    }
    
    @Override
    public String getCodigoRegimen() {
        return codigoRegimen;
    }
    
    @Override
    public String getDescripcion() {
        return nombre;
    }
    
    @Override
    public String getEstado() {
        return estado;
    }
}
