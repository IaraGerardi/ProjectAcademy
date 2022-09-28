import { Navigate, Outlet} from "react-router-dom"

const PrivateRoutes = ({propAuth}) => {

  return(
  propAuth ? <Outlet/> : <Navigate to="/LogIn"/>
  )
}

export default PrivateRoutes;
