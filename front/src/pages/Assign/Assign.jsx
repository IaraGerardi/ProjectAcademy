import React from "react";
import { Sidebar } from "../sidebar-header/components/Sidebar";
import HeaderInicio from "../sidebar-header/components/HeaderInicio"
import "./assign.css"
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Select from "react-select";
// import Boton from "./components/boton";




function Assign() {
    const [orientado, setOrientado] = useState([]);
    const [orientadores, setOrientadores] = useState([]);
    const Params = useParams();
    const idParams = Params.id; //Tiene que tener el mismo nombre que en la ruta  en este caso"id"
    let { id } = useParams();

    const putUri = `http://localhost:8000/admin/orientados/${id}/orientadorToOrientado`;

    const [orientadorId, setOrientadoId] = useState()



    useEffect(() => {
        const getOrientados = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/admin/orientados`);
                setOrientado(res.data); /* LLama 1 Orientado */
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
                const res = await axios.get("http://localhost:8000/admin/orientadores");
                setOrientadores(res.data); /* LLama Orientadores */

            } catch (error) {
                console.log(error);
            }
        };
        getOrientadores();
    }, []);


    const [valorOrientador, setValorOrientador] = useState();

    /*Captura el valor (abajo le paso el valor del ID)*/
    const handleSelectChange = ({ value }) => {

        console.log(value)
        setValorOrientador(value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(`ID del orientador capturado ${orientadorId}`)
        await axios.put(putUri, { orientador: orientadorId }) //"orientador:" es el req.body que tiene los datos y "orientadorId" son los datos
            .then((response) => {
                console.log(response.data)
            })
    }


    // ${idParams}



    const selectOrientado = orientado.map((orientado) => {
        const orientadoCall = orientado
        if(orientadoCall.id == idParams) { //NO PONER TRIPLE IGUAL "=" PORQUE SE ROMPE
            return (
                <div key={orientadoCall.id} className="cont-student">
    
                    <div className="cont-image-profile">
                        <img
                            className="image-profile-student"
                            src={require(`../../img-back/orientados/${orientadoCall.photoProfile}`)}
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
                            <p>Literatura</p>
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

                            <p className="text-referent">Asignación de Orientador Referente</p>


                            {selectOrientado}

                



                            <p className="text-referent two"> Selección de un Orientador Referente  </p>

                            <span>Referente</span>

                            {/*Input selector*/}


                            {/*<h1>orientador: {valorOrientador}</h1> */}


                            < form method="PUT" onSubmit={handleSubmit} >

                                <Select
                                    inputId="orientador"
                                    Name="orientador"
                                    className="selector-teacher"
                                    defaultValue={{ label: "Seleccionar Orientador", value: "defaul" }}
                                    options={orientadores.map(orientador => ({ label: `${orientador.name} ${orientador.lastname}`, value: orientador.id, name: "orientador", id: "orientador" })
                                    )}
                                    onChange={handleSelectChange}
                                // onChange={(e)=> setOrientadoId(e.target.value)}
                                />

                                <ul>
                                    {selectOrientador[valorOrientador - 1]} {/*LLama a la card del orientador y le pasa el valor del id -1*/}
                                </ul>


                                {/*Botón reutilizable para enviar y modificar orientador*/}

                                < input
                                    type="submit"
                                    value="Asignar orientador/a"
                                    className="btn-asignar" />

                                {/* <Boton
                                    Evento=""
                                    ClaseBtn="btn-asignar"
                                    NombreBtn="Asignar orientador/a"
                                /> */}
                            </form>

                        </div>

                    </div>

                </div>
            </>

        </div >
    )
}

export default Assign;