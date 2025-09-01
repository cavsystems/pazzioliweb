//librerias para trabajar con graficos en js
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect } from "react";
//wrapper que permite usar chartjs con react de manera declarativa
import { Line } from "react-chartjs-2";
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
  Legend
);

function Chatsloopgiadmin() {


  // datos
     const data = {
        //loque aparece en el eje x
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    //cada cojunto de datos que se grafican
    datasets: [
      {
        //el nombre de la serie (aparece en la leyenda)
        label: "Ventas",
        //los valores en el eje y
        data: [10, 20, 15, 30, 25, 40],
        //color de la linea
        
        borderColor: "blue",
        //color de relleno (si lo habilitas en otras configs).
        backgroundColor: "lightblue",
        tension: 0.4, // curva suave
      },
      {
        //el nombre de la serie (aparece en la leyenda)
        label: "Ventas",
        //los valores en el eje y
        data: [ 20, 15, 30, 40],
        //color de la linea
        
        borderColor: "Green",
        //color de relleno (si lo habilitas en otras configs).
        backgroundColor: "lightblue",
        tension: 0.4, // curva suave
      },

    ],
  };
//Opciones (options)
const options:any = {
  
    //el gráfico se ajusta al tamaño del contenedor.
  responsive: true,
  maintainAspectRatio: false,
   scales: {
    x: {
      grid: {
        display: false, // Desactiva las líneas de la cuadrícula en el eje X
      },
    },
    y: {
      grid: {
        display: true, // Mantiene las líneas de la cuadrícula en el eje Y
      },
    },
  },
    
  animations: {
    //Estás animando el radius (radio) de los puntos en el gráfico.
    radius: {
        //cada ciclo dura 1 segundo.
        duration: 1000,
        //la animación usa una función linear, es decir, la velocidad es constante.
    easing: "linear",
    //hace que se repita la animación mientras el punto está en estado activo (ej: hover).
    loop: (ctx: any) => ctx.active,
    /*keyframes → defines los estados:

de radio 5 px → a radio 15 px (efecto de pulso).  cada ves que paso el hover por el punto*/
    keyframes: [
      { value: 5 },
      { value: 15 },
    ],
    },
  },
  plugins: {
    legend:{
      display: false, // Desactiva la leyenda predeterminada
    },
    tooltip: {
        //activa los tooltips al pasar el mouse.
      enabled: true,
    },
    
  },
  //define cómo reacciona al pasar el mouse:
  interaction: {
    //busca el punto mas secano
    mode: "nearest" as const,
    //no es necesario que el mouse esté exactamente sobre el punto.
    intersect: false,
    //solo se activa en el eje x (horizontalmente).
    axis: "x" as const,
  },

  
};


return ( 
        <>
         <div className="chart-container" >
          <div className="custom-legend">
  <button className="botonesgraficos"  style={{background: "#F3F4F7 0% 0% no-repeat padding-box"}}><span>Ingresos totales</span>
  <div>
    <span>${'144.381.444 COP'}</span>
  </div>
  </button>
  <button className="botonesgraficos" ><span>Gastos totales</span>
  <div>
    <span>${'144.381.444 COP'}</span>
  </div></button>
</div>
           <Line data={data} options={options}  />
         </div>
        </>
     );
    }
export default Chatsloopgiadmin;