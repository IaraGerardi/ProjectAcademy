import { useState } from "react";
import axios from "axios";

function usePost(URI, form, verifications) {
    const [backVerifications, setBackVerifications] = useState({});
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    // For each verification it must add an object property whose value is null and key is the id of the currect index of the array
    // , tiene que haber una funcion que se exporte

    const postForm = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(URI, form, { withCredentials: true })
            if (response.status === 200) {
                setSuccess(true)
            } else {
                setBackVerifications({
                    ...backVerifications,
                    [response.data.params]: response.data.alertMessage,
                })
                setSuccess(false)
            }
        }
        catch (err) {
            setError(err);
        }
    }

    // Funcion para que todas las verificaciones del back esten como nulas

    const setNull = () => {
        for (let i = 0; i < verifications.length; i++) {
            setBackVerifications(prevBackVerifications => ({
                ...prevBackVerifications,
                [verifications[i].id]: null,
            }))
        }
    }

    return { postForm, setNull, error, success, backVerifications }
}

export default usePost;