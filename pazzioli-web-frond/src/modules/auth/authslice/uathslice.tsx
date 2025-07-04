import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Login } from '../views/login/login'
interface AuthState {
    isAuthenticated: boolean;
    user: any | null;
    token: string | null;
    error: string | null;
    loading: boolean;
proces:string}
const initialauth:AuthState = {
    isAuthenticated: false,
    user: null,
    token: null,
    error: null,
    loading: false,
    proces:'en proceso',
}
 const AuthSlice = createSlice({
    //nombre identificativo del slice
  //el nombre del slice debe ser unico dentro de la aplicacion
  name: 'authglobal',
  //estado inicial del eslice
  //el estado inicial es un objeto que contiene las propiedades que necesitamos para manejar el estado de
  initialState: initialauth,
  reducers: {
  login(state, action:PayloadAction<{ token: string; user: any;proces:string }>){
   
switch (action.payload.proces) {
    case 'en proceso':
        state.isAuthenticated = false;
      state.user = null;
      state.token = null;
        state.error = null;
      state.loading = true;
      state.proces = 'fallido';
      break;
    case 'exitoso':
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
        state.loading = false;
        state.proces = 'exitoso';
        break;
    // otros casos...
    case 'fallido':
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.error = 'Error al iniciar sesión';
      state.loading = false;
      state.proces = 'fallido';
      break;
    default:
      // caso por defecto
      break;
  }
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    
    },}
    
})
export const { login } = AuthSlice.actions
export default AuthSlice.reducer