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
interface personas{
  identificacion:string,
 apellido:string
codigo:number
codigocliente:number
correo:string
direccion:string
nombre: string,
imagenperfil:ArrayBuffer | null,
tipoimagen:string
    }
interface roles{
    codigo:number,
    nombre:string,
}

interface permilista{
  nombre:string,
  codigo:number
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
 setPermisoslista:Dispatch<SetStateAction<String[]>>
 permisoslista: String[]
  setCheckedItems:Dispatch<SetStateAction<number[]>>
  checkedItems:number[],errorbodega:boolean,setErrorbodega:Dispatch<SetStateAction<boolean>>
  usuarioperselect:personas
  setUsuarioselect:Dispatch<SetStateAction<personas>>
}

const Usuariocontext =createContext< user | null>(null);
function Providerusuario({children}: {children: React.ReactNode}) {
  const [permisoslista,setPermisoslista]=useState<String[]>([])
  const [usuarioperselect ,setUsuarioselect]=useState<personas>({
   identificacion:"",
 
 apellido:"",
codigo:0,
codigocliente:0,
correo:"",
direccion:"",
nombre:"",
imagenperfil:null,
tipoimagen:""
    
  })
  const [rolactual,setrolactual]=useState<string>('0')
  const [tituloactual,setTituloactual]=useState<string>("")
  const [modalrol,setmodalrol]=useState<boolean>(false)
  const [rolesusua,setRolesusua]=useState< roles[]>([])
 const [checkedItems, setCheckedItems] = useState<number[]>([]);
 const [errorbodega,setErrorbodega]=useState<boolean>(false)
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
rolesusua,setRolesusua, traerroles ,
permisoslista,setPermisoslista,checkedItems, setCheckedItems,errorbodega,setErrorbodega ,usuarioperselect ,setUsuarioselect
}}> 
      {children}
    </Usuariocontext.Provider>
    );
}




export const  usuariocontex=()=>{
    return useContext(Usuariocontext);

}
export default Providerusuario;