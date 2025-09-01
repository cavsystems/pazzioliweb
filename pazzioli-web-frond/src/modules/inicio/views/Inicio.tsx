import { Dashboardadmin } from "../../administrador/views/dashboard";
import Dashboard from "../components/dashboard/dasboard";
import Sectionacceso from "../components/Sectionacceso";
import './iniciostyle.scss'
export function Inicio() {
    return (  
        <div style={{height:'100vh'}} className='containerhome'>
        
       <div className="encabezadohome">
       <a href="#" style={{marginLeft:"20px"}} className="navigationhome">home</a>
       <span>/</span>
         <a href="#" className="navigationhome">Dashboard</a>
       </div>
       <div className="containerhomedashboard">
           <Sectionacceso/>
           <Dashboard/>
       </div>
        </div>
    );
}

