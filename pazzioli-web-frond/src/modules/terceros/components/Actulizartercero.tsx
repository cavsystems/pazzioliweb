import { CFormFloating, CFormInput, CFormLabel, CFormSelect, CInputGroup, CModal, CModalBody, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import Modal from "@mui/material/Modal";
import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Controller, FormProvider, useForm } from "react-hook-form";
import Paper from "@mui/material/Paper";
import dayjs from "dayjs";
import { Identificacion } from "../../empresas/components/components/Identifiicaciones";
/* useRef(initialValue) crea un objeto con .current que puedes asignar a un elemento DOM mediante la propiedad ref*/
function Actulizartercero() {
    const [claseitem,setclaseitem]=React.useState<string>("chrome")
    const [rotate, setRotate] = React.useState(false);
        const [rotate1, setRotate1] = React.useState(false);
        const [rotate2, setRotate2] = React.useState(false);
        const [rotate4,setRotate4]=React.useState(false)
   const [rotate3, setRotate3] = React.useState(false);
    const [picker,setpicker]=React.useState<boolean>(false);
    const [plazos,setplazos]=React.useState<number[]>([15,30,45,60,90]);
    const [plazosaux,setplazosaux]=React.useState<number[]>([15,30,45,60,90]);
    const [paises,setPaises]=React.useState<string[]>(["Colombia","Venezuela","Mexico","Chile"]);
        const [paises2,setPaises2]=React.useState<string[]>(["Colombia","Venezuela","Mexico","Chile"]);
        const [departamento,setDepartamento]=React.useState<string[]>(["Cauca","Valle del cauca","Bogota"]);
        const [departemento2,setDepartamento2]=React.useState<string[]>(["Cauca","Valle del cauca","Bogota"]);
            const [municipio,setMunicipio]=React.useState<string[]>(["Jamundi","Cali","Bogota",'Villarico','Puerto tejada']);
         const [municipio2,setMunicipio2]=React.useState<string[]>(["Jamundi","Cali","Bogota",'Villarico','Puerto tejada']);
    const [selectedDate, setSelectedDate] = React.useState(dayjs()); // 👈 estado para la fecha
    
  const [currentMonth, setCurrentMonth] = React.useState(dayjs().month());
  const [currentYear, setCurrentYear] = React.useState(dayjs().year());
    const inputPlazoRef = React.useRef<HTMLInputElement | null>(null);
 React.useEffect(()=>{
    const ua=navigator.userAgent;
     if (ua.includes("Edg")) {
    setclaseitem("edge");
  } else if (ua.includes("Chrome")) {
    setclaseitem("chrome");
  } else if (ua.includes("Safari")) {
    setclaseitem("safari");
  } else if (ua.includes("Firefox")) {
    setclaseitem("firefox");
  }
 },[])
      const methods = useForm({
                 mode: 'onSubmit',
                  shouldUnregister: false,
                defaultValues: {
             
   tipoidentificacion:"0"  ,
   identificacion:"",
   dijitoverificacion:"",
    nombre1:"",
    nombre2:"",
    apellido1:"",
    apellido2:"",
    razonsocial:"",
    fechanacimiento: "",
    genero: "",
    plazo:"0",
    pais:'Colombia',
    departamento:'',
    municipio:'',
    Actividadeconomica:""


                  // Agrega todos los campos que usas en todos los pasos
                },
              });


              const handleDateChange = (newDate) => {
   
       if (newDate.month() === currentMonth && newDate.year() === currentYear) {
      setSelectedDate(newDate);
     
       methods.setValue("fechanacimiento",newDate.format("YYYY-MM-DD"));
      setpicker(false);
      // Aquí podrías cerrar el calendario, actualizar tu formulario, etc.
    }
  };

                const handleMonthChange = (newMonth) => {
                    console.log("mes actual",currentMonth)
    setCurrentMonth(newMonth.month());
  };

  const handleYearChange = (newYear) => {
                        console.log("año",currentMonth)
    setCurrentYear(newYear.year());
  };

return ( 
         
                <CModal
                alignment="center"
                scrollable
                visible={true}
            
                aria-labelledby="VerticallyCenteredScrollableExample2"
               className="col-12 modalusuper"
                backdrop="static"
               
                  
              >
                <CModalHeader>
                    
                  <CModalTitle id="VerticallyCenteredScrollableExample2">Terceros</CModalTitle>
                </CModalHeader>


                <CModalBody>
                  <FormProvider {...methods}>
                      <form className="row paddinginput" >
            <div className="col-12">
               <h6 className="h6 " style={{padding:'15px 10px 0px 0px ',marginLeft:'1rem'}}>Identicación</h6>

            </div>


             <div className="col-12 "   >
                <div>
                    <div className="row ">

                         <div className="col-12 col-md-6 col-sm-6   inputterceroleft" >

                         <CInputGroup >
                                                 {/* CoreUI soporta etiquetas flotantes (floating labels) en selects. Estas etiquetas se mantienen por encima y en posición flotante incluso cuando se selecciona un valor 
                                                 CFormFloating envuelve el <CFormSelect> y etiqueta para aplicar el estilo flotante.
                                                 Debe incluir placeholder en el select para que funcione correctamente.
                                                 La etiqueta (label), se queda flotando arriba incluso después de elegir una opción*/}
                                 
                                 
                                 {/**el control nos servira para panipular los select a nuestro
                                  * antojo, ya que react-hook-form no permite manipular los select
                                  * directamente, por eso usamos el controller
                                  
                                 
                                 */}                <CFormFloating className="margeniputempresa">
                             <Controller
                           control={methods.control}
                          name="tipopersona"
                           defaultValue='Activo'
                          
                            rules={{ required: "Este campo es obligatorio" }}
                           render={({ field,fieldState }) => (
                             <>
                           <CFormSelect
                           {...field}
                             size="lg"
                             placeholder="Estado"
                             className="inputselect fontletre "
                            
                         
                              onChange={(e:any) => {
                                 // importante para que RHF sepa del cambio
                                   // lógica adicional...
                             const value = e.target.value;
                            
                                 field.onChange(value);
                           }}
                           >
                           
                             
                            <option value="NATURAL">NATURAL</option>
                                         <option value="JURIDICA">JURIDICA</option>
                              
                           </CFormSelect>
                      <CFormLabel>Tipo persona</CFormLabel>
                           </>
                           
                           )}
                         />
                         
                         </CFormFloating>
                          </CInputGroup>
                        </div>
                       <div className="col-12 col-md-6 col-sm-6   inputterceroright" >

                         <CInputGroup >
                                                 {/* CoreUI soporta etiquetas flotantes (floating labels) en selects. Estas etiquetas se mantienen por encima y en posición flotante incluso cuando se selecciona un valor 
                                                 CFormFloating envuelve el <CFormSelect> y etiqueta para aplicar el estilo flotante.
                                                 Debe incluir placeholder en el select para que funcione correctamente.
                                                 La etiqueta (label), se queda flotando arriba incluso después de elegir una opción*/}
                                 
                                 
                                 {/**el control nos servira para panipular los select a nuestro
                                  * antojo, ya que react-hook-form no permite manipular los select
                                  * directamente, por eso usamos el controller
                                  
                                 
                                 */}                <CFormFloating className="margeniputempresa">
                             <Controller
                           control={methods.control}
                          name="tipoidentificacion"
                           defaultValue='Activo'
                          
                            rules={{ required: "Este campo es obligatorio" }}
                           render={({ field,fieldState }) => (
                             <>
                           <CFormSelect
                           {...field}
                             size="lg"
                             placeholder="Estado"
                             className="inputselect fontletre "
                            
                         
                              onChange={(e:any) => {
                                 // importante para que RHF sepa del cambio
                                   // lógica adicional...
                             const value = e.target.value;
                            
                                 field.onChange(value);
                           }}
                           >
                           
                             
                            <option value="MASCULINO">MASCULINO</option>
                                         <option value="FEMENINO">FEMENINO</option>
                              
                           </CFormSelect>
                      <CFormLabel>Tipo identificación</CFormLabel>
                           </>
                           
                           )}
                         />
                         
                         </CFormFloating>
                          </CInputGroup>
                        </div>

                        <div className="col-12  col-md-6 col-sm-6 inputterceroleft">
                            <CInputGroup >
                                           <CFormFloating className="margeniputempresa">
                                         <CFormInput placeholder=""  className="inputdatosempresa fontletre"  
                                         {...methods.register("identificacion",{required:true})}       
                                
                             />
                        
                            <CFormLabel >Identificación</CFormLabel>
                          
                         
                                
                               
                            
                             </CFormFloating>
                                       </CInputGroup>
                        </div>



                         <div className="col-12 col-md-6 col-sm-6  inputterceroright" >
                                   <CInputGroup >
                                           <CFormFloating className="margeniputempresa">
                                         <CFormInput placeholder=""  className="inputdatosempresa fontletre"    disabled={true}     
                                 {...methods.register("dijitoverificacion",{required:true})} 
                             />
                        
                            <CFormLabel >Digito de verificación</CFormLabel>
                          
                         
                                
                               
                            
                             </CFormFloating>
                                       </CInputGroup>
                        </div>

                      


                        
                    </div>
             </div>
                </div>
                  <div className="col-12">
               <h6 className="h6 " style={{padding:'15px 10px 0px 0px ',marginLeft:'1rem'}}>Nombres</h6>

            </div>
             <div className="col-12 "   >
                <div>
                    <div className="row ">
                        <div className="col-12 col-md-6 col-sm-6 inputterceroleft" >
                                   <CInputGroup >
                                           <CFormFloating className="margeniputempresa">
                                         <CFormInput placeholder=""  className="inputdatosempresa fontletre"  
                                          {...methods.register("nombre1",{required:true})}       
                                
                             />
                        
                            <CFormLabel >Nombre1</CFormLabel>
                          
                         
                                
                               
                            
                             </CFormFloating>
                                       </CInputGroup>
                        </div>

                        <div className="col-12  col-md-6 col-sm-6 inputterceroright">
                            <CInputGroup >
                                           <CFormFloating className="margeniputempresa">
                                         <CFormInput placeholder=""  className="inputdatosempresa fontletre"         
                                  {...methods.register("nombre2",{required:true})}
                             />
                        
                            <CFormLabel >Nombre2</CFormLabel>
                          
                         
                                
                               
                            
                             </CFormFloating>
                                       </CInputGroup>
                        </div>



                         <div className="col-12 col-md-6 col-sm-6  inputterceroleft" >
                                   <CInputGroup >
                                           <CFormFloating className="margeniputempresa">
                                         <CFormInput placeholder=""  className="inputdatosempresa fontletre"         
                                {...methods.register("apellido1",{required:true})}
                             />
                        
                            <CFormLabel >Apellido1</CFormLabel>
                          
                         
                                
                               
                            
                             </CFormFloating>
                                       </CInputGroup>
                        </div>

                        <div className="col-12  col-md-6  col-sm-6 inputterceroright">
                            <CInputGroup >
                                           <CFormFloating className="margeniputempresa">
                                         <CFormInput placeholder=""  className="inputdatosempresa fontletre"         
                                  {...methods.register("apellido2",{required:true})}
                             />
                        
                            <CFormLabel >Apellido2</CFormLabel>
                          
                         
                                
                               
                            
                             </CFormFloating>
                                       </CInputGroup>
                        </div>



                        <div className="col-12  col-md-6  col-sm-6  inputterceroleft">
                            <CInputGroup >
                                           <CFormFloating className="margeniputempresa">
                                         <CFormInput placeholder=""  className="inputdatosempresa fontletre"         
                                  {...methods.register("razonsocial",{required:true})}
                             />
                        
                            <CFormLabel >Razon social</CFormLabel>
                          
                         
                                
                               
                            
                             </CFormFloating>
                                       </CInputGroup>
                        </div>






                             <div className="col-12 col-md-6 col-sm-6   inputterceroright" >

                         <CInputGroup >
                                                 {/* CoreUI soporta etiquetas flotantes (floating labels) en selects. Estas etiquetas se mantienen por encima y en posición flotante incluso cuando se selecciona un valor 
                                                 CFormFloating envuelve el <CFormSelect> y etiqueta para aplicar el estilo flotante.
                                                 Debe incluir placeholder en el select para que funcione correctamente.
                                                 La etiqueta (label), se queda flotando arriba incluso después de elegir una opción*/}
                                 
                                 
                                 {/**el control nos servira para panipular los select a nuestro
                                  * antojo, ya que react-hook-form no permite manipular los select
                                  * directamente, por eso usamos el controller
                                  
                                 
                                 */}                <CFormFloating className="margeniputempresa">
                             <Controller
                           control={methods.control}
                           name="genero"
                           defaultValue=''
                            rules={{ required: "Este campo es obligatorio" }}
                           render={({ field,fieldState }) => (
                             <>
                           <CFormSelect
                           {...field}
                             size="lg"
                             placeholder="Estado"
                             className="inputselect fontletre "
                            
                         
                              onChange={(e:any) => {
                                 // importante para que RHF sepa del cambio
                                   // lógica adicional...
                             const value = e.target.value;
                            
                                 field.onChange(value);
                           }}
                           >
                           
                             
                            <option value="MASCULINO">MASCULINO</option>
                                         <option value="FEMENINO">FEMENINO</option>
                              
                           </CFormSelect>
                      <CFormLabel>Genero</CFormLabel>
                           </>
                           
                           )}
                         />
                         
                         </CFormFloating>
                          </CInputGroup>
                        </div>

                        
                             <div className="col-12  col-md-6 col-sm-6 inputterceroleft">
                            <div className="containerfecha margeniputempresa" >
                                <div className="containerfechanacimiento">
                                <input type="text" className="inputfechanacimiento"   {...methods.register("fechanacimiento",{required:true})}  placeholder="DD/MM/YY" onClick={()=>{
                                    setpicker(!picker)
                                }} />
                                <CFormLabel  className="labelfechanacimiento">Fecha nacimiento</CFormLabel>
                                </div>
                                  { picker && <LocalizationProvider dateAdapter={AdapterDayjs}>
       <Paper
        elevation={4} // controla la sombra (1–24)
        sx={{
          borderRadius: 4, // más redondo (8px por cada unidad)
          overflow: 'hidden', // evita que el calendario sobresalga del borde redondeado
          p: 1, // padding interno
          boxShadow: '0px 4px 20px rgba(0,0,0,0.15)', // sombra personalizada opcional
          backgroundColor: '#fff', // fondo blanco
          width: 'fit-content', // ajusta al tamaño del contenido
          position: 'absolute',
    zIndex: 10,
    top: '57px',
        }}
      >
        {
            /* 
            Paper → contenedor con sombra y bordes redondeados.

sx.borderRadius → redondea las esquinas del contenedor.

sx.boxShadow → aplica sombra suave.

Dentro del DateCalendar puedes personalizar:

.MuiPickersDay-root → los días (forma, color, tamaño).

.Mui-selected → estilo del día seleccionado.

.MuiPickersCalendarHeader-root → el encabezado del mes. */
        }
        <DateCalendar
          views={['year','month','day']}
   openTo="day"
          showDaysOutsideCurrentMonth
          fixedWeekNumber={6}
          value={selectedDate}
          onChange={handleDateChange}

           onMonthChange={handleMonthChange}
          onYearChange={handleYearChange}
            onViewChange={(view) => {
    if (view === 'year') {
      console.log("Vista de años abierta");
    }
  }}
          sx={{
            '& .MuiPickersCalendarHeader-root': {
              borderBottom: '1px solid #eee',
              mb: 1,
            },
            '& .MuiPickersDay-root': {
              borderRadius: '50%', // los días se ven circulares
            },
            '& .Mui-selected': {
              backgroundColor: '#1976d2',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#1565c0',
              },
            },
          }}
        />
      </Paper>
    </LocalizationProvider>}
                            </div>
                        </div>




                        <div className="col-12 col-md-6 col-sm-6 inputterceroright" >
                                   <CInputGroup >
                                           <CFormFloating className="margeniputempresa">
                                         <CFormInput placeholder=""  className="inputdatosempresa fontletre"         
                                
                             />
                        
                            <CFormLabel >Cupo</CFormLabel>
                          
                         
                                
                               
                            
                             </CFormFloating>
                                       </CInputGroup>
                        </div>




     <div className="col-12 col-md-6 col-sm-6 inputterceroleft" >
                                   <CInputGroup  >
                                           <CFormFloating className="margeniputempresa">
                                         <CFormInput placeholder=""  className="inputdatosempresa fontletre"       {...methods.register("plazo",{required:true})}    
                                 onChange={(e)=>{
                                let value=e.target.value
                                setplazosaux(plazos.filter(plazo=>plazo.toString().startsWith(value) || plazo.toString().endsWith(value) ))
                                
                             }}
                               
                             />
                         <CFormLabel>Plazos</CFormLabel>
                        <img src="imgs/togle.svg" className={`imagenplazo  ${rotate ? "rotate":""}`}  onClick={()=>{
                            setRotate(!rotate)
                           
                            
                              // enfoque el input

    if(!rotate){
         const inputPlazo = document.querySelector("input[name='plazo']") as HTMLInputElement | null;;
      inputPlazo?.focus();
  
    }

                        }} />

                        <div className={`containerplazos ${rotate ? "mostrarplazos":"mostrarplazosnone"}`} >
                               <ul className={`plazoitem ${claseitem}`} >
                            {plazosaux.map((plazo,index)=>(
                             
                                    <li key={index} className="classitemitem" onClick={()=>{
                                        methods.setValue("plazo",plazo.toString())
                                        //setplazo(false)
                                        setRotate(false)
                                    }}>{plazo}</li>
                              
                            ))
                            }
                              </ul>
                        </div>

                          
                         
                                
                               
                            
                             </CFormFloating>
                                       </CInputGroup>
                        </div>


                        <div className="col-12 col-md-6 col-sm-6   inputterceroright" >

                         <CInputGroup >
                                                 {/* CoreUI soporta etiquetas flotantes (floating labels) en selects. Estas etiquetas se mantienen por encima y en posición flotante incluso cuando se selecciona un valor 
                                                 CFormFloating envuelve el <CFormSelect> y etiqueta para aplicar el estilo flotante.
                                                 Debe incluir placeholder en el select para que funcione correctamente.
                                                 La etiqueta (label), se queda flotando arriba incluso después de elegir una opción*/}
                                 
                                 
                                 {/**el control nos servira para panipular los select a nuestro
                                  * antojo, ya que react-hook-form no permite manipular los select
                                  * directamente, por eso usamos el controller
                                  
                                 
                                 */}                <CFormFloating className="margeniputempresa">
                             <Controller
                           control={methods.control}
                          name="tiporegimen"
                           defaultValue='Activo'
                          
                            rules={{ required: "Este campo es obligatorio" }}
                           render={({ field,fieldState }) => (
                             <>
                           <CFormSelect
                           {...field}
                             size="lg"
                             placeholder="Estado"
                             className="inputselect fontletre "
                            
                         
                              onChange={(e:any) => {
                                 // importante para que RHF sepa del cambio
                                   // lógica adicional...
                             const value = e.target.value;
                            
                                 field.onChange(value);
                           }}
                           >
                           
                             
                            <option value="NATURAL">NATURAL</option>
                                         <option value="JURIDICA">JURIDICA</option>
                              
                           </CFormSelect>
                      <CFormLabel>Tipo regimen</CFormLabel>
                           </>
                           
                           )}
                         />
                         
                         </CFormFloating>
                          </CInputGroup>
                        </div>







                        <div className="col-12 col-md-6 col-sm-6 inputterceroleft" >
                                 <CInputGroup >
                                                 {/* CoreUI soporta etiquetas flotantes (floating labels) en selects. Estas etiquetas se mantienen por encima y en posición flotante incluso cuando se selecciona un valor 
                                                 CFormFloating envuelve el <CFormSelect> y etiqueta para aplicar el estilo flotante.
                                                 Debe incluir placeholder en el select para que funcione correctamente.
                                                 La etiqueta (label), se queda flotando arriba incluso después de elegir una opción*/}
                                 
                                 
                                 {/**el control nos servira para panipular los select a nuestro
                                  * antojo, ya que react-hook-form no permite manipular los select
                                  * directamente, por eso usamos el controller
                                  
                                 
                                 */}                <CFormFloating className="margeniputempresa">
                             <Controller
                           control={methods.control}
                          name="tiporegimen"
                           defaultValue='Activo'
                          
                            rules={{ required: "Este campo es obligatorio" }}
                           render={({ field,fieldState }) => (
                             <>
                           <CFormSelect
                           {...field}
                             size="lg"
                             placeholder="Estado"
                             className="inputselect fontletre "
                            
                         
                              onChange={(e:any) => {
                                 // importante para que RHF sepa del cambio
                                   // lógica adicional...
                             const value = e.target.value;
                            
                                 field.onChange(value);
                           }}
                           >
                           
                             
                            <option value="NATURAL">NATURAL</option>
                                         <option value="JURIDICA">JURIDICA</option>
                              
                           </CFormSelect>
                      <CFormLabel>Precios</CFormLabel>
                           </>
                           
                           )}
                         />
                         
                         </CFormFloating>
                          </CInputGroup>
                        </div>


                         <div className="col-12  col-md-6 col-sm-6 inputterceroright">
                            <CInputGroup >
                                           <CFormFloating className="margeniputempresa">
                                         <CFormInput placeholder=""  className="inputdatosempresa fontletre"         
                                
                             />
                        
                            <CFormLabel >Matricula Mercantil</CFormLabel>
                          
                         
                                
                               
                            
                             </CFormFloating>
                                       </CInputGroup>
                        </div>
                        
<div className="col-12  col-md-6 col-sm-6 inputterceroleft">
                                                  <CInputGroup className="" >
               <CFormFloating className="margeniputempresa">
              <CFormInput placeholder=""     list="actividades" className="inputdatosempresa fontletre inputcomple"         {...methods.register('Actividadeconomica', { required: 'Este campo es obligatorio' })}    onChange={(e: any) => {
      
         
  }}/>
    { methods.formState.errors.Actividadeconomica ? (
    <CFormLabel style={{ color: "red" }}>{"Actividad económica (CIIU)"}</CFormLabel>):(
  <CFormLabel>{"Actividad económica (CIIU)"}</CFormLabel>)}
   
              </CFormFloating>
            </CInputGroup>
            </div>


            <div className="col-12  col-md-6 col-sm-6 inputterceroright">
               <div className="d-flex  flex-wrap flex-column" style={{position:"relative"}}>
                  <ul  className="d-flex container1  flex-wrap">
               <li className="classitemitem2"><span>item 1</span> <button className="botoncerrar"></button></li>
                <li className="classitemitem2"><span>item 2</span> <button className="botoncerrar"></button></li>
               <li className="classitemitem2"><span>item 3</span> <button className="botoncerrar"></button></li>
               <li className="classitemitem2"><span>item 4</span> <button className="botoncerrar"></button></li>
              <li className="classitemitem2"><span>item 4</span> <button className="botoncerrar"></button></li>
               <li className="classitemitem2"><span>item 4</span> <button className="botoncerrar"></button></li>
                <li  style={{flex:"1",display:"flex",justifyContent:"center",gap:"12px"}} ><input style={{width:"100%"}} className="inputestilotercero "/> <div ><img  src="imgs/togle.svg" onClick={()=>{
                    setRotate4(!rotate4)
                }} className={`${rotate4 ? 'rotate':''} `}/></div> <div style={{alignSelf:'1'}}  className="botoncerrarall"><button className="botoncerrar botoncerrarall"></button></div>  </li >
                  </ul>
                { rotate4 && (<div className="containeritemli">
                  <ul className="itemcontli">

                    <li className="licheckterceros" > <input type="checkbox"/>opcion 1</li>
                    <li className="licheckterceros"><input type="checkbox"/>opcion 2</li>
                    <li className="licheckterceros"> <input type="checkbox"/> opcion 3</li>
                    <li className="licheckterceros"> <input type="checkbox"/> opcion 4</li>
                  </ul>
                  </div>)}
               </div>
            </div>
                    </div>
             </div>



             
                </div>



                 <div className="col-12">
               <h6 className="h6 " style={{padding:'15px 10px 0px 0px ',marginLeft:'1rem'}}>Ubicación</h6>

            </div>

            <div className="col-12 "   >
                <div>
                    <div className="row ">
                        <div className="col-12 col-md-6 col-sm-6 inputterceroleft" >
                                 <CInputGroup  >
                                           <CFormFloating className="margeniputempresa">
                                         <CFormInput placeholder=""  className="inputdatosempresa fontletre"       {...methods.register("pais",{required:true})}    
                                 onChange={(e)=>{
                                let value=e.target.value
                                setPaises2(paises.filter(pa=>pa.toString().startsWith(value) || pa.toString().endsWith(value) ))
                                
                             }}
                               
                             />
                         <CFormLabel>País</CFormLabel>
                        <img src="imgs/togle.svg" className={`imagenplazo  ${rotate1 ? "rotate":""}`}  onClick={()=>{
                            setRotate1(!rotate1)
                           
                            
                              // enfoque el input

    if(!rotate1){
         const inputPlazo = document.querySelector("input[name='pais']") as HTMLInputElement | null;;
      inputPlazo?.focus();
  
    }

                        }} />

                        <div className={`containerplazos ${rotate1 ? "mostrarplazos":"mostrarplazosnone"}`} >
                               <ul className={`plazoitem ${claseitem}`} >
                            {paises2.map((pa,index)=>(
                             
                                    <li key={index} className="classitemitem" onClick={()=>{
                                        methods.setValue("pais",pa.toString())
                                        //setplazo(false)
                                        setRotate1(false)
                                    }}>{pa}</li>
                              
                            ))
                            }
                              </ul>
                        </div>

                          
                         
                                
                               
                            
                             </CFormFloating>
                                       </CInputGroup>
                        </div>

                         <div className="col-12 col-md-6 col-sm-6 inputterceroright" >
                                 <CInputGroup  >
                                           <CFormFloating className="margeniputempresa">
                                         <CFormInput placeholder=""  className="inputdatosempresa fontletre"       {...methods.register("departamento",{required:true})}    
                                 onChange={(e)=>{
                                let value=e.target.value
                                setDepartamento2(departamento.filter(pa=>pa.toString().startsWith(value) || pa.toString().endsWith(value) ))
                                
                             }}
                               
                             />
                         <CFormLabel>Departamento</CFormLabel>
                        <img src="imgs/togle.svg" className={`imagenplazo  ${rotate2 ? "rotate":""}`}  onClick={()=>{
                            setRotate2(!rotate2)
                           
                            
                              // enfoque el input

    if(!rotate2){
         const inputPlazo = document.querySelector("input[name='departamento']") as HTMLInputElement | null;;
      inputPlazo?.focus();
  
    }

                        }} />

                        <div className={`containerplazos ${rotate2 ? "mostrarplazos":"mostrarplazosnone"}`} >
                               <ul className={`plazoitem ${claseitem}`} >
                            {departamento.map((pa,index)=>(
                             
                                    <li key={index} className="classitemitem" onClick={()=>{
                                        methods.setValue("departamento",pa.toString())
                                        //setplazo(false)
                                        setRotate1(false)
                                    }}>{pa}</li>
                              
                            ))
                            }
                              </ul>
                        </div>

                          
                         
                                
                               
                            
                             </CFormFloating>
                                       </CInputGroup>
                        </div>





                           <div className="col-12 col-md-6 col-sm-6 inputterceroleft" >
                                 <CInputGroup>
                                           <CFormFloating className="margeniputempresa">
                                         <CFormInput placeholder=""  className="inputdatosempresa fontletre"       {...methods.register("municipio",{required:true})}    
                                 onChange={(e)=>{
                                let value=e.target.value
                                setMunicipio2(municipio.filter(pa=>pa.toString().startsWith(value) || pa.toString().endsWith(value) ))
                                
                             }}
                               
                             />
                         <CFormLabel>Municipio</CFormLabel>
                        <img src="imgs/togle.svg" className={`imagenplazo  ${rotate3 ? "rotate":""}`}  onClick={()=>{
                            setRotate3(!rotate3)
                           
                            
                              // enfoque el input

    if(!rotate3){
         const inputPlazo = document.querySelector("input[name='municipio']") as HTMLInputElement | null;;
      inputPlazo?.focus();
  
    }

                        }} />

                        <div className={`containerplazos ${rotate3 ? "mostrarplazos":"mostrarplazosnone"}`} >
                               <ul className={`plazoitem ${claseitem}`} >
                            {municipio.map((pa,index)=>(
                             
                                    <li key={index} className="classitemitem" onClick={()=>{
                                        methods.setValue("municipio",pa.toString())
                                        //setplazo(false)
                                        setRotate3(false)
                                    }}>{pa}</li>
                              
                            ))
                            }
                              </ul>
                        </div>

                          
                         
                                
                               
                            
                             </CFormFloating>
                                       </CInputGroup>
                        </div>



                        <div className="col-12  col-md-6 col-sm-6 inputterceroright">
                            <CInputGroup >
                                           <CFormFloating className="margeniputempresa">
                                         <CFormInput placeholder=""  className="inputdatosempresa fontletre"         
                                
                             />
                        
                            <CFormLabel >Codigo postal</CFormLabel>
                          
                         
                                
                               
                            
                             </CFormFloating>
                                       </CInputGroup>
                        </div>





                       



                        

                    </div>
             </div>
                </div>


                 

              
                  <div className="col-12">
               <h6 className="h6 " style={{padding:'15px 10px 0px 0px ',marginLeft:'1rem'}}>Contacto</h6>

            </div>

               <div className="col-12 "   >
                <div>
                    <div className="row ">
                        <div className="col-12 col-md-6 col-sm-6 inputterceroleft" >
                                   <CInputGroup >
                                           <CFormFloating className="margeniputempresa">
                                         <CFormInput placeholder=""  className="inputdatosempresa fontletre"         
                                
                             />
                        
                            <CFormLabel >Correo</CFormLabel>
                          
                         
                                
                               
                            
                             </CFormFloating>
                                       </CInputGroup>
                        </div>

                        <div className="col-12  col-md-6 col-sm-6 inputterceroright">
                            <CInputGroup >
                                           <CFormFloating className="margeniputempresa">
                                         <CFormInput placeholder=""  className="inputdatosempresa fontletre"         
                                
                             />
                        
                            <CFormLabel >Numero</CFormLabel>
                          
                         
                                
                               
                            
                             </CFormFloating>
                                       </CInputGroup>
                        </div>



                         <div className="col-12 col-md-6 col-sm-6  inputterceroleft" >
                                   <CInputGroup >
                                           <CFormFloating className="margeniputempresa">
                                         <CFormInput placeholder=""  className="inputdatosempresa fontletre"         
                                
                             />
                        
                            <CFormLabel >Telefono</CFormLabel>
                          
                         
                                
                               
                            
                             </CFormFloating>
                                       </CInputGroup>
                        </div>

                       



                       



                        

                    </div>
             </div>
                </div>








                

             </form>
             </FormProvider>
                            
                </CModalBody>
            

              
                 </CModal>
     );
}

export default Actulizartercero;