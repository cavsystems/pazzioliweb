package com.pazzioliweb.commonbacken.conexiondb;

import org.springframework.stereotype.Component;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
//allowPublicKeyRetrieval lo especificamos en la url mas que todo cuando tranbajmos con mysql 8 en a delante
@Component
public class ConexionFactory {
	 public static ConexionDinamica crearConexion(String nombreConexion) {
	        HikariConfig config = new HikariConfig();
	         /*config.setJdbcUrl("jdbc:mysql://127.0.0.1:3307/" + nombreConexion +
	        		  "?administrador&serverTimezone=America/Bogota");*/
<<<<<<< HEAD
	        config.setJdbcUrl("jdbc:mysql://localhost:3307/" + nombreConexion);
=======
	        config.setJdbcUrl("jdbc:mysql://localhost:3323/" + nombreConexion);
>>>>>>> 6949860acdf8af06fb10f8aeb821e878bb95b627
	        config.setUsername("root");
	        config.setPassword("135790Juan*");
	        config.setDriverClassName("com.mysql.cj.jdbc.Driver");

	        HikariDataSource dataSource = new HikariDataSource(config);
	        return new ConexionDinamica(dataSource);
	    }
}
