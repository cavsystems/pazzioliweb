package com.pazzioliweb.commonbacken.entyti;



import java.sql.Date;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Data;

@Entity
@Data
public class Sesiones {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long codigo;
    
    @Column(name = "codigoUsuario", nullable = false, length = 50)    
    private long codigoUsuario;

    
	public long getCodigo() {
		return codigo;
	}

	public void setCodigo(long codigo) {
		this.codigo = codigo;
	}

	public long getCodigoUsuario() {
		return codigoUsuario;
	}

	public void setCodigoUsuario(long codigoUsuario) {
		this.codigoUsuario = codigoUsuario;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	
	public LocalDateTime getFechaInicio() {
		return fechaInicio;
	}

	public void setFechaInicio(LocalDateTime fechaInicio) {
		this.fechaInicio = fechaInicio;
	}

	public LocalDateTime getFechaFin() {
		return fechaFin;
	}

	public void setFechaFin(LocalDateTime fechaFin) {
		this.fechaFin = fechaFin;
	}


	@Column(length = 20)
    private String estado;
	
    @Column(length = 20)
   
    private LocalDateTime fechaInicio;

    @Column(length = 20)
   
    private LocalDateTime fechaFin;
}
