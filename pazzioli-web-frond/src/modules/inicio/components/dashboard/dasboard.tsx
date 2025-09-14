import { useState } from "react";
import Dashboardadmin from "./dashboardadministrador/dashboardadmin";
import Dashboardcajero from "./dashboardcajero/dashboardcajero";

function Dashboard() {
    const [rol,setrool]=useState("cajero")
    return (  
        <>
        
       { rol==="administrador" && <Dashboardadmin/>}
       { rol==="cajero" && <Dashboardcajero/>}

        </>
    );
}

export default Dashboard;