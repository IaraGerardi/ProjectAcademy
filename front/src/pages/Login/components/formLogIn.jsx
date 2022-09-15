import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./inputForm";
import axios from "axios";

function FormLogIn() {
    const URI = "http://localhost:8000/login"
    const navigate = useNavigate();

    const [form, setForm] = useState({
        emailLog: null,
        passwordLog: null,
    })
    const [verifyEmail, setVerifyEmail] = useState(null)
    const [verifyPassword, setVerifyPassword] = useState(null)
    // const [verifyForm, setVerifyForm] = useState({
    //     emailLog: null,
    //     passwordLog: null,
    // })

    const verifyFunctionn = () => {
        // Verificaciones email, no puede estar vacio ni tener un formato incorrecto
        form.emailLog === null || form.emailLog === "" ? setVerifyEmail("El email no puede estar vacio") :
            /\S+@\S+\.\S+/.test(form.emailLog) === false ? setVerifyEmail("El email tiene un formato incorrecto") :
                setVerifyEmail(true);
        // Verificaciones password, no se puede enviar vacio ni con menos de 6 caracteres
        form.passwordLog == null || form.passwordLog === "" ? setVerifyPassword("La contraseña no puede estar vacia") :
        form.passwordLog.length < 6 ? setVerifyPassword("La contraseña debe tener mas de 6 caracteres")
            : setVerifyPassword(null);
    }
    /*const verifyLogIn = (id) => {
        form[id] === null || form[id] === "" ? setVerifyForm({
            ...verifyForm,
            [id]: "El campo no puede estar vacio",
        }) :
            id === "emailLog" && (/\S+@\S+\.\S+/.test(form.emailLog) === false) ? setVerifyForm({
                ...verifyForm,
                emailLog: "El email tiene un formato incorrecto",
            }) :
                setVerifyForm({
                    ...verifyForm,
                    [id]: true
                })
    }*/

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value,
        })
    }

    /*function verifyFunction() {
        verifyLogIn("emailLog");
        verifyLogIn("passwordLog");
    }*/

    const handleSubmit = async (e) => {
        e.preventDefault();
        verifyFunctionn(); // Lo ejecuta para ver si no hay errores y corta la funcion, cuando no hay errores (despues de que si los haya habido) desaparece el error peeeero no ejecuta el resto
        /* if (verifyForm.emailLog === true && verifyForm.passwordLog === true) {
             await axios.post(`${URI}`, form, { withCredentials: true })
                 .then((response) => {
                     console.log(response)
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
         }*/
    }

    console.log(form);
    // console.log(verifyForm);

    return (
        <form className="flex flex-col" method="POST" onSubmit={handleSubmit}>
            <Input
                id="emailLog" type="email" label="Email" placeholder="Ingresa tu email"
                verifyInput={verifyEmail} handleChange={handleChange} />
            <Input
                id="passwordLog" type="password" label="Contraseña" placeholder="Ingresa tu contraseña"
                verifyInput={verifyPassword} handleChange={handleChange} />
            <input type="submit" value="Ingresar" className="w-44 inputLogIn" />
        </form>
    );
}

export default FormLogIn;