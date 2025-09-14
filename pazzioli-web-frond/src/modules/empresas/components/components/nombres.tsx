import { CButton, CPopover } from "@coreui/react";
import { useEffect } from "react";

function Nombres({ register, CInputGroup,
  CFormInput,
  CFormSelect,
  CFormFloating,
  CFormLabel,
  errors,
...rest}: any) {
  useEffect(()=>{
   console.log("jurico",rest.juridico)
  },[rest.juridico,rest.natural])
    return ( 
        <>
           <div className="col-12">

                <h6  className="titlecamposempresa h6 paddingtitleempresa"  style={{padding:'12px 10px 5px 0 '}}>Nombres</h6>
               <div>
                <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 paddingempresa"  >

                     
                          <CInputGroup >
               <CFormFloating className="margeniputempresa">
              <CFormInput placeholder=""  className={`inputdatosempresa fontletre`}    disabled={rest.natural.natural}       {...register('primernombre')} />
  <CFormLabel>Primer nombre</CFormLabel>

              </CFormFloating>
            </CInputGroup>
                                 
      

                <CInputGroup >
               <CFormFloating className="margeniputempresa">
              <CFormInput placeholder=""  className="inputdatosempresa fontletre"   disabled={rest.natural.natural}    {...register('primerapellido')}          
  />
  <CFormLabel>Primer apellido</CFormLabel>
  </CFormFloating>
            </CInputGroup>


            
                <CInputGroup >
              <CFormFloating className="margeniputempresa">
              <CFormInput placeholder=""  className="inputdatosempresa fontletre"  disabled={rest.juridico.juridico}  {...register('razonsocial')}          
  />
        <CFormLabel>Razón social</CFormLabel>
  </CFormFloating>
            </CInputGroup>
            </div>


 <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 margingleftcol" style={{paddingLeft:'0px'}}>


                         <CInputGroup >
              <CFormFloating className="margeniputempresa">
              
              <CFormInput placeholder=""  className="inputdatosempresa fontletre"       disabled={rest.natural.natural}     {...register('segundonombre')} />
               <CFormLabel>Segundo nombre</CFormLabel>
              </CFormFloating>
            </CInputGroup>
                                 
     

                <CInputGroup>
               <CFormFloating className="margeniputempresa">
              <CFormInput placeholder=""  className="inputdatosempresa fontletre"   disabled={rest.natural.natural} {...register('segundoapellido')} />
               <CFormLabel>Segundo apellido</CFormLabel>
              </CFormFloating>
            </CInputGroup>


            
                <CInputGroup >
             <CFormFloating className="margeniputempresa">
              <CFormInput placeholder=""  className="inputdatosempresa fontletre"    {...register('nombrecomercial', { required: 'Este campo es obligatorio' })}          
  />
  { errors.nombrecomercial ? (
    <CFormLabel style={{ color: "red" }}>Nombre comercial</CFormLabel>):(<CFormLabel>Nombre comercial</CFormLabel>)}
   

  </CFormFloating>
            </CInputGroup>


            </div>


                </div>
                </div> 
  
   
            </div>
        </>
    );
}

export default Nombres;