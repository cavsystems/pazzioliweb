import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Route, Routes } from "react-router";
import { Login } from './modules/auth/views/login/login';
import { Inicio } from './modules/inicio/views/Inicio';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../scss/custom.scss';

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/inicio" element={<Inicio/>} />
    </Routes>
     </BrowserRouter>
   
  )
}

export default App
