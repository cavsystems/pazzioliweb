package com.pazzioliweb.tercerosmodule.service;

import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.pazzioliweb.tercerosmodule.dtos.ContactoTerceroDTOImpl;
import com.pazzioliweb.tercerosmodule.dtos.SedeTerceroDTOImpl;
import com.pazzioliweb.tercerosmodule.dtos.TerceroDTOImpl;
import com.pazzioliweb.tercerosmodule.entity.Terceros;
import com.pazzioliweb.tercerosmodule.repositori.TercerosRepository;

@Service
public class TercerosService {

    private final TercerosRepository terceroRepository;

    @Autowired
    public TercerosService(TercerosRepository terceroRepository) {
        this.terceroRepository = terceroRepository;
    }

    public Page<TerceroDTOImpl> listar(int page, int size, String sortField, String sortDirection) {
        Sort sort = sortDirection.equalsIgnoreCase("asc")
                ? Sort.by(sortField).ascending()
                : Sort.by(sortField).descending();

        Pageable pageable = PageRequest.of(page, size, sort);

        Page<Terceros> tercerosPage = terceroRepository.findAll(pageable);

        return tercerosPage.map(this::convertirADTO);
    }

    public Page<TerceroDTOImpl> buscar(String termino, int page, int size, String sortField, String sortDirection) {
        Sort sort = sortDirection.equalsIgnoreCase("asc")
                ? Sort.by(sortField).ascending()
                : Sort.by(sortField).descending();

        Pageable pageable = PageRequest.of(page, size, sort);

        Page<Terceros> tercerosPage = terceroRepository.buscarPorIdentificacionORazonSocial("%" + termino + "%", pageable);

        return tercerosPage.map(this::convertirADTO);
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

    private TerceroDTOImpl convertirADTO(Terceros t) {
        TerceroDTOImpl dto = TerceroDTOImpl.fromEntity(t);

        // Mapear Contactos
        if (t.getContactos() != null) {
            dto.setContactos(
                    t.getContactos()
                     .stream()
                     .map(ContactoTerceroDTOImpl::fromEntity)
                     .collect(Collectors.toList())
            );
        }

        // Mapear Sedes
        if (t.getSedes() != null) {
            dto.setSedes(
                    t.getSedes()
                     .stream()
                     .map(SedeTerceroDTOImpl::fromEntity)
                     .collect(Collectors.toList())
            );
        }

        return dto;
    }
}