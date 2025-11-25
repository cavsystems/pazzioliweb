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
                            <div className="col-12  col-md-12 col-sm-12  inputretencion titulospro " style={{marginLeft:"20px"}}>
                             <label form="slectform1" className="" >Tipo de producto</label>
                           
                             </div>
                      
                              <select className="selctproduct">
                                <option value={""} id="slectform1">Elige una opcion</option>
                               </select>
                            
                         



                                 <div className="col-12 d-flex column-gap-3 flex-wrap">
                                  <div className=" flex-grow-1 " style={{paddingTop:"12px"}}>
                             
                            <div className="inputprocttex" >
                                 <label form="inputdescrip" className="titulospro">Codigo</label>
                                 <input type="text"  id="inputdescri" className="inputproduct" style={{width:'100%'}}/>
                            </div>
                            </div>
                             <div className=" flex-grow-1 " style={{paddingTop:"12px"}}>
                             
                            <div className="inputprocttex" >
                                 <label form="inputdescrip" className="titulospro">Descripción</label>
                                 <input type="text"  id="inputdescri" className="inputproduct" style={{width:'100%'}}/>
                            </div>
                            </div>
                            
                            
                       
  

                            
                            </div>


                            <div className="col-12 d-flex column-gap-3 flex-wrap">
                                  <div className=" flex-grow-1 " style={{paddingTop:"12px"}}>
                             
                            <div className="inputprocttex" >
                                 <label form="inputdescrip" className="titulospro">Referencia</label>
                                 <input type="text"  id="inputdescri" className="inputproduct" style={{width:'100%'}}/>
                            </div>
                            </div>
                              <div className="flex-grow-1   "  style={{paddingTop:"12px"}}>

                             <div className="inputprocttex">
                              <label form="slectform1" className="titulospro">Unidad de medida</label>
                               <select className="selctproduct">
                                <option value={""} id="slectform1">Elige una opcion</option>
                               </select>



                               
                             </div>

                             
                            </div>
  

                            
                            </div>
                            
                            <div className="col-12 " >
                                  <div className="inputprocttex" style={{paddingTop:"12px"}}>
                              <label form="slectform1" className="titulospro">Impuesto</label>
                               <select className="selctproduct">
                                <option value={""} id="slectform1">Elige una opcion</option>
                               </select>



                               
                             </div>
                            </div>

                            <div className="col-12 d-flex column-gap-3 flex-wrap">
                                  <div className="flex-grow-1" style={{paddingTop:"12px"}}>
                             
                            <div className="inputprocttex inputcodigosbarra" >
                                 <label form="inputdescrip" className="titulospro">Codigos de barra</label>
                                 <input type="text"  id="inputdescri" className="inputproduct" style={{width:'100%'}}/>
                                 <button className="botoncodigobarra"><span>Agregar</span> <span>2</span></button>
                                 <button style={{position:"absolute",width:"fit-content",border:"none",background:"#fff"}} className="ojocodigobarra"><Ojoquetodolove/></button>
                            </div>
                            </div>
                       
  

                            
                            </div>

                            
                            <div className="col-12 d-flex column-gap-3 flex-wrap">

                               <div className="flex-grow-1   "  style={{paddingTop:"12px"}}>

                             <div className="inputprocttex">
                              <div className="d-flex justify-content-between"> <label form="slectform1" className="titulospro titulolista">Lista  de precios</label>   <img  src="imgs/togle.svg"  className={` ${rotate ? 'rotate':''} `}  onClick={()=>{
                              setrotate(!rotate);
                              }}/> </div>
                              
                               
                              
                               



                               
                             </div>

                             
                            </div>
                                  
                             

                              <div className={`flex-grow-1 ${rotate ? '':'displaynonelist'}`} style={{paddingTop:"12px"}}>

                             <div className={`inputprocttex justify-content-center align-items-center row-gap-3`}>
                              
                              
                               
                                <div className="tablalistaprecio">
                                <CTable  

        
          
          small
          align="left" className="tablaproducts">
                                                  
                                                  <CTableHead>
                                                    <CTableRow>
                                                    
                                                        <CTableHeaderCell scope="col">Tipo precio</CTableHeaderCell>
                                                    <CTableHeaderCell scope="col" >Valor</CTableHeaderCell>
                                                   
                                                    
                                        
                                                      
                                                    </CTableRow>
                                                  </CTableHead>
                                                  <CTableBody>
                                                  
                                                  
                                                 
                      
                                      
                                         
                                            
                                             
                                            
                                                     <CTableRow>
                                                      <CTableDataCell>Precio1</CTableDataCell>
                                      <CTableDataCell><input placeholder="0" className="inputitem"/></CTableDataCell>
                                     
                                      
                                            
                                          
                                              </CTableRow>

                                              <CTableRow>
                                                      <CTableDataCell>Precio2</CTableDataCell>
                                      <CTableDataCell><input placeholder="0" className="inputitem"/></CTableDataCell>
                                     
                                      
                                            
                                          
                                              </CTableRow>
                                              
                                                
                                               
                            
                                              
                                    
                                        
                                      
                                                    
                        
                                                      
                                                
                                                     
                                                  </CTableBody>
                                               
                                                </CTable>
                                                </div>
                               
                                
                                       <button type="submit" className="botoncontinuarguardar botonagregarcon"  key="guardar"   >Agregar</button>  
                               
                               
                             </div>

                             
                            </div>
  

                            
                            </div>

                              <div className="col-12 d-flex column-gap-3 flex-wrap">

                               <div className="flex-grow-1   "  style={{paddingTop:"12px"}}>

                             <div className="inputprocttex">
                              <div className="d-flex justify-content-between"> <label form="slectform1" className="titulospro titulolista">Bodegas</label>   <img  src="imgs/togle.svg"  className={` ${rotate ? 'rotate':''} `}  onClick={()=>{
                              setrotate(!rotate);
                              }}/> </div>
                              
                               
                              
                               



                               
                             </div>

                             
                            </div>
                                  
                             

                              <div className={`flex-grow-1 ${rotate ? '':'displaynonelist'}`} style={{paddingTop:"12px"}}>

                             <div className={`inputprocttex justify-content-center align-items-center row-gap-3`}>
                              
                              
                               
                                <div className="tablalistaprecio">
                                <CTable  

        
          
          small
          align="left" className="tablaproducts">
                                                  
                                                  <CTableHead>
                                                    <CTableRow>
                                                        <CTableHeaderCell scope="col"><div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                            Estado
                                                            </div></CTableHeaderCell>
                                                        <CTableHeaderCell scope="col">Bodega</CTableHeaderCell>
                                                    <CTableHeaderCell scope="col" >Ubicación</CTableHeaderCell>
                                                   
                                                    
                                        
                                                      
                                                    </CTableRow>
                                                  </CTableHead>
                                                  <CTableBody>
                                                  
                                                  
                                                 
                      
                                      
                                         
                                            
                                             
                                            
                                                     <CTableRow>
                                                         <CTableDataCell><div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><input type="checkbox"/></div></CTableDataCell>
                                                      <CTableDataCell>Bodega sur</CTableDataCell>
                                      <CTableDataCell><input type="text"  className="inputitem"/></CTableDataCell>
                                     
                                      
                                            
                                          
                                              </CTableRow>

                                              <CTableRow>
                                                       <CTableDataCell><div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><input type="checkbox"/></div></CTableDataCell>
                                                      <CTableDataCell>Bodega sur</CTableDataCell>
                                      <CTableDataCell><input type="text" className="inputitem"/></CTableDataCell>
                                     
                                      
                                            
                                          
                                              </CTableRow>
                                              
                                                
                                               
                            
                                              
                                    
                                        
                                      
                                                    
                        
                                                      
                                                
                                                     
                                                  </CTableBody>
                                               
                                                </CTable>
                                                </div>
                               
                                
                                       
                               
                               
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

