import React from "react"
import logo from "../icons/logo-valtech.svg"
import calendar from "../icons/logo-calendar.svg"
import inicio from "../icons/logo-inicio.svg"
import orientado from "../icons/logo-orientado.svg"
import { Link } from "react-router-dom"


function Eventos() {
    return (
        <div className="HeaderIniciado">

            <div className='menu-lateral'>
                <div className='cont-logo-menu'>
                    <img className='logo-menu' src={logo} alt="logo menu" />
                </div>

                {/* Fin de Logo V_camp */}



                <Link className="navegar" to="/inicio">
                    <div className='cont-nav-lateral'>
                        <div className='cont-logo-lateral'>
                            <img src={inicio} alt="inicio" />
                            <p className='lateral'>Inicio</p>
                        </div>
                    </div>
                </Link>

                <Link className="navegar" to="/orientados">
                <div className='cont-nav-lateral'>
                    <div className='cont-logo-lateral'>
                        <img src={orientado} alt="orientados" />
                        <p className='lateral'>Orientados</p>
                    </div>
                </div>
                </Link>

                <div className='cont-nav-lateral here'>
                    <div className='cont-logo-lateral'>
                        <img src={calendar} alt="calendar" />
                        <p className='lateral'>Eventos</p>
                    </div>
                </div>
            </div>

            {/* Fin de Menu lateral */}



            <div className='header-inicio'>

                {/* Esto habría que hacerlo dinamico y traiga la info de back */}

                <p className='Title-inicio'>Eventos</p>

                <div className='usuario-inicio'></div>

                {/* <img className='usuario-inicio' src="" alt="usuario" /> */}

            </div>

        </div>
    );
}

export default Eventos;
