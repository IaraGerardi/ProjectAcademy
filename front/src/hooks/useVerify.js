import { useEffect, useState } from "react";

function useVerify(formValues, validations) {

    const [verifyMessages, setVerifyMessages] = useState({});
    const [isVerified, setIsVerified] = useState(false);
    let result = ""

    const handleVerifyInput = (value, payload) => {
        const { id, type } = payload;

        value === null || value === "" ? setVerifyMessages(prevVerifyMessages => ({
            ...prevVerifyMessages,
            [id]: "El campo no puede estar vacio",
        })) :
            payload.minLength && value.length < payload.minLength ? setVerifyMessages(prevVerifyMessages => ({
                ...prevVerifyMessages,
                [id]: `El campo debe tener al menos ${payload.minLength} caracteres`,
            })) :
                payload.maxLength && value.length > payload.maxLength ? setVerifyMessages(prevVerifyMessages => ({
                    ...prevVerifyMessages,
                    [id]: `El campo no debe tener mas de ${payload.maxLength} caracteres`,
                })) :
                    payload.noSpaces && (/^\S*$/.test(value) === false) ? setVerifyMessages(prevVerifyMessages => ({
                        ...prevVerifyMessages,
                        [id]: "El campo no puede tener espacios",
                    })) :
                        type === "email" && (/\S+@\S+\.\S+/.test(value) === false) ? setVerifyMessages(prevVerifyMessages => ({
                            ...prevVerifyMessages,
                            [id]: "El email tiene un formato incorrecto",
                        })) :
                            payload.mustHaveNumbers && /\d/.test(value) === false ? setVerifyMessages(prevVerifyMessages => ({
                                ...prevVerifyMessages,
                                [id]: "El campo debe tener numeros",
                            })) :
                                payload.onlyNumbers && /^\d+$/.test(value) === false ? setVerifyMessages(prevVerifyMessages => ({
                                    ...prevVerifyMessages,
                                    [id]: "El campo debe tener solo numeros",
                                })) :
                                    payload.cantHaveNumbers && /\d/.test(value) ? setVerifyMessages(prevVerifyMessages => ({
                                        ...prevVerifyMessages,
                                        [id]: "El campo no puede tener numeros",
                                    })) :
                                        payload.cantHaveSpecialChar && (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/).test(value) ?
                                            setVerifyMessages(prevVerifyMessages => ({
                                                ...prevVerifyMessages,
                                                [id]: "El campo no puede tener simbolos",
                                            })) :
                                            setVerifyMessages(prevVerifyMessages => ({
                                                ...prevVerifyMessages,
                                                [id]: true,
                                            }))
    }

    const handleVerifyForm = () => {
        for (let i = 0; i < formValues.length; i++) {
            handleVerifyInput(formValues[i].inputValue, validations[i])
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