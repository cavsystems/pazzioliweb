// src/store/authThunks.ts
//funcion de redux toolkit para crear acciones asincronas ya que en el 
//slice no se puede que gestionen automaticamente , el estdo de carga,exito y error

import { createAsyncThunk } from '@reduxjs/toolkit';
//biblioteca que proporciona  una conexion websocket compatibles con navegadores
//que no soportan websocket nativo
import SockJS from 'sockjs-client';

//Cliente STOMP que facilita la comunicación sobre WebSockets.
/*STOMP es un protocolo de mensajería ligero y orientado a texto, 
similar en estructura a HTTP. Opera sobre conexiones TCP o WebSocket, 
utilizando una serie de comandos como 
CONNECT, SEND, SUBSCRIBE, UNSUBSCRIBE, ACK, 
NACK y 
DISCONNECT para gestionar la comunicación entre clientes y 
servidores de mensajería. Cada mensaje en STOMP se organiza en un "frame"
 que incluye un comando, encabezados (como destino y tipo de contenido) y un cuerpo de mensaje*/
import { Client } from '@stomp/stompjs';
// Acción de Redux que se despacha cuando se recibe un mensaje del servidor.
import {receiveMessage} from '../authslice/uathslice';
//createAsyncThunk permite ejecutar ese código fuera del reducer y luego actualizar el estado según el resultado.
//Definición de la acción asíncrona:
//createAsyncThunk: Crea una acción que maneja el ciclo de vida de una operación asíncrona.
//El primer argumento es el tipo de la acción
//El segundo argumento es una función asíncrona que recibe dos parámetros: el payload (no utilizado aquí) y
 //un objeto con métodos como dispatch y rejectWithValue.
export const initWebSocket = createAsyncThunk(
  'auth/initWebSocket',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      //establecimiento de la conexion websocket
      //Se crea una nueva instancia de SockJS que se conecta a la URL proporcionada, 
      //estableciendo una conexión WebSocket con el servidor.
      const socket:any = new SockJS('http://localhost:4000/ws');
      // Configuración adicional del cliente STOMP si es necesario
      // Por ejemplo, puedes establecer credenciales, encabezados, etc.
      // En este caso, no se requiere configuración extra antes de crear el cliente.
      const stompClient = new Client({
        // Función que devuelve la instancia de SockJS para que STOMP.js la utilice.
        //en pocas palabras crea la conexion websocket
        webSocketFactory: () => socket,
        //Tiempo en milisegundos que el cliente esperará antes de intentar reconectar 
       // automáticamente si la conexión se pierde.
        reconnectDelay: 5000,
        //Función que se ejecuta cuando la conexión STOMP se establece con éxito.
       //  Aquí, se suscribe al destino /topic/greetings y, 
       // al recibir un mensaje, se despacha la acción
       //topic/greetings es un simplemente es un canal de difusión que alinea con tus métodos del servidor.
        onConnect: () => {
          stompClient.subscribe('/topic/greetings', (msg) => {
            const { content } = JSON.parse(msg.body);
            //dispatch(receiveMessage(JSON.parse(msg.body)));
                 
          });

      stompClient.subscribe('/topic/auth', (message: any) => {
      const data = JSON.parse(message.body);
      dispatch(receiveMessage(data));
     // console.log('Datos recibidos:', data); // <-- Aquí deberías ver los datos
    });
          stompClient.publish(  {
      destination: '/app/hello',
      body: JSON.stringify({ name: 'david' })});
           const transportUrl: string = (socket as any)._transport.url;
  const sessionId = transportUrl.split('/').slice(-2)[0];
  console.log('stomp session id:', sessionId);
        },
       // unción que maneja errores STOMP. En este caso, 
      //  simplemente se imprime el mensaje de error en la consola.
        onStompError: frame => {
          console.error('STOMP error:', frame.headers['message']);
        }
      });
//Se activa el cliente STOMP,
//  iniciando la conexión y comen
// zando a escuchar mensajes.
      stompClient.activate();
     // Se devuelve la instancia del cliente STOMP, 
     // lo que permite a otros componentes o funciones interactuar
      // con la conexión WebSocket si es necesario.
      
      return stompClient;
     
    } catch (error: any) {
      //Si ocurre un error durante la configuración o activación del WebSocket, se captura y se pasa al bloque catch,
      // donde se rechaza la acción con el mensaje de error utilizando rejectWithValue.
      return rejectWithValue(error.message);
    }
  }
);
