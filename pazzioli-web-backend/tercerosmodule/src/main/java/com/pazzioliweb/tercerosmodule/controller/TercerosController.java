package com.pazzioliweb.tercerosmodule.controller;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pazzioliweb.tercerosmodule.dtos.TerceroDTOImpl;
import com.pazzioliweb.tercerosmodule.entity.Terceros;
import com.pazzioliweb.tercerosmodule.service.TercerosService;
import com.pazzioliweb.tercerosmodule.repositori.ClasificacionTerceroRepository;
import com.pazzioliweb.tercerosmodule.entity.ClasificacionTercero;
@Component
@RestController
@RequestMapping("/api/terceros")
public class TercerosController {
	private final TercerosService terceroService;
    
    @Autowired
    public TercerosController(TercerosService terceroService) {
        this.terceroService = terceroService;
    }

    @GetMapping("/listar")
    public ResponseEntity<Map<String, Object>> listar(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sortField,
            @RequestParam(defaultValue = "asc") String sortDirection) {
          System.out.println("metodo listar tercero");
        Page<TerceroDTOImpl> tercerosPage = terceroService.listar(page, size, sortField, sortDirection);

        Map<String, Object> response = new HashMap<>();
        response.put("content", tercerosPage.getContent());
        response.put("currentPage", tercerosPage.getNumber());
        response.put("totalItems", tercerosPage.getTotalElements());
        response.put("totalPages", tercerosPage.getTotalPages());

        return ResponseEntity.ok(response);
    }
    
    @GetMapping("/buscar")
    public ResponseEntity<Map<String, Object>> buscar(
    		@RequestParam String termino,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sortField,
            @RequestParam(defaultValue = "asc") String sortDirection) {

        Page<TerceroDTOImpl> tercerosPage = terceroService.buscar(termino,page, size, sortField, sortDirection);

        Map<String, Object> response = new HashMap<>();
        response.put("content", tercerosPage.getContent());
        response.put("currentPage", tercerosPage.getNumber());
        response.put("totalItems", tercerosPage.getTotalElements());
        response.put("totalPages", tercerosPage.getTotalPages());

        return ResponseEntity.ok(response);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Terceros> obtener(@PathVariable Integer id) {
        return terceroService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/crear")
    public ResponseEntity<Terceros> crear(@RequestBody Terceros tercero) {
        Terceros guardado = terceroService.guardar(tercero);
        return ResponseEntity.status(HttpStatus.CREATED).body(guardado);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Terceros> actualizar(@PathVariable Integer id, @RequestBody Terceros tercero) {
        return terceroService.buscarPorId(id)
                .map(actual -> {
                    tercero.setTerceroId(id);
                    return ResponseEntity.ok(terceroService.guardar(tercero));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Integer id) {
        if (terceroService.buscarPorId(id).isPresent()) {
            terceroService.eliminar(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
