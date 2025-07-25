package com.pazzioliweb.authbacken.controllersocket;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import com.pazzioliweb.authbacken.dtos.UsuarioRequestDTOauth;
import com.pazzioliweb.empresaback.dtos.EmpresaResponseauth;
import com.pazzioliweb.empresasback.entyti.Empresas;
import com.pazzioliweb.empresasback.repositori.EmpresaRepository;
@Controller
public class AuthControllerSocket {
	 @Autowired
	 private  EmpresaRepository empresa;
	@MessageMapping("/empresa")
	@SendTo("/topic/auth")
	public Object[] enpresa(@Payload UsuarioRequestDTOauth request) {
		List<Object[]>  usuarios =empresa.buscarNombreconexion(request.getIdentificacion());
		Object[] fila = usuarios.get(1);
		System.out.println("Empresa: " + fila[0]);
	    return usuarios.get(0);
	}}
