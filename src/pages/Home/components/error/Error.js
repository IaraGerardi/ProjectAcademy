import React from 'react';
import { Link } from 'react-router-dom'
import imgError from '../../assets/11.png';
import { Header } from '../header/Header';
import Proposal from '../Proposal/Propuesta.jsx'
import Footer from '../Footer/Footer.jsx'
import './error.css'

export const Error = () => {
  return (
    <>
    <Header />
    <div className='errorBox'>
        <img className='imgError' src={imgError} alt='imgError' />
        <p className='pError'>No encontramos la página que estás buscando</p>
        <p className='pError2'>Prueba buscando en la <Link to='/' className='linkError' ><span className='spanError'>página de inicio</span></Link></p>
    </div>
    <Proposal />
    <Footer />
    </>
  )
}
