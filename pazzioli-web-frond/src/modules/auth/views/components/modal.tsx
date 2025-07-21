import { CButton, CFormInput, CInputGroup, CModal, CModalBody, CModalFooter } from "@coreui/react";

export function Modalsinup({type,icon,texto}:any) {
    return (  
        <>   <CModal
                alignment="center"
                scrollable
                visible={true}
             
                aria-labelledby="VerticallyCenteredScrollableExample2"
              >
                 <CModalBody className="d-flex flex-column justify-content-center align-items-center">
                  {icon &&   <div className="bg-warning rounded-circle p-2 d-inline-flex align-items-center justify-content-center  "  style={{width:'80px',height:'80px'}}>
   {icon}
</div>} 
 <p>
 {texto}
          </p> 
                 { type && <CInputGroup >
                            
                                <CFormInput placeholder="Nombre de usuario"   
                      />
                              </CInputGroup>}
                
                  
                 </CModalBody>

                  <CModalFooter className="d-flex justify-content-between ">
          <CButton className="text-white "   style={{ width:"172px",height:"41px",backgroundColor:"#d7dbdd"}}>
            Close
          </CButton>
          <CButton style={{background:"#97BD13", width:"172px",height:"41px" ,color:"#fff"}} >confirmar</CButton>
        </CModalFooter>
              </CModal>
              </>
    );
}

