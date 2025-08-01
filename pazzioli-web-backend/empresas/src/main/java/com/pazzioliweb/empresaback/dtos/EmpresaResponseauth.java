package com.pazzioliweb.empresaback.dtos;

public class EmpresaResponseauth{
	private String nombreconexion;
    

    public EmpresaResponseauth( String  nombreconexion) {
        this.nombreconexion = nombreconexion;
           }


	public String getNombreconexion() {
		return nombreconexion;
	}


	public void setNombreconexion(String nombreconnexion) {
		this.nombreconexion = nombreconnexion;
	}

  
} 
