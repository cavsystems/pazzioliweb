function Footerdash() {
    return ( <>
    <div className="row rowopcionalfotter"  >
        <div className="col-12">
            <div className="card" style={{width:'100%' }}>
                <div className="car-body d-flex" style={{padding: "13px 12px",
    gap: "12px"}}>
                        <img src="imgs/imagenconfig.svg" className="imagenesaccesosrapidos"/>

                        <div className="d-flex flex-column">

                            <span style={{marginBottom:"15px"}} className="textofottertitulocard">Configura Informacion de tu empresa</span>
                            <p style={{marginBottom:"15px"}} className="textofottercard">Completa los datos de tu empresa, regimen tributario y preferencias contables para comensar a facturar sin errores</p>

                            <div ><button className="Botonaccesorapidofotter">Configuracion</button></div>

                        </div>
                </div>
            </div>
        </div>

            <div className="col-12">
            <div className="card" style={{width:'100%' }}>
                <div className="car-body d-flex" style={{padding: "13px 12px",
    gap: "12px"}}>
                        <img src="imgs/imagenconfig.svg" className="imagenesaccesosrapidos"/>

                        <div className="d-flex flex-column">

                            <span style={{marginBottom:"15px"}} className="textofottertitulocard">Agrega tus primeros productos</span>
                            <p style={{marginBottom:"15px"}} className="textofottercard componentfottercard">Agrega tus productos aqui</p>

                            <div ><button className="Botonaccesorapidofotter">Agregar producto</button></div>

                        </div>
                </div>
            </div>
        </div>

            <div className="col-12">
            <div className="card" style={{width:'100%' }}>
                <div className="car-body d-flex" style={{padding:"12px" ,gap:"12px"}}>
                        <img src="imgs/imagenconfig.svg" className="imagenesaccesosrapidos"/>

                        <div className="d-flex flex-column">

                            <span style={{marginBottom:"15px"}} className="textofottertitulocard">Crea clientes y provedores</span>
                            <p style={{marginBottom:"15px"}} className="textofottercard componentfottercard">crear nuevo cliente o provedor</p>

                            <div ><button className="Botonaccesorapidofotter">Crear cliente</button></div>

                        </div>
                </div>
            </div>
        </div>
    </div>
    </> );
}

export default Footerdash;