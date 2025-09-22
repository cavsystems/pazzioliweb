package com.pazzioliweb.productosmodule.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pazzioliweb.productosmodule.entity.Precios;
import com.pazzioliweb.productosmodule.repositori.PreciosRepository;

@Service
public class PreciosService {
	
	private final PreciosRepository precioRepository;
	
	@Autowired
	public PreciosService(PreciosRepository precioRepository) {
		this.precioRepository = precioRepository;
	}
	
	public List<Precios> listarPrecios(){
		return precioRepository.findAll();
	}
	
	public Precios guardarPrecio(Precios precio) {
		return precioRepository.save(precio);
	}
	
	public Optional<Precios> buscarPorId(Integer id){
		return precioRepository.findById(id);
	}
	
	public void eliminarPrecio(Integer id) {
		precioRepository.deleteById(id);
    }
}
