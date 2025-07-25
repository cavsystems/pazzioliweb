import { configureStore } from '@reduxjs/toolkit'
import authslice from '../modules/auth/authslice/uathslice'
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux'
//configurando el store de redux 
//con redux trabajaremos  con el estado de forma mas global
// dentro de redux crearemos los slices que seran los encargados de manejar el estado de cada modulo
//cada slice tendra su propio reducer y acciones
//el store es el encargado de manejar el estado global de la aplicacion
export const store =configureStore({
  reducer: {
    authglobal: authslice,
    
  }
})
//ore.getState() es una función que devuelve el estado global de tu store
// ReturnType<typeof store.getState> extrae el tipo que esa función devuelve, lo que resulta en un
// tipo con todas tus slices y subestados en su forma exacta.
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
//Así, cada vez que agregues o cambies un slice, RootState se actualiza automáticamente,
export type AppDispatch = typeof store.dispatch
//store.dispatch es la función que envía (dispatch) acciones, incluidos thunks o acciones normales.
//typeof store.dispatch extrae el tipo de esa función, incluyendo la firma correcta para dispatch(thunk) y 
//  otra lógica de middleware. 
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;