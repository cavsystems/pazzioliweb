import { CFormFloating, CFormInput, CFormLabel, CFormSelect, CFormTextarea, CInputGroup, CModal, CModalBody, CModalHeader, CModalTitle, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import Modal from "@mui/material/Modal";
import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Controller, FormProvider, useForm } from "react-hook-form";
import Paper from "@mui/material/Paper";
import dayjs from "dayjs";
import { Identificacion } from "../../empresas/components/components/Identifiicaciones";
import api from "../../../apicofig";
/* useRef(initialValue) crea un objeto con .current que puedes asignar a un elemento DOM mediante la propiedad ref*/
function Actulizartercero({visiblemodal,setvisiblemodal}:any) {
    const [claseitem,setclaseitem]=React.useState<string>("chrome")
    const [rotate, setRotate] = React.useState(false);
        const [rotate1, setRotate1] = React.useState(false);
        const [rotate2, setRotate2] = React.useState(false);
        const [rotate4,setRotate4]=React.useState(false)
   const [clasificaciontercero,setClasificacionTercero] =React.useState<{nombre: string, clasificacionTerceroId:number}[]>([])
   const [rotate3, setRotate3] = React.useState(false);
   const [codigospais,setcodigospais]=React.useState<number[]>([])
   const [codigomunicipio,setCodigomunicipio]=React.useState<{codigo:number,municipio:string,codigoDepartamento:number}[]>([])
    const [codigodepartamento,setCodigodepartamento]=React.useState<{codigo:number,departamento:string,codigoDepartamento:number}[]>([]);
    const [picker,setpicker]=React.useState<boolean>(false);
    const [plazos,setplazos]=React.useState<number[]>([15,30,45,60,90]);
    const [plazosaux,setplazosaux]=React.useState<number[]>([15,30,45,60,90]);
    const [paises,setPaises]=React.useState<string[]>(["Colombia","Venezuela","Mexico","Chile"]);
        const [paises2,setPaises2]=React.useState<string[]>(["Colombia","Venezuela","Mexico","Chile"]);
        const [departamento,setDepartamento]=React.useState<{codigo:number,departamento:string,codigoDepartamento:number}[]>([]);
        const [departamento2,setDepartamento2]=React.useState<{codigo:number,departamento:string,codigoDepartamento:number}[]>([]);
          const [departamentoobject,setdepartamentoobject] = React.useState<{codigo:number,departamento:string,codigoDepartamento:number}>({codigo:0,departamento:"",codigoDepartamento:0})   
             const [municipioobject,setmunicipioobject] = React.useState<{codigo:number,municipio:string,codigoDepartamento:number,codigoMunicipio:number}>({codigo:0,municipio:"",codigoDepartamento:0,codigoMunicipio:0})   
             const [municipio,setMunicipio]=React.useState<{codigo:number,municipio:string,codigoDepartamento:number,codigoMunicipio:number}[]>([]);
         const [municipio2,setMunicipio2]=React.useState<{codigo:number,municipio:string,codigoDepartamento:number,codigoMunicipio:number}[]>([]);
    const [selectedDate, setSelectedDate] = React.useState(dayjs()); // 👈 estado para la fecha
   const [esjuridica,setesjuridica]=React.useState<boolean>(false)

    const [actividadeconomica,setactividadeconomica]=React.useState([])
      const [filtrodes, setFiltro] = React.useState('');
      const [filtroco, setFiltroco] = React.useState(0);
      const [mostrardes,setmostrardes]=React.useState(true)
     const [tipohove,settipohover]=React.useState("hoverchrome");
     const [CIIU,setciiu]=React.useState('')
    const [tipopersona,settipopersona]=React.useState<{
        codigo: number, 
        nombre: string

    }[]>([])
    const [tipoidentificacion,settipoidentificacion]=React.useState<{
       codigo
: number,
codigoTipoIdentificacion
: number,
tipoIdentificacion
: string


    }[]>([])


     const [tipoidentificacion2,settipoidentificacion2]=React.useState<{
       codigo
: number,
codigoTipoIdentificacion
: number,
tipoIdentificacion
: string


    }[]>([])
const [regimen,setregimen]=React.useState<{
    codigo:number, codigoRegimen:string, descripcion:string, estado: string
}[]>([])
const [regimen2,setregimen2]=React.useState<{
    codigo:number, codigoRegimen:string, descripcion:string, estado: string
}[]>([])
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
  traerinformacion();
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
    Actividadeconomica:"",
    codigopostal:"",
    digitodeverificacion:"",
    clasificaciontercero:"",
    direccion:"",


                  // Agrega todos los campos que usas en todos los pasos
                },
              });
   React.useEffect(()=>{
  traerdataauto()

   },[filtroco,filtrodes])
   const traerdataauto= async ()=>{
    const data=await api.get(`/empresa/traeractividadeseconomicas?descripcion=${filtrodes}&codigo=${filtroco}`)
    console.log(data.data.datosactividad)
    setactividadeconomica(data.data.datosactividad)
   }
 const [digito,setdigito]=React.useState("");
            React.useEffect(()=>{
             methods.setValue("digitodeverificacion",digito)
            },[digito])
const crearcodigomu = (codigomuni: string): string => {
  return codigomuni.length >= 3
    ? codigomuni
    : codigomuni.length === 2
    ? "0" + codigomuni
    : "00" + codigomuni;
};

  const traerinformacion= async ()=>{
    let datos=await api.get('/empresa/traerempresa')
 let datosclasificacion= await api.get(`clasificacionesTerceros/listar?page=0&size=7&sortField=nombre&sortDirection=desc`,{
            headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
            }})
    console.log("datos clasificacion",datosclasificacion)
    setClasificacionTercero(datosclasificacion.data.content)
   let municipioss:{codigo:number,municipio:string,codigoDepartamento:number}[]=[]
     let departamentoss:{codigo:number,departamento:string,codigoDepartamento:number}[]=[]
   municipioss=datos.data.datos.municipio
   departamentoss=datos.data.datos.departamento
   console.log("datos empresa",datos.data.datos)
   setPaises(datos.data.datos.pais.map((data)=> data.pais ))
   setPaises2(datos.data.datos.pais.map((data)=> data.pais ))
   setDepartamento(datos.data.datos.departamento)
  
setDepartamento2(datos.data.datos.departamento)
 setMunicipio(datos.data.datos.municipio)
  settipopersona(datos.data.datos.tipopersona)
  settipoidentificacion(datos.data.datos.tipoidentificacion);
  settipoidentificacion2(datos.data.datos.tipoidentificacion)
   setcodigospais(datos.data.datos.pais.map((data)=> data.codigo ))
   setregimen(datos.data.datos.regimen)
   setregimen2(datos.data.datos.regimen)
 setCodigomunicipio( municipioss.map((data)=> ({codigo:data.codigo,municipio:data.municipio,codigoDepartamento:data.codigoDepartamento}) ))
 setCodigodepartamento(departamentoss.map((item)=>  ({codigo:item.codigo,departamento:item.departamento,codigoDepartamento:item.codigoDepartamento}) ))
    
  }

  const traercodigopostal=async (codigomunici:string)=>{
   const codigoposta= await api.get(`/codigoPostal/codigopostal?codigomunicipio=${Number(codigomunici)}`)
   console.log("codigo postal",codigoposta)
  
   const postal=codigoposta.data.respuesta.replace("\r","");
   methods.setValue("codigopostal",postal)
  }

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
                  backdrop="static"
                visible={visiblemodal}
                  onClose={()=>{
                    setvisiblemodal(false)
                  }}
                  
                aria-labelledby="VerticallyCenteredScrollableExample2"
               className="col-12 "
              
               
                  
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
                          name="clasificaciontercero"
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
                           
                             
                        <option value="">Elije una opción</option>
                            {
                                clasificaciontercero?.map((item)=>{
                                    return <>
                                     <option value={item.clasificacionTerceroId}>{item.nombre}</option>
                                    </>
                                })
                            }
                              
                           </CFormSelect>
                      <CFormLabel>Clasificación</CFormLabel>
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
                          name="tipopersona"
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
                             console.log(e.target.value.trim())
                                if(e.target.value.trim()==="1"){
                                    settipoidentificacion(tipoidentificacion2.filter((item)=> item.tipoIdentificacion==="Nit"))
                                    console.log("regimen2",regimen2)
                                    setregimen(regimen2.filter((item)=> item.descripcion!=="No responsable de iva"))
                                    setesjuridica(true)
                                }else{
                                    settipoidentificacion(tipoidentificacion2.filter((item)=> item.tipoIdentificacion!=="Nit"))
                                       setregimen(regimen2.filter((item)=> item.descripcion!=="Regimen simple de tributación"))
                                     setesjuridica(false)
                                }
                                 field.onChange(value);
                           }}
                           >
                           
                             
                            <option value="">Elije una opción</option>
                            {
                                tipopersona?.map((item)=>{
                                    return <>
                                     <option value={item.codigo}>{item.nombre}</option>
                                    </>
                                })
                            }
                                        
                              
                           </CFormSelect>
                      <CFormLabel>Tipo persona</CFormLabel>
                           </>
                           
                           )}
                         />
                         
                         </CFormFloating>
                          </CInputGroup>
                        </div>
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
                           
                             
                        <option value="">Elije una opción</option>
                            {
                                tipoidentificacion?.map((item)=>{
                                    return <>
                                     <option value={item.codigo}>{item.tipoIdentificacion}</option>
                                    </>
                                })
                            }
                              
                           </CFormSelect>
                      <CFormLabel>Tipo identificación</CFormLabel>
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
                                         {...methods.register("identificacion",{required:true})}  onChange={(e)=>{
                                         
                                                  api.get("/digitoverificacion/CalcularDv?numeroIdentificacion=" + e.target.value)
                                                         .then((res) => {
                                                           console.log(res.data.digito)   
                                                            setdigito(res.data.digito)}
                                                       
                                                       );
                                            }
                                         }    
                                
                             />
                        
                            <CFormLabel >Identificación</CFormLabel>
                          
                         
                                
                               
                            
                             </CFormFloating>
                                       </CInputGroup>
                        </div>



                         <div className="col-12 col-md-6 col-sm-6  inputterceroleft" >
                                   <CInputGroup >
                                           <CFormFloating className="margeniputempresa">
                                         <CFormInput placeholder=""  className="inputdatosempresa fontletre"    disabled={true}     
                                 {...methods.register("digitodeverificacion",{required:true})} 
                             />
                        
                            <CFormLabel >Digito de verificación</CFormLabel>
                          
                         
                                
                               
                            
                             </CFormFloating>
                                       </CInputGroup>
                        </div>

                      


                        
                    </div>
             </div>
                </div>
                  <div className="col-12">
               <h6 className="h6 " style={{padding:'15px 10px 0px 0px ',marginLeft:'1rem'}}>Datos Generales</h6>

            </div>
             <div className="col-12 "   >
                <div>
                    <div className="row ">
                        <div className="col-12 col-md-6 col-sm-6 inputterceroleft" >
                                   <CInputGroup >
                                           <CFormFloating className="margeniputempresa">
                                         <CFormInput placeholder=""  className="inputdatosempresa fontletre"  
                                          {...methods.register("nombre1")}     disabled={esjuridica}   
                                
                             />
                        
                            <CFormLabel >Nombre1</CFormLabel>
                          
                         
                                
                               
                            
                             </CFormFloating>
                                       </CInputGroup>
                        </div>

                        <div className="col-12  col-md-6 col-sm-6 inputterceroright">
                            <CInputGroup >
                                           <CFormFloating className="margeniputempresa">
                                         <CFormInput placeholder=""  className="inputdatosempresa fontletre"         
                                  {...methods.register("nombre2")}  disabled={esjuridica}
                             />
                        
                            <CFormLabel >Nombre2</CFormLabel>
                          
                         
                                
                               
                            
                             </CFormFloating>
                                       </CInputGroup>
                        </div>



                         <div className="col-12 col-md-6 col-sm-6  inputterceroleft" >
                                   <CInputGroup >
                                           <CFormFloating className="margeniputempresa">
                                         <CFormInput placeholder=""  className="inputdatosempresa fontletre"         
                                {...methods.register("apellido1",{required:true})} disabled={esjuridica}
                             />
                        
                            <CFormLabel >Apellido1</CFormLabel>
                          
                         
                                
                               
                            
                             </CFormFloating>
                                       </CInputGroup>
                        </div>

                        <div className="col-12  col-md-6  col-sm-6 inputterceroright">
                            <CInputGroup >
                                           <CFormFloating className="margeniputempresa">
                                         <CFormInput placeholder=""  className="inputdatosempresa fontletre"         
                                  {...methods.register("apellido2",{required:true})} disabled={esjuridica}
                             />
                        
                            <CFormLabel >Apellido2</CFormLabel>
                          
                         
                                
                               
                            
                             </CFormFloating>
                                       </CInputGroup>
                        </div>



                        <div className="col-12  col-md-6  col-sm-6  inputterceroleft">
                            <CInputGroup >
                                           <CFormFloating className="margeniputempresa">
                                         <CFormInput placeholder=""  className="inputdatosempresa fontletre"         
                                  {...methods.register("razonsocial")} disabled={!esjuridica}
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
                           
                             
                            <option value="">Elige una opción</option>
                                         {
                                            regimen.map((item)=>{
                                                return <>
                                                <option value={item.codigo}>{item.descripcion}</option>
                                                </>
                                            })
                                         }
                              
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
              <CFormInput placeholder=""     list="actividades" className="inputdatosempresa fontletre inputcomple"   value={filtrodes}        {...methods.register('Actividadeconomica', { required: 'Este campo es obligatorio' })}    onChange={(e: any) => {
                 const valor = e.target.value;
                setFiltro(e.target.value);
                setmostrardes(true)
             setFiltroco(valor === "" ? 0: (!isNaN(valor) ? Number(valor) : 0));

    console.log(e.target.value);
    // Llamar al onChange original de react-hook-form
    methods.register('Actividadeconomica').onChange(e);
  }}/>
    { methods.formState.errors.Actividadeconomica ? (
    <CFormLabel style={{ color: "red" }}>{"Actividad económica (CIIU)"+" "+CIIU}</CFormLabel>):(
  <CFormLabel>{"Actividad económica (CIIU)"+" "+CIIU}</CFormLabel>)}
    
     {filtrodes && mostrardes && (
      <ul className={`lista-opcionesaut ${tipohove}`}>
        {actividadeconomica.map((item:any) => (
          <li key={item.codigo} onClick={()=>{
            setFiltro(item.descripcionActividad)
            setciiu(item.codigo)
            setmostrardes(false)
          }}>{item.descripcionActividad}</li>
        ))}
      </ul>
    )}

              </CFormFloating>
            </CInputGroup>
                                 
            </div>


            <div className="col-12  col-md-6 col-sm-6 inputterceroright">
               <div className="d-flex  flex-wrap flex-column" style={{position:"relative"}}>
                  <ul  className="d-flex container1  flex-wrap">
             
                <li  style={{flex:"1",display:"flex",justifyContent:"center",gap:"12px"}} ><input style={{width:"100%"}} className="inputestilotercero " placeholder="Retenciones" /> <div ><img  src="imgs/togle.svg" onClick={()=>{
                    setRotate4(!rotate4)
                }} className={`${rotate4 ? 'rotate':''} `}/></div> <div style={{alignSelf:'1'}}  className="botoncerrarall"><button className="botoncerrar botoncerrarall"></button></div>  </li >
                  </ul>
                { rotate4 && (<div className="containeritemli">
                  <ul className="itemcontli">

                    <li className="licheckterceros" > <input type="checkbox"/>ReteFuente</li>
                    <li className="licheckterceros"><input type="checkbox"/>ReteIca</li>
                    <li className="licheckterceros"> <input type="checkbox"/>ReteIva</li>
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
                                setDepartamento2(departamento.filter(pa=>pa.departamento.startsWith(value.toUpperCase()) || pa.departamento.toString().endsWith(value.toUpperCase()) ))
                                
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
                            {departamento2.map((pa,index)=>(
                             
                                    <li key={index} className="classitemitem" onClick={()=>{
                                        methods.setValue("departamento",pa.departamento.toString())
                                              methods.setValue("municipio","")
                                      setdepartamentoobject(pa)
                                     let codigodepar=codigodepartamento.find((item)=> item.departamento===pa.departamento)
                                        
                                          setMunicipio2(municipio.filter((item)=>item.codigoDepartamento===codigodepar?.codigoDepartamento))
                                          console.log("municipios filtradas",municipio2,codigodepar,pa,codigodepartamento)
                                        //setplazo(false)
                                        setRotate2(false)
                                    }}>{pa.departamento}</li>
                              
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
                                setMunicipio2(municipio.filter(pa=>(pa.municipio.toString().startsWith(value.toUpperCase()) || pa.municipio.toString().endsWith(value.toUpperCase())) && pa.codigoDepartamento===departamentoobject.codigoDepartamento))
                                
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
                            {municipio2.map((pa,index)=>(
                             
                                    <li key={index} className="classitemitem" onClick={()=>{
                                        methods.setValue("municipio",pa.municipio.toString())
                                        setmunicipioobject(pa)
                                        console.log("municipioactual",pa)
                                        let codigopos= departamentoobject.codigoDepartamento.toString()+crearcodigomu(pa.codigoMunicipio.toString())
                                        traercodigopostal(codigopos)
                                        //setplazo(false)
                                        setRotate3(false)
                                    }}>{pa.municipio}</li>
                              
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
                                         <CFormInput placeholder=""  className="inputdatosempresa fontletre"   {...methods.register("codigopostal",{required:true}) }     
                                
                             />
                        
                            <CFormLabel >Codigo postal</CFormLabel>
                          
                         
                                
                               
                            
                             </CFormFloating>
                                       </CInputGroup>
                        </div>


                        <div className="col-12 col-md-6 col-sm-6  inputterceroleft" >
                                   <CInputGroup >
                                           <CFormFloating className="margeniputempresa">
                                          <CFormTextarea placeholder=""  className="inputdatosempresa fontletre"   
                                          {...methods.register("direccion",{required:true})}          
                                
                             />
                        
                            <CFormLabel >Direccion</CFormLabel>
                          
                         
                                
                               
                            
                             </CFormFloating>
                                       </CInputGroup>
                        </div>





                       



                        

                    </div>
             </div>
                </div>


                 

              
           

                  <div  className="d-flex justify-content-center" style={{marginTop:'15px'}}>
                <button type="submit" className="botoncontinuarguardar"  key="guardar"    
                >Guardar</button>
               </div>






                

             </form>
             </FormProvider>
                            
                </CModalBody>
            

              
                 </CModal>
     );
}

export default Actulizartercero;