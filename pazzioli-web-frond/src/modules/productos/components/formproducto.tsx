import { CButton, CFormFloating, CFormLabel, CFormSelect, CInputGroup, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import { Controller, FormProvider, useForm, useFormContext } from "react-hook-form";
import Ojoquetodolove from "../../../icons/ojoquetodolove";
import { useState } from "react";
import Formprobasico from "./formprobasico/formprobasico";
import Variantes from "./variantes";

function Formproduct() {

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
            visible={true}
           
            aria-labelledby="VerticallyCenteredScrollableExample2"
           className="col-12 contproduct"
          >
              <CModalHeader>
                      <CModalTitle id="VerticallyCenteredScrollableExample2">Creación de productos</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        
                      
                      {
                        tap===1 &&
                        <Formprobasico/>
                       
                      }


                       {
                        tap===2?
                        <Variantes/>
                        :null
                      }


                           
                    </CModalBody>

                    <CModalFooter style={{justifyContent: 'center',display:'flex'}} className="fottersucursal">
                               <button type="button"  className="botonretroceder" onClick={()=>
                       settap((prev) => (prev - 1))
                      } style={tap<2 ? {display:'none'}:{display:''}}>Atras</button>
                    
                    
                           {tap>=2 ?  botonupdateu ? <button type="submit" className="botoncontinuarguardar"  key="guardar"    onClick={methods.handleSubmit(onSubmit, onError)}>Actualizar</button>:<button type="submit" className="botoncontinuarguardar"  key="guardar"    onClick={methods.handleSubmit(onSubmit, onError)}>Guardar</button> :     <button type="button" className="botoncontinuar"  key="continuar" onClick={(e)=>{
                       settap((prev) => (prev + 1))
                      e.stopPropagation();}
                      }>Continuar</button>}
                            </CModalFooter>

          </CModal>
          </FormProvider>
    </> );
}

export default Formproduct;