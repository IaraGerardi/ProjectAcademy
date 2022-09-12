
import { useEffect, useState } from 'react'
import imgAdmin from '../assets/imgUser.jpg'
import axios from 'axios';
import './CardProfile.css';

function CardProfile() {
     const [admin,setAdmin]=useState([]);//estado donde voy a guardar el objeto del admin  y luego obtener sus datos a traves de la notacion de puntos

    const getAdminProfile= async(adminNumber)=>{
        try{
            const resAdmin = await axios (`http://jsonplaceholder.typicode.com/users/${adminNumber}`)
            const resAdminData=resAdmin.data; 
          
            setAdmin(resAdminData);// actualiza el estado dinamicamente segun el valor del parametro que le pases
        
        }catch(error){// en caso de fallar 
            console.log (error)
        }
    }
    useEffect( ()=>{ // la a ejecutar la funcion luego de renderizar la pantalla y no todo el tiempo
       
        getAdminProfile(5);
      },[])
   // donde le voy a pasar el valor del parametro a la funcion 

  return ( // hay etiquetas que tienen clses de tailwind las dejo ahi para que si nos ponemos de acuerdo podamos usarlo.
    <div className="containerCardProfile">

       <p className='pProfile'>Mi perfil</p>

       <div className='containerAdminProfile w-3/6 h-3/5 p-8 bg-white flex flex-row rounded-lg'>
                <div className="boxImgAdminProfile w-5/12 flex justify-center">
                       <img className="imgAdmin w-36 h-36 mt-8 rounded-full" src={imgAdmin} alt="" />
                </div>

                
                <div className="boxDataAdminProfile w-7/12 pl-5 flex flex-col gap-8 border-l border-inherit">
                        <div className="AdminName py-4 ">
                            <h2 className='font-bold text-xl'> {admin.name}</h2>
                            <span className='text-slate-400'>Administradora</span>
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
                            <span className='text-slate-400'>LIKED IN</span>
                            <p>{admin.username}</p>
                        </div>
         
                </div>
       </div>
    </div>
  )
}

export default CardProfile;
