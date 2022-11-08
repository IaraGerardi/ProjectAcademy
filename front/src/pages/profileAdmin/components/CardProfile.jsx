
import { useEffect, useState } from 'react'
import BeatLoader from "react-spinners/BeatLoader";
import axios from 'axios';
import { useNavigate } from "react-router-dom";



function CardProfile() {
   const navigate= useNavigate();


    const user = localStorage.getItem('usuario')//base de datos pequeña del navegador y .getItem trae un elemento del local storage
    const parsed = JSON.parse(user)// pasando el item a json

    const [admin, setAdmin] = useState([]);
    const [loadingProfile, setLoadingProfile] = useState(true);
    const URI = `${process.env.REACT_APP_BASE_URL}/admins`;


    useEffect(() => { // la a ejecutar la funcion luego de renderizar la pantalla y no todo el tiempo

        const getAdminProfile = async () => {
            try {
                const resAdmin = await axios.get(`${URI}/${parsed.id}`, { withCredentials: true })
                setAdmin(resAdmin.data.info);

                setLoadingProfile(false)

            } catch (err) {
                if (err.response.data.message === 'Not logged') {
                    localStorage.removeItem("usuario")
                    navigate('/LogIn')
                }
            }
        }



        getAdminProfile();

    }, [URI, parsed.id,navigate])   



    return ( 
        <div className="containerCardProfile">

            <p className='pProfile ml-10 mt-8  font-medium text-slate-600'>Mi perfil</p>
            {
                loadingProfile ?
                    <div className='flex justify-center mt-7'> <BeatLoader
                        color="#1EC5BB"
                        cssOverride={{}}

                        margin={5}
                        size={10}
                        speedMultiplier={1}
                    /></div>
                    :
                    <div className='containerAdminProfile w-5/6 p-4 ml-8 mt-2 flex flex-col bg-white rounded-lg  border md:flex-row lg:w-4/6 lg:h-3/5 lg:p-8 lg:ml-10 lg:mt-4  lg:flex-row  '>
                        <div className="boxImgAdminProfile w-5/12 flex justify-center">
                            <img className="imgAdmin w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-full" src={require(`../../../img-back/admins/${parsed.avatar}`)} alt="" />
                        </div>


                        <div className="boxDataAdminProfile w-7/12 pl-5 flex flex-col gap-4 md:border-l lg:border-l lg:border-inherit  ">
                            <div className="AdminName py-4 ">
                                <h2 className='font-bold text-xl'> {admin.name}</h2>
                                <span className='text-slate-400'>Administrador</span>
                            </div>

                            <div className="emailAdminProfile">
                                <span className='text-slate-400'>EMAIL</span>
                                <p>{admin.email}</p>
                            </div>

                            <div className="telAdminProfile">
                                <span className='text-slate-400'>TELEFONO</span>
                                <p>{admin.phone}</p>
                            </div>

                            <div className="linkedInAdminProfile">
                                <span className='text-slate-400'>LINKEDIN</span>
                                <p>{admin.linkedin}</p>
                            </div>

                        </div>
                    </div>
            }


        </div>
    )
}

export default CardProfile;
