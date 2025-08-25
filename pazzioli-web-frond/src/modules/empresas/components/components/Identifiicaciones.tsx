import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import api from "../../../../apicofig";

export function Identificacion({ register,control, CInputGroup,
  CFormInput,
  CFormSelect,
  CFormFloating,
  CFormLabel,
    setValue,
...rest}: any) {
  const [selectedtipo, setSelected] = useState(0);
    const [selectedtipoidentificacion, setSelectedtipo] = useState(0);
    const [digito,setdigito]=useState("");
    useEffect(()=>{
     setValue("digitodeverificacion",digito)
    },[digito])
    return ( 
        <>
           <div className="col-12">

                <h6  className="titlecamposempresa h6 paddingtitleempresa" style={{padding:'45px 10px 5px 0 '}}>Identificación</h6>
               <div>
                <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 paddingempresa" >

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
  name="tipodepersona"
  defaultValue={""}
   rules={{ required: "Este campo es obligatorio" }}
  render={({ field,fieldState }) => (
    <>
  <CFormSelect
  {...field}
    size="lg"
    placeholder="Tipo de persona"
    className="inputselect fontletre "
   

     onChange={(e:any) => {
        // importante para que RHF sepa del cambio
          // lógica adicional...
    const value = e.target.value;
   
      field.onChange(value); 
    const ite=rest.datosempresa.tipopersona?.findIndex((item:any)=> item.codigo === Number(value)
    )
    console.log(rest.datosempresa.tipopersona[ite], value)
    if (rest.datosempresa.tipopersona[ite].nombre === "Juridica") {
      rest.juridico.setjuridico(false);
      rest.natural.setnatural(true);
    } else if (rest.datosempresa.tipopersona[ite].nombre=== "Natural") {
      rest.juridico.setjuridico(true);
      rest.natural.setnatural(false);
    } else {
      
    }
    
    
  }}
  >
    <option value="" >Seleccione una opción</option>
    
     {
      rest.datosempresa.tipopersona?.map((item:any)=>{
      return <option value={item.codigo} >{item.nombre}</option>    
      })
     }

     
  </CFormSelect>
  {fieldState.error ? (
    <CFormLabel style={{ color: "red" }}>Tipo de persona</CFormLabel>):(<CFormLabel>Tipo de persona</CFormLabel>)}
  </>
  
  )}
/>

</CFormFloating>
                                 
      </CInputGroup>
          
                <CInputGroup >
                <CFormFloating className="margeniputempresa">
              <CFormInput placeholder=""  className="inputdatosempresa fontletre"      {...register('numeroidentificacion', { required: 'Este campo es obligatorio' ,  onChange: (e) => {
      console.log("dijito");
      api.get("/digitoverificacion/CalcularDv?numeroIdentificacion=" + e.target.value)
        .then((res) => {
          console.log(res.data.digito)   
           setdigito(res.data.digito)}
      
      );
    }
                
              })}          
  />
   <CFormLabel htmlFor="identificacion">Numero de identificación</CFormLabel>
  </CFormFloating>
            </CInputGroup>
            </div>


 <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 margingleftcol" style={{paddingLeft:'0px'}}>

                      <CInputGroup >
                        {/* CoreUI soporta etiquetas flotantes (floating labels) en selects. Estas etiquetas se mantienen por encima y en posición flotante incluso cuando se selecciona un valor 
                        CFormFloating envuelve el <CFormSelect> y etiqueta para aplicar el estilo flotante.
                        Debe incluir placeholder en el select para que funcione correctamente.
                        La etiqueta (label), se queda flotando arriba incluso después de elegir una opción*/}
                        <CFormFloating className="margeniputempresa">
                            <Controller

  control={control}
  name="tipodeidentificacion"
  rules={{ required: "Este campo es obligatorio" }}
  defaultValue={""}
  render={({ field }) => (
 <CFormSelect
  {...field} 
  
    size="lg"
    placeholder="Tipo de identificacion"
    className="inputselect fontletre"
    onChange={(e:any) => {
     
     // field.onChange(e); // importante para que RHF sepa del cambio
     const value = e.target.value;
        field.onChange(value); 
   
    }}
   
     
  >
    <option value={0} >Seleccione una opción</option>
    {
      rest.datosempresa.tipoidentificacion?.map((item:any)=>{
      return <option value={item.codigo} >{item.tipoIdentificacion}</option>    
      })
     }
         
  </CFormSelect>
  )}
/>

  <CFormLabel>Tipo de identificación</CFormLabel>
</CFormFloating>
                                 
      </CInputGroup>

                <CInputGroup >
                 <CFormFloating className="margeniputempresa">

              <CFormInput placeholder=""  className="inputdatosempresa fontletre"      disabled={true}        {...register('digitodeverificacion', { required: 'Este campo es obligatorio' })} />
              


    <CFormLabel htmlFor="digitodeverificacion" >Digito de verificación</CFormLabel>
              </CFormFloating>
            </CInputGroup>
            </div>


                </div>
                </div> 
            </div>

        </>
     );
}

