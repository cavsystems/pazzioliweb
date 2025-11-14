import { CFormFloating, CFormInput, CFormLabel, CFormSelect, CInputGroup, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from "@coreui/react";
import React from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import api from "../../../../apicofig";
interface FormData{
 tipocontacto:string,
sede:string
direccion:string
telefono:string
  municipio:string
  departamento:string
}
function  Sedeformtercero({actulizar,setactulizar, terceroid,modal,setmodal}:any) {
  const [claseitem,setclaseitem]=React.useState<string>("chrome")
      const [departamento,setDepartamento]=React.useState<{codigo:number,departamento:string,codigoDepartamento:number}[]>([]);
       const [rotate3, setRotate3] = React.useState(false);
        const [rotate2, setRotate2] = React.useState(false);
         const [codigospais,setcodigospais]=React.useState<number[]>([])
           const [codigomunicipio,setCodigomunicipio]=React.useState<{codigo:number,municipio:string,codigoDepartamento:number}[]>([])
            const [codigodepartamento,setCodigodepartamento]=React.useState<{codigo:number,departamento:string,codigoDepartamento:number}[]>([]);
              const [departamento2,setDepartamento2]=React.useState<{codigo:number,departamento:string,codigoDepartamento:number}[]>([]);
                const [departamentoobject,setdepartamentoobject] = React.useState<{codigo:number,departamento:string,codigoDepartamento:number}>({codigo:0,departamento:"",codigoDepartamento:0})   
                   const [municipioobject,setmunicipioobject] = React.useState<{codigo:number,municipio:string,codigoDepartamento:number,codigoMunicipio:number}>({codigo:0,municipio:"",codigoDepartamento:0,codigoMunicipio:0})   
                   const [municipio,setMunicipio]=React.useState<{codigo:number,municipio:string,codigoDepartamento:number,codigoMunicipio:number}[]>([]);
               const [municipio2,setMunicipio2]=React.useState<{codigo:number,municipio:string,codigoDepartamento:number,codigoMunicipio:number}[]>([]);
               const onSubmit = async (data: any) => {

                if(!actulizar){
                    let body={
                      nombreSede:data.sede,
                      direccion:data.direccion,
                      telefono:data.telefono,
                      principal:false,
                      activo:true,
                      departamento:departamentoobject,
                      municipio:municipioobject


                    }
                    const crearsede=await api.put(`terceros/actualizar/${terceroid}`,body,{
                        headers: {
          'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
          
        }
                })
                }
               }
               const onError=(error:any)=>{

}
      const methods = useForm<FormData>({
             mode: 'onSubmit',
              shouldUnregister: false,
            defaultValues: {
           sede:'',
           tipocontacto:"",
           direccion:"",
           telefono:"",
           municipio:"",
           departamento:""
        
           
           
          
              // Agrega todos los campos que usas en todos los pasos
            },
    
              
          });

           React.useEffect(()=>{
              const ua=navigator.userAgent;
               if (ua.includes("Edg")) {
              setclaseitem("edge");
            } else if (ua.includes("Chrome")) {
              setclaseitem("chrome");
            } else if (ua.includes("Safari")) {
              setclaseitem("safari");
            } else if (ua.includes("Firefox")) {
              setclaseitem("firefox");
            }
            traerinformacion();
           },[])

  const traerinformacion= async ()=>{
    let datos=await api.get('/empresa/traerempresa')
          console.log("empresas datos",datos)

 
  
   
   let municipioss:{codigo:number,municipio:string,codigoDepartamento:number}[]=[]
     let departamentoss:{codigo:number,departamento:string,codigoDepartamento:number}[]=[]
   municipioss=datos.data.datos.municipio
   departamentoss=datos.data.datos.departamento
   console.log("datos empresa",datos.data.datos)
   
   setDepartamento(datos.data.datos.departamento)
  
setDepartamento2(datos.data.datos.departamento)
 setMunicipio(datos.data.datos.municipio)
  
   setcodigospais(datos.data.datos.pais.map((data)=> data.codigo ))
   
 setCodigomunicipio( municipioss.map((data)=> ({codigo:data.codigo,municipio:data.municipio,codigoDepartamento:data.codigoDepartamento}) ))
 setCodigodepartamento(departamentoss.map((item)=>  ({codigo:item.codigo,departamento:item.departamento,codigoDepartamento:item.codigoDepartamento}) ))
    
  }


                   const { register,control,setValue, formState: { errors } } = methods;
    return ( <>
             <CModal
                                       alignment="center"
                                       scrollable
                                       visible={modal}
                                     onClose={()=>{
                                    setmodal(false)
           
                                     }}
                                       aria-labelledby="VerticallyCenteredScrollableExample2"
                                      className="col-12 modalformper"
                                       backdrop="static"
                                       
                                         
                                     >
               
                           <CModalHeader>
                                             
                                           <CModalTitle id="VerticallyCenteredScrollableExample2">Sedes</CModalTitle>
                                         </CModalHeader>
               
                        
                         <FormProvider {...methods}>
                               <CModalBody>     
                                       <form  style={{maxHeight:"480px"}}>
                                      
                       <div className="row" >
                           <div className="col-12">
                              <h6 className="h6 " style={{padding:'15px 10px 5px 12px ',marginLeft:'1rem'}}>Sedes</h6>
               
                           </div>
               
                         <div className="col-12 d-flex paddingempresa usuariomodal  paddingempresamodal"  style={{paddingLeft:'12px',gap:"12px"}}>
               
                               
               
                              <CInputGroup >
                               <CFormFloating className="margeniputempresa">
                             <CFormInput placeholder=""  className="inputdatosempresa fontletre"     {...register('sede', { required: 'Este campo es obligatorio' })}
                 />
                 {errors.sede? (
                     <CFormLabel style={{ color: "red" }}>Sede*</CFormLabel>
                   ) : (
                     <CFormLabel>Sede</CFormLabel>
                   )}
                 </CFormFloating>
                           </CInputGroup>
               
                         
               
                              </div>

                    <div className="col-12 d-flex paddingempresa usuariomodal  paddingempresamodal"  style={{paddingLeft:'12px',gap:"12px"}}>
               
                               
               
                              <CInputGroup >
                               <CFormFloating className="margeniputempresa">
                             <CFormInput placeholder=""  className="inputdatosempresa fontletre"     {...register('direccion', { required: 'Este campo es obligatorio' })}
                 />
                 {errors.direccion? (
                     <CFormLabel style={{ color: "red" }}>Dirección*</CFormLabel>
                   ) : (
                     <CFormLabel>Dirección</CFormLabel>
                   )}
                 </CFormFloating>
                           </CInputGroup>
               
                         
               
                              </div>
               
                       <div className="col-12 d-flex   paddingempresa usuariomodal paddingempresamodal" >
                                 <CInputGroup  >
                                           <CFormFloating className="margeniputempresa">
                                         <CFormInput placeholder=""  className="inputdatosempresa fontletre"       {...methods.register("departamento",{required:true})}    
                                 onChange={(e)=>{
                                let value=e.target.value
                                setDepartamento2(departamento.filter(pa=>pa.departamento.startsWith(value.toUpperCase()) || pa.departamento.toString().endsWith(value.toUpperCase()) ))
                                
                             }}
                               
                             />
                         <CFormLabel>Departamento</CFormLabel>
                        <img src="imgs/togle.svg" className={`imagenplazo  ${rotate2 ? "rotate":""}`}  onClick={()=>{
                            setRotate2(!rotate2)
                           
                            
                              // enfoque el input

    if(!rotate2){
         const inputPlazo = document.querySelector("input[name='departamento']") as HTMLInputElement | null;;
      inputPlazo?.focus();
  
    }

                        }} />

                        <div className={`containerplazos ${rotate2 ? "mostrarplazos":"mostrarplazosnone"}`} >
                               <ul className={`plazoitem ${claseitem}`} >
                            {departamento2.map((pa,index)=>(
                             
                                    <li key={index} className="classitemitem" onClick={()=>{
                                        methods.setValue("departamento",pa.departamento.toString())
                                              methods.setValue("municipio","")
                                      setdepartamentoobject(pa)
                                     let codigodepar=codigodepartamento.find((item)=> item.departamento===pa.departamento)
                                        
                                          setMunicipio2(municipio.filter((item)=>item.codigoDepartamento===codigodepar?.codigoDepartamento))
                                          console.log("municipios filtradas",municipio2,codigodepar,pa,codigodepartamento)
                                        //setplazo(false)
                                        setRotate2(false)
                                    }}>{pa.departamento}</li>
                              
                            ))
                            }
                              </ul>
                        </div>

                          
                         
                                
                               
                            
                             </CFormFloating>
                                       </CInputGroup>
                        </div>




                <div className="col-12 d-flex   paddingempresa usuariomodal paddingempresamodal" >
                                 <CInputGroup>
                                           <CFormFloating className="margeniputempresa">
                                         <CFormInput placeholder=""  className="inputdatosempresa fontletre"       {...methods.register("municipio",{required:true})}    
                                 onChange={(e)=>{
                                let value=e.target.value
                                setMunicipio2(municipio.filter(pa=>(pa.municipio.toString().startsWith(value.toUpperCase()) || pa.municipio.toString().endsWith(value.toUpperCase())) && pa.codigoDepartamento===departamentoobject.codigoDepartamento))
                                
                             }}
                               
                             />
                         <CFormLabel>Municipio</CFormLabel>
                        <img src="imgs/togle.svg" className={`imagenplazo  ${rotate3 ? "rotate":""}`}  onClick={()=>{
                            setRotate3(!rotate3)
                           
                            
                              // enfoque el input

    if(!rotate3){
         const inputPlazo = document.querySelector("input[name='municipio']") as HTMLInputElement | null;;
      inputPlazo?.focus();
  
    }

                        }} />

                        <div className={`containerplazos ${rotate3 ? "mostrarplazos":"mostrarplazosnone"}`} >
                               <ul className={`plazoitem ${claseitem}`} >
                            {municipio2.map((pa,index)=>(
                             
                                    <li key={index} className="classitemitem" onClick={()=>{
                                        methods.setValue("municipio",pa.municipio.toString())
                                        setmunicipioobject(pa)
                                  
                                        //setplazo(false)
                                        setRotate3(false)
                                    }}>{pa.municipio}</li>
                              
                            ))
                            }
                              </ul>
                        </div>

                          
                         
                                
                               
                            
                             </CFormFloating>
                                       </CInputGroup>
                        </div>
               
                  
               
                  
                           
                             
               
               
               
                            
               
               
                              
                               
                       
                              </div>
               
                         
               
               
                         
               
               
               
               
               
                            
               
                              
               
                           
                          
                         
                   
                                       </form>
                                         </CModalBody>
                                     <CModalFooter className="fottersucursal">
                                       <div className="d-flex justify-content-center flex-column  align-items-center " style={{width:"100%"}}>
                              {actulizar && <button  className="botonguardarsucursal" style={{width:"fit-content"}}  onClick={methods.handleSubmit(onSubmit,onError)} >Actualizar</button>} 
                              {!actulizar && <button  className="botonguardarsucursal" style={{width:"fit-content"}}  onClick={methods.handleSubmit(onSubmit,onError)} >Guardar</button>}     
           
                                       
                                          
                                       
                                       </div>
                                     </CModalFooter>
                                        </FormProvider>
                                        
                                        </CModal>
    </> );
}

export default  Sedeformtercero;