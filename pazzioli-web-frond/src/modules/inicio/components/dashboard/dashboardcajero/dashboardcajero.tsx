import { CFormFloating, CFormLabel, CFormSelect } from "@coreui/react";
import { chartcontex } from "../../contextchart";
import Chartinventariolineacajero from "./charts/charinventariolineacajero";
import Chatsloopgicajero from "./charts/chartsloopgi";
import Chatsloopgirecuadocajero from "./charts/chartsloopgirecaudo";

function Dashboardcajero() {
const {totallinea,bodegas,currentPage,currentPageindex,contador,setCurrentPage,setCurrentPageindex,setcontador,codigobodega,setcodigobodega,traertotalxinventariopage,totalnumeroprolinea}=chartcontex()
    
        
    const selectbodega=(e:any)=>{
        console.log("codigobodega",e.target.value)
       setcodigobodega((prev)=> e.target.value)
       traertotalxinventariopage(1,e.target.value,'cantidadLinea')
    }
    
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
                                                                    
                                                                            value={codigobodega}
                                                                            name='bodega'
                                                                        onChange={selectbodega}
                                                                       
                                                                      >
                                                                        <option value="0" >Seleccione</option>
                                                                       
                                                                           {bodegas?.map((item,key)=>{
                                                                                                        return(
                                                                                                          <option value={item.codigo.toString()} key={key}>{item.nombre}</option>
                                  
                                                                                                        )
                                                                                                       })}
                                                                      </CFormSelect>
                                                                      <CFormLabel>País</CFormLabel>
                                                                    </CFormFloating>
                                                                </div>
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