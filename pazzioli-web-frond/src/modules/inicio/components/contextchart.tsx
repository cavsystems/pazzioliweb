import { createContext, use, useContext, useState, type Dispatch, type SetStateAction } from "react";
interface chart{
    totallinea:number;
      settotallinea: Dispatch<SetStateAction<number>>;
      totalnumeroprolinea:number;
      settotalnumeroprolinea:Dispatch<SetStateAction<number>>
}
const Chartcontext =createContext<chart | null>(null);
function Providerchart({children}: {children: React.ReactNode}) {
const [totallinea,settotallinea]=useState(0)
const [totalnumeroprolinea,settotalnumeroprolinea]=useState(0)
    return ( 
     <Chartcontext.Provider value={{totallinea,settotallinea,totalnumeroprolinea,settotalnumeroprolinea}}> 
      {children}
    </Chartcontext.Provider>
    );
}


export const  chartcontex=()=>{
    return useContext(Chartcontext);

}
export default Providerchart;