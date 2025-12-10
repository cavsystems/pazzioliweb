package com.pazzioliweb.productosmodule.mapper;

import org.springframework.stereotype.Component;

import com.pazzioliweb.productosmodule.dtos.ProductoVarianteCreateDTO;
import com.pazzioliweb.productosmodule.dtos.ProductoVarianteResponseDTO;
import com.pazzioliweb.productosmodule.dtos.ProductoVarianteUpdateDTO;
import com.pazzioliweb.productosmodule.entity.ProductoVariante;
import com.pazzioliweb.productosmodule.entity.Productos;

@Component
public class ProductoVarianteMapper {

	// ---------------------------------------------------------
    // Convertir CREATE DTO -> Entity
    // ---------------------------------------------------------
    public ProductoVariante fromCreateDto(ProductoVarianteCreateDTO dto, Productos producto) {
        ProductoVariante pv = new ProductoVariante();
        pv.setProducto(producto);
        pv.setSku(dto.getSku());
        pv.setReferenciaVariantes(dto.getReferenciaVariantes());
        pv.setCodigoBarras(dto.getCodigoBarras());
        pv.setActivo(true);
        pv.setPredeterminada(dto.getPredeterminada());
        return pv;
    }

    // ---------------------------------------------------------
    // Convertir Entity -> Response DTO
    // ---------------------------------------------------------
    public ProductoVarianteResponseDTO toResponseDto(ProductoVariante pv) {
        ProductoVarianteResponseDTO dto = new ProductoVarianteResponseDTO();
        dto.setProductoVarianteId(pv.getProductoVarianteId());
        dto.setProductoId(pv.getProducto().getProductoId());
        dto.setSku(pv.getSku());
        dto.setReferenciaVariantes(pv.getReferenciaVariantes());
        dto.setCodigoBarras(pv.getCodigoBarras());
        dto.setActivo(pv.getActivo());
        dto.setPredeterminada(pv.getPredeterminada());
        return dto;
    }

    // ---------------------------------------------------------
    // Partial Update (NO pisa con null)
    // ---------------------------------------------------------
    public void updateFromDto(ProductoVarianteUpdateDTO dto, ProductoVariante pv) {

        if (dto.getSku() != null)
            pv.setSku(dto.getSku());

        if (dto.getReferenciaVariantes() != null)
            pv.setReferenciaVariantes(dto.getReferenciaVariantes());

        if (dto.getCodigoBarras() != null)
            pv.setCodigoBarras(dto.getCodigoBarras());

        if (dto.getActivo() != null)
            pv.setActivo(dto.getActivo());
        
        if (dto.getPredeterminada() != null)
        	pv.setPredeterminada(dto.getPredeterminada());
    }
}
