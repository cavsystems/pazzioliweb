package com.pazzioliweb.tercerosmodule.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.pazzioliweb.tercerosmodule.dtos.TerceroDTO;
import com.pazzioliweb.tercerosmodule.entity.Terceros;
import com.pazzioliweb.tercerosmodule.repositori.TercerosRepository;

@Service
public class TercerosService {
	private final TercerosRepository terceroRepository;

    @Autowired
    public TercerosService(TercerosRepository terceroRepository) {
        this.terceroRepository = terceroRepository;
    }

    public Page<TerceroDTO> listar(int page, int size, String sortField, String sortDirection) {
    	Sort sort = sortDirection.equalsIgnoreCase("asc")
                ? Sort.by(sortField).ascending()
                : Sort.by(sortField).descending();
    	Pageable pageable = PageRequest.of(page, size, sort);

    	Page<TerceroDTO> listadoTerceros = terceroRepository.traerTerceros(pageable);

        return listadoTerceros;
    }
    
    public Page<TerceroDTO> buscar(String termino, int page, int size, String sortField, String sortDirection) {
    	Sort sort = sortDirection.equalsIgnoreCase("asc")
                ? Sort.by(sortField).ascending()
                : Sort.by(sortField).descending();
    	Pageable pageable = PageRequest.of(page, size, sort);

    	Page<TerceroDTO> listadoTerceros = terceroRepository.traerTercerosXFiltro(termino,pageable);

        return listadoTerceros;
    }

    public Optional<Terceros> buscarPorId(Integer id) {
        return terceroRepository.findById(id);
    }

    public Terceros guardar(Terceros tercero) {
        return terceroRepository.save(tercero);
    }

    public void eliminar(Integer id) {
        terceroRepository.deleteById(id);
    }
}
