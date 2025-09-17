package com.pazzioliweb.productosmodule.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
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
    
    public List<LineaProductosDTO> totalPorLineasGlobal() {
        return productoRepositori.getTotalesPorLineaGlobal();
    }
    
    public List<LineaProductosDTO> totalPorLineasXBodegas() {
        return productoRepositori.getTotalesPorLineaXBodegas();
    }
    public List<LineaProductosDTO> totalPorLineasXBodega(Integer bodegaId) {
        return productoRepositori.getTotalesPorLineaXBodega(bodegaId);
    }
    public Optional<TotalInventarioDTO> totalInventarioGlobal() {
        return productoRepositori.getTotalInventarioProductosGlobal();
    }
    public Optional<TotalInventarioDTO> totalInventarioXBodega(Integer bodegaId) {
        return productoRepositori.getTotalInventarioProductosXBodega(bodegaId);
    }
}
