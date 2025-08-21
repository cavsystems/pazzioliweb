package com.pazzioliweb;

import org.hibernate.cfg.Environment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import jakarta.annotation.PostConstruct;
@SpringBootApplication
@ComponentScan(basePackages = {
	    "com.pazzioliweb",
	    "com.pazzioliweb.commonbacken",
	    "com.pazzioliweb.authbacken",
	    "com.pazzioliweb.usuariosbacken",
	   
	    
	})

public class PazzioliWebBackendApplication {

	

public static void main(String[] args) {
	
		SpringApplication.run(PazzioliWebBackendApplication.class, args);
	

}

}

