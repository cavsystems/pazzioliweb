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
import Iconprecio from "../../icons/iconprecio";
import Precios from "./components/precios/precios";
interface productolista{

  codigobarras:string | null,
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
    const [pagina,setpagina]=useState<number>(0);
   const [totalglobal,settotalglobal]=useState<number>(0);
     const [modalprecio,setmodalprecio]=useState<boolean>(false);
     const [precioidvariante,setprecioidvariante]=useState<number>(0);
     const [itemsformempresa, setitemsformempresa] = useState(1)
     const [productoid,setproductoid]=useState<number>(0)
     const [descripcionproducto,setdescripcionproducto]=useState<string>("")
      const [productoidbodega,setproductoidbodega]=useState<number>(0)
    const [modalbodega,setmodalbodegaa]=useState<boolean>(false)
      const [product,setproduct]=useState<productolista | null>(null)
     const [modalproducto,setmodalproducto]=useState(true)
     const [actulizar,setactulizar]=useState<boolean>(false)
     const [esperaasync,setesperaasync]=useState<boolean>(false)
      const [modalerror,setmodalerror]=useState(false)
      const [productos,setproductos]=useState<productolista[]>([])
      const [estadoproducto,setestadoproducto]=useState<string>("ACTIVO")
      const [estadovariante,setestadovariante]=useState<number>(1)
    const [mensajeerror,setmensajeerror]=useState("")
     const {codigomodal,setcodigomodal, setcodigobarra,codigobarraonchange,
    setcodigobarraonchange,codigovariante,
       setcodigovariante,}=codigosbarrascontex()
     const [modalformproducto,setmodalformproducto]=useState<boolean>(false)
     const traerproductos=async()=>{
      const productos= await api.get(`variantes/listarInventarioBasico?page=${pagina}&size=5&descripproduct=${descripcionproducto}`,{
            headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
            }});
            setproductos(productos.data.content)
           // settotalglobal(productos.data.totalElements)
      console.log("productos lista",productos)
     }



     useEffect(()=>{
    
    
 cargarMasDatos()
      
    
     },[pagina,descripcionproducto,estadoproducto])


      useEffect(()=>{
    
    
 cargarMasDatos()
      
    
     },[estadoproducto])

    useEffect(()=>{
    
    
 cargarMasDatos()
      
    
     },[estadovariante])

       
     const handleScroll = (e:any) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom) {
          console.log('Llegaste al final de la tabla');
          if(esperaasync==false){
          setpagina(pagina+1)
          }
         
        }
      };
      const cargarMasDatos = async () => {
        let arraynuevo=[]
          console.log("pagina cambiada",pagina)
          setesperaasync(true)
        const nuevosProductos = await api.get(`variantes/listarInventarioBasico?page=${pagina}&size=5&descripproduct=${descripcionproducto}&estadoproducto=${estadoproducto}&estadova=${estadovariante}`,{
            headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
            }});
            setesperaasync(false)
          if(pagina>0){
               console.log("nuevos productosback actual",nuevosProductos)
         nuevosProductos.data.content.map((item:productolista)=>{
         
          if(!productos.find(prod=>prod.productoId===item.productoId)){
             arraynuevo.push(item)
          }
        })
        setproductos((prevProductos) => [...prevProductos, ...arraynuevo]);
        console.log("nuevos productos",nuevosProductos)
       // setproductos((prevProductos) => [...prevProductos, ...nuevosProductos.data.content]);
          }else{
              console.log("nuevos productosback actual",nuevosProductos)
             setproductos(nuevosProductos.data.content)
           // settotalglobal(productos.data.totalElements)
          }
         
      }

    
    /*  useEffect(()=>{
         traerproductos()
      },[])*/
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
                                   <div className="col-12 " style={{paddingBottom:"12px"}} >
                                        <div className="d-flex flex-column">
                                          <div className="row mx-0 " style={{columnGap:"12px"}}>
                                            <div className="inputsearch col-12 col-md-4 paddingbottom">
                                                               <input type="text" className="inputlinea"  value={descripcionproducto} onChange={(e)=>{
                                                               
                                                                setdescripcionproducto(e.target.value)
                                                                 setpagina(0)
                                                              }
                                                                
                                                              }
                                                                />
                                                               <label className="labellinea">Producto</label>
                                                               <div className="diviconlupainventario">
                                                                 <Iconlupa width={17} height={17} />
                                                               </div>
                                                          </div>
                                                             
                                                   <div className="col-12 col-md-4 paddingbottom selecta">
                                                      <select className="iteminput1 inputpaddingselectproducto " onChange={(e)=>{
                                                        if(e.target.value==="ACTIVO"){
                                                          setestadoproducto("ACTIVO")
                                                          setestadovariante(1)
                                                          setpagina(0)
                                                        }else{
                                                          console.log("inactivo seleccionado",e.target.value)
                                                          setestadoproducto("INACTIVO")
                                                           setestadovariante(0)
                                                            setpagina(0)
                                                        }
                                                      }} defaultValue={"ACTIVO"}>
                                                           <option value={"ACTIVO"} id="slectform1">Activo</option>
                                                          <option value={"INACTIVO"} id="slectform1">Inactivo</option>
                                
                             
                                 
                               </select>
                                                    </div>       
                                              <div className="d-flex justify-content-start align-items-center justify-content-md-end justify-content-lg-end col-12 col-md-3 paddingbottom gap-3 ">


                                                
                                                
                                               
                                                                <span className="totalregistrosproduct" >Total: {productos.length>0 ?productos[0].totalGlobalInventario.toLocaleString("es-CO",{
                                                style:"currency",
                                                  currency:"COP",
                                                  minimumFractionDigits:2,
                                                  maximumFractionDigits:2
                                                }):0}</span>
                                                         </div>
                                         </div>
                                        </div>
                                                          
                                     
                                     
                                                 
                                         
                                                 </div>
                                                
                                                       <div className="tabla-wrapper" onScroll={(e) => handleScroll(e)}>
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
                                              <CTableDataCell>{item.cantidadGlobal.toLocaleString("es-CO",{
                                                 
                                                  style:"decimal",
                                                  minimumFractionDigits:2,
                                                  maximumFractionDigits:2
                                                })}</CTableDataCell>
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
                                                               < CButton  className="buttoniconnormal" onClick={()=>{
                                                                    setmodalprecio(true)
                                                                    setprecioidvariante(item.productoVarianteId)
                                                               }}  >    <Iconprecio width={19} height={19.5} color={"#555" }/></CButton>
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
                                                            
                                                             <div   className="d-flex justify-content-center  align-items-center"style={{width:'100vw',height:'100vh',top:0,left:0,zIndex:10000,position:'fixed',background:"rgb(0, 0, 0,0.5)"}} id="modalrol">
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
                                  
                           <Formproduct  modalformproducto={modalformproducto} setmodalformproducto={setmodalformproducto}  productoid= {productoid} setproductoid={setproductoid} product={product} setproduct={setproduct}  traerproductos={traerproductos} setpagina={setpagina}/>  
               
                   </div>
                  {
                       modalerror && <Modalconfirmar tipoicon={"Error"} texto={mensajeerror} boton3={true} textoboton={"Aceptar"}  funcion={funcionDinamica}/>
                       } 

                       <Bodegasproducto  modalbodega={modalbodega}  setmodalbodega={setmodalbodegaa}  productoidbodega={productoidbodega} setproductoidbodega={setproductoidbodega}/>
                       <Precios modalprecio={modalprecio} setmodalprecio={setmodalprecio} precioid={precioidvariante} setprecioid={setprecioidvariante}/>
                   </div>  
                 
           
    </> );
}

export default Productos;