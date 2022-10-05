import React from "react";
import { Sidebar } from "../sidebar-header/components/Sidebar";
import HeaderInicio from "../sidebar-header/components/HeaderInicio"
import "./assign.css"
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Select from "react-select";
import Affirmation from "../StudentsScreen/img/affirmation.svg"
import Delete from "../StudentsScreen/img/delete.svg"

function Assign() {
    const [orientado, setOrientado] = useState([]);
    const [orientadores, setOrientadores] = useState([]);
    const [valorOrientador, setValorOrientador] = useState();
    const [active, setActive] = useState(false);
    const { id } = useParams();

    const navigate = useNavigate();


    const URI = `http://localhost:8000/admin/orientados/${id}/orientadorToOrientado`;
    /*Hay que enviar los datos a esa URL*/

    useEffect(() => {
        const getOrientados = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/admin/orientados`, { withCredentials: true });
                setOrientado(res.data); /* LLama Orientados */
                console.log(res.data)
            } catch (error) {
                console.log(error);
            }
        };
        getOrientados();
    }, []);


    useEffect(() => {
        const getOrientadores = async () => {
            try {
                const res = await axios.get("http://localhost:8000/admin/orientadores", { withCredentials: true });
                setOrientadores(res.data); /* LLama Orientadores */

            } catch (error) {
                console.log(error);
            }
        };
        getOrientadores();
    }, []);

    // Opciones para el select
    const options = orientadores?.map(orientador => ({
        label: `${orientador.name} ${orientador.lastname}`,
        value: orientador.id, name: "orientador", id: "orientador"
    })
    )

    /*Captura el valor (abajo le paso el valor del ID)*/
    const handleSelectChange = ({ value }) => {
        setValorOrientador(value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(URI, { orientador: valorOrientador }, { withCredentials: true })
            .then((response) => {

                if (response.status == 200) {
                    // setActive(!active);
                    window.location.reload();
                }

            })
    }

    const selectOrientado = orientado?.map((orientado) => { /*Recorre la api y retorna la card del orientado*/
        const orientadoCall = orientado
        /* Rompia porque orientado.id es un numero y los datos que trae useParams son strings, 
        parsee el id para poder poner que sea exactamente igual y que no salga un warning*/
        if (orientadoCall.id === parseInt(id)) { //NO PONER TRIPLE IGUAL "=" PORQUE SE ROMPE 
            return (
                <div key={orientadoCall.id} className="cont-student">

                    <div className="cont-image-profile">
                        <img
                            className="image-profile-student"
                            src={require(`../../img-back/orientados/${orientado.photoProfile}`)}
                            alt="Foto perfil orientado"
                        />
                    </div>

                    <hr />

                    <div className="cont-info-student">
                        <div>
                            <div>
                                <p className="name-student">{orientadoCall.name} {orientadoCall.lastname}</p>
                                <span className="text-orientado">Orientado</span>
                            </div>

                            <div>
                                <span className="text-gray">MAIL</span>
                                <p className="text-email">{orientadoCall.email}</p>
                            </div>

                            <div>
                                <span className="text-gray">COLEGIO</span>
                                <p>{orientadoCall.school}</p>
                            </div>

                        </div>

                        <div className="cont-number">
                            <span className="text-gray">TELÉFONO</span>
                            <p>{orientadoCall.phone}</p>

                            <span className="text-gray">PROGRAMA</span>
                            <p>{orientado.program !== null ? orientado.program : "Sin definir"}</p>
                        </div>

                    </div>

                </div>
            )
        }

    });




    const selectOrientador = orientadores.map((orientador) => {

        /*Recorre la api y retorna la card del orientador*/
        return (<div className="cont-student">
            <div className="cont-image-profile">

                <img className="image-profile-student"
                    src={require(`../../img-back/orientadores/${orientador.avatar}`)}
                    alt="Foto-perfil de Orientador" />

            </div>

            <hr />

            <div className="cont-info-student">

                <div>
                    <div>
                        <p className="name-student">{orientador.name} {orientador.lastname}</p>
                        <span className="text-orientado">Orientador/a</span>
                    </div>

                    <div>
                        <span className="text-gray">MAIL</span>
                        <p>{orientador.email}</p>
                    </div>

                </div>

                <div className="cont-number">
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

                            <p className="text-referent">Asignación de Orientado a un Orientador Referente</p>

                            {selectOrientado} {/*Llama a la card del orientado*/}

                            <p className="text-referent two"> Selección de un Orientador Referente  </p>

                            <span className="referent">Referente</span>

                            {/*Input selector*/}
                            {orientado[id - 1]?.OrientadoreId === null ?
                                < form onSubmit={handleSubmit} >
                                    {/* Al select le paso como opciones un array llamado options que declaro afuera del return,
                                tiene una funcion onChange que cambia valorOrientador, y en base a ese estado recorre options
                                y define como valor el indice de options en el que la propiedad value coincida con el valor actual
                                del estado valorOrientador*/}
                                    <Select
                                        Name="orientador"
                                        options={options}
                                        inputId="orientador"
                                        onChange={handleSelectChange}
                                        placeholder="Select Option" className="selector-teacher"
                                        // styles={customStyles}
                                        value={options.filter((obj) => obj.value === valorOrientador)}
                                        defaultValue={{ label: "Seleccionar Orientador", value: "default" }}
                                    />

                                    <ul>
                                        {/*LLama a la card del orientador y le pasa el valor del id -1*/}
                                        {selectOrientador[valorOrientador - 1]}
                                    </ul>

                                    {/*Botón reutilizable para enviar y modificar orientador*/}

                                    < input
                                        type="submit"
                                        value={`Asignar Orientador/a`}
                                        className="btn-asignar"
                                    />




                                    {/* <Boton
                                    Evento=""
                                    ClaseBtn="btn-asignar"
                                    NombreBtn="Asignar orientador/a"
                                /> */}

                                </form> :
                                <>
                                    <ul> {selectOrientador[orientado[id - 1]?.OrientadoreId - 1]} </ul>
                                    <input
                                        readOnly={true}
                                        value="Modificar orientador/a"
                                        className="text-center h-10 mt-10 p-2 bg-celesteValtech rounded-lg text-base text-white font-medium "
                                    />

                                    <div className={`alert ${!active ? 'mostrar-alert' : 'ocultar-alert'}`}>
                                        <img src={Affirmation} alt="icon de afirmacion" />
                                        <div>
                                            <p className="msg-alert">El Orientado fué asignado a su referente.</p>

                                            <span className="msg-alert-orientador">Recibirá una notificación para que contacte al Orientador.</span>
                                        </div>
                                        <img className="iconDelete-alert" src={Delete} onClick={() => setActive(!active)} alt="icon de eliminar" />
                                    </div>
                                </>
                            }

                        </div>

                    </div>

                </div>
            </>

        </div >
    )
}

export default Assign;