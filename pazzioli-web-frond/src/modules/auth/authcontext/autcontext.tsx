import { ThemeContext } from '@emotion/react';
import { createContext, useContext } from 'react';
import { fetchAuth } from '../fetchauth/fetchauth';
//context para manejar la autenticacion
// este contexto se utiliza para manejar el estado de autenticacion de la aplicacion
//de forma que podamos acceder a el desde cualquier componente de la aplicacion
const AuthContext = createContext({});


const Authcontex=()=>{
    return useContext(AuthContext);
}
function Authprovider({children}: {children: React.ReactNode}) {

    const login= async (data: any) => {
     
        try{
        const datos=  await  fetchAuth.login(data)
        }catch (error) {
            console.error("Error during login:", error);

        }
    }

    
  return (
    <AuthContext.Provider value={login}> 
      {children}
    </AuthContext.Provider>
  );
}

export default Authprovider ;