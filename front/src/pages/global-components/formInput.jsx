import Icon from "./Svg-icon";

function FormInput(props) {
    // Props de valores del input
    const { id, type, label, placeholder } = props
    // Prop con el estado de la verificacion del input y prop con la funcion que guarda el valor del mismo
    const { verifyInput, handleChange } = props

    return (
        <>
            <label className="p-2.5 items-center" htmlFor={id}>{label}</label>
            {/* Si el valor del prop que tiene las validaciones no tiene ningun error el input tiene un borde gris, 
            si hay algun error cambia a rojo*/}
            <input className={`w-80 ${verifyInput !== null && verifyInput !== true ?
                "border border-solid border-red-600"
                : "border border-slate-300"}`}
                id={id} name={id} type={type}
                onChange={handleChange} placeholder={placeholder} />
            {/* Si el input no tiene ningun error no se muestra nada, 
            si hay algun error se renderiza el div con el mensaje de error y un icono */}
            {verifyInput !== null && verifyInput !== true ?
                <div className="flex ml-2.5">
                    <Icon
                        classname="w-3.5 h-3.5 m-1.5 fill-red-600"
                        type="exclamationMark"
                        width="24" height="24" />
                    <span className="text-red-600">{verifyInput}</span>
                </div>
                : null
            }
        </>
    )
}

export default FormInput;