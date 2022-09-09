

import HeaderInicio from "../Header-MenuLateral/HeaderInicio";
import Sidebar from "../Header-MenuLateral/Sidebar";
import "../css/orientados.css"
import buscador from "../icons/logo-buscador.svg"
import Userscv from "../BoxUserscd/Userscv";
import { Link } from "react-router-dom";


function Orientados() {
    return (
        <>
            <div className="cont-major">

                <div className="menu-sa"><Sidebar /></div>

                <div className="header-sa">
                    <div className="sa-header-children"><HeaderInicio /></div>

                    <div className="sa-seccion">

                        <div className="cont-ingresar-orientado">
                            <p className="text-new-user">Nuevos usuarios a orientar</p>


                            <Link className="navegar" to="/nuevoOrientado">
                                <button className="btn-ingresar-orientado">Ingresar orientado</button>
                            </Link>
                        </div>


                        <input className="buscador-orientado" type="text" placeholder="Buscar orientado por nombre y apellido" />

                        <img className="logo-buscador" src={buscador} alt="logo buscador" />

                        <div className="cont-users">
                            <Userscv />
                        </div>


                    </div>
                </div>

            </div>


        </>
    );
}

export default Orientados;