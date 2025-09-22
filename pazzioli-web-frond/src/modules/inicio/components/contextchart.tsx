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
      registropaginador:number[]
      totalesporlinea:lineastotales[],
      bodegas:listabodegas[]
      setlistabodegas:Dispatch<SetStateAction<listabodegas[]>>
      settotalesporlinea:Dispatch<SetStateAction<lineastotales[]>>,
      setcodigobodega:Dispatch<SetStateAction<string>>
      codigobodega:string
lineasupda:boolean
 traertotalxinventariopage:(page:number)=> Promise<void>
 currentPage:number
 currentPageindex:number

setCurrentPage:Dispatch<SetStateAction<number>>,
 setCurrentPageindex:Dispatch<SetStateAction<number>>,
contador:number,
setcontador:Dispatch<SetStateAction<number>>,
}
const defaultContext: chart = {
  totallinea: 0,
  settotallinea: () => {},
  totalnumeroprolinea: 0,
  settotalnumeroprolinea: () => {},
  registropaginador: [],
  totalesporlinea: [],
  bodegas: [],
  setlistabodegas: () => {},
  settotalesporlinea: () => {},
  setcodigobodega: () => {},
  codigobodega: "0",
  lineasupda: false,
  traertotalxinventariopage: async () => {},
  currentPage: 1,
  currentPageindex: 0,
  setCurrentPage: () => {},
  setCurrentPageindex: () => {},
  contador: 1,
  setcontador: () => {},
};
const Chartcontext =createContext<chart | null>(defaultContext);
function Providerchart({children}: {children: React.ReactNode}) {
    const [codigobodega,setcodigobodega]=useState<string>('0');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [currentPageindex, setCurrentPageindex] = useState<number>(0);
    const [contador,setcontador]=useState<number>(1)
const [totallinea,settotallinea]=useState<number>(0)
const [totalnumeroprolinea,settotalnumeroprolinea]=useState<number>(0)
  const itemsPerPage = 22;
  const [itempage,setitempage]=useState<number>(0)
  const [registropaginador,setregistropaginador]=useState<number[]>([])
  useEffect(()=>{
   let registro:number[]=[];
    for(let i=1; i<=itempage ;i++){

        registro.push(i)

    }
    setregistropaginador(registro)
  },[itempage])
  
const [totalesporlinea,settotalesporlinea]=useState<lineastotales[]>([])
const [lineasupda,setlineasupda]=useState<boolean>(false)
const [bodegas,setlistabodegas]=useState<listabodegas[]>([])


const traertotalxinventariopage=async (page:number=1,codbodega:String='')=>{
  if(codbodega!==""){
    console.log("codigo bodega",codbodega)
    if(codbodega!=="0"){
        const totalesporlineas= await  api.get(`/productos/totalesPorLineasXBodega/${Number(codigobodega)+1}?page=${page}&sortField=totalLinea&sortDirection=desc`,{
        headers: {
          'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
        }},)
 console.log("datos total por linea",totalesporlineas.data)
 setlineasupda(!lineasupda)
 settotalesporlinea(totalesporlineas.data.data.content)
   settotallinea(totalesporlineas.data.data.totalGloballineas);
 setitempage(totalesporlineas.data.data.
totalPages)
setCurrentPage(1)
setCurrentPageindex(0)
    }else{
           const totalesporlineas= await  api.get(`/productos/totalesPorLineasXBodega/page=${page}&sortField=totalLinea&sortDirection=desc`,{
        headers: {
          'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
        }},)
 console.log("datos total por linea",totalesporlineas.data)
 setlineasupda(!lineasupda)
 settotalesporlinea(totalesporlineas.data.data.content)
 setitempage(totalesporlineas.data.data.
totalPages)
  settotallinea(totalesporlineas.data.data.totalGloballineas);
setCurrentPage(1)
setCurrentPageindex(0)

    }
  
return
  }
  const totalesporlineas= await  api.get(`/productos/totalesPorLineasGlobal?page=${page}&sortField=totalLinea&sortDirection=desc`,{
        headers: {
          'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
        }},)
 console.log("datos total por linea",totalesporlineas.data)
 setlineasupda(!lineasupda)
 settotalesporlinea(totalesporlineas.data.data.content)
   settotallinea(totalesporlineas.data.data.totalGloballineas);
 setitempage(totalesporlineas.data.data.
totalPages)

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
    traertotalxinventariopage()
    traernombrebodega()
},[])
    return ( 
     <Chartcontext.Provider value={{ totallinea,
      settotallinea,
      totalnumeroprolinea,
      settotalnumeroprolinea,
      registropaginador,
      totalesporlinea,
      bodegas,
      setlistabodegas,
      settotalesporlinea,
      setcodigobodega,
      codigobodega,
lineasupda,
 traertotalxinventariopage,
 currentPage,
 currentPageindex,
 setCurrentPage,
 setCurrentPageindex,
contador,
setcontador,}}> 
      {children}
    </Chartcontext.Provider>
    );
}




export const  chartcontex=()=>{
    return useContext(Chartcontext);

}
export default Providerchart;