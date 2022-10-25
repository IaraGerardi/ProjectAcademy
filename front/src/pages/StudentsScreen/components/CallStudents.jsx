import { useEffect, useState } from "react";
import axios from "axios";
import "../call-students.css"
import searchBar from "../../sidebar-header/icons/logo-buscador.svg"
import { Link } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
import "../oriented.css"

function CallStudents() {


    const [oriented, setOriented] = useState([]);
    const [tableOriented, setTableOriented] = useState([]);
    const [loadingCallStudents, setLoadingCallStudents] = useState(true)

    const [search, setSearch] = useState("");
    //LE PASO UN ESTADO VACIO AL INPUT SEARCH



    useEffect(() => {
        {/*Pedido a la Api*/ }
        const getoriented = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/oriented/paginated?page=0&size=1000&order=ASC`, { withCredentials: true }
                ); // EN LA URI PONGO PAGE 0 Y UN SIZE DE 1000 QUE SIRVE PARA TRAER POR EL MOMENTO MIL USUARIOS
                setOriented(res.data.categories);
                setTableOriented(res.data.categories)
                setLoadingCallStudents(false)
            } catch (error) {
                console.log(error);
            }
        };
        getoriented();
    }, []);




    const handleChange = e => {
        setSearch(e.target.value);
        filter(e.target.value);
    }


    const filter = (searchTerm) => {
        {/*Filtra el nombre o apellido del orientado*/ }
        var searchResult = tableOriented.filter((element) => {
            if (element.name.toString().toLowerCase().includes(searchTerm.toLowerCase())
                || element.lastname.toString().toLowerCase().includes(searchTerm.toLowerCase())
            ) {
                return element;
            }
        })
        setOriented(searchResult);
    }

    return (
        <>
            <div className="container-search">
                <div className="cont-search-oriented">
                    <input
                        className="search-oriented"
                        type="text"
                        placeholder="Buscar orientado por nombre y apellido"
                        value={search}
                        onChange={handleChange}
                    />
                    <img className="logo-search" src={searchBar} alt="logo buscador" />
                </div> {/*Input Buscador*/}
            </div>

            <div className="cont-students flex justify-center">
                {
                    loadingCallStudents ?
                        <div className='flex justify-center mt-7'> <BeatLoader
                            color="#1EC5BB"
                            cssOverride={{}}

                            margin={5}
                            size={10}
                            speedMultiplier={1}
                        /></div>
                        :
                        <ul className="list-student"> {/*Llamado a la Api*/}
                            {oriented?.length === 0 && <p>No se encontró la búsqueda.</p>}
                            {oriented?.map((usuario) => {
                                return (



                                    <li className="box-students" key={usuario.id} >
                                        <Link to={`/orientados/StudentInfo/${usuario.id}`}>
                                            <div className="content-students">

                                                <img
                                                    className="ImgUsers"
                                                    src={require(`../../../img-back/orientados/${usuario.photoProfile}`)}
                                                    alt="Foto perfil orientado"
                                                />
                                                <div>

                                                    <h4>
                                                        {usuario.name} {usuario.lastname}
                                                    </h4>
                                                    <p>{usuario.school}</p>
                                                </div>

                                            </div>
                                        </Link>
                                    </li>

                                );
                            })}
                        </ul >


                }

            </div >
        </>
    );
}


export default CallStudents;
