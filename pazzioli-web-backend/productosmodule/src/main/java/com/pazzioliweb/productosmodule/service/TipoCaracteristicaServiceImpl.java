package com.pazzioliweb.productosmodule.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.pazzioliweb.productosmodule.entity.TipoCaracteristica;
import com.pazzioliweb.productosmodule.repositori.TipoCaracteristicaRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class TipoCaracteristicaServiceImpl implements TipoCaracteristicaService{
	private final TipoCaracteristicaRepository repo;

    public TipoCaracteristicaServiceImpl(TipoCaracteristicaRepository repo) {
        this.repo = repo;
    }

    @Override
    public TipoCaracteristica crear(TipoCaracteristica tipo) {
        return repo.save(tipo);
    }

    @Override
    public TipoCaracteristica actualizar(Long id, TipoCaracteristica tipo) {
        TipoCaracteristica existente = buscarPorId(id);

        existente.setNombre(tipo.getNombre());

        return repo.save(existente);
    }

    @Override
    public void eliminar(Long id) {
        if (!repo.existsById(id)) {
            throw new EntityNotFoundException("Tipo de característica no encontrado");
        }
        repo.deleteById(id);
    }

    @Override
    public TipoCaracteristica buscarPorId(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("TipoCaracteristica no encontrado"));
    }

    @Override
    public Page<TipoCaracteristica> listar(Pageable pageable) {
        return repo.findAll(pageable);
    }
}
