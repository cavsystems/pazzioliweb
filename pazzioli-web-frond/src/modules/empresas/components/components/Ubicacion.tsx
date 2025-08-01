import { CButton, CPopover } from "@coreui/react";

function Ubicacion({ register, CInputGroup,
  CFormInput,
  CFormSelect,
  CFormFloating,
  CFormLabel,
...rest}: any) {
    return ( 
        <>
           <div className="col-12">

                <h6  className="titlecamposempresa h6"  style={{padding:'18px 10px 3px 0 '}}>Ubicación</h6>
               <div>
                <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">

                         <CInputGroup >
                        {/* CoreUI soporta etiquetas flotantes (floating labels) en selects. Estas etiquetas se mantienen por encima y en posición flotante incluso cuando se selecciona un valor 
                        CFormFloating envuelve el <CFormSelect> y etiqueta para aplicar el estilo flotante.
                        Debe incluir placeholder en el select para que funcione correctamente.
                        La etiqueta (label), se queda flotando arriba incluso después de elegir una opción*/}
                        <CFormFloating className="margeniputempresa">
  <CFormSelect
    size="lg"
    placeholder=""
    className="inputselect fontletre "
    {...register('pais', { required: 'Este campo es obligatorio' })}
  >
    <option value="" >Seleccione una opción</option>
     <option value="Colombia" >Colombia</option>    
  </CFormSelect>
  <CFormLabel>Pais</CFormLabel>
</CFormFloating>
                                 
      </CInputGroup>


                <CInputGroup >
                        {/* CoreUI soporta etiquetas flotantes (floating labels) en selects. Estas etiquetas se mantienen por encima y en posición flotante incluso cuando se selecciona un valor 
                        CFormFloating envuelve el <CFormSelect> y etiqueta para aplicar el estilo flotante.
                        Debe incluir placeholder en el select para que funcione correctamente.
                        La etiqueta (label), se queda flotando arriba incluso después de elegir una opción*/}
                        <CFormFloating className="margeniputempresa">
  <CFormSelect
    size="lg"
    placeholder=""
    className="inputselect fontletre "
    {...register('codigopostal', { required: 'Este campo es obligatorio' })}
  >
    <option value="" >Seleccione una opción</option>
     <option value="Valle del Cauca" >Valle del Cauca</option>    
  </CFormSelect>
  <CFormLabel>Municipio</CFormLabel>
</CFormFloating>
                                 
      </CInputGroup>
            </div>


 <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" style={{paddingLeft:'0px'}}>


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
    {...register('tipodepersona', { required: 'Este campo es obligatorio' })}
  >
    <option value="" >Seleccione una opción</option>
     <option value="juridica" >Juridica</option>    
  </CFormSelect>
  <CFormLabel>Departamento</CFormLabel>
</CFormFloating>
                                 
      </CInputGroup>
                                 
     

                <CInputGroup>
               <CFormFloating className="margeniputempresa">
              <CFormInput placeholder=""  className="inputdatosempresa fontletre"  {...register('segundoapellido', { required: 'Este campo es obligatorio' })} />
               <CFormLabel>Código postal</CFormLabel>
              </CFormFloating>
            </CInputGroup>


            
            

            </div>


                </div>
                </div> 
     
            </div>
        </>
    );
}

export default Ubicacion;