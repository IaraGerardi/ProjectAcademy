import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
//IMPORTACION DE SVG
import RowLeft from "./img/left.svg"
import RowRight from "./img/right.svg"
import Deleted from "./img/delete.svg"
import Affirmation from "../../StudentsScreen/img/affirmation.svg"
import Delete from "../../StudentsScreen/img/delete.svg"

import "./call-events.css"

function CallEvents({ events, offset, limit, setOffset, setLimit }) {

    const [active, setActive] = useState(false);
    const [eventList, setEventList] = useState(events);

    const prevPage = () => { setOffset(offset - 8); setLimit(limit - 8); }
    const nextPage = () => { setOffset(offset + 8); setLimit(limit + 8); }

    useEffect(() => {
        const changeEventPages = () => {
            const slicedEvents = events.slice(offset, limit);
            setEventList(slicedEvents)
        }
        changeEventPages()
    }, [offset, limit, events])

    const deleteEvent = async (id) => {
        await axios.delete(`${process.env.REACT_APP_BASE_URL}/events/${id}`, { withCredentials: true })
        window.location.reload(false);

    }

    return (
        <>
            <div className="table-events">
                <div className="pagination">
                    <div className="cont-pagination">
                        <div>{offset}-{limit}  de 100</div>
                        <div className="cont-btn-pagination">
                            <img onClick={offset > 0 ? prevPage : null}
                                className={`btn-row ${offset > 0 ? null : "opacity-50"}`} src={RowLeft} alt="" />
                            <img onClick={limit < events.length ? nextPage : null}
                                className={`btn-row ${(limit < events.length) ? null : "opacity-50"}`} src={RowRight} alt="" />
                        </div>
                    </div>
                </div>


                {eventList.map((eventMobile) => {
                    return (


                        <div className="event-mobile">

                            <div key={eventMobile.id} className="container-events-responsive">

                                <div>
                                    <p className="title-events-responsive"><strong className="event-strong-responsive">Fecha</strong></p>
                                    <p className="event-date-responsive">{eventMobile.date}</p>
                                    <p className="title-events-responsive"><strong className="event-strong-responsive">Horario</strong></p>
                                    <p className="event-date-responsive">{`${eventMobile.time.slice(0, 5)}hs`}</p>
                                </div>
                                <div>

                                    <p className="title-events-responsive"><strong className="event-strong-responsive">Evento</strong></p>
                                    <p className="event-date-responsive">{eventMobile.name}</p>
                                    <p className="title-events-responsive"><strong className="event-strong-responsive">Participantes</strong></p>
                                    <p className="event-date-responsive">{eventMobile.orienteds[0]?.name} {eventMobile.orienteds[0]?.lastname}</p>
                                </div>
                            </div>

                            <div className="delete-responsive" onClick={() => deleteEvent(eventMobile.id)}>
                                <div className="text-delete">Eliminar Evento</div>
                            </div>

                        </div>


                    )

                })}


                <div className="container-events">
                    <table >
                        <thead>
                            <tr className="title-table">
                                <td className="title-events"><strong className="event-title">Fecha</strong></td>
                                <td className="title-events"><strong className="event-title">Horario</strong></td>
                                <td className="title-events"><strong className="event-title">Evento</strong></td>
                                <td className="title-events"><strong className="event-title">Participantes</strong></td>
                            </tr>
                        </thead>

                        <tbody>
                            {eventList.map((event) => {
                                return (
                                    <tr key={event.id}>

                                        <td className="events"><p className="event-date">{event.date}</p></td>
                                        <td className="events"><p className="event-date">{`${event.time.slice(0, 5)}hs`}</p> </td>
                                        <td className="events"><p className="event-date">{event.name}</p></td>
                                        <td className="events"><p className="event-date">{event.orienteds[0]?.name} {event.orienteds[0]?.lastname}</p></td>
                                        <td className="events left"><img onClick={() => deleteEvent(event.id)} className="icon-delete" src={Deleted} alt="Icon trash" /></td>

                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

                </div>

                {events.map((eventAlert) => {
                    return (
                        <div key={eventAlert.id}>
                            {
                                (Date.parse(new Date()) - Date.parse(eventAlert.createdAt) < 10000 || active)
                                && <div className={`alert-event ${!active ? 'show-alert' : 'hidden-alert-event'}`}>
                                    <div className="cont-logo-event">
                                        <img src={Affirmation} alt="Icon Affirmation" />
                                    </div>

                                    <div>
                                        <p className="msg-alert-event">Encuentro agendado</p>
                                        <span className="msg-alert-counselor-events">El encuentro está agendado en la fecha que sugeriste, el orientado podrá confirmarlo o elegir otra fecha. Te notificaremos la confirmación o modificación</span>
                                    </div>

                                    <div className="cont-logo-event">
                                        <img className="iconDelete-alert" src={Delete} onClick={() => setActive(!active)} alt="Icon Delete" />
                                    </div>
                                </div>

                            }
                        </div>
                    )


                })}


            </div>



        </>
    )
}

export default CallEvents;