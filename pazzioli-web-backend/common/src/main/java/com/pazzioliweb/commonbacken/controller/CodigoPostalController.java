package com.pazzioliweb.commonbacken.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pazzioliweb.commonbacken.entyti.CodigoPostal;
import com.pazzioliweb.commonbacken.repositorio.CodigoPostalRepositori;

@Component
@RestController
@RequestMapping("/api/codigoPostal")
public class CodigoPostalController {
	@Autowired
	private CodigoPostalRepositori codigorepositorio;
	
	@RequestMapping("/codigopostal")
	public  ResponseEntity<Map<String,String>> obtenercodigopostal(@RequestParam (defaultValue ="") int codigomunicipio){
		Map<String,String> response= new HashMap<>();
		List<CodigoPostal>  postalop= codigorepositorio.findBycodigoMunicipioOrderByCodigoPostal(codigomunicipio);
		if(!postalop.isEmpty()) {
			CodigoPostal codigoPostal=postalop.get(0);
			response.put("respuesta", codigoPostal.getCodigoPostal());
	}else {
		response.put("respuesta","");
	}
		
		return ResponseEntity.ok().body(response);
		
	}
}
