import Icon from "./Svg-icon";

function FormInput(props) {

    const { verifyInput, redBorder, onHandleChange } = props
    const { inputClass, labelClass, containerClass, errorClass } = props
    const { id, type, value, label, placeholder, col, rows, autofill } = props


    return (
        <div className={`flex flex-col  ${containerClass}`}>
            <label className={labelClass} htmlFor={id}>{label}</label>
            {type === "textarea" ?
                <textarea
                    id={id}
                    name={id}
                    cols={col}
                    rows={rows}
                    autoComplete={autofill ? "on" : "off"}
                    placeholder={placeholder}
                    onChange={onHandleChange}
                    className={`${inputClass} rounded-lg border placeholder:pl-2 "border-slate-300"`}
                />
                : <input
                    id={id}
                    name={id}
                    type={type}
                    value={value}
                    autoComplete={autofill ? "on" : "off"}
                    onChange={onHandleChange}
                    placeholder={placeholder}
                    className={`${inputClass} 
                    ${redBorder && verifyInput !== null && verifyInput !== true ?
                            "border border-solid border-red-600" : "border border-slate-300"}
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500`}
                />
            }
            {verifyInput !== null && verifyInput !== true ?
                <div className={`flex items-center relative bottom-3 py-2 ${errorClass}`}>
                    <Icon
                        width="24" height="24"
                        type="exclamationMark"
                        classname="w-3.5 h-3.5 mr-1 fill-red-600" />
                    <span className="text-red-600 text-xs ">{verifyInput}</span>
                </div>
                : null
            }
        </div>
    )
}

export default FormInput;