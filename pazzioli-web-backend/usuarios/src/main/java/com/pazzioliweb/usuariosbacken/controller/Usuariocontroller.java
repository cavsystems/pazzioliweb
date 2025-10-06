package com.pazzioliweb.usuariosbacken.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;

import com.pazzioliweb.usuariosbacken.dtos.CrearpermisoroDTOS;
import com.pazzioliweb.usuariosbacken.dtos.CrearusuarioDTOS;
import com.pazzioliweb.usuariosbacken.dtos.PermisosDTOS;
import com.pazzioliweb.usuariosbacken.dtos.PermisosrolesDTOS;
import com.pazzioliweb.usuariosbacken.dtos.RolesDTOS;
import com.pazzioliweb.usuariosbacken.entity.Permiso;
import com.pazzioliweb.usuariosbacken.entity.PermisoRol;
import com.pazzioliweb.usuariosbacken.entity.Roles;
import com.pazzioliweb.usuariosbacken.repositorio.PermisoRepository;
import com.pazzioliweb.usuariosbacken.repositorio.PermisoRolRepository;
import com.pazzioliweb.usuariosbacken.repositorio.RolesRepository;

import jakarta.transaction.Transactional;
@Component
@Controller
@RequestMapping("api/usuario")
public class Usuariocontroller {
	@Autowired
	private RolesRepository rolesrepo;
	@Autowired
	private PermisoRepository repopermiso;
	@Autowired
	private RolesRepository reporoles;
	@Autowired
	private PermisoRolRepository permisorol;
	@GetMapping("/roles")
	public ResponseEntity<	Map<String, Object>> traerroles() {
		  Map<String, Object> response = new HashMap<>();
		  System.out.println("entro aqui");
		  List<RolesDTOS> roles=rolesrepo.findByNombreNot("superusuario");
		  
		  response.put("roles",roles);
		  
		  return ResponseEntity.ok().body(response);
		 
		 
	
	}
	
	
	@GetMapping("/permisos")
	public ResponseEntity<	Map<String, Object>> traerpermisos() {
		  Map<String, Object> response = new HashMap<>();
		  System.out.println("entro aqui");
		  List<PermisosDTOS> permisos=repopermiso.findAllPermisoBy();
		  
		  response.put("permisos",permisos);
		  
		  return ResponseEntity.ok().body(response);
		 
		 
	
	}
	
	
	
	@GetMapping("/permisosroles")
	public ResponseEntity<	Map<String, Object>> traerpermisos(@RequestParam int codigoroles) {
		  Map<String, Object> response = new HashMap<>();
		  System.out.println("entro aqui");
		  List<PermisosrolesDTOS> permisosroles= permisorol.findPermisosActivosByRol(codigoroles).stream()
				    .map(p -> new PermisosrolesDTOS(
				            p.getCodigo(),
				            p.getCodigopermiso().getCodigo(),
				            p.getCodigopermiso().getNombre(),
				            p.getCodigorol().getNombre()
				        ))
				        .toList();
		  
		  response.put("permisos",permisosroles);
		  
		  return ResponseEntity.ok().body(response);
		 
		 
	
	}
	 @Transactional
	@PostMapping(value = "/crear")
	public ResponseEntity<	Map<String, Object>> crearpermisos(@RequestBody CrearusuarioDTOS  nombrerol) {
		Map<String, Object> response = new HashMap<>();
		
		System.out.println("nombre rol"+nombrerol);
  response.put("permisos",nombrerol);
     Roles rol=new Roles();
     rol.setNombre(nombrerol.getNombre());
     reporoles.save(rol);
     
     class MensajeResponse {
         private String mensaje;
         private boolean estado;

         public MensajeResponse(String mensaje, boolean estado) {
             this.mensaje = mensaje;
             this.estado = estado;
         }

         public String getMensaje() { return mensaje; }
         public boolean isEstado() { return estado; }
     }
		  response.put("mensaje", new  MensajeResponse("rolcreado",true) );
		  return ResponseEntity.ok().body(response);
		 
		
	}
	 
	 @DeleteMapping("/eliminar/{idrol}/{idpermiso}")
	public ResponseEntity<	Map<String, Object>> eliminarpermisorol(@PathVariable int idrol,@PathVariable int idpermiso) {
		 Map<String, Object> response = new HashMap<>();
		 permisorol.deleteByCodigorol_CodigoAndCodigopermiso_Codigo(idrol,idpermiso);
		 response.clear();
		 class MensajeResponsede {
	         private String mensaje;
	         private boolean estado;

	         public MensajeResponsede(String mensaje, boolean estado) {
	             this.mensaje = mensaje;
	             this.estado = estado;
	         }

	         public String getMensaje() { return mensaje; }
	         public boolean isEstado() { return estado; }
	     }
		 
		 response.put("mensaje", new  MensajeResponsede("relacionelimnada",true));
		 return  ResponseEntity.ok().body(response);
		 
		 
	 }
	 
	 @PostMapping(value = "/crearpermisorol")
		public ResponseEntity<	Map<String, Object>> crearpermisorol(@RequestBody CrearpermisoroDTOS  permisorol) {
			Map<String, Object> response = new HashMap<>();
			
			System.out.println("nombre rol"+permisorol);
	  
	     Roles rol=new Roles();
	     rol.setNombre(nombrerol.getNombre());
	     reporoles.save(rol);
	     
	     class MensajeResponse {
	         private String mensaje;
	         private boolean estado;

	         public MensajeResponse(String mensaje, boolean estado) {
	             this.mensaje = mensaje;
	             this.estado = estado;
	         }

	         public String getMensaje() { return mensaje; }
	         public boolean isEstado() { return estado; }
	     }
			  response.put("mensaje", new  MensajeResponse("rolcreado",true) );
			  return ResponseEntity.ok().body(response);
			 
			
		}
	 
	
	

}
