import { CFormCheck, CFormInput, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import { useEffect, useState } from "react";
import api from "../../../apicofig";

export function Impuestos({
  setimpuestosseleccionados,
  impuestsosseleccionados
}:any) {
  const [impuestos,setimpuestos]= useState([])

  useEffect(()=>{
 traerimpuestos()
  },[])

  const traerimpuestos= async ()=>{
    const data=await api.get("/empresa/traerimpuestos")
    console.log(data.data.datosimpuestos)
    setimpuestos(data.data.datosimpuestos)
  }
    return (  
        <>
        <div className="row justify-content-center">
           <div className="col-12 col-md-8 col-lg-8 paddingtableimpuesto" style={{marginBottom:"50px"}}>
               <h6 className="titlecamposempresa h6 titleimpuestos" style={{padding:'10px 10px 0px 10px ' ,marginBottom:0}}>Impuestos aplicables</h6>
               <CTable className="tabla">
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">
     <input type="checkbox" id="checkTérminos0" className="checkbox h6"  onClick={()=>{
        const checkboxes = document.querySelectorAll('.checkbox');
        if((checkboxes[0] as HTMLInputElement).checked){ 
              checkboxes.forEach((checkbox,index) => {
      

          (document.getElementById(`checkTérminos${index+1}`) as HTMLInputElement).checked= true;
          setimpuestosseleccionados([...impuestos]);
        }
        
        );
        }else{
             checkboxes.forEach((checkbox,index) => {
      

          (document.getElementById(`checkTérminos${index+1}`) as HTMLInputElement).checked= false;
           setimpuestosseleccionados([]);
        }
        
        );
        }
     
     }}/>

      </CTableHeaderCell>
      <CTableHeaderCell scope="col" >Nombre</CTableHeaderCell>
      <CTableHeaderCell scope="col" >Tarifa</CTableHeaderCell>
      <CTableHeaderCell scope="col" >Base</CTableHeaderCell>
      <CTableHeaderCell scope="col " >Sigla</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    {impuestos?.map((item:any,index:number)=>{
     return <CTableRow>

   
      <CTableDataCell scope="col">
     <input type="checkbox" id={`checkTérminos${index+1}`}className="checkbox"  onClick={(e)=>{
        
        if((e.target as HTMLInputElement).checked){ 
         const impuestotrue= impuestsosseleccionados.some((impuesto:any)=> impuesto.codigo === item.codigo) 
         if(!impuestotrue){
            setimpuestosseleccionados((prev:any)=>[...prev,item])
         }
        
        }else{
          setimpuestosseleccionados((prev:any)=>prev.filter((impuesto:any)=> impuesto.codigo !== item.codigo))
          }
     
     }}/>

      </CTableDataCell>
      <CTableDataCell>{item.nombre}</CTableDataCell>
      <CTableDataCell>{item.tarifa}</CTableDataCell>
       <CTableDataCell>{item.base}</CTableDataCell>
            <CTableDataCell>{item.sigla}</CTableDataCell>
    </CTableRow>
      })}
    
   
  </CTableBody>
</CTable>
           </div>
           
           
        </div>
        </>
    );
}

