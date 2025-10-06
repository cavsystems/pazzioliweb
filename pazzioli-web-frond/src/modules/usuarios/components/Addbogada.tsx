import { CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import { useEffect, useState } from "react";
import api from "../../../apicofig";
import { usuariocontex } from "../contextusuario";
interface listabodegas{
    celular
: String
codigo
: 
number
codigodepartamento
: 
{codigo: number, codigopais: number, codigoDepartamento: number, departamento:string}
codigomunicipio
: 
{codigo: number, codigoDepartamento:number, codigoMunicipio: number, municipio: string}
codigopais
: 
{codigo: number, codigoPais: number, pais: string}
codigopostal
: 
string
codigosucursal
: string | null
correo
:  string | null
direccion
: string
nombre
: string
telefono
: string
}
function Addbodega({style}: any) {
    const {rolactual}=usuariocontex();
const [indexcheck,setindexcheck]=useState<number>(0)
const [codigocheck,setcodigocheck]=useState<number>(0)
const [bodegas,setBodegas]=useState<listabodegas[]>([])
const [checkedItems, setCheckedItems] = useState<number[]>([]);

useEffect(()=>{
    const traerbodegas=async()=>{
const apibodega=await api.get("bodegas/listar",{
        headers: {
          'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
        }})
     setBodegas(apibodega.data.data)
   
    }
traerbodegas()
     console.log((rolactual.trim()==="Bodeguero" || rolactual.trim()  ==="Administrador"),"rolactual")
   },[rolactual])


   useEffect(()=>{
bodegas.forEach(element => {
           const checkboxesac = document.getElementById(`checkTérminos${element.codigo}`) as HTMLInputElement;
           checkboxesac.checked=false
           
     });
      setCheckedItems([])
   },[bodegas])

   
useEffect(()=>{
    console.log(checkedItems,"checkedItems")
   },[checkedItems])
   
   useEffect(()=>{
    const traerbodegas=async()=>{
const apibodega=await api.get("bodegas/listar",{
        headers: {
          'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
        }})
     setBodegas(apibodega.data.data)
    }
traerbodegas()
  console.log(rolactual,"rolactual")
    
   },[])
    return ( 
        <>

             <div className="row justify-content-center" style={style}>
                   <div className="col-12 col-md-8 col-lg-8 paddingtableimpuesto" style={{marginBottom:"50px"}}>
                       <h6 className="titlecamposempresa h6 titleimpuestos" style={{padding:'10px 10px 0px 10px ' ,marginBottom:0}}>Bodegas existentes</h6>
                       <CTable className="tabla tableusuario">
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">

             {(rolactual.trim()==="Bodeguero" || rolactual.trim()==="Administrador") && (
  <input type="checkbox" id="checkTérminos0" className="checkbox h6" />
)}  
  
              </CTableHeaderCell>
              <CTableHeaderCell scope="col" >Nombre</CTableHeaderCell>
              <CTableHeaderCell scope="col" >Ciudad</CTableHeaderCell>
              <CTableHeaderCell scope="col" >Direccion</CTableHeaderCell>
  
            </CTableRow>
          </CTableHead>
          <CTableBody>
         
        
           {
                bodegas.map((bodega, index) => (
                    <CTableRow>
                     <CTableDataCell scope="col">
             <input type="checkbox" className="checkbox h6  "  id={`checkTérminos${bodega.codigo}`} onClick={()=>{

                      if(rolactual==="Bodeguero" || rolactual==="Administrador"){
                         const checkboxesac = document.getElementById(`checkTérminos${bodega.codigo}`) as HTMLInputElement;
                        
                         if(checkboxesac.checked){
                            setCheckedItems((prev) =>  [...prev, bodega.codigo]);
                         }else{
                            setCheckedItems((prev) => prev.filter((item) => item !== bodega.codigo));
                         }
                       
            
                      }else{
                             
                             const checkboxes = document.getElementById(`checkTérminos${indexcheck}`) as HTMLInputElement;
                              const checkboxesac = document.getElementById(`checkTérminos${bodega.codigo}`) as HTMLInputElement;
                        
                       
                        setindexcheck(bodega.codigo)
                           if(indexcheck>0){
                            checkboxes.checked=!checkboxes.checked
                            setCheckedItems((prev) =>  [...prev, bodega.codigo]);
                            setCheckedItems((prev) => prev.filter((item) => item !== indexcheck));
                            console.log("bodegas codigo",  checkboxes.checked,checkboxesac.checked)
                                        

                                 }else{
                                     setCheckedItems((prev) =>  [...prev, bodega.codigo]);
                                 }
                              
                           
                               
                               
                   
                        
                            
                                 
                            
                                




                           
                  
                      }

             }} />
        
              </CTableDataCell>

              <CTableDataCell>{bodega.nombre}</CTableDataCell>
              <CTableDataCell>{bodega.codigomunicipio.municipio}</CTableDataCell>
               <CTableDataCell>{bodega.direccion}</CTableDataCell>
               </CTableRow>
                ))
           }
             
                
         
             
            
           
          </CTableBody>
        </CTable>
                   </div>
                   
                   
                </div>
        </>
     );
}

export default Addbodega;