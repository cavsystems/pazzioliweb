package com.pazzioliweb.productosmodule.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.pazzioliweb.productosmodule.entity.Lineas;
import com.pazzioliweb.productosmodule.repositori.LineasRepositori;

import jakarta.persistence.EntityNotFoundException;

@Service
public class LineasServiceImpl implements LineasService{
	private final LineasRepositori repo;
	
	public LineasServiceImpl(LineasRepositori repo) {
		this.repo = repo;
	}
	
	@Override
	public Lineas crear(Lineas linea) {
		return repo.save(linea);
	}
	
	@Override
	public Lineas actualizar(Integer id, Lineas linea) {
		Lineas existente = buscarPorId(id);
		
		existente.setDescripcion(linea.getDescripcion());
		
		return repo.save(existente);
	}
	
	@Override
	public void eliminar(Integer id) {
		if(!repo.existsById(id)) {
			throw new EntityNotFoundException("Linea no encontrada");
		}
		repo.deleteById(id);
	}
	
	@Override
	public Lineas buscarPorId(Integer id) {
        return repo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Linea no encontrada"));
    }
	
	@Override
	public Page<Lineas> listar(String descripcion,Pageable pageable) {
		   if (descripcion == null || descripcion.isBlank()) {
		        return repo.findAll(pageable);
		    }
		    return repo.findByDescripcionContainingIgnoreCase(descripcion, pageable);
		         
    }
}
