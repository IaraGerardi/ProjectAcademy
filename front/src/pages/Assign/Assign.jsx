import React from "react";
import { Sidebar } from "../sidebar-header/components/Sidebar";
import HeaderInicio from "../sidebar-header/components/HeaderInicio"
import "./assign.css"
import { useEffect, useState } from "react";
import axios from "axios";

function Assign() {
    const [orientado, setOrientado] = useState([]);
    const [orientadores, setOrientadores] = useState([]);



    useEffect(() => {
        const getOrientados = async () => {
            try {
                const res = await axios.get("http://localhost:8000/admin/orientados");
                setOrientado(res.data.slice(-1)); /* LLama 1 usuario */

            } catch (error) {
                console.log(error);
            }
        };
        getOrientados();
    }, []);





    useEffect(() => {
        const getOrientados = async () => {
            try {
                const res = await axios.get("http://localhost:8000/admin/orientados/:id/orientador");
                setOrientadores(res.data); /* LLama 1 usuario */
                console.log(res.data)
            } catch (error) {
                console.log(error);
            }
        };
        getOrientados();
    }, []);




    return (

        <div>
            <>
                <div className="container-P w-full flex"> {/*  containedor padre tamaño igual a app */}

                    <Sidebar /> {/* hijo 1 izquierdo sticky */}

                    <div className="container-derecho header-sa">{/*  hijo2 derecho  column */}
                        <HeaderInicio propNamePage="Orientados" />

                        <div className="p-10">

                            <p className="text-referent">Asignación de Orientador Referente</p>

                            <ul> {/*Llamado a la Api*/}
                                {orientado.length === 0 && <p>No se completo la búsqueda.</p>}
                                {orientado.map((usuario) => {
                                    return (

                                        <div className="cont-student">

                                            <div className="cont-image-profile">
                                                <img className="image-profile-student"
                                                    src={require(`../../img-back/orientados/${usuario.photoProfile}`)}
                                                    alt="Foto-perfil de Orientado" />
                                            </div>

                                            <hr />

                                            <div className="cont-info-student">

                                                <div>
                                                    <div>
                                                        <p className="name-student">{usuario.name} {usuario.lastname}</p>
                                                        <span className="text-orientado">Orientado</span>
                                                    </div>

                                                    <div>
                                                        <span className="text-gray">MAIL</span>
                                                        <p>{usuario.email}</p>
                                                    </div>

                                                    <div>
                                                        <span className="text-gray">COLEGIO</span>
                                                        <p>{usuario.school}</p>
                                                    </div>

                                                </div>

                                                <div className="numero">
                                                    <span className="text-gray">TELÉFONO</span>
                                                    <p>{usuario.phone}</p>

                                                    <span className="text-gray">PROGRAMA</span>
                                                    <p>{usuario.program}</p>
                                                </div>

                                            </div>

                                        </div>

                                    );
                                })}
                            </ul >
                            <p className="text-referent two"> Selección de un Orientador Referente  </p>


                            <label for="Seleccionar Orientador">Referente</label> <br />
                            <select className="select-teach" name="Seleccionar Orientador" id="">
                                <option value="Seleccionar Orientador">Seleccionar orientador</option>
                                {orientadores.length === 0 && <p>No se completo la búsqueda.</p>}
                                {orientadores.map((usuario) => (  
                                    <option key={usuario.id} value="Seleccionar Orientador">{usuario.name} {usuario.lastname}</option>
                                ))}
                            </select>

                        </div>

                    </div>

                </div>
            </>

        </div>
    )
}

export default Assign;