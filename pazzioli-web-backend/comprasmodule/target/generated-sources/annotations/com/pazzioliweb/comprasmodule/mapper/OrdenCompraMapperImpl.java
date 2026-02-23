package com.pazzioliweb.comprasmodule.mapper;

import com.pazzioliweb.comprasmodule.dtos.DetalleOrdenCompraDTO;
import com.pazzioliweb.comprasmodule.dtos.OrdenCompraDTO;
import com.pazzioliweb.comprasmodule.entity.DetalleOrdenCompra;
import com.pazzioliweb.comprasmodule.entity.OrdenCompra;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2026-02-23T11:28:05-0500",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 17.0.2 (Oracle Corporation)"
)
@Component
public class OrdenCompraMapperImpl implements OrdenCompraMapper {

    @Override
    public OrdenCompraDTO toDto(OrdenCompra ordenCompra) {
        if ( ordenCompra == null ) {
            return null;
        }

        OrdenCompraDTO ordenCompraDTO = new OrdenCompraDTO();

        ordenCompraDTO.setId( ordenCompra.getId() );
        ordenCompraDTO.setNumeroOrden( ordenCompra.getNumeroOrden() );
        ordenCompraDTO.setProveedorId( ordenCompra.getProveedorId() );
        ordenCompraDTO.setBodegaId( ordenCompra.getBodegaId() );
        ordenCompraDTO.setFechaEmision( ordenCompra.getFechaEmision() );
        ordenCompraDTO.setFechaEntregaEsperada( ordenCompra.getFechaEntregaEsperada() );
        ordenCompraDTO.setEstado( ordenCompra.getEstado() );
        ordenCompraDTO.setObservaciones( ordenCompra.getObservaciones() );
        ordenCompraDTO.setSubtotal( ordenCompra.getGravada() );
        ordenCompraDTO.setIva( ordenCompra.getIva() );
        ordenCompraDTO.setTotal( ordenCompra.getTotalOrdenCompra() );
        ordenCompraDTO.setUsuarioCreacion( ordenCompra.getUsuarioCreacion() );
        ordenCompraDTO.setFechaCreacion( ordenCompra.getFechaCreacion() );
        ordenCompraDTO.setItems( toDetalleDtoList( ordenCompra.getItems() ) );

        return ordenCompraDTO;
    }

    @Override
    public OrdenCompra toEntity(OrdenCompraDTO ordenCompraDTO) {
        if ( ordenCompraDTO == null ) {
            return null;
        }

        OrdenCompra ordenCompra = new OrdenCompra();

        ordenCompra.setId( ordenCompraDTO.getId() );
        ordenCompra.setNumeroOrden( ordenCompraDTO.getNumeroOrden() );
        ordenCompra.setProveedorId( ordenCompraDTO.getProveedorId() );
        ordenCompra.setBodegaId( ordenCompraDTO.getBodegaId() );
        ordenCompra.setFechaEmision( ordenCompraDTO.getFechaEmision() );
        ordenCompra.setFechaEntregaEsperada( ordenCompraDTO.getFechaEntregaEsperada() );
        ordenCompra.setEstado( ordenCompraDTO.getEstado() );
        ordenCompra.setObservaciones( ordenCompraDTO.getObservaciones() );
        ordenCompra.setGravada( ordenCompraDTO.getSubtotal() );
        ordenCompra.setIva( ordenCompraDTO.getIva() );
        ordenCompra.setTotalOrdenCompra( ordenCompraDTO.getTotal() );
        ordenCompra.setUsuarioCreacion( ordenCompraDTO.getUsuarioCreacion() );
        ordenCompra.setFechaCreacion( ordenCompraDTO.getFechaCreacion() );
        ordenCompra.setItems( detalleOrdenCompraDTOListToDetalleOrdenCompraList( ordenCompraDTO.getItems() ) );

        setOrdenCompraInDetalles( ordenCompra );

        return ordenCompra;
    }

    @Override
    public DetalleOrdenCompraDTO detalleToDto(DetalleOrdenCompra detalle) {
        if ( detalle == null ) {
            return null;
        }

        DetalleOrdenCompraDTO detalleOrdenCompraDTO = new DetalleOrdenCompraDTO();

        detalleOrdenCompraDTO.setId( detalle.getId() );
        detalleOrdenCompraDTO.setCodigoProducto( detalle.getCodigoProducto() );
        detalleOrdenCompraDTO.setDescripcionProducto( detalle.getDescripcionProducto() );
        detalleOrdenCompraDTO.setCantidad( detalle.getCantidad() );
        detalleOrdenCompraDTO.setPrecioUnitario( detalle.getPrecioUnitario() );
        detalleOrdenCompraDTO.setDescuento( detalle.getDescuento() );
        detalleOrdenCompraDTO.setIvaPorcentaje( detalle.getIva() );
        detalleOrdenCompraDTO.setTotal( detalle.getTotal() );
        detalleOrdenCompraDTO.setRecibido( detalle.isRecibido() );
        detalleOrdenCompraDTO.setCantidadRecibida( detalle.getCantidadRecibida() );

        return detalleOrdenCompraDTO;
    }

    @Override
    public DetalleOrdenCompra detalleToEntity(DetalleOrdenCompraDTO detalleDTO) {
        if ( detalleDTO == null ) {
            return null;
        }

        DetalleOrdenCompra detalleOrdenCompra = new DetalleOrdenCompra();

        detalleOrdenCompra.setId( detalleDTO.getId() );
        detalleOrdenCompra.setCodigoProducto( detalleDTO.getCodigoProducto() );
        detalleOrdenCompra.setDescripcionProducto( detalleDTO.getDescripcionProducto() );
        detalleOrdenCompra.setCantidad( detalleDTO.getCantidad() );
        detalleOrdenCompra.setPrecioUnitario( detalleDTO.getPrecioUnitario() );
        detalleOrdenCompra.setDescuento( detalleDTO.getDescuento() );
        detalleOrdenCompra.setIva( detalleDTO.getIvaPorcentaje() );
        detalleOrdenCompra.setTotal( detalleDTO.getTotal() );
        detalleOrdenCompra.setRecibido( detalleDTO.isRecibido() );
        detalleOrdenCompra.setCantidadRecibida( detalleDTO.getCantidadRecibida() );

        return detalleOrdenCompra;
    }

    @Override
    public List<DetalleOrdenCompraDTO> toDetalleDtoList(List<DetalleOrdenCompra> detalles) {
        if ( detalles == null ) {
            return null;
        }

        List<DetalleOrdenCompraDTO> list = new ArrayList<DetalleOrdenCompraDTO>( detalles.size() );
        for ( DetalleOrdenCompra detalleOrdenCompra : detalles ) {
            list.add( detalleToDto( detalleOrdenCompra ) );
        }

        return list;
    }

    protected List<DetalleOrdenCompra> detalleOrdenCompraDTOListToDetalleOrdenCompraList(List<DetalleOrdenCompraDTO> list) {
        if ( list == null ) {
            return null;
        }

        List<DetalleOrdenCompra> list1 = new ArrayList<DetalleOrdenCompra>( list.size() );
        for ( DetalleOrdenCompraDTO detalleOrdenCompraDTO : list ) {
            list1.add( detalleToEntity( detalleOrdenCompraDTO ) );
        }

        return list1;
    }
}
