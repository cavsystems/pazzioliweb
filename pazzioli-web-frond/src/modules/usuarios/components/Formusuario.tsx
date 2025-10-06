import { CFormFloating, CFormInput, CFormLabel, CFormSelect, CInputGroup } from "@coreui/react";
import { useEffect, useState } from "react";
import api from "../../../apicofig";
import { Controller, useFormContext } from "react-hook-form";
import { usuariocontex } from "../contextusuario";
interface roles{
    codigo:number,
    nombre:string,
}
function Formusuario({style}: any) {

        const { register,control,setValue, formState: { errors } } = useFormContext();
       const {setrolactual} = usuariocontex();
    const [roles,setRoles]=useState<roles[]>([])
     useEffect(()=>{

        const traerroles=async()=>{
          const  datarol=await api.get('usuario/roles',{
        headers: {
          'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
        }})
            setRoles(datarol.data.roles)
        }


        traerroles()

    
    },[])
    return (  
        <>
        <div className="row" style={style}>
            <div className="col-12">
               <h6 className="h6 " style={{padding:'15px 10px 5px 12px ',marginLeft:'1rem'}}>Usuario</h6>

            </div>





    <div className="col-12  paddingempresa usuariomodal paddingempresamodal" style={{paddingLeft:'12px',gap:"12px"}}>
                     <CInputGroup >
                <CFormFloating className="margeniputempresa">
              <CFormInput placeholder=""  className="inputdatosempresa fontletre"   {...register('identificacion', { required: 'Este campo es obligatorio' })}             
  />

     {errors.identificacion? (
      <CFormLabel style={{ color: "red" }}>Identificación</CFormLabel>
    ) : (
      <CFormLabel>Identificación</CFormLabel>
    )}
  </CFormFloating>
            </CInputGroup>



      


              
           

            </div>
            
            <div className="col-12  d-flex  paddingempresa usuariomodal paddingempresamodal" style={{paddingLeft:'12px',gap:"12px"}}>
                     <CInputGroup >
                <CFormFloating className="margeniputempresa">
              <CFormInput placeholder=""  className="inputdatosempresa fontletre"   {...register('nombre', { required: 'Este campo es obligatorio' })}             
  />
     {errors.nombre? (
      <CFormLabel style={{ color: "red" }}>Nombre</CFormLabel>
    ) : (
      <CFormLabel>Nombre</CFormLabel>
    )}
  </CFormFloating>
            </CInputGroup>



             <CInputGroup >
                <CFormFloating className="margeniputempresa">
              <CFormInput placeholder=""  className="inputdatosempresa fontletre"       {...register('apellido', { required: 'Este campo es obligatorio' })}           
  />
   {errors.apellido? (
      <CFormLabel style={{ color: "red" }}>Apellido</CFormLabel>
    ) : (
      <CFormLabel>Apellido</CFormLabel>
    )}
  </CFormFloating>
            </CInputGroup>


              
           

            </div>


               <div className="col-12 d-flex paddingempresa usuariomodal  paddingempresamodal" style={{paddingLeft:'12px',gap:"12px"}}>

                 <CInputGroup >
                <CFormFloating className="margeniputempresa">
              <CFormInput placeholder=""  className="inputdatosempresa fontletre"      {...register('direccion')}            
  />
   <CFormLabel htmlFor="identificacion">Dirección</CFormLabel>
  </CFormFloating>
            </CInputGroup>

             <CInputGroup >
                <CFormFloating className="margeniputempresa"  {...register('numerotelefono')}    >
              <CFormInput placeholder=""  className="inputdatosempresa fontletre"        
  />
   <CFormLabel htmlFor="identificacion">Número</CFormLabel>
  </CFormFloating>
            </CInputGroup>

               </div>



                 <div className="col-12 d-flex paddingempresa usuariomodal  paddingempresamodal"  style={{paddingLeft:'12px',gap:"12px"}}>

                 <CInputGroup >
                <CFormFloating className="margeniputempresa">
              <CFormInput placeholder=""  className="inputdatosempresa fontletre"     {...register('correo')}
  />
   <CFormLabel htmlFor="identificacion">Correo</CFormLabel>
  </CFormFloating>
            </CInputGroup>

             <CInputGroup >
                <CFormFloating className="margeniputempresa">
              <CFormInput placeholder=""  className="inputdatosempresa fontletre"        {...register('usuario', { required: 'Este campo es obligatorio' })}    
     
  />
  {errors.usuario ? (
      <CFormLabel style={{ color: "red" }}>Usuario</CFormLabel>
    ) : (
      <CFormLabel>Usuario</CFormLabel>
    )}
 
  </CFormFloating>
            </CInputGroup>

               </div>



               
                 <div className="col-12 d-flex paddingempresa usuariomodal  paddingempresamodal"  style={{paddingLeft:'12px',gap:"12px"}}>

                 <CInputGroup >
                <CFormFloating className="margeniputempresa">
              <CFormInput placeholder=""  className="inputdatosempresa fontletre"     {...register('contrasena', { required: 'Este campo es obligatorio' })}        
  />

    {errors.contrasena? (
      <CFormLabel style={{ color: "red" }}>Contraseña</CFormLabel>
    ) : (
      <CFormLabel>Contraseña</CFormLabel>
    )}
  </CFormFloating>
            </CInputGroup>

             <CInputGroup >
                <CFormFloating className="margeniputempresa">
              <CFormInput placeholder=""  className="inputdatosempresa fontletre"         {...register('confirmarcontrasena' ,{ required: 'Este campo es obligatorio' })}       
  />

   
    {errors.confirmarcontrasena? (
      <CFormLabel style={{ color: "red" }}>confirmar contraseña</CFormLabel>
    ) : (
      <CFormLabel>confirmar contraseña</CFormLabel>
    )}
 
  
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
  defaultValue='Activo'
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
               </div>

          


          





             

               

            
           
          </div>
        </>
    );
}

export default Formusuario;