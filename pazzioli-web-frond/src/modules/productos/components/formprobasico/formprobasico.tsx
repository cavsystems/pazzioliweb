import { CButton, CFormFloating, CFormLabel, CFormSelect, CInputGroup, CModal, CModalBody, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import { Controller, FormProvider, useForm, useFormContext } from "react-hook-form";
import Ojoquetodolove from "../../../../icons/ojoquetodolove";
import { useState } from "react";
import Iconfoto from "../../../../icons/iconfoto";
import Downloadimg from "../../../../icons/icondonwloadimg";


function Formprobasico() {
     const [rotate,setrotate]=useState(false);
                     const { register,control,setValue, formState: { errors } } =useFormContext();
    return (  <>
      <div  className="row containertipospro" style={{padding:"0px 20px 0px 20px"}}>
                               
                             
                            
                            <div className="col-12  col-md-6 column-gap-3 "  >
                               
                             
                             
                            <div className="inputprocttex" style={{paddingTop:"12px"}}>
                                  <label form="slectform1" className="titulospro" style={{padding:"0px 1px 0px 1px"}} >Tipo de producto</label>
                                    <select className="selctproduct">
                                <option value={""} id="slectform1">Elige una opcion</option>
                               </select>
                            </div>
                         
                            
                            
                       
  

                            
                            </div>

                                <div className="col-12 col-md-6 column-gap-3 paddingleftformpro " >
                                  
                             
                            <div className="inputprocttex" style={{paddingTop:"12px"}}>
                                 <label form="inputdescrip" className="titulospro" >Código</label>
                                 <input type="text"  id="inputdescri" className="inputproduct" style={{width:'100%'}}/>
                            </div>
                           
                             
                            
                            
                       
  

                            
                            </div>

                              

                            <div className="col-12">
                                <div className="d-flex flex-column" style={{paddingTop:"12px"}}>
                                 
                           <label form="inputdescrip" className="titulospro">Descripción</label>
                                 
                                 <input type="text"  id="inputdescri" className="inputproduct" style={{width:'100%'}}/>
                               </div>
                               </div>

                              <div className="col-12 col-md-6 column-gap-3" >
                                 <div className="inputprocttex" style={{paddingTop:"12px"}}>
                                 <label form="inputdescrip" className="titulospro">Referencia</label>
                                 <input type="text"  id="inputdescri" className="inputproduct" style={{width:'100%'}}/>
                            </div>
                              </div>


                                <div className="col-12  col-md-6 column-gap-3 paddingleftformpro"  >
                                  <div className="inputprocttex" style={{paddingTop:"12px"}}>
                              <label form="slectform1" className="titulospro">Unidad de medida</label>
                               <select className="selctproduct">
                                <option value={""} id="slectform1">Elige una opcion</option>
                               </select>



                               
                             </div>
                                </div>


                            
                            
                            <div className="col-12 col-md-6 " >
                                  <div className="inputprocttex" style={{paddingTop:"12px"}}>
                              <label form="slectform1" className="titulospro">Impuesto</label>
                               <select className="selctproduct">
                                <option value={""} id="slectform1">Elige una opcion</option>
                               </select>



                               
                             </div>
                            </div>

                            <div className="col-12 col-md-6 inputconcondigoba" >
                                
                             
                            <div className="inputprocttex inputcodigosbarra paddingleftformpro"   >
                                 <label form="inputdescrip" className="titulospro">Codigos de barra</label>
                                 <input type="text"  id="inputdescri" className="inputproduct" style={{width:'100%'}}/>
                                 <button className="botoncodigobarra"><span>Agregar</span> <span>2</span></button>
                                 <button style={{position:"absolute",width:"fit-content",border:"none",background:"#fff"}} className="ojocodigobarra"><Ojoquetodolove/></button>
                            </div>
                          
                       
  

                            
                            </div>

                             <div className="col-12 col-md-6 column-gap-3 " >
                                 <div className="inputprocttex" style={{paddingTop:"12px"}}>
                                 <label form="inputdescrip" className="titulospro">Costo</label>
                                 <input type="text"  id="inputdescri" className="inputproduct" style={{width:'100%'}}/>
                            </div>
                              </div>

                                 <div className="col-12 col-md-6 column-gap-3 paddingleftformpro" >
                                 <div className="inputprocttex" style={{paddingTop:"12px"}}>
                                 <label form="inputdescrip" className="titulospro">Manifiesto</label>
                                 <input type="text"  id="inputdescri" className="inputproduct" style={{width:'100%'}}/>
                            </div>
                              </div>



                               <div className="col-12 col-md-6 " >
                                  <div className="inputprocttex" style={{paddingTop:"12px"}}>
                              <label form="slectform1" className="titulospro">Linea</label>
                               <select className="selctproduct">
                                <option value={""} id="slectform1">Elige una opcion</option>
                               </select>



                               
                             </div>
                            </div>
                             <div className="col-12 col-md-6  paddingleftformpro" >
                                  <div className="inputprocttex" style={{paddingTop:"12px"}}>
                              <label form="slectform1" className="titulospro">Grupo</label>
                               <select className="selctproduct">
                                <option value={""} id="slectform1">Elige una opcion</option>
                               </select>



                               
                             </div>
                            </div>

                              

                            
                            <div className="col-12">

                          
                             <div className="inputprocttex" style={{width:"100%", paddingTop:"12px"}}>
                              <div className="d-flex justify-content-between"> <label form="slectform1" className="titulospro titulolista">Lista  de precios</label>   <img  src="imgs/togle.svg"  className={` ${rotate ? 'rotate':''} `}  onClick={()=>{
                              setrotate(!rotate);
                              }}/> </div>
                              
                               
                              
                               



                               
                             </div>

                             
       
                                  
                             

                              <div className={`flex-grow-1 ${rotate ? '':'displaynonelist'}`} style={{paddingTop:"12px"}}>

                             <div className={`inputprocttex justify-content-center align-items-center row-gap-3`}>
                              
                              
                               
                                <div className="tablalistaprecio">
                                <CTable  

        
          
          small
          align="left" className="tablaproducts tablaperzonalinalida1">
                                                  
                                                  <CTableHead>
                                                    <CTableRow>
                                                    
                                                        <CTableHeaderCell scope="col">Tipo precio</CTableHeaderCell>
                                                    <CTableHeaderCell scope="col" >Valor</CTableHeaderCell>
                                                   
                                                    
                                        
                                                      
                                                    </CTableRow>
                                                  </CTableHead>
                                                  <CTableBody>
                                                  
                                                  
                                                 
                      
                                      
                                         
                                            
                                             
                                            
                                                     <CTableRow>
                                                      <CTableDataCell>   <select className="iteminput1">
                                <option value={""} id="slectform1">Detal</option>
                                  <option value={""} id="slectform1">Por mayoreo</option>
                               </select></CTableDataCell>
                                      <CTableDataCell><input placeholder="0" className="iteminput1"/></CTableDataCell>
                                     
                                      
                                            
                                          
                                              </CTableRow>

                                        
                                              
                                                
                                               
                            
                                              
                                    
                                        
                                      
                                                    
                        
                                                      
                                                
                                                     
                                                  </CTableBody>
                                               
                                                </CTable>
                                                </div>
                               
                                
                                       <button type="submit" className="botoncontinuarguardar botonagregarcon"  key="guardar"   >Agregar</button>  
                               
                               
                             </div>

                             
                            </div>
  

                            
                          


                             
                            
  

                            
                            </div>

                            
                        
                                 
                        </div>


                         <div className="d-flex justify-content-center column-gap-3 flex-wrap " style={{padding:"15px 15px 0px 15px"}}>
                           
                             <div style={{width:"200px",height:"200px",background:"#F3F4F7",borderRadius:"6px",position:"relative"}} className="d-flex justify-content-center align-items-center">
                                <Iconfoto width={100} height={100} color={"#555"}/>
                                <div className="icondown">
                                <Downloadimg width={40} height={40} color={"#555"}  />
                                </div>
                             </div>


                         </div>
    </>);
}

export default Formprobasico;

