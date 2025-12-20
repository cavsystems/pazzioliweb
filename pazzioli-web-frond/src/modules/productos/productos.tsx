import { CButton, CFormFloating, CFormInput, CFormLabel, CInputGroup, CTab, CTabContent, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow, CTabList, CTabPanel, CTabs } from "@coreui/react";
import { useEffect, useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Datosgeneralesproduct from "./components/Datosgeneralesproduct";
import Variantes from "./components/variantes";
import Iconsproduct from "../../icons/iconsproducto";
import Iconupdate from "../../icons/iconupdate";
import Iconbodega from "../../icons/Iconbodega";
import Usuariosicon from "../../icons/Isuarios";
import u from "./components/formproducto";
import "./product.scss"
import Providercodigobarras, { codigosbarrascontex } from "./contextcodigobarras";
import Formproduct from "./components/formproducto";
import api from "../../apicofig";
import Modalconfirmar from "../../components/alertconfimacion";
import Iconlupa from "../../icons/iconlupabuscar";
import Bodegasproducto from "./components/Bodegas/Bodegasproducto";
interface productolista{
  cantidadGlobal
: 
number
codigoContable
: 
string
costo
: 
number
descripcion
: 
string
fechaUltimaCompra
: string
fechaUltimaVenta
:string 

grupo
:string 

linea
: string

productoId
: number

referencia
: string

unidadMedida
: number | null


grupoid
: number,
lineaid
: number,
impuestoid
:number, 
tipoproductid
:number,

productoVarianteId:number


}
function Productos() {
    const [funcionDinamica, setFuncionDinamica] = useState<() => void>(() => {});

     const [itemsformempresa, setitemsformempresa] = useState(1)
     const [productoid,setproductoid]=useState<number>(0)
      const [productoidbodega,setproductoidbodega]=useState<number>(0)
    const [modalbodega,setmodalbodegaa]=useState<boolean>(false)
      const [product,setproduct]=useState<productolista | null>(null)
     const [modalproducto,setmodalproducto]=useState(true)
     const [actulizar,setactulizar]=useState<boolean>(false)
      const [modalerror,setmodalerror]=useState(false)
      const [productos,setproductos]=useState<productolista[]>([])
    const [mensajeerror,setmensajeerror]=useState("")
     const {codigomodal,setcodigomodal, setcodigobarra,codigobarraonchange,
    setcodigobarraonchange,codigovariante,
       setcodigovariante,}=codigosbarrascontex()
     const [modalformproducto,setmodalformproducto]=useState<boolean>(false)
     const traerproductos=async()=>{
      const productos= await api.get(`variantes/listarInventarioBasico`,{
            headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
            }});
            setproductos(productos.data.content)
      console.log("productos lista",productos)
     }
      useEffect(()=>{
         traerproductos()
      },[])
      const methods = useForm({
          mode: 'onSubmit',
           shouldUnregister: false,
         defaultValues: {
          Actividadeconomica: "",
     correoempresa:"",
     celularempresa:"",
     codigopostal:"",
     digitodeverificacion:"",
     departamento:"",
     municipio:"",
     nombrecomercial:"",
     numeroidentificacion:"",
     pais:"",
     primerapellido:"",
     primernombre: "",
     razonsocial:"",
     regimen:"",
     segundoapellido:"",
     segundonombre:"",
     telefonofijo:"",
     tipodeidentificacion: "",
     tipodepersona:"",
    
     archivoLogo:null,
     impuestos:[],
     sucursales:[],
      
     
           // Agrega todos los campos que usas en todos los pasos
         },
       });

      const onSubmit=(data:any)=>{
       console.log("variantes guardar",Variantes)
      }
      const onError=(data:any)=>{

      }
    return ( <>
        
         <div className=" d-flex justify-content-center " style={{height:"100%"}}>
                       <div className="containerusuario row  align-items-center justify-content-center flex-column">
                                 <div className="col-12 d-flex align-items-center justify-content-center flex-column containerimgusuario">
                            <Iconsproduct width={60} height={60}/>
                               <span className="tituloopaco" >Productos</span>
                               </div>
               
                             
                             

                                                 
                                     
                             <div className="col-12">
                               
                                <div  className="tablesucursalescon" >
                                   <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6  paddingbottom" style={{paddingBottom:"12px"}} >
                                     
                                                          <div className="inputsearch">
                                                               <input type="text" className="inputlinea" />
                                                               <label className="labellinea">Producto</label>
                                                               <div className="diviconlupainventario">
                                                                 <Iconlupa width={17} height={17} />
                                                               </div>
                                                          </div>
                                                             
                                                                      
                                           
                                     
                                     
                                                 
                                         
                                                 </div>
                                                       <div className="tabla-wrapper">
                                                          <CTable  
       
               
                 
                 small
                 align="left" className="tablaterceros">
                                                         
                                                         <CTableHead>
                                                           <CTableRow>
                                                           
                                                               <CTableHeaderCell scope="col">Código</CTableHeaderCell>
                                                           <CTableHeaderCell scope="col" >Descripción</CTableHeaderCell>
                                                                <CTableHeaderCell scope="col" >Referencia</CTableHeaderCell>
                                                             <CTableHeaderCell scope="col" >Cantidad</CTableHeaderCell>
                                                              <CTableHeaderCell scope="col" >Costo</CTableHeaderCell>
                                                            
                                                           <CTableHeaderCell scope="col" >Grupo</CTableHeaderCell>
                                                               <CTableHeaderCell scope="col" >Linea</CTableHeaderCell>
                                                                 <CTableHeaderCell scope="col" >Fecha compra</CTableHeaderCell>
                                                              <CTableHeaderCell scope="col" >Fecha venta</CTableHeaderCell>
                                                               
                                                                       <CTableHeaderCell scope="col" >Acciones</CTableHeaderCell>
                                               
                                               
                                                             
                                                           </CTableRow>
                                                         </CTableHead>
                                                         <CTableBody>
                                                         
                                                         
                                                        
                             
                                             
                                                
                                                   {
                                                    productos.map(item=>{
                                                      return <CTableRow>
                                                             <CTableDataCell>{item.codigoContable}</CTableDataCell>
                                             <CTableDataCell>{item.descripcion}</CTableDataCell>
                                                <CTableDataCell>{item.referencia}</CTableDataCell>
                                              <CTableDataCell>{item.cantidadGlobal.toLocaleString("es-CO")}</CTableDataCell>
                                                <CTableDataCell>{`${item.costo.toLocaleString("es-CO",{
                                                  style:"currency",
                                                  currency:"COP",
                                                  minimumFractionDigits:2,
                                                  maximumFractionDigits:2
                                                })}` }</CTableDataCell>
                                                 <CTableDataCell>{item.grupo}</CTableDataCell>
                                                       <CTableDataCell>{item.linea}</CTableDataCell>
                                                   <CTableDataCell>{item.fechaUltimaCompra ? item.fechaUltimaCompra:"" }</CTableDataCell>
                                                      <CTableDataCell>{item.fechaUltimaVenta ?  item.fechaUltimaVenta :""}</CTableDataCell>
                                                     
                                                     
                                                     
                                             
                                                   
                                                     <CTableDataCell >
                                                       <div className="d-flex flex-nowrap" style={{gap:"12px"  }} >
                                                           <div className="col-6" style={{ maxWidth: 'fit-content' }} >
                                                               <CButton  className="buttoniconnormal" onClick={()=>{
                                                                setproductoid(item.productoId)
                                                                setproduct(item)
                                                                setmodalformproducto(true)
                                                                
                                                               }}>
                                                                 <Iconupdate  width={16} height={18} color={"#555"}/> 
                                                               </CButton>
                                                           </div>
                                                           <div className="col-6"  style={{ maxWidth: 'fit-content' }} >
                                                               <CButton  className="buttoniconnormal" onClick={()=>{
                                                                setmodalbodegaa(true)
                                                              setproductoidbodega(item.productoVarianteId)
                                                               }} >    <Iconbodega  width={19} height={19.5} color={"#555"}/></CButton>
                                                           </div>
               
                                                             <div className="col-6"  style={{ maxWidth: 'fit-content' }} >
                                                               <CButton  className="buttoniconnormal"  >    <Usuariosicon width={19} height={19.5} color={"#555" }/></CButton>
                                                           </div>
               
                                                          
               
               
                                                        
                                                       </div>
                                                     </CTableDataCell>
                                                     </CTableRow>
                                                    })
                                                   }
                                                    
                                                   
                                                          
                                                      
                                   
                                                     
                                           
                                               
                                             
                                                           
                               
                                                             
                                                       
                                                            
                                                         </CTableBody>
                                                      
                                                       </CTable>
                                                       </div>
               
               
                                                   </div>
                                                   
                           </div>
                
                    
                                         <div className="col-12  justify-content-center " style={{marginTop:'10px' ,display: codigomodal ? "flex":"none"}}>
                                                            
                                                             <div   className="d-flex justify-content-center  align-items-center"style={{width:'100vw',height:'100vh',top:0,left:0,zIndex:9999,position:'fixed',background:"rgb(0, 0, 0,0.5)"}} id="modalrol">
                                                                     <div className="card" style={{ width:'400px'}}>
                                                                         <div className="card-body">
                                                                                       <CInputGroup >
                                                          <CFormFloating className="margeniputempresa">
                                         
                                                       <CFormInput placeholder=""  value={codigobarraonchange}  className="inputdatosempresa fontletre"  onChange={(e)=>{
                                                     
                                                        setcodigobarraonchange(e.target.value)
                                                       }}  />
                                                     
                                          
                                         <CFormLabel>Codigo de barras</CFormLabel>
                                            
                                                       </CFormFloating>
                                                     </CInputGroup>
                                                                             </div>
                                         
                                                                             <div className="card-footer d-flex justify-content-center"  >
                                                                                       <button type="button"  className="botonretroceder" onClick={()=>{
                                                                                       setcodigomodal(false)
                                                                                       }}>Cancelar</button>
                                         
                                                  
                                               <button type="button" className="botoncontinuar" onClick={async ()=>{
                                                const isNotcodigo=await api.get(`variantes/existecodigobarra?codigobarra=${codigobarraonchange}`,{  headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
            }})
                                                //setcodigobarra(codigobarraonchange)
                                               console.log("es codigo de barras",isNotcodigo)
                                               if(isNotcodigo.data){
                                                setcodigobarra(codigobarraonchange)
                                                setcodigomodal(false)
                                                setcodigobarraonchange("")
                                               }else{
                                                setmensajeerror("Codigo de barras ya asignado")
                                                setmodalerror(true)
                                           setFuncionDinamica(() => () => setmodalerror(false));
                                               }
                                               
                                               }}  >Guardar</button>
                                         
                                                                             </div>
                                                                     </div>
                                                                     </div>
                                                                     
                                                            </div>             
                              
                                         <CButton className="botonagregarsucursal fitcontentinferior" onClick={()=>{
                                          setmodalformproducto(true)
                                         }}
                                       >Agregar</CButton>
                                  
                           <Formproduct  modalformproducto={modalformproducto} setmodalformproducto={setmodalformproducto}  productoid= {productoid} setproductoid={setproductoid} product={product} setproduct={setproduct}  traerproductos={traerproductos}/>  
               
                   </div>
                  {
                       modalerror && <Modalconfirmar tipoicon={"Error"} texto={mensajeerror} boton3={true} textoboton={"Aceptar"}  funcion={funcionDinamica}/>
                       } 

                       <Bodegasproducto  modalbodega={modalbodega}  setmodalbodega={setmodalbodegaa}  productoidbodega={productoidbodega} setproductoidbodega={setproductoidbodega}/>
                   </div>  
                 
           
    </> );
}

export default Productos;