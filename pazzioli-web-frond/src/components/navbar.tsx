import { useState } from "react";
import { navcontex } from "./contextnavbar";

function Navbar() {
    const {setnav}=navcontex();
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 914);
    window.addEventListener('resize', () => {

        setIsLargeScreen(window.innerWidth >= 914);
        if(window.innerWidth >= 914){
            setnav(false)
        }
       
    });




   const abrirtogle=(togle:string)=>{
    const elemento=document.getElementById(togle)
     elemento?.classList.toggle('noactive')

   }

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [issideresponsiside, setIssideresponsiside] = useState(false);
    return ( <>
    <nav className="navpazzioli" style={{    position: 'fixed',
    width: '100%',zIndex:'12 !important'}}>
        <ul>

         {isLargeScreen ?  isSidebarOpen ?  <li className="navizquierodsidebarlarge"  onMouseEnter={() => {
                setIsSidebarOpen(true)
                setnav(true)
            }} onMouseLeave={() =>{ 
                setIsSidebarOpen(false)
                setnav(false)

            }
            }>
                <ul className="listamanenusidebar">
                    <li className="lilogomenu">
                        <img src="/imgs/imagenlogpa.svg" className="logonavbar"/>
                    </li>
                     <li className="lineaseparadora">

                        
                    </li>

                       <li className="navsiguiente">
                        <div> <div className="iconospedidossidebar"> <img src="/imgs/imagenniconcasa.svg" className="imgnavicon" />  <span>Inicio</span></div></div>
                          <div><div className="iconospedidossidebar"> <span>Menu</span></div></div>
                         <div ><div className="containertogle"><div className="iconospedidossidebar"><img src="/imgs/imgdatafono.svg" className="imgnavicon"/> <span>Caja</span> </div> <div> <img src="/imgs/togle.svg" className="botontogledash" onClick={()=>{
                            abrirtogle('caja')
                         }}/></div></div> <div id="caja" className="noactive active" >
                            <ul className="listasidebar" style={{height:"fit-content"}}>
                                <li className="listitem"> <div className="contenlist"></div><span>Facturacion</span></li>
                                <li className="listitem"> <div className="contenlist"></div><span>Devoluciones</span></li>
                                <li className="listitem"> <div className="contenlist"></div> <span>Recibos de caja</span></li>
                                <li className="listitem"> <div className="contenlist"></div><span>Comprobantes de egresos</span></li>
                                <li className="listitem"> <div className="contenlist"></div><span>Consultar facturas</span></li>
                                <li className="listitem"> <div className="contenlist"></div> <span>Consultar devoluciones</span></li>
                                <li className="listitem"> <div className="contenlist"></div><span>Resoluciones</span></li>
                                <li className="listitem"> <div className="contenlist"></div> <span>vendedores</span></li>
                            </ul>
                            </div></div>
                         <div><div className="iconospedidossidebar"><img src="/imgs/pedidos.svg" className="imgnavicon"/> <span>Pedidos</span></div></div>

                        <div><div className="iconospedidossidebar"><img src="/imgs/usuarios.svg"  className="imgnavicon"/> <span>Usuarios</span></div></div>

                        <div><div className="iconospedidossidebar"><img src="/imgs/terceros.svg" /> <span>Terceros</span></div></div>

                          <div  > <div className="containertogle"><div className="iconospedidossidebar"><img src="/imgs/inventario.svg" /> <span>Inventario</span></div> <div> <img src="/imgs/togle.svg" className="botontogledash"  onClick={()=>{
                            abrirtogle('inventario')
                         }}/></div></div> <div id="inventario" className="noactive">
                              <ul className="listasidebar" style={{height:"fit-content"}}>
                                <li className="listitem"> <div className="contenlist"></div><span>Consultar producto</span></li>
                                <li className="listitem"> <div className="contenlist"></div><span>Bodegas</span></li>
                                <li className="listitem"> <div className="contenlist"></div> <span>Entradas de inventario</span></li>
                                <li className="listitem"> <div className="contenlist"></div><span>Salida de inventario</span></li>
                                <li className="listitem"> <div className="contenlist"></div><span>Traslado de inventario</span></li>
                                <li className="listitem"> <div className="contenlist"></div> <span>Compras</span></li>
                                <li className="listitem"> <div className="contenlist"></div><span>Recalcular costos</span></li>
                                <li className="listitem"> <div className="contenlist"></div> <span>Inventario fisico</span></li>
                                <li className="listitem"> <div className="contenlist"></div> <span>Programar descuentos</span></li>
                                <li className="listitem"> <div className="contenlist"></div> <span>Imprimir codigos de barras</span></li>
                            </ul>
                            </div></div>
                       <div> <div className="containertogle"><div className="iconospedidossidebar"><img src="/imgs/despacho.svg"/> <span>Despachos</span></div> <div> <img src="/imgs/togle.svg" className="botontogledash" onClick={()=>{
                            abrirtogle('despachos')
                         }}/></div></div>
                        <div id="despachos" className="noactive">
                              <ul className="listasidebar" style={{height:"fit-content"}}>
                                <li className="listitem"> <div className="contenlist"></div><span>Consultar conductores</span></li>
                                <li className="listitem"> <div className="contenlist"></div><span>Consultar Despachos</span></li>
                              
                               
                            </ul>
                            </div></div>
                        <div> <div className="containertogle"><div className="iconospedidossidebar"><img src="/imgs/reportes.svg"/> <span>Reportes</span> </div> <div> <img src="/imgs/togle.svg" className="botontogledash" onClick={()=>{
                            abrirtogle('reportes')
                         }} /></div></div>  <div id="reportes" className="noactive">
                              <ul className="listasidebar" style={{height:"fit-content"}}>
                                <li className="listitem"> <div className="contenlist"></div><span>Cuentas por cobrar</span></li>
                                <li className="listitem"> <div className="contenlist"></div><span>Cuentas por pagar</span></li>
                                <li className="listitem"> <div className="contenlist"></div> <span>AUX cartera CXC</span></li>
                                <li className="listitem"> <div className="contenlist"></div><span>AUX cartera CXP</span></li>
                                <li className="listitem"> <div className="contenlist"></div><span>Monitor de caja</span></li>
                                <li className="listitem"> <div className="contenlist"></div> <span>Inventarios</span></li>
                               
                            </ul>
                            </div></div>
                       <div><div className="containertogle"><div className="iconospedidossidebar"><img  src="/imgs/ecommers.svg"/> <span>Ecommerce</span></div> <div> <img src="/imgs/togle.svg" className="botontogledash"/></div></div></div>
 
                                  <div className="containertogle"><div className="iconospedidossidebar"><img src="/imgs/nomina.svg"/> <span>Nomina</span> </div> <div> <img src="/imgs/togle.svg" className="botontogledash"/></div></div>
                        <div className="containertogle"><div className="iconospedidossidebar"><img  src="/imgs/contabilidad.svg"/> <span>Contabilidad</span></div> <div> <img src="/imgs/togle.svg" className="botontogledash"/></div></div>
              
                        
                      
                    
            </li>


            
                </ul>


                
            </li>:<li className="navizquierodsidebar" onMouseEnter={() => {
                setIsSidebarOpen(true)
                setnav(true)
            }} onMouseLeave={() =>{ 
                setIsSidebarOpen(false)
                setnav(false)

            }
            }>
                <ul className="listamanenusidebar">
                    <li className="lilogomenu">
                        <img src="/imgs/imagenlogpa.svg" className="logonavbar"/>
                    </li>
                     <li className="lineaseparadora">

                        
                    </li>

                       <li className="navsiguiente">
                        <div>  <img src="/imgs/imagenniconcasa.svg" className="imgnavicon" />  </div>
                      
                        <div><img src="/imgs/imgdatafono.svg" className="imgnavicon"/></div>
                         <div><div className="iconospedidossidebar"><img src="/imgs/pedidos.svg" className="imgnavicon"/> </div></div>
                        <div><img src="/imgs/usuarios.svg"  className="imgnavicon"/></div>

                        <div><img src="/imgs/terceros.svg" /></div>

                        <div><img src="/imgs/inventario.svg"/></div>
                        
                        <div><img src="/imgs/despacho.svg"/></div>
                        <div><img src="/imgs/reportes.svg"/></div>
                        <div><img src="/imgs/ecommers.svg"/></div>
                      
                       <div><img src="/imgs/nomina.svg"/></div>
                        <div><img  src="/imgs/contabilidad.svg"/></div>

                    
            </li>


            
                </ul>


                
            </li>: issideresponsiside && <li className="navsiguienteresponsive"  onMouseEnter={() => setIsSidebarOpen(true)} onMouseLeave={() => setIsSidebarOpen(false)}>
                <ul className="listamanenusidebar">
                    <li className="lilogomenu">
                        <img src="/imgs/imagenlogpa.svg" className="logonavbar"/>
                        <img src="/imgs/cerrarsidenav.svg" className="cerrarmenuicon" onClick={(e)=>{
                            setIssideresponsiside(false)
                        }}/>
                    </li>
                     <li className="lineaseparadora">

                        
                    </li>

                       <li className="navsiguiente">
                       <div> <div className="iconospedidossidebar"> <img src="/imgs/imagenniconcasa.svg" className="imgnavicon" />  <span>Inicio</span></div></div>
                          <div><div className="iconospedidossidebar"> <span>Menu</span></div></div>
                        <div><div className="containertogle"><div className="iconospedidossidebar"><img src="/imgs/imgdatafono.svg" className="imgnavicon"/> <span>Caja</span> </div> <div> <img src="/imgs/togle.svg" className="botontogledash" onClick={()=>{
                            abrirtogle('caja')
                         }} /></div></div>
                        <div id="caja" className="noactive active" >
                            <ul className="listasidebar" style={{height:"fit-content"}}>
                                <li className="listitem"><div> <div className="contenlist"></div><span>Facturacion</span></div></li>
                                <li className="listitem"><div> <div className="contenlist"></div><span>Devoluciones</span></div></li>
                                <li className="listitem"><div> <div className="contenlist"></div> <span>Recibos de caja</span></div></li>
                                <li className="listitem"> <div><div className="contenlist"></div><span>Comprobantes de egresos</span></div></li>
                                <li className="listitem"><div> <div className="contenlist"></div><span>Consultar facturas</span></div></li>
                                <li className="listitem"><div> <div className="contenlist"></div> <span>Consultar devoluciones</span></div></li>
                                <li className="listitem"><div> <div className="contenlist"></div><span>Resoluciones</span></div></li>
                                <li className="listitem"><div> <div className="contenlist"></div> <span>vendedores</span></div></li>
                            </ul>
                            </div>
                        </div>

                         <div><div className="iconospedidossidebar"><img src="/imgs/pedidos.svg" className="imgnavicon"/> <span>Pedidos</span></div></div>

                        <div><div className="iconospedidossidebar"><img src="/imgs/usuarios.svg"  className="imgnavicon"/> <span>Usuarios</span></div></div>

                        <div><div className="iconospedidossidebar"><img src="/imgs/terceros.svg" /> <span>Terceros</span></div></div>

                       <div><div className="containertogle"><div className="iconospedidossidebar"><img src="/imgs/inventario.svg"/> <span>Inventario</span></div> <div><img src="/imgs/togle.svg" className="botontogledash"  onClick={()=>{
                            abrirtogle('inventario')
                         }}/></div></div> <div id="inventario" className="noactive">
                              <ul className="listasidebar" style={{height:"fit-content"}}>
                                <li className="listitem"> <div><div className="contenlist"></div><span>Consultar producto</span></div></li>
                                <li className="listitem"> <div><div className="contenlist"></div><span>Bodegas</span></div></li>
                                <li className="listitem"> <div><div className="contenlist"></div> <span>Entradas de inventario</span></div></li>
                                <li className="listitem"> <div><div className="contenlist"></div><span>Salida de inventario</span></div></li>
                                <li className="listitem"> <div><div className="contenlist"></div><span>Traslado de inventario</span></div></li>
                                <li className="listitem"> <div><div className="contenlist"></div> <span>Compras</span></div></li>
                                <li className="listitem"> <div><div className="contenlist"></div><span>Recalcular costos</span></div></li>
                                <li className="listitem"> <div><div className="contenlist"></div> <span>Inventario fisico</span></div></li>
                                <li className="listitem"> <div><div className="contenlist"></div> <span>Programar descuentos</span></div></li>
                                <li className="listitem"> <div><div className="contenlist"></div> <span>Imprimir codigos de barras</span></div></li>
                            </ul>
                            </div></div>
                        <div><div className="containertogle"><div className="iconospedidossidebar"><img src="/imgs/despacho.svg"/> <span>Despachos</span></div> <div> <img src="/imgs/togle.svg" className="botontogledash" onClick={()=>{
                            abrirtogle('despachos')
                         }}/></div></div>
                        <div id="despachos" className="noactive">
                              <ul className="listasidebar" style={{height:"fit-content"}}>
                                <li className="listitem"> <div className="contenlist"></div><span>Consultar conductores</span></li>
                                <li className="listitem"> <div className="contenlist"></div><span>Consultar Despachos</span></li>
                              
                               
                            </ul>
                            </div></div>
                        <div> <div className="containertogle"><div className="iconospedidossidebar"><img src="/imgs/reportes.svg"/> <span>Reportes</span> </div> <div> <img src="/imgs/togle.svg" className="botontogledash" onClick={()=>{
                            abrirtogle('reportes')
                         }} /></div></div>  <div id="reportes" className="noactive">
                              <ul className="listasidebar" style={{height:"fit-content"}}>
                                <li className="listitem"><div> <div className="contenlist"></div><span>Cuentas por cobrar</span></div></li>
                                <li className="listitem"> <div><div className="contenlist"></div><span>Cuentas por pagar</span></div></li>
                                <li className="listitem"><div> <div className="contenlist"></div> <span>AUX cartera CXC</span></div></li>
                                <li className="listitem"><div> <div className="contenlist"></div><span>AUX cartera CXP</span></div></li>
                                <li className="listitem"><div> <div className="contenlist"></div><span>Monitor de caja</span></div></li>
                                <li className="listitem"><div> <div className="contenlist"></div> <span>Inventarios</span></div></li>
                               
                            </ul>
                            </div></div>
                        <div className="containertogle"><div className="iconospedidossidebar"><img  src="/imgs/ecommers.svg"/> <span>Ecommerce</span></div> <div> <img src="/imgs/togle.svg" className="botontogledash"/></div></div>
 
                                  <div className="containertogle"><div className="iconospedidossidebar"><img src="/imgs/nomina.svg"/> <span>Nomina</span> </div> <div> <img src="/imgs/togle.svg" className="botontogledash"/></div></div>
                        <div className="containertogle"><div className="iconospedidossidebar"><img  src="/imgs/contabilidad.svg"/> <span>Contabilidad</span></div> <div> <img src="/imgs/togle.svg" className="botontogledash"/></div></div>
              
            </li>


            
                </ul>


                
            </li>}


             


           {isLargeScreen  ? <li className={ isSidebarOpen ? 'navizquierdolarge':`navizquierdo`} ></li> :
             <li className="navizquierdores"  onClick={(e)=>{
                setIssideresponsiside(true)
             }} ></li>}


             <li style={{position:"absolute",right:'0',height:'100%',display:"flex" ,justifyContent:"center", alignItems:"center",  gap:'12px'}}>
                <div>
                <img  src="imgs/imagennoti.svg"/>
                </div>
                 <div className="contentnavline"></div>
                <div style={{display: 'inline-flex',justifyContent: "center",alignItems: "center",gap: '12px'}}> <span>Luis david</span> <img src="imgs/avatar.svg"/></div>
             </li>
         
        </ul>
    </nav>
    </> );
}

export default Navbar;