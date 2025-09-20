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
import com.pazzioliweb.productosmodule.dtos.ExistenciaDTO;
import com.pazzioliweb.productosmodule.entity.Existencias;
import com.pazzioliweb.productosmodule.service.ExistenciasService;

@RestController
@RequestMapping("/api/existencias")
public class ExistenciasController {
	@Autowired
	private ExistenciasService existenciaService;
	
	@Autowired
	public ExistenciasController(ExistenciasService existenciaService) {
		this.existenciaService = existenciaService;
	}
	
	@GetMapping("/listar")
	public ResponseEntity<ApiResponse<List<ExistenciaDTO>>> listar(){
		try {
			List<ExistenciaDTO> listadoExistencias = existenciaService.listarExistencias();
			if(!listadoExistencias.isEmpty()) {
				return ResponseEntity
	    				.ok(ApiResponse.success("Existencias encontradas",listadoExistencias));
			}else {
				System.out.println("no hay unidadesMedida");
	    		return ResponseEntity
	    			    .status(HttpStatus.OK)
	    			    .body(ApiResponse.failure("No hay existencias disponibles"));
			} 
		} catch (Exception ex) {
	        ex.printStackTrace(); // Para ver el error real en consola
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
	                .body(ApiResponse.failure("Error al listar existencias: " + ex.getMessage()));
	    }
	}
	
	@GetMapping("/listarPorBodega/{bodegaId}")
	public ResponseEntity<ApiResponse<List<ExistenciaDTO>>> listarExistenciasPorBodega(@PathVariable Integer bodegaId){
		List<ExistenciaDTO> listadoExistencias = existenciaService.listarExistenciasXBodega(bodegaId);
		if(!listadoExistencias.isEmpty()) {
			return ResponseEntity
    				.ok(ApiResponse.success("Existencias encontradas",listadoExistencias));
		}else {
			System.out.println("no hay unidadesMedida");
    		return ResponseEntity
    			    .status(HttpStatus.OK)
    			    .body(ApiResponse.failure("No hay existencias disponibles"));
		}
	}
	
	@GetMapping("/listarPorProducto/{productoId}")
	public ResponseEntity<ApiResponse<List<ExistenciaDTO>>> listarExistenciasPorProducto(@PathVariable Integer productoId){
		List<ExistenciaDTO> listadoExistencias = existenciaService.listarExistenciasXProducto(productoId);
		if(!listadoExistencias.isEmpty()) {
			return ResponseEntity
    				.ok(ApiResponse.success("Existencias encontradas",listadoExistencias));
		}else {
			System.out.println("no hay unidadesMedida");
    		return ResponseEntity
    			    .status(HttpStatus.OK)
    			    .body(ApiResponse.failure("No hay existencias disponibles"));
		}
	}
	
	@PostMapping
	public Existencias guardar(@RequestBody Existencias existencia) {
		return existenciaService.guardarExistencia(existencia);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Existencias> buscarPorId(@PathVariable Integer id) {
        return existenciaService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
	
	@DeleteMapping("/{id}")
    public void eliminar(@PathVariable Integer id) {
		existenciaService.eliminarExistencia(id);
    }
}
