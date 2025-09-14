function Contacto(
    { register, CInputGroup,
  CFormInput,
  CFormSelect,
  CFormFloating,
  CFormLabel,
   errors,
...rest}: any
) {
    return ( 
          <>
           <div className="col-12">

                <h6  className="titlecamposempresa h6  paddingtitleempresa" style={{padding:'12px 10px 5px 0 '}}>Contacto</h6>
               <div>
                <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 paddingempresa">

                      <CInputGroup >
                        {/* CoreUI soporta etiquetas flotantes (floating labels) en selects. Estas etiquetas se mantienen por encima y en posición flotante incluso cuando se selecciona un valor 
                        CFormFloating envuelve el <CFormSelect> y etiqueta para aplicar el estilo flotante.
                        Debe incluir placeholder en el select para que funcione correctamente.
                        La etiqueta (label), se queda flotando arriba incluso después de elegir una opción*/}
                        <CFormFloating className="margeniputempresa">
    <CFormInput     id="Correoempresa"
    placeholder=""
  className="inputdatosempresa fontletre"    {...register('correoempresa', { required: 'Este campo es obligatorio' })} 

  />
  { errors.correoempresa ? (
    <CFormLabel style={{ color: "red" }}>Correo empresa</CFormLabel>):(
  <CFormLabel>Correo empresa</CFormLabel>)}
  
</CFormFloating>
                                 
      </CInputGroup>

                 

        <CInputGroup >
                        {/* CoreUI soporta etiquetas flotantes (floating labels) en selects. Estas etiquetas se mantienen por encima y en posición flotante incluso cuando se selecciona un valor 
                        CFormFloating envuelve el <CFormSelect> y etiqueta para aplicar el estilo flotante.
                        Debe incluir placeholder en el select para que funcione correctamente.
                        La etiqueta (label), se queda flotando arriba incluso después de elegir una opción*/}
                        <CFormFloating className="mb-2">
    <CFormInput     id="celularempresa"
    placeholder=""
  className="inputdatosempresa fontletre"    {...register('celularempresa', { required: 'Este campo es obligatorio' })}          
  />
  { errors.celularempresa ? (
    <CFormLabel style={{ color: "red" }}>Celular empresa</CFormLabel>):(
  <CFormLabel htmlFor="celularempresa">Celular empresa</CFormLabel>)}
</CFormFloating>
                                 
      </CInputGroup>       

            </div>


 <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 margingleftcol" style={{paddingLeft:'0px'}}>

                   
    

               <CInputGroup >
                        {/* CoreUI soporta etiquetas flotantes (floating labels) en selects. Estas etiquetas se mantienen por encima y en posición flotante incluso cuando se selecciona un valor 
                        CFormFloating envuelve el <CFormSelect> y etiqueta para aplicar el estilo flotante.
                        Debe incluir placeholder en el select para que funcione correctamente.
                        La etiqueta (label), se queda flotando arriba incluso después de elegir una opción*/}
                        <CFormFloating className="mb-2">
    <CFormInput     id="telefonofijoempresa"
    placeholder=""
  className="inputdatosempresa fontletre"    {...register('telefonofijo', { required: 'Este campo es obligatorio' })}          
  />
  { errors.telefonofijo ? (
    <CFormLabel style={{ color: "red" }}>Teléfono fijo empresa</CFormLabel>):(
  <CFormLabel htmlFor="telefonofijoempresa">Teléfono fijo empresa</CFormLabel>)}
</CFormFloating>
                                 
      </CInputGroup>
            </div>


                </div>
                </div> 
            </div>

        </>
     );
}

export default Contacto;