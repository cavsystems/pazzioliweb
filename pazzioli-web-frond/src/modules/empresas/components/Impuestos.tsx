import { CFormCheck, CFormInput, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";

export function Impuestos() {
    return (  
        <>
        <div className="row justify-content-center">
           <div className="col-12 col-md-7 col-lg-7" style={{marginBottom:"50px"}}>
               <h6 className="titlecamposempresa h6 titleimpuestos" style={{padding:'10px 10px 0px 10px ' ,marginBottom:0}}>Impuestos aplicables</h6>
               <CTable className="tabla">
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">
     <input type="checkbox" id="checkTérminos" className="checkbox h6" />

      </CTableHeaderCell>
      <CTableHeaderCell scope="col" >nombre</CTableHeaderCell>
      <CTableHeaderCell scope="col" >%tarifa</CTableHeaderCell>
      <CTableHeaderCell scope="col" >Tipo</CTableHeaderCell>
      <CTableHeaderCell scope="col " >Aplicacion</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
   
      <CTableHeaderCell scope="col">
     <input type="checkbox" id="checkTérminos" className="checkbox" />

      </CTableHeaderCell>
      <CTableDataCell>Impuesto 1</CTableDataCell>
      <CTableDataCell>19</CTableDataCell>
       <CTableDataCell>Sobre el total</CTableDataCell>
            <CTableDataCell>Venta</CTableDataCell>
    </CTableRow>

      <CTableRow>
   
      <CTableHeaderCell scope="col">
     <input type="checkbox" id="checkTérminos" className="checkbox" />

      </CTableHeaderCell>
      <CTableDataCell>Impuesto 2</CTableDataCell>
      <CTableDataCell>2.5</CTableDataCell>
       <CTableDataCell>Sobre la base</CTableDataCell>
            <CTableDataCell>Compra</CTableDataCell>
    </CTableRow>
   
     <CTableRow>
   
      <CTableHeaderCell scope="col">
     <input type="checkbox" id="checkTérminos" className="checkbox" />

      </CTableHeaderCell>
      <CTableDataCell>Impuesto 3</CTableDataCell>
      <CTableDataCell>10</CTableDataCell>
       <CTableDataCell>Sobre la base</CTableDataCell>
            <CTableDataCell>Compra</CTableDataCell>
    </CTableRow>

    <CTableRow>
   
      <CTableHeaderCell scope="col">
     <input type="checkbox" id="checkTérminos" className="checkbox" />

      </CTableHeaderCell>
      <CTableDataCell>Impuesto 4</CTableDataCell>
      <CTableDataCell>10</CTableDataCell>
       <CTableDataCell>Sobre la base</CTableDataCell>
            <CTableDataCell>Compra</CTableDataCell>
    </CTableRow>



    <CTableRow>
   
      <CTableHeaderCell scope="col">
     <input type="checkbox" id="checkTérminos" className="checkbox" />

      </CTableHeaderCell>
      <CTableDataCell>Impuesto 5</CTableDataCell>
      <CTableDataCell>10</CTableDataCell>
       <CTableDataCell>Sobre la base</CTableDataCell>
            <CTableDataCell>Compra</CTableDataCell>
    </CTableRow>
   
  </CTableBody>
</CTable>
           </div>
           
           
        </div>
        </>
    );
}

