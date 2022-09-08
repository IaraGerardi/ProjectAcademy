import HeaderInicio from "../Header-MenuLateral/HeaderInicio";
import Sidebar from "../Header-MenuLateral/Sidebar";
import "../css/orientados.css"

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





        </div>
    );
}

export default Orientados;
