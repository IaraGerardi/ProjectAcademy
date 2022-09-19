import { useEffect, useState } from "react";
import axios from "axios";
import "../call-students.css"
import buscador from "../../sidebar-header/icons/logo-buscador.svg"

function CallStudents() {

    const [orientados, setOrientados] = useState([]);
    const [tablaOrientados, setTablaOrientados] = useState([]);
    const [busqueda, setBusqueda] = useState("");


    useEffect(() => {
        const getOrientados = async () => {
            try {
                const res = await axios.get("http://localhost:8000/admin/orientados");
                setOrientados(res.data);
                setTablaOrientados(res.data)

                console.log(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        getOrientados();
    }, []);


    const handleChange = e => {
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }


    const filtrar = (terminoBusqueda) => {
        var resultadosBusqueda = tablaOrientados.filter((elemento) => {
            if (elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.lastname.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            ) {
                return elemento;
            }
        })
        setOrientados(resultadosBusqueda);
    }


    return (
        <>

            <div className="cont-search-orientado">
                <input
                    className="search-orientado"
                    type="text"
                    placeholder="Buscar orientado por nombre y apellido"
                    value={busqueda}
                    onChange={handleChange}
                />

                <img className="logo-buscador" src={buscador} alt="logo buscador" />
            </div>

            <div className="cont-students">

                <ul>
                    {orientados.length === 0 && <p>No se encontró la búsqueda.</p>}
                    {orientados.map((usuario) => {
                        return (
                            <div className="box-students" key={usuario.id} >

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
                            </div>

                        );
                    })}
                </ul >
            </div >
        </>
    );
}


export default CallStudents;
