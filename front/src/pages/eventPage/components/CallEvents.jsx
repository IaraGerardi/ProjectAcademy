import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";


import RowLeft from "./img/left.svg"
import RowRight from "./img/right.svg"
import Delete from "./img/delete.svg"
//IMPORTACION DE SVG

import "./call-events.css" //IMPORTACION DE CSS







function CallEvents() { //LLAMADA DE EVENTOS DE LA API

    const [event, setEvent] = useState();

    // 
    useEffect(() => {
        const getEvent = async () => {
            try {
                const res = await axios.get("http://localhost:8000/admin/event");
                setEvent(res.data);
                console.log(res.data)
            } catch (error) {
                console.log(error)
            }
        };
        getEvent();
    }, []);

    return (
        // TABLA DE EVENTOS
        <>

     
            <div className="cont-pagination">
                <div>1-8 de 100</div>
                <div className="cont-btn-pagination">
                           {/*BOTONES DE LA PAGINACION*/}
                    <img className="btn-row" src={RowLeft} alt="" />
                    <img className="btn-row" src={RowRight} alt="" />
                </div>
            </div>



            <div className="table-events">
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
                            {event?.map((event) => {
                                return (
                                    <tr>
                                        <td className="events">{event.date}</td>
                                        <td className="events">{event.time}</td>
                                        <td className="events">{event.name}</td>
                                        <td className="events">{event.Orientados[0].name} {event.Orientados[0].lastname}</td>
                                        <td className="events left"><img className="icon-delete" src={Delete} alt="icon de tacho de basura" /></td>
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