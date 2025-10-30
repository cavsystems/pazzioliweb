import { CButton, CFormFloating, CFormInput, CFormLabel, CFormSelect, CInputGroup, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from "@coreui/react";
import { useEffect, useState } from "react";
import Formusuario from "./Formusuario";
import Addbodega from "./Addbogada";
import { useForm, FormProvider } from 'react-hook-form';
import Addroles from "./addroles";
import { usuariocontex } from "../contextusuario";
import api from "../../../apicofig";
interface municipio{
  codigo:number,
codigoDepartamento:number,
codigoMunicipio?:number,
municipio:string,
}
interface municipios{
  municipio:municipio[]
}




export function Modalusuario({visible,setVisible,codigousuarioseleccionado,setCodigousuarioseleccionado, botonupdateu,setbotonupdateu}:any){
  useEffect(()=>{
    if(botonupdateu){
      console.log("entro a usefect formusuario")
      setbotonupdateu(true)
      traerusuarioparaupdate(codigousuarioseleccionado)
     
    }
  },[botonupdateu])
     const [codigorolper,setCodigorolper]=useState<number>(0)
  const traerusuarioparaupdate=async(codigo:number)=>{

    const  datarol=await api.get(`usuario/traerusuarios?codigousuario=${codigo}`,{
            headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
            }})
            console.log("usuario para update",datarol)
             methods.setValue("nombre",datarol.data.nombre)
              methods.setValue("usuario",datarol.data.usuario)
              methods.setValue("rol",datarol.data.rol.codigo.toString())
              methods.setValue("estado",datarol.data.estado)

              setCodigorolper(datarol.data.rol.codigo)
         }
     const methods = useForm({
             mode: 'onSubmit',
              shouldUnregister: false,
            defaultValues: {
         
contrasena: "",

nombre: "",
rol: '',
usuario: ""  , 
estado:"ACTIVO", 
bodegas:[ ]    
              // Agrega todos los campos que usas en todos los pasos
            },
          });

          const handleClose = () => {
    reset(); // 🔥 vuelve a valores iniciales de los campos de formhooks
    setCheckedItems([]);
    setformusuario(1);
    setVisible(false);
    setbotonupdateu(false);
  };
            const { reset, handleSubmit } = methods;
    
const onSubmit = async (data: any) => {
  data.bodegas=checkedItems
  const datau={
     bodegas:data.bodegas,
  
contrasena
:data.contrasena,
estado
:data.estado,
nombre
: data.nombre,

rol
:Number(data.rol),
usuario
: data.usuario


  }

  if(data.bodegas.length>0){
    if(botonupdateu){
      const actulizar=await api.post(`bodegas/actualizar/usuario?co=${codigousuarioseleccionado}`,datau,{
                                            headers: {
                                              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
                                            }})
     console.log("actulizar usuario",actulizar)

    reset(); // 🔥 vuelve a valores iniciales de los campos de formhooks
    setCheckedItems([]);
    setformusuario(1);
    setCodigorolper(0)
    setCodigousuarioseleccionado(0)
    setVisible(false);
    setbotonupdateu(false);
  
    
    }else{
       const guardar=await api.post(`bodegas/crear/usuario`,datau,{
                                            headers: {
                                              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
                                            }})
     reset(); // 🔥 vuelve a valores iniciales de los campos de formhooks
    setCheckedItems([]);
    setformusuario(1);
    setVisible(false);
    setbotonupdateu(false);
    setCodigorolper(0)

    }
 

  }else{
    setErrorbodega(true)
    setTimeout(() => {
       setErrorbodega(false)
    }, 5000);
  }
   
  };
  const onError = (errors:any) => {
    if(errors.rol){
   setformusuario(2)
    }else{
      setformusuario(1)
    }
  console.log(errors,"errores formulario")

};
 
const { tituloactual,
setTituloactual,checkedItems, setCheckedItems ,errorbodega,setErrorbodega}=usuariocontex();
    const [itemsformusuario,setformusuario]=useState<number>(1)


    useEffect(()=>{
        setTituloactual(itemsformusuario===1 ? "Datos Generales": itemsformusuario===2 ? "Asignar Roles": itemsformusuario===3 ? "Asignar Bodegas":"")
        console.log(itemsformusuario,"tituloactual")
    },[itemsformusuario])
    return ( 
        <>
      <FormProvider {...methods} >
      
        <CModal
        alignment="center"
        scrollable
        visible={visible}
     
        aria-labelledby="VerticallyCenteredScrollableExample2"
       className="col-12 modalusu"
        backdrop="static"
           onClose={handleClose}
      >
        <CModalHeader>
            
          <CModalTitle id="VerticallyCenteredScrollableExample2">{tituloactual}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          < Formusuario style={{ display:itemsformusuario===1  ? "":"none" }} botonupdateu={botonupdateu} setbotonupdateu={setbotonupdateu}/>
            < Addroles style={{ display:itemsformusuario===2  ? "flex":"none"  , marginTop: "20px" }} codigorolper={codigorolper} setCodigorolper={setCodigorolper}/>
        <Addbodega style={{ display:itemsformusuario===3  ? "":"none" }} codigorolper={codigorolper}   codigousuarioseleccionado={codigousuarioseleccionado}/>
       
        </CModalBody>
        <CModalFooter style={{justifyContent: 'center',display:'flex'}} className="fottersucursal">
           <button type="button"  className="botonretroceder" onClick={()=>
   setformusuario((prev) => (prev - 1))
  } style={itemsformusuario<2 ? {display:'none'}:{display:''}}>Atras</button>


       {itemsformusuario>=3 ?  botonupdateu ? <button type="submit" className="botoncontinuarguardar"  key="guardar"    onClick={methods.handleSubmit(onSubmit, onError)}>Actualizar</button>:<button type="submit" className="botoncontinuarguardar"  key="guardar"    onClick={methods.handleSubmit(onSubmit, onError)}>Guardar</button> :     <button type="button" className="botoncontinuar"  key="continuar" onClick={(e)=>{
    setformusuario((prev) => (prev + 1))
  e.stopPropagation();}
  }>Continuar</button>}
        </CModalFooter>
      </CModal>
      
      </FormProvider>
      
        </>
     );
}
