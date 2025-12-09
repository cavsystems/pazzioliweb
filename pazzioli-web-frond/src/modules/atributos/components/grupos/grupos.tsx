import { CButton, CFormFloating, CFormInput, CFormLabel, CInputGroup, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import Iconlupa from "../../../../icons/iconlupabuscar";
import Iconupdate from "../../../../icons/iconupdate";
import Iconeliminar from "../../../../icons/iconeliminar";
import { useState } from "react";

function Grupos() {
   const [codigomodal,setcodigomodal]=useState<boolean>(false)
    return ( 
        <>
          <div className="row  paddingcointainertable">
                 <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6  "  >
        
                             <div className="inputsearch">
                                  <input type="text" className="inputlinea" />
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
                                                                      
                                                                      <CTableRow>
                                                                    <CTableDataCell>
                                                                     1   
                                                                    </CTableDataCell>
                                                                    <CTableDataCell>
                                                                     Calvin 
                                                                    </CTableDataCell>
                                                                      <CTableDataCell>
                                                                  <div className="d-flex flex-nowrap" style={{gap:"12px"  }} >
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
                                                                   
                                                                                 <CFormInput placeholder=""  className="inputdatosempresa fontletre"   />
                                                                               
                                                                    
                                                                   <CFormLabel>Linea</CFormLabel>
                                                                      
                                                                                 </CFormFloating>
                                                                               </CInputGroup>
                                                                                                       </div>
                                                                   
                                                                                                       <div className="card-footer d-flex justify-content-center"  >
                                                                                                                 <button type="button"  className="botonretroceder" onClick={()=>{
                                                                                                                 setcodigomodal(false)
                                                                                                                 }}>Cancelar</button>
                                                                   
                                                                            
                                                                         <button type="button" className="botoncontinuar"  >Guardar</button>
                                                                   
                                                                                                       </div>
                                                                                               </div>
                                                                                               </div>
                                                                                               
                                                                                      </div>     
            </div>
        </>
     );
}

export default Grupos;