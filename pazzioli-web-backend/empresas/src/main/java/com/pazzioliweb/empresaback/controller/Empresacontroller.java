package com.pazzioliweb.empresaback.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pazzioliweb.commonbacken.services.TenantService;
import com.pazzioliweb.empresaback.dtos.EmpresaResponseauth;



@Component
@RestController
@RequestMapping("/api/empresa")
public class Empresacontroller {
	@Autowired
	  private JdbcTemplate jdbc;
	  @Autowired
	  private TenantService tenantService;

	 @PostMapping("/crear")
	 public ResponseEntity<Void> crearEmpresa(@RequestBody EmpresaResponseauth dto) {
	    	 // Aquí request.db es el tenantId}
		   String schema = dto.getNombreconexion().toLowerCase().replaceAll("[^a-z0-9_]", "");
		   jdbc.execute("CREATE SCHEMA IF NOT EXISTS `" + schema + "`");
		   tenantService.initTenantSchema(schema);
		   return ResponseEntity.status(HttpStatus.CREATED).build();
		 	 }
}
