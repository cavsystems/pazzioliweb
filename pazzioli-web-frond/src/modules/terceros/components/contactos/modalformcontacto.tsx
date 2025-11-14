import { CFormFloating, CFormInput, CFormLabel, CFormSelect, CInputGroup, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from "@coreui/react";
import { useEffect, useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import api from "../../../../apicofig";
interface FormData{
 tipocontacto:string,
valor:string
}

interface tipocontacto{
 tipoContactoId:number;
    nombre:string

}
function Modalformcontacto({visiblemodalfor,setvisiblemodalfor,terceroid,setcontactosterceros,actulizar,setactulizar,contactoter}:any) {
       
    const [tipocontac,settipocontac]=useState<tipocontacto[]>([])
   const methods = useForm<FormData>({
         mode: 'onSubmit',
          shouldUnregister: false,
        defaultValues: {
       tipocontacto:"",
       valor:''
       
       
      
          // Agrega todos los campos que usas en todos los pasos
        },

          
      });
const onSubmit=async (data:any)=>{
   let idcont=Number(data.tipocontacto)
    let tipocon=tipocontac.find(item=> item.tipoContactoId===idcont)
    


if(actulizar){
    contactoter.valorContacto=data.valor;
    contactoter.tipoContacto=tipocon

  const atulizar= await api.put(`contactos/actulizar?idtercero=${terceroid}`, contactoter,{
                                      headers: {
                        'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
                        
                      }
                              })
                              setactulizar(false)
}else{
   const crearcontacto= await api.post(`contactos/crear?idtercero=${terceroid}`,
        {
             valorContacto:data.valor,
             tipoContacto:tipocon
        },   { headers: {
                        'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
                        
                      }}

    )  
}
   
     const traer= await api.get(`contactos/listarconctatos?idtercero=${terceroid}`,{
                                      headers: {
                        'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
                        
                      }})
    
      setcontactosterceros(traer.data)
      methods.reset({
        tipocontacto:'',
        valor:''
      })
      setvisiblemodalfor(false)



}

useEffect(()=>{
if(actulizar && tipocontac.length>0 && contactoter.valorContacto) {
   methods.setValue("valor",contactoter.valorContacto
)
methods.setValue("tipocontacto",contactoter.tipoContacto.tipoContactoId)
}
},[actulizar,tipocontac,contactoter])

const onError=(error:any)=>{

}
         const { register,control,setValue, formState: { errors } } = methods;

         useEffect(()=>{
            const traertipocon=async()=>{
                const tipocontact= await api.get("contactos/listar",{
                        headers: {
          'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
          
        }
                })
                settipocontac(tipocontact.data)
                console.log("tipos contactos",tipocontact)
            }
               traertipocon()
         },[])

    return ( <>
     <CModal
                            alignment="center"
                            scrollable
                            visible={visiblemodalfor}
                          onClose={()=>{
                           setvisiblemodalfor(false)
                           methods.reset({
                            valor:'',
                            tipocontacto:''
                           })

                           setactulizar(false)

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
                            <form  style={{maxHeight:"480px"}}>
                           
            <div className="row" >
                <div className="col-12">
                   <h6 className="h6 " style={{padding:'15px 10px 5px 12px ',marginLeft:'1rem'}}>Contacto</h6>
    
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
      name="tipocontacto"
      defaultValue='0'
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
      
        
       <option value="0">Elige una opcion</option>
         {
            tipocontac.map((item)=>{
               return <>
                   <option value={item.tipoContactoId}>{item.nombre}</option>
                </>
            })
         }          
         
      </CFormSelect>
      {fieldState.error ? (
        <CFormLabel style={{ color: "red" }}>Tipo contacto *</CFormLabel>):(<CFormLabel>Tipo contacto</CFormLabel>)}
      </>
      
      )}
    />
    
    </CFormFloating>
     </CInputGroup>
    </div>
    
       
                
                  
    
    
    
                     <div className="col-12 d-flex paddingempresa usuariomodal  paddingempresamodal"  style={{paddingLeft:'12px',gap:"12px"}}>
    
                    
    
                   <CInputGroup >
                    <CFormFloating className="margeniputempresa">
                  <CFormInput placeholder=""  className="inputdatosempresa fontletre"     {...register('valor', { required: 'Este campo es obligatorio' })}
      />
      {errors.valor? (
          <CFormLabel style={{ color: "red" }}>Valor*</CFormLabel>
        ) : (
          <CFormLabel>Valor</CFormLabel>
        )}
      </CFormFloating>
                </CInputGroup>
    
              
    
                   </div>
    
    
    
                   
                    
            
                   </div>
    
              
    
    
              
    
    
    
    
    
                 
    
                   
    
                
               
              
        
                            </form>
                              </CModalBody>
                          <CModalFooter className="fottersucursal">
                            <div className="d-flex justify-content-center flex-column  align-items-center " style={{width:"100%"}}>
                   {actulizar && <button  className="botonguardarsucursal" style={{width:"fit-content"}}  onClick={methods.handleSubmit(onSubmit,onError)} >Actualizar</button>} 
                   {!actulizar && <button  className="botonguardarsucursal" style={{width:"fit-content"}}  onClick={methods.handleSubmit(onSubmit,onError)} >guardar</button>}     

                            
                               
                            
                            </div>
                          </CModalFooter>
                             </FormProvider>
                             
                             </CModal>
    </> );
}

export default Modalformcontacto;