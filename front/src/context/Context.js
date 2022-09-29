import { createContext } from "react"

 export const auth = {
  logueado:{
    auth:true
  },
  sinloguear:{
    auth:false
  }
}



const Context=createContext(auth);
export  default Context;