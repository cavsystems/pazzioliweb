package com.pazzioliweb.commonbacken.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.pazzioliweb.commonbacken.entity.Impuestos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ImpuestosDTO {
	@JsonProperty
	private Integer codigo;
	@JsonProperty
    private String nombre;
	@JsonProperty
    private double tarifa;
	@JsonProperty
    private double base;
	@JsonProperty
    private String sigla;
	@JsonProperty
    private String estado;
	
	public ImpuestosDTO() {
        // Constructor vacío necesario para Jackson
    }
	
    public ImpuestosDTO(Integer codigo, String nombre, double tarifa, double base, String sigla, String estado) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.tarifa = tarifa;
        this.base = base;
        this.sigla = sigla;
        this.estado = estado;
    }
    
    public static ImpuestosDTO fromEntity(Impuestos impuesto) {
        return impuesto != null ? new ImpuestosDTO(
        		impuesto.getCodigo(), 
        		impuesto.getNombre(), 
        		impuesto.getTarifa(), 
        		impuesto.getBase(), 
        		impuesto.getSigla(),
        		impuesto.getEstado()
        		) : null;
    }
}
