import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Route, Routes } from "react-router";
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

function App() {
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
     <div className=" bg-back-ground-login overflow-hiddenlogin min-vh-100 containeroot">
           <img src="/imgs/pazziolilogo.svg" className="dimensionesfondo" />
           <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/inicio" element={<Inicio/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/crearempresa" element={<Crearempresa/>} />
       
    </Routes>
     </BrowserRouter>
   </div>
  )
}

export default App
