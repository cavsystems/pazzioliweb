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
function Formprobasico({multivariable,setmultivariable,style}:any) {
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
    const [imagenproduct,setimagenproduct]=useState<string | null>(null)
    const [substrinfinal,setsubstringfinal]=useState<number>(0)
    const [mensajeerror,setmensajeerror]=useState<string>("")
   const [listaprecios,setlistaprecio]=useState<listaprecio[]>([])
   const [listaprecioson,setlistaprecioon]=useState<precioob[]>([])
   const [numeroinputprecio,setnumeroinputprescio]=useState<number>(0)
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
  console.log("unidades medidas",unidadmedidas)
  console.log("lineas",lineas)
  console.log("grupos",grupos)
  console.log("impuestos",impuestoss)

}

const traerlistasprecios=async()=>{
  const listaprecios= await api.get(`precios/listar`,{
            headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
            }})

 setlistaprecio(listaprecios.data.content)
}
    const { register,control,setValue,getValues, formState: { errors } } =useFormContext();
useEffect(() => {
  traerinformacion()
  traerlistasprecios()
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
     const [rotate,setrotate]=useState(false);
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
    return (  <>
      <div  className="row containertipospro" style={{padding:"0px 20px 0px 20px",display:`${style}`}}>
                               
                             
                            
                            <div className="col-12  col-md-6 column-gap-3 "  >
                               
                             
                             
                            <div className="inputprocttex" style={{paddingTop:"12px"}}>
                                  <label form="slectform1" className="titulospro" style={{padding:"0px 1px 12px 1px"}} >Tipo de producto *</label>
                                    <select className="selctproduct" {...register("tipoproducto",{required:true})} >
                                <option value={""} id="slectform1">Elige una opcion</option>
                                   <option value={"1"} id="slectform1">Servicio</option>
                                    <option value={"2"} id="slectform1">Producto</option>
                               </select>
                            </div>
                         
                            
                            
                       
  

                            
                            </div>

                                <div className="col-12 col-md-6 column-gap-3 paddingleftformpro " >
                                  
                             
                            <div className="inputprocttex" style={{paddingTop:"12px"}}>
                                 <label form="inputdescrip" className="titulospro"  style={{padding:"0px 1px 12px 1px"}}  >Código *</label>
                                 <input type="text"  id="inputdescri" className="inputproduct" style={{width:'100%'}}  {...register("codigo",{required:true})}/>
                            </div>
                           
                             
                            
                            
                       
  

                            
                            </div>

                              

                            <div className="col-12">
                                <div className="d-flex flex-column" style={{paddingTop:"12px"}}>
                                 
                           <label form="inputdescrip" className="titulospro"  style={{padding:"0px 1px 12px 1px"}} >Descripción *</label>
                                 
                                 <input type="text"  id="inputdescri" className="inputproduct" style={{width:'100%'}} {...register("descripcion",{required:true})}/>
                               </div>
                               </div>

                              <div className="col-12 col-md-6 column-gap-3" >
                                 <div className="inputprocttex" style={{paddingTop:"12px"}}>
                                 <label form="inputdescrip" className="titulospro"  style={{padding:"0px 1px 12px 1px"}} >Referencia</label>
                                 <input type="text"  id="inputdescri" className="inputproduct" style={{width:'100%'}}  {...register("referencia")}/>
                            </div>
                              </div>


                                <div className="col-12  col-md-6 column-gap-3 paddingleftformpro"  >
                                  <div className="inputprocttex" style={{paddingTop:"12px"}}>
                              <label form="slectform1" className="titulospro"  style={{padding:"0px 1px 12px 1px"}} >Unidad de medida *</label>
                               <select className="selctproduct" {...register("unidadmedida",{required:true})}>
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
                               <select className="selctproduct" {...register("Impuesto",{required:true})}>
                                <option value={""} id="slectform1">Elige una opcion</option>
                                 {
                                  impuesto.map(item=> (<><option value={item.codigo}>{item.nombre}</option></>))
                                }
                               </select>



                               
                             </div>
                            </div>

                            <div className="col-12 col-md-6 inputconcondigoba" >
                                
                             
                            <div className="inputprocttex inputcodigosbarra paddingleftformpro"   >
                                 <label form="inputdescrip" className="titulospro"  style={{padding:"0px 1px 12px 1px"}} >Codigo de barra</label>
                                 <input type="text"  id="inputdescri" className="inputproduct" style={{width:'100%'}} {...register("codigodebarras",{required:true})}/>
                               
                            </div>
                          
                       
  

                            
                            </div>

                             <div className="col-12 col-md-6 column-gap-3 " >
                                 <div className="inputprocttex" style={{paddingTop:"12px"}}>
                                 <label form="inputdescrip" className="titulospro"  style={{padding:"0px 1px 12px 1px"}} >Costo</label>
                                 <input type="text"  id="inputdescri" className="inputproduct" style={{width:'100%'}} {...register("costo")}/>
                            </div>
                              </div>

                                 <div className="col-12 col-md-6 column-gap-3 paddingleftformpro" >
                                 <div className="inputprocttex" style={{paddingTop:"12px"}}>
                                 <label form="inputdescrip" className="titulospro"  style={{padding:"0px 1px 12px 1px"}}>Manifiesto</label>
                                    <div  style={{width:"100%"}}>
                    <div style={{width:"100%"  ,display:'flex' ,border:'1px solid #D3D4D4',  borderRadius: '6px' ,gap:'12px'}}>
                    <button  type="button"  style={{    
    height: '40px',
    border: 'none',
    borderLeft: '1px solid  #D3D4D4',
    borderRadius: '6px',
     textAlign: 'left',
    font: 'normal normal normal 14px / 19px Open Sans',
    letterSpacing: '0px',
    color:'#555555'}} onClick={handleClick}>Archivo manifiesto</button> 
       <span  style={{
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}} >{ archivotitulo.length>=20 ? archivotitulo.substring(0,substrinfinal)+"...":archivotitulo}</span>

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
                              <label form="slectform1" className="titulospro"  style={{padding:"0px 1px 12px 1px"}} >Linea *</label>
                               <select className="selctproduct">
                                <option value={""} id="slectform1">Elige una opcion</option>
                                {
                                  lineas.map(item=> (<><option value={item.id}>{item.descripcion}</option></>))
                                }
                               </select>



                               
                             </div>
                            </div>
                             <div className="col-12 col-md-6  paddingleftformpro" >
                                  <div className="inputprocttex" style={{paddingTop:"12px"}}>
                              <label form="slectform1" className="titulospro"  style={{padding:"0px 1px 12px 1px"}} >Grupo *</label>
                               <select className="selctproduct">
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
                                        setmultivariable(!multivariable)
                                      }}>
                                      <div className={`${multivariable ? "circulotoglerigh":"circulotogle"}`} onClick={()=>{
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
                                                   <CTableHeaderCell scope="col" >Estado</CTableHeaderCell>
                                                       <CTableHeaderCell scope="col" >Acciones</CTableHeaderCell>
                                        
                                                      
                                                    </CTableRow>
                                                  </CTableHead>
                                                  <CTableBody>
                                                  
                                                  
                                                 
                      
                                      
                                         
                                            
                                            { Array.from({length: numeroinputprecio}).map((_, index) => ( 
                                            
                                                     <CTableRow>
                                               
                                                      <CTableDataCell>   <select className="iteminput1" value={listaprecioson[index]?.precioId ?? precioactual.precioId} onChange={(e)=>{
                                                      console.log(listaprecioson[index]?.precioId)
                                                        
                                                            const pre=getValues("listaprecios")
                                                            const lista=pre.some(item=> item.precioId===Number(e.target.value))
                                                            console.log("lista precio onchange", lista)
                                                            if(lista){
                                                            
                                                              setmensajeerror("Este precio ya ha sido seleccionado")
                                                          setFuncionDinamica(() => () => setmensajeerror(""));
                                                        
                                                           e.target.value=""

                                                            }else{
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
                                      <CTableDataCell><input placeholder="0" value={listaprecioson[index]?.valor ?? precioactual.valor} className="iteminput1" onChange={(e)=>{
                                             if(listaprecios && listaprecioson[index].precioId!==undefined){
                                                       const lista=[...listaprecioson]
                                                       lista[index].valor=e.target.value     
                                                       setValue("listaprecios",lista)  
                                                       setlistaprecioon(lista)
                                                       return
                                                             }
                                          setprecioactual(prev=> ({...prev,valor:e.target.value}))
                                      }}/></CTableDataCell>
                                      <CTableDataCell>   <select className="iteminput1"  style={{width:"80px"}}>
                                                           <option value={"Activo"} id="slectform1">Activo</option>
                                                          <option value={"Inactivo"} id="slectform1">Inactivo</option>
                                
                             
                                 
                               </select></CTableDataCell>    
                                      <CTableDataCell>
                                          <div className="d-flex flex-nowrap" style={{gap:"12px"  }} >
                                                                                                   <div className="col-6" style={{ maxWidth: 'fit-content' }} >
                                                                                                       <CButton  className="buttoniconnormal">
                                                                                                         <Iconupdate  width={16} height={18} color={"#555"}/> 
                                                                                                       </CButton>
                                                                                                   </div>

                                                                                                          <div   style={{ maxWidth: 'fit-content' }} >
                                                                                                                                                                                                                                          <CButton  className="buttoniconnormaleliminar"  >      <Iconeliminar  width={16} height={16} color={"#555"}/>  </CButton>
                                                                                                                                                                                 </div>  
                                                                                                  
                                                </div>
                                      </CTableDataCell>
                                            
                                      
                                              </CTableRow>

                                        ))}
                                              
                                                
                                               
                            
                                              
                                    
                                        
                                      
                                                    
                        
                                                      
                                                
                                                     
                                                  </CTableBody>
                                               
                                                </CTable>
                                                </div>
                               
                                
                                       {
                                        !guardar && <button type="button" className="botoncontinuarguardar botonagregarcon"  key="guardar"  onClick={()=>{
                                        setnumeroinputprescio(prev=> prev+1)
                                        setguardar(true)
                                        console.log("precio actual",precioactual,listaprecios)
                                         setprecioactual({precioId:0,valor:""})
                                        }} >Agregar</button>  
                               
                                       }

                                       {
                                        guardar &&    <button className="botoncontinuarguardar" type="button"  key="guardar" onClick={()=>{
                                          
                                          setguardar(false)
                                          const precios=getValues("listaprecios")

                                          precios.push(precioactual)
                                             setValue("listaprecios",  precios)
                                             const list=[...listaprecios]
                                             
                                          console.log(precios)
                                          setprecioactual({precioId:0,valor:""})

                                        }}>Guardar</button> 
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

