import { CFormFloating, CFormLabel, CFormSelect, CInputGroup, CModal, CModalBody, CModalHeader, CModalTitle } from "@coreui/react";
import { Controller, FormProvider, useForm, useFormContext } from "react-hook-form";
import Ojoquetodolove from "../../../icons/ojoquetodolove";

function Formproduct() {

     const methods = useForm({
               mode: 'onSubmit',
                shouldUnregister: false,
              defaultValues: {
               Actividadeconomica: "",
          correoempresa:"",
          celularempresa:"",
          codigopostal:"",
          digitodeverificacion:"",
          departamento:"",
          municipio:"",
          nombrecomercial:"",
          numeroidentificacion:"",
          pais:"",
          primerapellido:"",
          primernombre: "",
          razonsocial:"",
          regimen:"",
          segundoapellido:"",
          segundonombre:"",
          telefonofijo:"",
          tipodeidentificacion: "",
          tipodepersona:"",
          archivoLogo:null,
          impuestos:[],
          sucursales:[],
          
                // Agrega todos los campos que usas en todos los pasos
              },
            });
                 const { register,control,setValue, formState: { errors } } = methods;
    return ( <>
      <FormProvider {...methods}>
     <CModal
            alignment="center"
            scrollable
            visible={true}
           
            aria-labelledby="VerticallyCenteredScrollableExample2"
           className="col-12 contproduct"
          >
              <CModalHeader>
                      <CModalTitle id="VerticallyCenteredScrollableExample2">Creación de productos</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        
                        <div className="row  " style={{padding:"0px 20px 0px 20px"}}>

                           

                        </div>
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
                              <div className="d-flex justify-content-between"> <label form="slectform1" className="titulospro titulolista">Lista  de precios</label>   <img  src="imgs/togle.svg"  className={` 'rotate' `}/> </div>
                              
                               
                              


                               
                             </div>

                             
                            </div>
                                  
                             
  

                            
                            </div>

                            

                            
                          <div className="col-12  col-md-12 col-sm-12  inputretencion  containertipospro" style={{height:"82px"}} >
                             <label form="slectform1" className="titulospro" >Bodegas</label>
                                        <div className="d-flex  flex-wrap flex-column margeniputempresa" style={{position:"relative",height: "calc(100% - 40px)"}}   >
                                            
                                           <ul  className="d-flex container1  flex-wrap" >
                                             
                                             
                                         <li  style={{flex:"1",display:"flex",justifyContent:"center",gap:"12px"}}  className="classiteminput"><input style={{width:"100%"}} className="inputestilotercero "  /> <div ><img  src="imgs/togle.svg"  className={` 'rotate' `}/></div> <div style={{alignSelf:'1'}}  className="botoncerrarall"><button className="botoncerrar botoncerrarall" type="button" 
                         
                                          
                                        ></button></div>  </li >
                                           </ul>
                                       
                                        </div>
                                     </div>
                                 
                        </div>


                         <div className="d-flex justify-content-center column-gap-3 flex-wrap " style={{padding:"15px 15px 0px 15px"}}>
                           


                         </div>


                           
                    </CModalBody>

          </CModal>
          </FormProvider>
    </> );
}

export default Formproduct;