import { createContext, use, useContext, useEffect, useState, type Dispatch, type SetStateAction } from "react";
import api from "../../../apicofig";
import axios from "axios";
interface lineastotales{
    
bodega:string;

cantidadLinea:number;
descripcion:string;
totalLinea:number
}
interface departamento{
    codigo: number, codigopais: number, codigodepartamento: number, codigoDepartamento: number, departamento: string
}
interface municipio{
codigo: number, codigoDepartamento: number, codigoMunicipio: number, municipio: string
}
interface pais{
codigo:number, pais: string
}


interface listabodegas{
    

celular: String
codigo:number
codigodepartamento:departamento
codigomunicipio:municipio,
codigopais:pais
codigopostal?: string
codigosucursal?:string
correo?:string

direccion
:string
nombre
:string
telefono
:string
    

}
interface chart{
    totallinea:number;
      settotallinea: Dispatch<SetStateAction<number>>;
      totalnumeroprolinea:number;
      settotalnumeroprolinea:Dispatch<SetStateAction<number>>
      totalesporlinea:lineastotales[],
      bodegas:listabodegas[]
      setlistabodegas:Dispatch<SetStateAction<listabodegas[]>>
      settotalesporlinea:Dispatch<SetStateAction<lineastotales[]>>,
lineasupda:boolean

}
const Chartcontext =createContext<chart | null>(null);
function Providerchart({children}: {children: React.ReactNode}) {
const [totallinea,settotallinea]=useState(0)
const [totalnumeroprolinea,settotalnumeroprolinea]=useState(0)
const [totalesporlinea,settotalesporlinea]=useState<lineastotales[]>([])
const [lineasupda,setlineasupda]=useState<boolean>(false)
const [bodegas,setlistabodegas]=useState<listabodegas[]>([])
const traertotalxinventario=async ()=>{
 const totalesporlineas= await  api.get("/productos/totalesPorLineasGlobal",{
        headers: {
          'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
        }},)
 console.log("datos total por linea",totalesporlineas.data)
 setlineasupda(!lineasupda)
 settotalesporlinea(totalesporlineas.data.data)
}

 const traernombrebodega=async()=>{
   const bodegas= await axios.get("http://localhost:4000/api/bodegas/listar",{
        headers: {
          'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
        }},)
   console.log("bodegas",bodegas)
   setlistabodegas(bodegas.data.data)
 }
useEffect(()=>{
    traertotalxinventario()
    traernombrebodega()
},[])
    return ( 
     <Chartcontext.Provider value={{totallinea,settotallinea,totalnumeroprolinea,settotalnumeroprolinea,totalesporlinea,settotalesporlinea,lineasupda,bodegas}}> 
      {children}
    </Chartcontext.Provider>
    );
}




export const  chartcontex=()=>{
    return useContext(Chartcontext);

}
export default Providerchart;