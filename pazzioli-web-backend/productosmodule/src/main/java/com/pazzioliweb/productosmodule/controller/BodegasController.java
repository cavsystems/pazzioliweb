package com.pazzioliweb.productosmodule.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pazzioliweb.commonbacken.dtos.response.ApiResponse;
import com.pazzioliweb.productosmodule.dtos.BodegaDTO;
import com.pazzioliweb.productosmodule.dtos.ProductoDTO;
import com.pazzioliweb.productosmodule.entity.Bodegas;
import com.pazzioliweb.productosmodule.service.BodegasService;
import com.pazzioliweb.productosmodule.service.ProductosService;

@RestController
@RequestMapping("/api/bodegas")
public class BodegasController {
	@Autowired
	private BodegasService bodegaService;

    @Autowired
    public BodegasController(BodegasService bodegaService) {
        this.bodegaService = bodegaService;
    }
    
    @GetMapping("/listar")
    public ResponseEntity<ApiResponse<List<Bodegas>>> listar() {
    	List<Bodegas> bodegasListadas = bodegaService.listarBodegas();
    	if(!bodegasListadas.isEmpty()) {
    		return ResponseEntity
    				.ok(ApiResponse.success("Bodegas encontradas",bodegasListadas));
    	}else {
    		System.out.println("no hay bodegas");
    		return ResponseEntity
    			    .status(HttpStatus.OK)
    			    .body(ApiResponse.failure("No hay Bodegas disponibles"));
    	} 
    }
}
