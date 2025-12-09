package com.pazzioliweb.productosmodule.service;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pazzioliweb.productosmodule.dtos.PrecioCreateDTO;
import com.pazzioliweb.productosmodule.dtos.PrecioResponseDTO;
import com.pazzioliweb.productosmodule.dtos.PrecioUpdateDTO;
import com.pazzioliweb.productosmodule.entity.Precios;
import com.pazzioliweb.productosmodule.mapper.PrecioMapper;
import com.pazzioliweb.productosmodule.repositori.PreciosRepository;

@Service
public class PrecioServiceImpl implements PrecioService{

    private final PreciosRepository repository;
    private final PrecioMapper mapper;

    public PrecioServiceImpl(PreciosRepository repository, PrecioMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    @Transactional
    public PrecioResponseDTO crear(PrecioCreateDTO dto) {
        Precios entity = mapper.toEntity(dto);
        repository.save(entity);
        return mapper.toResponseDto(entity);
    }

    @Override
    public Optional<PrecioResponseDTO> obtenerPorId(Integer id) {
        return repository.findById(id)
                .map(mapper::toResponseDto);
    }

    @Override
    public Page<PrecioResponseDTO> listar(Pageable pageable) {
        return repository.findAll(pageable)
                .map(mapper::toResponseDto);
    }

    @Override
    @Transactional
    public Optional<PrecioResponseDTO> actualizar(Integer id, PrecioUpdateDTO dto) {
        return repository.findById(id)
                .map(entity -> {
                    mapper.updateEntity(entity, dto);
                    repository.save(entity);
                    return mapper.toResponseDto(entity);
                });
    }

    @Override
    @Transactional
    public boolean eliminar(Integer id) {
        return repository.findById(id)
                .map(entity -> {
                    repository.delete(entity);
                    return true;
                })
                .orElse(false);
    }
}
