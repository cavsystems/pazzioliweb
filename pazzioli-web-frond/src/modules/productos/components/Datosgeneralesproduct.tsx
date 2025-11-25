import { CFormFloating, CFormInput, CFormLabel, CFormSelect, CInputGroup } from "@coreui/react";
import { Controller, useFormContext } from "react-hook-form";

function Datosgeneralesproduct() {
    const { register,control,setValue, formState: { errors } } = useFormContext();
    return ( <>
    <div className="col-12">

            
               <div>
                <div className="row">
            
                        
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 paddingempresa">
                                   <CInputGroup className="">
                        {/* CoreUI soporta etiquetas flotantes (floating labels) en selects. Estas etiquetas se mantienen por encima y en posición flotante incluso cuando se selecciona un valor 
                        CFormFloating envuelve el <CFormSelect> y etiqueta para aplicar el estilo flotante.
                        Debe incluir placeholder en el select para que funcione correctamente.
                        La etiqueta (label), se queda flotando arriba incluso después de elegir una opción*/}
        
        
        {/**el control nos servira para panipular los select a nuestro
         * antojo, ya que react-hook-form no permite manipular los select
         * directamente, por eso usamos el controller
         
        
        */}                <CFormFloating className="margeniputempresa">
    <Controller
  control={control}
  name="tipoproducto"
  defaultValue={""}
   rules={{ required: "Este campo es obligatorio" }}
  render={({ field,fieldState }) => (
    <>
  <CFormSelect
  {...field}
    size="lg"
    placeholder="Tipo de persona"
    className="inputselect fontletre "
   

     onChange={(e:any) => {
        // importante para que RHF sepa del cambio
          // lógica adicional...
    
    
  }}
  >
    <option value="" >Seleccione una opción</option>
      <option value="1" >Servicio</option>
      <option value="2" >Producto</option>
      

    
     

     
  </CFormSelect>
  {fieldState.error ? (
    <CFormLabel style={{ color: "red" }}>Tipo *</CFormLabel>):(<CFormLabel>Tipo</CFormLabel>)}
  </>
  
  )}
/>

</CFormFloating>
                                 
      </CInputGroup>

                            </div>



                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 margingleftcol">

                                  <CInputGroup >
                 <CFormFloating className="margeniputempresa">

              <CFormInput placeholder=""  className="inputdatosempresa fontletre"          {...register('Codigo', { required: 'Este campo es obligatorio' })} />
              

   { errors.digitodeverificacion ? (
    <CFormLabel style={{ color: "red" }}>Codigo *</CFormLabel>):(<CFormLabel>Codigo</CFormLabel>)}
   
              </CFormFloating>
            </CInputGroup>
                              </div>
                        
                   


                

    

    


                </div>

                <div className="row">
                               <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 paddingempresa" >

                    


                  <CInputGroup >
                 <CFormFloating className="margeniputempresa">

              <CFormInput placeholder=""  className="inputdatosempresa fontletre"          {...register('descripcion', { required: 'Este campo es obligatorio' })} />
              

   { errors.digitodeverificacion ? (
    <CFormLabel style={{ color: "red" }}>Descripción *</CFormLabel>):(<CFormLabel>Descripción</CFormLabel>)}
   
              </CFormFloating>
            </CInputGroup>

      </div>


     
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 margingleftcol">

                                  <CInputGroup >
                 <CFormFloating className="margeniputempresa">

              <CFormInput placeholder=""  className="inputdatosempresa fontletre"          {...register('referencia', { required: 'Este campo es obligatorio' })} />
              

   { errors.digitodeverificacion ? (
    <CFormLabel style={{ color: "red" }}>Referencia *</CFormLabel>):(<CFormLabel>Referencia</CFormLabel>)}
   
              </CFormFloating>
            </CInputGroup>
                              </div>


                </div>

                   <div className="row">

                      <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 paddingempresa" >

                    

  <CInputGroup className="">
                        {/* CoreUI soporta etiquetas flotantes (floating labels) en selects. Estas etiquetas se mantienen por encima y en posición flotante incluso cuando se selecciona un valor 
                        CFormFloating envuelve el <CFormSelect> y etiqueta para aplicar el estilo flotante.
                        Debe incluir placeholder en el select para que funcione correctamente.
                        La etiqueta (label), se queda flotando arriba incluso después de elegir una opción*/}
        
        
        {/**el control nos servira para panipular los select a nuestro
         * antojo, ya que react-hook-form no permite manipular los select
         * directamente, por eso usamos el controller
         
        
        */}                <CFormFloating className="margeniputempresa">
    <Controller
  control={control}
  name="linea"
  defaultValue={""}
   rules={{ required: "Este campo es obligatorio" }}
  render={({ field,fieldState }) => (
    <>
  <CFormSelect
  {...field}
    size="lg"
    placeholder="Tipo de persona"
    className="inputselect fontletre "
   

     onChange={(e:any) => {
        // importante para que RHF sepa del cambio
          // lógica adicional...
    
    
  }}
  >
    <option value="" >Seleccione una opción</option>
      <option value="1" >Cosmetico</option>
      <option value="2" >Aseo</option>
      

    
     

     
  </CFormSelect>
  {fieldState.error ? (
    <CFormLabel style={{ color: "red" }}>Linea *</CFormLabel>):(<CFormLabel>Linea</CFormLabel>)}
  </>
  
  )}
/>

</CFormFloating>
                                 
      </CInputGroup>
      </div>


     
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 margingleftcol">

                                <CInputGroup className="">
                        {/* CoreUI soporta etiquetas flotantes (floating labels) en selects. Estas etiquetas se mantienen por encima y en posición flotante incluso cuando se selecciona un valor 
                        CFormFloating envuelve el <CFormSelect> y etiqueta para aplicar el estilo flotante.
                        Debe incluir placeholder en el select para que funcione correctamente.
                        La etiqueta (label), se queda flotando arriba incluso después de elegir una opción*/}
        
        
        {/**el control nos servira para panipular los select a nuestro
         * antojo, ya que react-hook-form no permite manipular los select
         * directamente, por eso usamos el controller
         
        
        */}                <CFormFloating className="margeniputempresa">
    <Controller
  control={control}
  name="grupo"
  defaultValue={""}
   rules={{ required: "Este campo es obligatorio" }}
  render={({ field,fieldState }) => (
    <>
  <CFormSelect
  {...field}
    size="lg"
    placeholder="Tipo de persona"
    className="inputselect fontletre "
   

     onChange={(e:any) => {
        // importante para que RHF sepa del cambio
          // lógica adicional...
    
    
  }}
  >
    <option value="" >Seleccione una opción</option>
      <option value="1" >Servicio</option>
      <option value="2" >Producto</option>
      

    
     

     
  </CFormSelect>
  {fieldState.error ? (
    <CFormLabel style={{ color: "red" }}>Grupo *</CFormLabel>):(<CFormLabel>Grupo</CFormLabel>)}
  </>
  
  )}
/>

</CFormFloating>
                                 
      </CInputGroup>
                              </div>


                   </div>





          <div className="row">

                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 paddingempresa" >

                    

  <CInputGroup className="">
                        {/* CoreUI soporta etiquetas flotantes (floating labels) en selects. Estas etiquetas se mantienen por encima y en posición flotante incluso cuando se selecciona un valor 
                        CFormFloating envuelve el <CFormSelect> y etiqueta para aplicar el estilo flotante.
                        Debe incluir placeholder en el select para que funcione correctamente.
                        La etiqueta (label), se queda flotando arriba incluso después de elegir una opción*/}
        
        
        {/**el control nos servira para panipular los select a nuestro
         * antojo, ya que react-hook-form no permite manipular los select
         * directamente, por eso usamos el controller
         
        
        */}                <CFormFloating className="margeniputempresa">
    <Controller
  control={control}
  name="linea"
  defaultValue={""}
   rules={{ required: "Este campo es obligatorio" }}
  render={({ field,fieldState }) => (
    <>
  <CFormSelect
  {...field}
    size="lg"
    placeholder="Tipo de persona"
    className="inputselect fontletre "
   

     onChange={(e:any) => {
        // importante para que RHF sepa del cambio
          // lógica adicional...
    
    
  }}
  >
    <option value="" >Seleccione una opción</option>
      <option value="1" >Cosmetico</option>
      <option value="2" >Aseo</option>
      

    
     

     
  </CFormSelect>
  {fieldState.error ? (
    <CFormLabel style={{ color: "red" }}>Linea *</CFormLabel>):(<CFormLabel>Linea</CFormLabel>)}
  </>
  
  )}
/>

</CFormFloating>
                                 
      </CInputGroup>
      </div>


     
                              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 margingleftcol">

                                <CInputGroup className="">
                        {/* CoreUI soporta etiquetas flotantes (floating labels) en selects. Estas etiquetas se mantienen por encima y en posición flotante incluso cuando se selecciona un valor 
                        CFormFloating envuelve el <CFormSelect> y etiqueta para aplicar el estilo flotante.
                        Debe incluir placeholder en el select para que funcione correctamente.
                        La etiqueta (label), se queda flotando arriba incluso después de elegir una opción*/}
        
        
        {/**el control nos servira para panipular los select a nuestro
         * antojo, ya que react-hook-form no permite manipular los select
         * directamente, por eso usamos el controller
         
        
        */}                <CFormFloating className="margeniputempresa">
    <Controller
  control={control}
  name="grupo"
  defaultValue={""}
   rules={{ required: "Este campo es obligatorio" }}
  render={({ field,fieldState }) => (
    <>
  <CFormSelect
  {...field}
    size="lg"
    placeholder="Tipo de persona"
    className="inputselect fontletre "
   

     onChange={(e:any) => {
        // importante para que RHF sepa del cambio
          // lógica adicional...
    
    
  }}
  >
    <option value="" >Seleccione una opción</option>
      <option value="1" >Servicio</option>
      <option value="2" >Producto</option>
      

    
     

     
  </CFormSelect>
  {fieldState.error ? (
    <CFormLabel style={{ color: "red" }}>Grupo *</CFormLabel>):(<CFormLabel>Grupo</CFormLabel>)}
  </>
  
  )}
/>

</CFormFloating>
                                 
      </CInputGroup>
                              </div>

          </div>





              <div className="row" >
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 paddingempresa">

                                <CInputGroup className="">
                        {/* CoreUI soporta etiquetas flotantes (floating labels) en selects. Estas etiquetas se mantienen por encima y en posición flotante incluso cuando se selecciona un valor 
                        CFormFloating envuelve el <CFormSelect> y etiqueta para aplicar el estilo flotante.
                        Debe incluir placeholder en el select para que funcione correctamente.
                        La etiqueta (label), se queda flotando arriba incluso después de elegir una opción*/}
        
        
        {/**el control nos servira para panipular los select a nuestro
         * antojo, ya que react-hook-form no permite manipular los select
         * directamente, por eso usamos el controller
         
        
        */}                <CFormFloating className="margeniputempresa">
    <Controller
  control={control}
  name="grupo"
  defaultValue={""}
   rules={{ required: "Este campo es obligatorio" }}
  render={({ field,fieldState }) => (
    <>
  <CFormSelect
  {...field}
    size="lg"
    placeholder="Tipo de persona"
    className="inputselect fontletre "
   

     onChange={(e:any) => {
        // importante para que RHF sepa del cambio
          // lógica adicional...
    
    
  }}
  >
    <option value="" >Seleccione una opción</option>
      <option value="1" >Servicio</option>
      <option value="2" >Producto</option>
      

    
     

     
  </CFormSelect>
  {fieldState.error ? (
    <CFormLabel style={{ color: "red" }}>Grupo *</CFormLabel>):(<CFormLabel>Grupo</CFormLabel>)}
  </>
  
  )}
/>

</CFormFloating>
                                 
      </CInputGroup>
                              </div>
              </div>
                </div> 
            </div>
    </>
    
  
  
     );
}

export default Datosgeneralesproduct;