package com.pazzioliweb.productosmodule.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.pazzioliweb.productosmodule.dtos.ProductoInventarioDTO;
import com.pazzioliweb.productosmodule.dtos.ProductoVarianteCreateDTO;
import com.pazzioliweb.productosmodule.dtos.ProductoVarianteResponseDTO;
import com.pazzioliweb.productosmodule.dtos.ProductoVarianteUpdateDTO;
import com.pazzioliweb.productosmodule.entity.ProductoVariante;

public interface ProductoVarianteService {
	ProductoVarianteResponseDTO crear(ProductoVarianteCreateDTO dto);

	ProductoVarianteResponseDTO actualizar(Long id, ProductoVarianteUpdateDTO dto);

    void eliminar(Long id);

    ProductoVariante buscarPorId(Long id);

    Page<ProductoVarianteResponseDTO> listar(Pageable pageable);

    Page<ProductoVarianteResponseDTO> listarPorProducto(Integer productoId, Pageable pageable);
    
    Page<ProductoInventarioDTO> listarInventarioBasico(Pageable pageable);
    
}
