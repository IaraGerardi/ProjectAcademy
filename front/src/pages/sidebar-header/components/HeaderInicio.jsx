import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"

import LogoPerfil from "../icons/logo-perfil.svg"
import cerrarSesion from "../icons/logo-cerrar.svg"

import "../style/header.css"
import { types } from "../../../store/StoreReducer";
import { useContext } from "react";
import StoreContext from "../../../store/StoreProvider";


function HeaderInicio({ propNamePage }) {
    const [store, dispatch] = useContext(StoreContext)

    const [infoAdmin, setInfoAdmin] = useState([]);
    const [active, setActive] = useState(false);
    const navigate = useNavigate()
    const usuariols = localStorage.getItem('usuario')
    const usuario = JSON.parse(usuariols)

    useEffect(() => {
        const getAdmin = async () => {
            try {
                const resInfoAdmin = await axios.get(`${process.env.REACT_APP_BASE_URL}/admins/${usuario.id}`, { withCredentials: true });
                setInfoAdmin(resInfoAdmin.data.info);
            } catch (err) {
                if (err.response.data.message === 'Not logged') {
                    localStorage.removeItem("usuario")
                    navigate('/LogIn')
                }
            }
        };
        getAdmin();
    }, []);




    const getLogout = async () => {
        try {
            const resLogout = await axios.get(`${process.env.REACT_APP_BASE_URL}/logout`, { withCredentials: true });
            setInfoAdmin(resLogout.data);

            localStorage.removeItem("usuario")
            dispatch({ type: types.authLogout })
            /*  navigate('/login') */
        } catch (error) {
            // console.log(error);
        }
    };




    return (
        <>


            <div className='boxMainHeader '>
                <p className='p-header'>
                    {propNamePage === "Bienvenido/a" ? `${propNamePage} ${usuario.name}` : propNamePage}</p>

                <div>
                    <img className="img-header cursor-pointer" src={require(`../../../img-back/admins/${usuario.avatar}`)} onClick={() => setActive(!active)} alt={usuario.name} />

                    <div className={`sesion ${active ? 'mostrar-sesion' : 'ocultar-sesion'}`}>
                        <Link to="/profile" className="p-2"><img className="logo-profile" src={LogoPerfil} alt='icon-profile' /> Mi perfil</Link>

                        <Link to="/"><img className="logo-profile" src={cerrarSesion} alt='icon-logout' /><button onClick={() => { getLogout() }}>Cerrar sesión</button></Link>

                    </div>
                </div>

            </div>
        </>


    )

}

export default HeaderInicio;