import React from "react"
import logo from "../icons/logo-valtech.svg"
import calendar from "../icons/logo-calendar.svg"
import inicio from "../icons/logo-inicio.svg"
import orientado from "../icons/logo-orientado.svg"
import { Link } from "react-router-dom"

import "../style/menu-header.css"

function Sidebar() {
    return (
        <div>

            <div className='menu-lateral'>
                <div className='cont-logo-menu'>
                    <img className='logo-menu' src={logo} alt="logo menu" />
                </div>

                {/* Fin de Logo V_camp */}

                <Link className="navegar" to="/inicio">
                    <div className='cont-nav-lateral'>
                        <div className='cont-logo-lateral'>
                            <img className="logo-lateral" src={inicio} alt="inicio" />
                            <p className='lateral'>Inicio</p>
                        </div>
                    </div>
                </Link>

                <Link className="navegar" to="/orientados">
                    <div className='cont-nav-lateral'>
                        <div className='cont-logo-lateral'>
                            <img className="logo-lateral" src={orientado} alt="orientados" />
                            <p className='lateral'>Orientados</p>
                        </div>
                    </div>
                </Link>

                <Link className="navegar" to="/eventos">
                    <div className='cont-nav-lateral'>
                        <div className='cont-logo-lateral'>
                            <img className="logo-lateral" src={calendar} alt="calendar" />
                            <p className='lateral'>Eventos</p>
                        </div>
                    </div>
                </Link>
            </div>

            {/* Fin de Menu lateral */}



        </div>
    );
}

export default Sidebar;