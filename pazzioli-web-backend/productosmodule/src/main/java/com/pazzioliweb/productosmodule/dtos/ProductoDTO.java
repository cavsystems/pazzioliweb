package com.pazzioliweb.productosmodule.dtos;

import java.time.LocalDateTime;

import com.pazzioliweb.commonbacken.dtos.ImpuestosDTO;
import com.pazzioliweb.productosmodule.entity.Productos;
import com.pazzioliweb.usuariosbacken.dtos.UsuarioDTO;

public class ProductoDTO {

    private Integer productoId;
    private String codigoContable;
    private String codigoBarras;
    private String referencia;
    private String descripcion;
    private Double costo;
    private ImpuestosDTO impuesto;
    private LineaDTO linea;
    private GrupoDTO grupo;
    private UsuarioDTO usuario;
    private LocalDateTime fechaCreacion;
    private Integer codigoUsuarioModifico;
    private String fechaModificacion;
    private String estado;
    private String fechaUltimaVenta;
    private String fechaUltimaCompra;

    public ProductoDTO() {
    }

    public static ProductoDTO fromEntity(Productos producto) {
        if (producto == null) return null;

        ProductoDTO dto = new ProductoDTO();
        dto.productoId = producto.getProductoId();
        dto.codigoContable = producto.getCodigoContable();
        dto.codigoBarras = producto.getCodigoBarras();
        dto.referencia = producto.getReferencia();
        dto.descripcion = producto.getDescripcion();
        dto.costo = producto.getCosto() != null ? producto.getCosto() : 0.0;

        dto.impuesto = producto.getImpuestos() != null ? ImpuestosDTO.fromEntity(producto.getImpuestos()) : null;
        dto.linea = producto.getLinea() != null ? LineaDTO.fromEntity(producto.getLinea()) : null;
        dto.grupo = producto.getGrupo() != null ? GrupoDTO.fromEntity(producto.getGrupo()) : null;
        dto.usuario = producto.getUsuario() != null ? UsuarioDTO.fromEntity(producto.getUsuario()) : null;
        
        dto.setFechaCreacion(producto.getFechaCreacion());
        dto.codigoUsuarioModifico = producto.getCodigoUsuarioModifico() != null ? producto.getCodigoUsuarioModifico() : 0;
        dto.fechaModificacion = producto.getFechaModificacion() != null ? producto.getFechaModificacion() : "";
        dto.estado = producto.getEstado() != null ? producto.getEstado() : "ACTIVO";
        dto.fechaUltimaVenta = producto.getFechaUltimaVenta() != null ? producto.getFechaUltimaVenta() : "";
        dto.fechaUltimaCompra = producto.getFechaUltimaCompra() != null ? producto.getFechaUltimaCompra() : "";

        return dto;
    }

    // ✅ Getters y setters para todos los campos
    public Integer getProductoId() { return productoId; }
    public void setProductoId(Integer productoId) { this.productoId = productoId; }

    public String getCodigoContable() { return codigoContable; }
    public void setCodigoContable(String codigoContable) { this.codigoContable = codigoContable; }

    public String getCodigoBarras() { return codigoBarras; }
    public void setCodigoBarras(String codigoBarras) { this.codigoBarras = codigoBarras; }

    public String getReferencia() { return referencia; }
    public void setReferencia(String referencia) { this.referencia = referencia; }

    public String getDescripcion() { return descripcion; }
    public void setDescripcion(String descripcion) { this.descripcion = descripcion; }

    public Double getCosto() { return costo; }
    public void setCosto(Double costo) { this.costo = costo; }

    public ImpuestosDTO getImpuesto() { return impuesto; }
    public void setImpuesto(ImpuestosDTO impuesto) { this.impuesto = impuesto; }

    public LineaDTO getLinea() { return linea; }
    public void setLinea(LineaDTO linea) { this.linea = linea; }

    public GrupoDTO getGrupo() { return grupo; }
    public void setGrupo(GrupoDTO grupo) { this.grupo = grupo; }

    public UsuarioDTO getUsuario() { return usuario; }
    public void setUsuario(UsuarioDTO usuario) { this.usuario = usuario; }

    public LocalDateTime getFechaCreacion() { return fechaCreacion; }
    public void setFechaCreacion(LocalDateTime fechaCreacion) { this.fechaCreacion = fechaCreacion; }

    public Integer getCodigoUsuarioModifico() { return codigoUsuarioModifico; }
    public void setCodigoUsuarioModifico(Integer codigoUsuarioModifico) { this.codigoUsuarioModifico = codigoUsuarioModifico; }

    public String getFechaModificacion() { return fechaModificacion; }
    public void setFechaModificacion(String fechaModificacion) { this.fechaModificacion = fechaModificacion; }

    public String getEstado() { return estado; }
    public void setEstado(String estado) { this.estado = estado; }

    public String getFechaUltimaVenta() { return fechaUltimaVenta; }
    public void setFechaUltimaVenta(String fechaUltimaVenta) { this.fechaUltimaVenta = fechaUltimaVenta; }

    public String getFechaUltimaCompra() { return fechaUltimaCompra; }
    public void setFechaUltimaCompra(String fechaUltimaCompra) { this.fechaUltimaCompra = fechaUltimaCompra; }
}

