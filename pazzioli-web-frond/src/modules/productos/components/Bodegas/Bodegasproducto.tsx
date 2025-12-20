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
function Bodegasproducto({modalbodega,setmodalbodega,productoidbodega,setproductoidbodega}:any) {
    const [bodegasproductos,setbodegasproducto]=useState<bodegaproducto[]>([])
    const traerbodegavariante= async()=>{
 const productbodega=await api.get(`existencias/variante/${productoidbodega}`,{
            headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
            }})

 setbodegasproducto(productbodega.data.content)
    }
  useEffect(()=>{
   if(productoidbodega>0){
    traerbodegavariante()
   }
  },[productoidbodega])
    return ( <>
     <CModal
                alignment="center"
                scrollable
                visible={modalbodega}
                 backdrop="static"
                 onClick={()=>{
                    setmodalbodega(false)
                    setproductoidbodega(0)
                 }}
            
                aria-labelledby="VerticallyCenteredScrollableExample2"
               className="col-12 modalproductbodega"
               
                   
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
                                                                                                    
                                                                                                        
                                                                                                    <CTableHeaderCell scope="col" >Almacen</CTableHeaderCell>
                                                                                                       <CTableHeaderCell scope="col">Cantidad</CTableHeaderCell>
                                                                                                     <CTableHeaderCell scope="col">Stock minimo</CTableHeaderCell>
                                                                                                    <CTableHeaderCell scope="col">Stock maximo</CTableHeaderCell>
                                                                                                    
                                                                                                  
                                                                                                     <CTableHeaderCell scope="col">Ubicación</CTableHeaderCell>
                                                                                                   
                                                                                                   
                                                                                                    
                                                                                        
                                                                                                      
                                                                                                    </CTableRow>
                                                                                                  </CTableHead>
                                                                                                  <CTableBody>
                                                                                                  
                                                                                                    {
                                                                                                        bodegasproductos.map((item)=>{
                                                                                                          return      <CTableRow>
                                                                                                <CTableDataCell>
                                                                                            almacen
                                                                                                </CTableDataCell>

                                                                                                   <CTableDataCell>
                                                                                                  {item.existencia ? item.existencia:0}
                                                                                                </CTableDataCell>
                                                                                                <CTableDataCell>
                                                                                                 {item.stockMin}
                                                                                                </CTableDataCell>
                                                                                                <CTableDataCell>
                                                                                                {item.stockMax}
                                                                                                </CTableDataCell>
                                                                                                
                                                                                                 <CTableDataCell>
                                                                                                  {item.ubicacion}
                                                                                                </CTableDataCell>
                                                                                                
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

export default Bodegasproducto;