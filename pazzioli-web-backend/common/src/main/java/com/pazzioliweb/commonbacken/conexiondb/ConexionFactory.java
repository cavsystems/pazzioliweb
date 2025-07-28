package com.pazzioliweb.commonbacken.conexiondb;

import org.springframework.stereotype.Component;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
@Component
public class ConexionFactory {
	 public static ConexionDinamica crearConexion(String nombreConexion) {
	        HikariConfig config = new HikariConfig();
	        config.setJdbcUrl("jdbc:mysql://localhost:3306/" + nombreConexion);
	        config.setUsername("root");
	        config.setPassword("root125");
	        config.setDriverClassName("com.mysql.cj.jdbc.Driver");

	        HikariDataSource dataSource = new HikariDataSource(config);
	        return new ConexionDinamica(dataSource);
	    }
}
