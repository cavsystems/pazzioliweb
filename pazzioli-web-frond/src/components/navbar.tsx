function Navbar() {
    return ( <>
    <nav className="navpazzioli">
        <ul>

            <li className="navizquierodsidebar">
                <ul className="listamanenusidebar">
                    <li className="lilogomenu">
                        <img src="/imgs/imagenlogpa.svg" className="logonavbar"/>
                    </li>
                     <li className="lineaseparadora">

                        
                    </li>

                       <li className="navsiguiente">
                        <div>  <img src="/imgs/imagenniconcasa.svg" className="imgnavicon" /> </div>
                      
                        <div><img src="/imgs/imgdatafono.svg" className="imgnavicon"/></div>

                        <div><img src="/imgs/usuarios.svg"  className="imgnavicon"/></div>

                        <div><img src="/imgs/terceros.svg" /></div>
                        <div><img src="/imgs/facturas.svg"/></div>
                        <div><img src="/imgs/inventario.svg"/></div>
                        <div><img src="/imgs/despacho.svg"/></div>
                        <div><img  src="/imgs/contabilidad.svg"/></div>
                        <div><img src="/imgs/ajustes.svg"/></div>
                        <div><img src="/imgs/reportes.svg"/></div>
                    
            </li>
                </ul>
            </li>


           <li className="navizquierdo"></li>
         
        </ul>
    </nav>
    </> );
}

export default Navbar;