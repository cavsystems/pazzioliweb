package com.pazzioliweb.productosmodule.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pazzioliweb.productosmodule.entity.Grupos;
import com.pazzioliweb.productosmodule.repositori.GrupoRepositori;

@Service
public class GruposService {
	private final GrupoRepositori grupoRepositori;
	
	@Autowired
	public GruposService(GrupoRepositori grupoRepositori) {
		this.grupoRepositori = grupoRepositori;
	}
	
	public List<Grupos> listarGrupos(){
		return grupoRepositori.findAll();
	}
	
	public Grupos guardarGrupo(Grupos grupo) {
		return grupoRepositori.save(grupo);
	}
	
	public Optional<Grupos> buscarPorId(Integer id){
		return grupoRepositori.findById(id);
	}
	
	public void eliminarGrupo(Integer id) {
    	grupoRepositori.deleteById(id);
    }
}
