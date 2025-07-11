package com.pazzioliweb.pazzioli_web_backend.utiljava;

import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.pazzioliweb.pazzioli_web_backend.entity.Usuario;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import com.pazzioliweb.pazzioli_web_backend.dto.DatosSesiones;
import java.io.IOException;
import java.security.Key;
import java.time.Duration;
import java.time.Instant;
import java.time.temporal.ChronoUnit;

//clase para generar y validar jwt
@Component

public class JwtUtilJava  {
	 private final String SECRET_KEY = "clave_secreta_clave_secreta_clave_secreta"; // 🔐 mínimo 32 bytes para HS256
	    private final Key key = Keys.hmacShaKeyFor(SECRET_KEY.getBytes());
	    @Autowired
	    private RedisTemplate<String, DatosSesiones> redisTemplate;
	    public String generateToken(Usuario usuario, String db) {
	    	String sessionId = UUID.randomUUID().toString(); // identificador seguro
	    	DatosSesiones sesion = new DatosSesiones();
	    	sesion.setLogin(usuario.getLogin());
	    	sesion.setDbName(db);
	    	sesion.setIdUsuario(sessionId);
	    	sesion.setNivel(usuario.getNivel());
	    	sesion.setCreada(Instant.now());
	    	sesion.setExpira(Instant.now().plus(24, ChronoUnit.HOURS));
	    	redisTemplate.opsForValue().set(sessionId, sesion, Duration.ofHours(24));
	    		        return Jwts.builder()
	                .setSubject(usuario.getLogin()).claim("nivel", usuario.getNivel()).claim("idsecion", sessionId)
	                .setIssuedAt(new Date())
	                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 24)) // 24h
	                .signWith(key, SignatureAlgorithm.HS256)
	                .compact();
	        
	    }

	    public Claims extraerClaims(String token) {
	        return Jwts.parserBuilder()
	                .setSigningKey(key)
	                .build()
	                .parseClaimsJws(token)
	                .getBody();
	    }
	    
	    
	    public boolean validarToken(String token) {
	        try {
	            // Si esto no lanza excepción, el token es válido
	            Jwts.parserBuilder()
	                .setSigningKey(key)
	                .build()
	                .parseClaimsJws(token);
	            return true;
	        } catch (Exception e) {
	            // Token inválido o expirado
	            return false;
	        }
	    }
	
}
