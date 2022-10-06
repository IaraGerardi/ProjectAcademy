import { useState, useEffect } from "react";
import axios from "axios";

function useGet(URI) {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const handleGetData = async (URI) => {
            try {
                const response = await axios.get(`${URI}`, { withCredentials: true }) //trae uri y le agrega /gdsaiukyhds y lo guarda
                setData(response.data)
                setIsPending(false)
                setError({ err: false })
            } catch (err) {
                console.log(err)
                setError(err)
            }
        }

        handleGetData(URI)
    }, [])

    return { data, isPending, error }
}

export default useGet;