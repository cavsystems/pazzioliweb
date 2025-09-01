import { useEffect, useState, type JSX } from "react";

function Sectionacceso() {
    const [imgenes, setImgenes] = useState([{
        imgen:'/imgs/compras.svg',
        label:'Nueva Compra'
    },
    {
        imgen: '/imgs/pedidos.svg',
         label:'Nuevo pedido'

    },
  
    {
        imgen:'/imgs/facturas.svg',
         label:'Nueva Factura'
    },{
        imgen:'/imgs/pagos.svg',
         label:'Nuevo pago'
    },
    
   ])

    const [bontesacceso, setBontesacceso] = useState<JSX.Element[]>([]);
useEffect(()=>{
    setBontesacceso(componbotones())
},[])
     
    const componbotones = (): JSX.Element[] => {
        return imgenes.map((item, index) => {
            return (
                <button key={index} className="botonesacceso">
                    <img src={item.imgen} className="imgbotonesacceso" />
                    <span className="textobotonesacceso">{item.label}</span>
                </button>
            );
        });
    };
    return ( 
        <>
        <div style={{ width:'100%'}}  >
            <div className="row">
            <div className="col-12 col-md-6 col-lg-6 col-sm-12 col-xl-6  text-sm-center ">
            <div className={"containertituloacceso"}>
            <span className="tituloseccionacceso fondletraspanlarge">Resumen General</span>
            </div>
            </div>
              <div className="col-12 col-md-6 col-lg-6 col-sm-12 col-xl-6" >
            <div  style={{width:'100%',display:'flex'}} className="continarbotonesacceso" >
           {bontesacceso.map((boton,index)=> {
            return <> {boton}</>
           
            })}
            </div>
</div>
            </div>
        </div>
        </>
     );
}

export default Sectionacceso;