
import { Navigate, Outlet} from "react-router-dom"
import LogIn from "../pages/Login/LogInScreen";

const LogInRoute = () => {
 /* const[store ]= useContext(StoreContext);
  const {logged}=store; */
 
  return(
  localStorage.getItem('usuario') ? <Navigate to="/inicio"/> : <LogIn/> 
  )
}

export default LogInRoute ;