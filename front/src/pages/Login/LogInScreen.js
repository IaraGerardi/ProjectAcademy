import { Link } from "react-router-dom"
import FormLogIn from "./components/LogInForm"
import LogInIcon from "./assets/LogInIcon.png"
import Logo from "./assets/LogoVCamp.png"
import "./LogIn.css"

function LogIn() {
    return (
        <div className="loginAdmin flex">
            <div className="imagesContainer flex flex-col justify-center items-center">
                <Link className="w-52 h-12 z-10" to="/">
                    <img
                        src={Logo}
                        alt="v_camp"
                        id="vCampLogo"
                        className="cursor-pointer" />
                </Link>
                <img
                    alt="icon"
                    id="logInImage"
                    src={LogInIcon}
                    className="w-96 h-96" />
            </div>
            <div className="formContainer flex flex-col justify-center">
                <h2 className="text-3xl font-medium">Ingresá a tu portal</h2>
                <FormLogIn />
            </div>
        </div>
    )
}

export default LogIn;