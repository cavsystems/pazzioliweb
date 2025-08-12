package com.pazzioliweb.empresaback.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pazzioliweb.commonbacken.services.TenantService;
import com.pazzioliweb.empresaback.dtos.Datosempresa;
import com.pazzioliweb.empresaback.dtos.EmpresaResponseauth;
import com.pazzioliweb.empresasback.entyti.Actividadeconomica;
import com.pazzioliweb.empresasback.repositori.ActividadeconomicaRepositori;
import com.pazzioliweb.usuariosbacken.repositorio.TipoidentificacionRepository;
import com.pazzioliweb.usuariosbacken.repositorio.TipopersonaRepository;
import com.pazzioliweb.usuriosbacken.entyti.Tipoidentificacion;
import com.pazzioliweb.usuriosbacken.entyti.Tipopersona;



@Component
@RestController
@RequestMapping("/api/empresa")
public class Empresacontroller {
	@Autowired
	  private JdbcTemplate jdbc;
	  @Autowired
	  private TenantService tenantService;
	  @Autowired 
	  private TipopersonaRepository tipopersonarepositori;
	  @Autowired 
	  private TipoidentificacionRepository  tipoidentificacionrepositori;
	  @Autowired
	  private ActividadeconomicaRepositori actividadeconomicarepositorio;
	  
	  
	  private Datosempresa datosempresa=new Datosempresa();

	 @PostMapping("/crear")
	 public ResponseEntity<Void> crearEmpresa(@RequestBody EmpresaResponseauth dto) {
	    	 // Aquí request.db es el tenantId}
		   String schema = dto.getNombreconexion().toLowerCase().replaceAll("[^a-z0-9_]", "");
		   jdbc.execute("CREATE SCHEMA IF NOT EXISTS `" + schema + "`");
		   tenantService.initTenantSchema(schema);
		   return ResponseEntity.status(HttpStatus.CREATED).build();
		 	 }
	 
	 
	 @RequestMapping("/traerempresa")
	 public ResponseEntity<Map<String, Object>> traerempresa() {
		 
		    Map<String, Object> response = new HashMap<>();
		 List<Tipopersona>  tipersona=tipopersonarepositori.findAll();
		 List<Tipoidentificacion> tipoidentificacion=tipoidentificacionrepositori.findAll();
		 datosempresa.setTipopersona(tipersona);
		 datosempresa.setTipoidentificacion(tipoidentificacion);
		    
		 
            response.put("datos",  datosempresa );
            return ResponseEntity
                    .ok()
                    .body(response);
		 
		 
		 
	 }
	    
	 @RequestMapping("/traeractividadeseconomicas")
	 public ResponseEntity<Map<String, Object>> traeractividades(@RequestParam(defaultValue ="1") int pagina) {
		 Object req;
		 int inicio = pagina > 0 ? pagina * 15 - 15 : 0;
		    Map<String, Object> response = new HashMap<>();
		
		 
		 PageRequest pageRequest = PageRequest.of(1, 15); // página 1 (empieza en 0), 15 registros
		 List<Actividadeconomica> actividades = actividadeconomicarepositorio.findWithLimit(pageRequest);
		 
         response.put("datosactividad",  actividades );
         return ResponseEntity
                 .ok()
                 .body(response);
		 
		 
		 
	 }
	    

}
