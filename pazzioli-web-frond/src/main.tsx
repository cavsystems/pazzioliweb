import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { StyledEngineProvider } from '@mui/material/styles'
import { Provider } from 'react-redux';
import store from './store/store.tsx'
import Authprovider from './modules/auth/authcontext/autcontext.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <StyledEngineProvider injectFirst>
    <Provider store={store}>
   <Authprovider>
    <App />
    </Authprovider>
    </Provider>
    </StyledEngineProvider>
  </StrictMode>,
)
