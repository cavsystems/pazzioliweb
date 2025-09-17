import { CFormFloating, CFormLabel, CFormSelect } from "@coreui/react";
import { chartcontex } from "../../contextchart";
import Chartinventariolineacajero from "../dashboardcajero/charts/charinventariolineacajero";
import Chatsloopgicajero from "../dashboardcajero/charts/chartsloopgi";
import Chatsloopgirecuadocajero from "../dashboardcajero/charts/chartsloopgirecaudo";
import Chartinventariobodega from "./charts/Chartinventariobodeguero";
import Charttop from "./charts/charttop";

function Dasboardbodeguero() {
   const {totalnumeroprolinea}=chartcontex()
    
    return(
        <>
          <div className="row" style={{maxHeight:'1400px'}}>
       
           
                <div className="col-12"  >
                    <div className="container-fluid">
                        <div className="row">
                    <div className="col-12 col-md-8 col-lg-8 col-sm-12 col-xl-8"  >
                        <div className="chartinventario" >
                        <div className="card" style={{height:'100%',boxShadow:"0px 3px 10px #0000001A"}} >
                            <div className="card-body" style={{display: 'flex',flexDirection:"column",height: '100%'}}>
                                <div style={{display:"flex", justifyContent:"space-between"}}>
                                <div style={{padding:'10px 0px 12px 16px',display:"flex", flexDirection:"column",gap:"1px" ,flex:"0 1 50%"}}>
                               
                                <span className="fonttitulos" >Inventario por linea</span>
                                <span className="textolineatotal">{totalnumeroprolinea}</span>
                               

                                

                                </div>
                                <div style={{flex:"0 0 40%"}}>
                                     <CFormFloating className="margeniputempresa">
                                      <CFormSelect
                                        size="lg"
                                        placeholder="Tipo de identificacion"
                                        className="inputselect fontletre"
                                    
                                            value=""
                                            name='bodega'
                                       
                                       
                                      >
                                        <option value="0">bodega1</option>
                                       
                                         <option value="0">bodega2</option>
                                      </CFormSelect>
                                      <CFormLabel>País</CFormLabel>
                                    </CFormFloating>
                                </div>
                                </div>

                                <Chartinventariobodega/>
                           
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 col-lg-4 col-sm-12 col-xl-4" >
                        <div className="chartcartera">
                        <div className="card"  style={{boxShadow:'0px 3px 10px #0000001A'}}>
                            <div className="card-body">
                                <span className="fonttitulos" style={{padding:'10px 16px 30px 16px',display:"inline-block"}}>10 Productos mas rotados</span>

                                <Charttop/>                          
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

export default Dasboardbodeguero;