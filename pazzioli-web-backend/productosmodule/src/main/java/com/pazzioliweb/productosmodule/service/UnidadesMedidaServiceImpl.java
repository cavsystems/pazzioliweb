package com.pazzioliweb.productosmodule.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pazzioliweb.commonbacken.dtos.response.PaginationResponse;
import com.pazzioliweb.productosmodule.dtos.UnidadMedidaCreateDTO;
import com.pazzioliweb.productosmodule.dtos.UnidadMedidaResponseDTO;
import com.pazzioliweb.productosmodule.dtos.UnidadMedidaUpdateDTO;
import com.pazzioliweb.productosmodule.entity.UnidadesMedida;
import com.pazzioliweb.productosmodule.mapper.UnidadesMedidaMapper;
import com.pazzioliweb.productosmodule.repositori.UnidadesMedidaRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class UnidadesMedidaServiceImpl implements UnidadesMedidaService {

    private final UnidadesMedidaRepository repo;
    private final UnidadesMedidaMapper mapper;
    
    public UnidadesMedidaServiceImpl(UnidadesMedidaRepository repo, UnidadesMedidaMapper mapper) {
    	this.repo = repo;
    	this.mapper = mapper;
    }

    @Override
    public List<UnidadMedidaResponseDTO> crear(List<UnidadMedidaCreateDTO> dtos) {
    	List<UnidadMedidaResponseDTO> respuestas = new ArrayList<>();
    	
    	for(UnidadMedidaCreateDTO dto : dtos) {
    		UnidadesMedida entity;
    		entity = mapper.toEntity(dto);
    		
    		repo.save(entity);
    		respuestas.add(mapper.toResponse(entity));
    	}

        return respuestas;
    }

    @Override
    public UnidadMedidaResponseDTO actualizar(Integer id, UnidadMedidaUpdateDTO dto) {
        UnidadesMedida existente = repo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("No existe la unidad de medida"));

        mapper.toEntity(dto, existente);

        return mapper.toResponse(repo.save(existente));
    }

    @Override
    public UnidadMedidaResponseDTO obtenerPorId(Integer id) {
        return repo.findById(id)
                .map(mapper::toResponse)
                .orElseThrow(() -> new EntityNotFoundException("No existe la unidad de medida"));
    }

    @Override
    public Page<UnidadMedidaResponseDTO> listar(Pageable pageable) {

        Page<UnidadesMedida> pagina = repo.findAll(pageable);

        return pagina.map(mapper::toResponse);
    }

    @Override
    public void eliminar(Integer id) {
        if (!repo.existsById(id)) {
            throw new EntityNotFoundException("Unidad de medida no existe");
        }
        repo.deleteById(id);
    }
}
