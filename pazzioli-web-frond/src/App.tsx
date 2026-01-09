import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from './modules/auth/views/login';
import { Inicio } from './modules/inicio/views/Inicio';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../scss/custom.scss';
import { Signup } from './modules/auth/views/sIgnup';
import {Crearempresa} from './modules/empresas/views/crearempresa';
import { useAppDispatch, useAppSelector } from './store/store'
import { initWebSocket } from './modules/auth/authThunks/authThunk';
import Navbar from './components/navbar';
import '@coreui/coreui/dist/css/coreui.min.css';
import Facturacion from './modules/facturacion/Facturacion';
import { navcontex } from './components/contextnavbar';
import Recibocaja from './modules/reciboscaja/Recibocaja';
import Tomapedidos from './modules/tomapedido/tomapedido';
import Compras from './modules/compras/Compras.';
import { appcontex } from './context';
import Usuarios from './modules/usuarios/Usuarios';
import Terceros from './modules/terceros/views/Terceros';
import Productos from './modules/productos/productos';
import Providercodigobarras from './modules/productos/contextcodigobarras';
import Atributos from './modules/atributos/Atributos';
import Entradainventario from './modules/entradainventario/entradainventario';

function App() {
    const{  paginaactual,
      setpaginaactual,
      link,
      setlink}=appcontex();
      const {nav}=navcontex();
  const dispatch = useAppDispatch();
  //Referencia mutable preservada entre renders
  //useRef devuelve un objeto que se mantiene igual en toda la vida del componente. No importa cuántas veces el componente se renderice, 
  // haEjecutado apunta siempre al mismo objeto ref
  //No provoca re-rende
  //Cuando cambiás haEjecutado.current, React no entera que sucedió, y por eso no vuelve a renderizar el componente. Es distinto de useState, 
  // donde cambiar el estado sí provoca un nuevo render.
  const haEjecutado = useRef(false);

  const error = useAppSelector(state => state.authglobal.mensajeerro);
  const mensajeexito= useAppSelector(state => state.authglobal.mensajesocketout);
  //el use ref lo uso para evitar  el doble montage generado por el modo strict
useEffect(()=>{
  if (!haEjecutado.current) {
    haEjecutado.current = true;
    return;
  }
  dispatch(initWebSocket())

 

  
  
},[dispatch])

  return (
     <BrowserRouter>
     <div className=" bg-back-ground-login overflow-hiddenlogin min-vh-100 containeroot">
           <img src="/imgs/pazziolilogo.svg" className="dimensionesfondo" />
           <Navbar/>

             <div className="encabezadohome">
       <a href="/inicio" style={{marginLeft: nav ? '250px':"83px"}} className="navigationhome homenavigation">home</a>
       <span style={{letterSpacing: 'var(--unnamed-character-spacing-0)',
color: 'var(--gris-textos)',
textAlign: 'left',
font: 'normal normal normal 14px/19px Open Sans',
}}>/</span>
         <a href="#" className="navigationhome">{paginaactual}</a>
       </div>
       <div className='containerformen'>
   
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/inicio" element={<Inicio/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/crearempresa" element={<Crearempresa/>} />
       <Route path="/facturacion" element={<Facturacion/>} />
       <Route path='/recibocaja' element={<Recibocaja/>}/>
        <Route path='/tomapedidos' element={<Tomapedidos/>}/>
         <Route path='/compras' element={<Compras/>}/>
           <Route path='/usuarios' element={<Usuarios/>}/>
             <Route path='/terceros' element={<Terceros/>}/>
             <Route path="/atributos" element={<Atributos/>}/>
            
             <Route path='/productos' element={<Providercodigobarras><Productos/></Providercodigobarras>}/>
            <Route path='/Entrada' element={<Providercodigobarras><Entradainventario/></Providercodigobarras>}/>
    </Routes>
     
     </div>
   </div>
   </BrowserRouter>
  )
}

export default App
