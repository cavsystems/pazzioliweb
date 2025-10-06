import { CButton, CFormFloating, CFormInput, CFormLabel, CFormSelect, CInputGroup, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from "@coreui/react";
import { useEffect, useState } from "react";
import Formusuario from "./Formusuario";
import Addbodega from "./Addbogada";
import { useForm, FormProvider } from 'react-hook-form';
import Addroles from "./addroles";
import { usuariocontex } from "../contextusuario";
interface municipio{
  codigo:number,
codigoDepartamento:number,
codigoMunicipio?:number,
municipio:string,
}
interface municipios{
  municipio:municipio[]
}




export function Modalusuario() {

     const methods = useForm({
             mode: 'onSubmit',
              shouldUnregister: false,
            defaultValues: {
           apellido: "",
contrasena: "",
direccion: "",
identificacion: "",
nombre: "",
rol: '',
usuario: ""  , 
estado:"ACTIVO", 
bodegas:[ ]    
              // Agrega todos los campos que usas en todos los pasos
            },
          });
    
const onSubmit = async (data: any) => {
    console.log(data,"data formulario")
  };
  const onError = (errors:any) => {
  console.log(errors,"errores formulario")

};
 
const { tituloactual,
setTituloactual}=usuariocontex();
    const [itemsformusuario,setformusuario]=useState<number>(1)

    useEffect(()=>{
        setTituloactual(itemsformusuario===1 ? "Datos Generales": itemsformusuario===2 ? "Asignar Roles": itemsformusuario===3 ? "Asignar Bodegas":"")
        console.log(itemsformusuario,"tituloactual")
    },[itemsformusuario])
    return ( 
        <>
      <FormProvider {...methods} >
      
        <CModal
        alignment="center"
        scrollable
        visible={true}
       
        aria-labelledby="VerticallyCenteredScrollableExample2"
       className="col-12"
      >
        <CModalHeader>
            
          <CModalTitle id="VerticallyCenteredScrollableExample2">{tituloactual}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          < Formusuario style={{ display:itemsformusuario===1  ? "":"none" }}/>
            < Addroles style={{ display:itemsformusuario===2  ? "flex":"none"  , marginTop: "20px" }}/>
        <Addbodega style={{ display:itemsformusuario===3  ? "":"none" }}/>
       
        </CModalBody>
        <CModalFooter style={{justifyContent: 'center',display:'flex'}} className="fottersucursal">
           <button type="button"  className="botonretroceder" onClick={()=>
   setformusuario((prev) => (prev - 1))
  } style={itemsformusuario<2 ? {display:'none'}:{display:''}}>Atras</button>


       {itemsformusuario>=3 ?  <button type="submit" className="botoncontinuarguardar"  key="guardar"    onClick={methods.handleSubmit(onSubmit, onError)}>Guardar</button> :     <button type="button" className="botoncontinuar"  key="continuar" onClick={(e)=>{
    setformusuario((prev) => (prev + 1))
  e.stopPropagation();}
  }>Continuar</button>}
        </CModalFooter>
      </CModal>
      
      </FormProvider>
      
        </>
     );
}
