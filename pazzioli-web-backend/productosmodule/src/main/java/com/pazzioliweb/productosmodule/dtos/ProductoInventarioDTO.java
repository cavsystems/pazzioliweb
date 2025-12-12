package com.pazzioliweb.productosmodule.dtos;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public interface ProductoInventarioDTO {
	Integer getProductoId();
	String getCodigoContable();
	String getReferencia();
	String getDescripcion();
	Double getCosto();
	String getUnidadMedida();
	String getLinea();
	String getGrupo();
	BigDecimal getCantidadGlobal(); 
	LocalDateTime getFechaUltimaCompra();
	LocalDateTime getFechaUltimaVenta();
}
