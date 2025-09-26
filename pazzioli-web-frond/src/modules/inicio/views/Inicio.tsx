import { navcontex } from "../../../components/contextnavbar";
import { Dashboardadmin } from "../../administrador/views/dashboard";
import Dashboard from "../components/dashboard/dasboard";
import Footerdash from "../components/footerdash";
import Sectionacceso from "../components/Sectionacceso";
import './iniciostyle.scss'
export function Inicio() {
        const {nav}=navcontex();
    
    return (  
        <div style={{height:'100vh',paddingLeft: nav ? "170px":"0"}} className='containerhome' >
        
    
       <div className="containerhomedashboard">
           <Sectionacceso/>
           <Dashboard/>
           <Footerdash/>
       </div>
        </div>
    );
}

