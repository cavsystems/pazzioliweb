package com.pazzioliweb.tercerosmodule.dtos;

import com.pazzioliweb.commonbacken.entity.Tipoidentificacion;

public class TipoIdentificacionDTOImpl implements TipoIdentificacionDTO {
    private Integer codigo;
    private Integer codigoTipoIdentificacion;
    private String tipoIdentificacion;

    public static TipoIdentificacionDTOImpl fromEntity(Tipoidentificacion entity) {
        TipoIdentificacionDTOImpl dto = new TipoIdentificacionDTOImpl();
        dto.codigo = entity.getCodigo();
        dto.codigoTipoIdentificacion = entity.getCodigoTipoIdentificacion();
        dto.tipoIdentificacion = entity.getTipoIdentificacion();
        return dto;
    }

    @Override public Integer getCodigo() { return codigo; }
    @Override public Integer getCodigoTipoIdentificacion() { return codigoTipoIdentificacion; }
    @Override public String getTipoIdentificacion() { return tipoIdentificacion; }
}