import { useEffect, useState } from "react";
import Dashboardadmin from "./dashboardadministrador/dashboardadmin";
import Dashboardcajero from "./dashboardcajero/dashboardcajero";
import Dashboardbodeguero from "./dashboardbodeguero/dashboardbodeguero";
import { useAppSelector } from "../../../../store/store";

function Dashboard() {

      const mensajelogin= useAppSelector(state => state.authglobal.user);

      useEffect(()=>{
        if(mensajelogin && mensajelogin.nivel && mensajelogin.nivel!==null){
         setrool(mensajelogin.nivel)
        }
      

      },[mensajelogin])
    const [rol,setrool]=useState("administrador")
    return (  
        <>
        
       { rol==="administrador" && <Dashboardadmin/>}
       { rol==="usuariocaja" && <Dashboardcajero/>}
       { rol==="bodeguero" && <Dashboardbodeguero/>}

        </>
    );
}

export default Dashboard;