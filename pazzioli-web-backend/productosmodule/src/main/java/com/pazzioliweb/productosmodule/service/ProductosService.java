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
import com.pazzioliweb.productosmodule.dtos.ProductoDTO;
import com.pazzioliweb.productosmodule.dtos.TotalInventarioDTO;
import com.pazzioliweb.productosmodule.dtos.TotallineasDTO;
import com.pazzioliweb.productosmodule.entity.Productos;
@Service
public class ProductosService {
	private final ProductosRespitori productoRepositori;

    @Autowired
    public ProductosService(ProductosRespitori productoRepository) {
        this.productoRepositori = productoRepository;
    }

    /*public List<Productos> listarProductos() {
        return productoRepositori.findAll();
    }*/
    public Page<ProductoDTO> listar(int page, int size, String sortField, String sortDirection) {
    	Sort sort = sortDirection.equalsIgnoreCase("asc")
                ? Sort.by(sortField).descending()
                : Sort.by(sortField).ascending();
    	Pageable pageable = PageRequest.of(page, size, sort);

    	Page<Productos> listadoProductos = productoRepositori.traerProductos(pageable);

        return listadoProductos.map(ProductoDTO::fromEntity);
    }

    public Page<ProductoDTO> buscar(String termino, int page, int size, String sortField, String sortDirection) {
        Sort.Direction direction = sortDirection.equalsIgnoreCase("desc") ? Sort.Direction.DESC : Sort.Direction.ASC;
        Pageable pageable = PageRequest.of(page, size, Sort.by(direction, sortField));

        Page<Productos> pageProductos = productoRepositori.traerProductosXFiltro(termino, pageable);
        return pageProductos.map(ProductoDTO::fromEntity);
    }
    
    public Productos guardarProducto(Productos producto) {
        return productoRepositori.save(producto);
    }

    public Optional<Productos> buscarPorId(Integer id) {
        return productoRepositori.findByIdWithRelations(id);
    }

    public void eliminarProducto(Integer id) {
    	productoRepositori.deleteById(id);
    }
    
    public Page<LineaProductosDTO> totalPorLineasGlobal(int page, int size, String sortField, String sortDirection) {
    	Sort sort = sortDirection.equalsIgnoreCase("desc")
                ? Sort.by(sortField).descending()
                : Sort.by(sortField).ascending();
    	Pageable pageable = PageRequest.of(page, size, sort);
    	Page<LineaProductosDTO> totalLineasGlobal = productoRepositori.getTotalesPorLineaGlobal(pageable); 
        return totalLineasGlobal;
    }
    
    public Page<LineaProductosDTO> totalPorLineasXBodegas(int page, int size, String sortField, String sortDirection) {
    	Sort sort = sortDirection.equalsIgnoreCase("desc")
                ? Sort.by(sortField).descending()
                : Sort.by(sortField).ascending();
    	Pageable pageable = PageRequest.of(page, size, sort);
    	Page<LineaProductosDTO> totalLineasXBodegas = productoRepositori.getTotalesPorLineaXBodegas(pageable);
        return totalLineasXBodegas;
    }
    
    public Optional<TotallineasDTO> totallinea(){
    	
    	Optional<TotallineasDTO >  totali =productoRepositori. getTotalGloballineas();
    	return totali;
    	
    }
    
    
    public Optional<TotallineasDTO > totallineabodega(int BodegaId) {
    	Optional<TotallineasDTO >   totalbo=productoRepositori.getTotalGloballineasXbodega(BodegaId);
    	return totalbo;
    }
    public Page<LineaProductosDTO> totalPorLineasXBodega(Integer bodegaId,int page, int size, String sortField, String sortDirection) {
    	Sort sort = sortDirection.equalsIgnoreCase("desc")
                ? Sort.by(sortField).descending()
                : Sort.by(sortField).ascending();
    	Pageable pageable = PageRequest.of(page, size, sort);
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
