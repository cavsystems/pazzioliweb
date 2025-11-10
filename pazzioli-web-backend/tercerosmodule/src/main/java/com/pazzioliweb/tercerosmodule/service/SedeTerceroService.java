package com.pazzioliweb.tercerosmodule.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.pazzioliweb.tercerosmodule.dtos.SedeTerceroDTO;
import com.pazzioliweb.tercerosmodule.dtos.SedeTerceroDTOImpl;
import com.pazzioliweb.tercerosmodule.entity.SedeTercero;
import com.pazzioliweb.tercerosmodule.repositori.SedeTerceroRepository;

@Service
public class SedeTerceroService {
	private final SedeTerceroRepository repository;
	
	@Autowired
	public SedeTerceroService(SedeTerceroRepository repository) {
		this.repository = repository;
	}
	
	public Page<SedeTerceroDTO> listar(Integer terceroId, int page, int size, String sortField, String sortDirection) {
	    Sort sort = sortDirection.equalsIgnoreCase("asc")
	            ? Sort.by(sortField).ascending()
	            : Sort.by(sortField).descending();

	    Pageable pageable = PageRequest.of(page, size, sort);

	    Page<SedeTercero> sedesPage = repository.findByTercero_TerceroIdConRelaciones(terceroId, pageable);

	    // ✅ convertir usando map
	    return sedesPage.map(SedeTerceroDTOImpl::fromEntity);
	}
}
