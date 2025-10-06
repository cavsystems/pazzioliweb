import { CFormFloating, CFormInput, CInputGroup, CModal, CModalBody, CModalFooter } from "@coreui/react";

function Nuevorol() {
    return (  <>
      <CModal
        alignment="center"
        scrollable
        visible={true}
        backdrop={true}   
        aria-labelledby="VerticallyCenteredScrollableExample2"
       
           className="modal-rolusuario"
      >
      
        <CModalBody>
             <div className="col-12  paddingempresa usuariomodal paddingempresamodal" style={{paddingLeft:'12px',gap:"12px"}}>
                               <CInputGroup >
                          <CFormFloating className="margeniputempresa">
                        <CFormInput placeholder=""  className="inputdatosempresa fontletre"               
            />
          
              
            </CFormFloating>
                      </CInputGroup>
          
          
          
                
          
          
                        
                     
          
                      </div>
       
        </CModalBody>
        <CModalFooter style={{justifyContent: 'center',display:'flex'}} className="fottersucursal">
       


        <button type="button" className="botoncontinuar"  key="continuar" 
  >Continuar</button>
        </CModalFooter>
      </CModal>
    </>);
}

export default Nuevorol;