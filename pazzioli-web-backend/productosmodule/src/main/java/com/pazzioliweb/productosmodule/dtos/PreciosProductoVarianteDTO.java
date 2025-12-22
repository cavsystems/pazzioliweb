package com.pazzioliweb.productosmodule.dtos;

import java.math.BigDecimal;

public interface PreciosProductoVarianteDTO {
	Integer getPreciosProductoId();
	Integer getPrecioVarianteId();
	String getPrecio();
	BigDecimal getValor();
	Integer getPrecioId();
	String getDescripcion();
}
