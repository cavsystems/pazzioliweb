import { CButton, CCard, CCardBody, CCardImage, CCardText, CForm, CFormInput, CFormLabel, CFormSelect, CInputGroup, CInputGroupText, CTab, CTabContent, CTabList, CTabPanel, CTabs } from "@coreui/react";
import './estylosempresa.scss'
import { Datosgenrales } from "../components/Datosgenerales";
import { useForm, FormProvider } from 'react-hook-form';
import { useEffect, useState } from "react";
import { Impuestos } from "../components/Impuestos";
import { Sucursales } from "../components/Sucursales";
import api from "../../../apicofig";
import Modalalertasuccess from "../../../components/modalsuccess";
import { FcOk } from "react-icons/fc";
interface Pais {
  codigo: number;
  pais: number;
}


interface municipio{
  codigo:number,
codigoDepartamento:number,
codigoMunicipio:number,
municipio:string,
}
interface DatosEmpresa {
  departamento: any[];
  municipio: municipio[];
  pais: Pais[];
  regimen: any[];
  tipoidentificacion: any[];
  tipopersona: any[];
}
export function Crearempresa() {
  const [visible,setVisible]=useState(false);
  const [itemsformempresa, setitemsformempresa] = useState(1)
  const [paisdefault,setpaisdefault]=useState({
    codigo:0,
    pais:""
  })
  const [impuestsosseleccionados, setimpuestosseleccionados] = useState([])
    const [datosempresa,setdatosempresa]=useState<DatosEmpresa>({
  departamento:[], 
municipio:[],

pais:[], 

regimen:[],

tipoidentificacion:[],

tipopersona:[] 

  })
  const [sucursales,setsucursales]=useState([])
  useEffect( () => {
    traerinformacion();
     if (datosempresa.pais && datosempresa.pais.length > 0) {
    // asigna el primer país al campo pais
    
  }
   
  },[])

   useEffect(()=>{
        console.log("sucursales",sucursales)},[sucursales])
  
  const traerinformacion= async ()=>{
    let datos=await api.get('/empresa/traerempresa')
   
   setdatosempresa(datos.data.datos)
   const pais=datos.data.datos.pais.findIndex((dato:any)=> dato.pais==="COLOMBIA")
   const paisdefa=datos.data.datos.pais[pais]
 methods.setValue("pais", paisdefa.codigo.toString());

   setpaisdefault(paisdefa)
   console.log(datos.data.datos)

  }
  useEffect(()=>{
  console.log("impuestos seleccionados",impuestsosseleccionados)
  },[impuestsosseleccionados])
   const methods = useForm({
     mode: 'onSubmit',
      shouldUnregister: false,
    defaultValues: {
     Actividadeconomica: "",
correoempresa:"",
celularempresa:"",
codigopostal:"",
digitodeverificacion:"",
departamento:"",
municipio:"",
nombrecomercial:"",
numeroidentificacion:"",
pais:"",
primerapellido:"",
primernombre: "",
razonsocial:"",
regimen:"",
segundoapellido:"",
segundonombre:"",
telefonofijo:"",
tipodeidentificacion: "",
tipodepersona:"",
impuestos:[],
sucursales:[],

      // Agrega todos los campos que usas en todos los pasos
    },
  });
  const conponents=[()=>{
    return(<>
       <CTabPanel className="p-3" aria-labelledby="home-tab-pane" itemKey={1}>
           <Datosgenrales/>
        </CTabPanel>
    </>

        
    )
  },()=>{
    return(<>
       <CTabPanel className="p-3" aria-labelledby="home-tab-pane" itemKey={1}>
     
        </CTabPanel>
    </>

        
    )
  }]
   const onSubmit = async (data: any) => {
    data.impuestos=impuestsosseleccionados;
    data.sucursales=sucursales;
    console.log(data)
    data.pais=data.pais==="" ? 0:Number(data.pais);
    data.municipio=data.pais==="" ? 0:Number(data.pais);
    data.departamento=data.departamento==="" ? 0:Number(data.departamento);
    data.tipodeidentificacion=data.tipodeidentificacion==="" ? 0:Number(data.tipodeidentificacion);
    data.tipodepersona=data.tipodepersona==="" ? 0:Number(data.tipodepersona)
   data.regimen=data.regimen==="" ? 0:Number(data.regimen)
    if(!data.razonsocial){
      data.razonsocial=data.primernombre+data.segundonombre

    }

    const datosem= await api.post('/empresa/crear',data)
    setVisible(datosem.data.respuesta.estado)
    console.log('Formulario completo:', datosem);

  };
  const onError = (errors:any) => {
  console.error("Errores del formulario:", errors);
  

};
    return (  
        <>
         <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit,onError)}>

        <div className="d-flex justify-content-center">
        <div className={itemsformempresa==3 ? "containerempresasucur":"containerempresa"}>
          <div className={`d-flex justify-content-center w-100 ${ itemsformempresa===3 ? "containerimgempresasucu":"containerimgempresa"}  flex-column align-items-center`}>

            <img src="/imgs/logocreaempresa.svg" style={{maxWidth:'48px', maxHeight:'48px'}}/>
            <div className="d-flex">
                <h5 className="tituloopaco">NUEVA EMPRESA</h5>
            </div>
          
          </div>
         <CTabs
      activeItemKey={itemsformempresa}
      onChange={(key:any) => setitemsformempresa(Number(key))}
    >
      <div className=" d-flex justify-content-center align-items-center">
        <div className="conittemtapsempresa">
      <CTabList variant="pills" className="tapparentitem">
        <CTab className="tapitemsempresa" itemKey={1} >
          Datos generales
        </CTab>
        <CTab className="tapitemsempresa" itemKey={2}>
          Impuestos
        </CTab>
        <CTab className="tapitemsempresa" itemKey={3}>
          Sucursales
        </CTab>
      </CTabList>
      </div>
      </div>

        <CTabContent>
          <CTabPanel className="p-3" aria-labelledby="home-tab-pane" itemKey={1} style={itemsformempresa===1 ? {display:''}:{display:'none'}}>
           <Datosgenrales datosempresa={datosempresa} setdatosempresa={setdatosempresa} paisdef={paisdefault}/>
        </CTabPanel>
        <CTabPanel className="p-3"  aria-labelledby="home-tab-pane" itemKey={2} style={itemsformempresa===2 ? {display:''}:{display:'none'}}>
        
            <Impuestos setimpuestosseleccionados={setimpuestosseleccionados} impuestsosseleccionados={impuestsosseleccionados}/>
          
        </CTabPanel>

         {itemsformempresa===3 && (<CTabPanel className="p-3" aria-labelledby="home-tab-pane" itemKey={3}>
        <Sucursales setsucursales={setsucursales} sucursales={sucursales} datosempresa={datosempresa} setdatosempresa={setdatosempresa}/>
        </CTabPanel>)}
        </CTabContent>
         </CTabs>
          
          
         
            
         </div>
<div className="d-flex position-fixed bottom-0 w-100 bg-white justify-content-end containercontinuar">
  <div className="padingbotoncontinuar">
    <button type="button"  className="botonretroceder" onClick={()=>
    setitemsformempresa((prev) => (prev - 1))
  } style={itemsformempresa<2 ? {display:'none'}:{display:''}}>Atras</button>
   {/*un key es un nombre identificativo que le doy a mis nodos o componentes en este caso fue 
   necesario ya que cuando pasaba la tracision de un componente a otro  react utiliza mi boton gaurdar y  pensando que es el boton 
   de submit me ejecuta el submit por eso utilizo el key para difernciar el boton continuar con el submit y evitar este error*/}
  {itemsformempresa>=3 ?  <button type="submit" className="botoncontinuarguardar"  key="guardar">Guardar</button> :     <button type="button" className="botoncontinuar"  key="continuar" onClick={(e)=>{
    setitemsformempresa((prev) => (prev + 1))
  e.stopPropagation();}
  }>Continuar</button>}
   
</div>
         </div>
         </div>
         </form>
         </FormProvider>

         <Modalalertasuccess icon={<FcOk/>} visible={visible}  setVisible={setVisible} mensaje="Empresa creada exisamente" type="succcess"/>
        </>
    );
}

