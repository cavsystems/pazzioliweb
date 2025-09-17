import { useState } from "react";
import Dashboardadmin from "./dashboardadministrador/dashboardadmin";
import Dashboardcajero from "./dashboardcajero/dashboardcajero";
import Dashboardbodeguero from "./dashboardbodeguero/dashboardbodeguero";

function Dashboard() {
    const [rol,setrool]=useState("administrador")
    return (  
        <>
        
       { rol==="administrador" && <Dashboardadmin/>}
       { rol==="cajero" && <Dashboardcajero/>}
       { rol==="bodeguero" && <Dashboardbodeguero/>}

        </>
    );
}

export default Dashboard;