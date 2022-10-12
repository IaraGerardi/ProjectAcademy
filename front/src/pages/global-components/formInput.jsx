import Icon from "./Svg-icon";

function FormInput(props) {

    const { id, type, value, label, placeholder } = props
    const { inputClass, labelClass, containerClass } = props
    const { verifyInput, onHandleChange } = props

    return (
        <div className={`flex flex-col h-28 ${containerClass}`}>
            <label className={labelClass} htmlFor={id}>{label}</label>
            {type === "textarea" ?
                <textarea
                    className={`${inputClass} rounded-lg border w-3/4 lg:w-2/4 placeholder:pl-2
                    ${verifyInput !== null && verifyInput !== true ? "border-red-600" : "border-slate-300"}`}
                    rows="4" cols="40" id={id} name={id} onChange={onHandleChange} placeholder={placeholder}
                />
                : <input
                    value={value} id={id} name={id} type={type} onChange={onHandleChange} placeholder={placeholder}
                    className={`${inputClass} h-24
                    ${verifyInput !== null && verifyInput !== true ? "border border-solid border-red-600" : "border border-slate-300"}`}
                />
            }
            {verifyInput !== null && verifyInput !== true ?
                <div className="flex items-center relative bottom-3 py-2">
                    <Icon
                        classname="w-3.5 h-3.5 mr-1 fill-red-600"
                        type="exclamationMark"
                        width="24" height="24" />
                    <span className="text-red-600 text-xs ">{verifyInput}</span>
                </div>
                : null
            }
        </div>
    )
}

export default FormInput;