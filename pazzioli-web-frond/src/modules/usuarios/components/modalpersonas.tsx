import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import api from "../../../apicofig";
import Personasform from "./formpersonas";
import { usuariocontex } from "../contextusuario";
    interface personas{
 apellido:string
codigo:number
codigocliente:number
correo:string
direccion:string
nombre: string
tipoimagen:String;
imagenperfil:ArrayBuffer


    }
function Modalpersonas({visibleper,setVisibleper,codigousuario,setCodigousuario}:{visibleper:boolean,setVisibleper:Dispatch<SetStateAction<boolean>>,setCodigousuario:Dispatch<SetStateAction<number>>,codigousuario:number}) {
  
     const [seleccionados, setSeleccionados] = useState<number[]>([]);
    const [visibleform,setVisibleform]=useState<boolean>(false)
    const [personaarray,setPersonaarray]=useState<personas[]>([])
    const {usuarioperselect ,setUsuarioselect}=usuariocontex();

    const [Actualizar,setActualizar]=useState<boolean>(false)
      useEffect(()=>{
               console.log("personas usuario",personaarray.length)
     if(personaarray.length>0){
        const traerpersonasu=async()=>{
              const  datarol=await api.get(`usuario/traerusuarioper/persona?codigopersona=${codigousuario}`,{
            headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
            }})
             console.log("personas usuario",datarol)
             const lista = datarol.data.usuariosclientes;
        
            if(Array.isArray(lista) && lista.length > 0){
           lista.forEach((element:any )=> {
           const checkboxesac = document.getElementById(`idcliente${element.codigo}`) as HTMLInputElement;
           checkboxesac.checked=true

          })
         }
        
        
       
     }
      traerpersonasu()
    }
    },[personaarray,visibleper])

       useEffect(()=>{
     traerpersonas(codigousuario)
    },[codigousuario])

    useEffect(()=>{
    console.log("entro a usefect formpersona",visibleform)
            if(!visibleform){
 traerpersonas(codigousuario)
        }
    
    },[visibleform])
    const traerpersonas=async(codigo:number)=>{

    const  datarol=await api.get(`usuario/traerusuario/persona`,{
            headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
            }})

            console.log("personas creando",datarol)
            setPersonaarray(datarol.data.usuariosclientes)
    }
    return ( 
      
              
                <CModal
                alignment="center"
                scrollable
                visible={visibleper}
             
                aria-labelledby="VerticallyCenteredScrollableExample2"
               className="col-12 modalusuper"
                backdrop="static"
                onClose={()=>{
                    setVisibleper(false)
                    
                }}
                  
              >
                <CModalHeader>
                    
                  <CModalTitle id="VerticallyCenteredScrollableExample2">Clientes</CModalTitle>
                </CModalHeader>


                <CModalBody>
                 <div className="col-12"  >
                    <div style={{maxHeight:"300px",overflowY:"auto",overflowX:"hidden"}} className="continnerper">
     <CTable   
     striped
  hover 
  small
  align="left" className="tabla tableusuarioper">
          <CTableHead>
            <CTableRow>
            
              <CTableHeaderCell scope="col" >Nombre</CTableHeaderCell>
                <CTableHeaderCell scope="col" >Apellido</CTableHeaderCell>
                 <CTableHeaderCell scope="col" >Dirección</CTableHeaderCell>
                   <CTableHeaderCell scope="col" >Correo</CTableHeaderCell>
                   <CTableHeaderCell scope="col "  className="thacciones">Acciones</CTableHeaderCell>
  
            </CTableRow>
          </CTableHead>
          <CTableBody>
         {
            personaarray.map((item)=>{
                return <CTableRow>
   <CTableDataCell>{item.nombre} </CTableDataCell>
                <CTableDataCell>{item.apellido}  </CTableDataCell>
                <CTableDataCell>{item.direccion}  </CTableDataCell>
                     <CTableDataCell>{item.correo}</CTableDataCell>
                         <CTableDataCell style={{ minWidth: '100px' }}>
                                                             <div className="row justify-content-center" style={{gap:"5px"}} >
                                                                  <input type="checkbox" className="checkbox h6  " id={`idcliente${item.codigo}`}  onChange={async(e)=>{
                                                                 await api.put(`usuario/asignarpersona/${codigousuario}/${item.codigo}`, null, {
  headers: {
    'X-TenantID': "cavsystems",
  }
});

// ✅ Actualizar estado según el check
if (e.target.checked) {
  setSeleccionados(prev => [...prev, item.codigo]);
} else {
  setSeleccionados(prev => prev.filter(id => id !== item.codigo));
}
                                                                  }}/>
                                                             
                     
                                                                  
                                                             </div>
                                                           </CTableDataCell>
             
               </CTableRow>
            })
         }
         
          
                    

            
           
             
                
         
             
            
           
          </CTableBody>
        </CTable>
        </div>
      
        
 
</div>
                            
                </CModalBody>
                

                <Personasform  codigousuario={codigousuario} setCodigousuario={setCodigousuario} visibleform={visibleform} setVisibleform={setVisibleform}  setActualizar={setActualizar}  Actualizar={Actualizar}/>
                 </CModal>
     );
}

export default Modalpersonas;
