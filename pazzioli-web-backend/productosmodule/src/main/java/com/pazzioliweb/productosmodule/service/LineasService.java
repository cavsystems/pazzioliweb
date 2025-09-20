package com.pazzioliweb.productosmodule.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pazzioliweb.productosmodule.entity.Lineas;
import com.pazzioliweb.productosmodule.repositori.LineasRepositori;

@Service
public class LineasService {
private final LineasRepositori lineaRepositori;
	
	@Autowired
	public LineasService(LineasRepositori lineaRepositori) {
		this.lineaRepositori = lineaRepositori;
	}
	
	public List<Lineas> listarLineas(){
		return lineaRepositori.findAll();
	}
	
	public Lineas guardarLinea(Lineas linea) {
		return lineaRepositori.save(linea);
	}
	
	public Optional<Lineas> buscarPorId(Integer id){
		return lineaRepositori.findById(id);
	}
	
	public void eliminarLinea(Integer id) {
		lineaRepositori.deleteById(id);
    }
}
