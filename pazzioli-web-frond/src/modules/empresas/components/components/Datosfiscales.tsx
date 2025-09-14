import { CButton, CPopover } from "@coreui/react";
import { useEffect, useState } from "react";
import api from "../../../../apicofig";

export function Datosfiscales({ register, CInputGroup,
  CFormInput,
  CFormSelect,
  CFormFloating,
  CFormLabel,
  errors,
...rest}: any) {
  const [actividadeconomica,setactividadeconomica]=useState([])
  const [filtrodes, setFiltro] = useState('');
  const [filtroco, setFiltroco] = useState(0);
  const [mostrardes,setmostrardes]=useState(true)
 const [tipohove,settipohover]=useState("hoverchrome");
 const [CIIU,setciiu]=useState('')
  useEffect(()=>{
    /*Ese bloque detecta el navegador revisando firmas específicas dentro de la cadena userAgent.
Usa expresiones regulares (/texto/) y el método .test(cadena) que devuelve true si encuentra coincidencia. */
    function detectarNavegador() {
  const userAgent = navigator.userAgent;
/*Para saber en qué navegador está un usuario, en el lado del cliente (JavaScript en el navegador), puedes usar el objeto navigator.
Lo más común es leer navigator.userAgent y analizarlo.*/
/* Ese código está evaluando el contenido de navigator.userAgent (una cadena que describe el navegador y sistema operativo del usuario) 
usando expresiones regulares. */

/* Revisa si en la cadena aparece "Edg/" (firma de Microsoft Edge).
Ejemplo: "Edg/125.0.0.0". */
  if (/Edg\//.test(userAgent)) {
    return "Microsoft Edge";
  } else if (/OPR\//.test(userAgent)) {
    return "Opera";
  } else if (/Chrome\//.test(userAgent) && !/Edg\//.test(userAgent)) {
    return "Google Chrome";
  } else if (/Safari\//.test(userAgent) && !/Chrome\//.test(userAgent)) {
    return "Safari";
  } else if (/Firefox\//.test(userAgent)) {
    return "Mozilla Firefox";
  } else if (/MSIE|Trident\//.test(userAgent)) {
    return "Internet Explorer";
  } else {
    return "Desconocido";
  }
}

console.log("Estás usando:", detectarNavegador());
  },[])

   useEffect(()=>{
  traerdataauto()

   },[filtroco,filtrodes])
   const traerdataauto= async ()=>{
    const data=await api.get(`/empresa/traeractividadeseconomicas?descripcion=${filtrodes}&codigo=${filtroco}`)
    console.log(data.data.datosactividad)
    setactividadeconomica(data.data.datosactividad)
   }
    return ( 
        <>
         <div className="col-12">
                <div style={{padding:'10px 6px 0 0 ',marginLeft:'0px'}}>
                    <CPopover
              title="Popover title"
              content="And here’s some amazing content. It’s very engaging. Right?"
              placement="right"
               fallbackPlacements={[]}
                trigger="hover"
        
            >
              <CButton  style={{paddingLeft:'14px'}} >
                <h6 className="h6 paddingtitleempresabutton " style={{padding:'10px 6px 0 0 ',marginLeft:'0px'}}> Datos fiscales</h6>
               
              </CButton>
            </CPopover>  
                </div>


                  <div>
                <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 paddingempresa  imputcompletgeneral"  >

                     
                          <CInputGroup className="" >
               <CFormFloating className="margeniputempresa">
              <CFormInput placeholder=""     list="actividades" className="inputdatosempresa fontletre inputcomple"   value={filtrodes}        {...register('Actividadeconomica', { required: 'Este campo es obligatorio' })}    onChange={(e: any) => {
                 const valor = e.target.value;
                setFiltro(e.target.value);
                setmostrardes(true)
             setFiltroco(valor === "" ? 0: (!isNaN(valor) ? Number(valor) : 0));

    console.log(e.target.value);
    // Llamar al onChange original de react-hook-form
    register('Actividadeconomica').onChange(e);
  }}/>
    { errors.Actividadeconomica ? (
    <CFormLabel style={{ color: "red" }}>{"Actividad económica (CIIU)"+" "+CIIU}</CFormLabel>):(
  <CFormLabel>{"Actividad económica (CIIU)"+" "+CIIU}</CFormLabel>)}
    
     {filtrodes && mostrardes && (
      <ul className={`lista-opcionesaut ${tipohove}`}>
        {actividadeconomica.map((item:any) => (
          <li key={item.codigo} onClick={()=>{
            setFiltro(item.descripcionActividad)
            setciiu(item.codigo)
            setmostrardes(false)
          }}>{item.descripcionActividad}</li>
        ))}
      </ul>
    )}

              </CFormFloating>
            </CInputGroup>
                                 
      


            
    
            </div>


 <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 margingleftcol" style={{paddingLeft:'0px'}}>


    
                   <CInputGroup >
                        {/* CoreUI soporta etiquetas flotantes (floating labels) en selects. Estas etiquetas se mantienen por encima y en posición flotante incluso cuando se selecciona un valor 
                        CFormFloating envuelve el <CFormSelect> y etiqueta para aplicar el estilo flotante.
                        Debe incluir placeholder en el select para que funcione correctamente.
                        La etiqueta (label), se queda flotando arriba incluso después de elegir una opción*/}
                        <CFormFloating className="margeniputempresa">
  <CFormSelect
    size="lg"
    placeholder="Tipo de persona"
    className="inputselect fontletre "
    {...register('regimen', { required: 'Este campo es obligatorio' })}
  >
    <option value="" >Seleccione una opción</option>
       {
      rest.datosempresa.regimen?.map((item:any)=>{
      return <option value={item.codigo} >{item.descripcion}</option>    
      })
     }  
  </CFormSelect>
  { errors.regimen ? (
    <CFormLabel style={{ color: "red" }}>Regimen</CFormLabel>):(
  <CFormLabel>Regimen</CFormLabel>)}
</CFormFloating>
                                 
      </CInputGroup>



                     
                                 
     

                


            



            </div>


                </div>
                </div> 
                  </div>
        </>
     );
}

