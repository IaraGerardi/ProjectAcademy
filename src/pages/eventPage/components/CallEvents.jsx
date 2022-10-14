import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
//IMPORTACION DE SVG
import RowLeft from "./img/left.svg"
import RowRight from "./img/right.svg"
import Deleted from "./img/delete.svg"
import Affirmation from "../../StudentsScreen/img/affirmation.svg"
import Delete from "../../StudentsScreen/img/delete.svg"

import "./call-events.css" //IMPORTACION DE CSS

function CallEvents({ events }) {
    // Recibe eventos como prop

    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(8);
    const [eventList, setEventList] = useState(events);

    const [active, setActive] = useState(false);

    // Cambio minimo y maximo de eventos que se muestran
    const prevPage = () => { setOffset(offset - 8); setLimit(limit - 8); }
    const nextPage = () => { setOffset(offset + 8); setLimit(limit + 8); }

    useEffect(() => {
        const changeEventPages = () => {
            // Hago un slice de la lista de eventos
            const slicedEvents = events.slice(offset, limit);
            // Define ese array como la lista de eventos
            setEventList(slicedEvents)
        }
        changeEventPages()
    }, [offset, limit, events])


    //eliminar un evento
    const deleteEvent = async (id) => {
        await axios.delete(`http://localhost:8000/admin/${id}/deleteEvent/`, { withCredentials: true })
        window.location.reload(false);
    }

    return (
        <>
            {/* TABLA DE EVENTOS */}
            <div className="table-events">
                <div className="pagination">
                    <div className="cont-pagination">
                        <div>{offset}-{limit}  de 100</div>
                        <div className="cont-btn-pagination">
                            {/*BOTONES DE LA PAGINACION*/}
                            {/* Si el valor del que empieza el paginado es menor a cero deshabilito el boton*/}
                            <img onClick={offset > 0 ? prevPage : null}
                                className={`btn-row ${offset > 0 ? null : "opacity-50"}`} src={RowLeft} alt="" />
                            {/* Si el limite del paginado es mas alto que la cantidad de eventos que hay para mostrar
                            deshabilito el boton*/}
                            <img onClick={limit < events.length ? nextPage : null}
                                className={`btn-row ${(limit < events.length) ? null : "opacity-50"}`} src={RowRight} alt="" />
                        </div>
                    </div>
                </div>


                <div className="container-events">
                    <table >
                        <thead>
                            <tr className="title-table">
                                <td className="title-events"><strong>Fecha</strong></td>
                                <td className="title-events"><strong>Horario</strong></td>
                                <td className="title-events"><strong>Eventos</strong></td>
                                <td className="title-events"><strong>Participantes</strong></td>
                            </tr>
                        </thead>

                        <tbody>{/*RECORRO LA API Y MUESTRO LOS DATOS */}
                            {eventList.map((event) => {
                                return (
                                    <tr key={event.id}>
                                        <td className="events">{event.date}</td>
                                        <td className="events">{event.time}</td>
                                        <td className="events">{event.name}</td>
                                        <td className="events">{event.counselor.name} {event.counselor.lastname}</td>
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
                                (Date.parse(new Date()) - Date.parse('2022-10-13T21:06:00') < 2000 || active)
                                && <div className={`alert-event ${!active ? 'show-alert' : 'hidden-alert-event'}`}>
                                    <div className="cont-logo-event">
                                        <img src={Affirmation} alt="Icon Affirmation" />
                                    </div>

                                    <div>
                                        <p className="msg-alert-event">Encuentro agendado</p>
                                        <span className="msg-alert-orientador">El encuentro está agendado en la fecha que sugeriste, el orientado podrá confirmarlo o elegir otra fecha. Te notificaremos la confirmación o modificación</span>
                                    </div>

                                    <div className="cont-logo-event">
                                        <img className="iconDelete-alert" src={Delete} onClick={() => setActive(!active)} alt="Icon Delete" />
                                    </div>
                                </div>

                            }
                        </div>
                    )


                })}

                {/* 
                {
                    (Date.parse(new Date()) - Date.parse('2022-10-13T17:28:30') < 2000 || active)
                    && <div className={`alert-event ${!active ? 'show-alert' : 'hidden-alert-event'}`}>
                        <div className="cont-logo-event">
                            <img src={Affirmation} alt="icon de afirmacion" />
                        </div>

                        <div>
                            <p className="msg-alert-event">Encuentro agendado</p>
                            <span className="msg-alert-orientador">El encuentro está agendado en la fecha que sugeriste, el orientado podrá confirmarlo o elegir otra fecha. Te notificaremos la confirmación o modificación</span>
                        </div>

                        <div className="cont-logo-event">
                            <img className="iconDelete-alert" src={Delete} onClick={() => setActive(!active)} alt="icon de eliminar" />
                        </div>
                    </div>
                } */}



            </div>



        </>
    )
}

export default CallEvents;