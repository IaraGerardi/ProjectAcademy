import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useVerify from "../../../hooks/useVerify";
import verifications from "../../../verifyArguments/verifyLogIn.json";
import StoreContext from "../../../store/StoreProvider";
import { types } from "../../../store/StoreReducer";
import FormInput from "../../global-components/formInput";
import BeatLoader from "react-spinners/BeatLoader";

function FormLogIn() {

    const navigate = useNavigate();
    const URI = `${process.env.REACT_APP_BASE_URL}/admins/login`;
    const [store, dispatch] = useContext(StoreContext);

    const [loader, setLoader] = useState(false);
    const [form, setForm] = useState({ emailLog: null, passwordLog: null });
    const [activeVerify, setActiveVerify] = useState({});
    const [backMessages, setBackMessages] = useState({ emailLog: null, passwordLog: null, });

    const formValues = [{ inputValue: form.emailLog }, { inputValue: form.passwordLog }];
    const { handleVerifyForm, verifyMessages, isVerified } = useVerify(formValues, verifications);

    const handleChange = (e) => {
        handleTimer(e)
        setForm({
            ...form,
            [e.target.id]: e.target.value,
        })
    }

    const handleTimer = (e) => {
        if (activeVerify[e.target.id] === true) {
            return;
        }
        let timer = setTimeout(() => {
            setActiveVerify({
                ...activeVerify,
                [e.target.id]: true
            })
        }, 8000)
        return () => clearTimeout(timer);
    }


    const handleSetNull = (obj) => {
        Object.keys(obj).forEach((index) => {
            obj[index] = null;
        });
    }

    useEffect(() => {
        handleSetNull(backMessages);
        handleVerifyForm();
    }, [form])

    const handleErrorMessage = (property) => {
        if (!(activeVerify[property]) || !(verifyMessages[property])) {
            return null;
        }

        if (isVerified !== true) {
            return verifyMessages[property];
        } else {
            return backMessages[property];
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isVerified) {
            return;
        }
        try {
            const response = await axios.post(`${URI}`, form, { withCredentials: true })
            if (response.data.message === "Succesful Login") {
                localStorage.setItem("usuario", JSON.stringify(response.data.admin));
                dispatch({ type: types.authLogin })
                navigate('/inicio');
            }
        } catch (err) {
            setBackMessages(prevBackMessages => ({
                ...prevBackMessages,
                [err.response.data.params]: err.response.data.message,
            }))
        } finally {
            setLoader(false)
        }
    }

    return (
        <form className="flex flex-col" onSubmit={handleSubmit}>
            <FormInput
                type="email"
                id="emailLog"
                label="Email"
                redBorder={true}
                errorClass="mx-2.5"
                labelClass="p-2 items-center"
                onHandleChange={handleChange}
                placeholder="Ingresa tu email"
                inputClass="w-80 focus:outline"
                containerClass="flex flex-col w-96 h-28"
                verifyInput={handleErrorMessage("emailLog")} />
            <FormInput
                type="password"
                id="passwordLog"
                redBorder={true}
                label="Contraseña"
                errorClass="mx-2.5"
                onHandleChange={handleChange}
                inputClass="w-80 focus:outline"
                labelClass="p-2.5 items-center"
                placeholder="Ingresa tu contraseña"
                containerClass="flex flex-col w-96 h-28"
                verifyInput={handleErrorMessage("passwordLog")} />
            <input
                type="submit"
                value="Ingresar"
                disabled={!isVerified}
                onClick={() => { setLoader(true) }}
                className={`${isVerified ? null : "opacity-60"}
                w-44 cursor-pointer border-none text-white text-base font-medium bg-celesteValtech`} />

            {loader &&
                <div className='w-screen h-screen flex items-center absolute top-0 left-0 justify-center bg-slate-600 bg-opacity-10'>
                    <BeatLoader size={10} margin={5} color="#1EC5BB" cssOverride={{}} speedMultiplier={1} />
                </div>}
        </form>
    );
}

export default FormLogIn;