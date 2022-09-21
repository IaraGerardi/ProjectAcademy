import React from "react";
import { Sidebar } from "../sidebar-header/components/Sidebar";
import HeaderInicio from "../sidebar-header/components/HeaderInicio"
import "./assign.css"
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Select from "react-select";




function Assign() {
    const [orientado, setOrientado] = useState({});
    const [orientadores, setOrientadores] = useState([]);
    const Params = useParams();
    const idParams = Params.id; //Tiene que tener el mismo nombre que en la ruta  en este caso"id"



    useEffect(() => {
        const getOrientados = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/admin/orientados/${idParams}`);
                setOrientado(res.data); /* LLama 1 Orientado */
                console.log(res.data.photoProfile)
            } catch (error) {
                console.log(error);
            }
        };
        getOrientados();
    }, []);


    useEffect(() => {
        const getOrientadores = async () => {
            try {
                const res = await axios.get("http://localhost:8000/admin/orientados/:id/orientador");
                setOrientadores(res.data); /* LLama Orientadores */
                console.log(res.data)
            } catch (error) {
                console.log(error);
            }
        };
        getOrientadores();
    }, []);


    const [selectSuppliers, setSelectedSuppliers] = useState();


    const handleSelectChange = ({ value }) => {
        console.log(value)
        setSelectedSuppliers(value);
    }




    const selectOrientador = orientadores.map((orientador) => {
        return (<div className="cont-student">
            <div className="cont-image-profile">
                <img className="image-profile-student"
                    //  src={require(`../../img-back/orientadores${orientador.avatar}`)} 
                    alt="Foto-perfil de Orientado" />

            </div>

            <hr />

            <div className="cont-info-student">

                <div>
                    <div>
                        <p className="name-student">{orientador.name} {orientador.lastname}</p>
                        <span className="text-orientado">Orientado</span>
                    </div>

                    <div>
                        <span className="text-gray">MAIL</span>
                        <p>{orientador.email}</p>
                    </div>

                </div>

                <div className="numero">
                    <span className="text-gray">TELÉFONO</span>
                    <p>{orientador.phone}</p>
                </div>

            </div>

        </div>)
    });


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

                            <span>Referente</span>

                            <Select
                                className="selector-teacher"
                                // options={suppliers}
                                defaultValue={{ label: "Seleccionar Orientador", value: "default" }}
                                options={orientadores.map(orientador => ({ label: `${orientador.name} ${orientador.lastname}`, value: orientador.id })
                                )}
                                onChange={handleSelectChange}
                            />

                            {/*<h1>orientador: {selectSuppliers}</h1> */}



                            <ul>
                                {selectOrientador[selectSuppliers - 1]}
                            </ul>





                        </div>

                    </div>

                </div>
            </>

        </div>
    )
}

export default Assign;