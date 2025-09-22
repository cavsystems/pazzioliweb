package com.pazzioliweb.productosmodule.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pazzioliweb.productosmodule.entity.UnidadesMedida;
import com.pazzioliweb.productosmodule.repositori.UnidadesMedidaRepository;

@Service
public class UnidadesMedidaService {
private final UnidadesMedidaRepository unidadMedidaRepository;
	
	@Autowired
	public UnidadesMedidaService(UnidadesMedidaRepository unidadMedidaRepository) {
		this.unidadMedidaRepository = unidadMedidaRepository;
	}
	
	public List<UnidadesMedida> listarUnidadesMedida(){
		return unidadMedidaRepository.findAll();
	}
	
	public UnidadesMedida guardarUnidadesMedida(UnidadesMedida unidadMedida) {
		return unidadMedidaRepository.save(unidadMedida);
	}
	
	public Optional<UnidadesMedida> buscarPorId(Integer id){
		return unidadMedidaRepository.findById(id);
	}
	
	public void eliminarUnidadMedida(Integer id) {
		unidadMedidaRepository.deleteById(id);
    }
}
