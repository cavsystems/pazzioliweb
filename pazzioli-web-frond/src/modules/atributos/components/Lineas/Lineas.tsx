import { CButton, CFormFloating, CFormInput, CFormLabel, CInputGroup, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import Iconupdate from "../../../../icons/iconupdate";
import Usuariosicon from "../../../../icons/Isuarios";
import Iconeliminar from "../../../../icons/iconeliminar";

function Lineas() {
    return ( <>
    <div className="row ">
         <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6  "  >

                     <div className="inputsearch">
                          <input type="text" className="inputlinea" />
                          <label className="labellinea">Linea</label>
                     </div>
                        
                                 
      


            
    
            </div>

        <div className="col-12   d-flex flex-column justify-content-center padingtop">
                <div className="tabla-wrapper ">
                                                               <CTable  
            
                    
                      
                      small
                      align="left" className="tablaterceros">
                                                              
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
                                                             Aseo
                                                            </CTableDataCell>
                                                              <CTableDataCell>
                                                          <div className="d-flex flex-nowrap" style={{gap:"12px"  }} >
                                                    <div className="col-6" style={{ maxWidth: 'fit-content' }} >
                                                        <CButton  className="buttoniconnormal" >
                                                          <Iconupdate  width={16} height={18} color={"#555"}/> 
                                                        </CButton>
                                                    </div>
                                                    
        
                                                      <div className="col-6"  style={{ maxWidth: 'fit-content' }} >
                                                        <CButton  className="buttoniconnormal"  ><Iconeliminar  width={16} height={16} color={"#555"}/> </CButton>
                                                    </div>
        
                                                   
        
        
                                                 
                                                </div>
                                                            </CTableDataCell>
                                                              </CTableRow>
                                                             
                                  
                                                  
                                                     
                                                        
                                                         
                                                                
                                        
                                                          
                                                
                                                    
                                                  
                                                                
                                    
                                                                  
                                                            
                                                                 
                                                              </CTableBody>
                                                           
                                                            </CTable>
                                                     </div>
           <CButton className="botonagregarsucursal fitcontentinferior" >Agregar</CButton>                                                         
        </div>
            
    </div>
    </> );
}

export default Lineas;