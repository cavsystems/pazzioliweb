
import "./styleslogin.scss"
import { CAlert, CButton, CCard, CCardBody, CCardHeader, CCardImage, CCardText, CCardTitle, CForm, CFormFeedback, CFormInput, CFormSelect, CInputGroup, CInputGroupText } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilUser,cilCc ,cilLockLocked, cilBurn} from '@coreui/icons'
 import { useForm, Controller, type SubmitHandler } from 'react-hook-form';
import { Authcontex } from "../authcontext/autcontext";
import { useEffect, useState } from "react";
 type Inputs = {
  documento: string;
   usuario: string;
   password: string;
   db: string;
};

 export  function Login() {
  //react-hook-form para manejar el formulario
   //con useForm se crea un hook que maneja el estado del formulario
   //destructuramos el hook para obtener las funciones y variables que necesitamos
   //control: para controlar el formulario
    const { control, handleSubmit, register,  watch, formState: { errors ,isSubmitted } } = useForm({
        mode: 'onBlur',
   defaultValues: {
     documento: '',
     usuario: '',
     password: '',
     db: ' ',
   }
 
 });
 const [iconos,seticonos]=useState({
  documento:''
 })
 useEffect(() => {
  const loadIcon = async () => {
    try {
      const svg = await iconossvg("/imgs/documento.svg");
      const b64 = btoa(svg);
     
      console.log(svg)
      seticonos(prev => ({
        ...prev,
          documento: `data:image/svg+xml;base64,${b64}`
        
      }));
    } catch (err) {
      console.error("Error cargando svg:", err);
    }
  };
  loadIcon();
}, []);
 const imagenpazzioliweb=()=>{
   return <>
   <img src="/imgs/pazzioliweb.svg"   className="rounded dimensiones" />
   </>
 }


async function iconossvg(path: string): Promise<string> {
  const res = await fetch(path)
 const icon= await res.text()
  
return icon
}

const {login}=Authcontex()
//funcion que se ejecuta al enviar el formulario
  //handleSubmit es una funcion de react-hook-form que se encarga de manejar el envio del formulario
  const onSubmit: SubmitHandler<Inputs> =async (data) => {
  await login({
    login:data.usuario,
    password:data.password,
    db:data.db
  })
      }
    return (
        <>
        
         <div className="container-fluid bg-back-ground-login    min-vh-100  overflow-hiddenlogin">
           <img src="/imgs/pazziolilogo.svg" className="rounded dimensionesfondo" />
  <div className="row login-parent justify-content-center">
    
    <div className="col-12 col-sm-8 col-md-5 col-lg-5 col-xl-5 login-child">
      <div className="imagenlogin text-center">
        {imagenpazzioliweb()}
      </div>

      <CCard >
        <CCardHeader className="p-0"  >
          
         <CAlert color="danger" className="d-flex align-items-center h-10 m-0">
      
        <div className="letrapazzioli">An example danger alert with an icon</div>
      </CAlert>
            
        </CCardHeader>
        <CCardBody>
          <CCardTitle className="font-stretch-normal letrapazzioli">Iniciar sesión</CCardTitle>

          <CForm className="row"  onSubmit={handleSubmit(onSubmit)}>
            <CInputGroup className={`mb-3 has-validation ${errors.documento ? 'is-invalid' : ''}`}>
              <CInputGroupText>
                  <img src="/imgs/documento.svg"/>
              </CInputGroupText>
              <CFormInput placeholder="Nombre de usuario"   {...register('documento', { required: 'Este campo es obligatorio' })}
    invalid={isSubmitted && !!errors.documento}
    feedbackInvalid={isSubmitted &&  errors.documento?.message} />
            </CInputGroup>

            <CInputGroup className="mb-3">
              <CInputGroupText>
              <img src="/imgs/usuario.svg"/>
              </CInputGroupText>
              <CFormInput placeholder="Nombre de usuario"  {...register('usuario', { required: 'Este campo es obligatorio' })}
    invalid={ isSubmitted &&  !!errors.usuario}
    feedbackInvalid={isSubmitted && errors.usuario?.message} />
            </CInputGroup>

            <CInputGroup className="mb-3">
              <CInputGroupText>
                  <img src="/imgs/password.svg"/>
              </CInputGroupText>
              <CFormInput placeholder="Contraseña"  {...register('password', { required: 'Este campo es obligatorio' })}
    invalid={isSubmitted &&  !!errors.password}
    feedbackInvalid={isSubmitted &&  errors.password?.message} />
            </CInputGroup>
       
            <CInputGroup className="mb-3">
               <Controller  
            name="db"
  control={control}
  rules={{ required: 'Debes seleccionar una opción' }}
  render={({ field }) => (
    <>
      <CFormSelect
        {...field}
         defaultValue=""
        invalid={isSubmitted && !!errors.db}
        options={[  { label: 'pruebas' }, ]}
      />
      {errors.db && (
        <CFormFeedback invalid>
          {errors.db.message}
        </CFormFeedback>
      )}
    </>
  )}/>
            </CInputGroup>

            <CInputGroup className="d-flex justify-content-center">
              <CButton color="success" type="submit" style={{backgroundColor:"#97BD13", color:"#ffff" ,padding:'8px 30px'}} className="mt-3">Continuar</CButton>
            </CInputGroup>
          </CForm>
        </CCardBody>
      </CCard>
    </div>
  </div>

</div>

        </>
      );
}

  ;