import { CAlert, CButton, CFormFloating, CFormInput, CFormLabel, CInputGroup, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import { useEffect, useState } from "react";
import Iconeliminar from "../../../icons/iconeliminar";

function Bodegasvariantes({modalbo,setmodalbo,agregarbodega,BodegaSeleccionada ,setBodegaSeleccionada,indexvariante,variantes,setvariantes, setindexvariante}:any) {
    const [numeroinputbodega,setnumeroinputbodega]=useState<number>(1)
    const [bodegas,setbodegas]=useState<{nombre:string;
      stockMaximo:number;
    stockMinimo:number;
ubicacion:string;
existencias:number}[]>([])
    const [indexactulizar,setindexactulizar]=useState<number>(0)
    const [bodegaguardar,setbodegaguardar]=useState<string>("")
    const [indexactulizarbodega,setindexactulizarbodega]=useState<boolean>(false)
    const [bodegasguardadas,setbodegasguardadas]=useState<{nombre:string;
      stockMaximo:number;
    stockMinimo:number;
ubicacion:string}>({nombre:"",stockMaximo:0,stockMinimo:0,ubicacion:""})
    useEffect(()=>{
      console.log("BodegaSeleccionada",BodegaSeleccionada)
      if(BodegaSeleccionada){
        if(BodegaSeleccionada.length>0){
            setbodegas(BodegaSeleccionada)
  setnumeroinputbodega(BodegaSeleccionada.length);
        }
      
      }
    },[BodegaSeleccionada])
    return ( 
        <>
        
            <CModal
            alignment="center"
            scrollable
            visible={modalbo}
             backdrop="static"
            onClose={()=>{
              setmodalbo(false)
                       setBodegaSeleccionada([]);
                                                               setindexvariante(0);
                                                               setnumeroinputbodega(1);
                                                               setbodegas([]);
            }}
            aria-labelledby="VerticallyCenteredScrollableExample2"
           className="col-12 modalbodegasvariantes"
           
               
          >
            <CModalHeader>
                
              <CModalTitle id="VerticallyCenteredScrollableExample2">Asignar bodega</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <div className="row" >
                       
               
             
                 
              <div className="col-12">
             
                                       
                                          <div className="inputprocttex" style={{width:"100%", paddingTop:"12px"}}>
                                         
                                           
                                            
                                           
                                            
             
             
             
                                            
                                          </div>
             
                                          
                    
                                               
                                          
             
                                           <div className={`flex-grow-1`} style={{paddingTop:"12px"}}>
             
                                          <div className={`inputprocttex justify-content-center align-items-center row-gap-3`}>
                                           
                                           
                                            
                                             <div className="tablacontainerprecio">
                                             <CTable  
             
                     
                       
                       small
                       align="left" className="tablaproductsbodega tablaperzonalinalida1">
                                                               
                                                               <CTableHead>
                                                                 <CTableRow>
                                                                 
                                                                     <CTableHeaderCell scope="col">Bodega</CTableHeaderCell>
                                                                 <CTableHeaderCell scope="col" >Stockminimo</CTableHeaderCell>
                                                                  <CTableHeaderCell scope="col" >Stockmaximo</CTableHeaderCell>
                                                                    <CTableHeaderCell scope="col" >Ubicación</CTableHeaderCell>
                                                                      <CTableHeaderCell scope="col" >Existencia</CTableHeaderCell>
                                                                             <CTableHeaderCell scope="col "  className="thacciones"><div className="d-flex justify-content-center" style={{gap:"12px"}} >Acciones </div></CTableHeaderCell>
                                                                
                                                                 
                                                     
                                                                   
                                                                 </CTableRow>
                                                               </CTableHead>
                                                               <CTableBody>
                                                               
                                                               
                                                              
                                   
                                                   
                                                      
                                                         
                                                             {
                                                                Array.from({length: numeroinputbodega}).map((_, index) => ( 
                                                                       <CTableRow>
                                                                   <CTableDataCell>   <select  defaultValue={bodegas[index]?.nombre ?? ""} className="iteminput1" name="nombre" onChange={(e)=>{
                            

                                                               if( variantes[indexvariante].bodega[index]  && variantes[indexvariante].bodega){

                                                                 let bodegatrue=bodegas.find((bodega:any)=>bodega.nombre===e.target.value)
                                                                 if(bodegatrue){
                                                                  alert("Esta bodega ya ha sido seleccionada")
                                                                 e.target.value=""
                                                                  return;
                                                                 }
                                                                const bodegaActualizada = [...variantes[indexvariante].bodega];
                                                                bodegaActualizada[index] = {
                                                                  ...bodegaActualizada[index],
                                                                  nombre: e.target.value
                                                                };
                                                                const variantesActualizadas = [...variantes];
                                                                variantesActualizadas[indexvariante].bodega = bodegaActualizada;

                                                                setvariantes(variantesActualizadas);
                                                                 const valor = e.target.value
                                                               const copiaSel = [...bodegas];
                                      copiaSel[index] = {
                                        ...copiaSel[index],
                                        nombre: valor
                                      };

                                      setbodegas(copiaSel);
                                                               }else{
                                                                
                                                                 let bodegatrue=bodegas.find((bodega:any)=>bodega.nombre===e.target.value)
                                                                 if(bodegatrue){
                                                                  alert("Esta bodega ya ha sido seleccionada")
                                                                  e.target.value=""
                                                                  return;
                                                                 }
                                                                 console.log("detodas maneras sigo")
                                                                setbodegaguardar(e.target.value)
                                                               const valor = e.target.value
                                                               const copiaSel = [...bodegas];
                                      copiaSel[index] = {
                                        ...copiaSel[index],
                                        nombre: valor
                                      };

                                     setbodegas(copiaSel);
                                                               setbodegasguardadas({...bodegasguardadas,  [e.target.name]:e.target.value})  
                                                               }
                                                                 
                                                   }} >
                                               <option value={""} id="slectform1">Elige una opción</option>
                                             <option value={"Bodega sur"} id="slectform1">Bodega sur</option>
                                               <option value={"Bodega Norte"} id="slectform1"  >Bodega Norte</option>
                                            </select></CTableDataCell>
                                                   <CTableDataCell><input placeholder="0" className="iteminput1"  value={bodegas[index]?.stockMaximo ?? ""}  name="stockMaximo" onChange={(e)=>{
                                                     const valor = Number(e.target.value);
                                                     console.log("valor",valor)
                                                    console.log("index",index, variantes)
                                                          if( variantes[indexvariante].bodega[index]  && variantes[indexvariante].bodega){
                                                               const bodegaActualizada = [...variantes[indexvariante].bodega];
                                                                bodegaActualizada[index] = {
                                                                  ...bodegaActualizada[index],
                                                                stockMaximo:Number(e.target.value)
                                                                };
                                                                  const variantesActualizadas = [...variantes];
                                                                variantesActualizadas[indexvariante].bodega = bodegaActualizada;
                                                                setvariantes(variantesActualizadas);
                                                                                         const valor = Number(e.target.value);

                                      const copiaSel = [...bodegas];
                                      copiaSel[index] = {
                                        ...copiaSel[index],
                                        stockMaximo: valor
                                      };

                                      setbodegas(copiaSel);
                                                          }else{
                                                             const valor = Number(e.target.value);

                                      const copiaSel = [...bodegas];
                                      copiaSel[index] = {
                                        ...copiaSel[index],
                                        stockMaximo: valor
                                      };

                                      setbodegas(copiaSel);
                                                            setbodegasguardadas({...bodegasguardadas,  [e.target.name]:e.target.value})     
                                                          }
                                                                 
                                                   }}/></CTableDataCell>
                                                     <CTableDataCell  ><input placeholder="0" className="iteminput1" name="stockMinimo" value={bodegas[index]?.stockMinimo ?? ""}  onChange={(e)=>{
                                                     const valor = Number(e.target.value);
                                                     console.log("valor",valor)
                                                    console.log("index",index, variantes)
                                                          if( variantes[indexvariante].bodega[index]  && variantes[indexvariante].bodega){
                                                               const bodegaActualizada = [...variantes[indexvariante].bodega];
                                                                bodegaActualizada[index] = {
                                                                  ...bodegaActualizada[index],
                                                                stockMinimo:Number(e.target.value)
                                                                };
                                                                  const variantesActualizadas = [...variantes];
                                                                variantesActualizadas[indexvariante].bodega = bodegaActualizada;
                                                                setvariantes(variantesActualizadas);
                                                                                         const valor = Number(e.target.value);

                                      const copiaSel = [...bodegas];
                                      copiaSel[index] = {
                                        ...copiaSel[index],
                                        stockMinimo: valor
                                      };

                                      setbodegas(copiaSel);
                                                          }else{
                                                             const valor = Number(e.target.value);

                                      const copiaSel = [...bodegas];
                                      copiaSel[index] = {
                                        ...copiaSel[index],
                                        stockMinimo: valor
                                      };

                                      setbodegas(copiaSel);
                                                            setbodegasguardadas({...bodegasguardadas,  [e.target.name]:e.target.value})     
                                                          }
                                                                 
                                                   }}/></CTableDataCell>
                                                  


                                                    <CTableDataCell  ><input placeholder="0" className="iteminput1" name="ubicacion" value={bodegas[index]?.ubicacion ?? ""}  onChange={(e)=>{
                                                     const valor = e.target.value;
                                                     console.log("valor",valor)
                                                    console.log("index",index, variantes)
                                                          if( variantes[indexvariante].bodega[index]  && variantes[indexvariante].bodega){
                                                               const bodegaActualizada = [...variantes[indexvariante].bodega];
                                                                bodegaActualizada[index] = {
                                                                  ...bodegaActualizada[index],
                                                                ubicacion:e.target.value
                                                                };
                                                                  const variantesActualizadas = [...variantes];
                                                                variantesActualizadas[indexvariante].bodega = bodegaActualizada;
                                                                setvariantes(variantesActualizadas);
                                                                                         const valor = e.target.value;

                                      const copiaSel = [...bodegas];
                                      copiaSel[index] = {
                                        ...copiaSel[index],
                                        ubicacion: valor
                                      };

                                      setbodegas(copiaSel);
                                                          }else{
                                                             const valor = e.target.value;

                                      const copiaSel = [...bodegas];
                                      copiaSel[index] = {
                                        ...copiaSel[index],
                                        ubicacion: valor
                                      };

                                      setbodegas(copiaSel);
                                                            setbodegasguardadas({...bodegasguardadas,  [e.target.name]:e.target.value})     
                                                          }
                                                                 
                                                   }}/></CTableDataCell>
                                                   
                                                         
                                                       <CTableDataCell>
                                                        <input placeholder="0" className="iteminput1"  value={bodegas[index]?.existencias ?? ""}  disabled={true} name="stockMaximo"/>
                                                       </CTableDataCell>

                                                       <CTableDataCell>
                                                          <div className="d-flex justify-content-center" style={{gap:"12px"}} >
                                                                                        
                                                                                                                                      
                                                                                                                                                        
                                                                                        
                                                        
                                                                                      <div   style={{ maxWidth: 'fit-content' }} >
                                                                                                                                       <CButton  className="buttoniconnormaleliminar"  >      <Iconeliminar  width={16} height={16} color={"#555"}/>  </CButton>
                                                                              </div>                                         
                                                                                     </div>
                                                       </CTableDataCell>
                                                           </CTableRow>
             
                                                                ))
                                                             }
                                                         
                                                               
                                                     
                                                           
                                                             
                                                            
                                         
                                                           
                                                 
                                                     
                                                   
                                                                 
                                     
                                                                   
                                                             
                                                                  
                                                               </CTableBody>
                                                            
                                                             </CTable>
                                                             </div>
                                            
                                             
                                                  {
                                                    bodegaguardar==="" &&   <button type="submit" className="botoncontinuarguardar botonagregarcon"  key="guardar"   onClick={()=>{
                                                   
                                                        setnumeroinputbodega(numeroinputbodega+1)
                                                    }}>Agregar</button>
                                                  }   

                                                  {
                                                    bodegaguardar !=="" &&   <button className="botoncontinuarguardar"  key="guardar"  onClick={()=>{
                                                        agregarbodega(bodegasguardadas,indexvariante)
                                                         setbodegasguardadas({nombre:"",stockMaximo:0,stockMinimo:0,ubicacion:""})
                                                        setbodegaguardar('')
                                                    }}  >Guardar</button> 
                                                  }
                                            
                                            
                                          </div>
             
                                          
                                         </div>
               
             
                                         
                                         </div>
             
                
                         
                           
             
             
             
                                    
             
             
             
                            
                               </div>
         
            </CModalBody>
            
          </CModal>
        </>
     );
}

export default Bodegasvariantes;