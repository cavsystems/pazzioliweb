import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import Iconeliminar from "../../../../icons/iconeliminar";
import React, { useEffect } from "react";
import Iconupdate from "../../../../icons/iconupdate";
import api from "../../../../apicofig";
import Sedeformtercero from "./sedesformtercero";
interface sedeterceros{
activo
: 
boolean
departamento
: 
{departamentoId: number, nombre: string}
direccion
: 
string
municipio
: 
{municipioId: number, nombre: string}
nombreSede
: 
string,
principal
: 
boolean
sedeId
: 
number
telefono
: 
string
}
function Sedester({modalsede,setmodalsede,terceroid,setterceroid}:any) {
    const [botonactual,setbotonactual]=React.useState(0)
    const [modal,setmodal]=React.useState<boolean>(false)
    const [actulizar,setactulizar]=React.useState<boolean>(false)
     const [sedesterceros,setsedesterceros]=React.useState<sedeterceros[]>([])
    useEffect(()=>{
        console.log("id tercero",terceroid)
      traersedetercero(terceroid)
    },[terceroid])

    const traersedetercero=async(terceroi:number)=>{
          const sedeterceros=await api.get(`sedeTercero/listarPorTerceroId/${terceroi}?page=0&size=${10}&sortField=sedeId&sortDirection=desc`,{
                    headers: {
                      'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
                    }})

      console.log("sede terceros",sedeterceros)
      setsedesterceros(sedeterceros.data.content)
    }
    return (<CModal
                alignment="center"
                scrollable
                visible={modalsede}
                onClose={()=>{
 setmodalsede(false)
                   setterceroid(0)
                }}
                aria-labelledby="VerticallyCenteredScrollableExample2"
               className="col-12 modalusuper"
                backdrop="static"
             
                  
              >
                <CModalHeader>
                    
                  <CModalTitle id="VerticallyCenteredScrollableExample2">Sedes</CModalTitle>
                </CModalHeader>


                <CModalBody>
                 <div className="col-12"  >
                    <div style={{maxHeight:"300px",overflowY:"auto",overflowX:"hidden"}} className="conticontacto">
     <CTable   
     
  
  small
  align="left" className="tabla tablacontactos">
          <CTableHead>
            <CTableRow>
            
              <CTableHeaderCell scope="col" >Sede</CTableHeaderCell>
                <CTableHeaderCell scope="col" >Direccion</CTableHeaderCell>
                 <CTableHeaderCell scope="col" >Telefono</CTableHeaderCell>
                    <CTableHeaderCell scope="col" >Departamento</CTableHeaderCell>
                     <CTableHeaderCell scope="col" >Municipio</CTableHeaderCell>
                   <CTableHeaderCell scope="col "  className="thacciones">Acciones</CTableHeaderCell>
  
            </CTableRow>
          </CTableHead>
          <CTableBody>
    
             
                  
                    {
                        sedesterceros.map((itemsede)=>{
                            return  <CTableRow>
                             <CTableDataCell>{itemsede.nombreSede}</CTableDataCell>
                        <CTableDataCell>{itemsede.direccion}</CTableDataCell>
                         <CTableDataCell>{itemsede.telefono}</CTableDataCell>
                          <CTableDataCell>{itemsede.departamento.nombre}</CTableDataCell>
                           <CTableDataCell>{itemsede.municipio.nombre}</CTableDataCell>
                            <CTableDataCell style={{ minWidth: '100px' }}> 
                                 <div className="d-flex justify-content-start" style={{gap:"12px"}} >
                                <div style={{width:"30px" , height:"30px" ,display:"flex",justifyContent:"center"}} >
                                <input type="checkbox"/>
                                </div>
                                                                              
                                                                                                
                               <div   style={{ maxWidth: 'fit-content' }} >
                                                                               <CButton  className="buttoniconnormal"   onMouseEnter={()=>{
                                                                                setbotonactual(1)
                                                                               }}  onMouseLeave={()=>setbotonactual(0)}>      <Iconupdate  width={16} height={16} color={botonactual===1 ? "#fff":"#555"}/>  </CButton>
                                                                           </div>      

                              <div   style={{ maxWidth: 'fit-content' }} >
                                                                               <CButton  className="buttoniconnormaleliminar"  onMouseEnter={()=>{
                                                                                setbotonactual(2)
                                                                               }}  onMouseLeave={()=>setbotonactual(0)} onClick={async()=>{
                                                                                   
            const atulizar= await api.delete(`contactos/eliminar`,{
                                      headers: {
                        'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
                        
                      }
                              })
                   
                                                                                  
                      }}>      <Iconeliminar  width={16} height={16} color={botonactual===2 ? "#fff":"#555"}/>  </CButton>
                      </div>                                         
                             </div>
                             </CTableDataCell>
                            </CTableRow>
                        })
                    }
                   
                                  
              
              
               
               
               
                   
               
             
         
           
          
                    

            
           
             
                
         
            
            
           
          </CTableBody>
        </CTable>
        </div>
      
        
 
</div>
            <Sedeformtercero  actulizar={actulizar} setactulizar={actulizar}  terceroid={terceroid}  modal={modal} setmodal={setmodal}  traersedetercero={traersedetercero}/>
                </CModalBody>
                

              <CModalFooter style={{justifyContent: 'center',display:'flex'}} className="fottersucursal">
    
             
             
               <button type="submit" className="botoncontinuarguardar botonagregarcon"  key="guardar"  onClick={()=>{
               setmodal(true)
               }} >Agregar</button>   
                     </CModalFooter>
                 </CModal>);
}

export default Sedester;