package com.pazzioliweb.tercerosmodule.dtos;

import com.pazzioliweb.commonbacken.entity.Departamento;
import com.pazzioliweb.commonbacken.entity.Municipio;
import com.pazzioliweb.tercerosmodule.entity.SedeTercero;

public class SedeTerceroDTOImpl implements SedeTerceroDTO {

    private Integer sedeId;
    private String nombreSede;
    private String direccion;
    private String telefono;
    private Boolean principal;
    private Boolean activo;
    private DepartamentoInfo departamento;
    private MunicipioInfo municipio;

    // ------------------ Método de conversión ------------------
    public static SedeTerceroDTOImpl fromEntity(SedeTercero sede) {
        SedeTerceroDTOImpl dto = new SedeTerceroDTOImpl();
        dto.sedeId = sede.getSedeId();
        dto.nombreSede = sede.getNombreSede();
        dto.direccion = sede.getDireccion();
        dto.telefono = sede.getTelefono();
        dto.principal = sede.getPrincipal();
        dto.activo = sede.getActivo();
        dto.departamento = sede.getDepartamento() != null
                ? new DepartamentoInfoImpl(sede.getDepartamento())
                : null;
        dto.municipio = sede.getMunicipio() != null
                ? new MunicipioInfoImpl(sede.getMunicipio())
                : null;
        return dto;
    }

    // ------------------ Getters ------------------
    @Override public Integer getSedeId() { return sedeId; }
    @Override public String getNombreSede() { return nombreSede; }
    @Override public String getDireccion() { return direccion; }
    @Override public String getTelefono() { return telefono; }
    @Override public Boolean getPrincipal() { return principal; }
    @Override public Boolean getActivo() { return activo; }
    @Override public DepartamentoInfo getDepartamento() { return departamento; }
    @Override public MunicipioInfo getMunicipio() { return municipio; }

    // ------------------ Implementaciones internas ------------------
    private static class DepartamentoInfoImpl implements DepartamentoInfo {
        private Integer departamentoId;
        private String nombre;

        public DepartamentoInfoImpl(Departamento dep) {
            this.departamentoId = dep.getCodigo();
            this.nombre = dep.getDepartamento();
        }

        @Override public Integer getDepartamentoId() { return departamentoId; }
        @Override public String getNombre() { return nombre; }
    }

    private static class MunicipioInfoImpl implements MunicipioInfo {
        private Integer municipioId;
        private String nombre;

        public MunicipioInfoImpl(Municipio mun) {
            this.municipioId = mun.getCodigo();
            this.nombre = mun.getMunicipio();
        }

        @Override public Integer getMunicipioId() { return municipioId; }
        @Override public String getNombre() { return nombre; }
    }
}