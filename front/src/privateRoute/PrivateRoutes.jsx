/* import { useContext } from "react"; */
import { Navigate, Outlet} from "react-router-dom"
/* import  StoreContext from "../Store/StoreProvider";
 */
const PrivateRoutes = () => {
 /* const[store ]= useContext(StoreContext);
  const {logged}=store; */
 
  return(
  !localStorage.getItem('usuario') ? <Navigate to="/LogIn"/> : <Outlet/> 
  )
}

export default PrivateRoutes;
