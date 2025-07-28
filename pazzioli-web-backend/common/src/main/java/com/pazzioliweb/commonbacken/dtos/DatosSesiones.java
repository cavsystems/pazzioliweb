package com.pazzioliweb.commonbacken.dtos;

import java.time.Instant;

//DTO para trabajar colas secciones que se crean

public class DatosSesiones {
	 public String getIdUsuario() {
		return idUsuario;
	}
	public void setIdUsuario(String idUsuario) {
		this.idUsuario = idUsuario;
	}

	public String getDbName() {
		return dbName;
	}
	public void setDbName(String dbName) {
		this.dbName = dbName;
	}
	
	public Instant getCreada() {
		return creada;
	}
	public void setCreada(Instant creada) {
		this.creada = creada;
	}
	public Instant getExpira() {
		return expira;
	}
	public void setExpira(Instant expira) {
		this.expira = expira;
	}
	 public String getLogin() {
		return login;
	}
	public void setLogin(String login) {
		this.login = login;
	}
	 private String idUsuario;
	    private String login;
	    private String dbName;
	    private String nivel;
	    public String getNivel() {
			return nivel;
		}
		public void setNivel(String nivel) {
			this.nivel = nivel;
		}
		private Instant creada;
	    private Instant expira;

}