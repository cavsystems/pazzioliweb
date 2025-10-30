package com.pazzioliweb.facturacionmodule.dtos;

import java.time.LocalDate;
import java.time.LocalDateTime;

public interface FacturaDTO {
    Integer getFacturaId();
    Integer getConsecutivo();
    Integer getComprobanteId();
    Integer getTerceroId();
    LocalDateTime getFechaCreacion();
    LocalDate getFechaEmision();
    LocalDate getFechaVencimiento();
    Integer getPlazo();
    Integer getUsuarioIngresoId();
    LocalDateTime getFechaAnulo();
    Integer getUsuarioAnuloId();
    String getEstado();
    Integer getPedidoId();
    Integer getRemisionId();
    Integer getVendedorId();
    Double getDescuento();
    Integer getCajaId();
    String getObservaciones();
    Double getSaldo();
    Double getTotalFactura();
}
