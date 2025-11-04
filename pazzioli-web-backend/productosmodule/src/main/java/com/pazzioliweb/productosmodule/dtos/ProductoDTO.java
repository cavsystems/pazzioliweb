package com.pazzioliweb.productosmodule.dtos;

import com.pazzioliweb.commonbacken.dtos.ImpuestosDTO;
import com.pazzioliweb.productosmodule.entity.Productos;
import com.pazzioliweb.usuariosbacken.dtos.UsuarioDTO;

public class ProductoDTO {
    private int productoId;
    private String codigoContable;
    private String codigoBarras;
    private String referencia;
    private String descripcion;
    private double costo;
    private ImpuestosDTO impuesto;
    private LineaDTO linea;
    private GrupoDTO grupo;
    private UsuarioDTO usuario;
    private String fechaCreacion;
    private int codigoUsuarioModifico;
    private String fechaModificacion;
    private String estado;
    private String fechaUltimaVenta;
    private String fechaUltimaCompra;

    // ✅ Constructor vacío (necesario para Jackson y el método fromEntity)
    public ProductoDTO() {
    }

    // ✅ Constructor completo (si quieres usarlo manualmente)
    public ProductoDTO(int productoId, String codigoContable, String codigoBarras, String referencia,
                       String descripcion, double costo, ImpuestosDTO impuesto, LineaDTO linea, 
                       GrupoDTO grupo, UsuarioDTO usuario, String fechaCreacion, 
                       int codigoUsuarioModifico, String fechaModificacion, String estado, 
                       String fechaUltimaVenta, String fechaUltimaCompra) {
        this.productoId = productoId;
        this.codigoContable = codigoContable;
        this.codigoBarras = codigoBarras;
        this.referencia = referencia;
        this.descripcion = descripcion;
        this.costo = costo;
        this.impuesto = impuesto;
        this.linea = linea;
        this.grupo = grupo;
        this.usuario = usuario;
        this.fechaCreacion = fechaCreacion;
        this.codigoUsuarioModifico = codigoUsuarioModifico;
        this.fechaModificacion = fechaModificacion;
        this.estado = estado;
        this.fechaUltimaVenta = fechaUltimaVenta;
        this.fechaUltimaCompra = fechaUltimaCompra;
    }

    // ✅ Mapper estático para convertir desde la entidad
    public static ProductoDTO fromEntity(Productos producto) {
        if (producto == null) {
            return null;
        }

        ProductoDTO dto = new ProductoDTO();
        dto.productoId = producto.getProductoId();
        dto.codigoContable = producto.getCodigoContable();
        dto.codigoBarras = producto.getCodigoBarras();
        dto.referencia = producto.getReferencia();
        dto.descripcion = producto.getDescripcion();
        dto.costo = producto.getCosto();

        // ✅ Evitar NullPointer si alguna relación está nula
        dto.impuesto = producto.getImpuestos() != null ? ImpuestosDTO.fromEntity(producto.getImpuestos()) : null;
        dto.linea = producto.getLinea() != null ? LineaDTO.fromEntity(producto.getLinea()) : null;
        dto.grupo = producto.getGrupo() != null ? GrupoDTO.fromEntity(producto.getGrupo()) : null;
        dto.usuario = producto.getUsuario() != null ? UsuarioDTO.fromEntity(producto.getUsuario()) : null;

        dto.fechaCreacion = producto.getFechaCreacion();
        dto.codigoUsuarioModifico = producto.getCodigoUsuarioModifico();
        dto.fechaModificacion = producto.getFechaModificacion();
        dto.estado = producto.getEstado();
        dto.fechaUltimaVenta = producto.getFechaUltimaVenta();
        dto.fechaUltimaCompra = producto.getFechaUltimaCompra();
        return dto;
    }

    // ✅ Getters & Setters
    public int getProductoId() {
        return productoId;
    }

    public void setProductoId(int productoId) {
        this.productoId = productoId;
    }

    public String getCodigoContable() {
        return codigoContable;
    }

    public void setCodigoContable(String codigoContable) {
        this.codigoContable = codigoContable;
    }

    public String getCodigoBarras() {
        return codigoBarras;
    }

    public void setCodigoBarras(String codigoBarras) {
        this.codigoBarras = codigoBarras;
    }

    public String getReferencia() {
        return referencia;
    }

    public void setReferencia(String referencia) {
        this.referencia = referencia;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public double getCosto() {
        return costo;
    }

    public void setCosto(double costo) {
        this.costo = costo;
    }

    public ImpuestosDTO getImpuesto() {
        return impuesto;
    }

    public void setImpuesto(ImpuestosDTO impuesto) {
        this.impuesto = impuesto;
    }

    public LineaDTO getLinea() {
        return linea;
    }

    public void setLinea(LineaDTO linea) {
        this.linea = linea;
    }

    public GrupoDTO getGrupo() {
        return grupo;
    }

    public void setGrupo(GrupoDTO grupo) {
        this.grupo = grupo;
    }

    public UsuarioDTO getUsuario() {
        return usuario;
    }

    public void setUsuario(UsuarioDTO usuario) {
        this.usuario = usuario;
    }

    public String getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(String fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public int getCodigoUsuarioModifico() {
        return codigoUsuarioModifico;
    }

    public void setCodigoUsuarioModifico(int codigoUsuarioModifico) {
        this.codigoUsuarioModifico = codigoUsuarioModifico;
    }

    public String getFechaModificacion() {
        return fechaModificacion;
    }

    public void setFechaModificacion(String fechaModificacion) {
        this.fechaModificacion = fechaModificacion;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getFechaUltimaVenta() {
        return fechaUltimaVenta;
    }

    public void setFechaUltimaVenta(String fechaUltimaVenta) {
        this.fechaUltimaVenta = fechaUltimaVenta;
    }

    public String getFechaUltimaCompra() {
        return fechaUltimaCompra;
    }

    public void setFechaUltimaCompra(String fechaUltimaCompra) {
        this.fechaUltimaCompra = fechaUltimaCompra;
    }
}

