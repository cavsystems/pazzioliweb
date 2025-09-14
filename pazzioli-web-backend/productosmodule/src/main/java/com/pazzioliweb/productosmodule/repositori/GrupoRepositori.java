package com.pazzioliweb.productosmodule.repositori;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pazzioliweb.productosmodule.entity.Grupo;
import com.pazzioliweb.productosmodule.entity.Producto;

public interface GrupoRepositori extends JpaRepository<Grupo,Integer>  {

}
