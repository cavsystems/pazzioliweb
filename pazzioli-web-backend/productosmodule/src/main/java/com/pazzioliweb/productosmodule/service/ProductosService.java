package com.pazzioliweb.productosmodule.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.pazzioliweb.productosmodule.repositori.ProductosRespitori;
import com.pazzioliweb.productosmodule.dtos.LineaProductosDTO;
import com.pazzioliweb.productosmodule.dtos.TotalInventarioDTO;
import com.pazzioliweb.productosmodule.entity.Productos;
@Service
public class ProductosService {
	private final ProductosRespitori productoRepositori;

    @Autowired
    public ProductosService(ProductosRespitori productoRepository) {
        this.productoRepositori = productoRepository;
    }

    public List<Productos> listarProductos() {
        return productoRepositori.findAll();
    }

    public Productos guardarProducto(Productos producto) {
        return productoRepositori.save(producto);
    }

    public Optional<Productos> buscarPorId(Integer id) {
        return productoRepositori.findById(id);
    }

    public void eliminarProducto(Integer id) {
    	productoRepositori.deleteById(id);
    }
    
    public Page<LineaProductosDTO> totalPorLineasGlobal(int page, int size, String sortField) {
    	Pageable pageable = PageRequest.of(page, size, Sort.by(sortField).ascending());
    	Page<LineaProductosDTO> totalLineasGlobal = productoRepositori.getTotalesPorLineaGlobal(pageable); 
        return totalLineasGlobal;
    }
    
    public Page<LineaProductosDTO> totalPorLineasXBodegas(int page, int size, String sortField) {
    	Pageable pageable = PageRequest.of(page, size, Sort.by(sortField).ascending());
    	Page<LineaProductosDTO> totalLineasXBodegas = productoRepositori.getTotalesPorLineaXBodegas(pageable);
        return totalLineasXBodegas;
    }
    public Page<LineaProductosDTO> totalPorLineasXBodega(Integer bodegaId,int page, int size, String sortField) {
    	Pageable pageable = PageRequest.of(page, size, Sort.by(sortField).ascending());
    	Page<LineaProductosDTO> totalLineasXBodega = productoRepositori.getTotalesPorLineaXBodega(bodegaId,pageable);
    	return totalLineasXBodega;
    }
    public Optional<TotalInventarioDTO> totalInventarioGlobal() {
        return productoRepositori.getTotalInventarioProductosGlobal();
    }
    public Optional<TotalInventarioDTO> totalInventarioXBodega(Integer bodegaId) {
        return productoRepositori.getTotalInventarioProductosXBodega(bodegaId);
    }
}
