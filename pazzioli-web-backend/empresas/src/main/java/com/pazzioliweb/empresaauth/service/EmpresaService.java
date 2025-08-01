package com.pazzioliweb.empresaauth.service;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.pazzioliweb.empresaback.dtos.EmpresaResponseauth;
@Service
public class EmpresaService {

	
	@PersistenceContext
    private EntityManager em;

	@SuppressWarnings("unchecked")
	public List<EmpresaResponseauth> buscarNombreconexion(String cc) {
	    return em.createNativeQuery("CALL buscarusuario(:cc)", "EmpresaResponseauthMapping")
	             .setParameter("cc", cc)
	             .getResultList();
	}

}
