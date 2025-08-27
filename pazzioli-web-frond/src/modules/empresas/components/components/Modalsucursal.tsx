import { CButton, CFormFloating, CFormInput, CFormLabel, CFormSelect, CInputGroup, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from "@coreui/react";
import { useEffect, useState } from "react";
import api from "../../../../apicofig";
interface municipio{
  codigo:number,
codigoDepartamento:number,
codigoMunicipio?:number,
municipio:string,
}
interface municipios{
  municipio:municipio[]
}

export function Modalsocursal({visible, setVisible,setBodega,bodega,datosempresa, setdatosempresa,nuevaSucursal,actulizar,updateSucursal}: any) {
    const [codigodepar,setcodigodepart]=useState('0')
   const [codigomunicipio,setcodigomunicipio]=useState('0')

  const[departactual,setdeparactual]=useState({codigo:0, codigopais:0, codigodepartamento:0, departamento: ''})
   const [municipio,setmunicipio]=useState<municipio[]>([])
   const [codigopostal,setcodigopostal]=useState('')



 useEffect(()=>{
  const codigom=codigomunicipio.length===1 ? '00'+codigomunicipio:codigomunicipio.length===2 ? '0'+codigomunicipio:codigomunicipio
  const codigomp=codigodepar+ codigom;
console.log("codigocodigo",codigomp)
traercodigopostal(Number(codigomp))
  },[codigomunicipio])
    useEffect(()=>{
   traermuni()
  },[datosempresa])

const traercodigopostal=async (codigomunici:number)=>{
 const codigoposta= await api.get(`/codigoPostal/codigopostal?codigomunicipio=${Number(codigomunici)}`)
 console.log("codigo postal",codigoposta)

 let postal=codigoposta.data.respuesta.replace("\r","");
   postal=postal.replace("\n","");

   setcodigopostal(postal)

}
  useEffect(()=>{
   traermuni()

  },[departactual])
const traermuni=async()=>{
  if(departactual.codigo!==0){
    
    const muni=await api.get(`/empresa/codigodeparta?codigo=${departactual.codigodepartamento}`)
    setmunicipio(muni.data.repuesta)
   
   console.log("municipiooooo",muni.data.repuesta)
  }else{
    
   setmunicipio([])
  }


}
   const onchangeBodegaselect=(e:any)=>{
    console.log( JSON.stringify(e.target.value))
    
   
   setBodega((prev:any)=>({...prev,[e.target.name]:JSON.parse(e.target.value)}))
    
   if(e.target.name==="departamento"){
    setdeparactual(JSON.parse(e.target.value))
const departemento=JSON.parse(e.target.value)
const deparactual=datosempresa.departamento.find((depar:any)=> depar.codigo===departemento.codigo)
    setcodigodepart(deparactual ? deparactual.codigoDepartamento : 0)
    setcodigomunicipio('0')
   }


   if(e.target.name==="municipio"){
   
   const municipios:municipio | undefined=JSON.parse(e.target.value)
       const codigmuni:municipio | undefined=municipio.find((item)=> item.codigo ===municipios?.codigo) 
       if(typeof codigmuni !== "undefined"){
       
        if(codigmuni.codigoMunicipio) setcodigomunicipio(codigmuni.codigoMunicipio.toString())
       }
         
    
   }
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
               <h6 className="h6 " style={{padding:'15px 10px 5px 12px ',marginLeft:'1rem'}}>Identificación</h6>

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
                <h6 className="h6" style={{padding:'15px 10px 5px 10px ',marginLeft:'1rem'}}>Ubicación (opcional)</h6>

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
      municipio?.map((item:any)=>{
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
              <CFormInput placeholder=""  className="inputdatosempresa fontletre" name='codigopostal' onChange={onchangeBodega} value={codigopostal ? codigopostal:bodega.codigopostal}   
  />
   <CFormLabel htmlFor="identificacion">Código postal</CFormLabel>
  </CFormFloating>
            </CInputGroup>
            </div>



           </div>


             <div className="row">
            <div className="col-12">
                <h6 className=" h6" style={{padding:'15px 10px 5px 8px ',marginLeft:'1rem'}}>Contacto (opcional)</h6>

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
