import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

import LogoPerfil from "../icons/logo-perfil.svg"
import cerrarSesion from "../icons/logo-cerrar.svg"


function HeaderInicio() {

    const [infoAdmin, setInfoAdmin] = useState([]);
    const [active, setActive] = useState(false);

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


                <img className="usuario-inicio" src={require(`../img-back/admins/${parseado.avatar}`)} onClick={() => setActive(!active)} />

            </div>



            <div className={`sesion ${active ? 'mostrar-sesion' : 'ocultar-sesion'}`}>
                <Link to="/profile"><img  className="logo-perfil" src={LogoPerfil}/> Mi perfil</Link>
                <Link to="/"><img className="logo-perfil"  src={cerrarSesion}/> Cerrar Sesión</Link>
            </div>

        </div>

    )

}

export default HeaderInicio;

