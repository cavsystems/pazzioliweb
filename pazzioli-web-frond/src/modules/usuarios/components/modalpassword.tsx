import { CAlert, CFormFloating, CFormInput, CFormLabel, CInputGroup, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from "@coreui/react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Modalconfirmar from "../../../components/alertconfimacion";
import api from "../../../apicofig";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Puedes usar cualquier ícono

function Modalpassword({modalpass,setmodalpass,idtercero,setidtercero}:any) {

    const [errorbodega,seterrorbodega]=useState<boolean>(false)
    const [mensajeerror,setmensajeerror]=useState<string>("")
    const [confirmar,setconfirmar]=useState<boolean>(true)
    const [tipoicon,settipoicon]=useState<string>("success")
    const [modalconfir, setmodalconfirmar]=useState<boolean>(false)
      const [showPass, setShowPass] = useState(true);
       const [showPass2, setShowPass2] = useState(true);


     const methods = useForm({
                 mode: 'onSubmit',
                  shouldUnregister: false,
                defaultValues: {
             
    contrasena: "",
    confirmarcontrasena:"",
    
                  // Agrega todos los campos que usas en todos los pasos
                },
              });

                
              const onSubmit = async (data: any) => {
               if(data.contrasena!=data.confirmarcontrasena){
                  seterrorbodega(true)
                  setmensajeerror("Contraseña no coincide")

                  setTimeout(()=>{
                   seterrorbodega(false)
                   setmensajeerror("")
                  },1000)
                  return
               }
               try {
                  const actulizarcontrasena=await api.put(`usuario/actualizar/id/${idtercero}`,{contrasena:data.contrasena},
               {
            headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
            }}
               )
                console.log("actulizar contrasena",actulizarcontrasena)
                if(actulizarcontrasena.data){
                setmodalconfirmar(true)
                }
               } catch (error) {
                
               }
             

              
                 
             
                 
                };
                const onError = (errors:any) => {
              
              };

              const confirmarmodal =() =>{
                methods.setValue("contrasena","")
                 methods.setValue("confirmarcontrasena","")
                  setmodalconfirmar(false)
                }
    return ( <>
       <FormProvider {...methods} >
          
            <CModal
            alignment="center"
            scrollable
            visible={modalpass}
             backdrop="static"
            onClose={()=>{
              setmodalpass(false)
              setidtercero(0)
            }}
            aria-labelledby="VerticallyCenteredScrollableExample2"
           className="col-12 modalusupassword"
           
               
          >
            <CModalHeader>
                
              <CModalTitle id="VerticallyCenteredScrollableExample2">Restablecer contraseña</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <div className="row" >
                       
             
             
             
             
             
                
                         
                           
             
             
             
                         <div className="col-12 paddingempresamodal">
                                <CAlert color="danger" className="fontdanger"  style={{display: errorbodega ? "":"none", color: "#555555"}}>{mensajeerror}</CAlert>
                            </div>                
             
             
             
                            
                                  <div className="col-12 d-flex  usuariomodal  paddingempresamodal"  style={{gap:"12px"}}>
                      
                      <CInputGroup >
                             <CFormFloating className="margeniputempresa">
                           <CFormInput placeholder=""  className="inputdatosempresa fontletre"  type={showPass2 ? `password`:"text"}  {... methods.register('contrasena', { required: 'Este campo es obligatorio' }
               )} 
               />
             
                 {methods.formState.errors.contrasena? (
                   <CFormLabel style={{ color: "red" }}>Contraseña*</CFormLabel>
                 ) : (
                   <CFormLabel>Contraseña</CFormLabel>
                 )}

                    <div
          onClick={() => setShowPass2(!showPass2)}
          style={{
            position: "absolute",
            right: "12px",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
            color: "#666"
          }}
        >
          {showPass2 ? <FaEyeSlash /> : <FaEye />}
        </div>
               </CFormFloating>

              
                         </CInputGroup>
                          
             
                        <CInputGroup >
                             <CFormFloating className="margeniputempresa">
                           <CFormInput placeholder=""  className="inputdatosempresa fontletre"    type={showPass ? `password`:"text"}      {...methods.register('confirmarcontrasena' ,{ required: 'Este campo es obligatorio' }) }  
               />
             
                
                 {methods.formState.errors.confirmarcontrasena? (
                   <CFormLabel style={{ color: "red" }}>confirmar contraseña*</CFormLabel>
                 ) : (
                   <CFormLabel>confirmar contraseña</CFormLabel>
                 )}
              
               <div
          onClick={() => setShowPass(!showPass)}
          style={{
            position: "absolute",
            right: "12px",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
            color: "#666"
          }}
        >
          {showPass ? <FaEyeSlash /> : <FaEye />}
        </div>
               </CFormFloating>
                         </CInputGroup>
             
                            </div>

                            </div>
              { modalconfir && <Modalconfirmar   modalconfir={modalconfir} setmodalconfirmar={setmodalconfirmar} confirmar={confirmar}  setconfirmar={setconfirmar} tipoicon={"success"} texto={'Contraseña restablecida'} boton3={true} textoboton={"Continuar"} funcion={confirmarmodal}/>}
            </CModalBody>
            <CModalFooter style={{justifyContent: 'center',display:'flex'}} className="fottersucursal">

    
    
           <button type="submit" className="botoncontinuarguardar"  key="guardar"    onClick={methods.handleSubmit(onSubmit, onError)}> Restablecer</button> 
       
            </CModalFooter>
          </CModal>
          
          </FormProvider>
          
    </> );
}

export default Modalpassword;