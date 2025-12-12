package com.pazzioliweb.movimientosinventariomodule.mapper;

import java.util.stream.Collectors;

import com.pazzioliweb.movimientosinventariomodule.dtos.MovimientoInventarioDetalleResponseDto;
import com.pazzioliweb.movimientosinventariomodule.dtos.MovimientoInventarioResponseDto;
import com.pazzioliweb.movimientosinventariomodule.entity.MovimientoInventario;
import com.pazzioliweb.movimientosinventariomodule.entity.MovimientoInventarioDetalle;



public class MovimientoInventarioMapper {
	// Entidad -> Response DTO
    public MovimientoInventarioResponseDto toResponse(MovimientoInventario mov) {
        if (mov == null) return null;

        MovimientoInventarioResponseDto dto = new MovimientoInventarioResponseDto();
        dto.setMovimientoId(mov.getMovimientoId());
        dto.setComprobanteId(mov.getComprobante() != null ? mov.getComprobante().getComprobante_id() : null);
        dto.setComprobanteNombre(mov.getComprobante() != null ? mov.getComprobante().getNombre() : null);
        dto.setConsecutivo(mov.getConsecutivo());
        dto.setTipo(mov.getTipo() != null ? mov.getTipo().name() : null);
        dto.setUsuarioId(mov.getUsuario() != null ? mov.getUsuario().getCodigo() : null);
        dto.setUsuarioNombre(mov.getUsuario() != null ? mov.getUsuario().getNombre() : null);
        dto.setFechaEmision(mov.getFechaEmision());
        dto.setFechaCreacion(mov.getFechaCreacion());
        dto.setEstado(mov.getEstado() != null ? mov.getEstado().name() : null);
        dto.setTotal(mov.getTotal());
        dto.setObservaciones(mov.getObservaciones());

        // Mapear detalles si están cargados
        if (mov instanceof MovimientoInventario && mov.getMovimientoId() != null) {
            // asumo que la relación detalles se carga en el service si es necesario
        }

        if (mov.getMovimientoId() != null && mov.getTipo() != null) {
            // no-op
        }

        // Map detalles si la entidad expone una colección (si la tenés)
        try {
            var detallesField = mov.getClass().getDeclaredField("detalles");
            if (detallesField != null) {
                // pero para evitar reflection, el service deberá poblar manualmente la lista de detalles en la entidad
            }
        } catch (NoSuchFieldException e) {
            // no hay colección; los detalles pueden procederse desde el repositorio de detalles
        }

        return dto;
    }
    
    public MovimientoInventarioDetalleResponseDto toDetalleResponse(MovimientoInventarioDetalle det) {
        if (det == null) return null;
        MovimientoInventarioDetalleResponseDto dto = new MovimientoInventarioDetalleResponseDto();
        dto.setDetalleId(det.getDetalleId());
        dto.setProductoVarianteId(det.getProductoVariante() != null ? det.getProductoVariante().getProductoVarianteId() : null);
        dto.setProductoSku(det.getProductoVariante() != null ? det.getProductoVariante().getSku() : null);
        dto.setBodegaOrigenId(det.getBodegaOrigen() != null ? det.getBodegaOrigen().getCodigo() : null);
        dto.setBodegaOrigenNombre(det.getBodegaOrigen() != null ? det.getBodegaOrigen().getNombre() : null);
        dto.setBodegaDestinoId(det.getBodegaDestino() != null ? det.getBodegaDestino().getCodigo() : null);
        dto.setBodegaDestinoNombre(det.getBodegaDestino() != null ? det.getBodegaDestino().getNombre() : null);
        dto.setCantidad(det.getCantidad());
        dto.setCostoUnitario(det.getCostoUnitario());
        dto.setCostoPromedio(det.getCostoPromedio());
        dto.setTotalDetalle(det.getTotalDetalle());
        return dto;
    }

    // Mapear lista de detalles (service puede usar esto)
    public java.util.List<MovimientoInventarioDetalleResponseDto> toDetalleResponses(java.util.List<MovimientoInventarioDetalle> detalles) {
        if (detalles == null) return java.util.Collections.emptyList();
        return detalles.stream().map(this::toDetalleResponse).collect(Collectors.toList());
    }
}
