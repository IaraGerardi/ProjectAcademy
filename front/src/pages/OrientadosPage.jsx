import HeaderInicio from "../Header-MenuLateral/HeaderInicio";
import Sidebar from "../Header-MenuLateral/Sidebar";
import "../css/orientados.css"
import buscador from "../icons/logo-buscador.svg"

function Orientados() {
    return (
        <div>
            <Sidebar />
            <HeaderInicio />


            <div className="cont-ingresar-orientado">
                <p className="text-new-user">Nuevos usuarios a orientar</p>

                <button className="btn-ingresar-orientado">Ingresar orientado</button>
            </div>


            <input className="buscador-orientado" type="text" placeholder="Buscar orientado por nombre y apellido" />

            <img className="logo-buscador" src={buscador} alt="logo buscador" />




        </div >
    );
}

export default Orientados;
