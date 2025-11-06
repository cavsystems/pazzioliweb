import { CButton, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import "./Terceros.scss";
import Actulizartercero from "../components/Actulizartercero";
import React, { useState } from "react";
import api from "../../../apicofig";
interface terceros {
    razonSocial:string;
        identificacion:string;
        clasificacionTercero:{
            clasificacionTerceroId:number,
           nombre:string

        }
}
function Terceros() {
    const [terceros,setTerceros]=useState<terceros[]>([])
    const [visiblemodalcrear,setvisiblemodalcrear]=useState<boolean>(false)
    const traerterceros=async (pagina:number)=>{
       
    const terceros=await api.get(`terceros/listar?page=${pagina}&size=${7}&sortField=razonSocial&sortDirection=desc`,{
            headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
            }})
    console.log("terceros",terceros.data.content)
    setTerceros(terceros.data.content)
}

React.useEffect(()=>{
    traerterceros(0);
},[])

    return ( 
        <>
          <div className=" d-flex justify-content-center " style={{height:"100%"}}>
                <div className="containerusuario">
             
                    <div className="col-12 d-flex align-items-center justify-content-center flex-column containerimgusuario">
                        <img src="imgs/creusuario.svg" alt=""   style={{maxWidth: "48px", maxHeight: "48px"}}/>
                        <span className="tituloopaco">Terceros</span>
        
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
                                                  
                                                  
                                                 
                      
                                      
                                         
                                            
                                             
                                                {
                                                    terceros.map((item)=>{
                                                        return    <CTableRow>
                                                      <CTableDataCell>{item.razonSocial}</CTableDataCell>
                                      <CTableDataCell>{item.identificacion}</CTableDataCell>
                                       <CTableDataCell>{item.clasificacionTercero.nombre}</CTableDataCell>
                                      
                                            
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
                                                    })
                                                }
                                               
                            
                                              
                                    
                                        
                                      
                                                    
                        
                                                      
                                                
                                                     
                                                  </CTableBody>
                                               
                                                </CTable>
                                                </div>
        
        
                                                   <div className="col-12 d-flex justify-content-center containerdivagregaru"   style={{marginTop:'10px' ,paddingBottom:"100px"}}>
                            <div className="containersucursalboton">
                                  <CButton className="botonagregarsucursal" onClick={()=>{
                                    setvisiblemodalcrear(true)
                                  }}>Agregar</CButton>
                            </div>
                           </div>
                                            </div>
                    </div>
         
             
        
            </div>
            <Actulizartercero visiblemodal={visiblemodalcrear}  setvisiblemodal={setvisiblemodalcrear}/>
            </div>
        </>
     );
}

export default Terceros;