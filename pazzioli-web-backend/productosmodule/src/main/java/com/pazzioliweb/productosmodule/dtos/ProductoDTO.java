package com.pazzioliweb.productosmodule.dtos;

import com.pazzioliweb.productosmodule.entity.Productos;

public class ProductoDTO {
	private int productoId;
    private String codigoContable;
    private String codigoBarras;
    private String referencia;
    private String descripcion;
    private double costo;
    private int impuestoId;
    private int lineaId;
    private int grupoId;
    private int usuarioId;
    private String fechaCreacion;
    private int codigoUsuarioModifico;
    private String fechaModificacion;
    private String estado;
    private String fechaUltimaVenta;
    private String fechaUltimaCompra;

    // ✅ Constructor
    public ProductoDTO(int productoId, String codigoContable, String codigoBarras, String referencia,
                       String descripcion, double costo, int impuestoId, int lineaId, int grupoId, int usuarioId,
                       String fechaCreacion, int codigoUsuarioModifico, String fechaModificacion,
                       String estado, String fechaUltimaVenta, String fechaUltimaCompra) {
        this.productoId = productoId;
        this.codigoContable = codigoContable;
        this.codigoBarras = codigoBarras;
        this.referencia = referencia;
        this.descripcion = descripcion;
        this.costo = costo;
        this.impuestoId = impuestoId;
        this.lineaId = lineaId;
        this.grupoId = grupoId;
        this.usuarioId = usuarioId;
        this.fechaCreacion = fechaCreacion;
        this.codigoUsuarioModifico = codigoUsuarioModifico;
        this.fechaModificacion = fechaModificacion;
        this.estado = estado;
        this.fechaUltimaVenta = fechaUltimaVenta;
        this.fechaUltimaCompra = fechaUltimaCompra;
    }

    // ✅ Getters (puedes generarlos automáticamente en tu IDE)
    

    // ✅ Mapper estático para convertir desde la entidad
    public static ProductoDTO fromEntity(Productos producto) {
        return new ProductoDTO(
                producto.getProducto_id(),
                producto.getCodigo_contable(),
                producto.getCodigo_barras(),
                producto.getReferencia(),
                producto.getDescripcion(),
                producto.getCosto(),
                /*producto.getImpuestos() != null ? producto.getImpuestos().getImpuesto_id() : 0,
                producto.getLinea() != null ? producto.getLinea().getLinea_id() : 0,
                producto.getGrupo() != null ? producto.getGrupo().getGrupo_id() : 0,
                producto.getUsuario() != null ? producto.getUsuario().getUsuario_id() : 0,*/
                0,0,0,0,
                producto.getFecha_creacion(),
                producto.getCodigo_usuario_modifico(),
                producto.getFecha_modificacion(),
                producto.getEstado(),
                producto.getFecha_ultima_venta(),
                producto.getFecha_ultima_compra()
        );
    }

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

	public int getImpuestoId() {
		return impuestoId;
	}

	public void setImpuestoId(int impuestoId) {
		this.impuestoId = impuestoId;
	}

	public int getLineaId() {
		return lineaId;
	}

	public void setLineaId(int lineaId) {
		this.lineaId = lineaId;
	}

	public int getGrupoId() {
		return grupoId;
	}

	public void setGrupoId(int grupoId) {
		this.grupoId = grupoId;
	}

	public int getUsuarioId() {
		return usuarioId;
	}

	public void setUsuarioId(int usuarioId) {
		this.usuarioId = usuarioId;
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
