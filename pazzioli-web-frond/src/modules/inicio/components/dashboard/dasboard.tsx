import { useState } from "react";
import Dashboardadmin from "./dashboardadministrador/dashboardadmin";
import Dashboardcajero from "./dashboardcajero/dashboardcajero";

function Dashboard() {
    const [rol,setrool]=useState("administrador")
    return (  
        <>
        
       { rol==="administrador" && <Dashboardadmin/>}
       { rol==="cajero" && <Dashboardcajero/>}

        </>
    );
}

export default Dashboard;