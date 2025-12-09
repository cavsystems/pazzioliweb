package com.pazzioliweb.productosmodule.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pazzioliweb.commonbacken.dtos.response.PaginationResponse;
import com.pazzioliweb.productosmodule.dtos.CaracteristicaDTO;
import com.pazzioliweb.productosmodule.entity.Caracteristica;
import com.pazzioliweb.productosmodule.service.CaracteristicaService;

@RestController
@RequestMapping("/api/caracteristicas")
public class CaracteristicaController {
	
	private final CaracteristicaService service;

    public CaracteristicaController(CaracteristicaService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Caracteristica> crear(@RequestBody Caracteristica c) {
        return ResponseEntity.ok(service.crear(c));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Caracteristica> actualizar(
            @PathVariable Long id,
            @RequestBody Caracteristica c
    ) {
        return ResponseEntity.ok(service.actualizar(id, c));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        service.eliminar(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Caracteristica> obtener(@PathVariable Long id) {
        return ResponseEntity.ok(service.buscarPorId(id));
    }

    @GetMapping("/listar")
    public ResponseEntity<PaginationResponse<Caracteristica>> listar(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "caracteristicaId") String sortField,
            @RequestParam(defaultValue = "asc") String sortDirection
    ) {

        Sort sort = sortDirection.equalsIgnoreCase("asc")
                ? Sort.by(sortField).ascending()
                : Sort.by(sortField).descending();

        Pageable pageable = PageRequest.of(page, size, sort);

        Page<Caracteristica> resultado = service.listar(pageable);

        return ResponseEntity.ok(PaginationResponse.of(resultado));
    }

    @GetMapping("/tipo/{tipoId}")
    public ResponseEntity<PaginationResponse<Caracteristica>> listarPorTipo(
            @PathVariable Long tipoId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "caracteristicaId") String sortField,
            @RequestParam(defaultValue = "asc") String sortDirection
    ) {

        Sort sort = sortDirection.equalsIgnoreCase("asc")
                ? Sort.by(sortField).ascending()
                : Sort.by(sortField).descending();

        Pageable pageable = PageRequest.of(page, size, sort);

        Page<Caracteristica> resultado = service.listarPorTipo(tipoId, pageable);

        return ResponseEntity.ok(PaginationResponse.of(resultado));
    }
    
    @GetMapping("/listar-detalle")
    public ResponseEntity<PaginationResponse<CaracteristicaDTO>> listarCaracteristicasDetalle(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "caracteristicaId") String sortField,
            @RequestParam(defaultValue = "asc") String sortDirection
    ) {

        Sort sort = sortDirection.equalsIgnoreCase("asc")
                ? Sort.by(sortField).ascending()
                : Sort.by(sortField).descending();

        Pageable pageable = PageRequest.of(page, size, sort);

        Page<CaracteristicaDTO> resultado = service.traerCaracteristicasDetale(pageable);

        return ResponseEntity.ok(PaginationResponse.of(resultado));
    }
}
