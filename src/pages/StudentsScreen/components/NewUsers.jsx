import CallStudents from "./CallStudents";
import {Link} from "react-router-dom";

function NewUsers() {
  return (
    <>
    <div className="cont-enter-oriented">
        <p className="text-new-user">Nuevos usuarios a orientar</p>
        <Link to="/orientados/nuevo">
            <button className="btn-enter-orientaded" /* onClick={handleRenderForm} */>Ingresar orientado</button>
        </Link>
    </div> {/*Texto y Boton que redirije a la Página de ingresar orientados.*/}


    <div className="cont-users">
        <CallStudents /> {/*Buscador y Llamado de usuarios*/}
    </div>
    </>
  )
}

export default NewUsers
