package com.pazzioliweb.comprasmodule.service;

import com.pazzioliweb.comprasmodule.dtos.CuentaPorPagarDTO;
import com.pazzioliweb.comprasmodule.entity.CuentaPorPagar;

public interface CuentaPorPagarService {
    CuentaPorPagar crear(CuentaPorPagarDTO cuentaPorPagarDTO);
}
