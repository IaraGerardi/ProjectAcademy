import React from "react";
import { Sidebar } from "../sidebar-header/components/Sidebar";
import HeaderInicio from "../sidebar-header/components/HeaderInicio"
import "./assign.css"
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


function Assign() {
    const [orientado, setOrientado] = useState({});
    const [orientadores, setOrientadores] = useState([]);
    const Params = useParams();
    const idParams = Params.id; //Tiene que tener el mismo nombre que en la ruta  en este caso"id"



    useEffect(() => {
        const getOrientados = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/admin/orientados/${idParams}`);
                setOrientado(res.data); /* LLama 1 usuario */

            } catch (error) {
                console.log(error);
            }
        };
        getOrientados();
    },);


    useEffect(() => {
        const getOrientados = async () => {
            try {
                const res = await axios.get("http://localhost:8000/admin/orientados/:id/orientador");
                setOrientadores(res.data);
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

                            <div className="cont-student">

                                <div className="cont-image-profile">
                                    <img className="image-profile-student"
                                        //  src={require(`../../img-back/orientados/${orientado.photoProfile}`)} 
                                        alt="Foto-perfil de Orientado" />
                                </div>

                                <hr />

                                <div className="cont-info-student">

                                    <div>
                                        <div>
                                            <p className="name-student">{orientado.name} {orientado.lastname}</p>
                                            <span className="text-orientado">Orientado</span>
                                        </div>

                                        <div>
                                            <span className="text-gray">MAIL</span>
                                            <p>{orientado.email}</p>
                                        </div>

                                        <div>
                                            <span className="text-gray">COLEGIO</span>
                                            <p>{orientado.school}</p>
                                        </div>

                                    </div>

                                    <div className="numero">
                                        <span className="text-gray">TELÉFONO</span>
                                        <p>{orientado.phone}</p>

                                        <span className="text-gray">PROGRAMA</span>
                                        <p>{orientado.program}</p>
                                    </div>

                                </div>

                            </div> 


                            <p className="text-referent two"> Selección de un Orientador Referente  </p>


                            <label for="Seleccionar Orientador">Referente</label> <br />
                            <select className="select-teach" name="orientador" id="orientador">
                                <option value="Seleccionar Orientador">Seleccionar orientador</option>

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