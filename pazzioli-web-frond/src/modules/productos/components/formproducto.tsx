import { CButton, CFormFloating, CFormLabel, CFormSelect, CInputGroup, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import { Controller, FormProvider, useForm, useFormContext } from "react-hook-form";
import Ojoquetodolove from "../../../icons/ojoquetodolove";
import { useState } from "react";
import Formprobasico from "./formprobasico/formprobasico";
import Variantes from "./variantes";
interface Variantedfault {
 descripcion:string,
 imagen:  File | null;
}
function Formproduct({modalformproducto,setmodalformproducto}:any) {
const [multivariable,setmultivariable]=useState<boolean>(false)
    const [variantedefault,setvariantedefault]=useState<Variantedfault>({
 descripcion:"",
 imagen:null
       
      })
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
             const onSubmit=()=>{

             }

              const onError=()=>{

             }
                 const { register,control,setValue, formState: { errors } } = methods;
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
                        
                      
                      {
                        
                        <Formprobasico multivariable={multivariable} setmultivariable={setmultivariable} style={`${tap===1 ? "":"none"}`}/>
                       
                      }


                       {
                        tap===2?
                        <Variantes  variantedefault={variantedefault} multivariable={multivariable} setmultivariable={setmultivariable}/>
                        :null
                      }


                           
                    </CModalBody>

                    <CModalFooter style={{justifyContent: 'center',display:'flex'}} className="fottersucursal">
                      
                               <button type="button"  className="botonretroceder" onClick={()=>
                       settap((prev) => (prev - 1))
                      } style={tap<2 ? {display:'none'}:{display:''}}>Atras</button>
                    
                    
                           {tap>=2 ?  botonupdateu ? <button type="submit" className="botoncontinuarguardar"  key="guardar"    onClick={methods.handleSubmit(onSubmit, onError)}>Actualizar</button>:<button type="submit" className="botoncontinuarguardar"  key="guardar"    onClick={methods.handleSubmit(onSubmit, onError)}>Guardar</button> :     <button type="button" className="botoncontinuar"  key="continuar" onClick={(e)=>{
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