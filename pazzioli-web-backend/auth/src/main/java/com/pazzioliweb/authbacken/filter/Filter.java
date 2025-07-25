package com.pazzioliweb.authbacken.filter;

import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.pazzioliweb.authbacken.jwt.JwUtilJava;
import com.pazzioliweb.usuariosbacken.repositorio.UsuarioRepository;
import com.pazzioliweb.usuriosbacken.entyti.Usuario;

import io.jsonwebtoken.Claims;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
@Component
public class Filter extends OncePerRequestFilter {
	 
	 @Autowired
	    private JwUtilJava jwtUtil;

	    @Autowired
	    private UsuarioRepository usuarioRepository;
	@Override
	protected void doFilterInternal (HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		
		        
		// TODO Auto-generated method stub
        
        String token = null;

        // ✅ Buscar cookie con nombre "token"
        if (request.getCookies() != null) {
            for (Cookie cookie : request.getCookies()) {
                if ("token".equals(cookie.getName())) {
                    token = cookie.getValue();
                    break;
                }
            }
        }
        
        if (token != null && jwtUtil.validarToken(token)) {
            Claims claims = jwtUtil.extraerClaims(token);
             long nivel = claims.get("nivel", Long.class);
            // etc. lógica de autenticación...
            //registro el usuario en el serividor para reconocer un usuario como logueado en springsecurity y en el resto de la plicacion
          Optional<Usuario> optional;
          optional=usuarioRepository.findByLogin(claims.getSubject());
          Usuario usuario;
          if(optional.isPresent()) {
        	  usuario=optional.get();
          }else {
        	  usuario=null;
          }
            	String role="";
    	    	switch ((int) nivel) {
    			case 1: {
    				
    				role="admin";
    				break;
    			}
    			default:
    				role="noautenticado";
    				break;
    				
    			}
                List<SimpleGrantedAuthority> authorities = List.of(
                	    new SimpleGrantedAuthority("ROLE_" + role)
                	);
                UsernamePasswordAuthenticationToken authToken =
                    new UsernamePasswordAuthenticationToken(usuario, claims.get("idsecion",String.class), authorities);
                SecurityContextHolder.getContext().setAuthentication(authToken);

            	 filterChain.doFilter(request, response);
            }else {

           	 response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
           	    response.setContentType("application/json");
           	    response.getWriter().write("{\"error\": \"Token invalido o ausente\"}");
            	
            }
           
     
		
	}
	
	
	@Override
	protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
	    String path = request.getRequestURI();
	    return path.startsWith("/api/auth") || path.startsWith("/ws/");
	}
	

}