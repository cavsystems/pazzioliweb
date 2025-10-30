import { ThemeContext } from '@emotion/react';
import { createContext, useContext } from 'react';
import { fetchAuth } from '../fetchauth/fetchauth';
import { Login } from '../authslice/uathslice';
import { useDispatch} from 'react-redux';
//context para manejar la autenticacion
// este contexto se utiliza para manejar el estado de autenticacion de la aplicacion
//de forma que podamos acceder a el desde cualquier componente de la aplicacion
//definicon de lo que contendra mi contexto
interface AuthContextType {
  login: (data: any) => Promise<void>;
}
const AuthContext =createContext<AuthContextType | null>(null);



function Authprovider({children}: {children: React.ReactNode}) {
const  dispatchauth=useDispatch()
    const login= async (data: any) => {
     
        try{
          //usaremeros useDispatch para ejecutar las acciones que me proporciona el slice
dispatchauth( Login({ token: '', user: null, proces: 'en proceso' }) )
        const datos=  await  fetchAuth.login(data)
           console.log('datos de autenticacion',datos)

        
dispatchauth( Login({ token:datos.sesion.token , user:datos.sesion, proces: 'exitoso' }) )


        }catch (error) {
            console.error("Error during login:", error);

        }
    }

    
  return (
    <AuthContext.Provider value={{login}}> 
      {children}
    </AuthContext.Provider>
  );
}
export const Authcontex=()=>{
    return useContext(AuthContext);

}

export default Authprovider ;