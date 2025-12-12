import { CButton, CFormFloating, CFormInput, CFormLabel, CInputGroup, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import Iconupdate from "../../../../icons/iconupdate";
import Iconlupa from "../../../../icons/iconlupabuscar";
import Iconeliminar from "../../../../icons/iconeliminar";
import Iconojovariante from "../../../../icons/iconojovariante";
import Valorescaracteristicas from "./valorescacteristicas";
import { useState } from "react";

function Caracteristicas() {
  const [modalvalores,setmodalvalores]=useState<boolean>(false)
    const [codigomodalcodigovalores,setcodigomodalvalores]=useState<boolean>(false)
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
                                                                      
                                                                      <CTableRow>
                                                                    <CTableDataCell>
                                                                     1   
                                                                    </CTableDataCell>
                                                                    <CTableDataCell>
                                                                     Color
                                                                    </CTableDataCell>
                                                                      <CTableDataCell>
                                                                  <div className="d-flex flex-nowrap" style={{gap:"12px"  }} >
                                                            <div className="col-6" style={{ maxWidth: 'fit-content' }} >
                                                                <CButton title="Ver valores"  className="buttoniconnormal" onClick={()=>{
                                                                  setmodalvalores(true)
                                                                }} >
                                                                  <Iconojovariante  width={16} height={18} color={"#555"}/> 
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



                                                                        <CTableRow>
                                                                    <CTableDataCell>
                                                                     2   
                                                                    </CTableDataCell>
                                                                    <CTableDataCell>
                                                                     Talla
                                                                    </CTableDataCell>
                                                                      <CTableDataCell>
                                                                  <div className="d-flex flex-nowrap" style={{gap:"12px"  }} >
                                                            <div className="col-6" style={{ maxWidth: 'fit-content' }} >
                                                                <CButton title="Ver valores"  className="buttoniconnormal"  onClick={()=>{
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
                                                                     
                                          
                                                          
                                                             
                                                                
                                                                 
                                                                        
                                                
                                                                  
                                                        
                                                            
                                                          
                                                                        
                                            
                                                                          
                                                                    
                                                                         
                                                                      </CTableBody>
                                                                   
                                                                    </CTable>
                                                             </div>
                   <CButton className="botonagregarsucursal fitcontentinferior" >Agregar</CButton>                                                         
                </div>
                    <Valorescaracteristicas modalvalores={modalvalores} setmodalvalores={setmodalvalores} setcodigomodalvalores={setcodigomodalvalores}/>
                   
                     
            </div>
        </>
     );
}

export default Caracteristicas;