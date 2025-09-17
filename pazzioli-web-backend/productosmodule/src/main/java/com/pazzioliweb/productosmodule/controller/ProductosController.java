package com.pazzioliweb.productosmodule.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pazzioliweb.commonbacken.dtos.response.ApiResponse;
import com.pazzioliweb.productosmodule.dtos.LineaProductosDTO;
import com.pazzioliweb.productosmodule.dtos.ProductoDTO;
import com.pazzioliweb.productosmodule.dtos.TotalInventarioDTO;
import com.pazzioliweb.productosmodule.entity.Productos;
import com.pazzioliweb.productosmodule.service.ProductosService;

@Component
@RestController
@RequestMapping("/api/productos")
public class ProductosController {
	@Autowired
	private ProductosService productoService;

    @Autowired
    public ProductosController(ProductosService productoService) {
        this.productoService = productoService;
    }

    @GetMapping("/listar")
    public ResponseEntity<ApiResponse<List<ProductoDTO>>> listar() {
    	List<ProductoDTO> productosListados = productoService.listarProductos()
    			.stream()
    	        .map(ProductoDTO::fromEntity)
    	        .toList();
    	if(!productosListados.isEmpty()) {
    		/*for(Productos pro:productosListados) {
    			System.out.println(pro.getCosto());
    			
    		}*/
    		return ResponseEntity
    				.ok(ApiResponse.success("Productos encontrados",productosListados));
    	}else {
    		System.out.println("no hay productos");
    		return ResponseEntity
    			    .status(HttpStatus.OK)
    			    .body(ApiResponse.failure("No hay productos disponibles"));
    	} 
    }

    @PostMapping
    public Productos guardar(@RequestBody Productos producto) {
        return productoService.guardarProducto(producto);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Productos> buscarPorId(@PathVariable Integer id) {
        return productoService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Integer id) {
        productoService.eliminarProducto(id);
    }
    
    @GetMapping("/totalesPorLineasGlobal")
    public ResponseEntity<ApiResponse<List<LineaProductosDTO>>> totalesPorLinea(){
    	List<LineaProductosDTO> totalesLineas=productoService.totalPorLineasGlobal();
    	if(!totalesLineas.isEmpty()) {
            return ResponseEntity
            		.ok(ApiResponse.success("Totales por línea obtenidos correctamente", totalesLineas));
    	}else {
    		System.out.println("no hay datos");
            return ResponseEntity.status(HttpStatus.NO_CONTENT)
                    .body(ApiResponse.failure("No hay datos disponibles"));
    	}
    }
    
    @GetMapping("/totalesPorLineasXBodegas")
    public ResponseEntity<ApiResponse<List<LineaProductosDTO>>> totalesPorLineaXBodegas(){
    	List<LineaProductosDTO> totalesLineas=productoService.totalPorLineasXBodegas();
    	if(!totalesLineas.isEmpty()) {
            return ResponseEntity
            		.ok(ApiResponse.success("Totales por línea obtenidos correctamente", totalesLineas));
    	}else {
    		System.out.println("no hay datos");
            return ResponseEntity.status(HttpStatus.NO_CONTENT)
                    .body(ApiResponse.failure("No hay datos disponibles"));
    	}
    }
    
    @GetMapping("/totalesPorLineasXBodega/{bodegaID}")
    public ResponseEntity<ApiResponse<List<LineaProductosDTO>>> totalesPorLineaXBodega(@PathVariable Integer bodegaID){
    	List<LineaProductosDTO> totalesLineas=productoService.totalPorLineasXBodega(bodegaID);
    	if(!totalesLineas.isEmpty()) {
            return ResponseEntity
            		.ok(ApiResponse.success("Totales por línea obtenidos correctamente", totalesLineas));
    	}else {
    		System.out.println("no hay datos");
            return ResponseEntity.status(HttpStatus.NO_CONTENT)
                    .body(ApiResponse.failure("No hay datos disponibles"));
    	}
    }
    
    @GetMapping("/totalInventarioGlobal")
    public ResponseEntity<ApiResponse<Optional<TotalInventarioDTO>>> totalInventarioGlobal(){
    	Optional<TotalInventarioDTO> totales=productoService.totalInventarioGlobal();
    	if(!totales.isEmpty()) {
            return ResponseEntity
            		.ok(ApiResponse.success("Totales por línea obtenidos correctamente", totales));
    	}else {
    		System.out.println("no hay datos");
            return ResponseEntity.status(HttpStatus.NO_CONTENT)
                    .body(ApiResponse.failure("No hay datos disponibles"));
    	}
    }
    
    @GetMapping("/totalInventarioXBodega/{bodegaID}")
    public ResponseEntity<ApiResponse<Optional<TotalInventarioDTO>>> totalInventarioXBodega(@PathVariable Integer bodegaID){
    	Optional<TotalInventarioDTO> totales=productoService.totalInventarioXBodega(bodegaID);
    	if(!totales.isEmpty()) {
            return ResponseEntity
            		.ok(ApiResponse.success("Totales por línea obtenidos correctamente", totales));
    	}else {
    		System.out.println("no hay datos");
            return ResponseEntity.status(HttpStatus.NO_CONTENT)
                    .body(ApiResponse.failure("No hay datos disponibles"));
    	}
    }

}
