import { CButton, CFormFloating, CFormInput, CFormSelect, CInputGroup, CInputGroupText, CPagination, CPaginationItem, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import Iconinsignia from "../../../icons/iconinsignia"
import Iconlupa from "../../../icons/Iconlupa"
import Iconproductosventa from "../../../icons/Iconproductosventacompra"
import Iconupdate from "../../../icons/iconupdate"
import Iconusuario from "../../../icons/Iconusuario"
import Iconimpresora from "../../../icons/Icinimpresora"
import Iconeliminar from "../../../icons/iconeliminar"
import Iconbodega from "../../../icons/Iconbodega"
import { StaticDatePicker } from "@mui/x-date-pickers"
import dayjs from "dayjs"
import { useState } from "react"

function Sectioninfocompra({buscar,setbuscar,setmodalregistroguardado,fechavencimiento,setfechavencimiento,fechainicial,setfechainicial}:any) {
  const [modalfechavencimiento,setmodalfechavencimiento]=useState<boolean>(false)
   const [modalfechainicial,setmodalfechainicial]=useState<boolean>(false)

   const [fechaInicia, setFechaInicia] = useState(dayjs());
    const [fechaFinal, setFechaFinal] = useState(dayjs());
    return (<>
           <div className="row mx-0">
                          <div className="col-12 col-md-6 inputcomprasrowo d-flex align-items-center">
                              <div className="">
                              <span className="Numerofacturabold">Factura No. 19000</span> <span className="Numerofactura"> / Bodega Central</span>
                              </div>
                            </div>  

                            <div className="col-12 col-md-6 inputcomprasrow1">
                                <div className="row mx-0">
                                    <div className="col-6  col-md-6 padingrigth">
                                     <CInputGroup>
     
          <CInputGroupText >
           <Iconinsignia  width={17.5} height={16.5}/>
          </CInputGroupText>

         <CFormInput  type="email" id="username" name="username" placeholder="Numero de factura" utoComplete="name"/>
             {
     buscar==="Buscarvendedor" && <div className="optionesautocomplate">
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
       </div>
      }
        
      </CInputGroup>
                                    </div>
                                    <div className="col-1  col-md-1 sinpadding containercimpresora align-items-center">
                                        <div>
                                           <Iconimpresora  width={18} height={18} />
                                        </div>
                                     
                                    </div>
                                    <div className="col-5 col-md-5">
                                     <button className="botonclasventas">
                                        <div className="d-flex justify-content-between align-items-center" onClick={()=> setmodalregistroguardado(true)}>
                                             <span className="labelventas">Compras</span>
                                             <div className="inlineblocknumeroventas d-flex justify-content-center align-items-center">
                                                     <span className="labelnumeroventas">3</span>
                                             </div>
                                        </div>
                                      </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mx-0">
                           


                               <div className="col-12 col-md-12  col-lg-12 col-xl-6 colleftcompra">

                                <div className="row mx-0">
                                    <div className="col-8 col-md-10  sinpaddinglefrigth">
                                    <CInputGroup className="inputgrupcpmplate">
     
          <CInputGroupText >
           <Iconusuario  width={17.5} height={16.5}/>
          </CInputGroupText>

         <CFormInput  type="email" id="username" name="username" placeholder="Busca o crea un proveedor" autoComplete="name" onFocus={()=>{
          setbuscar("Buscarclientes")
         }} onBlur={()=>{
          setbuscar("")
         }}/>
      {
        buscar==="Buscarclientes"  &&   <div className="optionesautocomplate">
        <ul>
          <li className="nuevoclientecompraventa">{"  Nuevo cliente"}</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
       </div>
      }
      
        
      </CInputGroup>
                                    </div>

                                    <div className="col-4 col-md-2  sinpadding ">
                                            <div className="row mx-0 h-100 ">
                                                 <div className="col-12 sinpaddinglefrigthcompra ">
                                                     <div className="w-100 h-100 inforcompra  d-flex flex-column justify-content-center ">
                                                                                               <span className="subinfoncompra">Nit / CC</span>
                                         <span className="titulocompra">83.245.589</span>
                                              </div>
                                                 </div>
                                            </div>
                                             
                                       
                                    
                                    </div>
                                </div>

                        
                            </div>


                             <div className="col-12 col-md-12  col-lg-12 col-xl-6">
                                  <div className="row mx-0 h-100 ">

                                    <div className="col-7 col-md-6 sinpadding">
                                 <div className="row mx-0 h-100 ">
                                                 <div className="col-12  sinpaddinglefrigth ">
                                                     <div className="w-100 h-100 inforcompra  d-flex flex-column justify-content-center ">
                                                                                               <span className="subinfoncompra">Correo</span>
                                         <span className="titulocompra">luisdacade@gmail.com</span>
                                              </div>
                                                 </div>
                                            </div>
                              </div>


                              <div className="col-5 col-md-6 sinpadding minheight">
                                 <div className="row mx-0 h-100 ">
                                                 <div className=" col-7 col-md-6 sinpaddinglefrigthchild ">
                                                     <div className="w-100 h-100 inforcompra  d-flex flex-column justify-content-center ">
                                                                                               <span className="subinfoncompra">Teléfono</span>
                                         <span className="titulocompra">3162226224</span>
                                              </div>
                                                 </div>

                                                 


                                                   <div className=" col-5 col-md-6  sinpaddinglefrigthchild  paddinglefthistorial">
                                                     <div className="w-100 h-100   d-flex flex-column justify-content-center ">
                                                                                                          <span className="subinfoncompra">Historial</span>
                                         <span className="titulocompra">13</span>
                                              </div>
                                                 </div>


                                                
                                            </div>
                              </div>

                               

                           
                                  </div>
                              

                        
                            </div>


                            


                                   
                        </div>
                          <div className="row mx-0 h-100">
                            <div className="col-6  sinpaddinglefrigth">
                                <div className="row mx-0 h-100">
                               <div className="col-12 col-md-12 inputsearch">
                                       <input type="text" className="inputlineacompra" placeholder="Fecha inicial" disabled={true} value={fechainicial}
                                                                />
                                                          
                                                               <div className="diviconcompra" onClick={()=>{
                                                                setmodalfechainicial(!modalfechainicial)
                                                                setmodalfechavencimiento(false)
                                                               }}>
                                                                <div className="containerpicker">
                                                                 {
                                                                    modalfechainicial && <StaticDatePicker   className="pckercompra"
    value={fechaInicia}
    onChange={(newValue) => {
      if (!newValue) return;

      setFechaInicia(newValue);

      const formateada = newValue.format("MM/DD/YYYY");
      setfechainicial(formateada);

      setmodalfechainicial(false); // cerrar calendario
    }}
  />
                                                                 } 
                                                                    <img src="/imgs/iconcalender.svg" height={30}  />
                                                                </div>
                                                              
                                                                
                    </div>
                        </div> 
                                </div>
                                                        
                            </div>

                             <div className="col-6 sinpaddinglefrigthchild">
                                <div className="row mx-0 h-100">
                               <div className="col-12 col-md-12 inputsearch">
                                       <input type="text" className="inputlineacompra" placeholder="Fecha Vencimiento" disabled={true} value={fechavencimiento}
                                                                />
                                                          
                                                               <div className="diviconcompra"  onClick={()=>{
                                                                setmodalfechavencimiento(!modalfechavencimiento)
                                                                setmodalfechainicial(false)
                                                               }}>
                                                                <div className="containerpicker">
                                                                    {
                                                                        modalfechavencimiento &&                  <StaticDatePicker  className="pckercompra" defaultValue={dayjs()}  value={fechaFinal}
    onChange={(newValue) => {
      if (!newValue) return;

      setFechaFinal(newValue);

      const formateada = newValue.format("MM/DD/YYYY");
      setfechavencimiento(formateada);

      setmodalfechavencimiento(false); // cerrar calendario
    }}
  />
                                                                    }
                                                 
                                                                    <img src="/imgs/iconcalender.svg" height={30}  />
                                                                </div>
                                                              
                                                                
                    </div>
                       
                        </div> 
                                </div>
                                                        
                            </div>
                          </div>

                        <div className="row mx-0">
                            <div className="col-12 col-md-12 col-xl-6  col-xl-6 sinpaddinglefrigth   childppadinglastproduct ">
                                   <CInputGroup className="h-100">
     
          <CInputGroupText >
           <Iconlupa  width={17.5} height={16.5}/>
          </CInputGroupText>

         <CFormInput  type="email" id="username" name="username" placeholder="Buscar producto" autoComplete="name"/>
          
       {buscar==="Buscarproductonuevo" && <div className="optionesautocomplate optionesautocomplatepro">
          <ul>
          <li className="libuscarproducto">
             <span>
                VA_7755 - 
              </span>
                 <span>
                 - 
              </span>
              <div className="econtainerbusproducto d-flex justify-content-between">
               <span>
                Cafetera eléctrica programable de  goteo con jarra térmica de acero inoxidable, 12 tazas 
              
              </span>
              <div className="divexistencia">
                    <span>
                Existencias
              </span>
                
              </div>
              </div>
              
          </li>
          
         
        </ul>
       </div>}
      
        
      </CInputGroup>
                            </div>

                            <div className="col-12 col-md-12 col-xl-6  col-xl-6 minheight">

                                <div className="row mx-0 h-100">
                                      <div className="col-6 sinpadding">
                                        <div className="row mx-0 h-100">
                                            <div className="col-6">

                                                <div className="row mx-0 h-100 sinpaddinglefrigthchild childppadinglast">
                                     <div className="col-12 h-100 ">
                                                 <div className="h-100 divinputcompracantidad">
                                                    <input type="text" placeholder=" " className="h-100 borderinput w-100"/>
                                                    <label className="labelinputcantidad">Cantidad</label>
                                                 </div>
                                                 </div>
                                </div>
                                                
                                            </div>
                                            <div className="col-6">
                                                 <div className="row mx-0 h-100 sinpaddinglefrigthchild  ">
                                     <div className="col-12 h-100 ">
                                                     <div className="w-100 h-100 inforcompra  d-flex flex-column justify-content-center ">
                                                                                               <span className="subinfoncompra">Precio</span>
                                         <span className="titulocompra">$ 99.800</span>
                                              </div>
                                                 </div>
                                </div>
                                            </div>
                                        </div>
                                             

                                      </div>

                                      <div className="col-6 sinpadding">
                                        <div className="row mx-0 h-100">
                                            <div className="col-4 sinpadding">
                                                <div className="row mx-0 h-100 sinpaddinglefrigthchild  ">
                                     <div className="col-12 h-100 ">
                                                     <div className="w-100 h-100 inforcompra  d-flex flex-column justify-content-center ">
                                                                                               <span className="subinfoncompra">Descuento</span>
                                         <span className="titulocompra">0</span>
                                              </div>
                                                 </div>
                                </div>
                                            </div>
                                            <div className="col-8 sinpadding">
                                              <div className="row mx-0 h-100 sinpaddinglefrigthchild  ">
                                     <div className="col-12 h-100 ">
                                               <div className="h-100 d-flex">
  <CInputGroup className="h-100 flex-fill">
    <CFormFloating className="h-100 w-100 margeniputempresa">
      <CFormSelect
        className="h-100 inputselect  selectcompra fontletre "
        style={{ minHeight: '100%' }}
      >
        <option value="">Delta</option>
      </CFormSelect>

      <label className="listapreciolabel">Lista de precios</label>
    </CFormFloating>
  </CInputGroup>
</div>

                                                 </div>
                                </div>
                                            </div>
                                        </div>
                                      </div>
                                  

                                </div>
                             
                           
                            </div>
                               <div className="row mx-0 p-0">
                                  <div className="col-6 col-md-3  sinpaddinglefrigth">
                                 <button className="botonesinportnew">Nuevo producto</button>
                                  </div>

                                    <div className="col-6 col-md-3 sinpaddinglefrigth ">
                                 <button className="botonesinportnew">Importar</button>
                                  </div>
                                    
                                </div>
                        </div>


                        <div className="row mx-0 sinpaddinglefrigth">
                            <div className="card sinpadding">
                                <div className="card-head headtotal sinpadding">
                                    <div className="w-100 paddinghead">
                                        <span className="titulototal">
                                          TOTAL: $480.000  
                                        </span>
                                    </div>
                                </div>
                                <div className="car-body">
                                    <div className="row mx-0   bobylistaproductcopra">
                                        <div className="col-12">
                                            <div className="d-flex justify-content-end">
                                                <div className="inputproductcompra d-flex ">
                                                    <div className="inputgrop">
                                                        <Iconlupa  width={17.5} height={16.5}/>
                                                    </div>
                                                    <input className="w-100 inputsearchcompras"   placeholder="Buscar producto agregado"/>
                                                </div>
                                             
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="contianertablalistacompras">
                                              <CTable  className="tablelistproductventas">
                                                <colgroup>
    <col style={{ width: "90px" }} />   {/* Código */}
    <col style={{ width: "310px" }} />   {/* Descripción */}
    <col style={{ width: "90px" }} />   {/* Cantidad */}
    <col style={{ width: "100px" }} />   {/* Costo */}
    <col style={{ width: "90px" }} />   {/* Total */}
    <col style={{ width: "120px" }} />    {/* Acciones */}
  </colgroup>
                                                <CTableHead  color="light">
                                                       <CTableRow>
                                                    <CTableHeaderCell>Codigo</CTableHeaderCell>
                                                      <CTableHeaderCell>Producto</CTableHeaderCell>
                                                        <CTableHeaderCell>Cantidad</CTableHeaderCell>
                                                          <CTableHeaderCell>Valor unitario</CTableHeaderCell>
                                                              <CTableHeaderCell>Valor total</CTableHeaderCell>
                                                                    <CTableHeaderCell>Acciones</CTableHeaderCell>
                                                    
                                                    </CTableRow>
                                                    

                                                </CTableHead>

                                                <CTableBody>
                                                    <CTableRow>
                                                        <CTableDataCell>
                                                    <div className="sinpadding h-100 d-flex align-items-center">
                                                     VA_7689
                                                    </div>
                                                   </CTableDataCell> 
                                                <CTableDataCell>
                                                    <div className="d-flex h-100 sinpadding  align-items-center">
                                                      <div className="imagenproductocompras">
                                                        <div className="w-100 h-100 linediv">
                                                             <Iconproductosventa width={22} height={22} / >
                                                        </div>
                                                       
                                                      </div>
                                                      <div>
                                                        <p className="parrafodescripcion">Cafetera eléctrica programable de goteo con jarra térmica de acero inoxidable, 12 tazas</p>
                                                      </div>
                                                    </div>
                                                </CTableDataCell>
                                                <CTableDataCell>
                                                      <div className="sinpadding h-100 d-flex align-items-center">
                                                     1
                                                    </div>
                                                </CTableDataCell>
                                                <CTableDataCell>
                                                    <div className="d-flex h-100  flex-column justify-content-center">
                                                       <div className="d-flex   flex-column    sinpadding valoresunitarioscompra">
                                                        <span>$120.000</span><span>-$9.990</span><span>+IVA19%</span>
                                                    </div> 
                                                    </div>
                                                  
                                                </CTableDataCell>
                                                <CTableDataCell>
                                                      <div className="sinpadding h-100 d-flex align-items-center">
                                                     $240.000
                                                    </div>
                                                   </CTableDataCell>
                                                <CTableDataCell >
                                                                                                     <div className="d-flex h-100 sinpadding align-items-center">
                                                           <div className="d-flex  sinpadding flex-nowrap" style={{gap:"12px"  }} >
                                                                                                          <div className="col-6" style={{ maxWidth: 'fit-content' }} >
                                                                                                              <CButton  className="buttoniconnormal">
                                                                                                                <Iconupdate  width={19} height={19.5} color={"#555"}/> 
                                                                                                              </CButton>
                                                                                                          </div>
                                                                                                          <div className="col-6"  style={{ maxWidth: 'fit-content' }} >
                                                                                                              <CButton  className="buttoniconnormal" >    <Iconbodega  width={19} height={19.5} color={"#555"}/></CButton>
                                                                                                          </div>
                                                              
                                                                                                            <div className="col-6"  style={{ maxWidth: 'fit-content' }} >
                                                                                                              < CButton  className="buttoniconnormal">    <Iconeliminar width={19} height={19.5} color={"#555" }/></CButton>
                                                                                                          </div>
                                                              
                                                                                                         
                                                              
                                                              
                                                                                                       
                                                                                                      </div>
                                                    </div>
                                                                                                    </CTableDataCell>
                                                    </CTableRow>

                                                    <CTableRow>
                                                          <CTableDataCell>
                                                    <div className="sinpadding h-100 d-flex align-items-center">
                                                     VA_7689
                                                    </div>
                                                   </CTableDataCell> 
                                                <CTableDataCell>
                                                    <div className="d-flex h-100 sinpadding  align-items-center">
                                                      <div className="imagenproductocompras">
                                                        <div className="w-100 h-100 linediv">
                                                             <Iconproductosventa width={22} height={22} / >
                                                        </div>
                                                       
                                                      </div>
                                                      <div>
                                                        <p className="parrafodescripcion">Cafetera eléctrica programable de goteo con jarra térmica de acero inoxidable, 12 tazas</p>
                                                      </div>
                                                    </div>
                                                </CTableDataCell>
                                                <CTableDataCell>
                                                      <div className="sinpadding h-100 d-flex align-items-center">
                                                     1
                                                    </div>

                                                </CTableDataCell>
                                                <CTableDataCell>
                                                      <div className="d-flex h-100  flex-column justify-content-center">
                                                          <div className="d-flex justify-content-end flex-column sinpadding valoresunitarioscompra">
                                                        <span>$120.000</span><span>-$9.990</span><span>+IVA19%</span>
                                                    </div>
                                                      </div>
                                                  
                                                </CTableDataCell>
                                                <CTableDataCell>   <div className="sinpadding h-100 d-flex align-items-center">
                                                     $240.000
                                                    </div></CTableDataCell>
                                                <CTableDataCell >
                                                    <div className="d-flex h-100 sinpadding align-items-center">
                                                           <div className="d-flex  sinpadding flex-nowrap" style={{gap:"12px"  }} >
                                                                                                          <div className="col-6" style={{ maxWidth: 'fit-content' }} >
                                                                                                              <CButton  className="buttoniconnormal">
                                                                                                                <Iconupdate  width={19} height={19.5} color={"#555"}/> 
                                                                                                              </CButton>
                                                                                                          </div>
                                                                                                          <div className="col-6"  style={{ maxWidth: 'fit-content' }} >
                                                                                                              <CButton  className="buttoniconnormal" >    <Iconbodega  width={19} height={19.5} color={"#555"}/></CButton>
                                                                                                          </div>
                                                              
                                                                                                            <div className="col-6"  style={{ maxWidth: 'fit-content' }} >
                                                                                                              < CButton  className="buttoniconnormal">    <Iconeliminar width={19} height={19.5} color={"#555" }/></CButton>
                                                                                                          </div>
                                                              
                                                                                                         
                                                              
                                                              
                                                                                                       
                                                                                                      </div>
                                                    </div>
                                                                                                   
                                                                                                    </CTableDataCell>
                                                    </CTableRow>
                                              
                                                </CTableBody>
                                              </CTable>
                                            </div>
                                        </div>

                                        <div className="col-12 totalcomprasresumen">
                                            <div className="d-flex mx-0 h-100 ">
                                              <div className=" d-flex flex-grow-1 sinpaddinglefrigthtotales">
                                                <div className="d-flex justify-content-center flex-column ">
                                                    <span className="titulosgradas">Total gravada</span>
                                                       <span className="titulosgradas">Iva</span>
                                                </div>
                                                  <div className="d-flex justify-content-center flex-column ">
                                                    <span className="titulosgradastotal">$55.900.000</span>
                                                       <span className="titulosgradastotal">$85.900</span>

                                                </div>

                                                  <div className="d-flex justify-content-center paddinglineaseparadora  align-items-center">
                                                   <div className="lineaseparadoracompra h-100 "></div>

                                                       
                                                </div>

                                                  <div className="d-flex justify-content-center flex-column ">
                                                    <span className="titulosgradas">Total exento</span>
                                                       <span className="titulosgradas">Total gravada</span>
                                                </div>
                                                  <div className="d-flex justify-content-center flex-column ">
                                                    <span className="titulosgradastotal">$55.900.000</span>
                                                       <span className="titulosgradastotal">$85.900</span>

                                                </div>

                                                


                                                

                                                  <div className="d-flex justify-content-center paddinglineaseparadora  align-items-center">
                                                   <div className="lineaseparadoracompra h-100"></div>

                                                       
                                                </div>



                                                  <div className="d-flex justify-content-center flex-column ">
                                                    <span className="titulosgradas">Productos</span>
                                                       <span className="titulosgradas">Items</span>
                                                </div>
                                                  <div className="d-flex justify-content-center flex-column ">
                                                    <span className="titulosgradastotal">$55.900.000</span>
                                                       <span className="titulosgradastotal">$85.900</span>

                                                </div>

                                                


                                                

                                                  <div className="d-flex justify-content-center paddinglineaseparadora  align-items-center">
                                                   <div className="lineaseparadoracompra h-100"></div>

                                                       
                                                </div>
                                                
                                                
                                                </div>    

                                               
                                            <div className=" d-flex flex-grow-1 flex-shrink-1 justify-content-end sinpadding">
                                                <span className="totalfottercompra">
                                                    TOTAL:$480.000
                                                </span>

                                            </div>
                                            </div>
                                     
                                        </div>
                                        <div className="col-12 ">
                                             <CPagination aria-label="Page navigation example" >
                                                  <CPaginationItem aria-label="Previous" >
                                                    <span aria-hidden="true" >&laquo;</span>
                                                  </CPaginationItem>
                                                 
                                                    
                                                     <CPaginationItem >{1}</CPaginationItem>
                                                        <CPaginationItem >{2}</CPaginationItem>
                                                           <CPaginationItem >{3}</CPaginationItem>
                                                 
                                                  <CPaginationItem aria-label="Next" >
                                                    <span aria-hidden="true">&raquo;</span>
                                                  </CPaginationItem>
                                                </CPagination>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
    </>);
                    
    
}

export default Sectioninfocompra;