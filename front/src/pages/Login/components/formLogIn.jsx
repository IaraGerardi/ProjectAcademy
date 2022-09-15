import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../global-components/FormInput/formInput";
import axios from "axios";

function FormLogIn() {
    const URI = "http://localhost:8000/login"
    const navigate = useNavigate();

    const [form, setForm] = useState({
        emailLog: null,
        passwordLog: null,
    })
    const [verifyForm, setVerifyForm] = useState({
        emailLog: null,
        passwordLog: null,
    })

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
                    [id]: true
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        verifyLogIn(); // Lo ejecuta para ver si no hay errores y corta la funcion, cuando no hay errores (despues de que si los haya habido) desaparece el error peeeero no ejecuta el resto
        if (verifyForm.emailLog === true && verifyForm.passwordLog === true) {
            await axios.post(`${URI}`, form, { withCredentials: true })
                .then((response) => {
                    if (response.data.si) {
                        localStorage.setItem("usuario", JSON.stringify(response.data.admin));
                        navigate('/inicio')
                    } else {
                        setVerifyForm({
                            ...verifyForm,
                            [response.data.input]: response.data.alertMessage,
                        })
                    }
                })
        }
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