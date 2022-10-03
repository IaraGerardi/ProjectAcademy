import React from "react";
import { useState, useEffect } from "react";
import RowLeft from "./img/left.svg"
import RowRight from "./img/right.svg"
import Delete from "./img/delete.svg"
import axios from 'axios';
//IMPORTACION DE SVG

import "./call-events.css" //IMPORTACION DE CSS

function CallEvents({ events }) { 
    // Recibe eventos como prop

    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(2);
    const [eventList, setEventList] = useState(events);

    console.log("events prop:", events)

    // Cambio minimo y maximo de eventos que se muestran
    const prevPage = () => { setOffset(offset - 2); setLimit(limit - 2); }
    const nextPage = () => { setOffset(offset + 2); setLimit(limit + 2); }

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
        const deleteEvent = async(id) => {
           await axios.delete(`http://localhost:8000/admin/${id}/deleteEvent/`)
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
                            {/* Si el valor del que arranca el paginado es menor a cero deshabilito */}
                            <img onClick={offset > 0 ? prevPage : null} className={`btn-row ${offset > 0 ? null : "opacity-50"}`} src={RowLeft} alt="" />
                            <img onClick={nextPage} className="btn-row" src={RowRight} alt="" />
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

                        <tbody> {/*RECORRO LA API Y MUESTRO LOS DATOS */}
                            {eventList.map((event) => {
                                return (
                                    <tr key={event.id}>
                                        <td className="events">{event.date}</td>
                                        <td className="events">{event.time}</td>
                                        <td className="events">{event.name}</td>
                                        <td className="events">{event.Orientados[0].name} {event.Orientados[0].lastname}</td>
                                        <td className="events left"><img onClick={ ()=> deleteEvent(event.id)} className="icon-delete" src={Delete} alt="icon de tacho de basura" /></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

            </div>



        </>
    )
}

export default CallEvents;