import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../global-components/formInput";
import axios from "axios";
import useVerify from "../../../hooks/useVerify";
import verifications from "../../../verifyArguments/verifyLogIn.json";
//context
import StoreContext from "../../../Store/StoreProvider";
import { types } from "../../../Store/StoreReducer";

function FormLogIn() {
    let timer = ""
    const navigate = useNavigate();
    const URI = "http://localhost:8000/login";
    const [store, dispatch] = useContext(StoreContext);
    // States
    const [form, setForm] = useState({ emailLog: null, passwordLog: null });
    const [activeVerify, setActiveVerify] = useState({});
    const [backMessages, setBackMessages] = useState({ emailLog: null, passwordLog: null, });
    // Hook arguments and calls
    const formValues = [{ inputValue: form.emailLog }, { inputValue: form.passwordLog }];
    const { handleVerifyForm, verifyMessages, isVerified } = useVerify(formValues, verifications);

    const handleSetNull = (obj) => {
        Object.keys(obj).forEach((index) => {
            obj[index] = null;
        });
    }

    const handleTimer = (e) => {
        if (activeVerify[e.target.id] === true) {
            return;
        }
        timer = setTimeout(() => {
            setActiveVerify({
                ...activeVerify,
                [e.target.id]: true
            })
        }, 8000)
        return () => clearTimeout(timer);
    }

    const handleChange = (e) => {
        handleTimer(e)
        setForm({
            ...form,
            [e.target.id]: e.target.value,
        })
    }

    useEffect(() => {
        handleSetNull(backMessages);
        handleVerifyForm();
    }, [form])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isVerified) {
            return;
        }
        await axios.post(`${URI}`, form, { withCredentials: true })
            .then((response) => {
                if (response.data.si) {
                    localStorage.setItem("usuario", JSON.stringify(response.data.admin));
                    dispatch({ type: types.authLogin })
                    navigate('/inicio');
                } else {
                    setBackMessages(prevBackMessages => ({
                        ...prevBackMessages, [response.data.params]: response.data.alertMessage,
                    }))
                }
            })
    }

    return (
        <form className="flex flex-col" onSubmit={handleSubmit}>
            <FormInput
                onHandleChange={handleChange}
                inputClass="w-80" labelClass="p-2 items-center" containerClass="flex flex-col w-96 h-28"
                id="emailLog" type="email" label="Email" placeholder="Ingresa tu email"
                verifyInput={!(activeVerify.emailLog) ? null
                    : verifyMessages.emailLog && verifyMessages.emailLog !== true ? verifyMessages.emailLog
                        : backMessages.emailLog ? backMessages.emailLog : null} />
            <FormInput
                onHandleChange={handleChange}
                inputClass="w-80" labelClass="p-2.5 items-center" containerClass="flex flex-col w-96"
                id="passwordLog" type="password" label="Contraseña" placeholder="Ingresa tu contraseña"
                verifyInput={!(activeVerify.passwordLog) ? null
                    : verifyMessages.passwordLog && verifyMessages.passwordLog !== true ? verifyMessages.passwordLog
                        : backMessages.passwordLog ? backMessages.passwordLog : null} />
            <input type="submit" value="Ingresar" disabled={!isVerified}
                className={`w-44 cursor-pointer border-none text-white text-base font-medium bg-celesteValtech
                ${isVerified ? null : "opacity-60"}`} />
        </form>
    );
}

export default FormLogIn;