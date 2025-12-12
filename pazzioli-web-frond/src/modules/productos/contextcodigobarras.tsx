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
codigobarraonchange:string,
    setcodigobarraonchange:Dispatch<SetStateAction<string>>
 codigovariante:number,
       setcodigovariante:Dispatch<SetStateAction<number>>


}


const  Contextcodigobarras=createContext<chart | null>(null);

function Providercodigobarras({children}: {children: React.ReactNode}) {
     const [codigomodal,setcodigomodal]=useState<boolean>(false)
       const [Codigobarra,setcodigobarra]=useState<string>("")
      const [actulizarbarra,setactulizarbarras]=useState<boolean>(false)
      const [guardar,setguardar]=useState<number>(0)
      const [  codigobarraonchange, setcodigobarraonchange]=useState<string>("")
      const [codigovariante,
       setcodigovariante]=useState<number>(0)
 
    return ( 
    < Contextcodigobarras.Provider value={{ 
       codigomodal,
       setcodigomodal,
       actulizarbarra,
       setactulizarbarras,
       guardar,
       setguardar,
       Codigobarra,
       setcodigobarra,
       codigovariante,
       setcodigovariante,
       codigobarraonchange,
    setcodigobarraonchange
}}> 
      {children}
    </ Contextcodigobarras.Provider>
     );
}


export const  codigosbarrascontex=()=>{
    return useContext(Contextcodigobarras);

}

export default Providercodigobarras;