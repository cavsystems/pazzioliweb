package com.pazzioliweb.tercerosmodule.dtos;

import java.util.List;
import java.util.stream.Collectors;

import com.pazzioliweb.productosmodule.dtos.PrecioDTO;
import com.pazzioliweb.tercerosmodule.entity.Terceros;
import com.pazzioliweb.empresaback.dtos.RegimenDTO;
import com.pazzioliweb.empresaback.dtos.RegimenDTOImpl;

public class TerceroDTOImpl implements com.pazzioliweb.tercerosmodule.dtos.TerceroDTO {

    private Integer terceroId;
    private String identificacion;
    private String dv;
    private String nombre1;
    private String nombre2;
    private String apellido1;
    private String apellido2;
    private String razonSocial;
    private String direccion;
    private Integer plazo;
    private Integer cupo;

    private TipoIdentificacionDTO tipoIdentificacion;
    private ClasificacionTerceroDTO clasificacionTercero;
    private PrecioDTO precio;
    private RegimenDTO regimen;

    private List<ContactoTerceroDTO> contactos;
    private List<SedeTerceroDTO> sedes;

    // ------------------ Método de conversión ------------------
    public static TerceroDTOImpl fromEntity(Terceros t) {
        TerceroDTOImpl dto = new TerceroDTOImpl();
        dto.terceroId = t.getTerceroId();
        dto.identificacion = t.getIdentificacion();
        dto.dv = t.getDv();
        dto.nombre1 = t.getNombre1();
        dto.nombre2 = t.getNombre2();
        dto.apellido1 = t.getApellido1();
        dto.apellido2 = t.getApellido2();
        dto.razonSocial = t.getRazonSocial();
        dto.direccion = t.getDireccion();
        dto.plazo = t.getPlazo();
        dto.cupo = t.getCupo();

        dto.tipoIdentificacion = t.getTipoIdentificacion() != null
                ? TipoIdentificacionDTOImpl.fromEntity(t.getTipoIdentificacion())
                : null;

        dto.clasificacionTercero = t.getClasificacionTercero() != null
                ? ClasificacionTerceroDTOImpl.fromEntity(t.getClasificacionTercero())
                : null;

        dto.precio = t.getPrecio() != null
                ? PrecioDTOImpl.fromEntity(t.getPrecio())
                : null;

        dto.regimen = t.getRegimen() != null
                ? RegimenDTOImpl.fromEntity(t.getRegimen())
                : null;

        dto.contactos = t.getContactos() != null
                ? t.getContactos().stream()
                    .map(ContactoTerceroDTOImpl::fromEntity)
                    .collect(Collectors.toList())
                : null;

        dto.sedes = t.getSedes() != null
                ? t.getSedes().stream()
                    .map(SedeTerceroDTOImpl::fromEntity)
                    .collect(Collectors.toList())
                : null;

        return dto;
    }

    // ------------------ Getters ------------------
    @Override public Integer getTerceroId() { return terceroId; }
    @Override public String getIdentificacion() { return identificacion; }
    @Override public String getDv() { return dv; }
    @Override public String getNombre1() { return nombre1; }
    @Override public String getNombre2() { return nombre2; }
    @Override public String getApellido1() { return apellido1; }
    @Override public String getApellido2() { return apellido2; }
    @Override public String getRazonSocial() { return razonSocial; }
    @Override public String getDireccion() { return direccion; }
    @Override public Integer getPlazo() { return plazo; }
    @Override public Integer getCupo() { return cupo; }

    @Override public TipoIdentificacionDTO getTipoIdentificacion() { return tipoIdentificacion; }
    @Override public ClasificacionTerceroDTO getClasificacionTercero() { return clasificacionTercero; }
    @Override public PrecioDTO getPrecio() { return precio; }
    @Override public RegimenDTO getRegimen() { return regimen; }

    @Override public List<ContactoTerceroDTO> getContactos() { return contactos; }
    @Override public List<SedeTerceroDTO> getSedes() { return sedes; }

    // ------------------ Setters ------------------
    public void setContactos(List<ContactoTerceroDTO> contactos) {
        this.contactos = contactos;
    }

    public void setSedes(List<SedeTerceroDTO> sedes) {
        this.sedes = sedes;
    }
}

