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
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';

import { DateCalendar} from '@mui/x-date-pickers';
import { useEffect } from "react";
//wrapper que permite usar chartjs con react de manera declarativa
import { Line } from "react-chartjs-2";
import TextField from "@mui/material/TextField";

import ChartgostoloopCajero from "./subcharts/chartsgastosloopcajaro";
import Ingresoloopcharcajero from "./subcharts/ingresoloopcharcajero";
import ChartgostolooprecudoCajero from "./subcharts/chartsgastolooprecaudocajero";
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

function Chatsloopgirecuadocajero() {
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
          <div className="custom-legend">
             <div style={{position:'relative'}}>
            <button className="botoncalender" onClick={()=>{
            setopencalender(!opencalender)
            }}>
              <img src="/imgs/iconcalender.svg"  />
              <span className="spancalender">Ultimo año</span>
              
            </button>

            <div className="card cardcalender" style={{width:'700px',position:"absolute",zIndex:10,top: '48px' , display:opencalender===true ? "":"none" }} >
               
              <div className="card-body" style={{paddingRight:0}}>
                <div style={{display:"flex"}} >
                  <div style={{display:"flex",flexDirection:"column",    padding: '0 10px 0 0',gap:'20px'}}>
                  <span style={{whiteSpace:'nowrap'}} className="spancalenderitem">Hoy</span>
                  <span style={{whiteSpace:'nowrap'}} className="spancalenderitem">Ayer</span>
                  <span style={{whiteSpace:'nowrap'}} className="spancalenderitem">Esta semana</span>
                  <span style={{whiteSpace:'nowrap'}} className="spancalenderitem">Semana pasada </span>
                  <span style={{whiteSpace:'nowrap'}} className="spancalenderitem">Los ultimos 7 dias</span>
                  <span style={{whiteSpace:'nowrap'}} className="spancalenderitem">Los ultimos 28 dias</span>
                 <span style={{whiteSpace:'nowrap'}} className="spancalenderitem">Los ultimos 30 dias</span>
                 <span style={{whiteSpace:'nowrap'}} className="spancalenderitem">Los ultimos 90 dias</span>
                  <span style={{whiteSpace:'nowrap'}} className="spancalenderitem">Ultimo año</span>
                  </div>

                

                  <div className="divisoracalen"></div>

                    <div style={{display:'flex',flexDirection:'column',width: '100%',padding:'6px 10px 6px 10px'}}>
                    <div style={{display:'flex' ,justifyContent:"space-between",    padding: '0 40px'}}>
                         
         <TextField
          label="Size"
          id="outlined-size-small"
          defaultValue="Small"
           size="small"
           value={fechainicial?.format("YYYY-MM-DD")}
          slotProps={{
    inputLabel: {
      shrink: true, // hace que el label flote
      sx: {
         
               ".css-idnh3w-MuiFormLabel-root-MuiInputLabel-root":{
                       zIndex: 10 ,
               position: 'absolute',
               }
      },
    },
  }}

        />
        <TextField label="Size" id="outlined-size-normal" value={fechafinal?.format("YYYY-MM-DD")} defaultValue="small" variant="outlined"    size="small"/>
                    </div>




                    <div style={{display:"flex" }}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar sx={{width:'250px',height:'100%' ,  ".MuiDayCalendar-root, .MuiYearCalendar-root": {
      width:'200px',
      height:'200px'
    },
    
    ".MuiPickersCalendarHeader-root":{
     padding:0
    }}}   value={fechainicial}   // 👈 aquí usas value
    onChange={(newValue) => setfechainial(newValue)}/>
    </LocalizationProvider>
  
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar sx={{width:'250px',height:'100%' ,  ".MuiDayCalendar-root, .MuiYearCalendar-root": {
      width:'200px',
      height:'200px'
    },
    ".MuiPickersCalendarHeader-root":{
     padding:0
    }}}  value={fechafinal}   // 👈 aquí usas value
    onChange={(newValue) => setfechafinal(newValue)}/>
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
  <button className={`botonesgraficos ${!tablein ? "botonesgraficosactive":""} `}  onClick={()=>{
    settablein(false)
  }}><span className="fonttitulosbotones">Gastos totales</span>
  <div>
    <span className="fontnumerosdashboard">${'144.381.444 COP'}</span>
  </div></button>
</div>
<div style={{height:'300px', width:'100%'}}>
      {tablein &&  <ChartgostolooprecudoCajero/>}
      {!tablein  &&  <ChartgostoloopCajero/>}
           
           </div>
             <div className='botonvermas' >
    <button>Ver mas</button>
  </div>
         </div>
        </>
     );
    }
export default  Chatsloopgirecuadocajero;