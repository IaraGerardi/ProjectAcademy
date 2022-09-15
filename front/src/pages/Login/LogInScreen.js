// Componentes
import FormLogIn from "./components/formLogIn"
// Imagenes
import LogInIcon from "./assets/LogInIcon.png"
import Logo from "./assets/LogoVCamp.png"
// CSS
import "./LogIn.css"

function LogIn(){
    return(
        <div className="loginAdmin flex">
            <div className="imagesContainer flex flex-col justify-center items-center">
                <img id="vCampLogo" src={Logo} alt="v_camp"/>
                <img className="w-96 h-96" id="logInImage" src={LogInIcon} alt="icon"/>
            </div>
            <div className="formContainer flex flex-col justify-center">
                <h2>Ingresá a tu portal</h2>
                <FormLogIn/>
            </div>
        </div>
    )
}

export default LogIn;