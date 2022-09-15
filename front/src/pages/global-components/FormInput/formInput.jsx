import Icon from "../Svg-icon";
import "./formInput.css"

function FormInput(props) {

    const { id, type, label, placeholder } = props
    const { verifyInput, handleChange } = props

    return (
        <>
            <label className="p-2.5 items-center" htmlFor={id}>{label}</label>
            <input className={`w-80 ${verifyInput !== null && verifyInput !== true ? "border border-solid border-red-600" : "formInput"}`}
                id={id}
                name={id}
                type={type}
                onChange={handleChange}
                placeholder={placeholder} />
            {verifyInput !== null && verifyInput !== true ?
                <div className="flex ml-2.5">
                    <Icon
                        classname="errorFormInput fill-red-600"
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