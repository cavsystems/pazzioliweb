import { CButton, CModal, CModalBody, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";

import { useEffect, useState } from "react";
import api from "../../../../apicofig";
interface bodegaproducto{
    bodegaId
: number,
existencia
: number | null
existenciaId
: number
fechaUltimoMovimiento
: string
productoVarianteId
: number,
stockMax
: number,
stockMin
: number
ubicacion
: string
}
function Precios({modalprecio,setmodalprecio,precioid,setprecioid}:any) {
    const [preciosvariantes,setpreciosvariantes]=useState<bodegaproducto[]>([])
    const traerbodegavariante= async()=>{
 const preciova=await api.get(`existencias/variante/${precioid}`,{
            headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
            }})

 
    }
  useEffect(()=>{
   if(precioid>0){
   
   }
  },[precioid])
    return ( <>
     <CModal
                alignment="center"
                scrollable
                visible={modalprecio}
                 backdrop="static"
                 onClick={()=>{
                   setmodalprecio(false)
                    setprecioid(0)
                 }}
            
                aria-labelledby="VerticallyCenteredScrollableExample2"
               className="col-12 modalproductbodega"
               
                   
              >
                   <CModalHeader>
                               
                             <CModalTitle id="VerticallyCenteredScrollableExample2">Precios</CModalTitle>
                           </CModalHeader>
    
    
                           <CModalBody>
                             <div className="col-12   d-flex flex-column justify-content-center  align-items-center padingtop">
                                                    <div className="tabla-wrapperinventario ">
                                                                                                   <CTable  
                                                
                                                        
                                                          
                                                          small
                                                          align="left" className="tablapreciovariante ">
                                                                                                  
                                                                                                  <CTableHead>
                                                                                                    <CTableRow>
                                                                                                    
                                                                                                        
                                                                                                    <CTableHeaderCell scope="col" >Precio</CTableHeaderCell>
                                                                                                       <CTableHeaderCell scope="col">Valor</CTableHeaderCell>
                                                                                                    
                                                                                                    
                                                                                                  
                                                                                                     
                                                                                                 
                                                                                                   
                                                                                                   
                                                                                                    
                                                                                        
                                                                                                      
                                                                                                    </CTableRow>
                                                                                                  </CTableHead>
                                                                                                  <CTableBody>
                                                                                                  
                                                                                                    {
                                                                                                       preciosvariantes.map((item)=>{
                                                                                                          return      <CTableRow>
                                                                                               
                                                                                                  </CTableRow>
                                                                                                        })
                                                                                                    }
                                                                                                   
                                                                                                  
                                                                                                  
                                                                                                
                            
                            
                            
                                                                                              
                                                                                                 
                                                                      
                                                                                      
                                                                                         
                                                                                            
                                                                                             
                                                                                                    
                                                                            
                                                                                              
                                                                                    
                                                                                        
                                                                                      
                                                                                                    
                                                                        
                                                                                                      
                                                                                                
                                                                                                     
                                                                                                  </CTableBody>
                                                                                               
                                                                                                </CTable>
                                                                                         </div>
                                                                                                      
                                            </div>
    
                                     
                           </CModalBody>
              </CModal>
    </> );
}

export default Precios;