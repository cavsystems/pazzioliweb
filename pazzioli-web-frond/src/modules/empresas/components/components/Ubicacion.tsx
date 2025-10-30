import { CButton, CPopover } from "@coreui/react";
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
function Ubicacion({ register, CInputGroup,
  CFormInput,
  CFormSelect,
  CFormFloating,
  CFormLabel,
   paisdef,
   setValue,
   errors,
...rest}: any) {
  const [codigodepar,setcodigodepart]=useState('0')
   const [codigomunicipio,setcodigomunicipio]=useState('0')

  const[departactual,setdeparactual]=useState({codigo:0, codigopais:0, codigoDepartamento:0, departamento: ''})
  const [municipio,setmunicipio]=useState<municipio[]>([])

     useEffect(()=>{
  const codigom=codigomunicipio.length===1 ? '00'+codigomunicipio:codigomunicipio.length===2 ? '0'+codigomunicipio:codigomunicipio
  const codigomp=codigodepar+ codigom;

traercodigopostal(Number(codigomp))
  },[codigomunicipio])
    useEffect(()=>{
   traermuni()
  },[ rest.datosempresa])

const traercodigopostal=async (codigomunici:number)=>{
 const codigoposta= await api.get(`/codigoPostal/codigopostal?codigomunicipio=${Number(codigomunici)}`)
 console.log("codigo postal",codigoposta)

 const postal=codigoposta.data.respuesta.replace("\r","");
 setValue("codigopostal",postal)
}
  useEffect(()=>{
   traermuni()

  },[departactual])
const traermuni=async()=>{
  if(departactual.codigo!==0){
    console.log("departamento",departactual)
    const muni=await api.get(`/empresa/codigodeparta?codigo=${departactual.codigoDepartamento}`)
    setmunicipio(muni.data.repuesta)
    setValue("municipio","")
   console.log("municipiooooo",muni.data.repuesta)
  }else{
     console.log("entro aqui",rest)
   setmunicipio([])
  }


}
    return ( 
        <>
           <div className="col-12">

                <h6  className="titlecamposempresa h6 paddingtitleempresa "  style={{padding:'12px 10px 5px 0 '}}>Ubicación</h6>
               <div>
                <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 paddingempresa">

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
    <option value="" >elije una obcion</option>
      {
      rest.datosempresa.pais?.map((item:any)=>{
      return <option key={item.codigo} value={item.codigo} >{item.pais}</option>    
      })
     }   
  </CFormSelect>
{ errors.pais ? (
    <CFormLabel style={{ color: "red" }}>Pais</CFormLabel>):(
  <CFormLabel>Pais</CFormLabel>)}
  
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
  
    {...register('municipio', { required: 'Este campo es obligatorio' })}
    
    onChange={(e:any)=>{
       const codigmuni:municipio | undefined=municipio.find((item)=> item.codigo ===Number(e.target.value)) 
       if(typeof codigmuni !== "undefined"){
       
        if(codigmuni.codigoMunicipio) setcodigomunicipio(codigmuni.codigoMunicipio.toString())
       }
         
    }
    }
  >
    <option value="" >Seleccione una opción</option>
     {
     municipio?.map((item:any)=>{
      return <option value={item.codigo} >{item.municipio}</option>    
      })
     }   
  </CFormSelect>
  { errors.municipio ? (
    <CFormLabel style={{ color: "red" }}>Municipio</CFormLabel>):(
  <CFormLabel>Municipio</CFormLabel>)}

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
    {...register('departamento', { required: 'Este campo es obligatorio' })}
    onChange={(e:any) => {
      const value=e.target.value
      if(value!==""){
      
const seleccionado = rest.datosempresa.departamento.find(
      (item: any) => item.codigo === Number(e.target.value)
    );

   
       if(typeof seleccionado !== "undefined"){
      
        if(seleccionado.codigoDepartamento) setcodigodepart(seleccionado.codigoDepartamento.toString())
       }
    setdeparactual(seleccionado);

      }else{
        setcodigodepart('0')
      
      }
    
  }}
  
  >
    <option value="" >Seleccione una opción</option>
      {
      rest.datosempresa.departamento?.map((item:any)=>{
      return <option value={item.codigo}  >{item.departamento}</option>    
      })
     }   
  </CFormSelect>
  { errors.departamento ? (
    <CFormLabel style={{ color: "red" }}>Departamento</CFormLabel>):(
  <CFormLabel>Departamento</CFormLabel>)}
</CFormFloating>
                                 
      </CInputGroup>
                                 
     

                <CInputGroup>
               <CFormFloating className="margeniputempresa">
              <CFormInput placeholder=""  className="inputdatosempresa fontletre"  {...register('codigopostal', { required: 'Este campo es obligatorio' })} />
                { errors.codigopostal ? ( 
    <CFormLabel style={{ color: "red" }}>Código postal</CFormLabel>):(<CFormLabel>Código postal</CFormLabel>)}
             
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