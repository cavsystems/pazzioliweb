import { CButton, CPopover } from "@coreui/react";

function Nombres({ register, CInputGroup,
  CFormInput,
  CFormSelect,
  CFormFloating,
  CFormLabel,
...rest}: any) {
    return ( 
        <>
           <div className="col-12">

                <h6  className="titlecamposempresa h6"  style={{padding:'12px 10px 5px 0 '}}>Nombres</h6>
               <div>
                <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 paddingempresa"  >

                     
                          <CInputGroup >
               <CFormFloating className="margeniputempresa">
              <CFormInput placeholder=""  className="inputdatosempresa fontletre"           {...register('primernombre', { required: 'Este campo es obligatorio' })} />
  <CFormLabel>Primer nombre</CFormLabel>

              </CFormFloating>
            </CInputGroup>
                                 
      

                <CInputGroup >
               <CFormFloating className="margeniputempresa">
              <CFormInput placeholder=""  className="inputdatosempresa fontletre"    {...register('primerapellido', { required: 'Este campo es obligatorio' })}          
  />
  <CFormLabel>Primer apellido</CFormLabel>
  </CFormFloating>
            </CInputGroup>


            
                <CInputGroup >
              <CFormFloating className="margeniputempresa">
              <CFormInput placeholder=""  className="inputdatosempresa fontletre"    {...register('razonsocial', { required: 'Este campo es obligatorio' })}          
  />
        <CFormLabel>Razón social</CFormLabel>
  </CFormFloating>
            </CInputGroup>
            </div>


 <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" style={{paddingLeft:'0px'}}>


                         <CInputGroup >
              <CFormFloating className="margeniputempresa">
              
              <CFormInput placeholder=""  className="inputdatosempresa fontletre"           {...register('segundonombre', { required: 'Este campo es obligatorio' })} />
               <CFormLabel>Segundo nombre</CFormLabel>
              </CFormFloating>
            </CInputGroup>
                                 
     

                <CInputGroup>
               <CFormFloating className="margeniputempresa">
              <CFormInput placeholder=""  className="inputdatosempresa fontletre"  {...register('segundoapellido', { required: 'Este campo es obligatorio' })} />
               <CFormLabel>Segundo apellido</CFormLabel>
              </CFormFloating>
            </CInputGroup>


            
                <CInputGroup >
             <CFormFloating className="margeniputempresa">
              <CFormInput placeholder=""  className="inputdatosempresa fontletre"    {...register('nombrecomercial', { required: 'Este campo es obligatorio' })}          
  />
  <CFormLabel>Nombre comercial</CFormLabel>
  </CFormFloating>
            </CInputGroup>


            </div>


                </div>
                </div> 
     <div className="col-12">
        <div style={{padding:'10px 10px 10px 0 '}}>
            <CPopover
      title="Popover title"
      content="And here’s some amazing content. It’s very engaging. Right?"
      placement="right"
       fallbackPlacements={[]}
        trigger="hover"

    >
      <CButton  style={{paddingLeft:'14px'}} >
        <h6 className="h5"> Datos fiscales</h6>
       
      </CButton>
    </CPopover>  
        </div>
        </div>         
   
            </div>
        </>
    );
}

export default Nombres;