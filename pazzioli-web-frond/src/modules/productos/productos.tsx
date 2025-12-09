import { CButton, CFormFloating, CFormInput, CFormLabel, CInputGroup, CTab, CTabContent, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow, CTabList, CTabPanel, CTabs } from "@coreui/react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Datosgeneralesproduct from "./components/Datosgeneralesproduct";
import Variantes from "./components/variantes";
import Iconsproduct from "../../icons/iconsproducto";
import Iconupdate from "../../icons/iconupdate";
import Iconbodega from "../../icons/Iconbodega";
import Usuariosicon from "../../icons/Isuarios";
import u from "./components/formproducto";
import "./product.scss"
import Providercodigobarras, { codigosbarrascontex } from "./contextcodigobarras";
import Formproduct from "./components/formproducto";

function Productos() {
  
     const [itemsformempresa, setitemsformempresa] = useState(1)
     const [modalproducto,setmodalproducto]=useState(true)
     const {codigomodal,setcodigomodal, setcodigobarra}=codigosbarrascontex()
     const [modalformproducto,setmodalformproducto]=useState<boolean>(false)

      const methods = useForm({
          mode: 'onSubmit',
           shouldUnregister: false,
         defaultValues: {
          Actividadeconomica: "",
     correoempresa:"",
     celularempresa:"",
     codigopostal:"",
     digitodeverificacion:"",
     departamento:"",
     municipio:"",
     nombrecomercial:"",
     numeroidentificacion:"",
     pais:"",
     primerapellido:"",
     primernombre: "",
     razonsocial:"",
     regimen:"",
     segundoapellido:"",
     segundonombre:"",
     telefonofijo:"",
     tipodeidentificacion: "",
     tipodepersona:"",
    
     archivoLogo:null,
     impuestos:[],
     sucursales:[],
      
     
           // Agrega todos los campos que usas en todos los pasos
         },
       });

      const onSubmit=(data:any)=>{

      }
      const onError=(data:any)=>{

      }
    return ( <>
        
         <div className=" d-flex justify-content-center " style={{height:"100%"}}>
                       <div className="containerusuario row  align-items-center justify-content-center flex-column">
                                 <div className="col-12 d-flex align-items-center justify-content-center flex-column containerimgusuario">
                            <Iconsproduct width={60} height={60}/>
                               <span className="tituloopaco" >Productos</span>
                               </div>
               
                         
                             
                             <div className="col-12">
                                <div  className="tablesucursalescon" >
                                                       <div className="tabla-wrapper">
                                                          <CTable  
       
               
                 
                 small
                 align="left" className="tablaterceros">
                                                         
                                                         <CTableHead>
                                                           <CTableRow>
                                                           
                                                               <CTableHeaderCell scope="col">Código</CTableHeaderCell>
                                                           <CTableHeaderCell scope="col" >Descripción</CTableHeaderCell>
                                                             <CTableHeaderCell scope="col" >Cantidad</CTableHeaderCell>
                                                              <CTableHeaderCell scope="col" >Precio 1</CTableHeaderCell>
                                                              <CTableHeaderCell scope="col" >Precio 2</CTableHeaderCell>
                                                           <CTableHeaderCell scope="col" >Precio 3</CTableHeaderCell>
                                                               <CTableHeaderCell scope="col" >Acciones</CTableHeaderCell>
                                               
                                               
                                                             
                                                           </CTableRow>
                                                         </CTableHead>
                                                         <CTableBody>
                                                         
                                                         
                                                        
                             
                                             
                                                
                                                   
                                                    
                                                   <CTableRow>
                                                             <CTableDataCell>12393090</CTableDataCell>
                                             <CTableDataCell>Camiseta manga larga</CTableDataCell>
                                              <CTableDataCell>50</CTableDataCell>
                                                <CTableDataCell>50000</CTableDataCell>
                                                   <CTableDataCell>50000</CTableDataCell>
                                                      <CTableDataCell>50000</CTableDataCell>
                                                     
                                             
                                                   
                                                     <CTableDataCell >
                                                       <div className="d-flex flex-nowrap" style={{gap:"12px"  }} >
                                                           <div className="col-6" style={{ maxWidth: 'fit-content' }} >
                                                               <CButton  className="buttoniconnormal">
                                                                 <Iconupdate  width={16} height={18} color={"#555"}/> 
                                                               </CButton>
                                                           </div>
                                                           <div className="col-6"  style={{ maxWidth: 'fit-content' }} >
                                                               <CButton  className="buttoniconnormal"  >    <Iconbodega  width={19} height={19.5} color={"#555"}/></CButton>
                                                           </div>
               
                                                             <div className="col-6"  style={{ maxWidth: 'fit-content' }} >
                                                               <CButton  className="buttoniconnormal"  >    <Usuariosicon width={19} height={19.5} color={"#555" }/></CButton>
                                                           </div>
               
                                                          
               
               
                                                        
                                                       </div>
                                                     </CTableDataCell>
                                                     </CTableRow>
                                                          
                                                      
                                   
                                                     
                                           
                                               
                                             
                                                           
                               
                                                             
                                                       
                                                            
                                                         </CTableBody>
                                                      
                                                       </CTable>
                                                       </div>
               
               
                                                   </div>
                                                   
                           </div>
                
                    
                                         <div className="col-12  justify-content-center " style={{marginTop:'10px' ,display: codigomodal ? "flex":"none"}}>
                                                            
                                                             <div   className="d-flex justify-content-center  align-items-center"style={{width:'100vw',height:'100vh',top:0,left:0,zIndex:9999,position:'fixed',background:"rgb(0, 0, 0,0.5)"}} id="modalrol">
                                                                     <div className="card" style={{ width:'400px'}}>
                                                                         <div className="card-body">
                                                                                       <CInputGroup >
                                                          <CFormFloating className="margeniputempresa">
                                         
                                                       <CFormInput placeholder=""  className="inputdatosempresa fontletre"  onChange={(e)=>{
                                                        setcodigobarra(e.target.value)
                                                       }}  />
                                                     
                                          
                                         <CFormLabel>Codigo de barras</CFormLabel>
                                            
                                                       </CFormFloating>
                                                     </CInputGroup>
                                                                             </div>
                                         
                                                                             <div className="card-footer d-flex justify-content-center"  >
                                                                                       <button type="button"  className="botonretroceder" onClick={()=>{
                                                                                       setcodigomodal(false)
                                                                                       }}>Cancelar</button>
                                         
                                                  
                                               <button type="button" className="botoncontinuar"  >Guardar</button>
                                         
                                                                             </div>
                                                                     </div>
                                                                     </div>
                                                                     
                                                            </div>             
                              
                                         <CButton className="botonagregarsucursal fitcontentinferior" onClick={()=>{
                                          setmodalformproducto(true)
                                         }}
                                       >Agregar</CButton>
                                  
                           <Formproduct  modalformproducto={modalformproducto} setmodalformproducto={setmodalformproducto}/>  
               
                   </div>
                  
                   </div>  
                 
           
    </> );
}

export default Productos;