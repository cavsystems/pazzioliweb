import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import Iconupdate from "../../../../icons/iconupdate";
import React, { useEffect, useState } from "react";
import Iconeliminar from "../../../../icons/iconeliminar";
import Modalformcontacto from "./modalformcontacto";
import api from "../../../../apicofig";
import Modalconfirmar from "../../../../components/alertconfimacion";
interface contactoter{
  contactoId
: 
number
esPrincipal
: 
boolean
tipoContacto
: 
{nombre:string, tipoContactoId: number}
valorContacto
: 
string
}
function Contactotercero({modalcontacto,setmodalcontacto,setterceroid,terceroid}:any) {
    const [botonactual,setbotonactual]=React.useState(0)
    const [visiblemodalfor,setvisiblemodalfor]=React.useState<boolean>(false)
     const [actulizar,setactulizar]=React.useState<boolean>(false)
       const [itemactual,setitemactual]=useState<number>(0)
       const [contactoter,setcontactoter]=React.useState<contactoter>()
    const [contactosterceros,setcontactosterceros]=React.useState<contactoter[]>([])
          useEffect(()=>{
           
             traerterceros()
          },[terceroid])

  const traerterceros=async()=>{
             const traer= await api.get(`contactos/listarconctatos?idtercero=${terceroid}`,{
                                      headers: {
                        'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
                        
                      }
                              })
                              console.log("contactos terceros",traer)
                              setcontactosterceros(traer.data)
             }
           useEffect(()=>{
             const tetablecercheck=async()=>{
             if(contactosterceros.length>0){
              contactosterceros.forEach(item=>{
                let itemchek=document.getElementById(`checkcont${item.contactoId}`) as  HTMLInputElement || null
                itemchek.checked=item.esPrincipal
              })
             }
             }
           tetablecercheck()
          },[contactosterceros])


          const actulizarestadocheck=async(check:boolean,contact:contactoter
          )=>{
           contact.esPrincipal=check
           
            const atulizar= await api.put(`contactos/actulizar?idtercero=${terceroid}`,contact,{
                                      headers: {
                        'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
                        
                      }
                              })


                              console.log(atulizar)

          }
    return ( 
      
              
                <CModal
                alignment="center"
                scrollable
                visible={modalcontacto}
                onClose={()=>{
                    setmodalcontacto(false)
                   setterceroid(0)
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
                    <CTableHeaderCell scope="col" >  <div className="d-flex justify-content-center" style={{gap:"12px"}} >Principal</div></CTableHeaderCell>
               
                   <CTableHeaderCell scope="col "  className="thacciones"><div className="d-flex justify-content-center" style={{gap:"12px"}} >Acciones </div></CTableHeaderCell>
  
            </CTableRow>
          </CTableHead>
          <CTableBody>
    
               {
                 contactosterceros.map( (item)=>{
                  return <CTableRow>
                       <CTableDataCell>{item.tipoContacto.nombre}  </CTableDataCell>
                        <CTableDataCell>{item.valorContacto}</CTableDataCell>
                        <CTableDataCell>    <div className="d-flex justify-content-center" style={{gap:"12px"}} > <input type="checkbox" id={`checkcont${item.contactoId}`}  onChange={(e)=>{
                                  console.log(e.target.checked)
                                  actulizarestadocheck(e.target.checked,item);

                                }} /> </div> </CTableDataCell>
                                   <CTableDataCell style={{ minWidth: '100px' }}> 
                                 <div className="d-flex justify-content-center" style={{gap:"12px"}} >
                               
                                                                              
                                                                                                
                               <div   style={{ maxWidth: 'fit-content' }} >
                                                                               <CButton  className="buttoniconnormal" onClick={()=>{
                                                                                setactulizar(true)
                                                                                setvisiblemodalfor(true)
                                                                                setcontactoter(item)
                                                                               }}  onMouseEnter={()=>{
                                                                                setbotonactual(1)
                                                                                setitemactual(item.contactoId)
                                                                               }}  onMouseLeave={()=>setbotonactual(0)}>      <Iconupdate  width={16} height={16} color={botonactual===1   && itemactual===item.contactoId ? "#fff":"#555"}/>  </CButton>
                                                                           </div>      

                              <div   style={{ maxWidth: 'fit-content' }} >
                                                                               <CButton  className="buttoniconnormaleliminar"  onMouseEnter={()=>{
                                                                                setbotonactual(2)
                                                                                  setitemactual(item.contactoId)
                                                                               }}  onMouseLeave={()=>setbotonactual(0)} onClick={async()=>{
                                                                                   
            const atulizar= await api.delete(`contactos/eliminar/${item.contactoId}`,{
                                      headers: {
                        'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
                        
                      }
                              })
                       traerterceros()
                                                                                  
                      }}>      <Iconeliminar  width={16} height={16} color={botonactual===2 && itemactual===item.contactoId ? "#fff":"#555"}/>  </CButton>
                      </div>                                         
                             </div>
                             </CTableDataCell>
                  </CTableRow>
                 })
               }
               
               
                   
               
             
         
           
          
                    

            
           
             
                
         
                <Modalformcontacto visiblemodalfor={visiblemodalfor} setvisiblemodalfor={setvisiblemodalfor}  terceroid={terceroid}  setcontactosterceros={setcontactosterceros} actulizar={actulizar} setactulizar={setactulizar}  contactoter={contactoter} />
            
           
          </CTableBody>
        </CTable>
        </div>
      
        
 
</div>
                            
                </CModalBody>
                

              <CModalFooter style={{justifyContent: 'center',display:'flex'}} className="fottersucursal">
    
             
             
               <button type="submit" className="botoncontinuarguardar botonagregarcon"  key="guardar"   onClick={()=>{
              setvisiblemodalfor(true)
               }} >Agregar</button>   
                     </CModalFooter>
                 </CModal>
     );
}

export default Contactotercero;