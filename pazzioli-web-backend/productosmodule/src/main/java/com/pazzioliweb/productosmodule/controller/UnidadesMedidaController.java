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
import com.pazzioliweb.productosmodule.entity.UnidadesMedida;
import com.pazzioliweb.productosmodule.service.UnidadesMedidaService;

@RestController
@RequestMapping("/api/unidadesMedida")
public class UnidadesMedidaController {
	@Autowired
	private UnidadesMedidaService unidadMedidaService;
	
	@Autowired
	public UnidadesMedidaController(UnidadesMedidaService unidadMedidaService) {
		this.unidadMedidaService = unidadMedidaService;
	}
	
	@GetMapping("/listar")
	public ResponseEntity<ApiResponse<List<UnidadesMedida>>> listar(){
		List<UnidadesMedida> listadoUnidadesMedida = unidadMedidaService.listarUnidadesMedida();
		if(!listadoUnidadesMedida.isEmpty()) {
			return ResponseEntity
    				.ok(ApiResponse.success("UnidadesMedida encontradas",listadoUnidadesMedida));
		}else {
			System.out.println("no hay unidadesMedida");
    		return ResponseEntity
    			    .status(HttpStatus.OK)
    			    .body(ApiResponse.failure("No hay unidadesMedida disponibles"));
		} 
	}
	
	@PostMapping
	public UnidadesMedida guardar(@RequestBody UnidadesMedida unidadMedida) {
		return unidadMedidaService.guardarUnidadesMedida(unidadMedida);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<UnidadesMedida> buscarPorId(@PathVariable Integer id) {
        return unidadMedidaService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
	
	@DeleteMapping("/{id}")
    public void eliminar(@PathVariable Integer id) {
		unidadMedidaService.eliminarUnidadMedida(id);
    }
}
