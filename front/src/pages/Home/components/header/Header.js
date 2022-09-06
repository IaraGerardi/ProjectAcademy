import React from 'react'
import logo from '../../assets/vnegro 1.png'
import './header.css'


export const Header = () => {
  return (
    <nav className='navHome'>
        <ul className='ulHome'>
          <li className='liHome'><img src={logo} alt='logo' /></li>
          <li className='liHome'><button className='btnHeader'><p className='pHeader'>Ingresa a tu portal</p></button></li>
        </ul>
    </nav>
  )
}
