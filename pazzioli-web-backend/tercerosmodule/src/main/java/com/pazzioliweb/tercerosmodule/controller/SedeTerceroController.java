package com.pazzioliweb.tercerosmodule.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pazzioliweb.tercerosmodule.dtos.SedeTerceroDTO;
import com.pazzioliweb.tercerosmodule.service.SedeTerceroService;
import com.pazzioliweb.tercerosmodule.entity.SedeTercero;

@RestController
@RequestMapping("/api/sedeTercero")
public class SedeTerceroController {
	private final SedeTerceroService service;
	
	@Autowired
	public SedeTerceroController(SedeTerceroService service) {
		this.service = service;
	}
	
	@GetMapping("/listarPorTerceroId/{id}")
	public ResponseEntity<Map<String, Object>> listarPorTerceroId(
			@PathVariable Integer id,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "sedeId") String sortField,
            @RequestParam(defaultValue = "asc") String sortDirection){
		
		Page<SedeTerceroDTO> sedesTerceroPage = service.listar(id,page, size, sortField, sortDirection);
		
		Map<String, Object> response = new HashMap<>();
        response.put("content", sedesTerceroPage.getContent());
        response.put("currentPage", sedesTerceroPage.getNumber());
        response.put("totalItems", sedesTerceroPage.getTotalElements());
        response.put("totalPages", sedesTerceroPage.getTotalPages());

        return ResponseEntity.ok(response);
	}
}
