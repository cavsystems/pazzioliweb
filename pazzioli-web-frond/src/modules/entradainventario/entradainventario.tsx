import { CButton, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import Iconlupa from "../../icons/iconlupabuscar";
import "./entrada.scss"
import Iconprecio from "../../icons/iconprecio";
import Iconeliminar from "../../icons/iconeliminar";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import api from "../../apicofig";
import Modalconfirmar from "../../components/alertconfimacion";
import ProductoRowcantidad from "./components/cellcantidad";
import ProductoRowcosto from "./cellcostos";
interface bodega{
    codigo:number,
    nombre:string
}

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

total:0
}


interface productolistaagregar{

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

total:number
}
function Entradainventario() {
    const [bodegaseleccionada,setbodegaseleccionada]=useState<number>(0)
     const [descripcionproducto,setdescripcionproducto]=useState<string>("")
     const [pagina,setpagina]=useState<number>(0)
    const [totalglobal,settotalglobal]=useState<number>(0)
     const [modalerror,setmodalerror]=useState<boolean>(false)
     const [mensajeerror,setmensajeerror]=useState<String>("")
     const [Tipomovimiento,setTipomovimiento]=useState<number>(0)
     const [productosentradas,setproductosentradas]=useState<number>(0)
 const [coords, setCoords] = useState({ x: 0, y: 0, width: 0 });
     const [productos,setproductos]=useState<productolista[]>([])
     const [productosagregados,setproductosagregados]=useState<productolistaagregar[]>([])
     const [numeroproductosagregados,setnuproductosagregados]=useState<number>(0)
     const [funcionDinamica,setFuncionDinamica]=useState<()=>void>(()=>{})
    const [bodegas,setbodegas]=useState<bodega[]>([])
    //Estado para el dropdown activo
    const [activeId, setActiveId] = useState<number | null>(null)
    //solucion al desajuste del desplegable 
   const inputRefs = useRef<Record<number, HTMLInputElement | null>>({})
//funcion para calcular la posicion por input


const updatePosition = (id: number) => {
  const el = inputRefs.current[id]
  if (!el) return

  const rect = el.getBoundingClientRect()

  setCoords({
    x: rect.left + window.scrollX,
    y: rect.bottom + window.scrollY,
    width: rect.width
  })

  setActiveId(id)
}


//actulizar total global
useEffect(()=>{
    let total=0
   productosagregados.forEach((item)=>{
   
    total+=item.total
   })
   
  console.log("total actual",total,productosagregados)
  
  
   settotalglobal(total)
},[productosagregados])
//recalcular rezise
useEffect(() => {
  if (activeId === null) return

  const handler = () => updatePosition(activeId)

  window.addEventListener("resize", handler)
  window.addEventListener("scroll", handler, true)

  return () => {
    window.removeEventListener("resize", handler)
    window.removeEventListener("scroll", handler, true)
  }
}, [activeId])

    const cargarproductos=async()=>{
        console.log("variantes actuales",descripcionproducto,bodegaseleccionada,)
            const nuevosProductos = await api.get(`variantes/listarInventarioBasicoentra?page=${0}&size=100&descripproduct=${descripcionproducto}&estadoproducto=${"ACTIVO"}&estadova=${1}&bodega=${bodegaseleccionada.toString()}&consultarentradasalida=${"SI"}`,{
            headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
            }});

            console.log("productos lista nuevos",nuevosProductos)
            setproductos(nuevosProductos.data.content)
    }
    const traerbodegas=async()=>{
          const apibodega=await api.get("bodegas/listar",{
                headers: {
                  'X-TenantID':"cavsystems", // suponiendo que data.db contiene el bodega de la base de datos
                }})

    console.log("apibodegas entrada",apibodega)
    setbodegas(apibodega.data.data)
    }

     useEffect(()=>{
       
       traerbodegas()
    },[])
    useEffect(()=>{
        if(descripcionproducto.trim()!=="" && bodegaseleccionada>0 ){
            cargarproductos()
        }else{
            console.log("No hay descripcion")
         setproductos([])
        }
     
    },[descripcionproducto,bodegaseleccionada])

    return ( <>
   <div className="paddingentrada">
    <div className="row mx-0 ">
             <div className="col-12 col-md-4 ">
            <div className="row mx-0 justify-content-center p-4 paddinginputentrada"> 
                        <div className="col-12 col-md-12 inputsearch">
                                  <select className="iteminput1 inputpaddingselectentrada"  onChange={(e)=>{
                                    if(e.target.value===""){
                                               setTipomovimiento(0)
                                    }else{
                                       setTipomovimiento(Number(e.target.value))  
                                    }
                                  }}>
                                                           <option value={""} id="slectform1">Movimientos</option>
                                                          <option value={"1"} id="slectform1">Entrada inventario</option>
                                                           <option value={"2"} id="slectform1">Salida inventario</option>
                                                            <option value={"3"} id="slectform1">Traslado bodegas</option>
                                
                             
                                 
                               </select>
                        </div>
                      </div>
                    
                     
                                                    
        </div>
          <div className="col-12 col-md-4 ">
                     <div className="row mx-0 justify-content-center paddinginputentrada"> 
                        <div className="col-12 col-md-12 inputsearch">
                                       <input type="text" className="inputlinea"  disabled={true}
                                                                />
                                                               <label className="labellinea">Fecha</label>
                                                               <div className="diviconlupainventario">
                                                                <img src="/imgs/iconcalender.svg" height={30}  />
                                                                
                    </div>  
                        </div>
                      </div>
                      
                     
                                                    
        </div>

          <div className="col-12 col-md-4">
           <div className="row mx-0 justify-content-center paddinginputentrada"> 
                        <div className="col-12 col-md-12 inputsearch">
                                       <input type="text" className="inputlinea"  disabled={true}
                                                                />
                                                               <label className="labellinea">Número documento</label>
                                                               <div className="diviconlupainventario">
                                                             
                                                                
                    </div>  
                        </div>
                      </div>
                    
                     
                                                    
        </div>
        <div className="col-12 col-md-6  ">

                      <div className="row mx-0 justify-content-center  paddinginputentrada"> 
                        <div className="col-12 col-md-12 inputsearch">
                                       <textarea  className="inputlinea texareasize"  
                                                                />
                                                               <label className="labellinea">Observaciones</label>
                                                               <div className="diviconlupainventario">
                                                                
                    </div>  
                        </div>
                      </div>
                     
                                                    
        </div>

            

             <div className="col-12 col-md-3">
            <div className="row mx-0 justify-content-center p-4 paddinginputentrada"> 
                        <div className="col-12 col-md-12 inputsearch">
                                  <select className="iteminput1 inputpaddingselectentrada" defaultValue={0} onChange={(e)=>{
                                     setbodegaseleccionada(Number(e.target.value))
                                  }} >
                                                           <option value={0} id="slectform1">Bodega</option>
                                                           {
                                                            bodegas.map((item)=>{
                                                                return (
                                                                    <>
                                                                    <option value={item.codigo} id="slectform1">{item.nombre}</option>
                                                                    </>
                                                                )
                                                            })
                                                           }
                                                        
                                
                             
                                 
                               </select>
                        </div>
                      </div>
                    
                     
                                                    
        </div>


 <div className="col-12 col-md-3">
            <div className="row mx-0 justify-content-center p-4 paddinginputentrada"> 
                        <div className="col-12 col-md-12 inputsearch">
                                  <select className={`iteminput1 inputpaddingselectentrada ${Tipomovimiento!==3 ? "disabledselect":""}`} disabled={Tipomovimiento!==3} >
                                                           <option value={""} id="slectform1">Bodega destino</option>
                                                          <option value={"1"} id="slectform1">Principal</option>
                                                           <option value={"2"} id="slectform1">Almacen sur</option>
                                                            <option value={"3"} id="slectform1">Almacen norte</option>
                                
                             
                                 
                               </select>
                        </div>
                      </div>
                    
                     
                                                    
        </div>

     <div className="col-12 paddingcol12entrada">
         <div className="tabla-wrapper" >
                                                                  <CTable  
               
                       
                         
                         small
                         align="left" className="tablaterceros">
                            <colgroup>
    <col style={{ width: "120px" }} />   {/* Código */}
    <col style={{ width: "300px" }} />   {/* Descripción */}
    <col style={{ width: "100px" }} />   {/* Cantidad */}
    <col style={{ width: "100px" }} />   {/* Costo */}
    <col style={{ width: "140px" }} />   {/* Total */}
    <col style={{ width: "80px" }} />    {/* Acciones */}
  </colgroup>
                                                                 
                                                                 <CTableHead>
                                                                   <CTableRow>
                                                                   
                                                                       <CTableHeaderCell scope="col">Código</CTableHeaderCell>
                                                                   <CTableHeaderCell scope="col" >Producto</CTableHeaderCell>
                                                                      
                                                                      
                                                                           <CTableHeaderCell scope="col" > Cantidad</CTableHeaderCell>
                                                                              <CTableHeaderCell scope="col" >Costo</CTableHeaderCell>
                                                                           <CTableHeaderCell scope="col" >Total</CTableHeaderCell>
                                                                       
                                                                               <CTableHeaderCell scope="col" >Acciones</CTableHeaderCell>
                                                       
                                                       
                                                                     
                                                                   </CTableRow>
                                                                 </CTableHead>
                                                                 <CTableBody>
                                                                 
                                                                 
                                                                
                                     
                                                     
                                                                  {

                                                                        Array.from({length: numeroproductosagregados}).map((_, index) => (
                                                                             <CTableRow>
                                                                              <CTableDataCell >{productosagregados[index].codigoContable}</CTableDataCell>
                                                                     <CTableDataCell >{
                                                                        <div className="mx-0">
                                                                            <div className="col-12 position-relative">
                                                                                  <input className="inputentradaitem"   ref={(el) => {

    //guardamos la referncia del input en el ref
    inputRefs.current[productosagregados[index].productoVarianteId] = el
  }} value={productosagregados[index].descripcion} onChange={(e)=>{
                                                                                       let newdes=[...productosagregados]
                                                                                        let newde=[...productosagregados]
                                                                                    newdes= newdes.map(item=>{
                                                                                        if(item.productoVarianteId === productosagregados[index].productoVarianteId){
                                                                                            return {
                                                                                                ...item,descripcion:e.target.value
                                                                                            }

                                                                                        }
                                                                                        return item
                                                                                     })
                                                                                     console.log("productos agregados onchanga",newde,newdes)
                                                                                     setproductosagregados(newdes)
                                                                                      setdescripcionproducto(e.target.value)
                                                                                     updatePosition(productosagregados[index].productoVarianteId)
                                                                                      
                                                                                                       const rect = e.target.getBoundingClientRect();
  setCoords({
    x: rect.left,
    y: rect.bottom,  // justo debajo del input                                     
    width: rect.width
  });
                                                                        }}/>
                                                                        <div  className={`${'rotateitem'} `}><img  src="imgs/togle.svg" /></div> 

                                                                        

                                                                              {productos.length>0 && activeId !== null &&
                                                                             createPortal(
                                                                                 <div
                                                                                   className="displayatrr-portal"
                                                                                   style={{
                                                                                     /* Cuando digo “superior + alto”, me refiero a cómo se calcula el valor de:
                                                                              rect.bottom
                                                                             
                                                                             Es la suma de:
                                                                             rect.top  (la distancia desde el borde superior del navegador)
                                                                             + rect.height  (el tamaño del elemento)
                                                                             
                                                                             Distancia desde el borde superior del viewport
                                                                             */
                                                                                     top: coords.y,
                                                                                     left: coords.x,
                                                                                     width: coords.width
                                                                                   }}
                                                                                 >
                                                                                   <ul className="ulvariante">
                                                                                     {
                                                                                       productos.map((item)=>{
                                                                                         return <>
                                                                                         <li  onClick={()=>{
                                                                                           let productagregado=[...productosagregados]
                                                                                            console.log("index producto antex",index,productosagregados, productagregado)
                                                                                           productagregado=productagregado.map((item2,i)=>{
                                                                                             if(i===index){
                                                                                            
                                                                                                return {...item,cantidadGlobal:0,costo:0,total:0}
                                                                                             } 
                                                                                             
                                                                                             return item2             
                                                                                            })
                                                                                            console.log("index producto agregar",index, productagregado)
                                                                                            setproductosagregados(productagregado)

                                                                                            setproductos([])
                                                                                          
                                                                                         }}>{item.descripcion}</li>
                                                                                         </>
                                                                                       })
                                                                                     }
                                                                                   </ul>
                                                                                 </div>,
                                                                                 document.body
                                                                               )
                                                                             }

                                                                            </div>
                                                                         
                                                                        </div>
                                                                       
                                                                        }</CTableDataCell>
                                                                    <CTableDataCell >
                                                                           <div className="row mx-0">
                                                                            <div className="col-12 position-relative">
                                                                          
                                                                        <ProductoRowcantidad item={productosagregados[index]} index={index} setproductosagregados={setproductosagregados}/>
                                                                          </div>
                                                                          </div>
                                                                        {/*productosagregados[index].cantidadGlobal*/}</CTableDataCell>
                                                                          <CTableDataCell >    <div className="row mx-0">
                                                                            <div className="col-12 position-relative">
                                                                          
                                                                        < ProductoRowcosto item={productosagregados[index]} index={index} setproductosagregados={setproductosagregados}/>
                                                                          </div>
                                                                          </div></CTableDataCell>
                                                                        
                                                                          <CTableDataCell >
                                                                          <div className="d-flex align-items-center justify-content-end gap-2">
                                                                       
                                                                          <span> ${productosagregados[index].total.toLocaleString("es-CO", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })}</span>
                                                                          </div>
                                                                          </CTableDataCell>

                                                                             <CTableDataCell>
                                                                                                                                    <div className="d-flex  justify-content-center flex-nowrap" style={{gap:"12px"  }} >
                                                                                                                            
                                                                                                                              
                                                                                  
                                                                                                                                <div className="col-6"  style={{ maxWidth: 'fit-content' }}  >
                                                                                                                                  <CButton  className="buttoniconnormal"  ><Iconeliminar  width={16} height={16} color={"#555"}/> </CButton>
                                                                                                                              </div>
                                                                                  
                                                                                                                             
                                                                                  
                                                                                  
                                                                                                                           
                                                                                                                          </div>
                                                                                                                                      </CTableDataCell>

                                                                        </CTableRow>
                                                                         ))
                                                                   /* productos.map((item)=>{
                                                                        return   <CTableRow>
                                                                              <CTableDataCell >{item.codigoContable}</CTableDataCell>
                                                                     <CTableDataCell >{item.descripcion}</CTableDataCell>
                                                                   
                                                                          <CTableDataCell >{`${item.costo.toLocaleString("es-CO",{
                                                  style:"currency",
                                                  currency:"COP",
                                                  minimumFractionDigits:2,
                                                  maximumFractionDigits:2
                                                })}`}</CTableDataCell>
                                                                         <CTableDataCell >{item.cantidadGlobal}</CTableDataCell>
                                                                          <CTableDataCell >
                                                                          <div className="d-flex align-items-center gap-2">
                                                                       
                                                                          <span> $500.000</span>
                                                                          </div>
                                                                          </CTableDataCell>

                                                                             <CTableDataCell>
                                                                                                                                    <div className="d-flex  justify-content-center flex-nowrap" style={{gap:"12px"  }} >
                                                                                                                            
                                                                                                                              
                                                                                  
                                                                                                                                <div className="col-6"  style={{ maxWidth: 'fit-content' }}  >
                                                                                                                                  <CButton  className="buttoniconnormal"  ><Iconeliminar  width={16} height={16} color={"#555"}/> </CButton>
                                                                                                                              </div>
                                                                                  
                                                                                                                             
                                                                                  
                                                                                  
                                                                                                                           
                                                                                                                          </div>
                                                                                                                                      </CTableDataCell>

                                                                        </CTableRow>
                                                                    })*/
                                                                  }
                                                                 
                                                           
                                                                  
                                                              
                                           
                                                             
                                                   
                                                       
                                                     
                                                                   
                                       
                                                                     
                                                               
                                                                    
                                                                 </CTableBody>
                                                              
                                                               </CTable>
                                                               </div>
                       
        </div>      

         <div className="col-12 d-flex justify-content-between align-items-center  gap-3  paddingtotaaalitementrada" >
           


                                                
                                                
                                               
                                                     <button className="agregarentrada" onClick={()=>{
                                                    if(Tipomovimiento===0){
                                                          setmensajeerror("No especificastes el movimiento")
                                                            setmodalerror(true)
                                                           setFuncionDinamica(()=> { return ()=>setmodalerror(false)})
                                                            return
                                                    }

                                                     if(Tipomovimiento===1 || Tipomovimiento===2  ){
                                                           if(Number(bodegaseleccionada)===0){
                                                             setmensajeerror("Selecciona una bodega")
                                                            setmodalerror(true)
                                                           setFuncionDinamica(()=> { return ()=>setmodalerror(false)})
                                                            return
                                                           }
                                                     }
                                                    if(Tipomovimiento===1){
                                                        const productoscantidad=productosagregados.map(item=>{
                                                           
                                                            if(item.cantidadGlobal===0){
                                                                return item
                                                            }
                                                        })
                                                         console.log("productos agrgados",productosagregados, productoscantidad)
                                                        if(productoscantidad[0] && productoscantidad.length>0){
                                                            setmensajeerror("Hay productos con cantidad cero")
                                                            setmodalerror(true)
                                                           setFuncionDinamica(()=> { return ()=>setmodalerror(false)})
                                                            return
                                                        }
                                                    }
                                                    
                                              productosagregados.push({
                                                             codigobarras:"",
                                                              cantidadGlobal:0,
                                                              codigoContable:"",
                                                              costo
                                                                :0,
                                                              descripcion
                                                                :"",
                                                              fechaUltimaCompra
                                                                :"",
                                                              fechaUltimaVenta
                                                                :"",

                                                               grupo
                                                               :"",

                                                              linea
                                                              : "",

                                                              productoId
                                                              :0,

                                                              referencia
                                                              :"",

                                                              unidadMedida
                                                              : 0,


                                                              grupoid
                                                              :0,
                                                              lineaid
                                                              : 0,
                                                              impuestoid
                                                              :0, 
                                                              tipoproductid
                                                              :0,

                                                              productoVarianteId:0,
                                                              total:0
       
                                                        })


                                                        setnuproductosagregados((prev:number)=>prev+1)
                                                     }}>
              <span className="sumarentrada">+</span>  Agregar
            </button>             <span className="totalregistrosproduct" >Total: ${totalglobal.toLocaleString("es-CO", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })}</span>
                                                       
         </div>
             
        


           <div className="col-12 d-flex justify-content-center align-items-center containerguardarentrada flex-wrap  inputtextareaentrada" >
            <button className="importentrada">
                Importar
            </button>

                <button className="guardarentrada">
                Guardar
            </button>
           </div>


           
        
        
        
    </div>

       {
                                 modalerror && <Modalconfirmar tipoicon={"Error"} texto={mensajeerror} boton3={true}   textoboton={"Aceptar"}  funcion={funcionDinamica} />
                                 } 
    </div>
    </> );
}

export default Entradainventario;