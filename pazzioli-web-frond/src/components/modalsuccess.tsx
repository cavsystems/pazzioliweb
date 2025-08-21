import { CButton, CModal, CModalBody, CModalFooter } from "@coreui/react";
import   "./styless.scss"
import type { ReactNode } from "react";
interface ModalalertasuccessProps {
  boton1?: string;
  visible: boolean;
  setVisible: (value: boolean) => void;
  icon: ReactNode;   // 👈 aquí
  type?: string;
  mensaje?:string
}
function Modalalertasuccess({boton1,visible,setVisible,icon,type,mensaje}: ModalalertasuccessProps ) {

    return ( 
        <>

            <CModal
        alignment="center"
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="VerticallyCenteredExample"
      style={{"--cui-modal-width":"500px !important"}}
      >
       
        <CModalBody>
           {icon}
           {mensaje}
        </CModalBody>
        <CModalFooter>
          <CButton className='botonmodalsucess' onClick={() => setVisible(false)}>
            continuar
          </CButton>
         
        </CModalFooter>
      </CModal>
        </>
     );
}

export default Modalalertasuccess;