// Componentes
import FormLogIn from "./components/formLogIn"
// Imagenes
import LogInIcon from "./assets/LogInIcon.png"
import Logo from "./assets/LogoVCamp.png"
// CSS
import "./LogIn.css"

function LogIn(){
    return(
        <div className="loginAdmin">
            <div className="imagesContainer">
                <img id="vCampLogo" src={Logo} alt="v_camp"/>
                <img id="LogInImage" src={LogInIcon} alt="icon"/>
            </div>
            <div className="formContainer">
                <h2>Ingresá a tu portal</h2>
                <FormLogIn/>
            </div>
        </div>
    )
}

export default LogIn;