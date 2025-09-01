
import { ChartsLegend } from '@mui/x-charts';
import { PieChart } from '@mui/x-charts/PieChart';
import React, { useEffect } from 'react';


// Registrar módulos necesarios

const data:any = [
  { id:0,label: '0-30 dias', value: 420000, color: '#0088FE' ,porcentaje:0 },
  { id:1,label: '30-60 dias', value: 300000, color: '#00C49F' ,porcentaje:0},
  { id:2,label: '30-90 dias', value: 300000, color: '#FFBB28' ,porcentaje:0},
  { id:3,label: '+90 dias', value: 120000, color: '#FF8042' ,porcentaje:0},
];

const settings = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  hideLegend: true
  
};
function Chartcartera() {
    const [datacartera,setdatacartera]=React.useState(data)
    const [totalcartera,settotalcartera]=React.useState(0)
   useEffect(()=>{
    let total=0
    data.forEach((item:any)=>{
      total+=item.value
    })
    settotalcartera(total)
    const dataconporcentaje=data.map((item:any)=>{
      return {...item,porcentaje:Math.round((item.value/total)*100)}
    })
    setdatacartera(dataconporcentaje)
     
   },[])
    
return (
    <>
    <div style={{width:'100%',display:'flex',justifyContent:'center' ,alignItems:'center',flexDirection:'column'}}> 
    <PieChart
      series={[{innerRadius: 50, outerRadius: 100,data, arcLabel:(item:any)=>item.label, arcLabelMinAngle: 20,
      }]}
      {...settings}
      slotProps={{
        arcLabel: {
          component: (props: any) => {
            const { x, y, formattedArcLabel } = props;
            const words = formattedArcLabel.split(" "); // quiebre por espacio

            return (
              <text
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                style={{ fontSize: 10, pointerEvents: "none" }}
              >
                {words.map((word, i) => (
                  <tspan key={i} x={x} dy={i === 0 ? 0 : 12}>
                    {word}
                  </tspan>
                ))}
              </text>
            );
          },
        },
      }}

      
    />
    
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start',justifyContent:'start', marginTop: '30px' }}>
  {  datacartera
.map((s:any) => (
    <div key={s.id} style={{ display: 'flex', alignItems: 'center', marginBottom: 8 ,justifyContent:'center'}}>
      <span
        style={{
          width: 12,
          height: 12,
          backgroundColor: s.color, // asegúrate que la serie incluya color
          marginRight: 8,
          borderRadius:'10px'
        }}
      />
      <span>{s.label}-${s.value}{`(${s.porcentaje})`}</span>
    </div>
  ))}
</div>
</div>
        </>
  );
    
  }

export default Chartcartera;