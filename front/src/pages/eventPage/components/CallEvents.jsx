import React from "react";
import "./call-events.css"
import Delete from "./img/delete.svg"
import { useState, useEffect } from "react";
import axios from "axios";



function CallEvents() {


    const [event, setEvent] = useState();


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


    useEffect(() => {
        function slice() {
            const arrayNuevo = event.slice(2)
            setEvent(arrayNuevo)
        }
        slice()
    }, []);

    return (
        // TABLA DE EVENTOS
        <>
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

                        <tbody>
                            {event?.map((event) => {
                                return (
                                    <tr>
                                        <td className="events">{event.date}</td>
                                        <td className="events">{event.duration}</td>
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