import { CFormFloating, CFormLabel, CFormSelect } from "@coreui/react";
import { chartcontex } from "../../contextchart";
import Chartcartera from "./charts/charcartera";
import Chartinventariolinea from "./charts/chartinventariolinea";
import Chatsloopgiadmin from "./charts/chartsloopgi";
import { useState } from "react";

function Dashboardadmin() {
     const {totallinea,bodegas}=chartcontex()
     const [codigobodega,setcodigobodega]=useState('0');
      
    const selectbodega=(e:any)=>{
       setcodigobodega((prev)=> e.target.value)
    }
    
    return(
        <>
          <div className="row" style={{maxHeight:'1400px'}}>
            <div className="col-12 divdashchartcontainer" >
                <div className="card"  style={{boxShadow:"0px 3px 10px #0000001A"}}>
                    <div className="card-body">
                   <Chatsloopgiadmin/>


                    </div>
                </div>
            </div>
           
                <div className="col-12"  >
                    <div className="container-fluid">
                        <div className="row">
                    <div className="col-12 col-md-6 col-lg-8 col-sm-12 col-xl-9"  >
                        <div className="chartinventario" >
                        <div className="card" style={{height:'100%',boxShadow:"0px 3px 10px #0000001A"}} >
                            <div className="card-body" style={{}}>
                              <div style={{display:"flex", justifyContent:"space-between"}}>
                                                              <div style={{padding:'10px 0px 12px 16px',display:"flex", flexDirection:"column",gap:"1px" ,flex:"0 1 50%"}}>
                                                             
                                                              <span className="fonttitulos" >Inventario por linea</span>
                                                              <span className="textolineatotal">${totallinea.toLocaleString('de-DE')}</span>
                                                             
                              
                                                              
                              
                                                              </div>
                                                              <div style={{flex:"0 0 40%"}}>
                                                                   <CFormFloating className="margeniputempresa">
                                                                    <CFormSelect
                                                                      size="lg"
                                                                      placeholder="Tipo de identificacion"
                                                                      className="inputselect fontletre"
                                                                  
                                                                          value={codigobodega}
                                                                          name='bodega'
    
                                                                          onChange={selectbodega}
                                                                     
                                                                     
                                                                    >
                                                                      <option value="0" >Seleccione</option>
                                                                     
                                                                       {bodegas.map((item,key)=>{
                                                                        return(
                                                                          <option value={item.codigo.toString()} key={key}>{item.nombre}</option>
  
                                                                        )
                                                                       })}
                                                                    </CFormSelect>
                                                                    <CFormLabel>Bodegas</CFormLabel>
                                                                  </CFormFloating>
                                                              </div>
                                                              </div>
                            <Chartinventariolinea/>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 col-sm-12 col-xl-3" >
                        <div className="chartcartera">
                        <div className="card"  style={{boxShadow:'0px 3px 10px #0000001A'}}>
                            <div className="card-body">
                                <span className="fonttitulos" style={{padding:'10px 16px 30px 16px',display:"inline-block"}}>Cartera</span>
                            <Chartcartera/>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                       
                </div>
           
        </div>
        
        </>
    )
}

export default Dashboardadmin;

