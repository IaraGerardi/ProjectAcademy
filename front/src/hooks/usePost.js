import { useState } from "react";
import axios from "axios";

function usePost(URI) {
    const [backVerifications, setBackVerifications] = useState({});
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const postForm = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(URI, form, { withCredentials: true })
            // Necesitaria que haya una propiedad estandar que tengan todos los resjson de las peticiones post, asi puedo centralizar cosas aca
            if (response.data.si) {
                setSuccess(true)
            } else {
                /*Si hay verificaciones del back que deban ser leidas por los usuarios podria manejar bien como se muestran 
                si todas tienen una propiedad input con el id del input, y otra que se llame alertMessage, 
                que tenga el mensaje que se le mostraria al usuario */
                /* En caso de que haya que mostrar mas de un error que mostrar podria ser un array de objetos con esas propiedades*/
                setBackVerifications({
                    ...backVerifications,
                    [response.data.input]: response.data.alertMessage,
                })
                setSuccess(false)
            }
        }
        catch (err) {
            setError(err);
        }
    }

    return { postForm, error, success, backVerifications }
}

export default usePost;