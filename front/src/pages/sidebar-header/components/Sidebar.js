import React from 'react'
import '../style/sidebar.css'
import logo from '../icons/logo-valtech.svg'
import inicio from '../icons/logo-inicio.svg'
import orientado from '../icons/logo-orientado.svg'
import calendar from '../icons/logo-calendar.svg'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    

        <div className='boxMainSidebar'>
            <div className='sidebarLogo'>
                <img className='logo-menu' src={logo} alt="logo menu" />
            </div>

            <ul className='ulSidebar'>
                <Link to='/inicio' className='linkSidebar'><li className='liSidebar'>          
                    <img className="iconSidebar" src={inicio} alt="inicio" />
                    <p className='pSidebar'>Inicio</p>
                </li>
                </Link>
                <Link to='/orientados' className='linkSidebar'><li className='liSidebar'>                     
                    <img className="iconSidebar" src={orientado} alt="orientados" />
                    <p className='pSidebar'>Orientados</p>
                </li>
                </Link>
                <Link to='/eventos' className='linkSidebar'><li className='liSidebar'>
                    <img className="iconSidebar" src={calendar} alt="calendar" />
                    <p className='pSidebar'>Eventos</p>
                </li>
                </Link>
            </ul>
        
        </div>
       
   
  )
}
