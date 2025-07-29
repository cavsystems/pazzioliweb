import { CFormFloating, CFormInput, CFormLabel, CFormSelect, CInputGroup, CInputGroupText } from "@coreui/react";

 export function Datosgenrales() {
    return (  
        <>
        <div className="row">
            <div className="col-12">

                <h6>Identificacion</h6>
               <div>
                <div className="row">
                <div className="col-6">

                      <CInputGroup className={`mb-2 `}>
                        {/* CoreUI soporta etiquetas flotantes (floating labels) en selects. Estas etiquetas se mantienen por encima y en posición flotante incluso cuando se selecciona un valor 
                        CFormFloating envuelve el <CFormSelect> y etiqueta para aplicar el estilo flotante.
                        Debe incluir placeholder en el select para que funcione correctamente.
                        La etiqueta (label), se queda flotando arriba incluso después de elegir una opción*/}
                        <CFormFloating className="mb-2">
  <CFormSelect
    size="lg"
    placeholder="Tipo de persona"
    className="inputselect fontletre "
  >
    <option value="" >Seleccione una opcion</option>
    
  </CFormSelect>
  <CFormLabel>Tipo de persona</CFormLabel>
</CFormFloating>
                                 
      </CInputGroup>

                <CInputGroup className="mb-2 ">
              
              <CFormInput placeholder="Numero de identificacion"  className="inputdatosempresa fontletre"   />
            </CInputGroup>
            </div>


 <div className="col-6">

                      <CInputGroup className={`mb-2 `}>
                        {/* CoreUI soporta etiquetas flotantes (floating labels) en selects. Estas etiquetas se mantienen por encima y en posición flotante incluso cuando se selecciona un valor 
                        CFormFloating envuelve el <CFormSelect> y etiqueta para aplicar el estilo flotante.
                        Debe incluir placeholder en el select para que funcione correctamente.
                        La etiqueta (label), se queda flotando arriba incluso después de elegir una opción*/}
                        <CFormFloating className="mb-2">
  <CFormSelect
    size="lg"
    placeholder="Tipo de persona"
    className="inputselect fontletre "
  >
    <option value="" >Seleccione una opcion</option>
    
  </CFormSelect>
  <CFormLabel>Tipo de persona</CFormLabel>
</CFormFloating>
                                 
      </CInputGroup>

                <CInputGroup className="mb-2 ">
              
              <CFormInput placeholder="Numero de identificacion"  className="inputdatosempresa fontletre"   />
            </CInputGroup>
            </div>


                </div>
                </div> 
            </div>

            <div className="col-12">
                  <h6 className="mb-0.5 mt-3 mr-3">Nombres</h6>
            </div>
        </div>
        </>
    );
}

