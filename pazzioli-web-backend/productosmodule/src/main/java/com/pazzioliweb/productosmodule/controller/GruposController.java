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
import com.pazzioliweb.productosmodule.entity.Grupos;
import com.pazzioliweb.productosmodule.service.GruposService;

@RestController
@RequestMapping("/api/grupos")
public class GruposController {
	@Autowired
	private GruposService grupoService;
	
	@Autowired
	public GruposController(GruposService grupoService) {
		this.grupoService = grupoService;
	}
	
	@GetMapping("/listar")
	public ResponseEntity<ApiResponse<List<Grupos>>> listar(){
		List<Grupos> listadoGrupos = grupoService.listarGrupos();
		if(!listadoGrupos.isEmpty()) {
			return ResponseEntity
    				.ok(ApiResponse.success("Grupos encontrados",listadoGrupos));
		}else {
			System.out.println("no hay grupos");
    		return ResponseEntity
    			    .status(HttpStatus.OK)
    			    .body(ApiResponse.failure("No hay grupos disponibles"));
		} 
	}
	
	@PostMapping
	public Grupos guardar(@RequestBody Grupos grupo) {
		return grupoService.guardarGrupo(grupo);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Grupos> buscarPorId(@PathVariable Integer id) {
        return grupoService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
	
	@DeleteMapping("/{id}")
    public void eliminar(@PathVariable Integer id) {
        grupoService.eliminarGrupo(id);
    }
}
