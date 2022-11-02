import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HeaderInicio from '../sidebar-header/components/HeaderInicio'
import { Sidebar } from '../sidebar-header/components/Sidebar.js'
import CallEvents from './components/CallEvents'
import useGet from "../../hooks/useGet"
import searchBar from "../sidebar-header/icons/logo-buscador.svg"
import "./eventStyle.css"

import "../StudentsScreen/oriented.css"

export const EventScreen = () => {

  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(8);
  const [eventsList, setEventsList] = useState([]);

  const URIevents = `${process.env.REACT_APP_BASE_URL}/events`;
  const URIoriented = `${process.env.REACT_APP_BASE_URL}/oriented`;

  const events = useGet(URIevents).data;
  const oriented = useGet(URIoriented).data;

  useEffect(() => {
    setEventsList(events)
  }, [events])

  const handleSearch = (searchName) => {

    const filteredOrientedID = oriented.filter((oriented) => {
      const fullName = `${oriented.name} ${oriented.lastname}`.toLowerCase()
      return (fullName.includes(searchName.toLowerCase()));
    }).map((oriented) => { return oriented.id })

    const eventOriented = events.map((event) => {
      return [event, event.orienteds.map((oriented) => {
        return oriented.id
      })]
    })

    const filteredEvents = eventOriented.filter((elem) => {
      return elem[1].some(item => filteredOrientedID.includes(item))
    }).map((elem) => { return elem[0] })

    setEventsList(filteredEvents);
    setOffset(0);
    setLimit(8);
  }


  return (
    <div className="container-P w-full flex">
      <Sidebar />

      <div className="container-derecho header-sa">
        <HeaderInicio propNamePage="Eventos" />

        <div className="cont-page">
          <div className="cont-enter-oriented">
            <p className="text-new-user">Todos los eventos</p>
            <Link className='button-add-oriented' to='/eventos/form'>
              Agendar evento
            </Link>
          </div>

          <div className="container-search-event">
            <div className="cont-search-oriented-event">
              <input
                type="text"
                defaultValue={""}
                onChange={(e) => handleSearch(e.target.value)}
                className="search-oriented-event"
                placeholder="Buscar orientado por nombre y apellido"
              />
              <img className="logo-search-event" src={searchBar} alt="logo buscador" />
            </div>
          </div>

          <CallEvents events={eventsList} offset={offset} limit={limit} setLimit={setLimit} setOffset={setOffset} />

        </div>
      </div>
    </div>
  )
}
