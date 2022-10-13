import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../global-components/formInput";
import axios from "axios";
import useVerify from "../../../hooks/useVerify";
import verifications from "../../../verifyArguments/verifyLogIn.json";
//context
import StoreContext from "../../../store/StoreProvider";
import { types } from "../../../store/StoreReducer";
import BeatLoader from "react-spinners/BeatLoader";

function FormLogIn() {

    let timer = ""
    const navigate = useNavigate();
    const URI = `${ process.env.REACT_APP_BASE_URL}/admin/login`;
    const [store, dispatch] = useContext(StoreContext);
    // States
    const [loader, setLoader] = useState(false);
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
                console.log(response)
                setLoader(false)
                if (response.data.message === "Succesful Login") {
                    localStorage.setItem("usuario", JSON.stringify(response.data.admin));
                    dispatch({ type: types.authLogin })
                    navigate('/inicio');
                } else {
                    setBackMessages(prevBackMessages => ({
                        ...prevBackMessages,
                        [response.data.params]: response.data.message,
                    }))
                }
            })
    }

    return (
        <form className="flex flex-col" onSubmit={handleSubmit}>
            <FormInput onHandleChange={handleChange}
                inputClass="w-80 focus:outline" labelClass="p-2 items-center" containerClass="flex flex-col w-96 h-28"
                id="emailLog" type="email" label="Email" placeholder="Ingresa tu email"
                verifyInput={!(activeVerify.emailLog) ? null
                    : verifyMessages.emailLog && verifyMessages.emailLog !== true ? verifyMessages.emailLog
                        : backMessages.emailLog ? backMessages.emailLog : null} />
            <FormInput onHandleChange={handleChange}
                inputClass="w-80 focus:outline" labelClass="p-2.5 items-center" containerClass="flex flex-col w-96"
                id="passwordLog" type="password" label="Contraseña" placeholder="Ingresa tu contraseña"
                verifyInput={!(activeVerify.passwordLog) ? null
                    : verifyMessages.passwordLog && verifyMessages.passwordLog !== true ? verifyMessages.passwordLog
                        : backMessages.passwordLog ? backMessages.passwordLog : null} />
            <input type="submit" value="Ingresar" disabled={!isVerified} onClick={() => { setLoader(true); console.log("click") }}
                className={`w-44 cursor-pointer border-none text-white text-base font-medium bg-celesteValtech
                ${isVerified ? null : "opacity-60"}`} />
            {loader &&
                <div className='w-screen h-screen flex items-center absolute top-0 left-0 justify-center bg-slate-600 bg-opacity-10'>
                    <BeatLoader size={10} margin={5} color="#1EC5BB" cssOverride={{}} speedMultiplier={1} />
                </div>}
        </form>
    );
}

export default FormLogIn;