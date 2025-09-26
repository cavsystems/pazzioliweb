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
  Legend,
   Filler 
);

function Chartgostoloop() {
      // datos
         const data = {
            //loque aparece en el eje x
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
        //cada cojunto de datos que se grafican
        datasets: [
          {
            type: "line", 
            //el nombre de la serie (aparece en la leyenda)
            label: "Ventas",
            //los valores en el eje y
            data: [450000, 400000, 650000, 300000, 250000, 120000],
            //color de la linea
            
            borderColor: "#F09700",
            //color de relleno (si lo habilitas en otras configs).
              backgroundColor: "#F097004D", // relleno semitransparente
    
            tension: 0.4, // curva suave
            fill: true, // rellena el área bajo la línea
          },
          {
            //el nombre de la serie (aparece en la leyenda)
            label: "Ventas",
            //los valores en el eje y
            data: [ 200000, 600000, 0, 40000],
            //color de la linea
            
            borderColor: "#FFB93B",
            //color de relleno (si lo habilitas en otras configs).
            backgroundColor: "lightblue",
            tension: 0.4, // curva suave
                borderDash: [5, 5],
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
               ticks: {
           // aquí decides qué se muestra
            callback: function(value: any, index: number, ticks: any) {
              // 👇 ejemplo: solo mostrar múltiplos de 10
              if (value % 1000 === 0) {
                return value;
              }
              return ""; // no muestra nada
            },
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
    
    
    return ( <>
     <Line data={data} options={options}  />
    </> );
}

export default Chartgostoloop;