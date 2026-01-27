import { useEffect, useState, type JSX } from "react";
import { navcontex } from "./contextnavbar";
import { useNavigate } from "react-router";

function Sectionaccesogeneral() {
    const [rol,setrool]=useState("cajero")
    const {nav}=navcontex();
    const navigate=useNavigate();
    const [imgenes, setImgenes] = useState([{
        imgen:'/imgs/compras.svg',
        label:'Nueva compra',
        link:'/compras'
        
    },
    {
        imgen: '/imgs/pedidos.svg',
         label:'Nuevo pedido',
     link:'/tomapedidos'

    },
  
    {
        imgen:'/imgs/facturas.svg',
         label:'Nueva factura',
         link:'/facturacion'
    },{
        imgen:'/imgs/pagos.svg',
         label:'Nuevo recibo',
         link:'/recibocaja'
    },
    
   ])

    const [bontesacceso, setBontesacceso] = useState<JSX.Element[]>([]);
useEffect(()=>{
    setBontesacceso(componbotones())
},[])
     
    const componbotones = (): JSX.Element[] => {
        return imgenes.map((item, index) => {
            
            return (
                <button key={index} className="botonesacceso"  onClick={(e)=>{
                  navigate(item.link)
                }}>
                    <div style={{display: 'flex',

    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:'5px',
    gap:'5px'}}>
                    <img src={item.imgen} className="imgbotonesacceso" />
                    <span className="textobotonesacceso">{item.label}</span>
                    </div>
                </button>
            );
        });
    };
    return ( 
        <>
       
      
            <div className="col-12 col-md-6 d-flex">
          
            <span className="tituloseccionacceso fondletraspanlarge paddingtituloencabezado">Resumen General</span>
       
            </div>
              
            <div  className="continarbotonesaccesoge col-12 col-md-6   justify-content-md-end" >
           {bontesacceso.map((boton,index)=> {
            return <> {boton}</>
           
            })}
            </div>

            
       
        </>
     );
}

export default Sectionaccesogeneral;