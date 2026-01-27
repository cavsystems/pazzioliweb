import { CAlert, CFormInput, CFormSelect, CInputGroup, CInputGroupText } from "@coreui/react";
import Iconusuario from "../../../icons/Iconusuario";

function Descuentoretenciones() {
    return ( 
        <div className="row mx-0 h-100">
          <div className="col-12">
            <div className="card">
                                    <div className="card-header paddinencabezadocompra">
                                     <div className="d-flex justify-content-between">
                                        <span className="titulotrasnsacioncompra">
                                      Metodos de pago
                                        </span>
                                     </div>
                                    </div>
                                    <div className="car-body ">
                                        <div className="row mx-0">
                                              <div className="col-12">
                                                <div className="row mx-0 paddingcardbodytrasnsaciones">
                                                        <div className=" col-9 sinpadding  sinpaddinglefrigthchildtran  ">
                                                            <CInputGroup>
     
       

         <CFormInput  id="username"  className="inputmetodo" name="username" autoComplete="name"/>
       
           <CInputGroupText >
           <Iconusuario  width={17.5} height={16.5}/>
          </CInputGroupText>
      </CInputGroup>
                                                </div>
                                                  <div className="col-3 sinpadding">
                                                       <CInputGroup>
     
          
         <CFormInput  type="email" id="username" name="username" className="borderinput" autoComplete="name"/>
       
        
      </CInputGroup>
                                                  </div>
                                                </div>

                                                <div className="row mx-0 paddingcardbodytrasnsacionessintop">
                                                        <div className=" col-9 sinpadding  sinpaddinglefrigthchildtran  ">
                                                            <CInputGroup>
     
       

         <CFormInput  type="email" id="username" name="username" autoComplete="name" className="inputmetodo" />
       
           <CInputGroupText >
           <Iconusuario  width={17.5} height={16.5}/>
          </CInputGroupText>
      </CInputGroup>
                                                </div>
                                                  <div className="col-3 sinpadding">
                                                       <CInputGroup>
     
          
         <CFormInput  type="email" id="username" name="username" className="borderinput" autoComplete="name"/>
       
        
      </CInputGroup>
                                                  </div>
                                                </div>
                                      


                                        <div className="row mx-0 paddingcardbodytrasnsacionessintop  alturamax">
                                                        <div className=" col-9 sinpadding  sinpaddinglefrigthchildtran  ">
                                                            <div className="d-flex m-0 h-100">
                                                               <CFormSelect
          id="floatingSelectGrid select-full"
          
          aria-label="Works with selects"
          className=" h-100 inputselectagregar  "
          >
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </CFormSelect>
         <button className=" h-100 paddinbotonagregar">
                                                        Agregar
                                                   </button>

                                                            </div>
                                                
                                                </div>
                                                  <div className="col-3 sinpadding">
                                                   <button className="botonaceptarcompra h-100 paddingbotoncompra">
                                                        Aceptar
                                                   </button>
                                                  </div>
                                                </div>
                                      
                                              </div>
                                        </div>
                                    </div>

                                </div>
          </div>

       
        </div>
     );
}

export default Descuentoretenciones;