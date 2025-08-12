package com.pazzioliweb.empresaback.dtos;

import java.util.List;

import org.springframework.stereotype.Component;

import com.pazzioliweb.empresasback.entyti.Actividadeconomica;
import com.pazzioliweb.usuriosbacken.entyti.Tipoidentificacion;
import com.pazzioliweb.usuriosbacken.entyti.Tipopersona;
@Component
public class Datosempresa {
	private List<Tipopersona> tipopersona;
    private List<Tipoidentificacion> tipoidentificacion;
   

	public List<Tipoidentificacion> getTipoidentificacion() {
		return tipoidentificacion;
	}

	public void setTipoidentificacion(List<Tipoidentificacion> tipoidentificacion) {
		this.tipoidentificacion = tipoidentificacion;
	}

	public List<Tipopersona> getTipopersona() {
		return tipopersona;
	}

	public void setTipopersona(List<Tipopersona> tipopersona) {
		this.tipopersona = tipopersona;
	}
	

}
