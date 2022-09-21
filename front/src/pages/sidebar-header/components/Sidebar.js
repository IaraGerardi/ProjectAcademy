import React from 'react'
import '../style/sidebar.css'
import logo from '../icons/logo-valtech.svg'
import inicio from '../icons/logo-inicio.svg'
import orientado from '../icons/logo-orientado.svg'
import calendar from '../icons/logo-calendar.svg'
import { NavLink, Link } from 'react-router-dom'

export const Sidebar = () => {
    return (
        <div className='boxMainSidebar'>
            <div className='sidebarLogo'>
                <Link to="/">
                    <img className='logo-menu cursor-pointer' src={logo} alt="logo menu" />
                </Link>
            </div>

            <ul className='ulSidebar'>
                {/* Uso navlink en vez de link para poder darle estilos segun si el usuario esta en esa pagina o no */}
                <NavLink to='/inicio' className={({ isActive }) => isActive ? "activeLiSidebar linkSidebar" : "linkSidebar"}>
                    <li className='liSidebar'>
                        <img className="iconSidebar" src={inicio} alt="inicio" />
                        <p className='pSidebar'>Inicio</p>
                    </li>
                </NavLink>
                <NavLink to='/orientados/newUsers' className={({ isActive }) => isActive ? "activeLiSidebar linkSidebar" : "linkSidebar"}>
                    <li className='liSidebar'>
                        <img className="iconSidebar" src={orientado} alt="orientados" />
                        <p className='pSidebar'>Orientados</p>
                    </li>
                </NavLink>
                <NavLink to='/eventos' className={({ isActive }) => isActive ? "activeLiSidebar linkSidebar" : "linkSidebar"}>
                    <li className='liSidebar'>
                        <img className="iconSidebar" src={calendar} alt="calendar" />
                        <p className='pSidebar'>Eventos</p>
                    </li>
                </NavLink>
            </ul>

        </div>


    )
}
