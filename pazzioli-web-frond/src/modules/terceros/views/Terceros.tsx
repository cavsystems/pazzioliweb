import { CButton, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import "./Terceros.scss";
import Actulizartercero from "../components/Actulizartercero";

function Terceros() {
    
    return ( 
        <>
          <div className=" d-flex justify-content-center " style={{height:"100%"}}>
                <div className="containerusuario">
             
                    <div className="col-12 d-flex align-items-center justify-content-center flex-column containerimgusuario">
                        <img src="imgs/creusuario.svg" alt=""   style={{maxWidth: "48px", maxHeight: "48px"}}/>
                        <span className="tituloopaco">Usuarios</span>
        
                    </div>
                      
                      <div className="col-12">
                         <div  className="tablesucursalescon" >
                                                <div className="tabla-wrapper">
                                                   <CTable  

            hover
          
          small
          align="left" className="tablaterceros">
                                                  
                                                  <CTableHead>
                                                    <CTableRow>
                                                    
                                                        <CTableHeaderCell scope="col">Razon social</CTableHeaderCell>
                                                    <CTableHeaderCell scope="col" >Identificación</CTableHeaderCell>
                                                      <CTableHeaderCell scope="col" >Tipo</CTableHeaderCell>
                                                       <CTableHeaderCell scope="col" >Acciones</CTableHeaderCell>
                                                    
                                        
                                                      
                                                    </CTableRow>
                                                  </CTableHead>
                                                  <CTableBody>
                                                  
                                                  
                                                 
                      
                                      
                                         
                                            
                                             
                                                
                                                 <CTableRow>
                                                      <CTableDataCell>Juan</CTableDataCell>
                                      <CTableDataCell>1005860599</CTableDataCell>
                                       <CTableDataCell>Cliente</CTableDataCell>
                                      
                                            
                                              <CTableHeaderCell  >
                                                <div className="row" style={{gap:"12px" }} >
                                                    <div className="col-6" style={{ maxWidth: 'fit-content' }} >
                                                        <CButton  className="btnsucursal" style={{ maxWidth: 'fit-content',padding:'0' }}  >
                                                            <img src="/imgs/imgeditar.svg"/>
                                                        </CButton>
                                                    </div>
                                                    <div className="col-6"  style={{ maxWidth: 'fit-content' }} >
                                                        <CButton  className="btnsucursal"  style={{ maxWidth: 'fit-content', padding: 0, backgroundColor: '#21BCFF'}}  >    <HiOutlineOfficeBuilding size={29} color="#fff" /></CButton>
                                                    </div>
        
                                                      <div className="col-6"  style={{ maxWidth: 'fit-content' }} >
                                                        <CButton  className="btnsucursal"  style={{ maxWidth: 'fit-content', padding: 0, backgroundColor: '#21BCFF'}} >    <img src="/imgs/usuariotable.svg" style={{    width: '29px',
            height: '29px',
            padding: '2px'}}/></CButton>
                                                    </div>
        
                                                   
        
        
                                                 
                                                </div>
                                              </CTableHeaderCell>
                                              </CTableRow>
                            
                                              
                                    
                                        
                                      
                                                    
                        
                                                      
                                                
                                                     
                                                  </CTableBody>
                                               
                                                </CTable>
                                                </div>
        
        
                                                   <div className="col-12 d-flex justify-content-center containerdivagregaru"   style={{marginTop:'10px' ,paddingBottom:"100px"}}>
                            <div className="containersucursalboton">
                                  <CButton className="botonagregarsucursal" >Agregar</CButton>
                            </div>
                           </div>
                                            </div>
                    </div>
         
             
        
            </div>
            <Actulizartercero/>
            </div>
        </>
     );
}

export default Terceros;