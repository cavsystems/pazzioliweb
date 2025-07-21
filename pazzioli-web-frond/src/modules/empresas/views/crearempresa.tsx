import { CButton, CCard, CCardBody, CCardImage, CCardText, CForm, CFormInput, CFormLabel, CFormSelect, CInputGroup, CInputGroupText } from "@coreui/react";

function Crearempresa() {
    return (  
        <>
           <div className="container-fluid bg-back-ground-login    min-vh-100  overflow-hiddenlogin">
                    <img src="/imgs/pazziolilogo.svg" className="rounded dimensionesfondo" />
           <div className="row login-parent justify-content-center align-items-center flex-column">
             <CCard  className="col-9">
     
      <CCardBody className="w-100 mb-5">
         <CForm className="row">
            <div className="col-12">
                <CCardText className="fw-bold font-letra-open-sans">Ingresa informacion de tu empresa</CCardText>
            </div>
        <div className="col-12">
      <div className="row">  
   <div className="col-12 col-sm-12 col-md-3">
      <CFormLabel htmlFor="basic-url">nombres</CFormLabel>
      <CInputGroup className="mb-3">
        <CFormInput id="basic-url" aria-describedby="basic-addon3" />
      </CInputGroup>
      </div>

         <div className="col-12 col-sm-12 col-md-4">
      <CFormLabel htmlFor="basic-url">apellidos</CFormLabel>
      <CInputGroup className="mb-3">
       
        <CFormInput id="basic-url" aria-describedby="basic-addon3" />
      </CInputGroup>
      </div>


          <div className="col-12 col-sm-12 col-md-5">
      <CFormLabel htmlFor="basic-url">razonSocial</CFormLabel>
      <CInputGroup className="mb-3">
       
        <CFormInput id="basic-url" aria-describedby="basic-addon3" />
      </CInputGroup>
      </div>
      </div> 
      </div> 


        <div className="col-12">
      <div className="row">  
   <div className="col-12 col-sm-8 col-md-6">
      <CFormLabel htmlFor="basic-url">Identificacio</CFormLabel>
      <CInputGroup className="mb-3">
        <CFormInput id="basic-url" aria-describedby="basic-addon3" />
      </CInputGroup>
      </div>

         <div className="col-12 col-sm-5 col-md-6">
        <CFormLabel htmlFor="tipopersona">Tipoidentificacion</CFormLabel>     
       <CInputGroup className="mb-3">
      
        <CFormSelect id="tipopersona" >
          <option>Choose...</option>
          <option value="1">Nit</option>
          <option value="2">cedula</option>
          <option value="3">cedula de estrangeria</option>
        </CFormSelect>
      </CInputGroup>
      </div>

    

      </div> 
      </div> 

        <div className="col-12">
      <div className="row">  
   <div className="col-12 col-sm-12 col-md-6">
      <CFormLabel htmlFor="basic-url">correo</CFormLabel>
      <CInputGroup className="mb-3">
        <CFormInput id="basic-url" aria-describedby="basic-addon3" />
      </CInputGroup>
      </div>

         <div className="col-12 col-sm-12 col-md-5">
      <CFormLabel htmlFor="basic-url">direccion</CFormLabel>
      <CInputGroup className="mb-3">
       
        <CFormInput id="basic-url" aria-describedby="basic-addon3" />
      </CInputGroup>
      </div>


          <div className="col-12 col-sm-12 col-md-4">
      <CFormLabel htmlFor="basic-url">Celular</CFormLabel>
      <CInputGroup className="mb-3">
       
        <CFormInput id="basic-url" aria-describedby="basic-addon3" />
      </CInputGroup>
      </div>

      
          <div className="col-12 col-sm-12 col-md-4">
      <CFormLabel htmlFor="basic-url">Telefono</CFormLabel>
      <CInputGroup className="mb-3">
       
        <CFormInput id="basic-url" aria-describedby="basic-addon3" />
      </CInputGroup>
      </div>
      </div> 
      </div> 

         <div className="col-12">
      <div className="row">  
   <div className="col-12 col-sm-5 col-md-4">
        <CFormLabel htmlFor="tipopersona">Regimen</CFormLabel>     
       <CInputGroup className="mb-3">
      
        <CFormSelect id="tipopersona" >
          <option>Choose...</option>
          <option value="1">Noresposable de iva</option>
          <option value="2">Responsable de iva</option>
          <option value="3">RST</option>
        </CFormSelect>
      </CInputGroup>
      </div>
       
         <div className="col-12 col-sm-5 col-md-4">
        <CFormLabel htmlFor="tipopersona">Tipopersona</CFormLabel>     
       <CInputGroup className="mb-3">
      
        <CFormSelect id="tipopersona" >
          <option>Choose...</option>
          <option value="1">Natural</option>
          <option value="2">Jurida</option>
          <option value="3">Grancontribuyente</option>
        </CFormSelect>
      </CInputGroup>
      </div>


       <div className="col-12 col-sm-5 col-md-4">
        <CFormLabel htmlFor="tipopersona">impuestos</CFormLabel>     
       <CInputGroup className="mb-3">
      
        <CFormSelect id="tipopersona" >
          <option>Choose...</option>
          <option value="1">Excluido</option>
          <option value="2">Exento</option>
          <option value="3">INC</option>
            <option value="4">Iva</option>
        </CFormSelect>
      </CInputGroup>

       
      </div>


 

      
       
      </div> 
      </div> 
      <CInputGroup className="d-flex justify-content-center">
                    <CButton color="success" type="submit" style={{backgroundColor:"#97BD13", color:"#ffff" ,padding:'8px 30px'}} className="mt-3">Continuar</CButton>
                  </CInputGroup>
         </CForm>
      </CCardBody>
    </CCard>


            </div>
            </div></>
    );
}

export default Crearempresa;