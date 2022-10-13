import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HeaderInicio from '../sidebar-header/components/HeaderInicio'
import { Sidebar } from '../sidebar-header/components/Sidebar.js'
import CallEvents from './components/CallEvents'
import useGet from "../../hooks/useGet"

export const EventScreen = () => {
  const [eventsList, setEventsList] = useState([])

  const URIevents = `${process.env.REACT_APP_BASE_URL}/events`;
  const URIoriented = `${process.env.REACT_APP_BASE_URL}/oriented`;

  const events = useGet(URIevents).data;
  const oriented = useGet(URIoriented).data;

  useEffect(() => {
    setEventsList(events)
  }, [events])

  const handleSearch = (searchName) => {

    const filteredOrientedList = oriented.filter((oriented) => {
      const fullName = `${oriented.name} ${oriented.lastname}`.toLowerCase()
      return (fullName.includes(searchName.toLowerCase()));
    })

    const counselorArray = filteredOrientedList.map((oriented) => {
      return oriented.CounselorId;
    })

    const filteredEvents = events.filter((event) => {
      return (counselorArray.includes(event.Counselor.id));
    })
    setEventsList(filteredEvents);
  }


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
