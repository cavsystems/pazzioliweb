import { chartcontex } from "../../contextchart";
import Chartinventariolineacajero from "./charts/charinventariolineacajero";
import Chatsloopgicajero from "./charts/chartsloopgi";
import Chatsloopgirecuadocajero from "./charts/chartsloopgirecaudo";

function Dashboardcajero() {
   const {totalnumeroprolinea}=chartcontex()
    
    return(
        <>
          <div className="row" style={{maxHeight:'1400px'}}>
            <div className="col-12 divdashchartcontainer" >
                <div className="card"  style={{boxShadow:"0px 3px 10px #0000001A"}}>
                    <div className="card-body">
                   <Chatsloopgicajero/>


                    </div>
                </div>
            </div>
           
                <div className="col-12"  >
                    <div className="container-fluid">
                        <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 col-sm-12 col-xl-4"  >
                        <div className="chartinventario" >
                        <div className="card" style={{height:'100%',boxShadow:"0px 3px 10px #0000001A"}} >
                            <div className="card-body" style={{display: 'flex',flexDirection:"column",height: '100%'}}>
                                <div style={{padding:'10px 0px 12px 16px',display:"flex", flexDirection:"column",gap:"1px"}}>
                                <span className="fonttitulos" >Inventario por linea</span>
                                <span className="textolineatotal">{totalnumeroprolinea}</span>
                                </div>

                                <Chartinventariolineacajero/>
                           
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6 col-sm-12 col-xl-8" >
                        <div className="chartcartera">
                        <div className="card"  style={{boxShadow:'0px 3px 10px #0000001A'}}>
                            <div className="card-body">
                                <span className="fonttitulos" style={{padding:'10px 16px 30px 16px',display:"inline-block"}}>Cartera</span>

                                <Chatsloopgirecuadocajero/>                          
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

export default Dashboardcajero;