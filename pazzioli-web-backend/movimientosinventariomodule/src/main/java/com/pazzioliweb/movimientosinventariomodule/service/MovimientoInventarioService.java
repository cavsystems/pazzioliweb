package com.pazzioliweb.movimientosinventariomodule.service;

import com.pazzioliweb.movimientosinventariomodule.dtos.MovimientoDTO;
import com.pazzioliweb.movimientosinventariomodule.entity.MovimientoInventario;

public interface MovimientoInventarioService {
	MovimientoInventario crearEntrada(MovimientoDTO dto);
	MovimientoInventario crearSalida(MovimientoDTO dto);
	MovimientoInventario crearTraslado(MovimientoDTO dto);
	
}
