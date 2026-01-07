import { CAlert, CButton, CFormFloating, CFormInput, CFormLabel, CInputGroup, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import { useEffect, useState } from "react";
import Iconeliminar from "../../../icons/iconeliminar";
import api from "../../../apicofig";
import Iconupdate from "../../../icons/iconupdate";
import { useFormContext } from "react-hook-form";
import Modalconfirmar from "../../../components/alertconfimacion";
interface bodegaselect{
  bodegaId:number,
  nombre:string
}
function Bodegasvariantes({modalbo,setmodalbo,agregarbodega,BodegaSeleccionada ,setBodegaSeleccionada,indexvariante,variantes,setvariantes, setindexvariante}:any) {
    const [numeroinputbodega,setnumeroinputbodega]=useState<number>(0)

    const [bodegasselect,setbodegasselect]=useState<bodegaselect[]>([{ bodegaId:1,
  nombre:"Bodegasur"},{ bodegaId:2,
  nombre:"BodegaNorte"}])
    const [bodegas,setbodegas]=useState<{
      existenciaId?:number | null,
    bodegaId:number,
      bodega:string;
      stockMax:number;
    stockMin:number;
ubicacion:string;
existencias:number}[]>([])
const [guardar,setguardar]=useState<boolean>(false)
 
    const [indexactulizar,setindexactulizar]=useState<number>(0)
     const [confirmareliminacion,setconfirmareliminacion]=useState<boolean>(false)
       const [codigoeliminar,setcodigoeliminar]=useState<number>(0)
    const [bodegaguardar,setbodegaguardar]=useState<string>("")
    const [mensajeerror,setmensajeerror]=useState<string>("")
    const [modaladvertencia,setmodaladvertencia]=useState<boolean>(false)
    const [confirmaractulizacion,setconfirmaractulizacion]=useState<boolean>(false)
    const [funncionDinamica2,setfunncionDinamica2]=useState<()=>void>(()=>{})
    const [funcionDinamica,setFuncionDinamica]=useState<()=>void>(()=>{})
    const [actulizar,setactulizar]=useState<boolean>(false)
  
    const [codigoactulizar,setcodigoactulizar]=useState<number>(0)

    const [indexactulizarbodega,setindexactulizarbodega]=useState<boolean>(false)
      const { register,control,setValue,getValues,reset, formState: { errors } } =useFormContext();
    const [bodegasguardadas,setbodegasguardadas]=useState<{
      existenciaId?:number | null,
          bodegaId:number,

      bodega:string;
      stockMax:number;
    stockMin:number;
ubicacion:string
existencias:number}>({ bodegaId:0,bodega:"",stockMax:0,stockMin:0,ubicacion:"" ,existencias:0})

const traerbodegas=async()=>{
  const apibodega=await api.get("bodegas/listar",{
        headers: {
          'X-TenantID':"cavsystems", // suponiendo que data.db contiene el bodega de la base de datos
        }})

        const newarraybodega:bodegaselect[]=[]
        apibodega.data.data.forEach(item=> newarraybodega.push({bodegaId:item.codigo,nombre:item.nombre}))
        console.log("bodega traer",apibodega)
        setbodegasselect(newarraybodega)
}

    const eliminardesdedb=async(codigo:number)=>{
      try{
        const respeliminar= await api.delete(`existencias/${codigo}`,{
          headers: {
            'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
          }})
          console.log("respuesta eliminar",respeliminar)
          let nuevasbodegas=variantes[indexvariante].bodega.filter(item=> item.existenciaId!==codigo)
          const nuevasVariantes = [...variantes];
          nuevasVariantes[indexvariante].bodega=nuevasbodegas
          
          setnumeroinputbodega(nuevasbodegas.length)
          setvariantes(nuevasVariantes)
          setconfirmareliminacion(false)
          setcodigoeliminar(0)
      }catch(error){
        console.log("error al eliminar bodega",error)
      }
    }

    const eliminarbodegava=(bodegaid:number)=>{

setcodigoeliminar(bodegaid)
setmodaladvertencia(true)
setmensajeerror("Desea eliminar este item")
   setFuncionDinamica(()=>{
                                             return ()=>{ setmensajeerror("")
                                            setconfirmareliminacion(true)
                                            setmodaladvertencia(false)
                                            }
                                          })

    setfunncionDinamica2(()=>{
                                             return ()=>{ setmensajeerror("")
                                            setconfirmareliminacion(false)
                                            setmodaladvertencia(false)
                                            }
                                          })
}

    useEffect(()=>{
traerbodegas()
      console.log("BodegaSeleccionada",BodegaSeleccionada)
      if(BodegaSeleccionada){
        if(BodegaSeleccionada.length>0){
            setbodegas(BodegaSeleccionada)
  setnumeroinputbodega(BodegaSeleccionada.length);
        }
      
      }
    },[BodegaSeleccionada])
const actulizarbodega=async()=>{

   agregarbodega({...bodegasguardadas,},indexvariante)
  setbodegasguardadas({bodegaId:0,bodega:"",stockMax:0,stockMin:0,ubicacion:"",existencias:0})
 setbodegaguardar('')
 setactulizar(false)
 setconfirmaractulizacion(false)
 setguardar(false)
}
    useEffect(()=>{
      if(confirmaractulizacion){
      actulizarbodega()
      }else{
        
          if(codigoeliminar && codigoeliminar>0){
                  let variableactulizar=variantes[indexvariante].bodega.find(item=>{
                                              return item.bodegaId === codigoeliminar
                                            })
       /* let varianteactback=listaprecioglobal.find(item=>  item.precioId === codigoeliminar)
        console.log("codigo eliminar antes",codigoeliminar,varianteactback,actulizar)*/
    21
         if(variableactulizar && variableactulizar.existenciaId){


          eliminardesdedb(variableactulizar.existenciaId)
        

         }else{
          console.log("eliminar bodega sin db",codigoeliminar,bodegas)
          const  filterbodegas= bodegas.filter(item=> item.bodegaId!==codigoeliminar)
          setbodegas(filterbodegas)
          setnumeroinputbodega(filterbodegas.length)
          setguardar(false)

            
         
           let nuevasbodegas=variantes[indexvariante].bodega.filter(item=> item.bodegaId!==codigoeliminar)
          const nuevasVariantes = [...variantes];
          nuevasVariantes[indexvariante].bodega=nuevasbodegas
          
          setnumeroinputbodega(nuevasbodegas.length)
          setvariantes(nuevasVariantes)
          //setlistaprecioon(precioeliminado)
          //setnumeroinputprescio(precioeliminado.length)
          setguardar(false)
          setactulizar(false)
          setconfirmareliminacion(false)
          setcodigoeliminar(0)
         }

      
            }else{
             /* setnumeroinputprescio(prev=> prev-1)
              setguardar(false)
            }
       /* */
      }
    }
    },[confirmaractulizacion,confirmareliminacion])
    return ( 
        <>
        
            <CModal
            alignment="center"
            scrollable
            visible={modalbo}
             backdrop="static"
            onClose={()=>{
              setmodalbo(false)
                       setBodegaSeleccionada([]);
                                                               setindexvariante(0);
                                                               setnumeroinputbodega(0);
                                                               setbodegas([]);
                                                               setguardar(false);
                                                               setactulizar(false);
            }}
            aria-labelledby="VerticallyCenteredScrollableExample2"
           className="col-12 modalbodegasvariantes"
           
               
          >
            <CModalHeader>
                
              <CModalTitle id="VerticallyCenteredScrollableExample2">Asignar bodega</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <div className="row" >
                       
               
             
                 
              <div className="col-12">
             
                                       
                                          <div className="inputprocttex" style={{width:"100%", paddingTop:"12px"}}>
                                         
                                           
                                            
                                           
                                            
             
             
             
                                            
                                          </div>
             
                                          
                    
                                               
                                          
             
                                           <div className={`flex-grow-1`} style={{paddingTop:"12px"}}>
             
                                          <div className={`inputprocttex justify-content-center align-items-center row-gap-3`}>
                                           
                                           
                                            
                                             <div className="tablacontainerprecio">
                                             <CTable  
             
                     
                       
                       small
                       align="left" className="tablaproductsbodega tablaperzonalinalida1">
                                                               
                                                               <CTableHead>
                                                                 <CTableRow>
                                                                 
                                                                     <CTableHeaderCell scope="col">Bodega</CTableHeaderCell>
                                                                 <CTableHeaderCell scope="col" >Minimo</CTableHeaderCell>
                                                                  <CTableHeaderCell scope="col" >Maximo</CTableHeaderCell>
                                                                    <CTableHeaderCell scope="col" >Ubicación</CTableHeaderCell>
                                                                      <CTableHeaderCell scope="col" >Existencia</CTableHeaderCell>
                                                                             <CTableHeaderCell scope="col "  className="thacciones"><div className="d-flex justify-content-center" style={{gap:"12px"}} >Acciones </div></CTableHeaderCell>
                                                                
                                                                 
                                                     
                                                                   
                                                                 </CTableRow>
                                                               </CTableHead>
                                                               <CTableBody>
                                                               
                                                               
                                                              
                                   
                                                   
                                                      
                                                         
                                                             {
                                                                Array.from({length: numeroinputbodega}).map((_, index) => ( 
                                                                       <CTableRow>
                                                                   <CTableDataCell>   <select  defaultValue={bodegas[index]?.bodegaId ?? ""} className="iteminput1" name="bodega" onChange={(e)=>{
                            

                                                     
                                                                  if(e.target.value===""){
                                                                        return
                                                                      }
                                                                let nombrebodega= bodegasselect.find(item=> item.bodegaId === Number(e.target.value))
                                                             
                                                                 let bodegatrue=bodegas.find((bodega)=>bodega.bodega===nombrebodega?.nombre)
                                                                   console.log("bodega bodega",nombrebodega, bodegatrue,bodegas)
                                                                 if(bodegatrue){
                                                                  alert("Esta bodega ya ha sido seleccionada")
                                                                  e.target.value=""
                                                                  return;
                                                                 }
                                                                 console.log("detodas maneras sigo",nombrebodega,e.target.value,bodegasselect)
                                                                setbodegaguardar(e.target.value)
                                                                
                                                               const valor = e.target.value
                                                               const copiaSel = [...bodegas];
                                      copiaSel[index] = {
                                        ...copiaSel[index],
                                          bodegaId:Number(e.target.value),
                                        bodega: nombrebodega?.nombre || ""
                                      };

                                     setbodegas(copiaSel);
                                                               setbodegasguardadas({...bodegasguardadas,existenciaId: bodegas && bodegas[index] && bodegas[index].existenciaId ? bodegas[index].existenciaId:null, bodegaId:Number(e.target.value), bodega:   nombrebodega?.nombre})  
                                                               
                                                                 
                                                   }} >
                                               <option value={""} id="slectform1">Elige una opción</option>
                                               {
                                                bodegasselect.map((item)=>{
                                                    return <>
                                                      <option value={item.bodegaId} id="slectform1">{item.nombre}</option>
                                                    </>
                                                })
                                               }
                                           
                                              
                                            </select></CTableDataCell>
                                                   <CTableDataCell><input placeholder="0" className="iteminput1"  value={bodegas[index]?.stockMax ?? "" }  name="stockMax" onChange={(e)=>{
                                                     const valor = Number(e.target.value);
                                                

                                      const copiaSel = [...bodegas];
                                      copiaSel[index] = {
                                        ...copiaSel[index],
                                        stockMax: valor
                                      };

                                      setbodegas(copiaSel);
                                                            setbodegasguardadas({...bodegasguardadas,  [e.target.name]:e.target.value})     
                                                          
                                                                 
                                                   }}/></CTableDataCell>
                                                     <CTableDataCell  ><input placeholder="0" className="iteminput1" name="stockMin" value={bodegas[index]?.stockMin ?? ""}  onChange={(e)=>{
                                                     const valor = Number(e.target.value);
                                               

                                      const copiaSel = [...bodegas];
                                      copiaSel[index] = {
                                        ...copiaSel[index],
                                        stockMin: valor
                                      };

                                      setbodegas(copiaSel);
                                                            setbodegasguardadas({...bodegasguardadas,  [e.target.name]:e.target.value})     
                                                          
                                                                 
                                                   }}/></CTableDataCell>
                                                  


                                                    <CTableDataCell  ><input placeholder="0" className="iteminput1" name="ubicacion" value={bodegas[index]?.ubicacion ?? ""}  onChange={(e)=>{
                                                     const valor = e.target.value;
                                                     console.log("valor",valor)
                                                    console.log("index",index, variantes)
                                                 
                                      const copiaSel = [...bodegas];
                                      copiaSel[index] = {
                                        ...copiaSel[index],
                                        ubicacion: valor
                                      };

                                      setbodegas(copiaSel);
                                                            setbodegasguardadas({...bodegasguardadas,  [e.target.name]:e.target.value})     
                                                          
                                                                 
                                                   }}/></CTableDataCell>
                                                   
                                                         
                                                       <CTableDataCell>
                                                        <input placeholder="0" className="iteminput1"  value={bodegas[index]?.existencias ?? ""}  disabled={true} name="stockMax"/>
                                                       </CTableDataCell>

                                                       <CTableDataCell>
                                                          <div className="d-flex justify-content-center" style={{gap:"12px"}} >
                                                                                        
                                                                                                                                      
                                                                                                                                                        
                                                                                       <div className="col-6" style={{ maxWidth: 'fit-content' }} >
                                         <CButton  className="buttoniconnormal" onClick={()=>{
                                          setactulizar(true)
                                          setbodegasguardadas(bodegas[index])     
                                              
                                         }} >
                                                                                                                                                                                              <Iconupdate  width={16} height={18} color={"#555"}/> 
                                                                                                                                                                                            </CButton>
                                                                                                                                                                                        </div>   
                                                        
                                                                                      <div   style={{ maxWidth: 'fit-content' }} >
                                                                                                                                       <CButton  className="buttoniconnormaleliminar"  onClick={()=> eliminarbodegava(bodegas[index]?.bodegaId)}  >      <Iconeliminar  width={16} height={16} color={"#555"}/>  </CButton>
                                                                              </div>      

                                                                                     </div>
                                                       </CTableDataCell>
                                                           </CTableRow>
             
                                                                ))
                                                             }
                                                         
                                                               
                                                     
                                                           
                                                             
                                                            
                                         
                                                           
                                                 
                                                     
                                                   
                                                                 
                                     
                                                                   
                                                             
                                                                  
                                                               </CTableBody>
                                                            
                                                             </CTable>
                                                             </div>
                                            
                                             
                                                  {
                                                    !guardar&&  !actulizar &&<button type="submit" className="botoncontinuarguardar botonagregarcon"  key="guardar"   onClick={()=>{
                                                   
                                                        setnumeroinputbodega(numeroinputbodega+1)
                                                        setguardar(true)
                                                    }}>Agregar</button>
                                                  }   

                                                  {
                                                    guardar  &&   !actulizar &&  <button className="botoncontinuarguardar"  key="guardar"  onClick={()=>{
                                                        agregarbodega(bodegasguardadas,indexvariante)
                                                         setbodegasguardadas({bodegaId:0,bodega:"",stockMax:0,stockMin:0,ubicacion:"",existencias:0})
                                                        setbodegaguardar('')
                                                        setguardar(false)
                                                    }}  >Guardar</button> 
                                                  }


                                                    {
                                                   !guardar  &&   actulizar &&  <button className="botoncontinuarguardar"  key="guardar" onClick={()=>{
                                      
                                         setmensajeerror("¿ Seguro desea actualizar el precio ?")
                                         setmodaladvertencia(true)
                                          setfunncionDinamica2(()=>{
                                           return ()=>{ console.log("funciones modla actuliza")
                                            setmensajeerror("")
                                            setconfirmaractulizacion(false)
                                            setcodigoactulizar(0)
                                            setactulizar(false)
                                            setmodaladvertencia(false)
                                            
                                                  setbodegas(variantes[indexvariante].bodega)
                                                  setnumeroinputbodega(numeroinputbodega)
                                               }
                                   
                                          })

                                          setFuncionDinamica(()=>{
                                             return ()=>{ setmensajeerror("")
                                            setconfirmaractulizacion(true)
                                            setmodaladvertencia(false)
                                            }
                                          })
                                                                                                                                                                                            }} >Actualizar</button> 
                                                  }
                                            
                                            
                                            
                                          </div>
             
                                          
                                         </div>
               
             
                                         
                                         </div>
             
                
                         
                           
             
             
             
                                    
                  
                                   {
                       modaladvertencia && <Modalconfirmar tipoicon={"alerta"} texto={mensajeerror} boton3={true}  boton4={true} textoboton={"Aceptar"}  funcion={funcionDinamica} funcion2={funncionDinamica2}/>
                       } 
             
             
                            
                               </div>
         
            </CModalBody>
            
          </CModal>
        </>
     );
}

export default Bodegasvariantes;