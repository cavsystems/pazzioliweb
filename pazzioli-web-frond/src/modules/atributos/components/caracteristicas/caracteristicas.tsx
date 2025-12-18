import { CButton, CFormFloating, CFormInput, CFormLabel, CInputGroup, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import Iconupdate from "../../../../icons/iconupdate";
import Iconlupa from "../../../../icons/iconlupabuscar";
import Iconeliminar from "../../../../icons/iconeliminar";
import Iconojovariante from "../../../../icons/iconojovariante";
import Valorescaracteristicas from "./valorescacteristicas";
import { useEffect, useState } from "react";
import api from "../../../../apicofig";
interface caracteristica{
  tipoCaracteristicaId:number, nombre:string
}
function Caracteristicas() {
  const [modalvalores,setmodalvalores]=useState<boolean>(false)
    const [codigomodalcodigovalores,setcodigomodalvalores]=useState<boolean>(false)
    const [codigotipoca,setcodigotipoca]=useState<number>(0)
    const [caracteristicas,setcaracteristicas]=useState<caracteristica[]>([])
    const listarcaracteristicas=async()=>{
                 const crearlinea=await api.get(`tipos-caracteristica/listar`,{
                     headers: {
                             'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
                           }
                 })


   setcaracteristicas(crearlinea.data.content)
    }

    useEffect(()=>{
      listarcaracteristicas()
    },[])
    return ( 
        <>
           <div className="row  paddingcointainertable">
                 <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6  "  >
        
                             <div className="inputsearch">
                                  <input type="text" className="inputlinea" />
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
                                                                <CButton title="Actulizar"  className="buttoniconnormal" >
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
                   <CButton className="botonagregarsucursal fitcontentinferior" >Agregar</CButton>                                                         
                </div>
                    <Valorescaracteristicas modalvalores={modalvalores} setmodalvalores={setmodalvalores}  codigotipoca={codigotipoca} setcodigotipoca={setcodigotipoca}/>
                   
                     
            </div>
        </>
     );
}

export default Caracteristicas;