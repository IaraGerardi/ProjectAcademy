import { Navigate } from "react-router-dom"
import LogIn from "../pages/Login/LogInScreen";

const LogInRoute = () => {
    return (
        localStorage.getItem('usuario') ? <Navigate to="/inicio" /> : <LogIn />
    )
}

export default LogInRoute;