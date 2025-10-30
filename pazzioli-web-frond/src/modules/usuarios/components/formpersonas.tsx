import { CFormFloating, CFormInput, CFormLabel, CFormSelect, CInputGroup, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from "@coreui/react";
import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from "react";
import { Controller, FormProvider, useForm, useFormContext } from "react-hook-form";
import type { BsBorderLeft } from "react-icons/bs";
import api from "../../../apicofig";
import { usuariocontex } from "../contextusuario";
import { usePickerLayout } from "@mui/x-date-pickers";
type FormData = {
  nombre: string;
  direccion: string;
  correo: string;
  imagenperfil: File | null;
   apellido:string;
   estado:string;
    identificacion:string
     codigousuario:number
     codigocliente:number
};
function Personasform({codigousuario,setCodigousuario,setVisibleform,visibleform,Actualizar,setActualizar}:{codigousuario:number,setCodigousuario:Dispatch<SetStateAction<number>>,visibleform:boolean,setVisibleform:Dispatch<SetStateAction<boolean>>,Actualizar:boolean,setActualizar:Dispatch<SetStateAction<boolean>>}) {

      const [preview, setPreview] = useState<string | null>(null);
      const [imagentitulo,setimagentitulo]=useState<String>("Imagen seleccionada")
     const fileInputRef = useRef<HTMLInputElement | null>(null);
     const {usuarioperselect ,setUsuarioselect}=usuariocontex();

  const handleClick = () => {

    fileInputRef.current?.click();
  };
useEffect(()=>{

},[usuarioperselect])
  const handleClick2= () =>{
    console.log("entro aqui")
    methods.handleSubmit(onSubmit,onError)()
  }
    const methods = useForm<FormData>({
         mode: 'onSubmit',
          shouldUnregister: false,
        defaultValues: {
        nombre:"",
        apellido:"",
        direccion:"",
        correo:"",
        estado:"ACTIVO",
        imagenperfil:null,
        identificacion:"",
        codigousuario:codigousuario,
      
          // Agrega todos los campos que usas en todos los pasos
        },

          
      });
const crearimenbase64=(base:string,tipo:string)=>{
  const reader=new FileReader();
   
    reader.readAsArrayBuffer(base64ToBlob(base,tipo))

    reader.addEventListener('load',(e)=>{
        const result = e.target?.result;
        if(result && result instanceof ArrayBuffer ){
let video= new Blob([new Uint8Array(result)],{type:tipo})
        let url=URL.createObjectURL(video)// video contiene un blob valido para crear una urñ
      
       setPreview(url)
        }
        
       
    })
}


 function base64ToBlob(base64: string, contentType: string) {
  const byteCharacters = atob(base64);
  const byteNumbers = new Array(byteCharacters.length);

  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }

  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type: contentType });
}
   
function base64ToFile(base64: string, contentType: string,fileName:string) {
  const byteCharacters = atob(base64);
  const byteNumbers = new Array(byteCharacters.length);

  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }

  const byteArray = new Uint8Array(byteNumbers);
  return new File([byteArray],fileName, { type: contentType });
}

useEffect(()=>{
methods.setValue("nombre",usuarioperselect.nombre)
methods.setValue("identificacion",usuarioperselect.identificacion)
methods.setValue("direccion",usuarioperselect.direccion)
methods.setValue("estado",usuarioperselect.estado)
methods.setValue("apellido",usuarioperselect.apellido)
methods.setValue("correo",usuarioperselect.correo)

console.log("usuarioperselect imagen",usuarioperselect)
if(usuarioperselect.imagenperfil){
const arraytipo=usuarioperselect.tipoimagen
.split('/')
console.log("tipos imagenes ",arraytipo,usuarioperselect)
 crearimenbase64(usuarioperselect.imagenperfil,arraytipo[0]+"/"+arraytipo[1])
 console.log("array tipo",arraytipo)

 setimagentitulo(arraytipo[2])

const file = base64ToFile(usuarioperselect.imagenperfil,arraytipo[0]+"/"+arraytipo[1],arraytipo[2])
methods.setValue("imagenperfil",file)


}




},[usuarioperselect])
       const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e)
    const file = e.target.files?.[0];
    console.log("archivo seleccionado",file)
    if (!file) return;

    // Validar formato
    if (!["image/png", "image/jpeg", "image/bmp"].includes(file.type)) {
      alert("Solo se permiten imágenes JPG, PNG o BMP");
      return;
    }

    // Validar tamaño (ejemplo: máx 300 KB)
    if (file.size > 300 * 1024) {
      alert("El archivo no puede superar los 300 KB");
      return;
    }

    // 3. Validar dimensiones
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        if (img.width > 600 || img.height > 380) {
          alert("El logo no puede superar 600x380 px");
          return;
        }

        // Si todo está OK, guardar en el formulario y mostrar vista previa
        //setValue("archivoLogo", file);
        setPreview(event.target?.result as string);
        setimagentitulo(file.name)
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
    methods.setValue("imagenperfil", file)
    // Guardar archivo en el form
    //setValue("archivoLogo", file);
  };

      const onSubmit = async (data: any) => {
        console.log(data)
       const formDatos= new FormData();
         formDatos.append("nombre", data.nombre);
  formDatos.append("direccion", data.direccion);
  formDatos.append("correo", data.correo);
  formDatos.append("estado", data.estado);
    formDatos.append("apellido", data.apellido);
        formDatos.append("identificacion", data.identificacion);
   formDatos.append("codigousuario",  data.codigousuario );


    if (data.imagenperfil) {
    formDatos.append("imagenperfil", data.imagenperfil);
  }
  if(!Actualizar){
  try {
     const datosreturn=await api.post("usuario/crearpersona",
    
    formDatos,{
        headers: {
          'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
             "Content-Type": "multipart/form-data",
        }}
  
  );
  console.log("datos return",datosreturn)
 setVisibleform(false)
  } catch (error) {
     console.log(error)
    
  }
  }else{
    console.log("entro a actualizar",data)

     try {
        console.log(usuarioperselect.codigocliente,"codigo cliente a actulizar")
     const datosreturn=await api.put(`usuario/actulizarpersona/${usuarioperselect.codigocliente}`,
    
    formDatos,{
        headers: {
          'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
             "Content-Type": "multipart/form-data",
        }}
  
  );
  console.log("datos return",datosreturn)
 setVisibleform(false)
  } catch (error) {
     console.log(error)
    
  }
  }
  
        };
        const onError = (errors:any) => {
            console.log(errors,"errores formulario")
              console.log("Valores actuales:", methods.getValues());
         
      };

      const { register,control,setValue, formState: { errors } } = methods;
       
    return ( 
         <CModal
                        alignment="center"
                        scrollable
                        visible={visibleform}
                      onClose={()=>{
                          setimagentitulo("Imagen seleccionada")
                        setPreview(null)
                         methods.reset();
                        setVisibleform(false)
                        setActualizar(false)
                      
                      }}
                        aria-labelledby="VerticallyCenteredScrollableExample2"
                       className="col-12 modalformper"
                        backdrop="static"
                        
                          
                      >

            <CModalHeader>
                              
                            <CModalTitle id="VerticallyCenteredScrollableExample2">Usuario_cliente</CModalTitle>
                          </CModalHeader>

         
          <FormProvider {...methods}>
                <CModalBody>     
                        <form onSubmit={methods.handleSubmit(onSubmit,onError)} style={{maxHeight:"480px"}}>
                       
        <div className="row" >
            <div className="col-12">
               <h6 className="h6 " style={{padding:'15px 10px 5px 12px ',marginLeft:'1rem'}}>Usuario_cliente</h6>

            </div>





   
            
              



                 <div className="col-12 d-flex paddingempresa usuariomodal  paddingempresamodal"  style={{paddingLeft:'12px',gap:"12px"}}>

                 <CInputGroup >
                <CFormFloating className="margeniputempresa">
              <CFormInput placeholder=""  className="inputdatosempresa fontletre"     {...register('nombre', { required: 'Este campo es obligatorio' })}
  />
  {errors.nombre ? (
      <CFormLabel style={{ color: "red" }}>Nombre*</CFormLabel>
    ) : (
      <CFormLabel>Nombre</CFormLabel>
    )}
  </CFormFloating>
            </CInputGroup>

               <CInputGroup >
                <CFormFloating className="margeniputempresa">
              <CFormInput placeholder=""  className="inputdatosempresa fontletre"     {...register('identificacion', { required: 'Este campo es obligatorio' })}
  />
  {errors.identificacion? (
      <CFormLabel style={{ color: "red" }}>Identificacion*</CFormLabel>
    ) : (
      <CFormLabel>identificacion</CFormLabel>
    )}
  </CFormFloating>
            </CInputGroup>

             <CInputGroup >
                <CFormFloating className="margeniputempresa">
              <CFormInput placeholder=""  className="inputdatosempresa fontletre"        {...register('apellido', { required: 'Este campo es obligatorio' })}    
     
  />
{errors.apellido ? (
 <CFormLabel style={{ color: "red" }}>Apellido*</CFormLabel>
):( <CFormLabel>Apellido</CFormLabel>)}
     
    
 
  </CFormFloating>
            </CInputGroup>

               </div>



               
                 <div className="col-12 d-flex paddingempresa usuariomodal  paddingempresamodal"  style={{paddingLeft:'12px',gap:"12px"}}>

                 <CInputGroup >
                <CFormFloating className="margeniputempresa">
              <CFormInput placeholder=""  className="inputdatosempresa fontletre"     {...register('direccion')}        
  />

   <CFormLabel>Direccion</CFormLabel>
    
    
  </CFormFloating>
            </CInputGroup>

             <CInputGroup >
                <CFormFloating className="margeniputempresa">
              <CFormInput placeholder=""  className="inputdatosempresa fontletre"         {...register('correo' )}       
  />

   
   
   
   
      <CFormLabel>Correo</CFormLabel>
    
 
  
  </CFormFloating>
            </CInputGroup>

               </div>



                 <div className="col-12 d-flex   paddingempresa usuariomodal paddingempresamodal" style={{paddingLeft:'12px',gap:"12px"}}>
             
        <CInputGroup >
                        {/* CoreUI soporta etiquetas flotantes (floating labels) en selects. Estas etiquetas se mantienen por encima y en posición flotante incluso cuando se selecciona un valor 
                        CFormFloating envuelve el <CFormSelect> y etiqueta para aplicar el estilo flotante.
                        Debe incluir placeholder en el select para que funcione correctamente.
                        La etiqueta (label), se queda flotando arriba incluso después de elegir una opción*/}
        
        
        {/**el control nos servira para panipular los select a nuestro
         * antojo, ya que react-hook-form no permite manipular los select
         * directamente, por eso usamos el controller
         
        
        */}                <CFormFloating className="margeniputempresa">
    <Controller
  control={control}
  name="estado"
  defaultValue='ACTIVO'
   rules={{ required: "Este campo es obligatorio" }}
  render={({ field,fieldState }) => (
    <>
  <CFormSelect
  {...field}
    size="lg"
    placeholder="Estado"
    className="inputselect fontletre "
   

     onChange={(e:any) => {
        // importante para que RHF sepa del cambio
          // lógica adicional...
    const value = e.target.value;
   
        field.onChange(value);
  }}
  >
  
    
   <option value="ACTIVO">ACTIVO</option>
                <option value="INACTIVO">INACTIVO</option>
     
  </CFormSelect>
  {fieldState.error ? (
    <CFormLabel style={{ color: "red" }}>Estado</CFormLabel>):(<CFormLabel>Estado</CFormLabel>)}
  </>
  
  )}
/>

</CFormFloating>
 </CInputGroup>


   <div className="col-12">
            <div>
                <div className="row inputarchivo">

              
                <div  style={{width:"100%"}}>
                    <div style={{width:"100%"  ,display:'flex' ,border:'1px solid #D3D4D4',  borderRadius: '6px' ,gap:'12px'}}>
                    <button  type="button"  style={{    
    height: '40px',
    border: 'none',
    borderLeft: '1px solid  #D3D4D4',
    borderRadius: '6px',
     textAlign: 'left',
    font: 'normal normal normal 14px / 19px Open Sans',
    letterSpacing: '0px',
    color:'#555555'}} onClick={handleClick}>Seleccione una imagen</button> 
       <span  style={{
    textAlign: 'end',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}}>{imagentitulo}</span>

                     </div>

                      

        <input
        type="file"
        id="formFile"
        hidden
        {...register("imagenperfil")}
        onChange={handleFileChange}
        ref={fileInputRef}
      />

                </div>

      {preview && (
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            marginTop: "10px" }}>
            <img
              src={preview}
              alt="Vista previa logo"
              style={{
                maxWidth: "400px",//150px
                maxHeight: "250px",//95
                border: "1px solid #ddd",
                borderRadius: "4px",
                padding: "5px",
                background: "#f9f9f9",
              }}
            />
          </div>
        )}
         </div>
           </div>      
            </div>

        
               </div>

          


          





             

               

            
           
          </div>
    
                        </form>
                          </CModalBody>
                      <CModalFooter className="fottersucursal">
                        <div className="d-flex justify-content-center flex-column  align-items-center " style={{width:"100%"}}>
                           {Actualizar &&  <button onClick={handleClick2} className="botonguardarsucursal" style={{width:"fit-content"}}>Actulizar</button>
                        
                           } 
                           {
                               !Actualizar &&  <button onClick={handleClick2} className="botonguardarsucursal" style={{width:"fit-content"}}>guardar</button>
                           }

                        </div>
                      </CModalFooter>
                         </FormProvider>
                         
                         </CModal>
     );
}

export default Personasform;