import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../global-components/formInput";
import axios from "axios";
import { useEffect } from "react";

function FormLogIn() {
    const URI = "http://localhost:8000/login"
    const navigate = useNavigate();
    let isVerified = false;

    const [form, setForm] = useState({ emailLog: null, passwordLog: null, })
    const [verifyForm, setVerifyForm] = useState({ emailLog: null, passwordLog: null, })

    // Funcion para verificar inputs, se llama una vez por cada componente que necesite ser verificado
    const verifyInput = (id) => {
        form[id] === null || form[id] === "" ? setVerifyForm(prevVerifyForm => ({
            ...prevVerifyForm,
            [id]: "El campo no puede estar vacio",
        })) :
            id === "emailLog" && (/\S+@\S+\.\S+/.test(form.emailLog) === false) ? setVerifyForm(prevVerifyForm => ({
                ...prevVerifyForm,
                emailLog: "El email tiene un formato incorrecto",
            })) :
                setVerifyForm(prevVerifyForm => ({
                    ...prevVerifyForm,
                    [id]: true,
                }))
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value,
        })
    }

    function verifyLogIn() {
        verifyInput("emailLog");
        verifyInput("passwordLog");
    }

    // Metodo para verificar si el formulario esta validado, esta dentro de un useEffect para ver si soluciona lo comentado mas abajo en la funcion handleSubmit
    useEffect(() => {
        console.log("verifyForm en un useEffect:")
        console.log(verifyForm)
        isVerified = Object.values(verifyForm).every(value => {
            if (value === true) {
                return true;
            }
            return false;
        });
    }, [verifyForm])

    const handleSubmit = async (e) => {
        e.preventDefault();
        verifyLogIn();

        await axios.post(`${URI}`, form, { withCredentials: true })
            .then((response) => {
                console.log("verifyForm adentro del .then:")
                console.log(verifyForm)
                /*console.log("isVerified adentro del .then:")
                console.log(isVerified)*/
                if (response.data.si) {
                    localStorage.setItem("usuario", JSON.stringify(response.data.admin));
                    navigate('/inicio');
                    // En esta parte tengo problemas, tanto el estado como el isVerified tienen valores desactualizados dentro de la funcion, eso causa que si hay algun error tenga que hacer click dos veces en el boton submit para que el else if funcione
                } else if (isVerified) {
                    setVerifyForm({
                        ...verifyForm, [response.data.input]: response.data.alertMessage,
                    })
                }
            })
    }

    return (
        <form className="flex flex-col" method="POST" onSubmit={handleSubmit}>
            <FormInput
                id="emailLog" type="email" label="Email" placeholder="Ingresa tu email"
                verifyInput={verifyForm.emailLog} handleChange={handleChange} />
            <FormInput
                id="passwordLog" type="password" label="Contraseña" placeholder="Ingresa tu contraseña"
                verifyInput={verifyForm.passwordLog} handleChange={handleChange} />
            <input type="submit" value="Ingresar" className="w-44 inputLogIn" />
        </form>
    );
}

export default FormLogIn;



/* Version con el hook

function FormLogIn() {

    const URI = "http://localhost:8000/login"
    const navigate = useNavigate();
    const [form, setForm] = useState({emailLog: null, passwordLog: null, confirmPass: null})

    let verificationArgs = [{ inputValue: form.emailLog, payload: { id: "emailLog", type: "email" } },
    { inputValue: form.passwordLog, payload: { id: "passwordLog", type: "password" } }]

    let { verifyForm, verifyMessages } = useVerify(verificationArgs);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        verifyForm();
        console.log(isVerified)

         await axios.post(`${URI}`, form, { withCredentials: true })
            .then((response) => {
                console.log("verifyForm adentro del .then:")
                console.log(verifyForm)
                if (response.data.si) {
                    localStorage.setItem("usuario", JSON.stringify(response.data.admin));
                    navigate('/inicio');
                } else if (isVerified) {
                    // Aca tendria que hacer algo para poder mostrar los errores que trae el back, pero no se como lo haria, quiza con un estado local que complemente el de verifyMessages, y cambiar el condicional de verifyInput para que si verifyMenssage[id] es distinto a true pase el mensaje del back como prop
                    // Creo que eso es lo mejor y que menos codigo llevaria, lo unico que faltaria entonces es que el estado de las verificaciones del front este mejor actualizado
                }
            })
    }

    return (
        <form className="flex flex-col" method="POST" onSubmit={handleSubmit}>
            <FormInput
                id="emailLog" type="email" label="Email" placeholder="Ingresa tu email"
                verifyInput={verifyMessages.emailLog ? verifyMessages.emailLog : null} handleChange={handleChange} />
            <FormInput
                id="passwordLog" type="password" label="Contraseña" placeholder="Ingresa tu contraseña"
                verifyInput={verifyMessages.passwordLog ? verifyMessages.passwordLog : null} handleChange={handleChange} />
            <input type="submit" value="Ingresar" className="w-44 inputLogIn" />
        </form>
    );
}

export default FormLogIn;

*/