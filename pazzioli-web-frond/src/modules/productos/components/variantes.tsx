import { useEffect, useRef, useState, type SetStateAction,type Dispatch } from "react";
import { CTable, CTableHead, CTableBody, CTableRow, CTableHeaderCell, CTableDataCell, CFormSelect, CFormInput, CButton } from "@coreui/react";
import Iconupdate from "../../../icons/iconupdate";
import Iconbodega from "../../../icons/Iconbodega";
import Usuariosicon from "../../../icons/Isuarios";
import Bodegasvariantes from "./bodegasvariantes";
import Iconcodigobarras from "../../../icons/iconcodigobarras";
import { codigosbarrascontex } from "../contextcodigobarras";
import Iconfoto from "../../../icons/iconfoto";
import Downloadimg from "../../../icons/icondonwloadimg";
import { createPortal } from "react-dom";
import api from "../../../apicofig";
import { useFormContext } from "react-hook-form";
import Iconeliminar from "../../../icons/iconeliminar";
import Modalconfirmar from "../../../components/alertconfimacion";


const bodegas = ["Bodega 1", "Bodega 2", "Bodega 3"];

interface bodegas{
    bodegaId:number;
  bodega:string;
  stockMax:number;
stockMin:number;
ubicacion?:string;
existencias?:number;
}

interface valorescara{
  caracteristicaId
: 
number
bodega
: 
string
tipo
: 
{tipoCaracteristicaId: number, bodega: string}
}

interface Variante {
  productoVarianteId: number;
  imagen:string;
  
  atributos: { [key: string]:string}; // <--- dinámico
  bodega: bodegas[];
  codigobarras:string,
  estado?:string

}


interface Variantedfault {
 descripcion:string,
 imagen?:  File | null;
}




function Variantes({variantedefault,multivariable,setmultivariable,variantes, setVariantes,setceldaatributos  ,variantesdelete, setVariantesdelete,estadoproducto}:{variantedefault:Variantedfault,multivariable:boolean,setmultivariable: Dispatch<SetStateAction<boolean>>,variantes:Variante[],setVariantes:Dispatch<SetStateAction<Variante[]>>,setceldaatributos:Dispatch<SetStateAction<string[]>>,variantesdelete:Variante[], setVariantesdelete:Dispatch<SetStateAction<Variante[]>>,estadoproducto:boolean}) {
    //el hook useRef me crea una referencia para asignarla a un componente y poder identificarlo
 
  const fileRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [varianteselect,setvarianteselect]=useState<Variante>();
  const [coords, setCoords] = useState({ x: 0, y: 0, width: 0 });
  const [codigoidvariante,setcodigoidvariante]=useState<number>(0);
  const [evitandoBlur, setEvitandoBlur] = useState(false);
 const [funcionDinamica,setFuncionDinamica]=useState<()=>void>(()=>{})
  const [confirmareliminacion,setconfirmareliminacion]=useState<boolean>(false)
       const [mensajeerror,setmensajeerror]=useState<string>("")
        const [codigoeliminar,setcodigoeliminar]=useState<number>(0)
          const [modaladvertencia,setmodaladvertencia]=useState<boolean>(false)
          const [confirmaractulizacion,setconfirmaractulizacion]=useState<boolean>(false)
          const [funncionDinamica2,setfunncionDinamica2]=useState<()=>void>(()=>{})
  const [atributos, setAtributos] = useState<string[]>(["Talla","Color","Material"]);
  const [imgdefault,setimgdefault]=useState<string>("");
  const [atrractual,setatrractual]=useState<string>("");
  const [rotate4,setrotate4]=useState<boolean>(false);
  const [valorescaracteristicas,setvalorescaracteristicas]=useState<valorescara[]>([]);
  const [atributoscelda, setAtributoscelda] = useState<string[]>([]);
 const [bodegaSeleccionada, setBodegaSeleccionada] = useState<{bodega:string;
  stockMax:number;
stockMin:number;}[]>([]);
useEffect(() => {
  fileRefs.current = fileRefs.current.slice(0, variantes.length);
}, [variantes.length]);
useEffect(() => {
  setceldaatributos(atributoscelda)
}, [atributoscelda]);


const eliminarva=(varianteid:number)=>{


setmodaladvertencia(true)
setmensajeerror("Desea eliminar este item")
   setFuncionDinamica(()=>{
                                             return ()=>{ setmensajeerror("")
                                              setcodigoeliminar(varianteid)
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



useEffect(()=>{
   
        
          if(codigoeliminar && codigoeliminar>0){
              
             eleiminarvariante()
      
            }else{
             /* setnumeroinputprescio(prev=> prev-1)
              setguardar(false)
            }
       /* */
      }
    
    },[confirmaractulizacion,confirmareliminacion])
//use efect para controlar el drag drop
/* Si haces drop sobre un elemento que no tiene preventDefault() 
en los eventos dragover y drop, el navegador tratará de abrir ese 
archivo como si lo arrastraras sobre la página, causando la ventana emergente o recarga.

Y en tu caso, aunque lo aplicas en el contenedor, el img dentro del dropzone
 también recibe el evento, y ahí no estás previniendo el comportamiento. */
const establecerdefaulva=async()=>{
  console.log("variante de fault",variantedefault)
 setAtributoscelda(["Descripción"])
 const nuevosAtributos:{ [key: string]: string } = {};
console.log("estableciendo variante por defecto")
    nuevosAtributos["Descripción"] =variantedefault.descripcion;  // cada atributo tendrá un input
    const result=await crearproductodefault()
    setVariantes([
    {
      productoVarianteId:0,
      imagen:result,
      atributos: nuevosAtributos,
      bodega: [],
      codigobarras:""
    }])
}
const eleiminarvariante= async ()=>{
  /*const eliminar=await api.delete(`variante-detalle/${idvariante}`,{
            headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el bodega de la base de datos
            }})
  console.log("eliminar variante",eliminar)*/
  setVariantesdelete([...variantesdelete, ...variantes.filter(item=> item.productoVarianteId === codigoeliminar)])
const nuevasvariantes=variantes.filter(item=> item.productoVarianteId !== codigoeliminar)
setVariantes(nuevasvariantes)
setcodigoeliminar(0)
}
useEffect(() => {

  if(atributos.length>0){

       if (variantes.length>0){
    
      const claves = Object.keys(variantes[0].atributos);

      claves.map(item=>{
        
        const element=document.getElementById(`idretencion${item}`) as HTMLInputElement | null;
        console.log(element)
          
  if (element) {
    element.checked = true; // ejemplo
  }

      })
      setAtributoscelda(claves)

      
     }
if(variantedefault.descripcion!=""){
 
   establecerdefaulva()

}

    if(variantedefault.imagen){
     convertiraurl(variantedefault.imagen)
  }
  }
},[atributos])

const atributosiniciales=async()=>{
  const atributoslist:string[]=[]
  const atributosback=await api.get(`tipos-caracteristica/listar`,{
            headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el bodega de la base de datos
            }})

            console.log("atributos iniciales",atributosback)
atributosback.data.content.map((item:any)=> {
  atributoslist.push(item.nombre)
})

setAtributos(atributoslist)
  
}
useEffect(() => {
  
  atributosiniciales();
  const prevent = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  window.addEventListener("dragover", prevent);
  window.addEventListener("drop", prevent);

  return () => {
    window.removeEventListener("dragover", prevent);
    window.removeEventListener("drop", prevent);
  };
}, []);
const convertiraurl = (file: File) => {

    const reader = new FileReader();
    reader.onload = () => setimgdefault(reader.result as string);
    reader.readAsDataURL(file);
 
};

const crearproductodefault = ( ):Promise<string> => {

   return new Promise((resolve, reject) => {
    if(variantedefault.imagen){
const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
      } else {
        reject(new Error("Resultado no es string"));
      }
    };

    reader.onerror = () => {
      reject(reader.error);
    };

    reader.readAsDataURL(variantedefault.imagen);
    }else{
       resolve("");
    }
    
  });
 
 
 
};
// Manejar archivos arrastrados
const handleDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      actualizarVariante(index, "imagen", reader.result as string);
    };
    reader.readAsDataURL(file);
  }
};




const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
  e.preventDefault();
};
 const [modalbo,setmodalbo]=useState<boolean>(false);
 const [indexvariante,setindexvariante]=useState<number>(0);
 
 const {codigomodal,setcodigomodal,  Codigobarra,
       setcodigobarra ,  actulizarbarra,
       setactulizarbarras,
       guardar,
       setguardar,codigovariante,
       setcodigovariante , codigobarraonchange,
    setcodigobarraonchange
     }=codigosbarrascontex()

     useEffect(()=>{console.log("varianteinicio",variantes)
         if(Codigobarra!==undefined && Codigobarra!=="" && codigoidvariante>0){
          console.log("codigo variante", codigoidvariante)
          const nuevavariante=[...variantes]
          const codigobavariante=nuevavariante.findIndex(item=> item.productoVarianteId === codigoidvariante)
          nuevavariante[codigobavariante].codigobarras=Codigobarra
          setVariantes(nuevavariante)

         }
     },[Codigobarra])
       useEffect(()=>{
        if(actulizarbarra){
          console.log(Codigobarra)
        }
       },[guardar])

 useEffect(()=>{
      
       if(atributoscelda.length>0){
        if (rotate4) {
    atributoscelda.forEach((item) => {
      const element = document.getElementById(`idretencion${item}`) as HTMLInputElement | null;
      if (element) element.checked = true;
    });
  }
       }
      
       },[rotate4])
       
       const agregarAtributoceldas = (bodega: string) => {
  setAtributoscelda(prev => [...prev, bodega]); 
};

const agregarVariante = () => {
  let codigovariante=0;
  const maxCodigo = variantes.length === 0 
  ? 1 
  : Math.max(...variantes.map(v => v.productoVarianteId)) + 1;
  const nuevosAtributos:{ [key: string]: string } = {};
  atributoscelda.forEach(a => {
    nuevosAtributos[a] = "";  // cada atributo tendrá un input
  });

  setVariantes(prev => [
    ...prev,
    {
      productoVarianteId:maxCodigo,
      imagen:"",
      atributos: nuevosAtributos,
      bodega: [],
      codigobarras:"",
      estado:estadoproducto?"ACTIVO":"INACTIVO",
    }
  ]);

  setrotate4(false)
};

  // Agregar nueva variante vacía
 
 const agregarbodega= async (nombrebodega:{ existenciaId
:number,bodegaId:number,bodega: string, stockMax: number, stockMin: number,ubicacion:string,existencias:number},index:number)=>{
    let existebodega=variantes[index].bodega.find(b=>b.bodega===nombrebodega.bodega);
    
    console.log("agregar bodega",nombrebodega,existebodega)
    if(!existebodega){
      const nuevaBodega: bodegas = { bodegaId:nombrebodega.bodegaId,bodega: nombrebodega.bodega, stockMax: nombrebodega.stockMax, stockMin: nombrebodega.stockMin, ubicacion:nombrebodega.ubicacion,existencias:0 };
      const nuevasVariantes = [...variantes];
      nuevasVariantes[index].bodega = [...nuevasVariantes[index].bodega, nuevaBodega];
      setVariantes(nuevasVariantes);
    }else{
    if(nombrebodega.existenciaId){

      const nuevasVariantes = [...variantes];
      const upddatebodega=await api.put(`existencias/${nombrebodega.existenciaId}`,{
        bodegaId:nombrebodega.bodegaId,
        stockMax:nombrebodega.stockMax,
        stockMin:nombrebodega.stockMin,
        ubicacion:nombrebodega.ubicacion,
      
      },{
            headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el bodega de la base de datos
            }})


            console.log("actualizar bodega",upddatebodega)
      const indexbodega=nuevasVariantes[index].bodega.findIndex(b=>b.bodegaId===nombrebodega.bodegaId);
      nuevasVariantes[index].bodega[indexbodega].existencias=nombrebodega.existencias;
      nuevasVariantes[index].bodega[indexbodega].ubicacion=nombrebodega.ubicacion;
      nuevasVariantes[index].bodega[indexbodega].stockMax=nombrebodega.stockMax;
      nuevasVariantes[index].bodega[indexbodega].stockMin=nombrebodega.stockMin;

      setVariantes(nuevasVariantes);
    }else{
        const nuevasVariantes = [...variantes];
      const indexbodega=nuevasVariantes[index].bodega.findIndex(b=>b.bodegaId===nombrebodega.bodegaId);
      nuevasVariantes[index].bodega[indexbodega].existencias=nombrebodega.existencias;
      nuevasVariantes[index].bodega[indexbodega].ubicacion=nombrebodega.ubicacion;
      nuevasVariantes[index].bodega[indexbodega].stockMax=nombrebodega.stockMax;
      nuevasVariantes[index].bodega[indexbodega].stockMin=nombrebodega.stockMin;

      setVariantes(nuevasVariantes);
    }
    }
 }
  // Actualizar variante
  const actualizarVariante = (index: number, campo: keyof Variante, valor: any) => {
    
       const nuevasVariantes = [...variantes];
    nuevasVariantes[index][campo] = valor;
    setVariantes(nuevasVariantes);
   
   
  };

  // Eliminar variante
  const eliminarVariante = (index: number) => {
    setVariantes(prev => prev.filter((_, i) => i !== index));
  };
  const { register,control,setValue,getValues, formState: { errors } } =useFormContext();
  return (
    <div>
      <div className="row" style={{padding:"12px 20px 12px 20px"}}>
          <h3 className="h5 col-12 "  style={{marginBottom:"0px"}}>Variantes</h3>
        <div className={`${multivariable ?  "col-12  col-md-8 col-sm-6 inputterceroleft inputretencion padingtopcol":"col-12  col-md-8 col-sm-6 inputterceroleft inputretencion padingtopcol "}`} >
                       <div className={`${multivariable ? "d-flex  flex-wrap flex-column ":"d-flex  flex-wrap flex-column divinputdisabled"}`} style={{position:"relative",height: "100%"}}   >
                          <ul  className={`${multivariable ? "d-flex container1  flex-wrap":"d-flex container1  flex-wrap divinputdisabled"}`} >
                         
                        <li  style={{flex:"1",display:"flex",justifyContent:"center",gap:"12px"}}  className="classiteminput"><input style={{width:"100%"}} className={`${multivariable ?  "inputestilotercero ":"inputestilotercero inputdisabled"}`}  disabled={!multivariable} placeholder="Tipo caracteristica" /> <div ><img  src="imgs/togle.svg"  className={`${'rotate'} `} onClick={()=>{
                          if(multivariable && variantes.length===0){
                            setrotate4(!rotate4)
                          }
                          
                        }}/></div> <div style={{alignSelf:'1'}}  className="botoncerrarall"><button className="botoncerrar botoncerrarall" type="button" ></button></div>  </li >
                          </ul>

                          { rotate4 && <div className="containeritemlivariante">
                                            <ul className="itemcontli">
                                             {
                          atributos.map((item)=>{
                        return <>
                               <li className="licheckterceros" > <input type="checkbox" id={`idretencion${item}`}  onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                                                                 if (e.target.checked) {
                                     // el checkbox está seleccionado

                                     setAtributoscelda((prev)=> [...prev,item])
                                   } else {
                                       setAtributoscelda(atributoscelda.filter(item2=> item2!==item))
                                     // el checkbox no está seleccionado
                                   }
                                                           }} /> <span>{item}</span></li>
                        </>
                          })
                         } 
                                               
                                                     
                                                  
                                              
                                              
                                         
                                            </ul>
                                            </div>}
                       
                       </div>
                    </div>
                    <div className="col-12  col-md-4 col-sm-6  d-flex justify-content-md-end justify-content-center padingtopcol" style={{height:"fit-content"}}>
                       <button type="button" className={`${multivariable ? "botoncontinuarguardar botonagregarvariante":"botoncontinuarguardar botonagregarvariante botondisabled"}`} onClick={agregarVariante} style={{ marginBottom: "0px" }} disabled={!multivariable}>
        Agregar
      </button>
                    </div>
        
      </div>
     
  
   {
    variantes.length>0  && multivariable && ( 
      <div className="tabla-wrappervariante ">
<CTable className="tablavariantes">
        <CTableHead>
          <CTableRow>
             <CTableHeaderCell>Imagen</CTableHeaderCell>
            {atributoscelda.map(attr => (
      <CTableHeaderCell key={attr}>{attr}</CTableHeaderCell>
    ))}
 
         <CTableHeaderCell scope="col" >Estado</CTableHeaderCell>
            <CTableHeaderCell>Acciones</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
            {variantes.map((v, i) =>     {
            
             
              return(

    <CTableRow key={i}>
        <CTableDataCell >
          <div
               onClick={() => fileRefs.current[i]?.click()}
                   onDrop={(e) => handleDrop(e, i)}     

  onDragOver={handleDragOver}
  style={{
    width: "55px",
    height: "55px",
    background: "#F3F4F7",
    borderRadius: "6px",
    position: "relative",
    overflow: "hidden",
    border: "2px dashed #bbb",
    cursor: "pointer"
  }}
  className="d-flex justify-content-center align-items-center"
>
  {v.imagen ? (
    <img
      src={v.imagen}
      alt="Preview"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  ) : (
    <>
      <Iconfoto width={20} height={20} color={"#555"} />
      <div className="icondown">
        <Downloadimg width={10} height={10} color={"#555"} />
      </div>
    </>
  )}
    <input
           ref={(el) => (fileRefs.current[i] = el)}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                  actualizarVariante(i, "imagen", reader.result as string);
                };
                reader.readAsDataURL(file);
              }
            }}
          />
</div>

        </CTableDataCell>
      {atributoscelda.map(attr => (
        <CTableDataCell key={attr}>
             <div className="d-flex justify-content-center column-gap-3 flex-wrap h-100 position-relative containerinputvariante" >
               <CFormInput
               
               onFocus={async (e)=>{
                setvarianteselect(v)
                const inputdom=document.getElementById(`idinputvariante${attr}${i}`)  as HTMLInputElement;
                  const lleg=await api.get(`caracteristicas/listar/tipocaracte`,{
                  params: {
    ca: inputdom.value,
    tipo: attr.toUpperCase()
  },
            headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el bodega de la base de datos
            }})

            console.log("caracteristica",lleg)
            setvalorescaracteristicas(lleg.data.content)
                /*  obtener cordenadas del elemento en el dom */
                  
                  const rect = e.target.getBoundingClientRect();
  setCoords({
    x: rect.left,
    y: rect.bottom,  // justo debajo del input
    width: rect.width
  });

                setatrractual(attr)
               }}
               onBlur={()=>{

                  if (evitandoBlur) {
    setEvitandoBlur(false);
    return;
  }
                   const inputdom=document.getElementById(`idinputvariante${attr}${i}`)  as HTMLInputElement;
                  const buscarvalor=valorescaracteristicas.some((item=> item.bodega!==inputdom.value))
                  if( buscarvalor){
                     const nuevas = [...variantes];
              nuevas[i].atributos[attr] = "";
                       setVariantes(nuevas);
                  }
                   setatrractual("")
               }}
           value={v.atributos[attr] || ""}
            onChange={ async e => {
               console.log("item variante",v,i)
              const nuevas = [...variantes];
              nuevas[i].atributos[attr] = e.target.value;
              
    



              const lleg=await api.get(`caracteristicas/listar/tipocaracte`,{
                  params: {
    ca: e.target.value,
    tipo: attr.toUpperCase()
  },
            headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el bodega de la base de datos
            }})

            console.log("caracteristica",lleg)
            setvalorescaracteristicas(lleg.data.content)

              setVariantes(nuevas);
            }}
           id={`idinputvariante${attr}${i}`}
          className="borderinputvariantes "
          />
         {atrractual === attr &&
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
          valorescaracteristicas.map((item)=>{
            return <>
            <li   onMouseDown={()=>{
              setEvitandoBlur(true)
                    const nuevas = [...variantes];
                    const varianteactual=variantes.findIndex(item=> item.productoVarianteId===varianteselect?.productoVarianteId)
                    console.log("item variante",varianteactual,variantes,v,i)
                    
                    nuevas[varianteactual].atributos[attr]=item.nombre;
    //nuevas[i].atributos[attr] =item.bodega;

    setVariantes(nuevas);     // ← React actualiza el input
    setatrractual("");        // cerrar portal
            }}>{item.nombre}</li>
            </>
          })
        }
      </ul>
    </div>,
    document.body
  )
}
             </div>
         
        </CTableDataCell>
      ))}

         <CTableDataCell>   <select className="iteminput1" value={v.estado}  onChange={(e)=>{
          if(!estadoproducto){
             console.log("variante",variantes,i)
          let variant=[...variantes]
          variant[i].estado="INACTIVO"
          setVariantes(variant)
            return
          }
          console.log("variante",variantes,i)
          let variant=[...variantes]
          variant[i].estado=e.target.value
          setVariantes(variant)
         }} style={{width:"80px"}}>
                                                           <option value={"ACTIVO"} id="slectform1">Activo</option>
                                                          <option value={"INACTIVO"} id="slectform1">Inactivo</option>
                                
                             
                                 
                               </select></CTableDataCell>   

      

     
  <CTableDataCell >
                                                       <div className="d-flex flex-nowrap justify-content-center align-items-center containerinputvariante" style={{gap:"12px"  }} >
                                                              <div className="col-6"  style={{ maxWidth: 'fit-content' }} >
                                                               <CButton  className="buttoniconnormal" onClick={async ()=>{
                                                                if(v.codigobarras===""){
                                                                  let codigocontable
                                                                  if(!getValues("codigo")){
                                                                       codigocontable=""                                          
                                                                  }else{
                                                                      codigocontable=getValues("codigo")
                                                                  }
                                                                  let contrefe=Object.values(v.atributos)
                                                                  let barrarformada="";
                                                                      const listaid= await api.post("caracteristicas/buscarIds", contrefe,{headers: {
                                                                 'X-TenantID':"cavsystems", // suponiendo que data.db contiene el bodega de la base de datos
                                                              }});
                                                                listaid.data.forEach(item3=>{
                                                                barrarformada+=item3.toString()
                                                                })
                                                                    console.log("codigobarra formado",codigocontable+barrarformada,codigocontable,barrarformada)
                                                                  setcodigobarra(codigocontable+barrarformada)
                                                                   setcodigobarraonchange(codigocontable+barrarformada)
                                                                     setcodigomodal(true)
                                                              setcodigoidvariante(v.productoVarianteId)
                                                                  return
                                                                }
                                                              setcodigobarraonchange(v.codigobarras)
                                                              setcodigovariante(v.productoVarianteId)
                                                              setcodigomodal(true)
                                                              setcodigoidvariante(v.productoVarianteId)

                                                               }} >    <  Iconcodigobarras  width={22} height={22.5} /></CButton>
                                                           </div>
                                                           <div className="col-6"  style={{ maxWidth: 'fit-content' }} >
                                                               <CButton  className="buttoniconnormal" onClick={()=>{
                                                                setmodalbo(true)
                                                               setBodegaSeleccionada(v.bodega);

                                                               setindexvariante(i);
                                                               }} >    <Iconbodega  width={19} height={19.5} color={"#555"}  /></CButton>
                                                           </div>

                                                         
                                                         
               
                                                          
               
                                                          
                                                        <div className="col-6"  style={{ maxWidth: 'fit-content' }} >
                                                             <CButton  className="buttoniconnormaleliminar"    onClick={()=>  eliminarva(v.productoVarianteId)} >      <Iconeliminar  width={16} height={16} color={"#555"} />  </CButton>
                                                         </div>  
               
                                                        
                                                       </div>
                                                     </CTableDataCell>
    </CTableRow>
  )})}
        </CTableBody>
      </CTable>
      </div>
    )
   }


   
      {
     !multivariable && ( 
      <div className="tabla-wrappervariante ">
<CTable className="tablavariantes">
        <CTableHead>
          <CTableRow>
             <CTableHeaderCell>Imagen</CTableHeaderCell>
            {atributoscelda.map(attr => (
      <CTableHeaderCell key={attr}>{attr}</CTableHeaderCell>
    ))}
 
       
            <CTableHeaderCell>Acciones</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
            {variantes.map((v, i) =>     {
            
             
              return(

    <CTableRow key={i}>
        <CTableDataCell >
          <div
               onClick={() => fileRefs.current[i]?.click()}
                   onDrop={(e) => handleDrop(e, i)}     

  onDragOver={handleDragOver}
  style={{
    width: "55px",
    height: "55px",
    background: "#F3F4F7",
    borderRadius: "6px",
    position: "relative",
    overflow: "hidden",
    border: "2px dashed #bbb",
    cursor: "pointer"
  }}
  className="d-flex justify-content-center align-items-center"
>
  {v.imagen ? (
    <img
      src={v.imagen}
      alt="Preview"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  ) : (
    <>
      <Iconfoto width={20} height={20} color={"#555"} />
      <div className="icondown">
        <Downloadimg width={10} height={10} color={"#555"} />
      </div>
    </>
  )}
    <input
           ref={(el) => (fileRefs.current[i] = el)}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                  actualizarVariante(i, "imagen", reader.result as string);
                };
                reader.readAsDataURL(file);
              }
            }}
          />
</div>

        </CTableDataCell>
      {atributoscelda.map(attr => (
        <CTableDataCell key={attr}>
          {v.atributos[attr]}
        </CTableDataCell>
      ))}

      

     
  <CTableDataCell >
                                                       <div className="d-flex flex-nowrap justify-content-center align-items-center containerinputvariante" style={{gap:"12px"  }} >
                                                              <div className="col-6"  style={{ maxWidth: 'fit-content' }} >
                                                               <CButton  className="buttoniconnormal" onClick={async ()=>{
                                                                if(v.codigobarras===""){
                                                                  let codigocontable
                                                                  if(!getValues("codigo")){
                                                                       codigocontable=""                                          
                                                                  }else{
                                                                      codigocontable=getValues("codigo")
                                                                  }
                                                                  let contrefe=Object.values(v.atributos)
                                                                  let barrarformada="";
                                                                      const listaid= await api.post("caracteristicas/buscarIds", contrefe,{headers: {
                                                                 'X-TenantID':"cavsystems", // suponiendo que data.db contiene el bodega de la base de datos
                                                              }});
                                                                listaid.data.forEach(item3=>{
                                                                barrarformada+=item3.toString()
                                                                })
                                                                    console.log("codigobarra formado",codigocontable+barrarformada,codigocontable,barrarformada)
                                                                  setcodigobarra(codigocontable+barrarformada)
                                                                   setcodigobarraonchange(codigocontable+barrarformada)
                                                                     setcodigomodal(true)
                                                              setcodigoidvariante(v.productoVarianteId)
                                                                  return
                                                                }
                                                              setcodigobarraonchange(v.codigobarras)
                                                              setcodigovariante(v.productoVarianteId)
                                                              setcodigomodal(true)
                                                              setcodigoidvariante(v.productoVarianteId)

                                                               }} >    <  Iconcodigobarras  width={22} height={22.5} /></CButton>
                                                           </div>
                                                           <div className="col-6"  style={{ maxWidth: 'fit-content' }} >
                                                               <CButton  className="buttoniconnormal" onClick={()=>{
                                                                setmodalbo(true)
                                                                
                                                               setBodegaSeleccionada(v.bodega);

                                                               setindexvariante(i);
                                                               }} >    <Iconbodega  width={19} height={19.5} color={"#555"}  /></CButton>
                                                           </div>

                                                           

                                                         
                                                         
               
                                                          
               
                                                          
               
               
                                                        
                                                       </div>
                                                     </CTableDataCell>
    </CTableRow>
  )})}
        </CTableBody>
      </CTable>
      </div>
    )
   }

     
      <Bodegasvariantes modalbo={modalbo} setmodalbo={setmodalbo} agregarbodega={agregarbodega} BodegaSeleccionada={bodegaSeleccionada}  setBodegaSeleccionada={setBodegaSeleccionada} indexvariante={indexvariante} variantes={variantes} setvariantes={setVariantes} setindexvariante={setindexvariante}  />

         {
                             modaladvertencia && <Modalconfirmar tipoicon={"alerta"} texto={mensajeerror} boton3={true}  boton4={true} textoboton={"Aceptar"}  funcion={funcionDinamica} funcion2={funncionDinamica2}/>
                             } 
                   
    </div>
  );
}

export default Variantes;
