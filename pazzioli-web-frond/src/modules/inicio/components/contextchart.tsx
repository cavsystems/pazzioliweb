import { createContext, use, useContext, useEffect, useState, type Dispatch, type SetStateAction } from "react";
interface chart{
    totallinea:number;
      settotallinea: Dispatch<SetStateAction<number>>;
      totalnumeroprolinea:number;
      settotalnumeroprolinea:Dispatch<SetStateAction<number>>
      registropaginador:number[]
}
const Chartcontext =createContext<chart | null>(null);
function Providerchart({children}: {children: React.ReactNode}) {
const [totallinea,settotallinea]=useState(0)
const [totalnumeroprolinea,settotalnumeroprolinea]=useState(0)
  const itemsPerPage = 22;
  const [registropaginador,setregistropaginador]=useState<number[]>([])
  useEffect(()=>{
   let registro:number[]=[];
    for(let i=1; i<=itemsPerPage ;i++){

        registro.push(i)

    }
    setregistropaginador(registro)
  },[totalnumeroprolinea])
    return ( 
     <Chartcontext.Provider value={{totallinea,settotallinea,totalnumeroprolinea,settotalnumeroprolinea,registropaginador}}> 
      {children}
    </Chartcontext.Provider>
    );
}


export const  chartcontex=()=>{
    return useContext(Chartcontext);

}
export default Providerchart;