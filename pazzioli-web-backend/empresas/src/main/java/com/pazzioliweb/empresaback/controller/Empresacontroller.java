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

import com.pazzioliweb.commonbacken.entyti.Pais;
import com.pazzioliweb.commonbacken.repositorio.DepartamentoRepositori;
import com.pazzioliweb.commonbacken.repositorio.ImpuestosRepositori;
import com.pazzioliweb.commonbacken.repositorio.MunicipioRepositori;
import com.pazzioliweb.commonbacken.repositorio.PaisRepositori;
import com.pazzioliweb.commonbacken.services.TenantService;
import com.pazzioliweb.empresaback.dtos.Datosempresa;
import com.pazzioliweb.empresaback.dtos.EmpresaResponseauth;
import com.pazzioliweb.empresasback.entyti.Actividadeconomica;
import com.pazzioliweb.empresasback.entyti.Regimen;
import com.pazzioliweb.empresasback.repositori.ActividadeconomicaRepositori;
import com.pazzioliweb.empresasback.repositori.RegimenRepositori;
import com.pazzioliweb.usuariosbacken.repositorio.TipoidentificacionRepository;
import com.pazzioliweb.usuariosbacken.repositorio.TipopersonaRepository;
import com.pazzioliweb.usuriosbacken.entyti.Tipoidentificacion;
import com.pazzioliweb.usuriosbacken.entyti.Tipopersona;

import com.pazzioliweb.commonbacken.entyti.Departamento;
import com.pazzioliweb.commonbacken.entyti.Impuestos;
import com.pazzioliweb.commonbacken.entyti.Municipio;

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
	  @Autowired
	  private RegimenRepositori regimenrepositori;
	  @Autowired
	  private DepartamentoRepositori departamentorepositori;
	  @Autowired
	  private PaisRepositori paisrepository;
	  @Autowired
	  private MunicipioRepositori  municipiorepositori;
	  @Autowired
	  private ImpuestosRepositori impuestorepositorio;
	  
	  private Datosempresa datosempresa=new Datosempresa();
	  private Map<String, Object> response = new HashMap<>();
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
		 
		
		 List<Tipopersona>  tipersona=tipopersonarepositori.findAll();
		 List<Tipoidentificacion> tipoidentificacion=tipoidentificacionrepositori.findAll();
		 List<Regimen> regimen=regimenrepositori.findAll();
		 List<Pais> pais=paisrepository.findAll();
		 List<Departamento> departamento=departamentorepositori.findAll();
		 List<Municipio> municipio=municipiorepositori.findAll();
		 datosempresa.setTipopersona(tipersona);
		 datosempresa.setTipoidentificacion(tipoidentificacion);
		 datosempresa.setRegimen(regimen);
		 datosempresa.setDepartamento(departamento);
		 datosempresa.setPais(pais);
		 datosempresa.setMunicipio(municipio);
		 
            response.put("datos",  datosempresa );
            return ResponseEntity
                    .ok()
                    .body(response);
		 
		 
		 
	 }
	    
	 @RequestMapping("/traeractividadeseconomicas")
	 public ResponseEntity<Map<String, Object>> traeractividades(@RequestParam(defaultValue ="1") int pagina) {
		 Object req;
		 int inicio = pagina > 0 ? pagina * 15 - 15 : 0;
		    
		
		 
		 PageRequest pageRequest = PageRequest.of(1, 15); // página 1 (empieza en 0), 15 registros
		 List<Actividadeconomica> actividades = actividadeconomicarepositorio.findWithLimit(pageRequest);
		 
         response.put("datosactividad",  actividades );
         return ResponseEntity
                 .ok()
                 .body(response);
		 
		 
		 
	 }
	 @RequestMapping("/traerimpuestos")
	 public ResponseEntity<Map<String, Object>> traerimpuestos() {
		 List<Impuestos> impuestos=impuestorepositorio.findAll();
		   response.put("datosimpuestos",  impuestos );
		   return ResponseEntity
	                 .ok()
	                 .body(response);
		}
	    

}
