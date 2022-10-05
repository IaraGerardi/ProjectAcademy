import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../global-components/formInput";
import axios from "axios";
import useVerify from "../../../hooks/useVerify"
import verifications from "../../../Verify arguments/verifyLogIn.json";
import usePost from "../../../hooks/usePost";
//context
import { useContext } from "react";
import StoreContext from "../../../Store/StoreProvider";
import { types } from "../../../Store/StoreReducer"
import { useEffect } from "react";

/* import Context from "../../../context/Context"; */
/* import { useEffect } from "react"; */



function FormLogIn() {


    const [store, dispatch] = useContext(StoreContext)
    const { logged } = store;
    // console.log(logged)

    const URI = "http://localhost:8000/login"
    const navigate = useNavigate();

    const [form, setForm] = useState({ emailLog: null, passwordLog: null });
    const [backMessages, setBackMessages] = useState({ emailLog: null, passwordLog: null, });

    let formValues = [{ inputValue: form.emailLog }, { inputValue: form.passwordLog }]

    let { verifyForm, verifyMessages } = useVerify(formValues, verifications);
    let { postForm, setNull, error, success, backVerifications } = usePost(URI, form, verifications);

    useEffect(() => {
        setNull();
    }, [])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value,
        })
    }
    console.log(backMessages)
    const handleSubmit = async (e) => {
        e.preventDefault();
        verifyForm();
        await axios.post(`${URI}`, form, { withCredentials: true })
            .then((response) => {
                if (response.data.si) {
                    localStorage.setItem("usuario", JSON.stringify(response.data.admin));
                    dispatch({ type: types.authLogin })
                    navigate('/inicio');
                } else {
                    setBackMessages({
                        emailLog: null,
                        passwordLog: null,
                    })
                    setBackMessages(prevBackMessages => ({
                        ...prevBackMessages, [response.data.input]: response.data.alertMessage,
                    }))
                }
            })
    }

    return (
        <form className="flex flex-col" method="POST" onSubmit={handleSubmit}>
            <FormInput
                onHandleChange={handleChange}
                inputClass="w-80" labelClass="p-2.5 items-center" containerClass="flex flex-col w-96"
                id="emailLog" type="email" label="Email" placeholder="Ingresa tu email"
                verifyInput={verifyMessages.emailLog && verifyMessages.emailLog !== true
                    ? verifyMessages.emailLog : backVerifications.emailLog} />
            <FormInput
                onHandleChange={handleChange}
                inputClass="w-80" labelClass="p-2.5 items-center" containerClass="flex flex-col w-96"
                id="passwordLog" type="password" label="Contraseña" placeholder="Ingresa tu contraseña"
                verifyInput={verifyMessages.passwordLog && verifyMessages.passwordLog !== true
                    ? verifyMessages.passwordLog : backVerifications.passwordLog} />
            <input type="submit" value="Ingresar"
                className={`w-44 cursor-pointer border-none text-white text-base font-medium bg-celesteValtech`} />

        </form>
    );
}

export default FormLogIn;
