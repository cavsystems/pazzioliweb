export function Identificacion({ register, CInputGroup,
  CFormInput,
  CFormSelect,
  CFormFloating,
  CFormLabel,
...rest}: any) {
    return ( 
        <>
           <div className="col-12">

                <h6  className="titlecamposempresa h6" style={{padding:'45px 10px 10px 0 '}}>Identificación</h6>
               <div>
                <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 paddingempresa" >

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
  <CFormLabel>Tipo de persona</CFormLabel>
</CFormFloating>
                                 
      </CInputGroup>
          
                <CInputGroup >
                <CFormFloating className="margeniputempresa">
              <CFormInput placeholder=""  className="inputdatosempresa fontletre"    {...register('identificacion', { required: 'Este campo es obligatorio' })}          
  />
   <CFormLabel htmlFor="identificacion">Numero de identificación</CFormLabel>
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
    placeholder="Tipo de identificacion"
    className="inputselect fontletre"
    {...register('tipoidentificacion', { required: 'Este campo es obligatorio' })}
  >
    <option value="" >Seleccione una opción</option>
      <option value="estrageria" >estrangeria</option>    
  </CFormSelect>
  <CFormLabel>Tipo de identificación</CFormLabel>
</CFormFloating>
                                 
      </CInputGroup>

                <CInputGroup >
                 <CFormFloating className="margeniputempresa">

              <CFormInput placeholder=""  className="inputdatosempresa fontletre"           {...register('digitodeverificacion', { required: 'Este campo es obligatorio' })} />
              
    <CFormLabel htmlFor="digitodeverificacion">Digito de verificación</CFormLabel>
              </CFormFloating>
            </CInputGroup>
            </div>


                </div>
                </div> 
            </div>

        </>
     );
}

