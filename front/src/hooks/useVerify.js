import { useState } from "react";

function useVerify(formValues) {

    const [verifyMessages, setVerifyMessages] = useState({});

    const verifyInput = (value, id, type) => {
        value === null || value === "" ? setVerifyMessages(prevVerifyMessages => ({
            ...prevVerifyMessages,
            [id]: "El campo no puede estar vacio",
        })) :
            type === "email" && (/\S+@\S+\.\S+/.test(value) === false) ? setVerifyMessages(prevVerifyMessages => ({
                ...prevVerifyMessages,
                [id]: "El email tiene un formato incorrecto",
            })) :
            type === "age" && (value < 0 || value.length > 3) ? setVerifyMessages(prevVerifyMessages => ({
                ...prevVerifyMessages,
                [id]: "Ingrese una edad valida",
            })) :
                setVerifyMessages(prevVerifyMessages => ({
                    ...prevVerifyMessages,
                    [id]: true,
                }))
    }
    
    const verifyForm = () => {
        for (let i = 0; i < formValues.length; i++) {
            verifyInput(formValues[i].inputValue, formValues[i].inputId, formValues[i].inputType)
        }
    }

    const isVerified = Object.values(verifyMessages).every(value => {
        if (value === true) {
          return true;
        }
      
        return false;
      });
      
    return { verifyForm, verifyMessages, isVerified }
}

export default useVerify;