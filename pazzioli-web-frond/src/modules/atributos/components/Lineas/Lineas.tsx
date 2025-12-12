import { CButton, CFormFloating, CFormInput, CFormLabel, CInputGroup, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import Iconupdate from "../../../../icons/iconupdate";
import Usuariosicon from "../../../../icons/Isuarios";
import Iconeliminar from "../../../../icons/iconeliminar";
import Iconlupa from "../../../../icons/iconlupabuscar";
import { useState } from "react";
import Modalconfirmar from "../../../../components/alertconfimacion";
interface Lineas{
  codigolinea:number,
  nombre:string
}
function Lineas() {
    const [codigomodal,setcodigomodal]=useState<boolean>(false)
     const [modalconfirmar,setmodalconfimar]=useState<boolean>(false)
    const [linea,setlinea]=useState<string>("")
     const [error,seterror]=useState<boolean>(false)
      const [codigolinea,setcodigolinea]=useState<number>(0)
    const [actulizar,setactulizar]=useState<boolean>(false)
    const [lineas,setlineas]=useState<Lineas[]>([{codigolinea:1,nombre:"aseo"},{codigolinea:2,nombre:"ropa"}])
    const cambiarestadomodal=()=>{
    setmodalconfimar(false)
    }
    return ( <>
    <div className="row  paddingcointainertable">
         <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6  "  >

                     <div className="inputsearch">
                          <input type="text" className="inputlinea" />
                          <label className="labellinea">Linea</label>
                          <div className="diviconlupainventario">
                            <Iconlupa width={17} height={17} />
                          </div>
                     </div>
                        
                                 
      


            
    
            </div>

        <div className="col-12   d-flex flex-column justify-content-center  align-items-center padingtop">
                <div className="tabla-wrapperinventario ">
                                                               <CTable  
            
                    
                      
                      small
                      align="left" className="tablainventario ">
                                                              
                                                              <CTableHead>
                                                                <CTableRow>
                                                                
                                                                    <CTableHeaderCell scope="col">Codigo</CTableHeaderCell>
                                                                <CTableHeaderCell scope="col" >Nombre</CTableHeaderCell>
                                                               
                                                                   <CTableHeaderCell scope="col" >Acciones</CTableHeaderCell>
                                                                
                                                    
                                                                  
                                                                </CTableRow>
                                                              </CTableHead>
                                                              <CTableBody>
                                                              
                                                             
                                                                {
                                                              lineas.map((item)=>{
                                                                return   <CTableRow>
                                                            <CTableDataCell>
                                                        {item.codigolinea}  
                                                            </CTableDataCell>
                                                            <CTableDataCell>
                                                             {item.nombre}
                                                            </CTableDataCell>
                                                              <CTableDataCell>
                                                          <div className="d-flex flex-nowrap" style={{gap:"12px"  }} >
                                                    <div className="col-6" style={{ maxWidth: 'fit-content' }} >
                                                        <CButton  className="buttoniconnormal" onClick={()=>{
                                                          setactulizar(true)
                                                          setcodigomodal(true)
                                                          setlinea(item.nombre)
                                                          setcodigolinea(item.codigolinea)
                                                        }} >
                                                          <Iconupdate  width={16} height={18} color={"#555"}/> 
                                                        </CButton>
                                                    </div>
                                                    
        
                                                      <div className="col-6"  style={{ maxWidth: 'fit-content' }} >
                                                        <CButton  className="buttoniconnormal"  ><Iconeliminar  width={16} height={16} color={"#555"}/> </CButton>
                                                    </div>
        
                                                   
        
        
                                                 
                                                </div>
                                                            </CTableDataCell>

                                                          
                                                              </CTableRow>
                                                              })
                                                            }                                                             
                                  
                                                  
                                                     
                                                        
                                                         
                                                                
                                        
                                                          
                                                
                                                    
                                                  
                                                                
                                    
                                                                  
                                                            
                                                                 
                                                              </CTableBody>
                                                           
                                                            </CTable>
                                                     </div>
           <CButton className="botonagregarsucursal fitcontentinferior"  onClick={()=>{
            setcodigomodal(true)
           }}>Agregar</CButton>                                                         
        </div>
     <div className="col-12  justify-content-center " style={{marginTop:'10px' ,display: codigomodal ? "flex":"none"}}>
                                                            
                                                             <div   className="d-flex justify-content-center  align-items-center"style={{width:'100vw',height:'100vh',top:0,left:0,zIndex:9999,position:'fixed',background:"rgb(0, 0, 0,0.5)"}} id="modalrol">
                                                                     <div className="card" style={{ width:'400px'}}>
                                                                         <div className="card-body">
                                                                                       <CInputGroup >
                                                          <CFormFloating className="margeniputempresa">
                                         
                                                       <CFormInput placeholder=""  value={linea}  className="inputdatosempresa fontletre"  onChange={(e)=>{
                                                        setlinea(e.target.value)

                                                       }} />
                                                     
                                          
                                         <CFormLabel>Linea</CFormLabel>
                                            
                                                       </CFormFloating>
                                                     </CInputGroup>
                                                                             </div>
                                         
                                                                             <div className="card-footer d-flex justify-content-center"  >
                                                                                       <button type="button"  className="botonretroceder" onClick={()=>{
                                                                                       setcodigomodal(false)
                                                                                       setactulizar(false)
                                                                                       setlinea("")
                                                                                       }}>Cancelar</button>
                                         
                                                  
                                              {!actulizar && <button type="button" className="botoncontinuar"   onClick={()=>{
                                                let codigomaximo=lineas.length === 0  ? 1:Math.max(...lineas.map(v => v.codigolinea)) + 1
                                                setlineas(prev=> [...prev,{codigolinea:codigomaximo,nombre:linea}])
                                               setcodigomodal(false)
                                               setlinea("")
                                               }} >Guardar</button>}


                                                       {actulizar && <button type="button" className="botoncontinuar"   onClick={()=>{
                                                 const lineaupdate=lineas.find((item=>item.codigolinea===codigolinea))
                                              setlineas(prev =>
  prev.map(item =>
    item.codigolinea === codigolinea
      ? { ...item, nombre: linea }
      : item
  )
)
                                               setcodigomodal(false)
                                               setactulizar(false)
                                               setlinea("")
                                               }} >Actulizar</button>}
                                         
                                                                             </div>
                                                                     </div>
                                                                     </div>
                                                                     
                                                            </div>   

                                                            {
                                                              modalconfirmar  && error && <Modalconfirmar tipoicon={"Error"} texto={"Esta linea no puede ser eliminada"} boton3={true} textoboton={"Aceptar"}/> 
                                                            }       
    </div>
    </> );
}

export default Lineas;