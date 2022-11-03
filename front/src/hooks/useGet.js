import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function useGet(URI) {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const handleGetData = async (URI) => {
            try {
                const response = await axios.get(`${URI}`, { withCredentials: true })
                setData(response.data.info)
                setIsPending(false)
                setError({ err: false })
            } catch (err) {
                if (err.response.data.message === 'Not logged') {
                    localStorage.removeItem("usuario")
                    navigate('/LogIn')
                }
                setError(err)
            }
        }

        handleGetData(URI)
    }, [])

    return { data, isPending, error }
}

export default useGet;