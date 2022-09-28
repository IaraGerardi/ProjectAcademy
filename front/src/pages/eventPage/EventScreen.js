import React from 'react'
import { Link } from 'react-router-dom'
import HeaderInicio from '../sidebar-header/components/HeaderInicio'
import { Sidebar } from '../sidebar-header/components/Sidebar.js'
import CallEvents from './components/CallEvents'
/* import { useState, useEffect } from "react";
import axios from 'axios';
 */
export const EventScreen = () => {


  /*   const [orientadores, setOrientadores] = useState([])
    const [orientados, setOrientados] = useState([]) */



  //obtengo los datos de orientadores
  /* const ShowData = async () =>{
    const res = await axios.get('http://localhost:8000/admin/orientadores')
    console.log(res.data)
    setOrientadores(res.data)
  }

  useEffect( ()=>{
    ShowData()
  },[]) */

  //obtengo los datos de orientados
  /* const ShowDataStudents = async () =>{
    const resp = await axios.get('http://localhost:8000/admin/orientados')
    console.log(resp.data)
    setOrientados(resp.data)
  }

  useEffect( ()=>{
    ShowDataStudents()
  },[]) */


  return (

    <div className="container-P w-full flex"> {/*  containedor padre tamaño igual a app */}
      <Sidebar /> {/* hijo 1 izquierdo sticky */}

      <div className="container-derecho header-sa">{/*  hijo2 derecho  column */}
        <HeaderInicio propNamePage="Eventos" />

        <div className='mt-7 ml-10'>





          <div className="cont-ingresar-orientado">
            <p className="text-new-user">Todos los eventos</p>
            <Link to='/eventos/form'><button className=" w-44 h-10 bg-celesteValtech rounded-lg text-base text-white font-medium " type="submit">
              Agendar evento
            </button>
            </Link>
          </div> {/*Texto y Boton que redirije a la Página de Crear Eventos.*/}


          <CallEvents />

        </div>

      </div>

    </div>

  )
}
