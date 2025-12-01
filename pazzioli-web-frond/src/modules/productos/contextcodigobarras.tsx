import { createContext, use, useContext, useEffect, useState, type Dispatch, type SetStateAction } from "react";

interface chart{
codigomodal:boolean,
setcodigomodal:Dispatch<SetStateAction<boolean>>
Codigobarra:string,
setcodigobarra:Dispatch<SetStateAction<string>>

actulizarbarra:boolean,
setactulizarbarras:Dispatch<SetStateAction<boolean>>
guardar:number
setguardar:Dispatch<SetStateAction<number>>


}


const  Contextcodigobarras=createContext<chart | null>(null);

function Providercodigobarras({children}: {children: React.ReactNode}) {
     const [codigomodal,setcodigomodal]=useState<boolean>(false)
       const [Codigobarra,setcodigobarra]=useState<string>("")
      const [actulizarbarra,setactulizarbarras]=useState<boolean>(false)
      const [guardar,setguardar]=useState<number>(0)
 
    return ( 
    < Contextcodigobarras.Provider value={{ 
       codigomodal,
       setcodigomodal,
       actulizarbarra,
       setactulizarbarras,
       guardar,
       setguardar,
       Codigobarra,
       setcodigobarra
}}> 
      {children}
    </ Contextcodigobarras.Provider>
     );
}


export const  codigosbarrascontex=()=>{
    return useContext(Contextcodigobarras);

}

export default Providercodigobarras;