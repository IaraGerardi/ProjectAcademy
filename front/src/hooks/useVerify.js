import { useState } from "react";

function useVerify(formValues) {

    const [verifyMessages, setVerifyMessages] = useState({});

    const verifyInput = (value, payload) => {
        console.log(payload)
        const { id, type } = payload;

        // Por ahora solo la verificacion de que el campo no este vacio y la del formato del email estan en uso
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
                    // Esta verificacion no anda bien todavia
                    // (/\S+@\S+\.\S+/.test(value) === false) ? setVerifyMessages(prevVerifyMessages => ({
                    //     ...prevVerifyMessages,
                    //     [id]: "El campo no puede tener espacios",
                    // })) :
                    type === "email" && (/\S+@\S+\.\S+/.test(value) === false) ? setVerifyMessages(prevVerifyMessages => ({
                        ...prevVerifyMessages,
                        [id]: "El email tiene un formato incorrecto",
                    })) :
                        type === "age" && (value < 0 || value > 100) ? setVerifyMessages(prevVerifyMessages => ({
                            ...prevVerifyMessages,
                            [id]: "Ingrese una edad valida",
                        })) :
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

    // Defino la variable que verifica si el formulario esta verificado o no, podria cambiar isVerified de variable a estado para que la verificacion se hiciera adentro de un useEffect
    const isVerified = Object.values(verifyMessages).every(value => {
        if (value === true) {
            return true;
        }
        return false;
    });

    return { verifyForm, verifyMessages, isVerified }
}

export default useVerify;