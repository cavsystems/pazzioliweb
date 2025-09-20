package com.pazzioliweb.productosmodule.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pazzioliweb.commonbacken.dtos.response.ApiResponse;
import com.pazzioliweb.productosmodule.entity.Precios;
import com.pazzioliweb.productosmodule.service.PreciosService;

@RestController
@RequestMapping("/api/precios")
public class PreciosController {
	@Autowired
	private PreciosService precioService;
	
	@Autowired
	public PreciosController(PreciosService precioService) {
		this.precioService = precioService;
	}
	
	@GetMapping("/listar")
	public ResponseEntity<ApiResponse<List<Precios>>> listar(){
		List<Precios> listadoPrecios = precioService.listarPrecios();
		if(!listadoPrecios.isEmpty()) {
			return ResponseEntity
    				.ok(ApiResponse.success("Precios encontrados",listadoPrecios));
		}else {
			System.out.println("no hay precios");
    		return ResponseEntity
    			    .status(HttpStatus.OK)
    			    .body(ApiResponse.failure("No hay precios disponibles"));
		} 
	}
	
	@PostMapping
	public Precios guardar(@RequestBody Precios precio) {
		return precioService.guardarPrecio(precio);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Precios> buscarPorId(@PathVariable Integer id) {
        return precioService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
	
	@DeleteMapping("/{id}")
    public void eliminar(@PathVariable Integer id) {
		precioService.eliminarPrecio(id);
    }
}
