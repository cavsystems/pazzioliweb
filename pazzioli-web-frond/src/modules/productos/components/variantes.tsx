import { CFormFloating, CFormInput, CFormLabel, CFormSelect, CInputGroup, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import { Controller, useFormContext } from "react-hook-form";

function Variantes() {
        const { register,control,setValue, formState: { errors } } = useFormContext();
    return ( <>

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
         <option value="1" >XL</option>
      <option value="2" >XX</option>
        <option value="2" >XM</option>
          <option value="2" >31</option>
            <option value="2" >32</option>
              <option value="2" >33</option>
                <option value="2" >34</option>
      

    
     

     
  </CFormSelect>
  {fieldState.error ? (
    <CFormLabel style={{ color: "red" }}></CFormLabel>):(<CFormLabel>Talla</CFormLabel>)}
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
      <option value="1" >Rojo</option>
      <option value="2" >Azul</option>
        <option value="2" >Amarillo</option>
          <option value="2" >Gris</option>
           
      

    
     

     
  </CFormSelect>
  {fieldState.error ? (
    <CFormLabel style={{ color: "red" }}>Grupo *</CFormLabel>):(<CFormLabel>Color</CFormLabel>)}
  </>
  
  )}
/>

</CFormFloating>
                                 
      </CInputGroup>
                              </div>





                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6  paddingempresa">
                   
                                                     <CInputGroup >
                                    <CFormFloating className="margeniputempresa">
                   
                                 <CFormInput placeholder=""  className="inputdatosempresa fontletre"          {...register('Codigo', { required: 'Este campo es obligatorio' })} />
                                 
                   
                      { errors.digitodeverificacion ? (
                       <CFormLabel style={{ color: "red" }}>Codigo *</CFormLabel>):(<CFormLabel>Precio</CFormLabel>)}
                      
                                 </CFormFloating>
                               </CInputGroup>
                                                 </div>

                                                                     <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6  margingleftcol">
                   
                                                     <CInputGroup >
                                    <CFormFloating className="margeniputempresa">
                   
                                 <CFormInput placeholder=""  className="inputdatosempresa fontletre"          {...register('Codigo', { required: 'Este campo es obligatorio' })} />
                                 
                   
                      { errors.digitodeverificacion ? (
                       <CFormLabel style={{ color: "red" }}>Codigo *</CFormLabel>):(<CFormLabel>Cantidad</CFormLabel>)}
                      
                                 </CFormFloating>
                               </CInputGroup>
                                                 </div>
                              <div className="col-12">
                                 <div className="col-12">
            <div>
                <div className="row inputarchivo">

              
                <div  style={{width:"100%"}}>
                    <div style={{width:"100%"  ,display:'flex' ,border:'1px solid #D3D4D4',  borderRadius: '6px' ,gap:'12px',background:'#FFF'}}>
                    <button  type="button"  style={{    
    height: '40px',
    border: 'none',
    borderLeft: '1px solid  #D3D4D4',
    borderRadius: '6px',
     textAlign: 'left',
    font: 'normal normal normal 14px / 19px Open Sans',
    letterSpacing: '0px',
    color:'#555555'}} >Seleccione una imagen</button> 
       <span  style={{
    textAlign: 'end',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}}>Imagen actual</span>

                     </div>

                      

        <input
        type="file"
        id="formFile"
        hidden
        
      />

                </div>

      {/*preview && (
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            marginTop: "10px" }}>
            <img
              src={preview}
              alt="Vista previa logo"
              style={{
                maxWidth: "400px",//150px
                maxHeight: "250px",//95
                border: "1px solid #ddd",
                borderRadius: "4px",
                padding: "5px",
                background: "#f9f9f9",
              }}
            />
          </div>
        )*/}
         </div>
           </div>      
            </div>
                              </div>

                                <div className="col-12">
                                <CTable className="tabla tableusuario">
                                        <CTableHead>
                                          <CTableRow>
                                            <CTableHeaderCell scope="col">Imagen </CTableHeaderCell>
                                            <CTableHeaderCell scope="col" >Talla</CTableHeaderCell>
                                            <CTableHeaderCell scope="col" >Color</CTableHeaderCell>
                                            <CTableHeaderCell scope="col" >Peso</CTableHeaderCell>
                                
                                          </CTableRow>
                                        </CTableHead>
                                        <CTableBody>
                                       
                                      
                                      
                                                  <CTableRow>
                                               
                              
                                            <CTableDataCell></CTableDataCell>
                                            <CTableDataCell>M</CTableDataCell>
                                             <CTableDataCell>Azul</CTableDataCell>
                                                <CTableDataCell>20</CTableDataCell>
                                             </CTableRow>
                                     
                                           
                                              
                                       
                                           
                                          
                                         
                                        </CTableBody>
                                      </CTable>
                                      </div>

          </div>
   

    </> );
}

export default Variantes;