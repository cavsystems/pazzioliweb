import { CButton, CFormFloating, CFormInput, CFormLabel, CInputGroup, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import Iconojovariante from "../../../../icons/iconojovariante";
import Iconeliminar from "../../../../icons/iconeliminar";
import Iconupdate from "../../../../icons/iconupdate";
import { useEffect, useState } from "react";
import api from "../../../../apicofig";
import Modalconfirmar from "../../../../components/alertconfimacion";
interface valorcaracteristica{
 
  caracteristicaId:number, nombre:string, tipoId:number, tipoNombre: string
}

function Valorescaracteristicas({modalvalores,setmodalvalores,codigotipoca, setcodigotipoca}:any) {
    const [codigomodal,setcodigomodal]=useState<boolean>(false)
    const [valorca,setvalorca]=useState<valorcaracteristica[]>([])
    const [actulizar,setactulizar]=useState<boolean>(false)
    const [codigovalores,setcodigovalores]=useState<number>(0)
    const [nombresca,setnombresca]=useState<string>("")
 const [funcionDinamica, setFuncionDinamica] = useState<() => void>(() => {});
  const [mensajeerror,setmensajeerror]=useState<string>("")
    const crearvalores=async()=>{
       try {
         const creartallas=await api.post(`caracteristicas`,{nombre:nombresca.toUpperCase(), tipo:{tipoCaracteristicaId:codigotipoca}
      },{
            headers: {
                    'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
                  }})
 
        if(!creartallas.data.success){
             setmensajeerror(creartallas.data.message)
             setFuncionDinamica(()=>  () => setmensajeerror(""))
             return
        }
          console.log(creartallas)
valorescarateristicasfun(codigotipoca)
setnombresca("")
setcodigomodal(false)

                  
       } catch (error) {
      //   console.log(error.message)
       }
     
    }

    const valorescarateristicasfun=async(codigotipocar:number)=>{
         const traercara=await api.get(`caracteristicas/tipo/${codigotipocar}`,{
            headers: {
                    'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
                  }})
         setvalorca(traercara.data.content)

                 
    }
    useEffect(()=>{
       if(codigotipoca>0){
        valorescarateristicasfun(codigotipoca)

       }
    },[codigotipoca])
    return (  <>
      <CModal
            alignment="center"
            scrollable
            visible={modalvalores}
             backdrop="static"
            onClose={()=>{
             setmodalvalores()
            }}
            aria-labelledby="VerticallyCenteredScrollableExample2"
           className="col-12 modalusupassword"
           
               
          >
               <CModalHeader>
                           
                         <CModalTitle id="VerticallyCenteredScrollableExample2">Valores caracteristicas</CModalTitle>
                       </CModalHeader>


                       <CModalBody>
                         <div className="col-12   d-flex flex-column justify-content-center  align-items-center padingtop">
                                                <div className="tabla-wrapperinventario ">
                                                                                               <CTable  
                                            
                                                    
                                                      
                                                      small
                                                      align="left" className="tablainventariovalores ">
                                                                                              
                                                                                              <CTableHead>
                                                                                                <CTableRow>
                                                                                                
                                                                                                    <CTableHeaderCell scope="col">Codigo</CTableHeaderCell>
                                                                                                <CTableHeaderCell scope="col" >Nombre</CTableHeaderCell>
                                                                                               
                                                                                                   <CTableHeaderCell scope="col" >Acciones</CTableHeaderCell>
                                                                                                
                                                                                    
                                                                                                  
                                                                                                </CTableRow>
                                                                                              </CTableHead>
                                                                                              <CTableBody>
                                                                                              {
                                                                                                valorca.map(item=>{
                                                                                                  return    <CTableRow>
                                                                                            <CTableDataCell>
                                                                                             {item.caracteristicaId} 
                                                                                            </CTableDataCell>
                                                                                            <CTableDataCell>
                                                                                             {item.nombre}
                                                                                            </CTableDataCell>
                                                                                              <CTableDataCell>
                                                                                          <div className="d-flex flex-nowrap" style={{gap:"12px"  }} >
                                                                                 
                                                                                    
                                                                                      <div className="col-6" style={{ maxWidth: 'fit-content' }} >
                                                                <CButton title="Actulizar"  className="buttoniconnormal" onClick={async ()=>{

                                                                               
                                                                  setactulizar(true)
                                                                  setcodigovalores(item.caracteristicaId)
                                                                  setcodigomodal(true)
                                                                  setnombresca(item.nombre)
                                                                }}>
                                                                  <Iconupdate  width={16} height={18} color={"#555"}/> 
                                                                </CButton>
                                                            </div>
                                                                                      <div className="col-6"  style={{ maxWidth: 'fit-content' }} >
                                                                                        <CButton  title="Eliminar" className="buttoniconnormal"  ><Iconeliminar  width={16} height={16} color={"#555"}/> </CButton>
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
                                                                                                                              
                                                                                                                               <div   className="d-flex justify-content-center  align-items-center"style={{width:'100vw',height:'100vh',top:0,left:0,zIndex:9999,position:'fixed',background:"rgb(0, 0, 0,0.5)",
backdropFilter: "blur(3px)"}} id="modalrol">
                                                                                                                                       <div className="card" style={{ width:'400px'}}>
                                                                                                                                           <div className="card-body">
                                                                                                                                                         <CInputGroup >
                                                                                                                            <CFormFloating className="margeniputempresa">
                                                                                                           
                                                                                                                         <CFormInput placeholder=""  className="inputdatosempresa fontletre"  value={nombresca} onChange={(e)=>{
                                                                                                                          setnombresca(e.target.value)
                                                                                                                         }} />
                                                                                                                       
                                                                                                            
                                                                                                           <CFormLabel>Valor</CFormLabel>
                                                                                                              
                                                                                                                         </CFormFloating>
                                                                                                                       </CInputGroup>
                                                                                                                                               </div>
                                                                                                           
                                                                                                                                               <div className="card-footer d-flex justify-content-center"  >
                                                                                                                                                         <button type="button"  className="botonretroceder" onClick={()=>{
                                                                                                                                                         setcodigomodal(false)
                                                                                                                                                         setactulizar(false)
                                                                                                                                                         setnombresca("")
                                                                                                                                                         setcodigovalores(0)
                                                                                                                                                         }}>Cancelar</button>
                                                                                                                       {
                                                                                                                        actulizar &&   <button type="button" className="botoncontinuar align-items-center" onClick={async ()=>{

                                                                                                                           const creartallas=await api.put(`caracteristicas/${codigovalores}`,{nombre:nombresca.toUpperCase(), tipo:{tipoCaracteristicaId:codigotipoca}
                                                                                                                             },{
                                                                                                                       headers: {
                                                                                                                             'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
                                                                                                                                             }})
                                                                                                                                                console.log(nombresca,creartallas)
                                                                                                                                                 if(!creartallas.data.success){
                                                                                                               setmensajeerror(creartallas.data.message)
                                                                                                               setFuncionDinamica(()=>  () => setmensajeerror(""))
                                                                                                               return
                                                                                                          }
                                                                                                                                                  valorescarateristicasfun(codigotipoca)
                                                                                                                                                         setcodigomodal(false)
                                                                                                                                                         setactulizar(false)
                                                                                                                                                         setnombresca("")
                                                                                                                                                         setcodigovalores(0)
                                                                                                                        }} >Actualizar</button>
                                                                                                                       }

                                                                                                                       {
                                                                                                                         !actulizar &&   <button type="button" className="botoncontinuar"  onClick={crearvalores}>Guardar</button>
                                                                                                                       }
                                                                                                                    
                                                                                                               
                                                                                                           
                                                                                                                                               </div>
                                                                                                                                       </div>
                                                                                                                                       </div>


                                                                                                                                         {
                                                                                                                                                               mensajeerror!=="" && <Modalconfirmar tipoicon={"Error"} texto={mensajeerror} boton3={true} textoboton={"Aceptar"}  funcion={funcionDinamica}/>
                                                                                                                                                              } 
                                                                                                                                       
                                                                                                                              </div>           
                       </CModalBody>
          </CModal>
    </>);
}

export default Valorescaracteristicas;