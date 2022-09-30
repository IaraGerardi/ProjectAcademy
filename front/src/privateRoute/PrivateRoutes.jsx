import { useContext } from "react";
import { Navigate, Outlet} from "react-router-dom"
import  StoreContext from "../Store/StoreProvider";

const PrivateRoutes = () => {
 const[store ]= useContext(StoreContext);
  const {logged}=store;
 
  return(
  logged === true ? <Outlet/> : <Navigate to="/LogIn"/>
  )
}

export default PrivateRoutes;
