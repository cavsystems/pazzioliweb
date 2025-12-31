import { CButton, CFormFloating, CFormLabel, CFormSelect, CInputGroup, CModal, CModalBody, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import { Controller, FormProvider, useForm, useFormContext } from "react-hook-form";
import Ojoquetodolove from "../../../../icons/ojoquetodolove";
import { useEffect, useRef, useState } from "react";
import Iconfoto from "../../../../icons/iconfoto";
import Downloadimg from "../../../../icons/icondonwloadimg";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";
import api from "../../../../apicofig";
import Iconupdate from "../../../../icons/iconupdate";
import Iconeliminar from "../../../../icons/iconeliminar";
import Modalconfirmar from "../../../../components/alertconfimacion";
import { elGR } from "@mui/x-charts/locales";

interface Variantedfault {
 descripcion:string,
 imagen:string
}

interface listaprecio {
   precioId:number, descripcion?: string
}

interface precioob {
  precioId:number, valor?: string
}
function Formprobasico({multivariable,setmultivariable,style,productoid,setproductoid,product, setproduct,preciosva,setpreciosva,estadoproducto,setestadoproducto,variantes,setVariantes,submitForm}:any) {
     const [unidadmedida,setunidadmedida]=useState<{descripcion
: 
string,
sigla
: string
unidadMedidaId
: number}[]>([])
      const [impuesto,setimpuesto]=useState<{base
: 
number,
codigo
: 
number,
estado
: 
string,
nombre
: 
string,
sigla
: 
string,
tarifa
: 
number}[]>([])
      const [lineas,setlineas]=useState<{descripcion
: 
string,
id
: 
number}[]>([])
      const [grupo,setgrupo]=useState<{descripcion
: 
string
id
: number
      }[]>([])
    const fileInputRef = useRef<HTMLInputElement | null>(null);
     const fileimagen= useRef<HTMLInputElement | null>(null);
     const [funncionDinamica2,setfunncionDinamica2]= useState<() => void>(() => {});
     const [confirmaractulizacion,setconfirmaractulizacion]=useState<boolean>(false)
       const [confirmareliminacion,setconfirmareliminacion]=useState<boolean>(false)
          const [codigoeliminar,setcodigoeliminar]=useState<number>(0)
    const [imagenproduct,setimagenproduct]=useState<string | null>(null)
    const [substrinfinal,setsubstringfinal]=useState<number>(0)
    const [actulizar,setactulizar]=useState<boolean>(false)
     const [codigoactulizar,setcodigoactulizar]=useState<number>(0)
     const [modaladvertencia,setmodaladvertencia]=useState<boolean>(false)
    const [mensajeerror,setmensajeerror]=useState<string>("")
   const [listaprecios,setlistaprecio]=useState<listaprecio[]>([])
   const [listaprecioson,setlistaprecioon]=useState<precioob[]>([])
   const [listaprecioglobal,setlistaprecioglobal]=useState<precioob[]>([])
   const [numeroinputprecio,setnumeroinputprescio]=useState<number>(0)
   const [tipoproducto,setTipoproducto]=useState<{tipoProductoId: number, nombre: string, descripcion: boolean, estado: true}[]>([])
  const [funcionDinamica, setFuncionDinamica] = useState<() => void>(() => {});
   const [precioactual,setprecioactual]=useState<precioob>({
    precioId:0,
    valor:""
   })
     const [guardar,setguardar]=useState<boolean>(false)
    const [responsivemodalva,setresponsivemodalva]=useState<boolean>(false)
  const handleDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {  if (typeof reader.result === "string") {
    setimagenproduct(reader.result);
  }
    
     // actualizarVariante(index, "imagen", reader.result as string);
    };
    reader.readAsDataURL(file);
  }
};


const traerinformacion=async()=>{
  const unidadmedidas=await api.get(`unidadesMedida/listar`,{
      headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
            }
  })


  const impuestoss=await api.get("empresa/traerimpuestos",{
      headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
            }
  })
  const lineas=await api.get(`lineas/listar`,{
      headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
            }
  })
 const grupos=await api.get(`grupos/listar`,{
      headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
            }
  })


setimpuesto(impuestoss.data.datosimpuestos)
 setunidadmedida(unidadmedidas.data.content)
 setgrupo(grupos.data.content)
 setlineas(lineas.data.content)
  

}

const eliminarprecio=(precioid:number)=>{

setcodigoeliminar(precioid)
setmodaladvertencia(true)
setmensajeerror("Desea eliminar este item")
   setFuncionDinamica(()=>{
                                             return ()=>{ setmensajeerror("")
                                            setconfirmareliminacion(true)
                                            setmodaladvertencia(false)
                                            }
                                          })

    setfunncionDinamica2(()=>{
                                             return ()=>{ setmensajeerror("")
                                            setconfirmareliminacion(false)
                                            setmodaladvertencia(false)
                                            }
                                          })
}

const actulizarprecio=async()=>{
 console.log("entro a confirmar actulizacion actulizo",product)
    if( codigoactulizar && codigoactulizar>0){
  
      const precios=getValues("listaprecios")
         let variableactulizar=listaprecioson.find(item=>{
                                              return item.precioId === codigoactulizar
                                            })

                                                console.log("entro a actulizar precio",codigoactulizar,actulizar,variableactulizar)
        let varianteactback=listaprecioglobal.find(item=>  item.precioId === codigoactulizar)
                                          if(actulizar && productoid>0 ){ 
                                        if(varianteactback){
                                            const actulizarvaribles= await api.put(`precios-producto-variante/actualizar`,[variableactulizar],{ headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
            }})

                                               console.log("variables actulizar realizado",actulizarvaribles)
                                        }else{
                                           const preciosup= precios.map(item=>{
                                                if(item.precioid===variableactulizar?.precioId){
                                                  return {...item,variableactulizar }
                                                }
                                                return item
                                            })

                                            setValue("listaprecios",preciosup)
                                        }
                                              
                                           setconfirmaractulizacion(false)
                                          }else{
                                         
                                             const preciosup= precios.map(item=>{
                                                if(item.precioid===variableactulizar?.precioId){
                                                  return {...item,variableactulizar }
                                                }
                                                return item
                                            })
 
                                          }
                                         /*setguardar(false)
                                          const precios=getValues("listaprecios")

                                          precios.push(precioactual)
                                             setValue("listaprecios",  precios)
                                             setlistaprecioon(precios)
                                             const list=[...listaprecios]
                                             
                                          console.log(precios)*/
                                          setprecioactual({precioId:0,valor:""})
                                                 setguardar(false)
                                          setactulizar(false)
                                          setcodigoactulizar(0)
                                          if(listaprecioson.length<numeroinputprecio){
                                           setguardar(true)
                                          }
    }else{
      setactulizar(false)
      setguardar(true)
    }
}


 const eliminardesdedb=async (eliminar:number)=>{
  const elimanapre=await api.delete(`precios-producto-variante/${codigoeliminar}`,{
      headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
            }
  })

  if(elimanapre.status===200){
 console.log("se elimino",elimanapre)
     const listapreciolista=getValues("listaprecios")
             console.log("codigo eliminar",eliminar,listapreciolista)

         const precioeliminado= listapreciolista.filter(item=>{
            return item.precioId!==eliminar
          })

          setValue("listaprecios",precioeliminado)
          setlistaprecioon(precioeliminado)
          setnumeroinputprescio(precioeliminado.length)
          setguardar(false)
          setactulizar(false)
          setconfirmareliminacion(false)
  }
 

 }
useEffect(()=>{
  if(confirmaractulizacion){
   actulizarprecio()
  }else{
    
    if(confirmareliminacion){
         
            if(codigoeliminar){
                  let variableactulizar=listaprecioson.find(item=>{
                                              return item.precioId === codigoeliminar
                                            })
        let varianteactback=listaprecioglobal.find(item=>  item.precioId === codigoeliminar)
        console.log("codigo eliminar antes",codigoeliminar,varianteactback,actulizar)
    21
         if(varianteactback){


          eliminardesdedb(codigoeliminar)
        

         }else{
             const listapreciolista=getValues("listaprecios")
             console.log("codigo eliminar",codigoeliminar,listapreciolista)

         const precioeliminado= listapreciolista.filter(item=>{
            return item.precioId!==codigoeliminar
          })

         
          setValue("listaprecios",precioeliminado)
          setlistaprecioon(precioeliminado)
          setnumeroinputprescio(precioeliminado.length)
          setguardar(false)
          setactulizar(false)
          setconfirmareliminacion(false)
         }

      
            }else{
              setnumeroinputprescio(prev=> prev-1)
              setguardar(false)
            }
       /* */
    }else{

    }
   
 
  }
},[confirmaractulizacion,confirmareliminacion])
const traerlistasprecios=async()=>{
  const listaprecios= await api.get(`precios/listar`,{
            headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
            }})

 setlistaprecio(listaprecios.data.content)

}

const traertipoproducto=async()=>{
    const tipoproducto= await api.get(`tipo-producto/listar`,{
            headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
            }})

            setTipoproducto(tipoproducto.data.content)
            console.log("tipo producto",tipoproducto)
}
    const { register,control,setValue,getValues,reset, formState: { errors } } =useFormContext();
useEffect(() => {
  traerinformacion()
  traerlistasprecios()
  traertipoproducto()
setlistaprecioon(getValues("listaprecios"))
  console.log("lista",getValues("listaprecios"))
  setnumeroinputprescio(getValues("listaprecios").length)
  const prevent = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };
    const handleResize = () => {
   
    if (window.innerWidth >= 774    ) {
   
      setsubstringfinal(15)
    
     
    
    }
    else if(window.innerWidth >=768  &&  window.innerWidth <=773){
      console.log("es menor a 768")
  setsubstringfinal(13)
    }
    else if(window.innerWidth <768  && window.innerWidth>=720 ){
      console.log("es menor a 719")
      setsubstringfinal(70)
    }else if(window.innerWidth <=718 && window.innerWidth >=588){

setsubstringfinal(40)
    }else if(window.innerWidth <=588){

setsubstringfinal(15)
    }
  
  };

  window.addEventListener("dragover", prevent);
  window.addEventListener("drop", prevent);
 window.addEventListener('resize',handleResize)
  return () => {
    window.removeEventListener("dragover", prevent);
    window.removeEventListener("drop", prevent);
     window.removeEventListener("resize",handleResize)
  };
}, []);

const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
  e.preventDefault();
};
    const handleClick = () => {
  
      fileInputRef.current?.click();
    };
     const [rotate,setrotate]=useState(true);
       const [archivotitulo,setarchivotitulo]=useState("");
                 

                         const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e)
    const file = e.target.files?.[0];
    console.log("archivo seleccionado",file)
    if (!file) return;

    // Validar formato
    if (!["application/pdf"].includes(file.type)) {
      alert("Solo se permiten imágenes JPG, PNG o BMP");
      return;
    }

    // Validar tamaño (ejemplo: máx 300 KB)
    if (file.size > 300 * 1024) {
      alert("El archivo no puede superar los 300 KB");
      return;
    }

    // 3. Validar dimensiones
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
    

           console.log( "nombre archivo",file.name)
     
            setarchivotitulo(file.name)
          
      
      
    };
    reader.readAsDataURL(file);
    setValue("imagenproducto", file)
    // Guardar archivo en el form
    //setValue("archivoLogo", file);
  };

  const establecerpreciosupdate= async()=>{
const productbodega=await api.get(`precios-producto-variante/variante/${preciosva}`,{
            headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
            }})



            console.log("precios variantes updata",productbodega)
            setlistaprecioglobal(productbodega.data.content)
            setlistaprecioon(productbodega.data.content)
            setValue("listaprecios",productbodega.data.content)
            setnumeroinputprescio(productbodega.data.content.length)
  }
 useEffect(()=>{
if(preciosva>0){
   establecerpreciosupdate()

}
 },[preciosva])
     useEffect(()=>{
                  if(productoid>0 && product  && grupo.length > 0  && unidadmedida.length > 0 && impuesto.length > 0 && lineas.length > 0 && tipoproducto.length > 0){
                      const inud=unidadmedida.find(item=> item.sigla === product.unidadMedida
)                     


                  console.log("grupo id",product)
                   console.log("und medida",inud)
                    let descripcionfinal
                   let indice = product.descripcion.indexOf("-");
                   if(indice &&  product.manejavariante){
                     descripcionfinal=product.descripcion.substring(0,indice)
                   }else{
                     descripcionfinal=product.descripcion
                   }
                 
                           reset({
        ...getValues(),
        grupo: product.grupoid.toString(),
          tipoproducto:product.tipoproductid.toString()
,
         codigo:product.codigoContable,
        descripcion:descripcionfinal,
         referencia:product.referencia,
          unidadmedida:inud?.unidadMedidaId,
          departamento:"",
          impuesto:product.impuestoid,
         codigobarra:product.codigoContable,
          costo:product.costo,
        nanifesto:"",
          linea:product.lineaid,
          
      });
      console.log("estado producto",product.estado)
      setestadoproducto(product.estado==="ACTIVO" ? true:false)
setmultivariable(product.manejavariante)
      
                  }
      
          },[productoid,product,grupo,unidadmedida,impuesto,lineas,tipoproducto])
    return (  <>
      <div  className="row containertipospro" style={{padding:"0px 20px 0px 20px",display:`${style}`}}>
                               
<div className="col-12 " >
                                  <div className="inputprocttex" style={{paddingTop:"15px" ,marginLeft:"5px"}}>
                                 
                           
                                      <label form="slectform1" className="titulospro"  style={{padding:"0px 1px 12px 1px",marginLeft:"0"}} >{estadoproducto ? "Inativar producto" : "Activar producto"}</label>
                                     <div className={`${estadoproducto ? "toglemultirigh":"toglemulti"}`} onClick={()=>{
                                        setestadoproducto(!estadoproducto)
                                        console.log("cambio de estado producto",productoid)
                                        if(productoid>0){
                                          if(estadoproducto){
                                            console.log("activo a inactivo",variantes)
                                            const newvariantes=variantes.map((item:any)=>{
                                              return {...item,estado:"INACTIVO"}
                                            })
                                            setVariantes(newvariantes)
                                          }else{
                                                 console.log("activo a inactivo",variantes)
                                            const newvariantes=variantes.map((item:any)=>{
                                              return {...item,estado:"ACTIVO"}
                                            })
                                            setVariantes(newvariantes)
                                          }
                                        }else{
                                        
                                          if(estadoproducto){
                                            console.log("activo a inactivo",variantes)
                                            const newvariantes=variantes.map((item:any)=>{
                                              return {...item,estado:"INACTIVO"}
                                            })
                                            setVariantes(newvariantes)
                                          }else{
                                                 console.log("activo a inactivo",variantes)
                                            const newvariantes=variantes.map((item:any)=>{
                                              return {...item,estado:"ACTIVO"}
                                            })
                                            setVariantes(newvariantes)
                                          }
                                        }
                                      }}>
                                      <div className={`${estadoproducto ? "circulotoglerigh":"circulotogle"}`} onClick={()=>{
                                        setestadoproducto(!estadoproducto)
                                      }}></div>
                                     </div>
                                    </div> </div>         
                            
                            <div className="col-12  col-md-6 column-gap-3 "  >
                               
                             
                             
                            <div className="inputprocttex" style={{paddingTop:"12px"}}>
                              {
                                errors.tipoproducto ? <label form="slectform1" className="titulosproerror" style={{padding:"0px 1px 12px 1px"}} >Tipo de producto *</label>:<label form="slectform1" className="titulospro" style={{padding:"0px 1px 12px 1px"}} >Tipo de producto *</label>
                              }
                                  
                                    <select className={`selctproduct ${!estadoproducto && productoid>0 ? "cllassinputdesabled" : ""}`}  disabled={!estadoproducto && productoid>0} {...register("tipoproducto",{required:true})} >
                              
                                {
                                  tipoproducto.map((item)=>{
                                    return <>
                                        <option value={item.tipoProductoId} id="slectform1">{item.nombre}</option>
                                    </>
                                  })
                                }
                                 
                               </select>
                            </div>
                         
                            
                            
                       
  

                            
                            </div>

                                <div className="col-12 col-md-6 column-gap-3 paddingleftformpro " >
                                  
                             
                            <div className="inputprocttex" style={{paddingTop:"12px"}}>
                              {
                                errors.codigo ?    <label form="inputdescrip" className="titulosproerror"  style={{padding:"0px 1px 12px 1px"}}  >Código *</label>: <label form="inputdescrip" className="titulospro"  style={{padding:"0px 1px 12px 1px"}}  >Código *</label>
                              }
                                 <input type="text"  id="inputdescri"  className={`inputproduct ${!estadoproducto && productoid>0 ? "cllassinputdesabled" : ""}`}  disabled={!estadoproducto && productoid>0}  style={{width:'100%'}}  {...register("codigo",{required:true})}/>
                            </div>
                           
                             
                            
                            
                       
  

                            
                            </div>

                              

                            <div className="col-12">
                                <div className="d-flex flex-column" style={{paddingTop:"12px"}}>
                                 {
                                errors.descripcion ? <label form="inputdescrip" className="titulosproerror"  style={{padding:"0px 1px 12px 1px"}} >Descripción *</label>:<label form="inputdescrip" className="titulospro"  style={{padding:"0px 1px 12px 1px"}} >Descripción *</label>
                                 }  
                           
                                 
                                 <input type="text"  id="inputdescri" className={`inputproduct ${!estadoproducto && productoid>0 ? "cllassinputdesabled" : ""}`}  disabled={!estadoproducto && productoid>0} style={{width:'100%'}} {...register("descripcion",{required:true})}/>
                               </div>
                               </div>

                              <div className="col-12 col-md-6 column-gap-3" >
                                 <div className="inputprocttex" style={{paddingTop:"12px"}}>
                                 <label form="inputdescrip" className="titulospro"  style={{padding:"0px 1px 12px 1px"}} >Referencia</label>
                                 <input type="text"  id="inputdescri" className={`inputproduct ${!estadoproducto && productoid>0 ? "cllassinputdesabled" : ""}`}  disabled={!estadoproducto && productoid>0} style={{width:'100%'}}  {...register("referencia")}/>
                            </div>
                              </div>


                                <div className="col-12  col-md-6 column-gap-3 paddingleftformpro"  >
                                  <div className="inputprocttex" style={{paddingTop:"12px"}}>
                                 {
                                errors.unidadmedida ?   <label form="slectform1" className="titulosproerror"  style={{padding:"0px 1px 12px 1px"}} >Unidad de medida *</label>: <label form="slectform1" className="titulospro"  style={{padding:"0px 1px 12px 1px"}} >Unidad de medida *</label>


                                 }
                          
                               <select  className={`selctproduct  ${!estadoproducto && productoid>0 ? "cllassinputdesabled" : ""}`}  disabled={!estadoproducto}  {...register("unidadmedida",{required:true})}>
                                <option value={""} id="slectform1" >Elige una opcion</option>
                                {
                                  unidadmedida.map((item=>{
                                    return <>
                                    <option value={item.unidadMedidaId} id="slectform1">{item.descripcion}</option>

                                    </>
                                  }))
                                }
                               </select>



                               
                             </div>
                                </div>


                            
                            
                            <div className="col-12 col-md-6 " >
                                  <div className="inputprocttex" style={{paddingTop:"12px"}}>
                              <label form="slectform1" className="titulospro"  style={{padding:"0px 1px 12px 1px"}} >Impuesto *</label>
                               <select   className={`selctproduct ${!estadoproducto && productoid>0 ? "cllassinputdesabled" : ""}`}  disabled={!estadoproducto} {...register("impuesto",{required:true})}  >
                                <option value={""} id="slectform1">Elige una opcion</option>
                                 {
                                  impuesto.map(item=> (<><option value={item.codigo}>{item.nombre}  {item.tarifa<0 ?  "":`${item.tarifa}%`}</option></>))
                                }
                               </select>



                               
                             </div>
                            </div>

                            <div className="col-12 col-md-6 inputconcondigoba" >
                                
                             
                            <div className="inputprocttex inputcodigosbarra paddingleftformpro"   >
                                 <label form="inputdescrip" className="titulospro"  style={{padding:"0px 1px 12px 1px"}} >Codigo de barras</label>
                                 <input   type="text"  id="inputdescri"  className={`selctproduct ${!estadoproducto && productoid>0 ? "cllassinputdesabled" : ""}`} disabled={!estadoproducto && productoid>0}   style={{width:'100%'}} {...register("codigobarra")}/>
                               
                            </div>
                          
                       
  

                            
                            </div>

                             <div className="col-12 col-md-6 column-gap-3 " >
                                 <div className="inputprocttex" style={{paddingTop:"12px"}}>
                                 <label form="inputdescrip" className="titulospro"  style={{padding:"0px 1px 12px 1px"}} >Costo</label>
                                 <input type="text"  id="inputdescri" className={`selctproduct ${!estadoproducto && productoid>0 ? "cllassinputdesabled" : ""}`}  disabled={!estadoproducto && productoid>0} style={{width:'100%'}} {...register("costo")}/>
                            </div>
                              </div>

                                 <div className="col-12 col-md-6 column-gap-3 paddingleftformpro" >
                                 <div className="inputprocttex" style={{paddingTop:"12px"}}>
                                 <label form="inputdescrip" className="titulospro"  style={{padding:"0px 1px 12px 1px"}}>Manifiesto</label>
                                    <div  style={{width:"100%"}}>
                    <div style={{width:"100%"  ,display:'flex' ,border:'1px solid #D3D4D4',  borderRadius: '6px' ,gap:'12px'}}  className={` ${!estadoproducto && productoid>0 ? "cllassinputdesabled" : ""}`}  >
                    <button  type="button"  style={{    
    height: '40px',
    border: 'none',
    borderLeft: '1px solid  #D3D4D4',
    borderRadius: '6px',
     textAlign: 'left',
    font: 'normal normal normal 14px / 19px Open Sans',
    letterSpacing: '0px',
    color:'#555555'}} onClick={handleClick} disabled={!estadoproducto && productoid>0}>Archivo manifiesto</button> 
       <span  style={{
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}}  >{ archivotitulo.length>=20 ? archivotitulo.substring(0,substrinfinal)+"...":archivotitulo}</span>

                     </div>

                      

        <input
        type="file"
        id="formFile"
        hidden
           ref={fileInputRef}
        onChange={handleFileChange}
      />

                </div>

                            </div>
                              </div>



                               <div className="col-12 col-md-6 " >
                                  <div className="inputprocttex" style={{paddingTop:"12px"}}>
                                 {
                                errors.linea ? <label form="inputdescrip" className="titulosproerror"  style={{padding:"0px 1px 12px 1px"}} >Linea *</label>:<label form="inputdescrip" className="titulospro"  style={{padding:"0px 1px 12px 1px"}} >Linea *</label>
                                 }  
                           
                             
                               <select className={`selctproduct ${!estadoproducto && productoid>0 ? "cllassinputdesabled" : ""}`}  disabled={!estadoproducto && productoid>0}{...register("linea",{required:true})}>
                                <option value={""} id="slectform1">Elige una opcion</option>
                                {
                                  lineas.map(item=> (<><option value={item.id}>{item.descripcion}</option></>))
                                }
                               </select>



                               
                             </div>
                            </div>
                             <div className="col-12 col-md-6  paddingleftformpro" >
                                  <div className="inputprocttex" style={{paddingTop:"12px"}}>
                                          {
                                errors.grupo ? <label form="inputdescrip" className="titulosproerror"  style={{padding:"0px 1px 12px 1px"}} >Grupo *</label>:<label form="inputdescrip" className="titulospro"  style={{padding:"0px 1px 12px 1px"}} >Grupo *</label>
                                 }  
                            
                               <select className={`selctproduct ${!estadoproducto && productoid>0 ? "cllassinputdesabled" : ""}`}  disabled={!estadoproducto && productoid>0} {...register("grupo",{required:true})}>
                                <option value={""} id="slectform1">Elige una opcion</option>
                                 {

                                  grupo.map(item=> (<><option value={item.id}>{item.descripcion}</option></>))
                                }
                               </select>



                               
                             </div>
                            </div>

                              
 <div className="col-12 col-md-6 " >
                                  <div className="inputprocttex" style={{paddingTop:"15px" ,marginLeft:"5px"}}>
                                 
                           
                                      <label form="slectform1" className="titulospro"  style={{padding:"0px 1px 12px 1px",marginLeft:"0"}} >Multivariante *</label>
                                     <div className={`${multivariable ? "toglemultirigh":"toglemulti"}`} onClick={()=>{
                                      if (!estadoproducto && productoid>0){
                                        return
                                      }
                                        setmultivariable(!multivariable)
                                      }}>
                                      <div className={`${multivariable ? "circulotoglerigh":"circulotogle"}`} onClick={()=>{
                                                if (!estadoproducto && productoid>0){
                                        return
                                      }
                                        setmultivariable(!multivariable)
                                      }}></div>
                                     </div>
                                    </div> </div>
                              
 

                            <div className="col-12">

                          
                             <div className="inputprocttex" style={{width:"100%", paddingTop:"12px"}}>
                              <div className="d-flex justify-content-between"> <label form="slectform1" className="titulospro titulolista"  style={{padding:"0px 1px 12px 1px"}} >Lista  de precios</label>   <img  src="imgs/togle.svg"  className={` ${rotate ? 'rotate':''} `}  onClick={()=>{
                              setrotate(!rotate);
                              }}/> </div>
                              
                               
                              
                               



                               
                             </div>

                             
       
                                  
                             

                              <div className={`flex-grow-1 ${rotate ? '':'displaynonelist'}`} style={{paddingTop:"12px"}}>

                             <div className={`inputprocttex justify-content-center align-items-center row-gap-3`}>
                              
                              
                               
                                <div className="tablalistaprecio">
                                <CTable  

        
          
          small
          align="left" className="tablaproducts tablaperzonalinalida1">
                                                  
                                                  <CTableHead>
                                                    <CTableRow>
                                                    
                                                        <CTableHeaderCell scope="col">Tipo precio</CTableHeaderCell>
                                                    <CTableHeaderCell scope="col" >Valor</CTableHeaderCell>
                                                 
                                                       <CTableHeaderCell scope="col" >Acciones</CTableHeaderCell>
                                        
                                                      
                                                    </CTableRow>
                                                  </CTableHead>
                                                  <CTableBody>
                                                  
                                                  
                                                 
                      
                                      
                                         
                                            
                                            { Array.from({length: numeroinputprecio}).map((_, index) => ( 
                                            
                                                     <CTableRow>
                                               
                                                      <CTableDataCell>   <select className="iteminput1"   value={listaprecioson[index]?.precioId ?? precioactual.precioId} onChange={(e)=>{
                                                      console.log(e.target.value)
                                                            if(listaprecioson[index]?.precioId===Number(e.target.value)){
                                                              return
                                                            }
                                                            const pre=getValues("listaprecios")
                                                            const lista=pre.some(item=> item.precioId===Number(e.target.value))
                                                            console.log("lista precio onchange", lista)
                                                            if(lista){
                                                             
                                                              setmensajeerror("Este precio ya ha sido seleccionado")
                                                          setFuncionDinamica(() => () => setmensajeerror(""));
                                                        
                                                           e.target.value=""

                                                            }else{
                                                              console.log("precio actual")
                                                            setprecioactual(prev=> ({...prev,precioId:Number(e.target.value)}))
                                                            }

                                                           
                                                      }} disabled={numeroinputprecio>getValues("listaprecios").length && index!=numeroinputprecio-1}>
                                                           <option value={""} id="slectform1">Elige una opcion</option>
                                {
                                  listaprecios.map((item)=>{
                                    return <>
                                          <option value={item.precioId} id="slectform1">{item.descripcion}</option>
                                    </>
                                  })
                                }
                             
                                 
                               </select></CTableDataCell>
                                      <CTableDataCell><input placeholder="0"  value={listaprecioson[index]?.valor ?? precioactual.valor}  disabled={ !listaprecioson[index]?.precioId &&
    actulizar === true &&
    codigoactulizar !== listaprecioson[index]?.precioId
}className="iteminput1"   onChange={(e)=>{
                      console.log("mensaje condicion",listaprecioson[index]?.precioId &&
    actulizar === true &&
    codigoactulizar !== listaprecioson[index]?.precioId )
   
if(!(listaprecioson[index]?.precioId &&
    actulizar === true &&
    codigoactulizar !== listaprecioson[index]?.precioId)){
          if(  listaprecioson &&
  listaprecioson[index] &&
  listaprecioson[index].precioId !== undefined ){
                                                       const lista=[...listaprecioson]
                                                       lista[index].valor=e.target.value     
                                                     
                                                       setlistaprecioon(lista)
                                                       return
                                                             }
  
                                          setprecioactual(prev=> ({...prev,valor:e.target.value}))
    }else{

    }
                         
                                      }}/></CTableDataCell>
                                    
                                      <CTableDataCell>
                                          <div className="d-flex flex-nowrap" style={{gap:"12px"  }} >
                                                                                                   <div className="col-6" style={{ maxWidth: 'fit-content' }} >
                                                                                                       <CButton  className="buttoniconnormal"  onClick={()=>{
                                                                                                                                                  if(!estadoproducto && productoid>0){
                                            return
                                          }
                                                                                                        setactulizar(true)
                                                                                                        setcodigoactulizar(listaprecioson[index]?.precioId)
                                                                                                       }}>
                                                                                                         <Iconupdate  width={16} height={18} color={"#555"}/> 
                                                                                                       </CButton>
                                                                                                   </div>

                                                                                                          <div   style={{ maxWidth: 'fit-content' }} >
                                                                                                                                                                                                                                          <CButton  className="buttoniconnormaleliminar"  onClick={()=> {
                                                                                                                                                                                                                                                  if(!estadoproducto && productoid>0){
                                                                                                                                                                                                                                                         return
                                                                                                                                                                                                                                                                   }
                                                                                                                                                                                                                                            eliminarprecio(listaprecioson[index]?.precioId)
                                                                                                                                                                                                                                            }}>      <Iconeliminar  width={16} height={16} color={"#555"} />  </CButton>
                                                                                                                                                                                 </div>  
                                                                                                  
                                                </div>
                                      </CTableDataCell>
                                            
                                      
                                              </CTableRow>

                                        ))}
                                              
                                                
                                               
                            
                                              
                                    
                                        
                                      
                                                    
                        
                                                      
                                                
                                                     
                                                  </CTableBody>
                                               
                                                </CTable>
                                                </div>
                               
                                
                                       {
                                        !guardar && !actulizar && <button type="button" className="botoncontinuarguardar botonagregarcon"  key="guardar"  onClick={()=>{
                                          if(!estadoproducto && productoid>0){
                                            return
                                          }
                                        setnumeroinputprescio(prev=> prev+1)
                                        setguardar(true)
                                        console.log("precio actual",precioactual,listaprecios,listaprecioson)
                                         setprecioactual({precioId:0,valor:""})
                                        }} >Agregar</button>  
                               
                                       }

                                       {
                                        guardar &&  !actulizar &&  <button className="botoncontinuarguardar" type="button"  key="guardar" onClick={()=>{
                                          
                                          setguardar(false)
                                          const precios=getValues("listaprecios")
                                                      
                                          precios.push(precioactual)
                                             setValue("listaprecios",  precios)
                                             setlistaprecioon(precios)
                                             const list=[...listaprecios]
                                             
                                          console.log(precios)
                                          setprecioactual({precioId:0,valor:""})

                                        }}>Guardar</button> 
                                       }



                                        {
                                        actulizar &&  <button className="botoncontinuarguardar" type="button"  key="guardar" onClick={async ()=>{
                                         setmensajeerror("Seguro desea actulizar el precio")
                                         setmodaladvertencia(true)
                                          setfunncionDinamica2(()=>{
                                           return ()=>{ console.log("funciones modla actuliza")
                                            setmensajeerror("")
                                            setconfirmaractulizacion(false)
                                            setcodigoactulizar(0)
                                            setactulizar(false)
                                            setmodaladvertencia(false)
                                            console.log(getValues("listaprecios"))
                                              setlistaprecioon(getValues("listaprecios"))
                                              setValue("listaprecios",getValues("listaprecios"))
                                                  setnumeroinputprescio(numeroinputprecio)
                                               }
                                   
                                          })

                                          setFuncionDinamica(()=>{
                                             return ()=>{ setmensajeerror("")
                                            setconfirmaractulizacion(true)
                                            setmodaladvertencia(false)
                                            }
                                          })
                                        }}>Actulizar</button> 
                                       }
                               
                                   {
                       modaladvertencia && <Modalconfirmar tipoicon={"alerta"} texto={mensajeerror} boton3={true}  boton4={true} textoboton={"Aceptar"}  funcion={funcionDinamica} funcion2={funncionDinamica2}/>
                       } 
                          
                                   {
                       modaladvertencia && <Modalconfirmar tipoicon={"alerta"} texto={mensajeerror} boton3={true}  boton4={true} textoboton={"Aceptar"}  funcion={funcionDinamica} funcion2={funncionDinamica2}/>
                       } 
                             </div>

                             
                            </div>
  

                            
                          


                             
                            
  

                            
                            </div>

                            
                        
                                 
                        </div>


                         { !multivariable && <div className={`${style==="none"  ? "containernone":"d-flex justify-content-center column-gap-3 flex-wrap"}`} style={{padding:"15px 15px 0px 15px"   ,display:`${style}`}}>
                           
                              <div
                                           onClick={() => fileimagen.current?.click()}
                                               onDrop={(e) => handleDrop(e, 0)}     
                            
                              onDragOver={handleDragOver}
                              style={{
                                width: "200px",
                                height: "200px",
                                background: "#F3F4F7",
                                borderRadius: "6px",
                                position: "relative",
                                overflow: "hidden",
                                border: "2px dashed #bbb",
                                cursor: "pointer"
                              }}
                              className="d-flex justify-content-center align-items-center"
                            >
                              {imagenproduct ? (
                                <img
                                  src={imagenproduct}
                                  alt="Preview"
                                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                              ) : (
                                <>
                                  <Iconfoto width={100} height={100} color={"#555"} />
                                  <div className="icondown">
                                    <Downloadimg width={40} height={40} color={"#555"} />
                                  </div>
                                </>
                              )}
                                <input
                                       ref={fileimagen}
                                        type="file"
                                        accept="image/*"
                                        style={{ display: "none" }}
                                        onChange={(e) => {
                                          const file = e.target.files?.[0];
                                            setValue("imagenproducto", file)
                                          if (file) {
                                            const reader = new FileReader();
                                            reader.onload = () => {
                                          setimagenproduct(reader.result as string)
                                            };
                                            reader.readAsDataURL(file);
                                          }
                                        }}
                                      />
                            </div>
                       {
                        mensajeerror!=="" && <Modalconfirmar tipoicon={"Error"} texto={mensajeerror} boton3={true} textoboton={"Aceptar"}  funcion={funcionDinamica}/>
                       } 

                     
                         </div>}
    </>);
}

export default Formprobasico;

