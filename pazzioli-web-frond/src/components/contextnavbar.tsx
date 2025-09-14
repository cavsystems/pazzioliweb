import { createContext, useContext, useState, type Dispatch, type SetStateAction } from "react";
interface navContextType {
  setnav: Dispatch<SetStateAction<boolean>>;

  nav:boolean;
}
const Navcontext =createContext<navContextType | null>(null);;
function navbarProvider({children}: {children: React.ReactNode}) {
    const [nav,setnav]=useState<boolean>(false)
    return ( 
        
    <Navcontext.Provider value={{nav,setnav}}> 
      {children}
    </Navcontext.Provider>
  );
    
}

export const navcontex=()=>{
    return useContext(Navcontext);

}



export default navbarProvider;