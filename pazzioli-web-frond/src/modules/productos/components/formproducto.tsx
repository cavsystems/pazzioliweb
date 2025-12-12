import { CButton, CFormFloating, CFormLabel, CFormSelect, CInputGroup, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import { Controller, FormProvider, useForm, useFormContext } from "react-hook-form";
import Ojoquetodolove from "../../../icons/ojoquetodolove";
import { useRef, useState } from "react";
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
function Formproduct({modalformproducto,setmodalformproducto}:any) {
const [multivariable,setmultivariable]=useState<boolean>(false)
    const fileInputRef = useRef<HTMLInputElement | null>(null);
     const [celdasatributos,setceldaatributos]=useState<string[]>([])
    const [variantedefault,setvariantedefault]=useState<Variantedfault>({
 descripcion:"",
 imagen:null
       
      })
        const [variantes, setVariantes] = useState<Variante[]>([]);
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
             const onSubmit=(data:{
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
              console.log("variante",variantes)

              let productobody={
                codigo_contable:data.codigo,
    codigo_barras:data.codigobarra,
    referencia: data.referencia,
    descripcion: data.descripcion,
    costo:data.costo,
   
    impuesto_id:data.impuesto!=="" ? Number(data.impuesto):0 ,
    linea_id:data.linea!=="" ?  Number(data.linea):0,
    grupo_id: data.grupo!=="" ?  Number(data.grupo):0,
    manifiesto: "",
    maneja_variantes: multivariable,
    unidadesMedida: [1] ,
    variantes:[]

              }
               const Variantesback=[

               ]

               variantes.forEach( async item=>{
                /* armar skunvaliante*/
                let skun=methods.getValues("referencia")
                let referencia=""
                const valores = Object.values(item.atributos); 
               const listaid= await api.post("caracteristicas/buscarIds", valores,{headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
            }});

            console.log(listaid,item)
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
                   skun:skun,
                   referenciaVariantes:referencia,
                   codigoBarras:item.codigobarras,
                   predeterminada:multivariable,
                    productoId: null,
                    detalles:{
                       productoVarianteId: null,
                       caracteristicaId:listaid.data
                    },

                    existencias:item.bodega,
                    precios:data.listaprecios

                }

                

               
                  Variantesback.push(variantedifiniva)
               
               })





                 productobody={
                  ...productobody,variantes:Variantesback
                 }
                 console.log(productobody)
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
                        
                        <Formprobasico multivariable={multivariable} setmultivariable={setmultivariable} style={`${tap===1 ? "":"none"}`}/>
                       
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
                    
                    
                           {tap>=2 ?  botonupdateu ? <button type="submit" className="botoncontinuarguardar"  key="guardar"    onClick={() => fileInputRef.current?.click()}>Actualizar</button>:<button type="button" className="botoncontinuarguardar"  key="guardar"    onClick={submitForm}>Guardar</button> :     <button type="button" className="botoncontinuar"  key="continuar" onClick={(e)=>{
                       settap((prev) => (prev + 1))
                       if(!multivariable){
                         setvariantedefault(prev=>({...prev,descripcion:methods.getValues("descripcion"),imagen:methods.getValues("imagenproducto")}))
                       }
                      e.stopPropagation();}
                      }>Continuar</button>}
                            </CModalFooter>

          </CModal>
          </FormProvider>
    </> );
}

export default Formproduct;