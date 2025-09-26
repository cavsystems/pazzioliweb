
import { ChartsLegend } from '@mui/x-charts';
import { PieChart } from '@mui/x-charts/PieChart';
import React, { useEffect } from 'react';


// Registrar módulos necesarios
/* accumulated se usa más adelante para calcular la posición de los labels a partir del ángulo acumulado. */
let accumulated = 0;
const data:any = [
  { id:0,label: '0-30 dias', value: 420000, color: '#53EAFD' ,porcentaje:0 },
  { id:1,label: '30-60 dias', value: 300000, color: '#21BCFF' ,porcentaje:0},
  { id:2,label: '60-90 dias', value: 300000, color: '#FFD230' ,porcentaje:0},
  { id:3,label: '+90 dias', value: 120000, color: '#FF8042' ,porcentaje:0},
];
/*  Configuras el PieChart con un tamaño fijo, margen derecho y sin leyenda integrada.*/
const settings = {

  width: 300,
  height: 300,
  hideLegend: true
  
};
function Chartcartera() {
  /* datacartera contiene los datos con el porcentaje calculado */
    const [datacartera,setdatacartera]=React.useState(data)
    /*  totalcartera guarda la suma de todos los valores.*/
    const [totalcartera,settotalcartera]=React.useState(0)
      const size = { width: 200, height: 200};
      /* Define el tamaño del contenedor y el centro del círculo.

.*/
  const center = { x: size.width / 2, y: size.height / 2};
  /*innerRadius y outerRadius determinan el grosor del donut*/
  const innerRadius = 50;
  const outerRadius = 100;
   useEffect(()=>{
    let total=0
    data.forEach((item:any)=>{
      total+=item.value
    })
    settotalcartera(total)
    const dataconporcentaje=data.map((item:any)=>{
      return {...item,porcentaje: parseFloat(((item.value / total) * 100).toFixed(2))}
    })
    setdatacartera(dataconporcentaje)
     
   },[])
   /*Calcula el punto medio de cada arco para colocar la etiqueta.*/
   /*Convierte el ángulo de grados a radianes (rad).*/
   /*rLabel es la distancia desde el centro (el radio medio del donut).*/
     const getLabelPosition = (startAngle: number, endAngle: number) => {
    const angle = (startAngle + endAngle) / 2;
    const rad = (angle * Math.PI) / 180;
    const rLabel = (innerRadius + outerRadius) / 2 ;
    return {
      x: (center.x + Math.cos(rad) * rLabel),
      y: (center.y + Math.sin(rad) * rLabel),
    };
  };
    
return (
    <>
    {/* Creas un contenedor div relativo, para poder colocar labels con position: absolute.

Dibujas el PieChart con los datos de datacartera. */}
    <div style={{width:'100%',display:'flex',justifyContent:'center' ,alignItems:'center',flexDirection:'column'}}> 
       <div style={{ position: "relative", width: size.width ,height: size.height}}>
   <PieChart
  {...settings}
  series={[
    {
      innerRadius: 57,
      outerRadius: 100,
      data: datacartera,
                                                                 
    },
   
    
  ]}

  {...size}

/>

{/* Ignora arcos muy pequeños (<2%) para que no se amontonen.

Calcula el startAngle y endAngle usando accumulated.

Calcula el ángulo medio del arco (angle) y lo rota -90° para que el primer sector comience arriba.

Calcula x y y usando trigonometría.

Dibuja un div absoluto en esa posición con el label.


*/}
{datacartera.map((item: any) => {
  if (item.porcentaje < 2) return null;
  const total = datacartera.reduce((sum, d) => sum + d.value, 0);

  const startAngle = (accumulated / total) * 360;
  accumulated += item.value;
  const endAngle = (accumulated / total) * 360;

  // Ángulo medio y rotación -90° para que 0° quede arriba
  /* Por defecto, el primer valor del pie chart empieza a las 0°, es decir, a la derecha del círculo.

Pero normalmente queremos que el primer arco empiece desde arriba, como en muchos gráficos de torta.

Para lograr esto, restamos 90° al ángulo medio del arco:


(startAngle + endAngle)/2 → es el ángulo medio del arco.

- 90 → rota todo el círculo para que el inicio quede arriba.*/ 
/*Supongamos un arco que empieza en 0° y termina en 120°:

Ángulo medio: (0 + 120)/2 = 60°

Rotamos para que 0° quede arriba: 60 - 90 = -30°

-30° significa 30° hacia arriba desde la vertical, que se traduce bien al SVG.*/
  const angle = (startAngle + endAngle) / 2 - 90;
  const rad = (angle * Math.PI) / 180;
  const rLabel = (innerRadius + outerRadius) / 2;
/*Math.cos(rad) y Math.sin(rad) calculan el desplazamiento horizontal y vertical desde el centro.

Esto ubica el label justo en la mitad del arco, pero centrado respecto al círculo.*/

/* En trigonometría de un círculo unitario:

Para un ángulo 𝜃
x=cos(θ)
y=sin(θ)

Esto devuelve un punto en un círculo de radio 1 centrado en (0,0). */


/*Escalar al radio real

Multiplicamos por rLabel para escalar desde un círculo unitario al círculo del gráfico:

xlabel=cos(θ)×rLabel
𝑦label=sin(θ)×rLabel

*/


/*  Tu gráfico no tiene radio 1, sino un radio real rLabel (por ejemplo, 75px).

Para mover el punto del círculo unitario al círculo del tamaño real, multiplicamos cada coordenada por rLabel:

𝑥real=cos(θ)⋅rLabel
𝑦real=sin(θ)⋅rLabel

Esto coloca el punto exactamente sobre el arco del círculo a la distancia rLabel desde el centro.*/
/*   Finalmente, sumamos center.x y center.y para mover el punto desde el origen (0,0) al centro real del gráfico: */
  const pos = {
    x: center.x + Math.cos(rad) * rLabel,
    y: center.y + Math.sin(rad) * rLabel,
  };

  return (
    <div
      key={item.id}
      style={{
        position: "absolute",
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%, -50%)",
        textAlign: "center",
         
        color: 'var(--blanco)',
 
font: 'normal normal 600 12px/11px Open San',
letterSpacing: '0px',

textShadow: '0px 1px 1px #00000078',
opacity: '1',
        whiteSpace: "pre-line",
      }}
    >
      {item.label.replace(" ", "\n")}
    </div>
  );
})}
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent:'center', marginTop: '10px' ,position:"absolute",position: "absolute",
      top: "45%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      fontWeight: 600,
      fontSize: "16px",
      color: "#333",}}> 
  <span style={{letterSpacing: "var(--unnamed-character-spacing-0)",
color:"var(--gris-textos)",
textAlign:"center",
font: "normal normal normal 12px/12px Open Sans",
}}>Total</span>
  <h2 style={{letterSpacing: "var(--unnamed-character-spacing-0)",
color: "var(--gris-textos)",
textAlign: "center",
font: "normal normal bold 12px/12px Open Sans",
}}>${totalcartera.toLocaleString('de-DE')}</h2>
</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start',justifyContent:'start', marginTop: '10px' }}>
  {  datacartera
.map((s:any) => (
    <div key={s.id} style={{ display: 'flex', alignItems: 'center' ,justifyContent:'center'}}>
      <span
        style={{
          width: 12,
          height: 12,
          backgroundColor: s.color, // asegúrate que la serie incluya color
          marginRight: 8,
          borderRadius:'10px'
        }}
      />
      <span>{s.label}-${s.value.toLocaleString('de-DE')}{`(${s.porcentaje}%)`}</span>
    </div>
  ))}
</div>
  <div className='botonvermas'>
    <button>Ver mas</button>
  </div>
</div>

        </>
  );
    
  }

export default Chartcartera;