import { CAlert, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
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
function Addbodega({style,codigorolper,codigousuarioseleccionado}: any) {
    const {rolactual,permisoslista,setPermisoslista,setCheckedItems,checkedItems ,errorbodega,setErrorbodega}=usuariocontex();
const [indexcheck,setindexcheck]=useState<number>(0)
const [codigocheck,setcodigocheck]=useState<number>(0)
const [bodegas,setBodegas]=useState<listabodegas[]>([])
useEffect(()=>{
  if(codigousuarioseleccionado>0 && bodegas.length>0){
    const establecerbodegas=async()=>{
       
      const apibousu=await api.get(`usuario/traerusuariobodega?usuarioid=${codigousuarioseleccionado}`,{
                                            headers: {
                                              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
                                            }})

console.log("bodegas usuario",apibousu)
let arrayusuariobodegas:number[]=[]

apibousu.data.data.forEach((element:any )=> {
           const checkboxesac = document.getElementById(`checkTérminos${element.codigo}`) as HTMLInputElement;
           checkboxesac.checked=true
     arrayusuariobodegas.push(element.codigo)      
          
});
 setCheckedItems(arrayusuariobodegas)
    }

     establecerbodegas()
        
  }
},[codigousuarioseleccionado,bodegas])

useEffect(()=>{
 
    const traerbodegas=async()=>{
      let apibodega;
      
apibodega=await api.get("bodegas/listar",{
        headers: {
          'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
        }})
  

     setBodegas(apibodega.data.data)

     const listarpermisos=await api.get(`usuario/permisosroles?codigoroles=${rolactual}`,{
                                            headers: {
                                              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
                                            }})
    
     console.log(listarpermisos,"listapermisos")
     setPermisoslista(listarpermisos.data.permisos)
     const lista:string[]=[]
    listarpermisos.data.permisos.forEach( (element:any)=> {
       lista.push(element.nombrePermiso)
     });
     console.log("listapermisos",lista)
      setPermisoslista(lista)
  
    
   
    }
traerbodegas()
     console.log((rolactual.trim()==="Bodeguero" || rolactual.trim()  ==="Administrador"),"rolactual")
   },[rolactual])


   /*useEffect(()=>{
bodegas.forEach(element => {
           const checkboxesac = document.getElementById(`checkTérminos${element.codigo}`) as HTMLInputElement;
           checkboxesac.checked=false
           
     });
      setCheckedItems([])
   },[bodegas])*/

   
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
                       <CAlert color="danger" className="h6"  style={{display: errorbodega ? "":"none", color: "#555555"}}>Escoge almenos un bodega</CAlert>
                       <h6 className="titlecamposempresa h6 titleimpuestos" style={{padding:'10px 10px 0px 10px ' ,marginBottom:0}}>Bodegas existentes</h6>
                       <CTable className="tabla tableusuario">
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">

  <input type="checkbox" id="checkTérminos0" className="checkbox h6" onChange={(e)=>{
       console.log("marcar")
    const checkprin=e.target.checked;
    if(checkprin){
      console.log("marcar todos")
      let arraynew:number[]=[]
          bodegas.map((item)=>{
      const checkboxesac = document.getElementById(`checkTérminos${item.codigo}`) as HTMLInputElement;
    checkboxesac.checked=true
      arraynew.push(item.codigo)
      
    
    })
    setCheckedItems(arraynew);
    }else{
         bodegas.map((item)=>{
      const checkboxesac = document.getElementById(`checkTérminos${item.codigo}`) as HTMLInputElement;
    checkboxesac.checked=false
      setCheckedItems([]);
      
    
    })
      
    }
  
  }} />

  
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

                  
                         const checkboxesac = document.getElementById(`checkTérminos${bodega.codigo}`) as HTMLInputElement;
                         
                         if(checkboxesac.checked){
                            setCheckedItems((prev) =>  [...prev, bodega.codigo]);
                         }else{
                            setCheckedItems((prev) => prev.filter((item) => item !== bodega.codigo));
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