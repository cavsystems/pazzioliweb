package com.pazzioliweb.productosmodule.repositori;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pazzioliweb.productosmodule.entity.UnidadesMedidaProducto;
import com.pazzioliweb.productosmodule.entity.UnidadesMedidaProductoId;

public interface UnidadesMedidaProductoRepositori extends JpaRepository<UnidadesMedidaProducto, UnidadesMedidaProductoId>{

}
