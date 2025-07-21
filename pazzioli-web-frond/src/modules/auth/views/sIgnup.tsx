import { useForm, type SubmitHandler } from "react-hook-form";
import { Authcontex } from "../authcontext/autcontext";
import "./styleslogin.scss"
import { CAlert, CButton, CCard, CCardBody, CCardHeader, CCardTitle, CForm, CFormInput, CFormSelect, CInputGroup, CInputGroupText, CModal, CModalBody } from "@coreui/react";
import { Modalsinup } from "./components/modal";
import CIcon from "@coreui/icons-react";
import { cilWarning } from "@coreui/icons";
type Inputs = {
  documento: string;
   usuario: string;
   password: string;
   gmail:string;

};
export function Signup() {
     //react-hook-form para manejar el formulario
       //con useForm se crea un hook que maneja el estado del formulario
       //destructuramos el hook para obtener las funciones y variables que necesitamos
       //control: para controlar el formulario
        const { control, handleSubmit, register,  watch, formState: { errors } } = useForm({
            mode: 'onBlur',
       defaultValues: {
         documento: '',
         usuario: '',
         password: '',
         gmail:'',
         db: '',
       }
     
     });
   
     const imagenpazzioliweb=()=>{
       return <>
       <img src="/imgs/pazzioliweb.svg"   className="rounded dimensiones" />
       </>
     }
    
    
   
    
    const {login}=Authcontex()
    //funcion que se ejecuta al enviar el formulario
      //handleSubmit es una funcion de react-hook-form que se encarga de manejar el envio del formulario
      const onSubmit: SubmitHandler<Inputs> =async (data) => {
      await login({
        login:data.usuario,
        password:data.password,
        
      })
          }
    return ( 

        <>
                  <div className="container-fluid bg-back-ground-login    min-vh-100  overflow-hiddenlogin">
                    <img src="/imgs/pazziolilogo.svg" className="rounded dimensionesfondo" />
           <div className="row login-parent justify-content-center">
             

              <CModal
        alignment="center"
        scrollable
        visible={true}
        
        aria-labelledby="VerticallyCenteredScrollableExample2"
      >
         <CModalBody className="d-flex">
          <Modalsinup type="text" icon={  <CIcon icon={cilWarning} className="text-white" size="lg" />
} texto="Te llego un codigo de verificacion "/>
         </CModalBody>
      </CModal>
             <div className="col-12 col-sm-8 col-md-6 col-lg-6 col-xl-5 login-child">
               <div className="imagenlogin text-center">
                 {imagenpazzioliweb()}
               </div>
         
               <CCard >
                 <CCardHeader className="p-0"  >
                   
                  <CAlert color="danger" className="d-flex align-items-center h-10 m-0">
               
                 <div>An example danger alert with an icon</div>
               </CAlert>
                     
                 </CCardHeader>
                 <CCardBody>
                   <CCardTitle className="font-stretch-normal">Iniciar sesión</CCardTitle>
         
                   <CForm className="row"  onSubmit={handleSubmit(onSubmit)}>
                     <CInputGroup className={`mb-3 has-validation ${errors.documento ? 'is-invalid' : ''}`}>
                       <CInputGroupText>
                           <img src="/imgs/documento.svg"/>
                       </CInputGroupText>
                       <CFormInput placeholder="documento o nit"   {...register('documento', { required: 'Este campo es obligatorio' })}
             invalid={!!errors.documento}
             feedbackInvalid={errors.documento?.message} />
                     </CInputGroup>
         
                     <CInputGroup className="mb-3">
                       <CInputGroupText>
                       <img src="/imgs/usuario.svg"/>
                       </CInputGroupText>
                       <CFormInput placeholder="Nombre de usuario"  {...register('usuario', { required: 'Este campo es obligatorio' })}
             invalid={!!errors.usuario}
             feedbackInvalid={errors.usuario?.message} />
                     </CInputGroup>
         
                     <CInputGroup className="mb-3">
                       <CInputGroupText>
                           <img src="/imgs/password.svg"/>
                       </CInputGroupText>
                       <CFormInput placeholder="Contraseña"  {...register('password', { required: 'Este campo es obligatorio' })}
             invalid={!!errors.password}
             feedbackInvalid={errors.password?.message} />
                     </CInputGroup>

                        <CInputGroup className="mb-3">
                       <CInputGroupText>
                           <img src="/imgs/password.svg"/>
                       </CInputGroupText>
                       <CFormInput placeholder="Contraseña"  {...register('password', { required: 'Este campo es obligatorio' })}
             invalid={!!errors.password}
             feedbackInvalid={errors.password?.message} />
                     </CInputGroup>



                           <CInputGroup className="mb-3">
                       <CInputGroupText>
                        @
                       </CInputGroupText>
                       <CFormInput placeholder="gmail"  {...register('gmail', { required: 'Este campo es obligatorio' })}
             invalid={!!errors.password}
             feedbackInvalid={errors.password?.message} />
                     </CInputGroup>
         
                     
         
                     <CInputGroup className="d-flex justify-content-center">
                       <CButton color="success" type="submit" style={{backgroundColor:"#97BD13", color:"#ffff" ,padding:'8px 30px'}} className="mt-3">Registrarse</CButton>
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

