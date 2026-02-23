package com.pazzioliweb.comprasmodule.mapper;

import com.pazzioliweb.comprasmodule.dtos.DetalleOrdenCompraDTO;
import com.pazzioliweb.comprasmodule.dtos.OrdenCompraDTO;
import com.pazzioliweb.comprasmodule.entity.DetalleOrdenCompra;
import com.pazzioliweb.comprasmodule.entity.OrdenCompra;
import org.mapstruct.*;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public interface OrdenCompraMapper {
    
    OrdenCompraMapper INSTANCE = Mappers.getMapper(OrdenCompraMapper.class);
    
    @Mapping(target = "id", source = "id")
    @Mapping(target = "numeroOrden", source = "numeroOrden")
    @Mapping(target = "proveedorId", source = "proveedorId")
    @Mapping(target = "proveedorNombre", ignore = true)
    @Mapping(target = "bodegaId", source = "bodegaId")
    @Mapping(target = "bodegaNombre", ignore = true)
    @Mapping(target = "fechaEmision", source = "fechaEmision")
    @Mapping(target = "fechaEntregaEsperada", source = "fechaEntregaEsperada")
    @Mapping(target = "estado", source = "estado")
    @Mapping(target = "observaciones", source = "observaciones")
    @Mapping(target = "subtotal", source = "gravada")
    @Mapping(target = "iva", source = "iva")
    @Mapping(target = "total", source = "totalOrdenCompra")
    @Mapping(target = "usuarioCreacion", source = "usuarioCreacion")
    @Mapping(target = "fechaCreacion", source = "fechaCreacion")
    @Mapping(target = "items", source = "items")
    OrdenCompraDTO toDto(OrdenCompra ordenCompra);
    
    @Mapping(target = "id", source = "id")
    @Mapping(target = "numeroOrden", source = "numeroOrden")
    @Mapping(target = "proveedorId", source = "proveedorId")
    @Mapping(target = "bodegaId", source = "bodegaId")
    @Mapping(target = "fechaEmision", source = "fechaEmision")
    @Mapping(target = "fechaEntregaEsperada", source = "fechaEntregaEsperada")
    @Mapping(target = "estado", source = "estado")
    @Mapping(target = "observaciones", source = "observaciones")
    @Mapping(target = "gravada", source = "subtotal")
    @Mapping(target = "iva", source = "iva")
    @Mapping(target = "totalOrdenCompra", source = "total")
    @Mapping(target = "usuarioCreacion", source = "usuarioCreacion")
    @Mapping(target = "fechaCreacion", source = "fechaCreacion")
    @Mapping(target = "items", source = "items")
    OrdenCompra toEntity(OrdenCompraDTO ordenCompraDTO);
    
    @Mapping(target = "id", source = "id")
    @Mapping(target = "codigoProducto", source = "codigoProducto")
    @Mapping(target = "descripcionProducto", source = "descripcionProducto")
    @Mapping(target = "cantidad", source = "cantidad")
    @Mapping(target = "precioUnitario", source = "precioUnitario")
    @Mapping(target = "descuento", source = "descuento")
    @Mapping(target = "ivaPorcentaje", source = "iva")
    @Mapping(target = "subtotal", ignore = true)
    @Mapping(target = "total", source = "total")
    @Mapping(target = "recibido", source = "recibido")
    @Mapping(target = "cantidadRecibida", source = "cantidadRecibida")
    DetalleOrdenCompraDTO detalleToDto(DetalleOrdenCompra detalle);
    
    @Mapping(target = "id", source = "id")
    @Mapping(target = "codigoProducto", source = "codigoProducto")
    @Mapping(target = "descripcionProducto", source = "descripcionProducto")
    @Mapping(target = "cantidad", source = "cantidad")
    @Mapping(target = "precioUnitario", source = "precioUnitario")
    @Mapping(target = "descuento", source = "descuento")
    @Mapping(target = "iva", source = "ivaPorcentaje")
    @Mapping(target = "total", source = "total")
    @Mapping(target = "recibido", source = "recibido")
    @Mapping(target = "cantidadRecibida", source = "cantidadRecibida")
    @Mapping(target = "ordenCompra", ignore = true)
    @Mapping(target = "codigoBarras", ignore = true)
    @Mapping(target = "observacionProducto", ignore = true)
    DetalleOrdenCompra detalleToEntity(DetalleOrdenCompraDTO detalleDTO);
    
    List<DetalleOrdenCompraDTO> toDetalleDtoList(List<DetalleOrdenCompra> detalles);
    
    @AfterMapping
    default void setOrdenCompraInDetalles(@MappingTarget OrdenCompra ordenCompra) {
        if (ordenCompra.getItems() != null) {
            ordenCompra.getItems().forEach(detalle -> detalle.setOrdenCompra(ordenCompra));
        }
    }
}
