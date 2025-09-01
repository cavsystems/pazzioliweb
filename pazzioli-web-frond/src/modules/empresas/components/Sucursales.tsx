import { CButton, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Modalsocursal } from "./components/Modalsucursal";
export function Sucursales({setsucursales, sucursales,datosempresa, setdatosempresa}:any) {
    const [visible, setVisible] = useState(false)
    const [updateSucursal, setUpdateSucursal] = useState(false)
    const [sucursalesData,setsucursalesData]=useState([])
    const [bodega, setBodega] = useState({
        id:'',
        nombre: '',
        pais: {codigo:0,pais:''},
        departamento: {codigo:0,departemento:''},
        municipio:{codigo:0, municipio: ''},
        codigopostal: '',
        direccion: '',
        telefonofijo: '',
        celular: '',
        codigosucursal: '',
        correo: ''
    });

   const eliminarSucursal=(id:string)=>{
    setsucursales((prev:any)=> prev.filter((sucursal:any)=> sucursal.id !== id))
   }
   const actulizarSucursal=()=>{
    const sucursalToUpdate = sucursales.findIndex((sucursal:any) => sucursal.id === bodega.id);
    if (sucursalToUpdate !== -1) {
    sucursales[sucursalToUpdate]=bodega
        setVisible(false);
        setUpdateSucursal(false);
    }
    setBodega({
           id:'',
        nombre: '',
        pais: {codigo:0,pais:''},
        departamento: {codigo:0,departemento:''},
        municipio:{codigo:0, municipio: ''},
        codigopostal: '',
        direccion: '',
        telefonofijo: '',
        celular: '',
        codigosucursal: '',
        correo: ''
    })
   }

const actulizar=(id:string)=>{
  setBodega(sucursales.find((sucursal:any)=> sucursal.id === id))
   setVisible(true);
 setUpdateSucursal(true);

}
    const nuevaSucursal = () => {
        if(!bodega.id){
            bodega.id= uuidv4()
        }
        setsucursales((prev:any) => [...prev, bodega]);
        setVisible(false)
        setBodega({
           id:'',
        nombre: '',
        pais: {codigo:0,pais:''},
        departamento: {codigo:0,departemento:''},
        municipio:{codigo:0, municipio: ''},
        codigopostal: '',
        direccion: '',
        telefonofijo: '',
        celular: '',
        codigosucursal: '',
        correo: ''
    })
    }

   
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
                    <div  className="tablesucursalescon" >
                        <div className="tabla-wrapper">
                           <CTable className="tablasucursal">
                          
                          <CTableHead>
                            <CTableRow>
                              <CTableHeaderCell scope="col">Bodega</CTableHeaderCell>
                            <CTableHeaderCell scope="col" >País</CTableHeaderCell>
                              <CTableHeaderCell scope="col" >Departamento</CTableHeaderCell>
                              <CTableHeaderCell scope="col" >Municipio</CTableHeaderCell>
                              <CTableHeaderCell scope="col " >Cód.postal</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Dirección</CTableHeaderCell>
                            <CTableHeaderCell scope="col" >Teléfono</CTableHeaderCell>
                              <CTableHeaderCell scope="col" >Celular</CTableHeaderCell>
                              <CTableHeaderCell scope="col" >Cód.sucursal</CTableHeaderCell>
                              <CTableHeaderCell scope="col " >Correo</CTableHeaderCell>
                               <CTableHeaderCell scope="col "  >Acciones</CTableHeaderCell>
                            </CTableRow>
                          </CTableHead>
                          <CTableBody>
                          
                              {sucursales?.map((item:any,index:any)=>(
                                <>
                                  <CTableRow>
                                <CTableDataCell key={index}>{item.nombre}</CTableDataCell>
                                   <CTableDataCell>{item.pais.pais}</CTableDataCell>
                               <CTableDataCell>{item.departamento.departamento}</CTableDataCell>
                                    <CTableDataCell>{item.municipio.municipio}</CTableDataCell>
                                     <CTableDataCell>{item.codigopostal}</CTableDataCell>
                                      <CTableDataCell>{item.direccion}</CTableDataCell>
                              <CTableDataCell>{item.telefonofijo}</CTableDataCell>
                               <CTableDataCell>{item.celular}</CTableDataCell>
                                    <CTableDataCell>{item.codigosucursal}</CTableDataCell>
                                     <CTableDataCell>{item.correo}</CTableDataCell>
                                      <CTableHeaderCell >
                                        <div className="row justify-content-center g-2" >
                                            <div className="col-6" style={{ maxWidth: 'fit-content' }}>
                                                <CButton  className="btnsucursal" style={{ maxWidth: 'fit-content',padding:'0' }}  onClick={()=>actulizar(item.id)}>
                                                    <img src="/imgs/imgeditar.svg"/>
                                                </CButton>
                                            </div>
                                            <div className="col-6"  style={{ maxWidth: 'fit-content' }} >
                                                <CButton  className="btnsucursal" style={{ maxWidth: 'fit-content' ,padding:'0' }} onClick={()=>{
                                                    eliminarSucursal(item.id)
                                                }}>  <img src="/imgs/eliminar.svg"/></CButton>
                                            </div>
                                        </div>
                                      </CTableHeaderCell>
                                      </CTableRow>
                                </>))}
                         

                            

                              
                        
                             
                          </CTableBody>
                       
                        </CTable>
                        </div>
                    </div>
                  </div>
                   <div className="col-12 d-flex justify-content-center " style={{marginTop:'10px'}}>
                    <div className="containersucursalboton">
                          <CButton className="botonagregarsucursal"  onClick={
                            ()=> {setVisible(true)  
                              console.log("datossucursal",visible)
                            }
                          }>Agregar</CButton>
                    </div>
                   </div>

                   <Modalsocursal visible={visible} setVisible={setVisible} setBodega={setBodega} bodega={bodega}  datosempresa={datosempresa} setdatosempresa={setdatosempresa} nuevaSucursal={nuevaSucursal} updateSucursal={{updateSucursal,setUpdateSucursal}} actulizar={actulizarSucursal}/>

            </div>
        </div>
        </>
     );
}

