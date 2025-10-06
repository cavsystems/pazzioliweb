import { createContext, use, useContext, useEffect, useState, type Dispatch, type SetStateAction } from "react";
import api from "../../apicofig";

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
interface roles{
    codigo:number,
    nombre:string,
}
interface user{
rolactual:string,
tituloactual:string,
setrolactual:Dispatch<SetStateAction<string>>
setTituloactual:Dispatch<SetStateAction<string>>
modalrol:boolean,
setmodalrol:Dispatch<SetStateAction<boolean>>
rolesusua: roles[],
setRolesusua:Dispatch<SetStateAction< roles[]>>
 traerroles:()=>Promise<void>
}

const Usuariocontext =createContext< user | null>(null);
function Providerusuario({children}: {children: React.ReactNode}) {
  const [rolactual,setrolactual]=useState<string>("")
  const [tituloactual,setTituloactual]=useState<string>("")
  const [modalrol,setmodalrol]=useState<boolean>(false)
  const [rolesusua,setRolesusua]=useState< roles[]>([])
   const traerroles=async()=>{
              const  datarol=await api.get('usuario/roles',{
            headers: {
              'X-TenantID':"cavsystems", // suponiendo que data.db contiene el nombre de la base de datos
            }})
               setRolesusua(datarol.data.roles)
            }
    
    return ( 
     <Usuariocontext.Provider value={{ 
       rolactual,
setrolactual,
tituloactual,
setTituloactual,
modalrol,setmodalrol,
rolesusua,setRolesusua, traerroles
}}> 
      {children}
    </Usuariocontext.Provider>
    );
}




export const  usuariocontex=()=>{
    return useContext(Usuariocontext);

}
export default Providerusuario;