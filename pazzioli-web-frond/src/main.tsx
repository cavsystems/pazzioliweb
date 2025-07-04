import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { StyledEngineProvider } from '@mui/material/styles'
import { Provider } from 'react-redux';
import store from './store/store.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <StyledEngineProvider injectFirst>
    <Provider store={store}>

    <App />
    </Provider>
    </StyledEngineProvider>
  </StrictMode>,
)
