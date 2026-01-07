import { CButton, CFormFloating, CFormInput, CFormLabel, CInputGroup, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import Iconupdate from "../../../../icons/iconupdate";
import Iconlupa from "../../../../icons/iconlupabuscar";
import Iconeliminar from "../../../../icons/iconeliminar";
import Iconojovariante from "../../../../icons/iconojovariante";
import Valorescaracteristicas from "./valorescacteristicas";
import { useEffect, useState } from "react";
import api from "../../../../apicofig";
import Modalconfirmar from "../../../../components/alertconfimacion";
interface caracteristica{
  tipoCaracteristicaId:number, nombre:string
}
function Caracteristicas() {
  const [modalvalores,setmodalvalores]=useState<boolean>(false)
    const [codigomodalcodigovalores,setcodigomodalvalores]=useState<boolean>(false)
       const [funcionDinamica, setFuncionDinamica] = useState<() => void>(() => {});
        const [funncionDinamica2,setfunncionDinamica2]= useState<() => void>(() => {});
     const [codigomodal,setcodigomodal]=useState<boolean>(false)
           const [codigoeliminar,setcodigoeliminar]=useState<number>(0)
                 const [modaladvertencia,setmodaladvertencia]=useState<boolean>(false)
                 const [mensajeadvertencia,setmensajeadvertencia]=useState<string>("")
                  const [mensajeerror,setmensajeerror]=useState<string>("")
                  const [confirmareliminacion,setconfirmareliminacion]=useState<boolean>(false)
         const [descripcioncaracteristica,setdescripcioncaracteristica]=useState<string>("")
    const [codigotipoca,setcodigotipoca]=useState<number>(0)
      const [codigocaracteristica,setcodigocaracteristica]=useState<number>(0)
     const [actulizar,setactulizar]=useState<boolean>(false)
    const [caracteristica,setcaracteristica]=useState<string>("")
    const [grupo,setgrupo]=useState<string>("")
    const [caracteristicas,setcaracteristicas]=useState<caracteristica[]>([])
     const traercaracteristicas=()=>{

     }
    const listarcaracteristicas=async()=>{
                 const crearlinea=await api.get(`tipos-caracteristica/listar?descripcion=${descripcioncaracteristica}`,{
                     headers: {
                             'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
                           }
                 })


   setcaracteristicas(crearlinea.data.content)
    }

  
    const eleiminarcaracteristicas=async(itemid:number)=>{
                  try {
                    const lineas=await api.delete(`tipos-caracteristica/${itemid}
           `,{
                       headers: {
                               'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
                             }
                   })
                   console.log("linea eliminada",lineas)
                   listarcaracteristicas()
                  } catch (error) {
                    console.log("linea eliminada",error.response.data)
                   setmensajeerror(error.response.data.mensaje)
                   setFuncionDinamica(()=> ()=> setmensajeerror(""))
                      
                  }
                       
                }

           useEffect(()=>{
                    listarcaracteristicas()
               },[descripcioncaracteristica])

                useEffect(()=>{
                   if(confirmareliminacion){
                     eleiminarcaracteristicas(codigoeliminar)
                     setmodaladvertencia(false)
                   setconfirmareliminacion(false)
                   }
               },[confirmareliminacion])
    return ( 
        <>
           <div className="row  paddingcointainertable">
                 <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6  "  >
        
                             <div className="inputsearch">
                                  <input type="text" className="inputlinea"  value={descripcioncaracteristica} onChange={(e)=>{
                            
                              setdescripcioncaracteristica(e.target.value)
                          }}  />
                                  <label className="labellinea">Caracteristicas</label>
                                  <div className="diviconlupainventario">
                                    <Iconlupa width={17} height={17} />
                                  </div>
                             </div>
                                
                                         
              
        
        
                    
            
                    </div>
        
                <div className="col-12   d-flex flex-column justify-content-center  align-items-center padingtop">
                        <div className="tabla-wrapperinventario ">
                                                                       <CTable  
                    
                            
                              
                              small
                              align="left" className="tablainventariovalores">
                                                                      
                                                                      <CTableHead>
                                                                        <CTableRow>
                                                                        
                                                                            <CTableHeaderCell scope="col">Codigo</CTableHeaderCell>
                                                                        <CTableHeaderCell scope="col" >Nombre</CTableHeaderCell>
                                                                       
                                                                           <CTableHeaderCell scope="col" >Acciones</CTableHeaderCell>
                                                                        
                                                            
                                                                          
                                                                        </CTableRow>
                                                                      </CTableHead>
                                                                      <CTableBody>
                                                                      
                                                                     

                                                              {
                                                                caracteristicas.map(item=>{
                                                                  return    <CTableRow>
                                                                    <CTableDataCell>
                                                                     {item.tipoCaracteristicaId}  
                                                                    </CTableDataCell>
                                                                    <CTableDataCell>
                                                                     {item.nombre}
                                                                    </CTableDataCell>
                                                                      <CTableDataCell>
                                                                  <div className="d-flex flex-nowrap" style={{gap:"12px"  }} >
                                                            <div className="col-6" style={{ maxWidth: 'fit-content' }} >
                                                                <CButton title="Ver valores"  className="buttoniconnormal"  onClick={()=>{
                                                                  setcodigotipoca(item.tipoCaracteristicaId)
                                                                  setmodalvalores(true)
                                                                }}>
                                                                  <Iconojovariante  width={16} height={18} color={"#555"} /> 
                                                                </CButton>
                                                            </div>
                                                             <div className="col-6" style={{ maxWidth: 'fit-content' }} >
                                                                <CButton title="Actulizar"  className="buttoniconnormal" onClick={()=>{
                                                                  setcodigocaracteristica(item.tipoCaracteristicaId) 
                                                                  setcaracteristica(item.nombre)
                                                                  setcodigomodal(true)
                                                                  setactulizar(true)
                                                                }}>
                                                                  <Iconupdate  width={16} height={18} color={"#555"}/> 
                                                                </CButton>
                                                            </div>
                
                                                              <div className="col-6"  style={{ maxWidth: 'fit-content' }} >
                                                                <CButton  title="Eliminar" className="buttoniconnormal" onClick={()=>{
                                                        setcodigoeliminar(item.tipoCaracteristicaId)
                                                             setmodaladvertencia(true)
                                                              setmensajeadvertencia("Seguro desea eliminar esta linea")
                                                        setFuncionDinamica(()=> ()=> {
                                                     
                                                          setconfirmareliminacion(true)
                                                          
                                                        })

                                                             setfunncionDinamica2(()=> ()=> {
                                                     
                                                          setconfirmareliminacion(false)
                                                          setmodaladvertencia(false)
                                                         

                                                        })
                                                      }}><Iconeliminar  width={16} height={16} color={"#555"}/> </CButton>
                                                            </div>
                
                                                           
                
                
                                                         
                                                        </div>
                                                                    </CTableDataCell>
                                                                      </CTableRow>
                                                                })
                                                              }

                                                                      
                                                                     
                                          
                                                          
                                                             
                                                                
                                                                 
                                                                        
                                                
                                                                  
                                                        
                                                            
                                                          
                                                                        
                                            
                                                                          
                                                                    
                                                                         
                                                                      </CTableBody>
                                                                   
                                                                    </CTable>
                                                             </div>
                   <CButton className="botonagregarsucursal fitcontentinferior"  onClick={()=>{
                    setcodigomodal(true)
                   }}>Agregar</CButton>                                                         
                </div>
                  <div className="col-12  justify-content-center " style={{marginTop:'10px' ,display: codigomodal ? "flex":"none"}}>
                                                                                      
                                                                                       <div   className="d-flex justify-content-center  align-items-center"style={{width:'100vw',height:'100vh',top:0,left:0,zIndex:9999,position:'fixed',background:"rgb(0, 0, 0,0.5)"}} id="modalrol">
                                                                                               <div className="card" style={{ width:'400px'}}>
                                                                                                   <div className="card-body">
                                                                                                                 <CInputGroup >
                                                                                    <CFormFloating className="margeniputempresa">
                                                                   
                                                                                 <CFormInput placeholder=""  className="inputdatosempresa fontletre"  value={caracteristica}  onChange={(e)=>{
                                                                                   
                                                                                   setcaracteristica(e.target.value)
                                                                                 }}/>
                                                                               
                                                                    
                                                                   <CFormLabel>Característica</CFormLabel>
                                                                      
                                                                                 </CFormFloating>
                                                                               </CInputGroup>
                                                                                                       </div>
                                                                   
                                                                                                       <div className="card-footer d-flex justify-content-center"  >
                                                                                                                 <button type="button"  className="botonretroceder" onClick={()=>{
                                                                                                                 setcodigocaracteristica(0)
                                                                                                                  setactulizar(false)
                                                                                                              setcaracteristica("")
                                                                                                                 setcodigomodal(false)
                                                                                                                 }}>Cancelar</button>
                                                                   {
                                                                   !actulizar &&        <button type="button" className="botoncontinuar" onClick={async()=>{

                                                                          const crearlinea=await api.post(`tipos-caracteristica`,{nombre:caracteristica},{
            headers: {
                    'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
                  }
        })
        await listarcaracteristicas()
                                               setcodigomodal(false)
                                               setgrupo("")
                                               
                                                                         }} >Guardar</button>
                                                                   }

                                                                   {
                                                                    actulizar &&       <button type="button" className="botoncontinuar" onClick={async()=>{

                                                                          const crearlinea=await api.put(`tipos-caracteristica/${codigocaracteristica}`,{nombre:caracteristica},{
            headers: {
                    'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
                  }
        })
        await    listarcaracteristicas()
                                               setcodigomodal(false)
                                               setcodigocaracteristica(0)
                                               setactulizar(false)
                                               setcaracteristica("")
                                               
                                                                         }} >Actualizar</button>
                                                                   }
                                                                            
                                                                   
                                                                   
                                                                                                       </div>
                                                                                               </div>
                                                                                               </div>
                                                                                               
                                                                                      </div> 
                    <Valorescaracteristicas modalvalores={modalvalores} setmodalvalores={setmodalvalores}  codigotipoca={codigotipoca} setcodigotipoca={setcodigotipoca}/>
                   
                                                                            {
                                                                                                                                                mensajeerror!=="" &&  <Modalconfirmar tipoicon={"Error"} texto={mensajeerror} boton3={true} textoboton={"Aceptar"} funcion={funcionDinamica}/> 
                                                                                                                                                }   
                                                                                                               {
                                                                                                   modaladvertencia && <Modalconfirmar tipoicon={"alerta"} texto={mensajeadvertencia} boton3={true}  boton4={true} textoboton={"Aceptar"}  funcion={funcionDinamica} funcion2={funncionDinamica2}/>
                                                                                                   }        
                     
            </div>
        </>
     );
}

export default Caracteristicas;