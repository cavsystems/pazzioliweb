import Chartcartera from "./charts/charcartera";
import Chartinventariolinea from "./charts/chartinventariolinea";
import Chatsloopgiadmin from "./charts/chartsloopgi";

function Dashboardadmin() {
    return(
        <>
          <div className="row" style={{maxHeight:'1400px'}}>
            <div className="col-12 divdashchartcontainer" >
                <div className="card" >
                    <div className="card-body">
                   <Chatsloopgiadmin/>
                    </div>
                </div>
            </div>
           
                <div className="col-12"  >
                    <div className="container-lg">
                        <div className="row">
                    <div className="col-12 col-md-8 col-lg-8 col-sm-12 col-xl-8"  >
                        <div className="chartinventario" >
                        <div className="card" style={{height:'100%',maxHeight:'400px'}}>
                            <div className="card-body">
                                <span className="card-title fonttitulos" style={{padding:'30px 16px 50px 16px'}}>Inventario por linea</span>
                            <Chartinventariolinea/>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 col-lg-4 col-sm-12 col-xl-4" >
                        <div className="chartcartera">
                        <div className="card" >
                            <div className="card-body">
                                <span className="card-title fonttitulos" style={{padding:'30px 16px 50px 16px'}}>Inventario </span>
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

