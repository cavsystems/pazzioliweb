import { CButton, CFormFloating, CFormInput, CFormLabel, CFormSelect, CInputGroup, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from "@coreui/react";
import { useState } from "react";


export function Modalsocursal({visible, setVisible,setBodega,bodega,datosempresa, setdatosempresa,nuevaSucursal,actulizar,updateSucursal}: any) {
   const onchangeBodegaselect=(e:any)=>{
    console.log( JSON.stringify(e.target.value))
   
   setBodega((prev:any)=>({...prev,[e.target.name]:JSON.parse(e.target.value)}))
    
   
   
   }

   const onchangeBodega=(e:any)=>{
    
   
   setBodega((prev:any)=>({...prev,[e.target.name]:e.target.value}))
    
   
   
   }
   const eventoonchageselect=(nombre:any,item:any)=>{
     console.log("item",JSON.parse(item))
    setBodega((prev:any)=>({...prev, nombre: JSON.parse(item)}))
   
   }
    return ( 
        <>
     
        <CModal
        alignment="center"
        scrollable
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="VerticallyCenteredScrollableExample2"
       className="col-12"
      >
        <CModalHeader>
          <CModalTitle id="VerticallyCenteredScrollableExample2">Agregar sucursal o bodega</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <div className="row">
            <div className="col-12">
               <h6 className="titlecamposempresa h6 " style={{padding:'15px 10px 5px 15px '}}>Identificación</h6>

            </div>
            <div className="col-12 col-md-6 col-lg-6 paddingempresa  paddingempresamodal" style={{paddingLeft:'12px'}}>
                     <CInputGroup >
                <CFormFloating className="margeniputempresa">
              <CFormInput placeholder=""  className="inputdatosempresa fontletre"  name="nombre" onChange={onchangeBodega} value={bodega.nombre}          
  />
   <CFormLabel htmlFor="identificacion">Nombre Bodega/Sucursal</CFormLabel>
  </CFormFloating>
            </CInputGroup>
            </div>

            <div className="col-12 col-md-6 col-lg-6  paddingempresa margingleftcol paddingempresamodal"  style={{paddingLeft:'0px'}}  >
                     <CInputGroup >
                <CFormFloating className="margeniputempresa">
              <CFormInput placeholder=""  className="inputdatosempresa fontletre"     name='codigosucursal' onChange={onchangeBodega} value={bodega.codigosucursal}         
  />
   <CFormLabel htmlFor="identificacion">Código sucursal</CFormLabel>
  </CFormFloating>
            </CInputGroup>
            </div>
           
          </div>

           <div className="row">
            <div className="col-12">
                <h6 className="titlecamposempresa h6" style={{padding:'15px 10px 5px 15px '}}>Ubicación(opcional)</h6>

            </div>
              <div className=" col-12 col-md-6 col-lg-6 paddingempresa paddingempresamodal" style={{paddingLeft:'12px'}} >
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

        value={JSON.stringify(bodega.pais)}
        name='pais'
        onChange={onchangeBodegaselect}
   
  >
    <option value="{codigo:0,pais:''}">Seleccione una opción</option>
   
      {
      datosempresa.pais?.map((item:any)=>{
      return <option value={JSON.stringify(item)} onClick={()=>{eventoonchageselect("pais",item)}} >{item.pais}</option>    
      })
     }   
  </CFormSelect>
  <CFormLabel>País</CFormLabel>
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
    placeholder="Tipo de identificacion"
    className="inputselect fontletre"
   value={JSON.stringify(bodega.municipio)}
        name='municipio'
        onChange={onchangeBodegaselect}
  >
    <option value="
{codigo:0, municipio: ''}" >Seleccione una opción</option>
      {
      datosempresa.municipio?.map((item:any)=>{
      return <option value={JSON.stringify(item)} onClick={()=>{eventoonchageselect("pais",item)}} >{item.municipio}</option>    
      })
     }   
  </CFormSelect>
  <CFormLabel>Municipio</CFormLabel>
</CFormFloating>
                                 
      </CInputGroup>


        <CInputGroup >
                <CFormFloating className="margeniputempresa">
              <CFormInput placeholder=""  className="inputdatosempresa fontletre" name="direccion" onChange={onchangeBodega} value={bodega.direccion}           
  />
   <CFormLabel htmlFor="identificacion" >Dirección</CFormLabel>
  </CFormFloating>
            </CInputGroup>
            </div>
       



       <div className="col-12 col-md-6 col-lg-6  paddingempresa  margingleftcol paddingempresamodal" style={{padding:'15px 10px 5px 15px '}} >
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
     value={JSON.stringify(bodega.departamento)}
        name='departamento'
        onChange={onchangeBodegaselect}
  >
    <option value="{codigo:0,departemento:''}" >Seleccione una opción</option>
      {
      datosempresa.departamento?.map((item:any)=>{
      return <option value={JSON.stringify(item)} onClick={()=>{eventoonchageselect("pais",item)}} >{item.departamento}</option>    
      })
     }     
  </CFormSelect>
  <CFormLabel>Departamento</CFormLabel>
</CFormFloating>
                                 
      </CInputGroup>

      
        <CInputGroup >
                <CFormFloating className="margeniputempresa">
              <CFormInput placeholder=""  className="inputdatosempresa fontletre" name='codigopostal' onChange={onchangeBodega} value={bodega.codigopostal}          
  />
   <CFormLabel htmlFor="identificacion">Código postal</CFormLabel>
  </CFormFloating>
            </CInputGroup>
            </div>



           </div>


             <div className="row">
            <div className="col-12">
                <h6 className="titlecamposempresa h6" style={{padding:'15px 10px 5px 15px '}}>Contacto(opcional)</h6>

            </div>
              <div className="col-12 col-md-6 col-lg-6  paddingempresa paddingempresamodal">
               


        <CInputGroup >
                <CFormFloating className="margeniputempresa">
              <CFormInput placeholder=""  className="inputdatosempresa fontletre"     name='telefonofijo' onChange={onchangeBodega} value={bodega.telefonofijo}      
  />
   <CFormLabel htmlFor="identificacion" >Télefono</CFormLabel>
  </CFormFloating>
            </CInputGroup>

            
        <CInputGroup >
                <CFormFloating className="margeniputempresa">
              <CFormInput placeholder=""  className="inputdatosempresa fontletre"   name='correo' onChange={onchangeBodega} value={bodega.correo}       
  />
   <CFormLabel htmlFor="identificacion" >Correo electrónico</CFormLabel>
  </CFormFloating>
            </CInputGroup>
            </div>
       



       <div className="col-12 col-md-6 col-lg-6  paddingempresa  margingleftcol paddingempresamodal">

      
        <CInputGroup >
                <CFormFloating className="margeniputempresa">
              <CFormInput placeholder=""  className="inputdatosempresa fontletre"  name='celular' onChange={onchangeBodega} value={bodega.celular}         
  />
   <CFormLabel htmlFor="identificacion">Celular</CFormLabel>
  </CFormFloating>
            </CInputGroup>
            </div>



           </div>
        </CModalBody>
        <CModalFooter style={{justifyContent: 'center',display:'flex'}} className="fottersucursal">
          <button  onClick={() => setVisible(false)} className="botonsucursal">
            Cancelar
          </button>
          <button className="botonguardarsucursal" onClick={()=>{ updateSucursal.updateSucursal ? actulizar() :
            nuevaSucursal();
          }}>Guardar</button>
        </CModalFooter>
      </CModal>
      
        </>
     );
}

