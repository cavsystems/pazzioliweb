import { CButton, CFormFloating, CFormInput, CFormLabel, CInputGroup, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import "./usuario.scss"
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { Modalusuario } from "./components/Modalusuariosucu";
import Nuevorol from "./components/modalnuevorol";
import { usuariocontex } from "./contextusuario";
import api from "../../apicofig";
import { useEffect, useState } from "react";
import CIcon from "@coreui/icons-react";
import { IoEyeSharp } from "react-icons/io5";
import { ClassNames } from "@emotion/react";
import { BsEyeSlashFill } from "react-icons/bs";
import Modalpersonas from "./components/modalpersonas";
import Bodegausuario from "./components/Modalbodegausuario";
import { MdPassword } from 'react-icons/md';
interface rolesu{
  codigo:number,
  usuario:string,
  rol:string,
  estado:string,
 contrasena:string
}

interface bodegasusuario{
  departamento
: 
string
direccion
: 
string
municipio
: 
string
nombre
: 
string
}
function Usuarios() {
  const [contraseactual,setContraseactual]=useState<number>(-1)
 const { modalrol,setmodalrol,traerroles} = usuariocontex();
 const [rolesusu,setRolesusu]=useState<rolesu[]>([])
 const[rolesactual,setrolesactual]=useState<string>("");
 const [visible,setVisible]=useState<boolean>(false);
 const [visibleper,setVisibleper]=useState<boolean>(false);
 const [codigousuario,setCodigousuario]=useState<number>(0);

 const [modalbodegas,setModalbodegas]=useState<boolean>(false);
 const [bodegasusuario,setbodegausuario]=useState<bodegasusuario[]>([]);
const [codigousuarioseleccionado,setCodigousuarioseleccionado]=useState<number>(0);
const [botonupdateu,setbotonupdateu]=useState<boolean>(false);
 useEffect(()=>{
  console.log("entroroles")
  const traerrolesusu=async()=>{
    const usroles=await api.get("usuario/traer/rolesusuario",{
                                            headers: {
                                              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
                                            }})

    
    console.log("usuarioroles",usroles)
    setRolesusu(usroles.data.rolesusuario)
  }

  traerrolesusu()




 },[visible])

 const traerbodegausuario=async (codigousuario:number)=>{
const usubo=await api.get(`usuario/traerusuariobodega?usuarioid=${codigousuario}`,{
                                            headers: {
                                              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
                                            }})

  setbodegausuario(usubo.data.data)

console.log(usubo)
 }
    const cifrarcontraseñas=(con:string)=>{
      let nuevostring=''
      for (let index = 0; index < con.length; index++) {
        nuevostring += "*";
        
      }

      return nuevostring

    }
    return ( <>
    <div className="d-flex justify-content-center " style={{height:"100%"}}>
        <div className="containerusuario">
     
            <div className="col-12 d-flex align-items-center justify-content-center flex-column containerimgusuario">
                <img src="imgs/creusuario.svg" alt=""   style={{maxWidth: "48px", maxHeight: "48px"}}/>
                <span className="tituloopaco">Usuarios</span>

            </div>
              
              <div className="col-12">
                 <div  className="tablesucursalescon" >
                                        <div className="tabla-wrapper">
                                           <CTable  hover 
  small
  align="left" className="tablausuario">
                                          
                                          <CTableHead>
                                            <CTableRow>
                                            
                                                <CTableHeaderCell scope="col">Usuario</CTableHeaderCell>
                                            <CTableHeaderCell scope="col" >Rol</CTableHeaderCell>
                                              <CTableHeaderCell scope="col" >Contraseña</CTableHeaderCell>
                                             <CTableHeaderCell scope="col" >Estado</CTableHeaderCell>
                                            
                                
                                               <CTableHeaderCell scope="col "  className="thacciones" >Acciones</CTableHeaderCell>
                                            </CTableRow>
                                          </CTableHead>
                                          <CTableBody>
                                          
                                          
                                         
              
                              
                                 
                                    {
                                      rolesusu.map((item,index)=>{
                                        return <>
                                         <CTableRow>
                                              <CTableDataCell>{item.usuario}</CTableDataCell>
                              <CTableDataCell>{item.rol}</CTableDataCell>
                               <CTableDataCell><div style={{display: 'flex',

    justifyContent: 'space-between',
    height: '100%',
    alignItems: 'center'}}>{contraseactual===index && <span>{item.contrasena} </span>} { contraseactual!==index && <span>{cifrarcontraseñas(item.contrasena)}</span>}  { contraseactual===index &&<img src="imgs/ojoabierto.svg" onClick={()=>{
      setContraseactual(-1)
    }}/>} { contraseactual!==index &&<img src="imgs/ojocerrado.svg" onClick={()=>{
      setContraseactual(index)
    }}/>}</div>  </CTableDataCell>
                               <CTableDataCell>{item.estado}</CTableDataCell>
                                    
                                      <CTableHeaderCell  >
                                        <div className="row justify-content-start " style={{gap:"12px" ,width: 'fit-content'}} >
                                            <div className="col-6" style={{ maxWidth: 'fit-content' }}>
                                                <CButton  className="btnsucursal" style={{ maxWidth: 'fit-content',padding:'0' }}   onClick={()=>{
                                                  setCodigousuarioseleccionado(item.codigo)
                                                  setVisible(true)
                                                  setbotonupdateu(true)
                                                }} >
                                                    <img src="/imgs/imgeditar.svg"/>
                                                </CButton>
                                            </div>
                                            <div className="col-6"  style={{ maxWidth: 'fit-content' }} >
                                                <CButton  className="btnsucursal"  style={{ maxWidth: 'fit-content', padding: 0, backgroundColor: '#21BCFF'}}  onClick={()=>{
                                                   traerbodegausuario(item.codigo)
                                                   setModalbodegas(true)
                                                }}>    <HiOutlineOfficeBuilding size={29} color="#fff" /></CButton>
                                            </div>

                                              <div className="col-6"  style={{ maxWidth: 'fit-content' }} >
                                                <CButton  className="btnsucursal"  style={{ maxWidth: 'fit-content', padding: 0, backgroundColor: '#21BCFF'}}  onClick={()=>{
                                                  setCodigousuario(item.codigo)
                                                  setVisibleper(true)
                                                }}>    <img src="/imgs/usuariotable.svg" style={{    width: '29px',
    height: '29px',
    padding: '2px'}}/></CButton>
                                            </div>

                                           


                                          <div className="col-6"  style={{ maxWidth: 'fit-content' }} >
                                                <CButton  className="btnsucursal"  style={{ maxWidth: 'fit-content', padding: '3px 6px 3px 6px', backgroundColor: '#D1D5DC'}}  onClick={()=>{
                                                   traerbodegausuario(item.codigo)
                                                   setModalbodegas(true)
                                                }}>    <MdPassword size={20} color="#000" /></CButton>
                                            </div>
                                        </div>
                                      </CTableHeaderCell>
                                      </CTableRow>
                                                                                </>}
                                      )
                                    }
                            
                                
                              
                                            
                
                                              
                                        
                                             
                                          </CTableBody>
                                       
                                        </CTable>
                                        </div>


                                           <div className="col-12 d-flex justify-content-center containerdivagregaru"   style={{marginTop:'10px' ,paddingBottom:"100px"}}>
                    <div className="containersucursalboton">
                          <CButton className="botonagregarsucursal"  onClick={
                            ()=> {
                              setVisible(!visible)
                            }
                          }>Agregar</CButton>
                    </div>
                   </div>
                                    </div>
            </div>
   <div className="col-12  justify-content-center " style={{marginTop:'10px' ,display: modalrol ? "flex":"none"}}>
                    <div className="containersucursalboton">
                          <CButton className="botonagregarsucursal"  >Crear Usuario</CButton>
                    </div>

                     <Bodegausuario modalbodegas={modalbodegas} setModalbodegas={setModalbodegas}  bodegasusuario={bodegasusuario} setbodegausuario={setbodegausuario}/>
                    <Modalusuario visible={visible} setVisible={setVisible}  codigousuarioseleccionado={codigousuarioseleccionado} setCodigousuarioseleccionado={setCodigousuarioseleccionado} botonupdateu={botonupdateu} setbotonupdateu={setbotonupdateu}  />
                    <Modalpersonas visibleper={visibleper} setVisibleper={setVisibleper} codigousuario={codigousuario} setCodigousuario={setCodigousuario} />

                    <div   className="d-flex justify-content-center  align-items-center"style={{width:'100vw',height:'100vh',top:0,left:0,zIndex:9999,position:'fixed',background:"rgb(0, 0, 0,0.5)"}} id="modalrol">
                            <div className="card" style={{ width:'400px'}}>
                                <div className="card-body">
                                              <CInputGroup >
                 <CFormFloating className="margeniputempresa">

              <CFormInput placeholder=""  className="inputdatosempresa fontletre"   value={rolesactual}  onChange={(e)=>{
                setrolesactual(e.target.value)
              }} />
            
 
<CFormLabel>Rol</CFormLabel>
   
              </CFormFloating>
            </CInputGroup>
                                    </div>

                                    <div className="card-footer d-flex justify-content-center"  >
                                              <button type="button"  className="botonretroceder" onClick={()=>{
                                               setmodalrol(false)
                                              }}>Cancelar</button>

         
      <button type="button" className="botoncontinuar"  onClick={ async()=>{
        const usu=await api.post('usuario/crear',{"nombre":rolesactual},   {  headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
            }})
        console.log(usu,"usuariorole")
        traerroles()
        setmodalrol(false)
        
      }} >Guardar</button>

                                    </div>
                            </div>
                            </div>
                            
                   </div>

     

    </div>
    </div>
    </> );
}

export default Usuarios;