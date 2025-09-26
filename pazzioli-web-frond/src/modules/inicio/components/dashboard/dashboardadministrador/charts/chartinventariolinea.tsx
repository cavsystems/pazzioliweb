import { useEffect, useState } from "react";
import { chartcontex } from "../../../contextchart";
import { CPagination, CPaginationItem } from "@coreui/react";

function Chartinventariolinea() {

  const [negativo,setnegativo]=useState(false)
  const [numeroregistros,setnumeroregistros]=useState<number[]>([])
  const [pagination,setpagination]=useState(false)
  const {settotallinea,registropaginador,totalesporlinea,settotalesporlinea,lineasupda,traertotalxinventariopage,currentPage,currentPageindex,contador,setCurrentPage,setCurrentPageindex,setcontador,codigobodega,traertotalxinventariopagenext,  totallinea}=chartcontex()
 useEffect(()=>{
  console.log(currentPage,"cuerrenpage")
                      if (currentPageindex < 0) {
    if (currentPageindex !== 0) setCurrentPageindex(0);
    if (currentPage !== 1) setCurrentPage(1);
    return;
  }

 
  if (currentPage > registropaginador.length) {
    
    const newIndex = Math.max(0, registropaginador.length - 3);
    const newPage = registropaginador.length > 0 ? registropaginador.length : 1;

    if (currentPageindex !== newIndex) setCurrentPageindex(newIndex);
    if (currentPage !== newPage) setCurrentPage(newPage);
    return;
  }

  // actualizar registros visibles
  setnumeroregistros(
    registropaginador.slice(currentPageindex, currentPageindex + 3)
  );
                       
                  

            

 },[currentPage,currentPageindex])
  useEffect(()=>{
   

    setnumeroregistros((prev)=> prev=registropaginador.slice(currentPageindex,currentPageindex+3))

  },[registropaginador])

   
  const determinarcontador=()=>{
   
    if(contador===1){
      console.log("es igual a tres",contador)
     setcontador(1)
      
              setCurrentPageindex(currentPage-1)
           
             
           
    }else{
       
       setcontador(prev=> prev+1)
    }


        
     
    
  }

    const determinarcontadornegativo=()=>{
   
    if(contador===2){
      setcontador(1)
      console.log(currentPageindex)
              setCurrentPageindex(currentPageindex-1)
              setnumeroregistros((prev)=> prev=registropaginador.slice(currentPageindex,currentPageindex+3))


    }
   
   
    setcontador(prev=> prev+1)
  }
  

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

settotaltodo(totalesporlinea.reduce((sum:any,linea:any)=>sum+linea.totalLinea,0))
const total=totalesporlinea.reduce((sum:any,linea:any)=>sum+linea.totalLinea,0)


  try {
    if (Array.isArray(totalesporlinea)) {
      const total = totalesporlinea.reduce((sum:any,linea:any)=>sum+ (linea.totalLinea||0),0);
      console.log("totales",totallinea);
    
      settotalesporlinea(totalesporlinea.map((linea:any)=> ({
        ...linea,
        porcentaje: total > 0 ? (linea.totalLinea /   totallinea) * 100 : 0,
      })));
    }
  } catch (e) {
    console.error("❌ Error en useEffect de totalesporlinea", e);
  }
},[lineasupda])


  return (
    <div  style={{ padding: "16px 16px 0 16px", borderRadius: "12px", width: "100%",height:'368px',position:"relative" }}>
      {
       totalesporlinea && Array.isArray(totalesporlinea) && totalesporlinea.map((lineas:any)=>{
            return (
                <>
                 <div className="d-flex justify-content-between" style={{marginBottom:'5px'}}>
                      <span>{lineas.descripcion}</span>  <span>${`${lineas.totalLinea.toLocaleString('de-DE')}(${lineas.porcentaje?.toFixed(2)}%)`}</span>
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
      <CPaginationItem aria-label="Previous" onClick={(e)=>{
      
        setCurrentPageindex((prev)=> prev-1)
        setCurrentPage((prev)=> prev-1)
       
                   
traertotalxinventariopagenext(currentPage-1,codigobodega)
       
        
       
        
      }}>
        <span aria-hidden="true" >&laquo;</span>
      </CPaginationItem>
      {
        numeroregistros.map((item,key)=>{
          return   <CPaginationItem  className={currentPage===item ?`activepagi`:""}>{item}</CPaginationItem>
        }
        )
      }
     
      <CPaginationItem aria-label="Next" onClick={(e)=>{
        setCurrentPageindex(prev=> prev+1)
        setCurrentPage((prev)=>prev+1)
         determinarcontador()
           traertotalxinventariopagenext(currentPage+1,codigobodega)
          

  
        
      }}>
        <span aria-hidden="true">&raquo;</span>
      </CPaginationItem>
    </CPagination>
      
    </div>
  );
}

export default Chartinventariolinea;