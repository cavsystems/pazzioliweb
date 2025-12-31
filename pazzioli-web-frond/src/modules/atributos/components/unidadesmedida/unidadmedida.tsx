import { CButton, CFormFloating, CFormInput, CFormLabel, CInputGroup, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import Iconupdate from "../../../../icons/iconupdate";
import Usuariosicon from "../../../../icons/Isuarios";
import Iconeliminar from "../../../../icons/iconeliminar";
import Iconlupa from "../../../../icons/iconlupabuscar";
import { useEffect, useState } from "react";
import Modalconfirmar from "../../../../components/alertconfimacion";
import api from "../../../../apicofig";
import { Await } from "react-router";
interface Lineas{
 descripcion
: 
string,
id
: 
number
}

interface unidadmedid{
descripcion
: 
string,
sigla
: 
string,
unidadMedidaId
: number

}
function Unidadmedida() {
    const [codigomodal,setcodigomodal]=useState<boolean>(false)
     const [modalconfirmar,setmodalconfimar]=useState<boolean>(false)
    const [linea,setlinea]=useState<string>("")
    const [unidadmedida,setunidadmedida]=useState<string>("")
        const [sigla,setSigla]=useState<string>("")
     const [error,seterror]=useState<boolean>(false)
     const [descripcionlinea,setdescripcionlinea]=useState<string>("")
         const [confirmareliminacion,setconfirmareliminacion]=useState<boolean>(false)
          const [funncionDinamica2,setfunncionDinamica2]= useState<() => void>(() => {});
      const [codigoeliminar,setcodigoeliminar]=useState<number>(0)
          const [modaladvertencia,setmodaladvertencia]=useState<boolean>(false)
       const [mensajeerror,setmensajeerror]=useState<string>("")
           const [mensajeadvertencia,setmensajeadvertencia]=useState<string>("")
      const [codigounidadmedida,    setcodigounidadmedida]=useState<number>(0)
    const [actulizar,setactulizar]=useState<boolean>(false)
     const [funcionDinamica, setFuncionDinamica] = useState<() => void>(() => {});
    const [unidadmedidas,setunidadmedidas]=useState<unidadmedid[]>([])
    const [lineas,setlineas]=useState<Lineas[]>([])
    const cambiarestadomodal=()=>{
    setmodalconfimar(false)
    }
     const traerlineasonchange=async (descrip="")=>{
         const und=await api.get(`unidadesMedida/listar?page=0&size=10&sortField=descripcion&sortDirection=asc&descripcion=${descripcionlinea}
`,{
            headers: {
                    'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
                  }
        })

        console.log("unidades de medida",und)
        // setlineas(lineas.data.content)
 
     }
     const eleiminarlineas=async(itemid:number)=>{
       try {
         const lineas=await api.delete(`unidadesMedida/${itemid}
`,{
            headers: {
                    'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
                  }
        })
        console.log("linea eliminada",lineas)
        traerlineas()
       } catch (error) {
         console.log("linea eliminada",error.response.data)
        setmensajeerror(error.response.data.mensaje)
        setFuncionDinamica(()=> ()=> setmensajeerror(""))
           
       }
            
     }
    const traerlineas=async ()=>{

     
          const und=await api.get(`unidadesMedida/listar?page=0&size=10&sortField=unidadMedidaId&sortDirection=asc&descripcion=${descripcionlinea}
`,{
            headers: {
                    'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
                  }
        })

         console.log("unidades de medida",und)
        setunidadmedidas(und.data.content)
 
     
        
    }
    useEffect(()=>{
          traerlineas()
    },[descripcionlinea])
    useEffect(()=>{
        if(confirmareliminacion){
          eleiminarlineas(codigoeliminar)
          setmodaladvertencia(false)
        setconfirmareliminacion(false)
        }
    },[confirmareliminacion])
    return ( <>
    <div className="row  paddingcointainertable">
         <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6  "  >

                     <div className="inputsearch">
                          <input type="text" className="inputlinea" value={descripcionlinea} onChange={(e)=>{
                            
                              setdescripcionlinea(e.target.value)
                          }}/>
                          <label className="labellinea" >Unidad de medida</label>
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
                                                                 <CTableHeaderCell scope="col" >Sigla</CTableHeaderCell>
                                                                   <CTableHeaderCell scope="col" >Acciones</CTableHeaderCell>

                                                                
                                                    
                                                                  
                                                                </CTableRow>
                                                              </CTableHead>
                                                              <CTableBody>
                                                              
                                                             
                                                                {
                                                              unidadmedidas.map((item)=>{
                                                                return   <CTableRow>
                                                            <CTableDataCell>
                                                        {item.unidadMedidaId}  
                                                            </CTableDataCell>
                                                            <CTableDataCell>
                                                             {item.descripcion}
                                                            </CTableDataCell>
                                                             <CTableDataCell>
                                                             {item.sigla}
                                                            </CTableDataCell>
                                                              <CTableDataCell>
                                                          <div className="d-flex flex-nowrap" style={{gap:"12px"  }} >
                                                    <div className="col-6" style={{ maxWidth: 'fit-content' }} >
                                                        <CButton  className="buttoniconnormal" onClick={()=>{
                                                          setactulizar(true)
                                                          setcodigomodal(true)
                                                          setunidadmedida(item.descripcion)
                                                          setSigla(item.sigla)
                                                          setcodigounidadmedida(item.unidadMedidaId)
                                                        }} >
                                                          <Iconupdate  width={16} height={18} color={"#555"}/> 
                                                        </CButton>
                                                    </div>
                                                    
        
                                                      <div className="col-6"  style={{ maxWidth: 'fit-content' }}  >
                                                        <CButton  className="buttoniconnormal" onClick={()=>{
                                                        setcodigoeliminar(item.unidadMedidaId)
                                                             setmodaladvertencia(true)
                                                              setmensajeadvertencia("Seguro desea eliminar esta linea")
                                                        setFuncionDinamica(()=> ()=> {
                                                     
                                                          setconfirmareliminacion(true)
                                                          
                                                        })

                                                             setfunncionDinamica2(()=> ()=> {
                                                     
                                                          setconfirmareliminacion(false)
                                                          setmodaladvertencia(false)
                                                         

                                                        })
                                                      }} ><Iconeliminar  width={16} height={16} color={"#555"}/> </CButton>
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
                                         
                                                       <CFormInput placeholder=""  value={unidadmedida}  className="inputdatosempresa fontletre"  onChange={(e)=>{
                                                        setunidadmedida(e.target.value)

                                                       }} />
                                                     
                                          
                                         <CFormLabel>Unidad de medida</CFormLabel>
                                            
                                                       </CFormFloating>
                                                     </CInputGroup>


                                                     <CInputGroup >
                                                          <CFormFloating className="margeniputempresa">
                                         
                                                       <CFormInput placeholder=""  value={sigla}  className="inputdatosempresa fontletre"  onChange={(e)=>{
                                                        setSigla(e.target.value)

                                                       }} />
                                                     
                                          
                                         <CFormLabel>Sigla</CFormLabel>
                                            
                                                       </CFormFloating>
                                                     </CInputGroup>
                                                                             </div>
                                         
                                                                             <div className="card-footer d-flex justify-content-center"  >
                                                                                       <button type="button"  className="botonretroceder" onClick={()=>{
                                                                                       setcodigomodal(false)
                                                                                       setactulizar(false)
                                                                                       setunidadmedida("")
                                                                                       setSigla("")
                                                                                       }}>Cancelar</button>
                                         
                                                  
                                              {!actulizar && <button type="button" className="botoncontinuar"   onClick={async()=>{
                                               /* let codigomaximo=lineas.length === 0  ? 1:Math.max(...lineas.map(v => v.codigolinea)) + 1
                                                setlineas(prev=> [...prev,{codigolinea:codigomaximo,nombre:linea}])*/
                                                const crearlinea=await api.post(`unidadesMedida/crear-por-dto`,[{descripcion:unidadmedida,sigla:sigla}],{
            headers: {
                    'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
                  }
        })
        await traerlineas()
                                               setcodigomodal(false)
                                               setunidadmedida("")
                                                    setSigla("")
                                               }} >Guardar</button>}


                                                       {actulizar && <button type="button" className="botoncontinuar"   onClick={async()=>{
                                                       const actulizarlinea=await api.put(`unidadesMedida/${codigounidadmedida}`,{descripcion:unidadmedida,sigla:sigla},{
            headers: {
                    'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
                  }
        })
        await traerlineas()
                                               setcodigomodal(false)
                                               setactulizar(false)
                                               setunidadmedida("")
                                                    setSigla("")
                                               }} >Actulizar</button>}
                                         
                                                                             </div>
                                                                     </div>
                                                                     </div>
                                                                     
                                                            </div>   

                                                            {
                                                            mensajeerror!=="" &&  <Modalconfirmar tipoicon={"Error"} texto={mensajeerror} boton3={true} textoboton={"Aceptar"} funcion={funcionDinamica}/> 
                                                            }       
    </div>
                                       {
                           modaladvertencia && <Modalconfirmar tipoicon={"alerta"} texto={mensajeadvertencia} boton3={true}  boton4={true} textoboton={"Aceptar"}  funcion={funcionDinamica} funcion2={funncionDinamica2}/>
                           } 
    </> );
}

export default Unidadmedida;