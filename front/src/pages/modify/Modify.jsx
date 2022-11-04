import React from "react";
//IMPORTACION DE HEADER Y SIDEBAR
import { Sidebar } from "../sidebar-header/components/Sidebar";
import HeaderInicio from "../sidebar-header/components/HeaderInicio"
//IMPORTACION DE ESTADOS, RUTAS Y AXIOS
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
//IMPORTACION DE SVG
import Affirmation from "../StudentsScreen/img/affirmation.svg"
import Delete from "../StudentsScreen/img/delete.svg"
//IMPORTACION DE ESTILOS
import "../Assign/assign.css"
import "../StudentsScreen/componentes-nuevoOrientado/alert.css"

function Modify() {
    const [oriented, setOriented] = useState([]);
    const [counselor, setCounselor] = useState([]);
    const [valueCounselor, setValueCounselor] = useState();
    const [active, setActive] = useState(false);
    const { id } = useParams();


    // `${process.env.REACT_APP_BASE_URL}/oriented/paginated?page=0&size=1000&order=DESC`

    const UriAsiggned = `${process.env.REACT_APP_BASE_URL}/oriented/${id}/counselorToOriented`;
    /*Hay que enviar los datos a esa URL*/


    useEffect(() => {
        const getOriented = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/oriented/paginated?page=0&size=1000`, { withCredentials: true });
                setOriented(res.data.info.categories); /* LLama Orientados */
            } catch (error) {
                console.log(error);
            }
        };
        getOriented();
    }, []);


    useEffect(() => {
        const getCounselor = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/counselor`, { withCredentials: true });
                setCounselor(res.data.info); /* LLama Orientadores */

            } catch (error) {
                console.log(error);
            }
        };
        getCounselor();
    }, []);

    // Opciones para el select
    const options = counselor?.map(counselor => ({
        label: `${counselor.name} ${counselor.lastname}`,
        value: counselor.id, name: "counselor", id: "counselor"
    })
    )

    /*Captura el valor (abajo le paso el valor del ID)*/
    const handleSelectChange = ({ value }) => {
        setValueCounselor(value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(UriAsiggned, { counselor: valueCounselor }, { withCredentials: true })
            .then((response) => {

                if (response.status === 200) {
                    window.location.reload();
                }

            })
    }

    const selectOriented = oriented?.map((oriented) => { /*Recorre la api y retorna la card del orientado*/
        const orientedCall = oriented
        /* Rompia porque orientado.id es un numero y los datos que trae useParams son strings, 
        parsee el id para poder poner que sea exactamente igual y que no salga un warning*/
        if (orientedCall.id === parseInt(id)) { //NO PONER TRIPLE IGUAL "=" PORQUE SE ROMPE 
            return (
                <div key={orientedCall.id} className="cont-student">

                    <div className="cont-image-profile">
                        <img
                            className="image-profile-student"
                            src={`http://localhost:8000/images/${orientedCall.photoProfile}`}
                            alt="Foto perfil orientado"
                        />
                    </div>

                    <hr />

                    <div className="cont-info-student">
                        <div>
                            <div>
                                <p className="name-student">{orientedCall.name} {orientedCall.lastname}</p>
                                <span className="text-orientado">Orientado</span>
                            </div>

                            <div>
                                <span className="text-gray">MAIL</span>
                                <p className="text-email">{orientedCall.email}</p>
                            </div>

                            <div>
                                <span className="text-gray">COLEGIO</span>
                                <p>{orientedCall.school}</p>
                            </div>

                        </div>

                        <div className="cont-number">
                            <span className="text-gray">TELÉFONO</span>
                            <p>{orientedCall.phone}</p>

                            <span className="text-gray">PROGRAMA</span>
                            <p>{oriented.program !== null ? oriented.program : "Sin definir"}</p>
                        </div>


                    </div>

                </div>
            )
        }

    });



    const selectCounselor = counselor.map((counselor) => {

        /*Recorre la api y retorna la card del orientador*/
        return (<div className="cont-student">
            <div className="cont-image-profile">

                <img className="image-profile-student"
                    src={require(`../../img-back/orientadores/${counselor.avatar}`)}
                    alt="Foto-perfil de Orientador" />

            </div>

            <hr />

            <div className="cont-info-student">

                <div>
                    <div>
                        <p className="name-student">{counselor.name} {counselor.lastname}</p>
                        <span className="text-orientado">Orientador/a</span>
                    </div>

                    <div>
                        <span className="text-gray">MAIL</span>
                        <p className="text-email">{counselor.email}</p>
                    </div>

                </div>

                <div className="cont-number">
                    <span className="text-gray">TELÉFONO</span>
                    <p>{counselor.phone}</p>
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

                            {selectOriented} {/*Llama a la card del orientado*/}

                            <p className="text-referent two"> Selección de un Orientador Referente  </p>

                            <span className="referent">Referente</span>

                            <>
                                <ul> {selectCounselor[oriented[id - 1]?.counselorId - 1]} </ul>


                                <Link to={`/orientados/${id}`}
                                    type="submit"
                                    className="text-center h-10 mt-10 p-2 bg-celesteValtech rounded-lg text-base text-white font-medium cursor-pointer" >
                                  Modificar orientador/a
                                </Link>

                                {/* <input
                                    readOnly={true}
                                    value="Modificar orientador/a"
                                    className="text-center h-10 mt-10 p-2 bg-celesteValtech rounded-lg text-base text-white font-medium cursor-pointer "
                                /> */}

                            </>



                            {oriented.map((orientedAlert) => {
                                const alertCall = orientedAlert
                                if (alertCall.id === parseInt(id)) {
                                    return (
                                        <div>
                                            {
                                                (Date.parse(new Date()) - Date.parse(`${orientedAlert.updatedAt}`) < 2000 || active) && <div className={`alert ${!active ? 'show-alert' : 'hidden-alert'}`}>
                                                    <img src={Affirmation} alt="icon de afirmacion" />
                                                    <div>
                                                        <p className="msg-alert">El Orientado fué asignado a su referente.</p>
                                                        <span className="msg-alert-counselor">Recibirá una notificación para que contacte al Orientador.</span>
                                                    </div>
                                                    <img className="iconDelete-alert" src={Delete} onClick={() => setActive(!active)} alt="icon de eliminar" />
                                                </div>

                                            }
                                        </div>
                                    )
                                }

                            })}

                        </div>

                    </div>

                </div>
            </>

        </div >
    )
}

export default Modify;