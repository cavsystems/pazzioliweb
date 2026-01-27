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
import Iconupdate from "../../icons/iconupdate";
import Iconguardar from "../../icons/iconguardar";
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
    const [visible,setvisible]=useState<boolean>(false)
     const [indexactulizaricon,setindexactulizaricon]=useState<number>(-1)
    const [eliminar,seteliminar]=useState<boolean>(false)
    const [indexeliminar,setindexeliminar]=useState<number>(0)
    const [costoactulizar,setcostoactulizar]=useState<string>("")
      const [cantidadactulizar,setcantidadactulizar]=useState<string>("")
    const [modaladvertencia,setmensajeadvertencia]=useState<boolean>(false)
    const [guardar,setguardar]=useState<boolean>(false)
      const [funncionDinamica2,setFuncionDinamica2]=useState<()=>void>(()=>{})
    const [bodegaseleccionada,setbodegaseleccionada]=useState<number>(0)
    const [actualizar,setactualizar]=useState<boolean>(false)
      const [actualizaritem,setactualizaritem]=useState<boolean>(false)
    const [indexactulizar,setindexactulizar]=useState<number>(-1)
     const [descripcionproducto,setdescripcionproducto]=useState<string>("")
     const [pagina,setpagina]=useState<number>(0)
    const [totalglobal,settotalglobal]=useState<number>(0)
     const [modalerror,setmodalerror]=useState<boolean>(false)
     const [mensajeerror,setmensajeerror]=useState<String>("")
     const [mensajetipomovimiento,setmensajetipomovimiento]=useState<string>("")
     const [Tipomovimiento,setTipomovimiento]=useState<number>(0)
     const [productosentradas,setproductosentradas]=useState<number>(0)
 const [coords, setCoords] = useState({ x: 0, y: 0, width: 0 });
     const [productos,setproductos]=useState<productolista[]>([])
     const [productosagregados,setproductosagregados]=useState<productolistaagregar[]>([])
     const [numeroproductosagregados,setnuproductosagregados]=useState<number>(0)
     const [funcionDinamica,setFuncionDinamica]=useState<()=>void>(()=>{})
    const [bodegas,setbodegas]=useState<bodega[]>([])
    const [evitandoBlur,setevitandoBlur]=useState<boolean>(true)
    //Estado para el dropdown activo
    const [activeId, setActiveId] = useState<number | null>(null)
    //solucion al desajuste del desplegable 

    
   const inputRefs = useRef<Record<number, HTMLInputElement | null>>({})
    const inputRefscantidad = useRef<Record<number, HTMLInputElement | null>>({})
    const inputRefscantidadcosto = useRef<Record<number, HTMLInputElement | null>>({})
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

useEffect(()=>{
if(eliminar){
     productosagregados.splice(indexeliminar,1)
     settotalglobal(productosagregados.reduce((c,item) => c+item.total,0))
 setnuproductosagregados(prev=> numeroproductosagregados-1)

setindexeliminar(0)
seteliminar(false)
}
},[eliminar])
const parseNumberCO = (value: string): number => {
  if (!value) return 0

  return Number(
    value
      .replace(/\./g, '') // quita miles
      .replace(',', '.')  // cambia decimal
  )
}

const parseNumberCOnuber = (value: string): number => {
  if (!value) return 0

  return Number(
    value
      .replace(/\./g, '') // quita miles
      .replace(',', '.')  // cambia decimal
  )
}


useEffect(()=>{
    console.log("entro a usseefect",actualizaritem)
if(actualizaritem){
    if(indexactulizar>=0){
  let productsactulizar=[...productosagregados]
  let canupdate=parseNumberCO(cantidadactulizar)
   let cosupudate=parseNumberCO(costoactulizar)
           productsactulizar=productsactulizar.map((item,index)=>{
    if(index===indexactulizar){
        return {...item,cantidadGlobal:Number(canupdate),costo:Number(cosupudate)}
    }else{
        return item
    }
  })
  settotalglobal(
  productsactulizar.reduce((acc, item) => acc + item.total, 0)
)
setproductosagregados(productsactulizar)
setindexactulizar(-1)
setactualizaritem(false)
setactualizar(false)
setindexactulizaricon(-1)
    }

}else{
    if(indexactulizar>=0){
        let total=0
  let productsactulizar=[...productosagregados]
  productsactulizar[indexactulizar].total=productsactulizar[indexactulizar].cantidadGlobal * productsactulizar[indexactulizar].costo
    productsactulizar=productsactulizar.map((item,index)=>{
    if(index===indexactulizar){
        return productsactulizar[indexactulizar]
    }else{
        return item
    }
  })
settotalglobal(
  productsactulizar.reduce((acc, item) => acc + item.total, 0)
)
  console.log("productos update",productsactulizar,indexactulizar)
setproductosagregados(productsactulizar)
setindexactulizar(-1)
setactualizar(false)
setindexactulizaricon(-1)
    }
  


}
},[actualizaritem,indexactulizar])

//actulizar total global
useEffect(()=>{
    let total=0
   productosagregados.forEach((item)=>{
   
    total+=item.total
   })
   
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
                    const nuevosProductos = await api.get(`variantes/listarInventarioBasicoentra?page=${0}&size=100&descripproduct=${descripcionproducto}&estadoproducto=${"ACTIVO"}&estadova=${1}&bodega=${bodegaseleccionada.toString()}&consultarentradasalida=${"SI"}`,{
            headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
            }});

                        setproductos(nuevosProductos.data.content)
    }
    const traerbodegas=async()=>{
          const apibodega=await api.get("bodegas/listar",{
                headers: {
                  'X-TenantID':"cavsystems", // suponiendo que data.db contiene el bodega de la base de datos
                }})

        setbodegas(apibodega.data.data)
    }

     useEffect(()=>{
       
       traerbodegas()
    },[])
    useEffect(()=>{
        if(descripcionproducto.trim()!=="" && bodegaseleccionada>0 ){
            cargarproductos()
        }else{
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
                                   const movi= e.target.value==="" ? 0:Number(e.target.value)
                                    switch (movi) {
                                        case 1:
                                            setmensajetipomovimiento("Entrada de inventario")
                                            break;
                                         case 2:
                                            setmensajetipomovimiento("Salida de inventario")
                                            break;

                                          case 3:
                                            setmensajetipomovimiento("Traslado de inventario")
                                            break;
                                    
                                        default:
                                             setmensajetipomovimiento("")
                                            break;
                                    }
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
         <span className="mensajetipomovimiento" >{mensajetipomovimiento}</span>
       </div>
     <div className="col-12 paddingcol12entrada">
         <div className="tabla-wrapper" >
                                                                  <CTable  
               
                       
                         
                         small
                         align="left" className="tablaterceros tablaentrada">
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
                                                                              
                                                                               <CTableHeaderCell scope="col" >
                                                                                  <div className="d-flex  justify-content-center flex-nowrap" style={{gap:"12px"  }} >
                                                                                    Acciones
                                                                                  </div>
                                                                                </CTableHeaderCell>
                                                       
                                                       
                                                                     
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
                                                                                  <input className="inputentradaitem"  disabled={index!==productosagregados.length-1} ref={(el) => {

    //guardamos la referncia del input en el ref
    inputRefs.current[index] = el
  }}
  onBlur={(e)=>{
       e.stopPropagation()
        setvisible(false)

    return
  }}
  onFocus={()=>{
     setvisible(false)
  }}
   onKeyDown={(e) => {
  if (e.key === "Enter") {
       const elementinput=document.getElementById(`inputcantidad${index}`)
                                                                                                                                                                                        elementinput?.focus()
  }
}}
 value={productosagregados[index].descripcion} onChange={(e)=>{
    setvisible(true)
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
                                                                                                                                                                          setproductosagregados(newdes)
                                                                                      setdescripcionproducto(e.target.value)
                                                                                     updatePosition(index)
                                                                                      
                                                                                                       const rect = e.target.getBoundingClientRect();
  setCoords({
    x: rect.left,
    y: rect.bottom,  // justo debajo del input                                     
    width: rect.width
  });
                                                                        }}/>
                                                                      

                                                                        

                                                                              {productos.length>0 && activeId !== null && visible &&
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
                                                                                         <li  onMouseDown={()=>{
                                                                                         
                                                                                           let productagregado=[...productosagregados]
                                                                                                                                                                                       productagregado=productagregado.map((item2,i)=>{
                                                                                             if(i===index){
                                                                                            
                                                                                                return {...item,cantidadGlobal:0,costo:item.costo,total:0}
                                                                                             } 
                                                                                             
                                                                                             return item2             
                                                                                            })
                                                                                                                                                                                        setproductosagregados(productagregado)
                                                                                            const elementinput=document.getElementById(`inputcantidad${index}`)
                                                                                                                                                                                       // elementinput?.focus()
                                                                                           //Esperar a que React pinte el input
                                                                                           //Usa requestAnimationFrame (mejor que setTimeout):
                                                                                           //Garantiza que el DOM ya existe
                                                                                  //Funciona con portales
                                                                                 // Funciona con refs dinámicos
                                                                                          requestAnimationFrame(() => {
  inputRefscantidad.current?.[index]?.focus()
})

                                                                                                
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
                                                                          
                                                                        <ProductoRowcantidad item={productosagregados[index]} index={index} setproductosagregados={setproductosagregados}   productosagregados={productosagregados} actualizar={actualizar} codigoactulizar={indexactulizaricon} inputrefcantidad={inputRefscantidad} setcanactu={setcantidadactulizar} />
                                                                          </div>
                                                                          </div>
                                                                        {/*productosagregados[index].cantidadGlobal*/}</CTableDataCell>
                                                                          <CTableDataCell >    <div className="row mx-0">
                                                                            <div className="col-12 position-relative">
                                                                          
                                                                        < ProductoRowcosto item={productosagregados[index]} index={index} setproductosagregados={setproductosagregados} productosagregados={productosagregados} actualizar={actualizar} codigoactulizar={indexactulizaricon} setcostoact={setcostoactulizar}   inputrefcosto={inputRefscantidadcosto}/>
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
                                                                                                                            
                                                                                                                              
                                                                                                                                     {  index!==indexactulizaricon&& <div className="col-6" style={{ maxWidth: 'fit-content' }} >
                                                                                                                                                               <CButton  className="buttoniconnormal" onClick={()=>{
                                                                                                                                                                setactualizar(true)
                                                                                                                                                                setindexactulizaricon(index)
                                                                                                                                                               }}>
                                                                                                                                     <Iconupdate  width={16} height={18} color={"#555"}/> 
                                                                                                                                 </CButton>
                                                                                                                              </div> }  

                                                                                                                                        {  index===indexactulizaricon&& <div className="col-6" style={{ maxWidth: 'fit-content' }} >
                                                                                                                                                               <CButton  className="buttoniconnormal" onClick={()=>{
                                                                                                                                                                setmensajeadvertencia(true)
                                                                                                                                                                setmensajeerror("¿ Desea Actualizar este item ?")
                                                                                                                                                                setFuncionDinamica(()=>{
                                                                                                                                                                    return ()=>{
                                                                                                                                                                        setmensajeadvertencia(false),
                                                                                                                                                                        setactualizaritem(true)
                                                                                                                                                                          setindexactulizar(index)
                                                                                                                                                                    }
                                                                                                                                                                })

                                                                                                                                                                   setFuncionDinamica2(()=>{
                                                                                                                                                                    return ()=>{
                                                                                                                                                                        setmensajeadvertencia(false),
                                                                                                                                                                        setactualizaritem(false)
                                                                                                                                                                          setindexactulizar(index)
                                                                                                                                                                    }
                                                                                                                                                                })
                                                                                                                                                               }}>
                                                                                                                                     <Iconguardar width={20} height={20} color={"#555"}/> 
                                                                                                                                 </CButton>
                                                                                                                              </div>   }
                                                                                                                             
                                                                                                                                <div className="col-6"  style={{ maxWidth: 'fit-content' }}  >
                                                                                                                                  <CButton  className="buttoniconnormal" onClick={()=>{
                                                                                                                                    setmensajeadvertencia(true)
                                                                                                                                    setindexeliminar(index)
                                                                                                                                    setmensajeerror("¿ Deseas eliminar este item ?")
                                                                                                                                    setFuncionDinamica(()=>{
                                                                                                                                        return ()=>{
                                                                                                                                            setmensajeadvertencia(false)
                                                                                                                                            seteliminar(true)
                                                                                                                                        }
                                                                                                                                    })

                                                                                                                                         setFuncionDinamica2(()=>{
                                                                                                                                        return ()=>{
                                                                                                                                            setmensajeadvertencia(false)
                                                                                                                                            seteliminar(false)
                                                                                                                                            setindexeliminar(0)
                                                                                                                                        }
                                                                                                                                    })
                                                                                                                                    
                                                                                                                                   
                                                                                                                                  }}  ><Iconeliminar  width={16} height={16} color={"#555"}/> </CButton>
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
            </button>           <span className="totalregistrosproduct" >Total: ${totalglobal.toLocaleString("es-CO", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })}</span>
                                                       
         </div>
             
        


           <div className="col-12 d-flex justify-content-center align-items-center containerguardarentrada flex-wrap  inputtextareaentrada" >
            <button className="importentrada">
                Importar
            </button>

                <button className="guardarentrada" onClick={()=>{


                    if(Tipomovimiento===0){
                        setmodalerror(true)
                        setmensajeerror("Especifica un movimiento puntual")
                         setFuncionDinamica(()=>{
                        return ()=>{
                            setmodalerror(false)
                          
                        }
                    })
                    return
                    }

                     if(bodegaseleccionada===0){
                        setmodalerror(true)
                        setmensajeerror("Selecciona una bodega")
                         setFuncionDinamica(()=>{
                        return ()=>{
                            setmodalerror(false)
                          
                        }
                    })
                    return
                    }
                    setmensajeadvertencia(true)

                    switch (Tipomovimiento) {
                        case 1:
                               setmensajeerror("Desea realizar esta entreda")
                            break;

                           case 2:
                               setmensajeerror("Desea realizar esta salida")
                            break;
                           case 2:
                               setmensajeerror("Desea realizar este traslado")
                            break;
                    
                        default:
                            break;
                    }
                 
                    setFuncionDinamica2(()=>{
                        return ()=>{
                            setmensajeadvertencia(false)
                            setguardar(false)
                        }
                    })

                    setFuncionDinamica(()=>{
                        return ()=>{
                            setmensajeadvertencia(false)
                            setguardar(false)
                        }
                    })
                }}>
                Guardar
            </button>
           </div>


           
        
        
        
    </div>

      {
                                 modaladvertencia && <Modalconfirmar tipoicon={"alerta"} texto={mensajeerror} boton3={true}  boton4={true} textoboton={"Aceptar"}  funcion={funcionDinamica} funcion2={funncionDinamica2}/>
                                 } 

       {
                                 modalerror && <Modalconfirmar tipoicon={"Error"} texto={mensajeerror} boton3={true}   textoboton={"Aceptar"}  funcion={funcionDinamica} />
                                 } 
    </div>
    </> );
}

export default Entradainventario;