package com.pazzioliweb.comprasmodule.controller;

import com.pazzioliweb.comprasmodule.dtos.DetalleOrdenCompraDTO;
import com.pazzioliweb.comprasmodule.dtos.OrdenCompraDTO;
import com.pazzioliweb.comprasmodule.service.OrdenCompraService;
import com.pazzioliweb.comprasmodule.dtos.ItemRecibidoDTO;
import com.pazzioliweb.comprasmodule.dtos.RealizarOrdenRequestDTO;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/api/compras/ordenes-compra")
public class OrdenCompraController {

    private final OrdenCompraService ordenCompraService;

    @Autowired
    public OrdenCompraController(OrdenCompraService ordenCompraService) {
        this.ordenCompraService = ordenCompraService;
    }

    @GetMapping
    public ResponseEntity<Page<OrdenCompraDTO>> buscarConFiltros(
            @RequestParam(required = false) String estado,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fechaDesde,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fechaHasta,
            @RequestParam(required = false) Long proveedorId,
            Pageable pageable) {

        Page<OrdenCompraDTO> resultado = ordenCompraService.buscarConFiltros(
                estado, fechaDesde, fechaHasta, proveedorId, pageable);
        return ResponseEntity.ok(resultado);
    }

    @GetMapping("/pendientes")
    public ResponseEntity<List<OrdenCompraDTO>> obtenerOrdenesPendientes() {
        return ResponseEntity.ok(ordenCompraService.obtenerOrdenesPendientes());
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrdenCompraDTO> obtenerPorId(@PathVariable Long id) {
        return ordenCompraService.obtenerPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/por-numero/{numeroOrden}")
    public ResponseEntity<OrdenCompraDTO> obtenerPorNumeroOrden(@PathVariable String numeroOrden) {
        return ordenCompraService.obtenerPorNumeroOrden(numeroOrden)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/realizar-orden")
    public ResponseEntity<OrdenCompraDTO> realizarOrden(@RequestBody RealizarOrdenRequestDTO request) {
        OrdenCompraDTO ordenCreada = ordenCompraService.realizarOrden(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(ordenCreada);
    }

    @PostMapping
    public ResponseEntity<OrdenCompraDTO> crear(@RequestBody OrdenCompraRequestDTO request) {
        OrdenCompraDTO ordenCreada = ordenCompraService.crear(request.getOrdenCompra());
        return ResponseEntity.status(HttpStatus.CREATED).body(ordenCreada);
    }

    @PutMapping("/{id}")
    public ResponseEntity<OrdenCompraDTO> actualizar(
            @PathVariable Long id,
            @RequestBody OrdenCompraDTO ordenCompraDTO) {
        ordenCompraDTO.setId(id);
        return ResponseEntity.ok(ordenCompraService.actualizar(ordenCompraDTO));
    }

    @PostMapping("/{id}/anular")
    public ResponseEntity<Void> anular(
            @PathVariable Long id,
            @RequestParam String motivo) {
        ordenCompraService.anular(id, motivo);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/{id}/recibir")
    public ResponseEntity<Void> recibirOrden(
            @PathVariable Long id,
            @RequestBody List<ItemRecibidoDTO> itemsRecibidos) {
        ordenCompraService.recibirOrden(id, itemsRecibidos);
        return ResponseEntity.noContent().build();
    }

    // Clases DTO anidadas para las solicitudes
    @Data
    public static class OrdenCompraRequestDTO {
        private OrdenCompraDTO ordenCompra;
        private List<DetalleOrdenCompraDTO> items;

        // Getters y setters
        public OrdenCompraDTO getOrdenCompra() {
            return ordenCompra;
        }

        public void setOrdenCompra(OrdenCompraDTO ordenCompra) {
            this.ordenCompra = ordenCompra;
        }

        public List<DetalleOrdenCompraDTO> getItems() {
            return items;
        }
        public void setItems(List<DetalleOrdenCompraDTO> items) {
            this.items = items;
        }
    }
}
