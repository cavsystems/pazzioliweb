//librerias para trabajar con graficos en js
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import * as React from 'react';

import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/es'; 
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';

import { DateCalendar} from '@mui/x-date-pickers';
import { useEffect } from "react";
//wrapper que permite usar chartjs con react de manera declarativa
import { Line } from "react-chartjs-2";
import TextField from "@mui/material/TextField";
import Ingresoloopchar from "./subcharts/chartingreloop";
import Chartgostoloop from "./subcharts/chartgastosloop";
/*Los módulos importados (LineElement, PointElement, CategoryScale, etc.) 
son componentes internos que Chart.js necesita para renderizar un gráfico de líneas*/
/* LineElement: el trazo de la línea.

PointElement: los puntos de datos.

CategoryScale: el eje X (categorías, como "Enero", "Febrero"...).

LinearScale: el eje Y (numérico).

Tooltip: el cuadro emergente al pasar el mouse.

Legend: la leyenda con los nombres de las series. */

/* En Chart.js, la legend (leyenda) es el recuadro que aparece normalmente en la parte 
superior, lateral o inferior del gráfico y muestra los nombres de cada serie/dataset, 
con su color correspondiente. */
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
   Filler 
);

function Chatsloopgiadmin() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));
  const [fechainicial,setfechainial]=React.useState<Dayjs | null>(null)
  const [fechafinal,setfechafinal]=React.useState<Dayjs | null>(null)
  const [tablein,settablein]=React.useState<boolean>(true)
  const [opencalender,setopencalender]=React.useState(false)
  const addzeros=n=>{
    if(n.toString().length<2) return "0".concat(n)
    return n
}
useEffect(()=>{
const date=new Date()
console.log(`fecha ${date.getFullYear()}-${addzeros(date.getMonth())}-${addzeros(date.getDay())}`)
setfechainial(dayjs(`${date.getFullYear()}-${addzeros(date.getMonth()+1)}-${addzeros(date.getDate())}`))
setfechafinal(dayjs(`${date.getFullYear()-1}-${addzeros(date.getMonth()+1)}-${addzeros(date.getDate())}`))
},[])

return ( 
        <>
         <div className="chart-container" >
          <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
          <div className="custom-legend">
            <div style={{display:"flex"}}>
             <div style={{position:'relative'}}>
            <button className="botoncalender" onClick={()=>{
            setopencalender(!opencalender)
            }}>
              <img src="/imgs/iconcalender.svg"  />
              <span className="spancalender">Ultimo año</span>
              
            </button>

            <div className="card cardcalender" style={{width:'700px',position:"absolute",zIndex:10,top: '48px' , display:opencalender===true ? "":"none" }} >
               
              <div className="card-body" style={{paddingRight:0,maxHeight: "300px",
    overflow: 'auto'}}>
                <div style={{display:"flex"}} >
                  <div style={{display:"flex",flexDirection:"column",    padding: '0 10px 0 0',gap:'20px'}}>
                  <span style={{whiteSpace:'nowrap'}} className="spancalenderitem">Hoy</span>
                  <span style={{whiteSpace:'nowrap'}} className="spancalenderitem">Ayer</span>
                  <span style={{whiteSpace:'nowrap'}} className="spancalenderitem">Esta semana</span>
                  <span style={{whiteSpace:'nowrap'}} className="spancalenderitem">Semana pasada </span>
                  <span style={{whiteSpace:'nowrap'}} className="spancalenderitem">Este mes</span>
                  <span style={{whiteSpace:'nowrap'}} className="spancalenderitem">Este año</span>
                  </div>

                

                  <div className="divisoracalen"></div>

                    <div style={{display:'flex',flexDirection:'column',width: '100%',padding:'6px 10px 6px 10px'}}>
                    <div style={{display:'flex' ,justifyContent:"space-between",    padding: '0 40px'}}>
             <TextField label="Fecha inicial" id="outlined-size-normal" value={fechafinal?.format("YYYY-MM-DD")} defaultValue="small" variant="outlined"    size="small"      slotProps={{
    inputLabel: {
      shrink: true,
      sx: {
        "&.MuiInputLabel-root": {
          zIndex: 10,
          position: "absolute",
        },
      },
    },
    input: {
      sx: {
        "& .MuiInputBase-input": {
          border: "none !important",
        },
        "& .MuiOutlinedInput-input": {
          border: "none !important",
        },
        "& .MuiInputBase-inputSizeSmall": {
          border: "none !important",
        },
      },
    },
  }}/>               
         <TextField
          label="Fecha final"
          id="outlined-size-small"
          defaultValue="Small"
           size="small"
           value={fechainicial?.format("YYYY-MM-DD")}
     slotProps={{
    inputLabel: {
      shrink: true,
      sx: {
        "&.MuiInputLabel-root": {
          zIndex: 10,
          position: "absolute",
        },
      },
    },
    input: {
      sx: {
        "& .MuiInputBase-input": {
          border: "none !important",
        },
        "& .MuiOutlinedInput-input": {
          border: "none !important",
        },
        "& .MuiInputBase-inputSizeSmall": {
          border: "none !important",
        },
      },
    },
  }}
        />
     
                    </div>




                    <div style={{display:"flex" }}>

          <LocalizationProvider dateAdapter={AdapterDayjs}  adapterLocale="es">
      <DateCalendar sx={{width:'250px' ,  ".MuiDayCalendar-root, .MuiYearCalendar-root": {
      width:'200px',
      height:'200px'
    },
    ".MuiPickersCalendarHeader-root":{
     padding:0
    }}}  value={fechafinal}   // 👈 aquí usas value
    onChange={(newValue) => setfechafinal(newValue) } />
    </LocalizationProvider>
                      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
      <DateCalendar sx={{width:'250px' , ".MuiDayCalendar-root, .MuiYearCalendar-root": {
      width:'200px',
      height:'200px'
    },
    
    ".MuiPickersCalendarHeader-root":{
     padding:0
    }}}   value={fechainicial}   // 👈 aquí usas value
    onChange={(newValue) => setfechainial(newValue)}/>
    </LocalizationProvider>
  
    


                    </div>

                  </div>

                </div>
               

              </div>
              <div className="card-footer  fottercalender ">
               
               <div className="botonesfooter">
                <div style={{display:"inline-flex",gap:'10px'}}>
                <button className="botonfotercancelar">Cancelar</button>
                <button className="botonaplicarfotter">Aplicar</button>
                </div>
               </div>
              </div>
            </div>
            </div>

  <button className={`botonesgraficos ${tablein ? "botonesgraficosactive":""} `}  onClick={()=>{
    settablein(true)
  }}   ><span className="fonttitulosbotones">Ingresos totales</span>
  <div>
    <span className="fontnumerosdashboard">${'144.381.444 COP'}</span>
  </div>
  </button>
  </div>
  <button className={`botonesgraficos ${!tablein ? "botonesgraficosactive":""} `}  onClick={()=>{
    settablein(false)
  }}><span className="fonttitulosbotones">Gastos totales</span>
  <div>
    <span className="fontnumerosdashboard">${'144.381.444 COP'}</span>
  </div></button>
</div>

 { tablein ? <div style={{display:"flex" ,gap:'15px'}} className="indicadoreschar">
  <div style={{display:"flex" ,gap:"6px",alignItems:'center'}}> <div style={{background:"#51A2FF",width:"15px",height:"15px"}}></div><span>Ventas actuales</span></div>
  <div style={{display:"flex" ,gap:"6px",alignItems:'center'}}> <div style={{background:"#31C950",width:"15px",height:"15px"}}></div><span>Ventas anteriores</span></div>
</div>:<div style={{display:"flex" ,gap:'15px'}} className="indicadoreschar">
  <div style={{display:"flex" ,gap:"6px",alignItems:'center'}}> <div style={{background:"#F09700",width:"15px",height:"15px"}}></div><span>Gastos actuales</span></div>
  <div style={{display:"flex" ,gap:"6px",alignItems:'center'}}> <div style={{background:"#FFB93B",width:"15px",height:"15px"}}></div><span>Gastos anteriores</span></div>
</div> }
</div>
<div style={{height:'389px', width:'100%'}}>
      {tablein &&  <Ingresoloopchar/>}
      {!tablein  &&  <Chartgostoloop/>}
           
           </div>
         </div>
        </>
     );
    }
export default Chatsloopgiadmin;