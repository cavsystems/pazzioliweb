import { CButton, CFormFloating, CFormInput, CFormLabel, CInputGroup, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import "./usuario.scss"
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { Modalusuario } from "./components/Modalusuariosucu";
import Nuevorol from "./components/modalnuevorol";
import { usuariocontex } from "./contextusuario";
import api from "../../apicofig";
import { useState } from "react";
function Usuarios() {
 const { modalrol,setmodalrol,traerroles} = usuariocontex();
 const[rolesactual,setrolesactual]=useState<string>("");
    
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
                                           <CTable className="tablasucursal">
                                          
                                          <CTableHead>
                                            <CTableRow>
                                              <CTableHeaderCell scope="col">Nombre</CTableHeaderCell>
                                            <CTableHeaderCell scope="col" >Apellido</CTableHeaderCell>
                                              <CTableHeaderCell scope="col" >Direccion</CTableHeaderCell>
                                              <CTableHeaderCell scope="col" >Numero</CTableHeaderCell>
                                              <CTableHeaderCell scope="col " >Correo</CTableHeaderCell>
                                                <CTableHeaderCell scope="col">Usuario</CTableHeaderCell>
                                            <CTableHeaderCell scope="col" >Rol</CTableHeaderCell>
                                             <CTableHeaderCell scope="col" >Estado</CTableHeaderCell>
                                
                                               <CTableHeaderCell scope="col "  >Acciones</CTableHeaderCell>
                                            </CTableRow>
                                          </CTableHead>
                                          <CTableBody>
                                          
                                          
                                         
              
                              
                                  <CTableRow>
                                <CTableDataCell >Luis David</CTableDataCell>
                                   <CTableDataCell>Castillo</CTableDataCell>
                               <CTableDataCell>calle 14#13-30</CTableDataCell>
                                    <CTableDataCell>3122728269</CTableDataCell>
                                     <CTableDataCell>luisdacade@gmail.com</CTableDataCell>
                                      <CTableDataCell>caja 1</CTableDataCell>
                              <CTableDataCell>Usuariocaja</CTableDataCell>
                               <CTableDataCell>Activo</CTableDataCell>
                                    
                                      <CTableHeaderCell >
                                        <div className="row justify-content-center g-2" >
                                            <div className="col-6" style={{ maxWidth: 'fit-content' }}>
                                                <CButton  className="btnsucursal" style={{ maxWidth: 'fit-content',padding:'0' }}  >
                                                    <img src="/imgs/imgeditar.svg"/>
                                                </CButton>
                                            </div>
                                            <div className="col-6"  style={{ maxWidth: 'fit-content' }} >
                                                <CButton  className="btnsucursal"  style={{ maxWidth: 'fit-content', padding: 0, backgroundColor: '#21BCFF'}} >    <HiOutlineOfficeBuilding size={29} color="#fff" /></CButton>
                                            </div>
                                        </div>
                                      </CTableHeaderCell>
                                      </CTableRow>
                              
                                            
                
                                              
                                        
                                             
                                          </CTableBody>
                                       
                                        </CTable>
                                        </div>
                                    </div>
            </div>
   <div className="col-12  justify-content-center " style={{marginTop:'10px' ,display: modalrol ? "flex":"none"}}>
                    <div className="containersucursalboton">
                          <CButton className="botonagregarsucursal"  >Crear Usuario</CButton>
                    </div>


                    <Modalusuario/>

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