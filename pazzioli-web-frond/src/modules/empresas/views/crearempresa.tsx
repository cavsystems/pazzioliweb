import { CButton, CCard, CCardBody, CCardImage, CCardText, CForm, CFormInput, CFormLabel, CFormSelect, CInputGroup, CInputGroupText, CTab, CTabContent, CTabList, CTabPanel, CTabs } from "@coreui/react";
import './estylosempresa.scss'
export function Crearempresa() {
    return (  
        <>
        <div className="d-flex justify-content-center">
        <div className="containerempresa">
          <div className="d-flex justify-content-center w-100 containerimgempresa">
            <img src="/imgs/logocreaempresa.svg"/>
          </div>
         <CTabs defaultActiveItemKey={2}>
            
          <CTabList variant="pills" className="justify-content-center tapparentitem " >
        <CTab aria-controls="home-tab-pane"   className="tapitemsempresa" itemKey={1}>Datos generales</CTab>
        <CTab aria-controls="profile-tab-pane"  className="tapitemsempresa"  itemKey={2}>Impuestos</CTab>
        <CTab aria-controls="contact-tab-pane"  className="tapitemsempresa"  itemKey={3}>Sucursales o bodegas</CTab>
        
      </CTabList>

        <CTabContent>
             <CTabPanel className="p-3" aria-labelledby="home-tab-pane" itemKey={1}>
          Home tab content
        </CTabPanel>
        </CTabContent>
         </CTabs>
         </div>

         </div>
        </>
    );
}

