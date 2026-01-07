import { CButton, CFormFloating, CFormInput, CFormLabel, CInputGroup, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import Iconlupa from "../../../../icons/iconlupabuscar";
import Iconupdate from "../../../../icons/iconupdate";
import Iconeliminar from "../../../../icons/iconeliminar";
import { useEffect, useState } from "react";
import api from "../../../../apicofig";
import Modalconfirmar from "../../../../components/alertconfimacion";

function Grupos() {
   const [codigomodal,setcodigomodal]=useState<boolean>(false)
   const [actulizar,setactulizar]=useState<boolean>(false)
      const [descripciongrupo,setdescripciongrupo]=useState<string>("")
      const [mensajeerror,setmensajeerror]=useState<string>("")
        const [funcionDinamica, setFuncionDinamica] = useState<() => void>(() => {});
           const [codigogrupo,setcodigogrupo]=useState<number>(0)
       const [grupo,setgrupo]=useState<string>("")
             const [mensajeadvertencia,setmensajeadvertencia]=useState<string>("")
               const [confirmareliminacion,setconfirmareliminacion]=useState<boolean>(false)
          const [funncionDinamica2,setfunncionDinamica2]= useState<() => void>(() => {});
           const [codigoeliminar,setcodigoeliminar]=useState<number>(0)
           const [modaladvertencia,setmodaladvertencia]=useState<boolean>(false)
         const [grupos,setgrupos]=useState<{
          descripcion
: 
string,
id
: 
number
         }[]>([])

        const traergrupos=async ()=>{
       
            
                 const grupos=await api.get(`grupos/listar?page=0&size=10&sortField=id&sortDirection=desc&descripcion=${descripciongrupo}
       `,{
                   headers: {
                           'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
                         }
               })

             setgrupos(grupos.data.content)
                //setlineas(lineas.data.content)
        
            
               
           }



            const eleiminargrupos=async(itemid:number)=>{
                  try {
                    const lineas=await api.delete(`grupos/${itemid}
           `,{
                       headers: {
                               'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
                             }
                   })
                   console.log("linea eliminada",lineas)
                   traergrupos()
                  } catch (error) {
                    console.log("linea eliminada",error.response.data)
                   setmensajeerror(error.response.data.mensaje)
                   setFuncionDinamica(()=> ()=> setmensajeerror(""))
                      
                  }
                       
                }


           useEffect(()=>{
               traergrupos()
           },[descripciongrupo])


           useEffect(()=>{
                   if(confirmareliminacion){
                     eleiminargrupos(codigoeliminar)
                     setmodaladvertencia(false)
                   setconfirmareliminacion(false)
                   }
               },[confirmareliminacion])
    return ( 
        <>
          <div className="row  paddingcointainertable">
                 <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6  "  >
        
                             <div className="inputsearch">
                                  <input type="text" className="inputlinea"  value={descripciongrupo} onChange={(e)=>{
                            
                              setdescripciongrupo(e.target.value)
                          }} />
                                  <label className="labellinea">Grupos</label>
                                  <div className="diviconlupainventario">
                                    <Iconlupa width={17} height={17} />
                                  </div>
                             </div>
                                
                                         
              
        
        
                    
            
                    </div>
        
                <div className="col-12   d-flex flex-column justify-content-center  align-items-center padingtop">
                        <div className="tabla-wrapperinventario ">
                                                                       <CTable  
                    
                            
                              
                              small
                              align="left" className="tablainventario ">
                                                                      
                                                                      <CTableHead>
                                                                        <CTableRow>
                                                                        
                                                                            <CTableHeaderCell scope="col">Codigo</CTableHeaderCell>
                                                                        <CTableHeaderCell scope="col" >Nombre</CTableHeaderCell>
                                                                       
                                                                           <CTableHeaderCell scope="col" >Acciones</CTableHeaderCell>
                                                                        
                                                            
                                                                          
                                                                        </CTableRow>
                                                                      </CTableHead>
                                                                      <CTableBody>
                                                                      

                                                                      {
                                                                        grupos.map((item)=>{
                                                                          return      <CTableRow>
                                                                    <CTableDataCell>
                                                                     {item.id} 
                                                                    </CTableDataCell>
                                                                    <CTableDataCell>
                                                                     {item.descripcion}
                                                                    </CTableDataCell>
                                                                      <CTableDataCell>
                                                                  <div className="d-flex flex-nowrap" style={{gap:"12px"  }} >
                                                            <div className="col-6" style={{ maxWidth: 'fit-content' }} >
                                                                <CButton title="Actulizar"  className="buttoniconnormal"  onClick={()=>{
                                                               setcodigogrupo(item.id)
                                                               setgrupo(item.descripcion)
                                                               setactulizar(true)
                                                               setcodigomodal(true)
                                                                }} >
                                                                  <Iconupdate  width={16} height={18} color={"#555"}/> 
                                                                </CButton>
                                                            </div>
                                                            
                
                                                              <div className="col-6"  style={{ maxWidth: 'fit-content' }} >
                                                                <CButton  title="Eliminar" className="buttoniconnormal"  onClick={()=>{
                                                        setcodigoeliminar(item.id)
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
                   <CButton className="botonagregarsucursal fitcontentinferior" onClick={()=>{
                    
                    setcodigomodal(true)
                   }}>Agregar</CButton>                                                         
                </div>
                          <div className="col-12  justify-content-center " style={{marginTop:'10px' ,display: codigomodal ? "flex":"none"}}>
                                                                                      
                                                                                       <div   className="d-flex justify-content-center  align-items-center"style={{width:'100vw',height:'100vh',top:0,left:0,zIndex:9999,position:'fixed',background:"rgb(0, 0, 0,0.5)"}} id="modalrol">
                                                                                               <div className="card" style={{ width:'400px'}}>
                                                                                                   <div className="card-body">
                                                                                                                 <CInputGroup >
                                                                                    <CFormFloating className="margeniputempresa">
                                                                   
                                                                                 <CFormInput placeholder=""  className="inputdatosempresa fontletre"  value={grupo}  onChange={(e)=>{
                                                                                   
                                                                                   setgrupo(e.target.value)
                                                                                 }}/>
                                                                               
                                                                    
                                                                   <CFormLabel>Grupo</CFormLabel>
                                                                      
                                                                                 </CFormFloating>
                                                                               </CInputGroup>
                                                                                                       </div>
                                                                   
                                                                                                       <div className="card-footer d-flex justify-content-center"  >
                                                                                                                 <button type="button"  className="botonretroceder" onClick={()=>{
                                                                                                                  setcodigogrupo(0)
                                                                                                                  setactulizar(false)
                                                                                                                  setgrupo("")
                                                                                                                 setcodigomodal(false)
                                                                                                                 }}>Cancelar</button>
                                                                   {
                                                                   !actulizar &&        <button type="button" className="botoncontinuar" onClick={async()=>{

                                                                          const crearlinea=await api.post(`grupos`,{descripcion:grupo},{
            headers: {
                    'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
                  }
        })
        await traergrupos()
                                               setcodigomodal(false)
                                               setgrupo("")
                                               
                                                                         }} >Guardar</button>
                                                                   }

                                                                   {
                                                                    actulizar &&       <button type="button" className="botoncontinuar" onClick={async()=>{

                                                                          const crearlinea=await api.put(`grupos/${codigogrupo}`,{descripcion:grupo},{
            headers: {
                    'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
                  }
        })
        await traergrupos()
                                               setcodigomodal(false)
                                               setcodigogrupo(0)
                                               setactulizar(false)
                                               setgrupo("")
                                               
                                                                         }} >Actualizar</button>
                                                                   }
                                                                            
                                                                   
                                                                   
                                                                                                       </div>
                                                                                               </div>
                                                                                               </div>
                                                                                               
                                                                                      </div>  
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

export default Grupos;