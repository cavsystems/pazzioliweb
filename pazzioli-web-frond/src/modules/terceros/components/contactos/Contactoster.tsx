import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import Iconupdate from "../../../../icons/iconupdate";
import React from "react";
import Iconeliminar from "../../../../icons/iconeliminar";

function Contactotercero({modalcontacto,setmodalcontacto}:any) {
    const [botonactual,setbotonactual]=React.useState(0)

    return ( 
      
              
                <CModal
                alignment="center"
                scrollable
                visible={modalcontacto}
                onClose={()=>{
                    setmodalcontacto(false)
                }}
                aria-labelledby="VerticallyCenteredScrollableExample2"
               className="col-12 modalusuper"
                backdrop="static"
             
                  
              >
                <CModalHeader>
                    
                  <CModalTitle id="VerticallyCenteredScrollableExample2">Contactos</CModalTitle>
                </CModalHeader>


                <CModalBody>
                 <div className="col-12"  >
                    <div style={{maxHeight:"300px",overflowY:"auto",overflowX:"hidden"}} className="conticontacto">
     <CTable   
     
  
  small
  align="left" className="tabla tablacontactos">
          <CTableHead>
            <CTableRow>
            
              <CTableHeaderCell scope="col" >Tipo contacto</CTableHeaderCell>
                <CTableHeaderCell scope="col" >Valor</CTableHeaderCell>
               
                   <CTableHeaderCell scope="col "  className="thacciones">Acciones</CTableHeaderCell>
  
            </CTableRow>
          </CTableHead>
          <CTableBody>
     <CTableRow>
   
                <CTableDataCell>Juan  </CTableDataCell>
                <CTableDataCell>luisdacade@gmail.com</CTableDataCell>
                   
                          <CTableDataCell style={{ minWidth: '100px' }}> 
                                 <div className="d-flex justify-content-start" style={{gap:"12px"}} >
                                <div style={{width:"30px" , height:"30px" ,display:"flex",justifyContent:"center"}} >
                                <input type="checkbox" />
                                </div>
                                                                              
                                                                                                
                               <div   style={{ maxWidth: 'fit-content' }} >
                                                                               <CButton  className="buttoniconnormal"  onMouseEnter={()=>{
                                                                                setbotonactual(1)
                                                                               }}  onMouseLeave={()=>setbotonactual(0)}>      <Iconupdate  width={16} height={16} color={botonactual===1 ? "#fff":"#555"}/>  </CButton>
                                                                           </div>      

                              <div   style={{ maxWidth: 'fit-content' }} >
                                                                               <CButton  className="buttoniconnormaleliminar"  onMouseEnter={()=>{
                                                                                setbotonactual(2)
                                                                               }}  onMouseLeave={()=>setbotonactual(0)}>      <Iconeliminar  width={16} height={16} color={botonactual===2 ? "#fff":"#555"}/>  </CButton>
                                                                           </div>                                         
                             </div>
                             </CTableDataCell>
             
               </CTableRow>
           
          
                    

            
           
             
                
         
             
            
           
          </CTableBody>
        </CTable>
        </div>
      
        
 
</div>
                            
                </CModalBody>
                

              <CModalFooter style={{justifyContent: 'center',display:'flex'}} className="fottersucursal">
    
             
             
               <button type="submit" className="botoncontinuarguardar botonagregarcon"  key="guardar"    >Agregar</button>   
                     </CModalFooter>
                 </CModal>
     );
}

export default Contactotercero;