import { useState } from "react";
import Icon from "../../global-components/Svg-icon";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function FormLogIn() {
    const [form, setForm] = useState({})
    const [verifyEmail, setVerifyEmail] = useState(null)
    const [verifyPassword, setVerifyPassword] = useState(null)

    const URI = "http://localhost:8000/login"
    const navigate = useNavigate();

    const verifyForm = () => {
        // verificaciones email, no se puede mandar vacio y tiene que estar con cierto formato
        form.emailLog == null || form.emailLog === "" ? setVerifyEmail("El email no puede estar vacio") :
            /\S+@\S+\.\S+/.test(form.emailLog) === false ? setVerifyEmail("El email tiene un formato incorrecto") :
                setVerifyEmail(null);
        // Verificaciones password, no se puede enviar vacio ni con menos de 6 caracteres
        form.passwordLog == null || form.passwordLog === "" ? setVerifyPassword("La contraseña no puede estar vacia") :
            form.passwordLog.length < 6 ? setVerifyPassword("La contraseña debe tener mas de 6 caracteres")
                : setVerifyPassword(null);
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        verifyForm();
        if (verifyEmail === null && verifyPassword === null) {
            await axios.post(`${URI}`, form, { withCredentials: true })
                .then((response) => {
                    console.log(response.data)
                    if (response.data.si) {
                        localStorage.setItem("usuario", JSON.stringify(response.data));
                        navigate('/inicio')
                    } else {
                        if (response.data.alertMessage === "Email incorrecto") {
                            setVerifyEmail("Email incorrecto")
                        } else if (response.data.alertMessage === "Password incorrecta") {
                            setVerifyPassword("Contraseña incorrecta")
                        }
                    }
                })
        }
    }

    return (
        <form method="POST" onSubmit={handleSubmit}>
            <label htmlFor="emailLog">Email</label>
            <input
                className={verifyEmail != null ? "errorInput" : "inputLogIn"}
                type="email"
                id="emailLog"
                name="emailLog"
                onChange={handleChange}
                placeholder="Ingresa tu email" />
            {verifyEmail != null ?
                <div className="errorContainer">
                    <Icon
                        classname="errorLogIn"
                        type="exclamationMark"
                        width="24" height="24" />
                    <span>{verifyEmail}</span>
                </div>
                : null
            }
            <label htmlFor='passwordLog'>Contraseña</label>
            <input
                className={verifyPassword != null ? "errorInput" : "inputLogIn"}
                type="password"
                id="passwordLog"
                name="passwordLog"
                onChange={handleChange}
                placeholder="Ingresa tu contraseña" />
            {verifyPassword != null ?
                <div className="errorContainer">
                    <Icon
                        classname="errorLogIn"
                        type="exclamationMark"
                        width="24" height="24" />
                    <span>{verifyPassword}</span>
                </div>
                : null
            }
            <input type="submit" value="Ingresar" className="inputLogIn" />
        </form>
    );
}

export default FormLogIn;