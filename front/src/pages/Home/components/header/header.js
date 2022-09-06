import React from 'react'
import logo from '../../assets/vnegro 1.png'
export const header = () => {
  return (
    <nav>
        <ul>
          <li><img src={logo} /></li>
          <li><button>Ingresa a tu portal</button></li>
        </ul>
    </nav>
  )
}
