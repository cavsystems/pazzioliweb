import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { initWebSocket } from '../authThunks/authThunk';
/*import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import { useRef } from 'react';*/
//createAsyncThunk permite ejecutar ese código fuera del reducer y luego actualizar el estado según el resultado.
interface AuthState {
    isAuthenticated: boolean;
    user: any | null;
    token: string | null;
    error: string | null;
    loading: boolean;
    socketclient: any |null | undefined;
    mensajeerro:any | null |undefined,
    mensajesocketout:any;
proces:string}
const initialauth:AuthState = {
    isAuthenticated: false,
    user: null,
    token: null,
    error: null,
    loading: false,
    proces:'en proceso',
    socketclient:null,
    mensajeerro:null,
     mensajesocketout:[]
}

 const AuthSlice = createSlice({
    //nombre identificativo del slice
  //el nombre del slice debe ser unico dentro de la aplicacion
  name: 'authglobal',
  //estado inicial del eslice
  //el estado inicial es un objeto que contiene las propiedades que necesitamos para manejar el estado de
  initialState: initialauth,
  reducers: {
  Login(state, action:PayloadAction<{ token: string; user: any;proces:string }>){
   
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
    
    },
     receiveMessage(state,action: PayloadAction<string>){
         state.mensajesocketout.push(action.payload);
     }
   
 /* async inicilizarzocketout(state):Promise<any>{
  const socket=new SockJS('http://localhost:8080/ws');
 state.socketclient=useRef(null)
   const stompClient = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000,
      onConnect: () => {
        console.log('Conectado al WebSocket');
        stompClient.subscribe('/topic/greetings', (msg) => {
          const body = JSON.parse(msg.body);
          state.mensajesocketout=[...state.mensajesocketout,body.content]
        });
      },
      onStompError: frame => {
        console.error('STOMP error:', frame.headers['message']);
      },
    });

    stompClient.activate();
    state.socketclient.current = stompClient;

    return () => stompClient.deactivate();
  }*/},
  //esta propiedad sirve para procesar acciones que vienen fuera del silce actual
  //como los resultados de createAsyncThunk, acciones de otros slices o incluso creadores de acciones manuales.
   extraReducers: (builder) => {
    //define lo que sucede cuando mi thunk initWebSocket se resuelve exitosamente
    //Normalmente se usa para actualizar el estado con los datos retornados.
    builder
      .addCase(initWebSocket.fulfilled, (state, { payload }) => {
        state.socketclient = payload;
        state.mensajeerro = null;
          console.log('WS conectado!')
      })
      .addCase(initWebSocket.rejected, (state, { payload }) => {
        state.mensajeerro = payload as string;
      });
  }
    
})
export const { Login ,receiveMessage} = AuthSlice.actions
export default AuthSlice.reducer