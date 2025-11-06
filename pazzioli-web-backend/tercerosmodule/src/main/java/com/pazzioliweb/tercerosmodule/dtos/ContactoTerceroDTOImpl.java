package com.pazzioliweb.tercerosmodule.dtos;

import com.pazzioliweb.tercerosmodule.entity.ContactoTercero;
import com.pazzioliweb.tercerosmodule.entity.TipoContacto;

public class ContactoTerceroDTOImpl implements ContactoTerceroDTO {

    private Integer contactoId;
    private String valorContacto;
    private Boolean esPrincipal;
    private TipoContactoInfo tipoContacto;

    // ------------------ Método de conversión ------------------
    public static ContactoTerceroDTOImpl fromEntity(ContactoTercero contacto) {
        ContactoTerceroDTOImpl dto = new ContactoTerceroDTOImpl();
        dto.contactoId = contacto.getContactoId();
        dto.valorContacto = contacto.getValorContacto();
        dto.esPrincipal = contacto.getEsPrincipal();
        dto.tipoContacto = contacto.getTipoContacto() != null
                ? new TipoContactoInfoImpl(contacto.getTipoContacto())
                : null;
        return dto;
    }

    // ------------------ Getters ------------------
    @Override public Integer getContactoId() { return contactoId; }
    @Override public String getValorContacto() { return valorContacto; }
    @Override public Boolean getEsPrincipal() { return esPrincipal; }
    @Override public TipoContactoInfo getTipoContacto() { return tipoContacto; }

    // ------------------ Implementación interna del TipoContactoInfo ------------------
    private static class TipoContactoInfoImpl implements TipoContactoInfo {
        private Integer tipoContactoId;
        private String nombre;

        public TipoContactoInfoImpl(TipoContacto tipo) {
            this.tipoContactoId = tipo.getTipoContactoId();
            this.nombre = tipo.getNombre();
        }

        @Override public Integer getTipoContactoId() { return tipoContactoId; }
        @Override public String getNombre() { return nombre; }
    }
}