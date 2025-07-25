package com.pazzioliweb.empresasback.entyti;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Empresas {

	     @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int id;
	    
	    public int getId() {
			return id;
		}

		 public void setId(int id) {
			 this.id = id;
		 }

		 public String getCodigoUsuario() {
			 return codigoUsuario;
		 }

		 public void setCodigoUsuario(String codigoUsuario) {
			 this.codigoUsuario = codigoUsuario;
		 }

		@Column(name = "nombreconexion", nullable = false, length = 50)    
	    private String codigoUsuario;
	
	    
		
	
	
		
}
