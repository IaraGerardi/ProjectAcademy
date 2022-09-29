import { useState } from "react";
import FormInput from "../../global-components/formInput";

function Prueba() {
    const [form, setForm] = useState({})
    const [localVerify, setLocalVerify] = useState({})

    const clearVerifications =()=>{
        setLocalVerify({})
    }

    const handleChange = (e)=>{
        if(/\d/.test(e.target.value)){
            setLocalVerify({
                ...localVerify,
                [e.target.id]: "El campo no puede tener numeros"
            })
            setTimeout(clearVerifications, 3000)
            return;
        } else if ((/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/).test(e.target.value)) {
            setLocalVerify({
                ...localVerify,
                [e.target.id]: "El campo no puede tener simbolos"
            })
            setTimeout(clearVerifications, 3000)
            return;
        } else if(/^\S*$/.test(e.target.value) === false){
            setLocalVerify({
                ...localVerify,
                [e.target.id]: "El campo no puede tener espacios"
            })
            setTimeout(clearVerifications, 3000)
            return;
        } else if(e.target.value.length > 5){
            setLocalVerify({
                ...localVerify,
                [e.target.id]: "El campo no puede tener mas de 5 caracteres"
            })
            setTimeout(clearVerifications, 3000)
            return;
        }

        setForm({
            ...form,
            [e.target.id]: e.target.value
        })
    }

    return (
        <>
            <FormInput
                handleChange={handleChange} value={form.text ? form.text : ""}
                inputClass="w-80" labelClass="p-2.5 items-center" containerClass="flex flex-col"
                id="text" type="text" label="Texto" placeholder="Ingresa texto"
                verifyInput={localVerify.text ? localVerify.text : null} />
        </>
    )
}

export default Prueba;