import { CButton, CCard, CCardBody, CCardImage, CCardText, CForm, CFormInput, CFormLabel, CFormSelect, CInputGroup, CInputGroupText, CTab, CTabContent, CTabList, CTabPanel, CTabs } from "@coreui/react";
import './estylosempresa.scss'
import { Datosgenrales } from "../components/Datosgenerales";
import { useForm, FormProvider } from 'react-hook-form';
import { useState } from "react";
import { Impuestos } from "../components/Impuestos";
import { Sucursales } from "../components/Sucursales";

export function Crearempresa() {
  const [itemsformempresa, setitemsformempresa] = useState(3)
   const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      tipodepersona: '',
      identificacion: '',
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
   const onSubmit = (data: any) => {
    console.log('Formulario completo:', data);
  };
    return (  
        <>
         <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>

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
         {itemsformempresa===1 && (<CTabPanel className="p-3" aria-labelledby="home-tab-pane" itemKey={1}>
           <Datosgenrales/>
        </CTabPanel>)}
        {itemsformempresa===2 && (<CTabPanel className="p-3"  aria-labelledby="home-tab-pane" itemKey={2}>
        
            <Impuestos/>
          
        </CTabPanel>)}

         {itemsformempresa===3 && (<CTabPanel className="p-3" aria-labelledby="home-tab-pane" itemKey={3}>
        <Sucursales/>
        </CTabPanel>)}
        </CTabContent>
         </CTabs>
          
          
         
            
         </div>
<div className="d-flex position-fixed bottom-0 w-100 bg-white justify-content-end containercontinuar">
  <div className="padingbotoncontinuar">
    <button type="button"  className="botonretroceder" onClick={()=>
    setitemsformempresa((prev) => (prev - 1))
  } style={itemsformempresa<2 ? {display:'none'}:{display:''}}>Atras</button>
    <button type="button"  className="botoncontinuar" onClick={()=>
    setitemsformempresa((prev) => (prev + 1))
  }>Continuar</button>
</div>
         </div>
         </div>
         </form>
         </FormProvider>
        </>
    );
}

