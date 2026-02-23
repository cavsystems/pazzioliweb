package com.pazzioliweb.comprasmodule.service;

import com.pazzioliweb.comprasmodule.dtos.HistorialCompraDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.time.LocalDate;

public interface HistorialCompraService {
    Page<HistorialCompraDTO> obtenerHistorial(
            Long bodegaId,
            Long proveedorId,
            LocalDate fechaInicio,
            LocalDate fechaFin,
            String estado,
            Pageable pageable);

    Object obtenerEstadisticas(Long bodegaId, LocalDate fechaInicio, LocalDate fechaFin);
}
