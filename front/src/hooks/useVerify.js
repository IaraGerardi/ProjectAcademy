import { useEffect, useState, version } from "react";

function useVerify(formValues, validations) {

    const [verifyMessages, setVerifyMessages] = useState({});
    const [isVerified, setIsVerified] = useState(false);
    let result = ""

    const handleVerifyInput = (value, payload, i) => {
        const { id, type } = payload;

        if (value === null || value === "") {
            setVerifyMessages(prevVerifyMessages => ({
                ...prevVerifyMessages,
                [id]: "El campo no puede estar vacio",
            }))
        } else if (payload.mustHaveNumbers && /\d/.test(value) === false) {
            setVerifyMessages(prevVerifyMessages => ({
                ...prevVerifyMessages,
                [id]: "El campo debe tener numeros",
            }))
        } else if (payload.onlyNumbers && /^\d+$/.test(value) === false) {
            setVerifyMessages(prevVerifyMessages => ({
                ...prevVerifyMessages,
                [id]: "El campo debe tener solo numeros",
            }))
        } else if (payload.cantHaveNumbers && /\d/.test(value)) {
            setVerifyMessages(prevVerifyMessages => ({
                ...prevVerifyMessages,
                [id]: "El campo no puede tener numeros",
            }))
        } else if (payload.cantHaveSpecialChar && (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/).test(value)) {
            setVerifyMessages(prevVerifyMessages => ({
                ...prevVerifyMessages,
                [id]: "El campo no puede tener simbolos",
            }))
        } else if (payload.minLength && value.length < payload.minLength) {
            setVerifyMessages(prevVerifyMessages => ({
                ...prevVerifyMessages,
                [id]: `El campo debe tener al menos ${payload.minLength} caracteres`,
            }))
        } else if (payload.maxLength && value.length > payload.maxLength) {
            setVerifyMessages(prevVerifyMessages => ({
                ...prevVerifyMessages,
                [id]: `El campo no debe tener mas de ${payload.maxLength} caracteres`,
            }))
        } else if (payload.noSpaces && (/^\S*$/.test(value) === false)) {
            setVerifyMessages(prevVerifyMessages => ({
                ...prevVerifyMessages,
                [id]: "El campo no puede tener espacios",
            }))
        } else if (type === "email" && (/\S+@\S+\.\S+/.test(value) === false)) {
            setVerifyMessages(prevVerifyMessages => ({
                ...prevVerifyMessages,
                [id]: "El email tiene un formato incorrecto",
            }))
        } else if (type === "date") {
            const today = (new Date()).toLocaleDateString('en-us', { year: "numeric", month: "numeric", day: "numeric" });
            // console.log(value, new Date())
            const inputDate = (new Date(`${value} `)).toLocaleDateString('en-us', { year: "numeric", month: "numeric", day: "numeric" });
            // console.log(today, inputDate)
            // console.log(Date.parse(today), Date.parse(inputDate))
            // console.log(Date.parse(inputDate) > Date.parse(today))
            // la fecha mas antigua tiene menor valor, 
            // El lunes seria un 5 y hoy un 8, entonces, 
            // si algo es pasado, fechaComparativa > pasado, si algo es futuro fechaComparativa < futuro
            // entonces today tendria que ser menor que la fecha del input para que sea una fecha pasada
            // if ((Date.parse(inputDate) === Date.parse(today))) {
            //     setVerifyMessages(prevVerifyMessages => ({
            //         ...prevVerifyMessages,
            //         [id]: "No puede elegir la fecha actual",
            //     }))
            // } else if (payload.futureDate && (Date.parse(inputDate) < Date.parse(today))) {
            //     setVerifyMessages(prevVerifyMessages => ({
            //         ...prevVerifyMessages,
            //         [id]: "Elija una fecha futura",
            //     }))
            // } else {
            //     console.log("error??")
            //     // setVerifyMessages(prevVerifyMessages => ({
            //     //     ...prevVerifyMessages,
            //     //     [id]: "Elija una fecha pasada",
            //     // }))
            // } 
            // else {
            //     setVerifyMessages(prevVerifyMessages => ({
            //         ...prevVerifyMessages,
            //         [id]: "No puede elegir la fecha actual",
            //     }))
            // }
        } else if ((type === "confirmPassword" && formValues[i - 1].inputValue) && formValues[i - 1].inputValue !== value) {
            setVerifyMessages(prevVerifyMessages => ({
                ...prevVerifyMessages,
                [id]: "Las contraseñas no coinciden",
            }))
        } else {
            setVerifyMessages(prevVerifyMessages => ({
                ...prevVerifyMessages,
                [id]: true,
            }))
        }

    }

    const handleVerifyForm = () => {
        for (let i = 0; i < formValues.length; i++) {
            handleVerifyInput(formValues[i].inputValue, validations[i], i)
        }
    }

    useEffect(() => {
        Object.values(verifyMessages).every(value => {
            if (value === true) {
                return result = true;
            }
            return result = false;
        });
        setIsVerified(result)
    }, [verifyMessages])

    return { handleVerifyForm, verifyMessages, isVerified }
}

export default useVerify;