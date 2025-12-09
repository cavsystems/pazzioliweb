import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import Iconeliminar from "../../../../icons/iconeliminar";
import React, { useEffect, useRef, useState } from "react";
import Iconupdate from "../../../../icons/iconupdate";
import api from "../../../../apicofig";
import Sedeformtercero from "./sedesformtercero";
import Modalconfirmar from "../../../../components/alertconfimacion";
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

tipoPersona
: 
{codigo: number, nombre: string}
}
function Sedester({modalsede,setmodalsede,terceroid,setterceroid}:any) {
    const [botonactual,setbotonactual]=React.useState(0)
    const [modal,setmodal]=React.useState<boolean>(false)
    const [actulizar,setactulizar]=React.useState<boolean>(false)
     const [sedesterceros,setsedesterceros]=React.useState<sedeterceros[]>([])
      const [confirmar,setconfirmar]=React.useState<boolean>(false)
     const [modalconfir,setmodalconfirmar]=React.useState<boolean>(false)
     const [texto,settexto]=React.useState<string>("")
         const [itemactual,setitemactual]=useState<number>(0)
     const [codigocheck,setCodigocheck]=React.useState<number>(0)
       const [idsedeter,setidsedeter]=React.useState<sedeterceros>()
        const [idsedeterdelete,setidsedeterdelete]=React.useState<number>(0)
  const rowRefs =  useRef<{ [key: number]: HTMLInputElement | null }>({});
        

  useEffect(()=>{
    
  if(sedesterceros.length>0){
    console.log("es mayor a cero")
    sedesterceros.forEach(item=>{
        const ref = rowRefs.current[item.sedeId];
    if (ref) ref.checked = item.principal;
    })
  }


  },[sedesterceros])
    useEffect(()=>{
        console.log("entro al useEffect")
        if(idsedeterdelete===0){
           console.log("id tercero",terceroid)
            console.log("id tercerodelete",idsedeterdelete)
      traersedetercero(terceroid)
        }else{
            console.log("confirmar si",confirmar)
             if(confirmar){
                   eliminarsedeter(idsedeterdelete)
                    setconfirmar(false)
             }else{
               // setidsedeterdelete(0)
               
             }
        }
        
       
    },[terceroid,confirmar,idsedeterdelete])
   const eliminarsedeter= async(iddelete:number)=>{
        const atulizar= await api.delete(`sedeTercero/eliminar/${iddelete}`,{
                                      headers: {
                        'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
                        
                      }
                              })
   
    setidsedeterdelete(0)
    setconfirmar(false)

   }
    const traersedetercero=async(terceroi:number)=>{

          const sedeterceros=await api.get(`sedeTercero/listarPorTerceroId/${terceroi}?page=0&size=${10}&sortField=sedeId&sortDirection=desc`,{
                    headers: {
                      'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
                    }})

      
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
                          <CTableHeaderCell scope="col "  className="thacciones"><div className="d-flex justify-content-center" style={{gap:"12px"}} >Principal</div></CTableHeaderCell>
                   <CTableHeaderCell scope="col "  className="thacciones"><div className="d-flex justify-content-center" style={{gap:"12px"}} >Acciones </div></CTableHeaderCell>
  
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
                              <CTableDataCell>    <div className="d-flex justify-content-center" style={{gap:"12px"}} > <input type="checkbox"      ref={el =>{ (rowRefs.current[itemsede.sedeId] = el)

                              }} onChange={async(e)=>{

                               
                                         const crearsede=await api.put(`sedeTercero/actualizar/${terceroid}/${itemsede.sedeId}/${e.target.checked}`,null,{
                                                        headers: {
                                          'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
                                          
                                        }
                                                })
                                               if(codigocheck===itemsede.sedeId){
                                                 console.log("actulizar a tre",codigocheck,itemsede.nombreSede)
                                               }else{
                                                console.log("actulizar a false",codigocheck,itemsede.sedeId,itemsede.nombreSede )
                                               }
                                               setCodigocheck(itemsede.sedeId)
                                 setsedesterceros(prev =>
      prev.map(item =>
        item.sedeId === itemsede.sedeId
          ? { ...item, principal: e.target.checked }
          : { ...item, principal: false }  // si solo 1 puede ser principal
      )
    );

                            }
                            }/> </div> </CTableDataCell>
                            <CTableDataCell style={{ minWidth: '100px' }}> 
                                 <div className="d-flex justify-content-center" style={{gap:"12px"}} >
                                
                                                                              
                                                                                                
                               <div   style={{ maxWidth: 'fit-content' }} >
                                                                               <CButton  className="buttoniconnormal"   onMouseEnter={()=>{
                                                                                setbotonactual(1)
                                                                                setitemactual(itemsede.sedeId)
                                                                               }}  onMouseLeave={()=>setbotonactual(0)}   onClick={()=>{
                                                                                setactulizar(true)
                                                                                setmodal(true)
                                                                                setidsedeter(itemsede)
                                                                               }}>      <Iconupdate  width={16} height={16} color={botonactual===1 && itemactual===itemsede.sedeId ? "#fff":"#555"}/>  </CButton>
                                                                           </div>      

                              <div   style={{ maxWidth: 'fit-content' }} >
                                                                               <CButton  className="buttoniconnormaleliminar"  onMouseEnter={()=>{
                                                                                setbotonactual(2)
                                                                                  setitemactual(itemsede.sedeId)
                                                                               }}  onMouseLeave={()=>setbotonactual(0)} onClick={async()=>{
                                                                                   
                                    setmodalconfirmar(true)
                                    setidsedeterdelete(itemsede.sedeId)
                                    settexto(`¿Desea eliminar  la sede ${itemsede.nombreSede}? `)
                   
                                                                                  
                      }}>      <Iconeliminar  width={16} height={16} color={botonactual===2 && itemactual===itemsede.sedeId ? "#fff":"#555"}/>  </CButton>
                      </div>                                         
                             </div>
                             </CTableDataCell>
                            </CTableRow>
                        })
                    }
                   
                                  
              
              
               
               
               
                   
               
             
         
           
          
                         { modalconfir && <Modalconfirmar   modalconfir={modalconfir} setmodalconfirmar={setmodalconfirmar}   confirmar={confirmar} setconfirmar={setconfirmar} tipoicon={"alerta"} boton1={true} boton2={true} texto={texto}/>}

            
           
             
                
         
            
            
           
          </CTableBody>
        </CTable>
        </div>
      
        
 
</div>
            <Sedeformtercero   actulizar={actulizar} setactulizar={setactulizar}  terceroid={terceroid}  modal={modal} setmodal={setmodal}  traersedetercero={traersedetercero}  idsedeter={idsedeter} setidsedeter={setidsedeter}/>
                </CModalBody>
                

              <CModalFooter style={{justifyContent: 'center',display:'flex'}} className="fottersucursal">
    
             
             
               <button type="submit" className="botoncontinuarguardar botonagregarcon"  key="guardar"  onClick={()=>{
               setmodal(true)
               }} >Agregar</button>   
                     </CModalFooter>
                 </CModal>);
}

export default Sedester;