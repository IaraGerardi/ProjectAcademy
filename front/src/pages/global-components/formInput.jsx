import Icon from "./Svg-icon";

function FormInput(props) {

    // Props de valores del input
    const { id, type, value, label, placeholder } = props
    // Props de clases para personalizar estilos
    const { inputClass, labelClass, containerClass } = props
    // Prop con el estado de la verificacion del input y prop con la funcion que guarda el valor del mismo
    const { verifyInput, onHandleChange } = props

    return (
        <div className={`flex flex-col h-28 ${containerClass}`}>
            <label className={labelClass} htmlFor={id}>{label}</label>
            {/* Si el valor del prop que tiene las validaciones no tiene ningun error el input tiene un borde gris, 
            si hay algun error cambia a rojo */}
            {type === "textarea" ?
                <textarea
                    className={`${inputClass} rounded-lg border w-3/4 lg:w-2/4 placeholder:pl-2
                    ${verifyInput !== null && verifyInput !== true ? "border-red-600" : "border-slate-300"}`}
                    rows="4" cols="40" id={id} name={id} onChange={onHandleChange} placeholder={placeholder}
                />
                : <input
                    value={value} id={id} name={id} type={type} onChange={onHandleChange} placeholder={placeholder}
                    className={`${inputClass} relative bottom-2
                    ${verifyInput !== null && verifyInput !== true ? "border border-solid border-red-600" : "border border-slate-300"}`}
                />
            }
            {/* Si el input no tiene ningun error no se muestra nada, 
            si hay algun error se renderiza el div con el mensaje de error y un icono */}
            {verifyInput !== null && verifyInput !== true ?
                <div className="flex items-center relative bottom-3 ml-2.5">
                    <Icon
                        classname="w-2.5 h-2.5 m-1.5 fill-red-600"
                        type="exclamationMark"
                        width="24" height="24" />
                    <span className="text-red-600 text-sm">{verifyInput}</span>
                </div>
                : null
            }
        </div>
    )
}

export default FormInput;