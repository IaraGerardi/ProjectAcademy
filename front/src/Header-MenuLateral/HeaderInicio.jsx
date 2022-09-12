import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";


function HeaderInicio() {

    const [infoAdmin, setInfoAdmin] = useState([]);

    const usuario = localStorage.getItem('usuario')
    const parseado = JSON.parse(usuario)

    useEffect(() => {
        const getAdmin = async () => {
            try {
                const resInfoAdmin = await axios.get(`http://localhost:8000/admin/profile/${usuario.id}`);
                setInfoAdmin(resInfoAdmin.data);
                console.log(usuario);
                console.log(parseado)
            } catch (error) {
                console.log(error);
            }
        };
        getAdmin();
    }, []);

    return (
        <div className='header-inicio'>


            <div className='header-inicio'>


                <p className='Title-inicio'>Bienvenido {parseado.name}</p>

                <img className="usuario-inicio" src={require(`../img-back/admins/${parseado.avatar}`)} />

            </div>

        </div>

        // <div className='header-inicio'>
        //     <li></li>

        //     <p className='Title-inicio'>Bienvenido {resPhotoAdmin.name}</p>

        //     <img className="usuario-inicio" src={require(`../img-back/orientados/${resPhotoAdmin[1]}`)} alt="Foto perfil admin" /> 

        // </div>

    )

}

export default HeaderInicio;