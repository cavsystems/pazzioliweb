
import "./styleslogin.scss"
import { CAlert, CButton, CCard, CCardBody, CCardHeader, CCardImage, CCardText, CCardTitle, CForm, CFormFeedback, CFormInput, CFormSelect, CInputGroup, CInputGroupText } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilUser,cilCc ,cilLockLocked, cilBurn} from '@coreui/icons'
 import { useForm, Controller, type SubmitHandler } from 'react-hook-form';
import { Authcontex } from "../authcontext/autcontext";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { receiveMessage } from "../authslice/uathslice";
 type Inputs = {
  documento: string;
   usuario: string;
   password: string;
   db: string;
};

 export  function Login() {
  const [opciones,setopciones]=useState([{
label:'',value:''
  }])
  const haEjecutado = useRef(false);
  const socket = useAppSelector(state => state.authglobal.socketclient);
  const mensajesocket = useAppSelector(state => state.authglobal.mensajesocketout);
  const dispatch=useAppDispatch();
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
  console.log('mensajesocket', mensajesocket);
     if (mensajesocket.length > 0) {
    const opciones = mensajesocket[0].map((item: any) => (
    
      {
      label: item.nombreconexion,
      value: item.nombreconexion // esto es clave para que <CFormSelect> lo interprete
    }));
    setopciones(opciones);
  }
       

}, [mensajesocket]);

useEffect(() => {
    
       console.log('opciones', opciones);

}, [opciones]);
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
        
         <div className=" bg-back-ground-login overflow-hiddenlogin">
           <img src="/imgs/pazziolilogo.svg" className="dimensionesfondo" />
  <div className="row login-parent justify-content-center vh-100 align-items-end align-items-md-center overflow-y-auto  ">
    
    <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-5 login-child p-4  px-md-5 px-lg-6  p-sm-3 logincontainer">
      <div className="imagenlogin text-center">
        {imagenpazzioliweb()}
      </div>

      <CCard  className="bordercard px-3">
        <CCardHeader className="p-0 visually-hidden"   >
          
         <CAlert color="danger" className="d-flex align-items-center h-10 m-0 ">
      
        <div className="letrapazzioli">An example danger alert with an icon</div>
      </CAlert>
            
        </CCardHeader>
        <CCardBody>
          <CCardTitle className="fonttitle pt-3 pb-3">Iniciar sesión</CCardTitle>

          <CForm className="row"  onSubmit={handleSubmit(onSubmit)}>
            <CInputGroup className={`mb-3 has-validation ${errors.documento ? 'is-invalid' : ''}`}>
              <CInputGroupText>
                  <img src="/imgs/documento.svg"/>
              </CInputGroupText>
              <CFormInput placeholder="Identificacion"   {...register('documento', { required: 'Este campo es obligatorio' })}
    invalid={isSubmitted && !!errors.documento}
    feedbackInvalid={isSubmitted &&  errors.documento?.message}  onBlur={(e)=>{
      socket.publish(  {
      destination: '/app/empresa',
      body: JSON.stringify({ identificacion:e.target.value  })});

  
    }} className="p-2"/>
            </CInputGroup>
              

            <CInputGroup className="mb-3">
              <CInputGroupText>
              <img src="/imgs/usuario.svg"/>
              </CInputGroupText>
              <CFormInput placeholder="Nombre de usuario"  {...register('usuario', { required: 'Este campo es obligatorio' })}
    invalid={ isSubmitted &&  !!errors.usuario}
    feedbackInvalid={isSubmitted && errors.usuario?.message} className="p-2" />
            </CInputGroup>

            <CInputGroup className="mb-3 " >
              <CInputGroupText>
                  <img src="/imgs/password.svg"/>
              </CInputGroupText>
              <CFormInput placeholder="Contraseña"  {...register('password', { required: 'Este campo es obligatorio' })}
    invalid={isSubmitted &&  !!errors.password}
    feedbackInvalid={isSubmitted &&  errors.password?.message} className="p-2" />
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
  className="fontletre p-2"
>
 { opciones.length>1 && <option value="">Seleccione una empresa</option>}
  {opciones.map((opcion, index) => (
    <option key={index} value={opcion.value}>
      {opcion.label}
    </option>
  ))}
</CFormSelect>
      {errors.db && (
        <CFormFeedback invalid>
          {errors.db.message}
        </CFormFeedback>
      )}
    </>
  )}/>
            </CInputGroup>
            <CInputGroup className="d-flex justify-content-center">
              <CButton  type={opciones.length>0 ? "submit":"button"}  className={`mt-2  ${opciones.length>0  ? "botonloginsucess":"botonlogindisabled"}`} disabled={opciones.length>0}  > <span className="spanlogin">Continuar</span></CButton>
            </CInputGroup>

            
          </CForm>
        </CCardBody>
      </CCard>
      <div className="col-12 justify-content-center d-flex imagencavdiv align-items-center">
      <img src="/imgs/cavsystems.svg " className="imagencav"/>
    </div>
    </div>
    
  </div>

</div>

        </>
      );
}

  ;