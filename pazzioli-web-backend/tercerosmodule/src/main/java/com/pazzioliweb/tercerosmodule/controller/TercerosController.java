package com.pazzioliweb.tercerosmodule.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
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
import com.pazzioliweb.tercerosmodule.dtos.TerceroResumenDTO;
import com.pazzioliweb.tercerosmodule.service.TercerosService;
@Component
@RestController
@RequestMapping("/api/terceros")
public class TercerosController {
	private final TercerosService terceroService;
    
    @Autowired
    public TercerosController(TercerosService terceroService) {
        this.terceroService = terceroService;
    }

    /*
     * Listado Basico para panel consulta terceros.
     * 
     */
    @GetMapping("/listarTercerosBasicos")
    public ResponseEntity<Map<String, Object>> listarTodosBasico(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "terceroId") String sortField,
            @RequestParam(defaultValue = "asc") String sortDirection) {
          System.out.println("metodo listar tercero");

          Page<TerceroResumenDTO> tercerosPage = terceroService.listarTerceroBasicos(page, size, sortField, sortDirection);

        Map<String, Object> response = new HashMap<>();
        response.put("content", tercerosPage.getContent());
        response.put("currentPage", tercerosPage.getNumber());
        response.put("totalItems", tercerosPage.getTotalElements());
        response.put("totalPages", tercerosPage.getTotalPages());

        return ResponseEntity.ok(response);
    }
    
    /*
     * Listado Completo para consulta de terceros, trae todo los detalles.
     * 
     */
    @GetMapping("/listar")
    public ResponseEntity<Map<String, Object>> listar() {
        System.out.println("Método listar terceros ejecutado");

        List<TerceroDTOImpl> terceros = terceroService.listarTercerosConDetalles();

        Map<String, Object> response = new HashMap<>();
        response.put("content", terceros);
        response.put("totalItems", terceros.size());

        return ResponseEntity.ok(response);
    }
    
    /*
     * Listado de terceros basicos, por filtro que aplica para identificacion o razonSocial.
     * 
     */
    @GetMapping("/buscar")
    public ResponseEntity<Map<String, Object>> buscar(
    		@RequestParam String termino,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "terceroId") String sortField,
            @RequestParam(defaultValue = "asc") String sortDirection) {

        Page<TerceroResumenDTO> tercerosPage = terceroService.buscar(termino,page, size, sortField, sortDirection);

        Map<String, Object> response = new HashMap<>();
        response.put("content", tercerosPage.getContent());
        response.put("currentPage", tercerosPage.getNumber());
        response.put("totalItems", tercerosPage.getTotalElements());
        response.put("totalPages", tercerosPage.getTotalPages());

        return ResponseEntity.ok(response);
    }
    
    /*
     * Trae un tercero con datos completos, por id.
     * 
     */
    @GetMapping("/{id}")
    public ResponseEntity<TerceroDTOImpl> obtenerPorId(@PathVariable Integer id) {
        return terceroService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    
    /*
     * Crea un tercero con los datos que se envien.
     * 
     */
    @PostMapping("/crear")
    public ResponseEntity<TerceroDTOImpl> crear(@RequestBody TerceroDTOImpl terceroDTO) {
        return ResponseEntity.ok(terceroService.guardar(terceroDTO));
    }

    /*
     * Actualiza un tercero con los datos que se envien, por id.
     * 
     */    
    @PutMapping("/actualizar/{id}")
    public ResponseEntity<TerceroDTOImpl> actualizar(@PathVariable Integer id, @RequestBody TerceroDTOImpl dto) {
        return ResponseEntity.ok(terceroService.actualizar(id, dto));
    }
    
    /*
     * Elimina un tercero, por id.
     * 
     */
    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<Map<String, Object>> eliminar(@PathVariable Integer id) {
        terceroService.eliminar(id);
        Map<String, Object> response = new HashMap<>();
        response.put("mensaje", "Tercero eliminado correctamente");
        response.put("id", id);
        return ResponseEntity.ok(response);
    }
}
