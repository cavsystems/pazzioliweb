import { CFormFloating, CFormInput, CFormLabel, CFormSelect, CInputGroup, CInputGroupText } from "@coreui/react";
import { Controller, useFormContext } from "react-hook-form";
import { Identificacion } from "./components/Identifiicaciones";
import Nombres from "./components/nombres";
import Contacto from "./components/Contacto";
import Ubicacion from "./components/Ubicacion";
import Imagenpazzioli from "./components/Imagenpazioli";
import { Datosfiscales } from "./components/Datosfiscales";
import { useEffect, useState } from "react";
import api from "../../../apicofig";

 export function Datosgenrales({datosempresa,setdatosempresa}:any) {
  const { register,control } = useFormContext();
  

   
  const [juridico,setjuridico]  =useState(true)
  const [natural,setnatural]=useState(true)
  useEffect( () => {
    traerinformacion();
   
  },[])
   useEffect(()=>{
   console.log("jurico",juridico)
  },[juridico,natural])
  const traerinformacion= async ()=>{
    let datos=await api.get('/empresa/traerempresa')
   
   setdatosempresa(datos.data.datos)
   console.log(datos.data.datos)

  }
    return (  
        <>
        <div className="row">
            <Identificacion register={register}  control={control} CInputGroup={CInputGroup}
  CFormInput={CFormInput}
  CFormSelect={CFormSelect}
  CFormFloating={CFormFloating}
  CFormLabel={CFormLabel}
  datosempresa={datosempresa}
  juridico={{juridico,setjuridico}}
  natural={{natural,setnatural}}/>

            <Nombres register={register}  CInputGroup={CInputGroup}
  CFormInput={CFormInput}
  CFormSelect={CFormSelect}
  CFormFloating={CFormFloating}
  CFormLabel={CFormLabel}
    juridico={{juridico,setjuridico}}
  natural={{natural,setnatural}}/>
<Datosfiscales
register={register}  CInputGroup={CInputGroup}
  CFormInput={CFormInput}
  CFormSelect={CFormSelect}
  CFormFloating={CFormFloating}
  CFormLabel={CFormLabel}
    datosempresa={datosempresa}
/>

  <Contacto  register={register}  CInputGroup={CInputGroup}
  CFormInput={CFormInput}
  CFormSelect={CFormSelect}
  CFormFloating={CFormFloating}
  CFormLabel={CFormLabel}/>

  <Ubicacion
  register={register}  CInputGroup={CInputGroup}
  CFormInput={CFormInput}
  CFormSelect={CFormSelect}
  CFormFloating={CFormFloating}
  CFormLabel={CFormLabel}
  datosempresa={datosempresa}
  />




  <Imagenpazzioli CFormInput={CFormInput}/>
        </div>
        </>
    );
}

