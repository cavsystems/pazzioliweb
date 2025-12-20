import { CButton, CFormFloating, CFormLabel, CFormSelect, CInputGroup, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import { Controller, FormProvider, useForm, useFormContext } from "react-hook-form";
import Ojoquetodolove from "../../../icons/ojoquetodolove";
import { useEffect, useRef, useState } from "react";
import Formprobasico from "./formprobasico/formprobasico";
import Variantes from "./variantes";
import api from "../../../apicofig";
interface Variantedfault {
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

}
function Formproduct({modalformproducto,setmodalformproducto,productoid, setproductoid,product, setproduct,traerproductos}:any) {
const [multivariable,setmultivariable]=useState<boolean>(false)
    const fileInputRef = useRef<HTMLInputElement | null>(null);
     const [celdasatributos,setceldaatributos]=useState<string[]>([])
    const [variantedefault,setvariantedefault]=useState<Variantedfault>({
 descripcion:"",
 imagen:null
       
      })
        const [variantes, setVariantes] = useState<Variante[]>([]);
const traervariantes=async ()=>{
  const atributocelda:string[]=[]
   
             const variantback=await api.get(`variantes/detalles-producto/${productoid}`,{
      headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
            }
  })
  let atribu:{[key:string]:string}
  const multiva:{ productoVarianteId: number;
  imagen:string;
  
  atributos: { [key: string]:string}; // <--- dinámico
  bodega: bodegas[];
  
  codigobarras:string,}[]=[]
 variantback.data.content.map(item=>{
    item.detalles.forEach(item2=>{
      atribu={...atribu,[item2.tipo]:item2.caracteristicaNombre }
    })
        
    multiva.push({
    productoVarianteId: item.productoVarianteId,
    imagen: "",
    atributos:atribu,
    bodega: [],
    codigobarras: item.codigobarras ?? ""
  });

  

  
    
  })

  console.log( "multiva variante",variantback)
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
              console.log("variante",variantes,"data",data)

              let productobody={
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
               const Variantesback=[

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
                 
                const variantedifiniva={
                  variante:{
                   skun:skun,
                   referenciaVariantes:referencia,
                   codigoBarras:item.codigobarras==="" ? codigbarradefault:item.codigobarras,
                   predeterminada:!multivariable,
                    
                    productoId: null
                  },
                    detalles:listaid.data.length>0 ? [
                      { productoVarianteId: null,
                       caracteristicaId:listaid.data}
                    ]:[],

                    existencias:item.bodega,
                    precios:data.listaprecios
                   

                }

                

               
                  Variantesback.push(variantedifiniva)
               
               }))



                        console.log("varaintes back",Variantesback)

              console.log({producto:productobody,variantes:Variantesback})
           

               const produ=await api.post("productoMaster/crear",{producto:productobody,variantes:Variantesback},{  headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
            }})
               traerproductos()
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
            setmodalformproducto(false)
            console.log(produ)
             }
function cambiarPestana() {
 settap((prev) => (prev + 1))
                       if(!multivariable){
                         setvariantedefault(prev=>({...prev,descripcion:methods.getValues("descripcion"),imagen:methods.getValues("imagenproducto")}))
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
            setmodalformproducto(false)
           }}
            aria-labelledby="VerticallyCenteredScrollableExample2"
           className="col-12 contproduct"
          >
              <CModalHeader>
                      <CModalTitle id="VerticallyCenteredScrollableExample2">Creación de productos</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <form ref={fileInputRef} onSubmit={methods.handleSubmit(onSubmit,onError)}>
                      
                      {
                        
                        <Formprobasico multivariable={multivariable} setmultivariable={setmultivariable} style={`${tap===1 ? "":"none"}`}  productoid={productoid} setproductoid={setproductoid} product={product} setproduct={setproduct}/>
                       
                      }


                       {
                        tap===2?
                        <Variantes  variantedefault={variantedefault} multivariable={multivariable} setmultivariable={setmultivariable} variantes={variantes} setVariantes={setVariantes}  setceldaatributos={setceldaatributos}/>
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


