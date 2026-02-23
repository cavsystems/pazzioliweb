package com.pazzioliweb.comprasmodule.service.impl;

import com.pazzioliweb.comprasmodule.dtos.CuentaPorPagarDTO;
import com.pazzioliweb.comprasmodule.entity.CuentaPorPagar;
import com.pazzioliweb.comprasmodule.repository.CuentaPorPagarRepository;
import com.pazzioliweb.comprasmodule.service.CuentaPorPagarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CuentaPorPagarServiceImpl implements CuentaPorPagarService {

    private final CuentaPorPagarRepository cuentaPorPagarRepository;

    @Autowired
    public CuentaPorPagarServiceImpl(CuentaPorPagarRepository cuentaPorPagarRepository) {
        this.cuentaPorPagarRepository = cuentaPorPagarRepository;
    }

    @Override
    @Transactional
    public CuentaPorPagar crear(CuentaPorPagarDTO cuentaPorPagarDTO) {
        CuentaPorPagar cuenta = new CuentaPorPagar();
        cuenta.setNit(cuentaPorPagarDTO.getNit());
        cuenta.setNombre(cuentaPorPagarDTO.getNombre());
        cuenta.setFechaVencimiento(cuentaPorPagarDTO.getFechaVencimiento());
        cuenta.setNumeroFactura(cuentaPorPagarDTO.getNumeroFactura());
        cuenta.setValorNeto(cuentaPorPagarDTO.getValorNeto());
        cuenta.setEstado(cuentaPorPagarDTO.getEstado() != null ? cuentaPorPagarDTO.getEstado() : "PENDIENTE");

        return cuentaPorPagarRepository.save(cuenta);
    }
}
