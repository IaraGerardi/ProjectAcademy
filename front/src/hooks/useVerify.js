import { useEffect, useState } from "react";

function useVerify(formValues) {
    // min dos caracteres el nombre
    const [verifyMessages, setVerifyMessages] = useState({});
    const [isVerified, setIsVerified] = useState(false)
    let result = "";

    const verifyInput = (value, payload) => {
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
                                        payload.cantHaveSpecialChar && (/[!@#\$%\^\&*\(\)\/\\+=._-]/g).test(value) ? setVerifyMessages(prevVerifyMessages => ({
                                            ...prevVerifyMessages,
                                            [id]: "El campo no puede tener simbolos",
                                        })) :
                                            // Comento la verificacion ya que no esta en uso
                                            // type === "age" && (value < 0 || value > 100) ? setVerifyMessages(prevVerifyMessages => ({
                                            //     ...prevVerifyMessages,
                                            //     [id]: "Ingrese una edad valida",
                                            // })) :
                                            type === "confirmPassword" && value !== payload.firstPass ? setVerifyMessages(prevVerifyMessages => ({
                                                ...prevVerifyMessages,
                                                [id]: "La contraseña no coincide",
                                            })) :
                                                setVerifyMessages(prevVerifyMessages => ({
                                                    ...prevVerifyMessages,
                                                    [id]: true,
                                                }))
    }

    const verifyForm = () => {
        for (let i = 0; i < formValues.length; i++) {
            verifyInput(formValues[i].inputValue, formValues[i].payload)
        }
    }

    // Recorro los valores de verifyMessages, si todos son true devuelvo true, si no devuelvo false, y cambio el estado isVerified a ese valor
    useEffect(() => {
        Object.values(verifyMessages).every(value => {
            if (value === true) {
                return result = true;
            }
            return result = false;
        });
        setIsVerified(result)
    }, [verifyForm])

    return { verifyForm, verifyMessages, isVerified }
}

export default useVerify;