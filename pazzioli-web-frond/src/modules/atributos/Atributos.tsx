import { CTab, CTabContent, CTabList, CTabPanel, CTabs } from "@coreui/react";
import { useState } from "react";
import { FormProvider } from "react-hook-form";
import Lineas from "./components/Lineas/Lineas";
import "./estilosatributos.scss"
import Grupos from "./components/grupos/grupos";
import Caracteristicas from "./components/caracteristicas/caracteristicas";
import Unidadmedida from "./components/unidadesmedida/unidadmedida";
function Atributos() {
    const [itemsformempresa, setitemsformempresa] = useState(1)
   
  return (  
        <>
        
                <div  className="containerformen">

        <div className="d-flex justify-content-center align-items-center">
        <div className={itemsformempresa==3 ? "containerempresa":"containerempresa"}>
          <div className={`d-flex justify-content-center w-100 ${ itemsformempresa===3 ? "containerimgempresa":"containerimgempresa"}  flex-column align-items-center`}>

            <img src="/imgs/logocreaempresa.svg" style={{maxWidth:'48px', maxHeight:'48px'}}/>
            <div className="d-flex">
                <h5 className="tituloopaco">ATRIBUTOS</h5>
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
       Lineas
        </CTab>
        <CTab className="tapitemsempresa" itemKey={2}>
       Grupos
        </CTab>
         <CTab className="tapitemsempresa" itemKey={3}>
       Unidades de medida
        </CTab>
        <CTab className="tapitemsempresa" itemKey={4}>
      Caracteristicas
        </CTab>
      </CTabList>
      </div>
      </div>

        <CTabContent>
        {
          itemsformempresa===1 && <CTabPanel className="p-3" aria-labelledby="home-tab-pane" itemKey={1} style={itemsformempresa===1 ? {display:''}:{display:'none'}}>
       <Lineas/>
        </CTabPanel>
        }  

        {
          itemsformempresa===2 &&  <CTabPanel className="p-3"  aria-labelledby="home-tab-pane" itemKey={2} style={itemsformempresa===2 ? {display:''}:{display:'none'}}>
        
       < Grupos
       />
          
        </CTabPanel>
        }
       

        


         {itemsformempresa===3 && (<CTabPanel className="p-3" aria-labelledby="home-tab-pane" itemKey={3}>
            
          <Unidadmedida/>


        </CTabPanel>)}



         {itemsformempresa===4 && (<CTabPanel className="p-3" aria-labelledby="home-tab-pane" itemKey={4}>
            
          <Caracteristicas/>
        </CTabPanel>)}
        </CTabContent>
         </CTabs>
          
          
         
            
         </div>

         </div>
         </div>
        
         {/*<Modalalertasuccess icon={<FcOk/>} visible={visible}  setVisible={setVisible} mensaje="Empresa creada exisamente" type="succcess"/>*/}
        </>
    );
}

export default Atributos;