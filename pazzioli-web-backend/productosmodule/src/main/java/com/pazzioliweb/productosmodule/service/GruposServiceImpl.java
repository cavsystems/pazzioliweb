package com.pazzioliweb.productosmodule.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.pazzioliweb.productosmodule.entity.Grupos;
import com.pazzioliweb.productosmodule.repositori.GrupoRepositori;

import jakarta.persistence.EntityNotFoundException;

@Service
public class GruposServiceImpl implements GruposService{
private final GrupoRepositori repo;
	
	public GruposServiceImpl(GrupoRepositori repo) {
		this.repo = repo;
	}
	
	@Override
	public Grupos crear(Grupos grupos) {
		return repo.save(grupos);
	}
	
	@Override
	public Grupos actualizar(Integer id, Grupos grupo) {
		Grupos existente = buscarPorId(id);
		
		existente.setDescripcion(grupo.getDescripcion());
		
		return repo.save(existente);
	}
	
	@Override
	public void eliminar(Integer id) {
		if(!repo.existsById(id)) {
			throw new EntityNotFoundException("Grupo no encontrado");
		}
		repo.deleteById(id);
	}
	
	@Override
	public Grupos buscarPorId(Integer id) {
        return repo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Grupo no encontrado"));
    }
	
	@Override
	public Page<Grupos> listar(String descripcion,Pageable pageable) {
        return repo.findByDescripcionContainingIgnoreCase(descripcion,pageable);
    }
}
