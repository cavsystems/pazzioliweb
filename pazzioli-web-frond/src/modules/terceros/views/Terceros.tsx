import { CButton, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import "./Terceros.scss";
import Actulizartercero from "../components/Actulizartercero";
import React, { useState } from "react";
import api from "../../../apicofig";
import Contactotercero from "../components/contactos/Contactoster";
import Iconupdate from "../../../icons/iconupdate";
import Iconbodega from "../../../icons/Iconbodega";
import Usuariosicon from "../../../icons/Isuarios";
import Sedester from "../components/sedes/sedes";
interface terceros {
 actividadEconomicaId
:number,
fechaNacimiento: string | null,
matriculaMercantil:string | null,


  apellido1
: 
string,
apellido2
: 
string,
clasificacionTercero
: 
{nombre: string, clasificacionTerceroId: number}
contactos
: 
string
correo
: 
string
cupo
: 
number
direccion
: 
string
dv
: 
string
identificacion
: 
string
nombre1
: 
string
nombre2
: 
string
plazo
: 
number
precio
: 
{precio_id: number, descripcion: string}
razonSocial
: 
string
regimen
: 
{codigo: number, codigoRegimen:string, descripcion: string, estado: string}
terceroId
: number
tipoIdentificacion
: 
{codigo: number, codigoTipoIdentificacion: number, tipoIdentificacion: string}


  
}


interface terceroupdate{

actividadEconomicaId
:number,
fechaNacimiento: string | null,
matriculaMercantil:string | null,


  apellido1
: 
string,
apellido2
: 
string,
clasificacionTercero
: 
{nombre: string, clasificacionTerceroId: number}
contactos
: 
string
correo
: 
string
cupo
: 
number
direccion
: 
string
dv
: 
string
identificacion
: 
string
nombre1
: 
string
nombre2
: 
string
plazo
: 
number
precio
: 
{precio_id: number, descripcion: string}
razonSocial
: 
string
regimen
: 
{codigo: number, codigoRegimen:string, descripcion: string, estado: string}
terceroId
: number
tipoIdentificacion
: 
{codigo: number, codigoTipoIdentificacion: number, tipoIdentificacion: string}


  
}
function Terceros() {
   const [modalsede,setmodalsede]=useState<boolean>(false)
   const [botonactual,setbotonactual]=React.useState(0)
   
   const [terceroid,setterceroid]=React.useState(0)
    const [terceros,setTerceros]=useState<terceros[]>([])
    const [visiblemodalcrear,setvisiblemodalcrear]=useState<boolean>(false)
    const [modalcontacto,setmodalcontacto]=useState<boolean>(false)
    const [itemactual,setitemactual]=useState<number>(0)
    const [actulizar,setActualizar]=useState<boolean>(false)
    const [terceroupdate,setTerceroupdate]=useState<terceroupdate>()
    const traerterceros=async (pagina:number)=>{
       
    const terceros=await api.get(`terceros/listar?page=${pagina}&size=${7}&sortField=razonSocial&sortDirection=desc`,{
            headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
            }})
    console.log("terceros",terceros.data.content)
    setTerceros(terceros.data.content)
    setvisiblemodalcrear(false)
}

React.useEffect(()=>{
    traerterceros(0);
},[])

    return ( 
        <>
          <div className=" d-flex justify-content-center " style={{height:"100%"}}>
                <div className="containerusuario row  align-items-center justify-content-center flex-column">
                          <div className="col-12 d-flex align-items-center justify-content-center flex-column containerimgusuario">
                        <img src="imgs/creusuario.svg" alt=""   style={{maxWidth: "48px", maxHeight: "48px"}}/>
                        <span className="tituloopaco" >Terceros</span>
                        </div>
        
                  
                      
                      <div className="col-12">
                         <div  className="tablesucursalescon" >
                                                <div className="tabla-wrapper">
                                                   <CTable  

        
          
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
                                      
                                            
                                              <CTableDataCell >
                                                <div className="d-flex flex-nowrap" style={{gap:"12px"  }} >
                                                    <div className="col-6" style={{ maxWidth: 'fit-content' }} >
                                                        <CButton  className="buttoniconnormal"  onClick={async(e)=>{
                                                         e.stopPropagation()
                                                          const terceroactulizar= await api.get(`terceros/${item.terceroId}`)
                                                          console.log("tercero Actulizar",terceroactulizar)
                                                          setTerceroupdate(terceroactulizar.data)
                                                        setActualizar(true)
                                                          setvisiblemodalcrear(true)
                                                      


                                                        
                                                        }}  onMouseEnter={(e)=>{
                                                         e.stopPropagation()
                                                          setbotonactual(1)
                                                          setitemactual(item.terceroId)
                                                        }}  onMouseLeave={(e)=>{
                                                          e.stopPropagation()
                                                          setbotonactual(0)
                                                        }}>
                                                          <Iconupdate  width={16} height={18} color={botonactual===1 && itemactual===item.terceroId ? "#fff":"#555"}/> 
                                                        </CButton>
                                                    </div>
                                                    <div className="col-6"  style={{ maxWidth: 'fit-content' }} >
                                                        <CButton  className="buttoniconnormal"  onMouseEnter={(e)=>{
                                                          e.stopPropagation()
                                                          setbotonactual(2)
                                                          setitemactual(item.terceroId)
                                                             
                                                        }}  onMouseLeave={(e)=>{
                                                          e.stopPropagation()
                                                          setbotonactual(0)
                                                        }}  onClick={(e)=>{
                                                          e.stopPropagation()
                                                          setterceroid(item.terceroId)
                                                          setmodalsede(true)
                                                        }}>    <Iconbodega  width={19} height={19.5} color={botonactual===2 && itemactual===item.terceroId ? "#fff":"#555"}/></CButton>
                                                    </div>
        
                                                      <div className="col-6"  style={{ maxWidth: 'fit-content' }} >
                                                        <CButton  className="buttoniconnormal"  onClick={()=>{
                                                          setmodalcontacto(!modalcontacto)
                                                          setterceroid(item.terceroId)
                                                        }}  onMouseEnter={()=>{
                                                          setbotonactual(3)
                                                          setitemactual(item.terceroId)
                                                        }}  onMouseLeave={()=>{
                                                          setbotonactual(0)
                                                        }}>    <Usuariosicon width={19} height={19.5} color={botonactual===3 && itemactual===item.terceroId ? "#fff":"#555" }/></CButton>
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
                                            
                    </div>
         
             
                                               
                       
                                  <CButton className="botonagregarsucursal fitcontentinferior" onClick={()=>{
                                    setvisiblemodalcrear(true)
                                  }}>Agregar</CButton>
                           
                      
        
            </div>
            <Actulizartercero visiblemodal={visiblemodalcrear}  setvisiblemodal={setvisiblemodalcrear}   actulizar={actulizar}
  setActualizar={setActualizar} terceroupdate={terceroupdate} setTerceroupdate={setTerceroupdate}  traerterceros={traerterceros}/>

  < Contactotercero  modalcontacto={modalcontacto} setmodalcontacto={setmodalcontacto}  terceroid={terceroid} setterceroid={setterceroid}   traerterceros={traerterceros}  />
  <Sedester  modalsede={modalsede} setmodalsede={setmodalsede} terceroid={terceroid} setterceroid={setterceroid} />
            </div>
        </>
     );
}

export default Terceros;