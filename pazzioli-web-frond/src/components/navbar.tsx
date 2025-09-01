import { useState } from "react";

function Navbar() {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 914);
    window.addEventListener('resize', () => {
        setIsLargeScreen(window.innerWidth >= 914);
    });




    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [issideresponsiside, setIssideresponsiside] = useState(false);
    return ( <>
    <nav className="navpazzioli" style={{    position: 'fixed',
    width: '100%',zIndex:'12 !important'}}>
        <ul>

         {isLargeScreen ?  isSidebarOpen ?  <li className="navizquierodsidebarlarge"  onMouseEnter={() => setIsSidebarOpen(true)} onMouseLeave={() => setIsSidebarOpen(false)}>
                <ul className="listamanenusidebar">
                    <li className="lilogomenu">
                        <img src="/imgs/imagenlogpa.svg" className="logonavbar"/>
                    </li>
                     <li className="lineaseparadora">

                        
                    </li>

                       <li className="navsiguiente">
                        <div> <div className="iconospedidossidebar"> <img src="/imgs/imagenniconcasa.svg" className="imgnavicon" />  <span>Inicio</span></div></div>
                          <div><div className="iconospedidossidebar"> <span>Menu</span></div></div>
                        <div><div className="iconospedidossidebar"><img src="/imgs/imgdatafono.svg" className="imgnavicon"/> <span>Caja</span></div></div>

                        <div><div className="iconospedidossidebar"><img src="/imgs/usuarios.svg"  className="imgnavicon"/> <span>Usuarios</span></div></div>

                        <div><div className="iconospedidossidebar"><img src="/imgs/terceros.svg" /> <span>Terceros</span></div></div>
                        <div><div className="iconospedidossidebar"><img src="/imgs/facturas.svg"/> <span>Facturacion</span></div></div>
                        <div><div className="iconospedidossidebar"><img src="/imgs/inventario.svg"/> <span>Inventario</span></div></div>
                        <div><div className="iconospedidossidebar"><img src="/imgs/despacho.svg"/> <span>Despachos</span></div></div>
                        <div><div className="iconospedidossidebar"><img  src="/imgs/contabilidad.svg"/> <span>Contabilidad</span></div></div>
                        <div><div className="iconospedidossidebar"><img src="/imgs/ajustes.svg"/> <span>Parametros</span> </div></div>
                         <div><div className="iconospedidossidebar"><img src="/imgs/compras.svg"/> <span>Compras</span> </div></div>
                        <div><div className="iconospedidossidebar"><img src="/imgs/reportes.svg"/> <span>Reportes</span> </div></div>
                        <div><div className="iconospedidossidebar"><img src="/imgs/pedidos.svg"/><span>Pedidos</span> </div></div>
                    
            </li>


            
                </ul>


                
            </li>:<li className="navizquierodsidebar" onMouseEnter={() => setIsSidebarOpen(true)} onMouseLeave={() => setIsSidebarOpen(false)}>
                <ul className="listamanenusidebar">
                    <li className="lilogomenu">
                        <img src="/imgs/imagenlogpa.svg" className="logonavbar"/>
                    </li>
                     <li className="lineaseparadora">

                        
                    </li>

                       <li className="navsiguiente">
                        <div>  <img src="/imgs/imagenniconcasa.svg" className="imgnavicon" />  </div>
                      
                        <div><img src="/imgs/imgdatafono.svg" className="imgnavicon"/></div>

                        <div><img src="/imgs/usuarios.svg"  className="imgnavicon"/></div>

                        <div><img src="/imgs/terceros.svg" /></div>
                        <div><img src="/imgs/facturas.svg"/></div>
                        <div><img src="/imgs/inventario.svg"/></div>
                        <div><img src="/imgs/despacho.svg"/></div>
                        <div><img  src="/imgs/contabilidad.svg"/></div>
                        <div><img src="/imgs/ajustes.svg"/></div>
                        <div><img src="/imgs/reportes.svg"/></div>
                        <div><img src="/imgs/pedidos.svg"/></div>
                    
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
                      
                        <div><div className="iconospedidossidebar"><img src="/imgs/imgdatafono.svg" className="imgnavicon"/> <span>Caja</span></div></div>

                        <div><div className="iconospedidossidebar"><img src="/imgs/usuarios.svg"  className="imgnavicon"/> <span>Usuarios</span></div></div>

                        <div><div className="iconospedidossidebar"><img src="/imgs/terceros.svg" /> <span>Terceros</span></div></div>
                        <div><div className="iconospedidossidebar"><img src="/imgs/facturas.svg"/> <span>Facturacion</span></div></div>
                        <div><div className="iconospedidossidebar"><img src="/imgs/inventario.svg"/> <span>Inventario</span></div></div>
                        <div><div className="iconospedidossidebar"><img src="/imgs/despacho.svg"/> <span>Despachos</span></div></div>
                        <div><div className="iconospedidossidebar"><img  src="/imgs/contabilidad.svg"/> <span>Contabilidad</span></div></div>
                        <div><div className="iconospedidossidebar"><img src="/imgs/ajustes.svg"/> <span>Parametros</span> </div></div>
                         <div><div className="iconospedidossidebar"><img src="/imgs/compras.svg"/> <span>Compras</span> </div></div>
                        <div><div className="iconospedidossidebar"><img src="/imgs/reportes.svg"/> <span>Reportes</span> </div></div>
                        <div><div className="iconospedidossidebar"><img src="/imgs/pedidos.svg"/><span>Pedidos</span> </div></div>
                    
            </li>


            
                </ul>


                
            </li>}


             


           {isLargeScreen  ? <li className={ isSidebarOpen ? 'navizquierdolarge':`navizquierdo`} ></li> :
             <li className="navizquierdores"  onClick={(e)=>{
                setIssideresponsiside(true)
             }} ></li>}
         
        </ul>
    </nav>
    </> );
}

export default Navbar;