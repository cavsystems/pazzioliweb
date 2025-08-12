import { CButton, CPopover } from "@coreui/react";
import { useEffect, useState } from "react";
import api from "../../../../apicofig";

export function Datosfiscales({ register, CInputGroup,
  CFormInput,
  CFormSelect,
  CFormFloating,
  CFormLabel,
...rest}: any) {
  const [actividadeconomica,setactividadeconomica]=useState([])
  const [filtro, setFiltro] = useState('');

  
const resultados = actividadeconomica.filter((item:any) =>
  item.descripcionActividad.toLowerCase().includes(filtro.toLowerCase())
);
   useEffect(()=>{
    traerdataauto(1)

   },[])
   const traerdataauto= async (numero:number)=>{
    const data=await api.get(`/empresa/traeractividadeseconomicas?pagina=${numero}`)
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
              <CFormInput placeholder=""     list="actividades" className="inputdatosempresa fontletre"           {...register('Actividad economica', { required: 'Este campo es obligatorio' })}    onChange={(e: any) => {
    setFiltro(e.target.value);
    console.log(e.target.value);
    // Llamar al onChange original de react-hook-form
    register('Actividad economica').onChange(e);
  }}/>
    <CFormLabel>Actividad económica (CIU)</CFormLabel>
     {filtro && (
      <ul className="lista-opcionesaut">
        {resultados.map((item:any) => (
          <li key={item.codigo}>{item.descripcionActividad}</li>
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
     <option value="juridica" >Juridica</option>    
  </CFormSelect>
  <CFormLabel>Regimen</CFormLabel>
</CFormFloating>
                                 
      </CInputGroup>



                     
                                 
     

                


            



            </div>


                </div>
                </div> 
                  </div>
        </>
     );
}

