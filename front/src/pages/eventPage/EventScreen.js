import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HeaderInicio from '../sidebar-header/components/HeaderInicio'
import { Sidebar } from '../sidebar-header/components/Sidebar.js'
import CallEvents from './components/CallEvents'
import useGet from "../../hooks/useGet"
/* import { useState, useEffect } from "react";
import axios from 'axios';
 */
export const EventScreen = () => {
  const [eventsList, setEventsList] = useState([])

  const URIorientados = "http://localhost:8000/admin/orientados";
  const URIeventos = "http://localhost:8000/admin/event";

  // Traigo los orientados y eventos
  const orientados = useGet(URIorientados).data;
  const events = useGet(URIeventos).data;

  useEffect(() => {
    setEventsList(events)
  }, [events])

  const handleSearch = (terminoBusqueda) => {

    // Primero filtro los orientados en base a lo que ingresa por la busqueda
    let filteredOrientados = orientados.filter((orientado) => {
      const fullName = `${orientado.name} ${orientado.lastname}`.toLowerCase()
      if (fullName.includes(terminoBusqueda.toLowerCase())) {
        return orientado.OrientadoreId;
      }
    })

    // Despues mapeo ese array filtrado para obtener los ids del orientador
    const arrayOrientadoreId = filteredOrientados.map((orientado) => {
      return orientado.OrientadoreId;
    })

    // Filtro los eventos en base al id del orientador
    let filteredEvents = events.filter((event) => {
      if (arrayOrientadoreId.includes(event.Orientadore.id)) {
        return event;
      }
    })

    // Y guardo el resultado en el estado de la lista
    setEventsList(filteredEvents);
  }

  console.log("father event list:", eventsList)

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
          <div className="cont-search-orientado">
            <input
              type="text"
              defaultValue={""}
              onChange={(e) => handleSearch(e.target.value)}
              className="search-orientado"
              placeholder="Buscar orientado por nombre y apellido"
            />
          </div>

{/* Paso los eventos como props para que se actualice cuando el estado cambie por el buscador */}
          <CallEvents events={eventsList} />

        </div>

      </div>

    </div>

  )
}
