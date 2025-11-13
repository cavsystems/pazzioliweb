import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { StyledEngineProvider } from '@mui/material/styles'
import { Provider } from 'react-redux';
import {store} from './store/store.tsx'
import Authprovider from './modules/auth/authcontext/autcontext.tsx'
import './globalstyle.css'
import NavbarProvider from "./components/contextnavbar.tsx"
import Providerchart from "./modules/inicio/components/contextchart.tsx"
import Providerapp from './context.tsx'
import Providerusuario from './modules/usuarios/contextusuario.tsx'
createRoot(document.getElementById('root')!).render(

   // <div className=" bg-back-ground-login overflow-hiddenlogin min-vh-100">
           //<img src="/imgs/pazziolilogo.svg" className="dimensionesfondo" />
  <StrictMode>
   <StyledEngineProvider injectFirst>
    <Provider store={store}>
      < Providerapp>

   <NavbarProvider>
   <Authprovider>
    <Providerusuario>
    
    <App />
    </Providerusuario>
    </Authprovider>
    </NavbarProvider>
    
    </Providerapp>
    </Provider>
    </StyledEngineProvider>
  </StrictMode>
 // </div>,
)
