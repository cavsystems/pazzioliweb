import { useEffect, useState } from "react";
import { chartcontex } from "../../../contextchart";
import { CPagination, CPaginationItem } from "@coreui/react";

function Chartinventariolineacajero() {

  const {settotallinea}=chartcontex()
   /* const total = 100; // valor máximo (ej: ventas meta)
  const actual = 65; // valor actual (ej: ventas logradas)

  const [progress, setProgress] = useState(0);
  const [lineastotales,setLineastotales]=useState([{
   nombre:"electrodomesticos",
   total:2000000000
  },{
    ropa:"electrodomesticos",
   total:3000000000
  }
])
  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += 1;
      if (start >= (actual / total) * 100) {
        clearInterval(interval);
      }
      setProgress(start);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card" style={{ padding: "16px", border: "1px solid #ddd", borderRadius: "12px", width: "300px" }}>
      <h3>Comparación</h3>
      <p>Total: {total} | Actual: {actual}</p>
      <div style={{ background: "#eee", borderRadius: "8px", overflow: "hidden", height: "100px" }}>
        <div
          style={{
            width: `${progress}%`,
            background: "#4caf50",
            height: "100%",
            transition: "width 0.2s ease",
          }}
        ></div>
      </div>
      <p>{progress.toFixed(0)}%</p>
    </div>
  );*/
  const [totaltodo,settotaltodo]=useState(0)
  const [lineastotales,setLineastotales]=useState([{
   nombre:"electrodomesticos",
   total:2000000000,
   porcentaje:0
  },
  {
    nombre:"electrodomesticos",
 total:1000000000,
   porcentaje:0
  },

    {
    nombre:"electrodomesticos",
 total:2200000000,
   porcentaje:0
  },

    {
    nombre:"electrodomesticos",
 total:2200000000,
   porcentaje:0
  },


    
   

    
])

useEffect(()=>{
settotaltodo(lineastotales.reduce((sum:any,linea:any)=>sum+linea.total,0))
const total=lineastotales.reduce((sum:any,linea:any)=>sum+linea.total,0)
settotallinea(total)
setLineastotales(lineastotales.map((linea:any)=> {
   return {
          ...linea,
          porcentaje: (linea.total / total) * 100, // ✅ CORREGIDO
        };
   
}))
},[])


  return (
    <div  style={{ padding: "16px 16px 0 16px", borderRadius: "12px", width: "100%",height:'368px',position:"relative" }}>
      {
        lineastotales.map((lineas:any)=>{
            return (
                <>
                 <div className="d-flex justify-content-between" style={{marginBottom:'5px'}}>
                      <span>{lineas.nombre}</span>  <span>${lineas.total.toLocaleString('de-DE')}</span>
                 </div>
             
                  <div style={{ background: "#eee", borderRadius: "8px", overflow: "hidden", height: "4px" ,  marginBottom:'12px'}}>
        <div
          style={{
            width: `${lineas.porcentaje}%`,
            background: "#F09700 0% 0% no-repeat padding-box",
            height: "100%",
            transition: "width 0.2s ease",
          
          }}
        ></div>
      </div>
         
                </>

                
            )
        })
      }
     
      <CPagination aria-label="Page navigation example" style={{    position: 'absolute',
    width: '100%',
    bottom: '0'}}>
      <CPaginationItem aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </CPaginationItem>
      <CPaginationItem className="act">1</CPaginationItem>
      <CPaginationItem>2</CPaginationItem>
      <CPaginationItem>3</CPaginationItem>
      <CPaginationItem aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </CPaginationItem>
    </CPagination>
      
    </div>
  );
}

export default Chartinventariolineacajero;