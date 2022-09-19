
import HeaderInicio from "../sidebar-header/components/HeaderInicio.jsx";
import { Sidebar } from "../sidebar-header/components/Sidebar";
import "./orientados.css"
import CallStudents from "./components/CallStudents";
import { Link } from "react-router-dom";



function StudentsScreen() {

    return (
        <>
            <div className="container-P w-full flex"> {/*  containedor padre tamaño igual a app */}

                <Sidebar /> {/* hijo 1 izquierdo sticky */}

                <div className="container-derecho header-sa">{/*  hijo2 derecho  column */}
                    <HeaderInicio propNamePage="Orientados" />

                    <div>

                        <div className="cont-ingresar-orientado">
                            <p className="text-new-user">Nuevos usuarios a orientar</p>


                            <Link className="navegar" to="/nuevoOrientado">
                                <button className="btn-ingresar-orientado">Ingresar orientado</button>
                            </Link>
                        </div> {/*Texto y Boton que redirije a la Página de ingresar orientados.*/}


                        <div className="cont-users">
                            <CallStudents /> {/*Buscador y Llamado de usuarios*/}
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default StudentsScreen;