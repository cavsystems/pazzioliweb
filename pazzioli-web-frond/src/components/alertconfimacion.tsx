import { useEffect, useState, type JSX } from "react";
import Iconadvertencia from "../icons/iconadvertencia";
import "./styloscon.scss"
import Iconsucces from "../icons/iconsucces";
import Iconerror from "../icons/iconerror";
function Modalconfirmar({ modalconfir, setmodalconfirmar,confirmar,setconfirmar,tipoicon="alerta",boton1,boton2,boton3,texto,textoboton,funcion}:any) {

const [iconhtml,setiocnhtml]=useState<JSX.Element | null>()
useEffect(()=>{
    
      switch (tipoicon) {
        case "alerta":
            setiocnhtml(<Iconadvertencia  width={80} height={80} color={"#555"}/>)
            break;
   
        case "success":
            setiocnhtml(<Iconsucces  width={80} height={80} color={" #97BD13"}/>)
         break;


         case "Error":
           setiocnhtml(<Iconerror width={80} height={80}/>)
        default:
            break;
    }

},[])
  
    return ( <>
    <div className="d-flex justify-content-center position-fixed clascontaineralert align-items-center" >
    <div className="card containeralert" >
      <div className="card-body d-flex flex-column justify-content-center  align-items-center">
        {iconhtml}
    

      <p style={{display:"inline-block"}} className="textoconfi">{texto}</p>

      <div className="d-flex justify-content-center  containerbotones">
            { boton2 && <button className="botonagregarconeliminar" onClick={()=>{
       
            setmodalconfirmar(false)
                 setconfirmar(true)
         }}>Eliminar</button>}
       { boton1 && <button className="botonagregarcon"  onClick={()=>{
        setconfirmar(false)
        setmodalconfirmar(false)
       }}>Cancelar</button>}



         { boton3 && <button className={`${tipoicon==="Error"? "botonagregarcon":"botoncontinuarguardar"}`}  onClick={funcion}>{textoboton}</button>}
     
      </div>
      </div>

    </div>
    </div>
    </> );
}

export default Modalconfirmar;