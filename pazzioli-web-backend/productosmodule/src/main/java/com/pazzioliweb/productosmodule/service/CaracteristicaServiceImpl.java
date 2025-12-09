package com.pazzioliweb.productosmodule.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.pazzioliweb.productosmodule.dtos.CaracteristicaDTO;
import com.pazzioliweb.productosmodule.entity.Caracteristica;
import com.pazzioliweb.productosmodule.repositori.CaracteristicaRepository;
import com.pazzioliweb.productosmodule.repositori.TipoCaracteristicaRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class CaracteristicaServiceImpl implements CaracteristicaService{
	
	private final CaracteristicaRepository repo;
    private final TipoCaracteristicaRepository tipoRepo;

    public CaracteristicaServiceImpl(
            CaracteristicaRepository repo,
            TipoCaracteristicaRepository tipoRepo
    ) {
        this.repo = repo;
        this.tipoRepo = tipoRepo;
    }

    @Override
    public Caracteristica crear(Caracteristica c) {

        if (c.getTipo() == null || c.getTipo().getTipoCaracteristicaId() == null) {
            throw new IllegalArgumentException("Debe asociar un tipo de característica");
        }

        tipoRepo.findById(c.getTipo().getTipoCaracteristicaId())
                .orElseThrow(() -> new EntityNotFoundException("El tipo de característica no existe"));

        return repo.save(c);
    }

    @Override
    public Caracteristica actualizar(Long id, Caracteristica c) {

        Caracteristica existente = buscarPorId(id);

        existente.setNombre(c.getNombre());

        if (c.getTipo() != null) {
            tipoRepo.findById(c.getTipo().getTipoCaracteristicaId())
                    .orElseThrow(() -> new EntityNotFoundException("El tipo de característica no existe"));

            existente.setTipo(c.getTipo());
        }

        return repo.save(existente);
    }

    @Override
    public void eliminar(Long id) {
        if (!repo.existsById(id)) {
            throw new EntityNotFoundException("Característica no encontrada");
        }
        repo.deleteById(id);
    }

    @Override
    public Caracteristica buscarPorId(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Característica no encontrada"));
    }

    @Override
    public Page<Caracteristica> listar(Pageable pageable) {
        return repo.findAll(pageable);
    }

    @Override
    public Page<Caracteristica> listarPorTipo(Long tipoId, Pageable pageable) {
        return repo.findByTipoTipoCaracteristicaId(tipoId, pageable);
    }
    
    @Override
    public Page<CaracteristicaDTO> traerCaracteristicasDetale(Pageable pageable) {
        return repo.traerCaracteristicasDetalle(pageable);
    }
}
