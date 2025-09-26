package com.pazzioliweb.productosmodule.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pazzioliweb.commonbacken.dtos.response.ApiResponse;
import com.pazzioliweb.productosmodule.dtos.LineaProductosDTO;
import com.pazzioliweb.productosmodule.dtos.ProductoDTO;
import com.pazzioliweb.productosmodule.dtos.TotalInventarioDTO;
import com.pazzioliweb.productosmodule.dtos.TotallineasDTO;
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
    public ResponseEntity<ApiResponse<Map<String, Object>>> totalesPorLinea(
    		@RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "7") int size,
             @RequestParam(defaultValue = "descripcion") String sortField,
            @RequestParam(defaultValue = "asc") String sortDirection){
    	System.out.println("pagina actual"+page);
    	 int inicio=0;
    	if(page>0) {
    		  inicio = page-1;
    	}
    	
    	 System.out.println("pagina actual"+inicio);
    	 System.out.println("pagina tamaño"+size);
 
    	 
    	 Optional<TotallineasDTO >  totalli=productoService.totallinea();
        
    	Page<LineaProductosDTO> totalesLineas=productoService.totalPorLineasGlobal(inicio,size,sortField,sortDirection);
    	if(!totalesLineas.isEmpty()) {
    		for(LineaProductosDTO totalesli: totalesLineas.getContent()) {
    			System.out.println("pagina actual"+ totalesli.getTotalLinea());
    		}
    		Map<String, Object> response = new HashMap<>();
    		response.put("totalGloballineas", totalli);
            response.put("content", totalesLineas.getContent());      // la lista de resultados
            response.put("currentPage", totalesLineas.getNumber());   // número de página actual
            response.put("totalItems", totalesLineas.getTotalElements()); // total de registros
            response.put("totalPages", totalesLineas.getTotalPages());    // número total de páginas
            return ResponseEntity
            		.ok(ApiResponse.success("Totales por línea obtenidos correctamente", response));
    	}else {
    		System.out.println("no hay datos");
            return ResponseEntity.status(HttpStatus.NO_CONTENT)
                    .body(ApiResponse.failure("No hay datos disponibles"));
    	}
    }
    
    @GetMapping("/totalesPorLineasXBodegas")
    public ResponseEntity<ApiResponse<Map<String, Object>>> totalesPorLineaXBodegas(
    		@RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "7") int size,
            @RequestParam(defaultValue = "descripcion") String sortField,
            @RequestParam(defaultValue = "asc") String sortDirection){
    	
    	Page<LineaProductosDTO> totalesLineas=productoService.totalPorLineasXBodegas(page,size,sortField,sortDirection);
    	if(!totalesLineas.isEmpty()) {
    		Map<String, Object> response = new HashMap<>();
            response.put("content", totalesLineas.getContent());      // la lista de resultados
            response.put("currentPage", totalesLineas.getNumber());   // número de página actual
            response.put("totalItems", totalesLineas.getTotalElements()); // total de registros
            response.put("totalPages", totalesLineas.getTotalPages());    // número total de páginas
            return ResponseEntity
            		.ok(ApiResponse.success("Totales por línea obtenidos correctamente", response));
    	}else {
    		System.out.println("no hay datos");
            return ResponseEntity.status(HttpStatus.NO_CONTENT)
                    .body(ApiResponse.failure("No hay datos disponibles"));
    	}
    }
    
    @GetMapping("/totalesPorLineasXBodega/{bodegaID}")
    public ResponseEntity<ApiResponse<Map<String, Object>>> totalesPorLineaXBodega(
    		@PathVariable Integer bodegaID,
    		@RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "7") int size,
            @RequestParam(defaultValue = "descripcion") String sortField,
            @RequestParam(defaultValue = "asc") String sortDirection){
				int inicio=0;
				System.out.println("bodegamid"+bodegaID);
				if(page>0) {
     		  inicio = page-1;
     	} 
    	Page<LineaProductosDTO> totalesLineas=productoService.totalPorLineasXBodega(bodegaID,inicio,size,sortField,sortDirection);
    	Optional<TotallineasDTO >   totalli=productoService.totallineabodega(bodegaID);
    	if(!totalesLineas.isEmpty()) {
    		Map<String, Object> response = new HashMap<>();
    		response.put("totalGloballineas", totalli);
            response.put("content", totalesLineas.getContent());      // la lista de resultados
            response.put("currentPage", totalesLineas.getNumber());   // número de página actual
            response.put("totalItems", totalesLineas.getTotalElements()); // total de registros
            response.put("totalPages", totalesLineas.getTotalPages());    // número total de páginas
            return ResponseEntity
            		.ok(ApiResponse.success("Totales por línea obtenidos correctamente", response));
    	}else {
    		System.out.println("no hay datos");
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
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

