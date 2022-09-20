
import HeaderInicio from "../sidebar-header/components/HeaderInicio.jsx";
import { Sidebar } from "../sidebar-header/components/Sidebar";
import "./orientados.css"
/* import CallStudents from "./components/CallStudents"; */
import {Outlet} from "react-router-dom";





function StudentsScreen() {

   
    /* const outlet = Outlet.props
    console.log(outlet) */
    return (
        <>
            <div className="container-P w-full flex"> {/*  containedor padre tamaño igual a app */}

                <Sidebar /> {/* hijo 1 izquierdo sticky */}

                <div className="container-derecho header-sa">{/*  hijo2 derecho  column */}
                    <HeaderInicio propNamePage="Orientados" />

                    <div>

                              
                      
                       <Outlet/>
                    </div>
                </div>
            </div>

        </>
    );
}

export default StudentsScreen;