package com.pazzioliweb.productosmodule.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.pazzioliweb.productosmodule.entity.Producto;
import com.pazzioliweb.productosmodule.repositori.ProductosRespitori;
@Controller
@RequestMapping("api/producto")
public class Productocontroller {
	@Autowired
	private ProductosRespitori  repo ;
	
	@GetMapping
	public ResponseEntity<Map<String, Object>> obtenerproducto(){
	   Map<String, Object> response = new HashMap<>();
	   
	   List<Producto> prooptiona= repo.findAll();
	   
	   if(!prooptiona.isEmpty()) {
		   System.out.println( "producto"+prooptiona.get(0));
	   }
		response.put("Mesaje", "logrado");
		 return ResponseEntity.status(HttpStatus.CREATED).body(response);
		}

}
