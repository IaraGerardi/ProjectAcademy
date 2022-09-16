
import HeaderInicio from "../sidebar-header/components/HeaderInicio.jsx";
import { Sidebar } from "../sidebar-header/components/Sidebar.js";
import "./orientados.css"
import buscador from "../sidebar-header/icons/logo-buscador.svg"
import CallStudents from "./components/CallStudents";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react"


function StudentsScreen() {

    return (
        <>
            <div className="h-screen flex">
                <div className="h-full w-1/6 overflow-hidden">
                    <Sidebar />
                </div>

                <div className="h-30 w-full overflow-hidden">
                    <HeaderInicio propNamePage="Orientados" />


                    <div className="cont-ingresar-orientado">
                        <p className="text-new-user">Nuevos usuarios a orientar</p>


                        <Link className="navegar" to="/nuevoOrientado">
                            <button className="btn-ingresar-orientado">Ingresar orientado</button>
                        </Link>
                    </div>

                    {/* <div className="cont-buscador-orientado">

                        <input className="buscador-orientado" type="text" placeholder="Buscar orientado por nombre y apellido" />

                        <img className="logo-buscador" src={buscador} alt="logo buscador" />
                    </div> */}

                    <div className="cont-users">
                        <CallStudents />
                    </div>


                </div>

            </div>


        </>
    );
}

export default StudentsScreen;