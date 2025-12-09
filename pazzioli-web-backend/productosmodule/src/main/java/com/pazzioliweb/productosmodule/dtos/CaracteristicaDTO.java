package com.pazzioliweb.productosmodule.dtos;

import com.pazzioliweb.productosmodule.entity.TipoCaracteristica;

public interface CaracteristicaDTO {
	Integer getCaracteristicaId();
	String getNombre();
	TipoCaracteristica getTipo();
}
