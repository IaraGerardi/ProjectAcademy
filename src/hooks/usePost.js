import { useState } from "react";
import axios from "axios";

// Handle post must be the only code that changes the back verifications, 
// what is done if the method is successfull should be handled on the component that calls onPostForm
function usePost(URI, form, verifications) {
    const [backVerifications, setBackVerifications] = useState({});
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    
    // onPostForm
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