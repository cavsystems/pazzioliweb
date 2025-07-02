package com.pazzioliweb.pazzioli_web_backend.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.pazzioliweb.pazzioli_web_backend.dto.LoginRequest;
import com.pazzioliweb.pazzioli_web_backend.entity.Usuario;
import com.pazzioliweb.pazzioli_web_backend.repository.UsuarioRepository;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UsuarioRepository usuarioRepository;

    @Autowired
    public AuthController(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody LoginRequest request) {
        Optional<Usuario> optional = usuarioRepository.findByLogin(request.login);

        Map<String, Object> response = new HashMap<>();

        if (optional.isPresent()) {
            Usuario usuario = optional.get();
            if (usuario.getPassword().equals(request.password)) {
                response.put("success", true);
                response.put("user", usuario);
            } else {
                response.put("success", false);
                response.put("message", "Credenciales inválidas");
            }
        } else {
            response.put("success", false);
            response.put("message", "Credenciales inválidas");
        }

        return response;
    }
}
