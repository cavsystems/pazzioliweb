package com.pazzioliweb.productosmodule.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.pazzioliweb.commonbacken.dtos.response.PaginationResponse;
import com.pazzioliweb.productosmodule.dtos.ProductoInventarioDTO;
import com.pazzioliweb.productosmodule.dtos.ProductoVarianteConDetallesDTO;
import com.pazzioliweb.productosmodule.dtos.ProductoVarianteCreateDTO;
import com.pazzioliweb.productosmodule.dtos.ProductoVarianteResponseDTO;
import com.pazzioliweb.productosmodule.dtos.ProductoVarianteUpdateDTO;
import com.pazzioliweb.productosmodule.entity.ProductoVariante;
import com.pazzioliweb.productosmodule.service.ProductoVarianteService;

@RestController
@RequestMapping("/api/variantes")
public class ProductoVarianteController {

    private final ProductoVarianteService varianteService;

    public ProductoVarianteController(ProductoVarianteService varianteService) {
        this.varianteService = varianteService;
    }

    // -------------------------------------------------------
    // CRUD BÁSICO
    // -------------------------------------------------------

    @PostMapping("/crear-por-dto")
    public ResponseEntity<ProductoVarianteResponseDTO> crear(
            @RequestBody ProductoVarianteCreateDTO dto) {
        return ResponseEntity.ok(varianteService.crear(dto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProductoVarianteResponseDTO> actualizar(
            @PathVariable Long id,
            @RequestBody ProductoVarianteUpdateDTO dto
    ) {
        return ResponseEntity.ok(varianteService.actualizar(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        varianteService.eliminar(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductoVariante> obtener(@PathVariable Long id) {
        return ResponseEntity.ok(varianteService.buscarPorId(id));
    }

    // -------------------------------------------------------
    // LISTADO GENERAL (CON ESTÁNDAR DE PAGINACIÓN)
    // -------------------------------------------------------

    @GetMapping("/listar")
    public ResponseEntity<PaginationResponse<ProductoVarianteResponseDTO>> listar(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "productoVarianteId") String sortField,
            @RequestParam(defaultValue = "asc") String sortDirection
    ) {

        Sort sort = sortDirection.equalsIgnoreCase("asc")
                ? Sort.by(sortField).ascending()
                : Sort.by(sortField).descending();

        Pageable pageable = PageRequest.of(page, size, sort);

        Page<ProductoVarianteResponseDTO> resultado =
                varianteService.listar(pageable);

        return ResponseEntity.ok(PaginationResponse.of(resultado));
    }

    // -------------------------------------------------------
    // LISTADO POR PRODUCTO (MISMO ESTÁNDAR)
    // -------------------------------------------------------

    @GetMapping("/producto/{productoId}")
    public ResponseEntity<PaginationResponse<ProductoVarianteResponseDTO>> listarPorProducto(
            @PathVariable Integer productoId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "productoVarianteId") String sortField,
            @RequestParam(defaultValue = "asc") String sortDirection
    ) {

        Sort sort = sortDirection.equalsIgnoreCase("asc")
                ? Sort.by(sortField).ascending()
                : Sort.by(sortField).descending();

        Pageable pageable = PageRequest.of(page, size, sort);

        Page<ProductoVarianteResponseDTO> resultado =
                varianteService.listarPorProducto(productoId, pageable);

        return ResponseEntity.ok(PaginationResponse.of(resultado));
    }
    
    @GetMapping("/listarInventarioBasico")
    public ResponseEntity<PaginationResponse<ProductoInventarioDTO>> listarInventarioBasico(
        	@RequestParam(defaultValue = "0") int page,
        	@RequestParam(defaultValue = "10") int size,
        	@RequestParam(defaultValue = "varianteId") String sortField,
        	@RequestParam(defaultValue = "asc") String sortDirection
    ){
    	Sort sort = sortDirection.equalsIgnoreCase("asc")
                ? Sort.by(sortField).ascending()
                : Sort.by(sortField).descending();

        Pageable pageable = PageRequest.of(page, size, sort);

        Page<ProductoInventarioDTO> resultado =
                varianteService.listarInventarioBasico(pageable);

        return ResponseEntity.ok(PaginationResponse.of(resultado));
    }
    
    @GetMapping("/detalles-producto/{productoId}")
    public ResponseEntity<PaginationResponse<ProductoVarianteConDetallesDTO>> listarConDetallesPorProducto(
            @PathVariable Integer productoId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "productoVarianteId") String sortField,
            @RequestParam(defaultValue = "asc") String sortDirection
    ) {

        Sort sort = sortDirection.equalsIgnoreCase("asc")
                ? Sort.by(sortField).ascending()
                : Sort.by(sortField).descending();

        Pageable pageable = PageRequest.of(page, size, sort);

        Page<ProductoVarianteConDetallesDTO> resultado =
                varianteService.listarConDetallesPorProducto(productoId, pageable);

        return ResponseEntity.ok(PaginationResponse.of(resultado));
    }
}