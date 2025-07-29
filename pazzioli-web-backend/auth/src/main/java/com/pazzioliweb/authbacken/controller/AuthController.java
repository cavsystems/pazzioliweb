package com.pazzioliweb.authbacken.controller;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.hibernate.result.Output;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import com.pazzioliweb.authbacken.dtos.LoginRequest;
import com.pazzioliweb.authbacken.jwt.JwUtilJava;
import com.pazzioliweb.commonbacken.conexiondb.ConexionDinamica;
import com.pazzioliweb.commonbacken.conexiondb.ConexionFactory;
import com.pazzioliweb.commonbacken.conexiondb.TenantContext;
import com.pazzioliweb.commonbacken.dtos.DatosSesiones;
import com.pazzioliweb.commonbacken.entyti.Sesiones;
import com.pazzioliweb.commonbacken.repositorio.SessionRepository;
import com.pazzioliweb.usuariosbacken.repositorio.UsuarioRepository;
import com.pazzioliweb.usuriosbacken.entyti.Usuario;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;

@Component
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UsuarioRepository usuarioRepository;
    private final SessionRepository sessionRepository;
    private final JwUtilJava jwtUtil;
    @Autowired
    private ConexionFactory conexion;
    @Autowired
    private RedisTemplate<String, DatosSesiones> redisTemplate;
  private final   HttpServletResponse servletResponse;
    @Autowired
    public AuthController(UsuarioRepository usuarioRepository, SessionRepository sessionRepositorio,JwUtilJava jwtUtil, HttpServletResponse servletResponse) {
        this.usuarioRepository = usuarioRepository;
        this.jwtUtil = jwtUtil;
        this.servletResponse=servletResponse;
        this.sessionRepository=sessionRepositorio;
        
    }

    @PostMapping("/login")
    public  ResponseEntity<Map<String, Object>> login(@RequestBody LoginRequest request) {
    	 // Aquí request.db es el tenantId
    	
        Optional<Usuario> optional = usuarioRepository.findByUsuario(request.usuario.trim());

        Map<String, Object> response = new HashMap<>();
        System.out.println(optional.isPresent());	
        if (optional.isPresent()) {
            Usuario usuario = optional.get();
            System.out.println(usuario.getUsuario());
           if (usuario.getContrasena().equals(request.password)) {
            	  String token = jwtUtil.generateToken(usuario,request.db);
            	  
            	 Optional<Sesiones> optionalsession = sessionRepository.findFirstBycodigoUsuarioAndEstadoOrderByCodigoDesc(usuario.getCodigo(),"ACTIVO");
            	
            	 if (optionalsession.isPresent()) {
               System.out.println("sesion activa");
            		    Sesiones sesion = optionalsession.get();
            		    LocalDateTime fechaFin = sesion.getFechainicio();
            		    DateTimeFormatter fmt = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
            		    System.out.println("Fecha y hora de fin: " + fechaFin.format(fmt));
            		    
            		    response.put("success", false);
                        response.put("sesion",  sesion );
                        return ResponseEntity
                                .ok()
                                .body(response);
            		}
            	 
            	 crearSesion(usuario.getCodigo(),token);
            	 
                  // ✅ Crear cookie con el token esta cookie contendra el token con el que trabajalemos duerante todo el logueo
                  Cookie jwtCookie = new Cookie("token", token);
                  jwtCookie.setHttpOnly(true); // no accesible desde JavaScript
                  jwtCookie.setSecure(false);   // solo por HTTPS en producción
                  jwtCookie.setPath("/");
                  jwtCookie.setMaxAge(24 * 60 * 60); // 1 día
                 jwtCookie.setDomain("localhost"); // ⚠️ importante según tu entorno
                  servletResponse.addCookie(jwtCookie);
                response.put("success", true);
                response.put("user", usuario);
                

                return ResponseEntity
                        .ok()
                        .body(response);
            } else {
                response.put("success", false);
                response.put("message", "Credenciales inválidas");
                return ResponseEntity
               		 .status(HttpStatus.BAD_REQUEST).
               		 body(response);
           }
        
            
        } else {
            response.put("success", false);
            response.put("message", "Credenciales inválidas");
            return ResponseEntity
            		 .status(HttpStatus.BAD_REQUEST).
            		 body(response);
        
            
        }
        
        
        

       
    }
    
   public void essuperadministrador(int id) {
	   
	   
   }
    public void crearSesion(int codigo,String token) {
    	String fechaStr = "1990-01-01 00:00:00";
    	ZoneId zonaBogota = ZoneId.of("America/Bogota");
    	DateTimeFormatter fmt = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        Sesiones sesion = new Sesiones();
        sesion.setCodigoUsuario(codigo);// reemplaza con ID real
        sesion.setToken(token);
        sesion.setEstado("ACTIVO");
        System.out.println(LocalDateTime.now(zonaBogota));
        sesion.setFechainicio(LocalDateTime.now(zonaBogota));
    
        sesion.setFechafin(LocalDateTime.parse(fechaStr, fmt));
    // o lo que necesites

        sessionRepository.save(sesion);      // ✅ esto hace el INSERT
    }
    
   /* @DeleteMapping("/logout")
    public ResponseEntity<Map<String, Object>> logout(Authentication authentication){
    	Usuario  usuario=(Usuario)  authentication.getPrincipal();
    	
    	
    	
    	
    	
    }*/
    
    public DatosSesiones obtenerseion() {
    	
    	 Authentication  auth = SecurityContextHolder.getContext().getAuthentication();
    	 
    	 Object credenciales = auth.getCredentials(); 
    	    DatosSesiones sesiones = redisTemplate.opsForValue().get(credenciales.toString());
    	    return sesiones;
    }
}
