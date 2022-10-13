


function Boton({ NombreBtn, ClaseBtn, Evento }) {
    return (
        <button className={ClaseBtn} onClick={Evento}>{NombreBtn}</button>
    )
}

export default Boton;