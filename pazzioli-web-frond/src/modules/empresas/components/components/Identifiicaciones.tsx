export function Identificacion({ register, CInputGroup,
  CFormInput,
  CFormSelect,
  CFormFloating,
  CFormLabel,
...rest}: any) {
    return ( 
        <>
           <div className="col-12">

                <h6  className="titlecamposempresa h6 paddingtitleempresa" style={{padding:'45px 10px 5px 0 '}}>Identificación</h6>
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

     onChange={(e:any) => {
    const value = e.target.value;
    const ite=rest.datosempresa.tipopersona?.findIndex((item:any)=> item.codigo === Number(value)
    )
    console.log(rest.datosempresa.tipopersona[ite], value)
    if (rest.datosempresa.tipopersona[ite].nombre === "Juridica") {
      rest.juridico.setjuridico(false);
      rest.natural.setnatural(true);
    } else if (rest.datosempresa.tipopersona[ite].nombre=== "Natural") {
      rest.juridico.setjuridico(true);
      rest.natural.setnatural(false);
    } else {
      
    }
  }}
  >
    <option value="" >Seleccione una opción</option>
    
     {
      rest.datosempresa.tipopersona?.map((item:any)=>{
      return <option value={item.codigo} >{item.nombre}</option>    
      })
     }
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
    {
      rest.datosempresa.tipoidentificacion?.map((item:any)=>{
      return <option value={item.codigo} >{item.tipoIdentificacion}</option>    
      })
     }
         
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

