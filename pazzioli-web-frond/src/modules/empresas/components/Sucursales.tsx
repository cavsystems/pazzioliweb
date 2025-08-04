import { CButton, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import { Modalsocursal } from "./components/Modalsucursal";
import { useState } from "react";

export function Sucursales() {
    const [visible, setVisible] = useState(false)
    return ( 
        <>
        <div className="col-12">
            <div className="row ">
                 <div className="col-12" style={{padding:'31px'}}>
                    <div className="d-flex justify-content-center">
                        <h6 className="fontgrisopaco" style={{padding:'40px 60px 25px  0px '}}>
                            Agrega al menos una  bodega o sucursal
                        </h6>
                    </div>
                 </div>
                  <div className="col-12">
                    <div style={{paddingRight:'37px',paddingLeft:'45.5px',position:'relative'}} >
                        <div className="tabla-wrapper">
                           <CTable className="tablasucursal">
                          
                          <CTableHead>
                            <CTableRow>
                              <CTableHeaderCell scope="col">Bodega</CTableHeaderCell>
                            <CTableHeaderCell scope="col" >Pais</CTableHeaderCell>
                              <CTableHeaderCell scope="col" >Departamento</CTableHeaderCell>
                              <CTableHeaderCell scope="col" >Municipio</CTableHeaderCell>
                              <CTableHeaderCell scope="col " >Cód.postal</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Direccion</CTableHeaderCell>
                            <CTableHeaderCell scope="col" >Teléfono</CTableHeaderCell>
                              <CTableHeaderCell scope="col" >Celular</CTableHeaderCell>
                              <CTableHeaderCell scope="col" >Cód.sucursal</CTableHeaderCell>
                              <CTableHeaderCell scope="col " >Correo</CTableHeaderCell>
                               <CTableHeaderCell scope="col "  >Acciones</CTableHeaderCell>
                            </CTableRow>
                          </CTableHead>
                          <CTableBody>
                            <CTableRow>
                           
                            
                              <CTableDataCell>Empresa sur</CTableDataCell>
                              <CTableDataCell>Colombia</CTableDataCell>
                               <CTableDataCell>Valle del cauca</CTableDataCell>
                                    <CTableDataCell>Cali</CTableDataCell>
                                     <CTableDataCell>7600003</CTableDataCell>
                                      <CTableDataCell>Cra 112#44-21 apto 630</CTableDataCell>
                              <CTableDataCell>3934672</CTableDataCell>
                               <CTableDataCell>3162226224</CTableDataCell>
                                    <CTableDataCell>123</CTableDataCell>
                                     <CTableDataCell>correoempresa@empresa.com.co</CTableDataCell>
                                      <CTableHeaderCell >
                                        <div className="row justify-content-center g-2" >
                                            <div className="col-6" style={{ maxWidth: 'fit-content' }}>
                                                <CButton  className="btnsucursal" style={{ maxWidth: 'fit-content',padding:'0' }}>
                                                    <img src="/imgs/imgeditar.svg"/>
                                                </CButton>
                                            </div>
                                            <div className="col-6"  style={{ maxWidth: 'fit-content' }} >
                                                <CButton  className="btnsucursal" style={{ maxWidth: 'fit-content' ,padding:'0' }}>  <img src="/imgs/eliminar.svg"/></CButton>
                                            </div>
                                        </div>
                                      </CTableHeaderCell>
                            </CTableRow>


                              <CTableRow>
                           
                            
                              <CTableDataCell>Empresa sur</CTableDataCell>
                              <CTableDataCell>Colombia</CTableDataCell>
                               <CTableDataCell>Valle del cauca</CTableDataCell>
                                    <CTableDataCell>Cali</CTableDataCell>
                                     <CTableDataCell>7600003</CTableDataCell>
                                      <CTableDataCell>Cra 112#44-21 apto 630</CTableDataCell>
                              <CTableDataCell>3934672</CTableDataCell>
                               <CTableDataCell>3162226224</CTableDataCell>
                                    <CTableDataCell>123</CTableDataCell>
                                     <CTableDataCell>correoempresa@empresa.com.co</CTableDataCell>
                                      <CTableHeaderCell >
                                        <div className="row justify-content-center g-2" >
                                            <div className="col-6" style={{ maxWidth: 'fit-content' }}>
                                                <CButton  className="btnsucursal" style={{ maxWidth: 'fit-content',padding:'0' }}>
                                                    <img src="/imgs/imgeditar.svg"/>
                                                </CButton>
                                            </div>
                                            <div className="col-6"  style={{ maxWidth: 'fit-content' }} >
                                                <CButton  className="btnsucursal" style={{ maxWidth: 'fit-content' ,padding:'0' }}>  <img src="/imgs/eliminar.svg"/></CButton>
                                            </div>
                                        </div>
                                      </CTableHeaderCell>
                            </CTableRow>

                              
                        
                             
                          </CTableBody>
                       
                        </CTable>
                        </div>
                    </div>
                  </div>
                   <div className="col-12 d-flex justify-content-center " style={{marginTop:'10px'}}>
                    <div className="containersucursalboton">
                          <CButton className="botonagregarsucursal"  onClick={
                            ()=> setVisible(true)
                          }>Agregar</CButton>
                    </div>
                   </div>

                   <Modalsocursal visible={visible} setVisible={setVisible}/>

            </div>
        </div>
        </>
     );
}

