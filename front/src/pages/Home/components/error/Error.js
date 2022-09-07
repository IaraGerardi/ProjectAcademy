import React from 'react';
/* import { Link } from 'react-router-dom' */
import imgError from '../../assets/11.png';
import './error.css'

export const Error = () => {
  return (
    <div className='errorBox'>
        <img src={imgError} alt='imgError' />
        <p className='pError'>No encontramos la página que estás buscando</p>
        <p className='pError2'>Prueba buscando en la {/* <Link> */}<span className='spanError'>página de inicio</span>{/* </Link> */}</p>
    </div>
  )
}
