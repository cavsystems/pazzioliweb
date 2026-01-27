import { createContext, useContext, useState, type Dispatch, type SetStateAction } from "react";
interface navContextType {
  setventascompras: Dispatch<SetStateAction<boolean>>;

  ventascompras:boolean;
}
const compraventascontext =createContext<navContextType | null>(null);;
function VentascomprasProvider({children}: {children: React.ReactNode}) {
    
    const [ ventascompras,setventascompras]=useState<boolean>(false)
      window.addEventListener('resize', () => {

         setventascompras((window.innerWidth <= 990  && window.innerWidth>=914)  || (window.innerWidth <= 790 &&  window.innerWidth>=370));
       
       
    });
    return ( 
        
    <compraventascontext.Provider value={{ventascompras,setventascompras}}> 
      {children}
    </compraventascontext.Provider>
  );
    
}

export const  compraventascontex=()=>{
    return useContext(compraventascontext);

}



export default VentascomprasProvider;