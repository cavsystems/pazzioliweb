import { createContext, use, useContext, useEffect, useState, type Dispatch, type SetStateAction } from "react";

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
paginaactual:string,
setpaginaactual:Dispatch<SetStateAction<string>>
link:String;
setlink:Dispatch<SetStateAction<string>>
}

const Appcontext =createContext<chart | null>(null);
function Providerapp({children}: {children: React.ReactNode}) {
  const [paginaactual,setpaginaactual]=useState<string>("dashboard")
  const [link,setlink]=useState<string>("/dashboard")
    return ( 
     <Appcontext.Provider value={{ 
        paginaactual,
setpaginaactual,
link,
setlink,
}}> 
      {children}
    </Appcontext.Provider>
    );
}




export const  appcontex=()=>{
    return useContext(Appcontext);

}
export default Providerapp;