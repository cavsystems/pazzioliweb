import { Formlogin } from "./components/formlogin";
import "./styleslogin.scss"
import { CAlert, CButton, CCard, CCardBody, CCardHeader, CCardImage, CCardText, CCardTitle, CForm, CFormInput, CFormSelect, CInputGroup, CInputGroupText } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilUser,cilCc ,cilLockLocked, cilBurn} from '@coreui/icons'
 import { useForm, Controller, type SubmitHandler } from 'react-hook-form';
import { Authcontex } from "../../authcontext/autcontext";
 type Inputs = {
  documento: string;
   usuario: string;
   password: string;
   db: string;
};

export function Login() {
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
     db: '',
   }
 
 });
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
           <img src="/imgs/pazzioli.png" className="rounded dimensionesfondo" />
  <div className="row login-parent justify-content-center">
    
    <div className="col-12 col-sm-8 col-md-6 col-lg-6 col-xl-5 login-child">
      <div className="imagenlogin text-center">
        <img src="/imgs/pazzioli.png" className="rounded dimensiones" />
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
                <CIcon icon={cilCc} />
              </CInputGroupText>
              <CFormInput placeholder="Nombre de usuario"   {...register('documento', { required: 'Este campo es obligatorio' })}
    invalid={!!errors.documento}
    feedbackInvalid={errors.documento?.message} />
            </CInputGroup>

            <CInputGroup className="mb-3">
              <CInputGroupText>
                <CIcon icon={cilUser} />
              </CInputGroupText>
              <CFormInput placeholder="Nombre de usuario"  {...register('usuario', { required: 'Este campo es obligatorio' })}
    invalid={!!errors.usuario}
    feedbackInvalid={errors.usuario?.message} />
            </CInputGroup>

            <CInputGroup className="mb-3">
              <CInputGroupText>
                <CIcon icon={cilLockLocked} />
              </CInputGroupText>
              <CFormInput placeholder="Contraseña"  {...register('password', { required: 'Este campo es obligatorio' })}
    invalid={!!errors.password}
    feedbackInvalid={errors.password?.message} />
            </CInputGroup>

            <CInputGroup className="mb-3">
              <CFormSelect
                aria-label="Default select example"
                options={[
                  { label: 'pruebas' },
                
                ]}
              />
            </CInputGroup>

            <CInputGroup className="d-flex justify-content-center">
              <CButton color="success" type="submit">Continuar</CButton>
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