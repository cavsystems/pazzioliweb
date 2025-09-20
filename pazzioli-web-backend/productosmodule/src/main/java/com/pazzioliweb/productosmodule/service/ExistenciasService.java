package com.pazzioliweb.productosmodule.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pazzioliweb.productosmodule.dtos.ExistenciaDTO;
import com.pazzioliweb.productosmodule.entity.Existencias;
import com.pazzioliweb.productosmodule.repositori.ExistenciasRepository;

@Service
public class ExistenciasService {
	@Autowired
    private ExistenciasRepository existenciasRepository;

    public List<ExistenciaDTO> listarExistencias() {
        return existenciasRepository.findAllExistencias();
    }
    
    public List<ExistenciaDTO> listarExistenciasXBodega(Integer id) {
        return existenciasRepository.findByBodega(id);
    }
    
    public List<ExistenciaDTO> listarExistenciasXProducto(Integer id) {
        return existenciasRepository.findByProducto(id);
    }

    public Optional<Existencias> buscarPorId(Integer id) {
        return existenciasRepository.findById(id);
    }

    public Existencias guardarExistencia(Existencias existencia) {
        return existenciasRepository.save(existencia);
    }

    public void eliminarExistencia(Integer id) {
        existenciasRepository.deleteById(id);
    }
}
