import { CButton, CFormFloating, CFormLabel, CFormSelect, CInputGroup, CModal, CModalBody, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import { Controller, FormProvider, useForm, useFormContext } from "react-hook-form";
import Ojoquetodolove from "../../../icons/ojoquetodolove";
import { useState } from "react";
import Formprobasico from "./formprobasico/formprobasico";

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
                        tap===1?
                        <Formprobasico/>
                        :null
                      }


                           
                    </CModalBody>

          </CModal>
          </FormProvider>
    </> );
}

export default Formproduct;