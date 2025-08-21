package com.pazzioliweb.empresasback.entyti;



import com.pazzioliweb.commonbacken.entyti.Departamento;
import com.pazzioliweb.commonbacken.entyti.Municipio;
import com.pazzioliweb.commonbacken.entyti.Pais;
import com.pazzioliweb.empresaback.dtos.EmpresaResponseauth;
import com.pazzioliweb.usuriosbacken.entyti.Roles;

import jakarta.persistence.Column;
import jakarta.persistence.ColumnResult;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SqlResultSetMapping;
import jakarta.persistence.ConstructorResult;
import lombok.Data;

@Entity

@SqlResultSetMapping(
	    name = "EmpresaResponseauthMapping",
	    classes = @ConstructorResult(
	        targetClass = EmpresaResponseauth.class,
	        columns = {
	            @ColumnResult(name = "nombreconexion", type = String.class),
	          
	        }
	    )
	)
@Data
public class Empresas {

	     @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int codigo;
	     

	     
	
		
}
