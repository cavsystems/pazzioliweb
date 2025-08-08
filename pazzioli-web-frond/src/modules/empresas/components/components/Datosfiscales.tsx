import { CButton, CPopover } from "@coreui/react";

export function Datosfiscales({ register, CInputGroup,
  CFormInput,
  CFormSelect,
  CFormFloating,
  CFormLabel,
...rest}: any) {
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
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 paddingempresa"  >

                     
                          <CInputGroup >
               <CFormFloating className="margeniputempresa">
              <CFormInput placeholder=""  className="inputdatosempresa fontletre"           {...register('Actividad economica', { required: 'Este campo es obligatorio' })} />
  <CFormLabel>Actividad económica (CIU)</CFormLabel>

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

