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
createRoot(document.getElementById('root')!).render(

   // <div className=" bg-back-ground-login overflow-hiddenlogin min-vh-100">
           //<img src="/imgs/pazziolilogo.svg" className="dimensionesfondo" />
  <StrictMode>
   <StyledEngineProvider injectFirst>
    <Provider store={store}>
   <Authprovider>
    <App />
    </Authprovider>
    </Provider>
    </StyledEngineProvider>
  </StrictMode>
 // </div>,
)
