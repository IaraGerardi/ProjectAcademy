
import { Outlet } from "react-router-dom";
import { Sidebar } from "../sidebar-header/components/Sidebar.js";
import HeaderInicio from "../sidebar-header/components/HeaderInicio";


function StudentsScreen() {

    return (

        <div className="container-P w-full flex"> {/*  containedor padre tamaño igual a app */}
            <Sidebar /> {/* hijo 1 izquierdo sticky */}
            <div className="container-derecho ">{/*  hijo2 derecho  column */}
                <HeaderInicio propNamePage="Orientados" />
                <>


                    <Outlet />
                </>
            </div>
        </div>

    );
} export default StudentsScreen;