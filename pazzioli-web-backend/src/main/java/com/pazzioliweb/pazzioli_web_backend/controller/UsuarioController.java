package com.pazzioliweb.pazzioli_web_backend.controller;

import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import com.pazzioliweb.pazzioli_web_backend.dto.UsuarioDTO;
import com.pazzioliweb.pazzioli_web_backend.entity.Usuario;
import com.pazzioliweb.pazzioli_web_backend.repository.UsuarioRepository;
import org.springframework.data.redis.core.RedisTemplate;
import com.pazzioliweb.pazzioli_web_backend.dto.DatosSesiones;
@PreAuthorize("hasRole('ROLE_admin')")
@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {
    private final UsuarioRepository usuarioRepository;
    private final AuthController auth;
   

    // ⚠️ credentials puede ser null o una cadena, según cómo lo hayas puesto
   
   
    
    @Autowired
    public UsuarioController(UsuarioRepository usuarioRepository,AuthController auth) {
        this.usuarioRepository = usuarioRepository;
        this.auth=auth;

    }
    
    
    

    // Permite crear un registro de usuario en la tabla usuario de la base de datos
    @PostMapping
    public Usuario crearUsuario(@RequestBody UsuarioDTO dto) {
    	DatosSesiones  sesion=auth.obtenerseion();
        System.out.println(">>> Entró al método crearUsuario()"+sesion.getDbName());
        Usuario usuario = new Usuario();
        usuario.setNombre(dto.nombre);
        usuario.setLogin(dto.login);
        usuario.setPassword(dto.password);
        usuario.setNivel(dto.nivel);
        usuario.setEstado(dto.estado);

        return usuarioRepository.save(usuario);
    }

    // Permite modificar un registro de usuario en la tabla usuario de la base de datos
    @PutMapping("/{id}")
    public Usuario modificarUsuario(@PathVariable long id, @RequestBody UsuarioDTO dto){
        Optional<Usuario> optional = usuarioRepository.findById(id);
        if(!optional.isPresent()){
            throw new RuntimeException("El Usuario no existe con ese id:"+id);
        }
        
        Usuario usuario = optional.get();
        usuario.setNombre(dto.nombre);
        usuario.setLogin(dto.login);
        usuario.setPassword(dto.password);
        usuario.setNivel(dto.nivel);
        usuario.setEstado(dto.estado);

        return usuarioRepository.save(usuario);
    }

     @GetMapping
    public List<Usuario> listar() {
        return usuarioRepository.findAll();
    }

    @GetMapping("/{login}")
    public Usuario buscarPorLogin(@PathVariable String login) {
        return usuarioRepository.findByLogin(login)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
    }
}
