import { createContext, useReducer } from "react"
import storeReducer, { initialStore } from "./StoreReducer";

const StoreContext=createContext(); // context creado

export  default StoreContext;

//componente que dotara el estado global a toda la aplicacion
export const StoreProvider = ({children}) => {
                                                            /* const [state,dispatch]=useReducer(reducer,initialState)  sintaxis de useReducer*/
   const [store,dispatch]=useReducer(storeReducer,initialStore);//state cambiado por store , para indicar que el mismo cotiene todo el stado global
  return (
    <StoreContext.Provider value={[store,dispatch]}>  {/* va a tener un value que van a consumir los componentes hijos */}
      {children}
    </StoreContext.Provider>
  )
}


