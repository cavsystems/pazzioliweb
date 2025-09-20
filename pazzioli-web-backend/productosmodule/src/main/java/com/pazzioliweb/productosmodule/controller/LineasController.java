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
import com.pazzioliweb.productosmodule.entity.Lineas;
import com.pazzioliweb.productosmodule.service.LineasService;

@RestController
@RequestMapping("/api/lineas")
public class LineasController {
	@Autowired
	private LineasService lineaService;
	
	@Autowired
	public LineasController(LineasService LineaService) {
		this.lineaService = lineaService;
	}
	
	@GetMapping("/listar")
	public ResponseEntity<ApiResponse<List<Lineas>>> listar(){
		List<Lineas> listadoLineas = lineaService.listarLineas();
		if(!listadoLineas.isEmpty()) {
			return ResponseEntity
    				.ok(ApiResponse.success("Lineas encontradas",listadoLineas));
		}else {
			System.out.println("no hay lineas");
    		return ResponseEntity
    			    .status(HttpStatus.OK)
    			    .body(ApiResponse.failure("No hay lineas disponibles"));
		} 
	}
	
	@PostMapping
	public Lineas guardar(@RequestBody Lineas linea) {
		return lineaService.guardarLinea(linea);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Lineas> buscarPorId(@PathVariable Integer id) {
        return lineaService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
	
	@DeleteMapping("/{id}")
    public void eliminar(@PathVariable Integer id) {
        lineaService.eliminarLinea(id);
    }
}
