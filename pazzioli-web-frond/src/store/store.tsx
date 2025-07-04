import { configureStore } from '@reduxjs/toolkit'
//configurando el store de redux 
//con redux trabajaremos  con el estado de forma mas global
// dentro de redux crearemos los slices que seran los encargados de manejar el estado de cada modulo
//cada slice tendra su propio reducer y acciones
//el store es el encargado de manejar el estado global de la aplicacion
export default configureStore({
  reducer: {
    authglobal: require('../modules/auth/authslice/uathslice').default,
    
  }
})