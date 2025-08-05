import { CFormFloating, CFormInput, CFormLabel, CFormSelect, CInputGroup, CInputGroupText } from "@coreui/react";
import { useFormContext } from "react-hook-form";
import { Identificacion } from "./components/Identifiicaciones";
import Nombres from "./components/nombres";
import Contacto from "./components/Contacto";
import Ubicacion from "./components/Ubicacion";
import Imagenpazzioli from "./components/Imagenpazioli";
import { Datosfiscales } from "./components/Datosfiscales";

 export function Datosgenrales() {
  const { register } = useFormContext();
    return (  
        <>
        <div className="row">
            <Identificacion register={register}  CInputGroup={CInputGroup}
  CFormInput={CFormInput}
  CFormSelect={CFormSelect}
  CFormFloating={CFormFloating}
  CFormLabel={CFormLabel}/>

            <Nombres register={register}  CInputGroup={CInputGroup}
  CFormInput={CFormInput}
  CFormSelect={CFormSelect}
  CFormFloating={CFormFloating}
  CFormLabel={CFormLabel}/>
<Datosfiscales
register={register}  CInputGroup={CInputGroup}
  CFormInput={CFormInput}
  CFormSelect={CFormSelect}
  CFormFloating={CFormFloating}
  CFormLabel={CFormLabel}
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
  />




  <Imagenpazzioli CFormInput={CFormInput}/>
        </div>
        </>
    );
}

