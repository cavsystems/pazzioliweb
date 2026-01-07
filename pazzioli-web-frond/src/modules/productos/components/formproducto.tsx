import { CButton, CFormFloating, CFormLabel, CFormSelect, CInputGroup, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import { Controller, FormProvider, useForm, useFormContext } from "react-hook-form";
import Ojoquetodolove from "../../../icons/ojoquetodolove";
import { useEffect, useRef, useState } from "react";
import Formprobasico from "./formprobasico/formprobasico";
import Variantes from "./variantes";
import api from "../../../apicofig";
interface Variantedfault {
  varianteid:number,
 descripcion:string,
 imagen:  File | null;
}

interface bodegas{
  nombre:string;
  stockMax:number;
stockMin:number;
ubicacion?:string;
existencias?:number;
}

interface valorescara{
  caracteristicaId
: 
number
nombre
: 
string
tipo
: 
{tipoCaracteristicaId: number, nombre: string}
}

interface Variante {
  productoVarianteId: number;
  imagen:"";
  
  atributos: { [key: string]: string }; // <--- dinámico
  bodega: bodegas[];
  codigobarras:string,
  estado:string

}

interface precioob {
  precioId:number, valor?: string
}
function Formproduct({modalformproducto,setmodalformproducto,productoid, setproductoid,product, setproduct,traerproductos,setpagina}:any) {
const [multivariable,setmultivariable]=useState<boolean>(false)
const [preciosva,setpreciosva]=useState<number>(0)
const [variantedefaulcodigo,setvariantedefaulcodigo]=useState<number>(0)
const [estadoproducto,setestadoproducto]=useState<boolean>(true)
const [multivainclude,setmultivainclude]=useState<Variante[]>([]);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
     const [celdasatributos,setceldaatributos]=useState<string[]>([])

    const [variantedefault,setvariantedefault]=useState<Variantedfault>({
      varianteid:0,
 descripcion:"",
 imagen:null
       
      })
        const [variantes, setVariantes] = useState<Variante[]>([]);
             const [variantesdelete, setVariantesdelete] = useState<Variante[]>([]);
const traervariantes=async ()=>{
  const atributocelda:string[]=[]
   
             const variantback=await api.get(`variantes/detalles-producto/${productoid}`,{
      headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
            }
  })
  
if(variantback.data.content.length>0){
const preciosidva= variantback.data.content[0]

 setpreciosva(preciosidva.productoVarianteId)
}
console.log("variante content",variantback.data.content)
if(variantback.data.content.length===1){
  setvariantedefaulcodigo( variantback.data.content[0].productoVarianteId
)
}
 

 
  const multiva:{ productoVarianteId: number;
  imagen:string;
  
  atributos: { [key: string]:string}; // <--- dinámico
  bodega: bodegas[];
  
  codigobarras:string,
  estado:string
}[]=[]
  await Promise.all(variantback.data.content.map( async (item)=>{
     let atribu:{[key:string]:string}={}
    item.detalles.forEach(item2=>{
       atribu[item2.tipo] = item2.caracteristicaNombre
    })
    console.log("atributosantes",atribu)
  
         const productbodega=await api.get(`existencias/variante-bodega/${item.productoVarianteId}`,{
            headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
            }})

            console.log("bodegas variante",productbodega)
  console.log("atributos",atribu,variantback)
    multiva.push({
    productoVarianteId: item.productoVarianteId,
    imagen: "",
    atributos:atribu,
    bodega: productbodega.data.content,
    codigobarras: item.codigobarras ?? "",
    estado:item.activo ? "ACTIVO":"INACTIVO"
  });

  

  
    
  }))

  console.log( "multiva variante",multiva)
  setmultivainclude(multiva)
 setVariantes(multiva)

  


          } 

          

     
     const methods = useForm({
               mode: 'onSubmit',
                shouldUnregister: false,
              defaultValues: {
              tipoproducto: "",
         codigo:"",
        descripcion:"",
         referencia:"",
          unidadmedida:"",
          departamento:"",
          impuesto:"",
         codigobarra:"",
          costo:0,
        nanifesto:"",
          linea:"",
          grupo: "",
        listaprecios:[],
        variantes:[],
         imagenproducto:null
          
                // Agrega todos los campos que usas en todos los pasos
              },
            });

            
            const [rotate,setrotate]=useState(false);
             const [tap,settap]=useState(1);
             const [  botonupdateu,setbotonupdateu]=useState(false);

             
                  useEffect(()=>{
                               if(productoid>0 ){
                                    traervariantes()
                          
                               }
                   
                       },[productoid])
             const onSubmit=async (data:{
               tipoproducto: string,
         codigo:string,
        descripcion:string,
         referencia:string,
          unidadmedida:string,
          departamento:string,
          impuesto:string,
         codigobarra:string,
          costo:number,
        nanifesto:string,
          linea:string,
          grupo: string,
        listaprecios:[],
        variantes:[],
         imagenproducto:string | null
             })=>{
              console.log("variante",variantes,"data",data,data.codigobarra)
       
            
                           let productobody={
                            estado: estadoproducto ? "ACTIVO":"INACTIVO",
                  productoid: productoid>0 ? productoid : null,
                codigo_contable:data.codigo,
    codigo_barras:data.codigobarra==="" ? data.codigo:data.codigobarra ,
    referencia: data.referencia==="" ? data.codigo: data.referencia,
    descripcion: data.descripcion,
    costo:data.costo,
      usuario_creo_id: 2,
    tipo_producto_id:data.tipoproducto,
    impuesto_id:data.impuesto!=="" ? Number(data.impuesto):0 ,
    linea_id:data.linea!=="" ?  Number(data.linea):0,
    grupo_id: data.grupo!=="" ?  Number(data.grupo):0,
    manifiesto: "",
    manejaVariantes: multivariable,
    unidadesMedida: [Number(data.unidadmedida)] ,
   

              }
               let Variantesback=[

               ]

                const Variantesbackdelete=[

               ]
               let codigbarradefault=data.codigo
       await Promise.all( variantes.map( async item=>{
                /* armar skunvaliante*/
                let skun=methods.getValues("referencia")
                let referencia=""
                const valores = Object.values(item.atributos); 
               const listaid= await api.post("caracteristicas/buscarIds", valores,{headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
            }});
               listaid.data.forEach((item3:any)=> codigbarradefault+=item3)
            
                celdasatributos.forEach((item2,index)=>{
                  skun+="-"+ item.atributos[item2].substring(0,2)
                 
                
                 if(index=== celdasatributos.length-1){
 referencia+=item.atributos[item2]
                 }else{
                   referencia+=item.atributos[item2]+" "
                 }
                }
                  
                )
                 let variantedifiniva
                    console.log("listaid",listaid,item.productoVarianteId,productoid)
                   if(!estadoproducto && productoid>0){
                 variantedifiniva={
                

                   productoVarianteId: item.productoVarianteId,

      variante: {
          productoVarianteId: item.productoVarianteId,
       estadovariante: variantedefault.varianteid>0 ? estadoproducto:item.estado=="ACTIVO" ? true:false,
      }
                
                  
                    

                }

                   }else{
                     variantedifiniva={
                       productoVarianteId: productoid>0 && multivainclude.some(item2 => item2.productoVarianteId === item.productoVarianteId) ? item.productoVarianteId : null,
                          productoId: productoid>0 ? productoid : null,
                  variante:{
                      
                  estadovariante: variantedefault.varianteid>0 ? estadoproducto:item.estado=="ACTIVO" ? true:false,
                   skun:skun,
                   referenciaVariantes:referencia,
                   codigoBarras:item.codigobarras==="" ? codigbarradefault:item.codigobarras,
                   predeterminada:!multivariable,
                    
                    productoId: productoid>0 ? productoid : null,
                  
                  },

                   varianteCreate:{
                     estadovariante:item.estado=="ACTIVO" ? true:false,
                   skun:skun,
                   referenciaVariantes:referencia,
                   codigoBarras:item.codigobarras==="" ? codigbarradefault:item.codigobarras,
                   predeterminada:!multivariable,
                    
                    productoId: productoid>0 ? productoid : null,
                    productoVarianteId: productoid>0 ? item.productoVarianteId : null,
                  },
               


                    detalles:listaid.data.length>0 ? [
                      { productoVarianteId: productoid>0 &&  multivainclude.some(item2 => item2.productoVarianteId === item.productoVarianteId) ? item.productoVarianteId : null,
                       caracteristicaId:listaid.data,
                         productoId: productoid>0 ? productoid : null}
                    ]:[],

                    existencias:item.bodega,
                    precios:data.listaprecios,
                    

                }

                   }
               
                

                   
                  Variantesback.push(variantedifiniva)
               
               }))



                 await Promise.all( variantesdelete.map( async item=>{
                /* armar skunvaliante*/
                let skun=methods.getValues("referencia")
                let referencia=""
                const valores = Object.values(item.atributos); 
               const listaid= await api.post("caracteristicas/buscarIds", valores,{headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
            }});
               listaid.data.forEach((item3:any)=> codigbarradefault+=item3)
            
                celdasatributos.forEach((item2,index)=>{
                  skun+="-"+ item.atributos[item2].substring(0,2)
                 
                
                 if(index=== celdasatributos.length-1){
 referencia+=item.atributos[item2]
                 }else{
                   referencia+=item.atributos[item2]+" "
                 }
                }
                  
                )
                   
                const variantedifiniva={
                  variante:{
                   skun:skun,
                   referenciaVariantes:referencia,
                   codigoBarras:item.codigobarras==="" ? codigbarradefault:item.codigobarras,
                   predeterminada:!multivariable,
                    
                    productoId: productoid>0 ? productoid : null,
                    productoVarianteId: productoid>0 ? item.productoVarianteId : null,
                  },

                  
                    detalles:listaid.data.length>0 ? [
                      { productoVarianteId: productoid>0 ? item.productoVarianteId : null,
                       caracteristicaId:listaid.data}
                    ]:[],

                    existencias:item.bodega,
                    precios:data.listaprecios,
                    

                }

                

               
                  Variantesbackdelete.push(variantedifiniva)
               
               }))



                        console.log("varaintes back",Variantesback)
                      if(!estadoproducto && productoid>0){
                        productobody={
                             estado: estadoproducto ? "ACTIVO":"INACTIVO",
                  productoid: productoid>0 ? productoid : null,
                   manejaVariantes: multivariable,
                        }

                        


                  
                 }
              console.log({producto:productobody,variantes:Variantesback})
              let produ;
                  if(productoid>0){
                    Promise.all( Variantesbackdelete.map( async item=>{
                      console.log("variante a eliminar",item)
                     const eliminarvariante= await api.delete(`variantes/${item.variante.productoVarianteId}`,{  headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
            }})
                      console.log("respuesta eliminacion",eliminarvariante)
                    }))
 produ=await api.put(`productoMaster/actualizar/${productoid}`,{producto:productobody,variantes:Variantesback},{  headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
            }})
           }else{
             produ=await api.post("productoMaster/crear",{producto:productobody,variantes:Variantesback},{  headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
            }})
           }

              /* const produ=await api.post("productoMaster/crear",{producto:productobody,variantes:Variantesback},{  headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
            }})*/
            
          
              
               methods.reset({
        ...methods.getValues(),
        tipoproducto: "",
         codigo:"",
        descripcion:"",
         referencia:"",
          unidadmedida:"",
          departamento:"",
          impuesto:"",
         codigobarra:"",
          costo:0,
        nanifesto:"",
          linea:"",
          grupo: "",
        listaprecios:[],
        variantes:[],
         imagenproducto:null
          
      });
      setvariantedefaulcodigo(0)
        setproductoid(0)
        setVariantesdelete([])
        setceldaatributos([])
        setvariantedefault({
          varianteid:0,
 descripcion:"",
 imagen:null
})
  setpagina(0)
        setVariantes([])
        settap(1)
        setmultivariable(false)
            setmodalformproducto(false)
         setvariantedefaulcodigo(0)
           console.log(produ)
             }
function cambiarPestana() {
 settap((prev) => (prev + 1))
                       if(!multivariable ){
                         setvariantedefault(prev=>({...prev,varianteid:variantedefaulcodigo,descripcion:methods.getValues("descripcion"),imagen:methods.getValues("imagenproducto")}))
                       }else{
                        console.log("limpiar default")
                        if(productoid>0){
                         // traervariantes()
                        }else{
                         setVariantes([])
                          setceldaatributos([])
                        }
                         
                       }
                     // e.stopPropagation();
}

             const onValid = (data: any) => {
               console.log("Formulario OK:", data);
               // aquí *solo si está validado* puedes cambiar de pestaña
               cambiarPestana();
             }
             
             const onInvalid = (errors: any) => {
               console.log("Faltan campos obligatorios:", errors);
             
             }

              const onError=(error)=>{
 console.log("variante",variantes,error)
             }
                 const { register,control,setValue, formState: { errors } } = methods;

                 const submitForm = methods.handleSubmit(onSubmit, onError);
    return ( <>
      <FormProvider {...methods}>
     <CModal
            alignment="center"
            scrollable
            visible={modalformproducto}
           onClose={()=>{
            setproductoid(0)
            setproduct(null)
             methods.reset({
        ...methods.getValues(),
        tipoproducto: "",
         codigo:"",
        descripcion:"",
         referencia:"",
          unidadmedida:"",
          departamento:"",
          impuesto:"",
         codigobarra:"",
          costo:0,
        nanifesto:"",
          linea:"",
          grupo: "",
        listaprecios:[],
        variantes:[],
         imagenproducto:null
          
      }); 
      setvariantedefault({
        varianteid:0,
 descripcion:"",
 imagen:null
})
      setVariantes([])
      settap(1)
      setestadoproducto(true)
      setmultivariable(false)
            setmodalformproducto(false)
            setproductoid(0)
            setpreciosva(0)
            setproduct(null)
            
           }}
            aria-labelledby="VerticallyCenteredScrollableExample2"
           className="col-12 contproduct"
          >
              <CModalHeader>
                      <CModalTitle id="VerticallyCenteredScrollableExample2">{productoid>0 ? "Modificación de productos" : "Creación de productos"}</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <form ref={fileInputRef} onSubmit={methods.handleSubmit(onSubmit,onError)}>
                      
                      {
                        
                        <Formprobasico multivariable={multivariable} setmultivariable={setmultivariable} style={`${tap===1 ? "":"none"}`}  productoid={productoid} setproductoid={setproductoid} product={product} setproduct={setproduct}  preciosva={preciosva} setpreciosva={setpreciosva}  estadoproducto={estadoproducto} setestadoproducto={setestadoproducto} variantes={variantes} setVariantes={setVariantes}  submitForm={submitForm} />
                       
                      }


                       {
                        tap===2?
                        <Variantes  variantedefault={variantedefault} multivariable={multivariable} setmultivariable={setmultivariable} variantes={variantes} setVariantes={setVariantes}  setceldaatributos={setceldaatributos}   variantesdelete={variantesdelete} setVariantesdelete={setVariantesdelete} estadoproducto={estadoproducto}/>
                        :null
                      }


                          </form> 
                    </CModalBody>

                    <CModalFooter style={{justifyContent: 'center',display:'flex'}} className="fottersucursal">
                      
                               <button type="button"  className="botonretroceder" onClick={()=>
                       settap((prev) => (prev - 1))
                      } style={tap<2 ? {display:'none'}:{display:''}}>Atras</button>
                    
                    
                           {tap>=2 ?  botonupdateu ? <button type="submit" className="botoncontinuarguardar"  key="guardar"    onClick={() => fileInputRef.current?.click()}>Actualizar</button>:<button type="button" className="botoncontinuarguardar"  key="guardar"    onClick={submitForm}>Guardar</button> :     <button type="button" className="botoncontinuar"  key="continuar" onClick={methods.handleSubmit(onValid, onInvalid)}>Continuar</button>}
                            </CModalFooter>

          </CModal>
          </FormProvider>
    </> );
}

export default Formproduct;


