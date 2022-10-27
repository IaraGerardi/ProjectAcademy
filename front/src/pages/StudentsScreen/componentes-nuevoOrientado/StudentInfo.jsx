import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// // SVG
import Affirmation from "../img/affirmation.svg"
import Delete from "../img/delete.svg"

function StudentInfo() {

  const [orientedInfo, setOrientedInfo] = useState([]); //estado donde voy a guardar el objeto del orientado
  const [image, setImage] = useState("default.png");
  // hago que image sea un estado que inicialice como default.png, y luego cambia a la foto del orientado dentro de getOrientadoData
  // de esta manera se que si no llega una foto en la peticion no se va a romper la pagina
  const [age, setAge] = useState(1);
  const navigate = useNavigate()
  const { id } = useParams();
  const URI = `${process.env.REACT_APP_BASE_URL}/oriented`;

  // http://localhost:8000/admin/pruebaorientados?page=0&size=1000
  const [active, setActive] = useState(false);

  useEffect(() => { // la a ejecutar la funcion luego de renderizar la pantalla y no todo el tiempo

    const getOrientedData = async () => {
      try {
        const resOrientado = await axios.get(`${URI}/${id}`, { withCredentials: true }) //trae uri y le agrega /gdsaiukyhds y lo guarda   
        setOrientedInfo(resOrientado.data)
        if (resOrientado.data.photoProfile) {
          setImage(resOrientado.data.photoProfile)
        }
      } catch (error) {// en caso de fallar 
        console.error(error)
      }
    }
    getOrientedData();
  }, [])

  const getAge = value => {
    let currentDate = new Date().toLocaleDateString('en-us', { year: "numeric", month: "numeric", day: "numeric" });
    let currentYear = currentDate.substr(currentDate.length - 4, 4);
    let birthDate = new Date(value).toLocaleDateString('en-us', { year: "numeric", month: "numeric", day: "numeric" });
    let birthYear = birthDate.substr(birthDate.length - 4, 4);
    let age = parseInt(currentYear - birthYear)
    let months = currentDate.substr(0, 1) - birthDate.substr(0, 1);
    if (months < 0 || (months === 0 && currentDate.substr(0, 1) < birthDate.substr(0, 1))) {
      age--;
    }
    setAge(age);
  }

  useEffect(() => {
    getAge(orientedInfo.age);
  }, [orientedInfo.age]);

  const handleAssign = () => {
    navigate(`/orientados/${orientedInfo.id}`)
  }




  return (
    <div className="cotainerForm ml-6 mr-2 md:mx-6 lg:mx-6 my-8 md:my-10 lg:my-10">
      <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-slate-700">01.Informacion básica </h2>
      <div className="container-basicInfo h-68 md:h-48 lg:h-48 flex  flex-col md:flex-row lg:flex-row gap-0 md:gap-16 ld:gap-16">{/* div1 info basica */}
        <img src={require(`../../../img-back/orientados/${image}`)} alt="" className='w-24 h-24 md:w-28 md:h-28  mt-3 ml-0 md:mt-8 md:ml-4 rounded-full object-cover' />


        <div className='flex flex-col gap-5 mt-5'>
          <span className='text-xl lg:text-2xl font-semibold mt-3'>{`${orientedInfo.name} ${orientedInfo.lastname}`}</span>
          <div className=" cajaInputsDatosP flex flex-col flex-wrap h-28 md:h-40 lg:h-40">
            <span className='text-slate-400 text-xs'>EMAIL</span>
            <p className="text-xs md:text-sm lg:text-base">{orientedInfo.email}</p>

            <span className='text-slate-400 text-xs'>PROGRAMA POR INICIAR</span>
            <p className="text-xs md:text-sm lg:text-base">{orientedInfo.program}</p>
          </div>


        </div>
      </div>
      <div className="container-personalInfo  text-slate-700 h-72 md:h-64 lg:h-64">

        {/* div2 datos personales */}
        <h2 className=" text-lg md:text-xl lg:text-2xl font-medium">02.Datos personales</h2>
        {/*  a cada uno de los InputLabel recibe los 4 props  */}
        <div className=" cajaInputsDatosP flex flex-row h-32 gap-10 md:gap-14 lg:gap-20 mt-4">
          <div>
            <span className='text-slate-400 text-xs'>TELEFONO</span>
            <p className="text-xs md:text-sm lg:text-base">{orientedInfo.phone}</p>
            <span className='text-slate-400 text-xs'>COLEGIO</span>
            <p className="text-xs md:text-sm lg:text-base">{orientedInfo.school}</p>
          </div>
          <div>
            <span className='text-slate-400 text-xs'>EDAD</span>
            <p className="text-xs md:text-sm lg:text-base">{`${age} Años`}</p>
            <span className='text-slate-400 text-xs'>DOMICILIO</span>
            <p className="text-xs md:text-sm lg:text-base">{orientedInfo.address}</p>
          </div>

        </div>
        <span className='text-slate-400 text-xs'>PORQUE SE ACERCO A NUESTRA INSTITUCIÓN</span>
        <p className="text-xs md:text-sm lg:text-base">{orientedInfo.why}</p>
      </div>

      <div className="container-crateUsernamePassword ">

        {/* div3 crear usuario y contraseña */}
        <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-slate-700">03.Usuario y contraseña</h2>
        {/*  a cada uno de los InputLabel recibe los 4 props  */}
        <span className='text-slate-400 text-xs'>USUARIO</span>
        <p className="text-xs md:text-sm lg:text-base">{orientedInfo.dni}</p>
        <div className='flex flex-col'>
          <span className='text-slate-400 text-xs'>CONTRASEÑA</span>
          <input className=" outline-none text-xs md:text-sm lg:text-base" type="password" defaultValue="password" readOnly />
        </div>
      </div>

      {orientedInfo.OrientadoreId === null ?
        <button className=" w-36 h-8 lg:w-44 lg:h-10 mt-10 p-2 bg-celesteValtech rounded-lg text-sm lg:text-base text-white font-medium "
          onClick={handleAssign}> Asignar Orientador/a </button>
        : <button className="w-36 h-9 lg:w-44 lg:h-10 mt-10 p-2 bg-celesteValtech rounded-lg text-sm lg:text-base text-white font-medium "
          onClick={handleAssign}> Ver Orientador/a </button>
      }

      {/* {viewAlert} */}


      {/* <p>{orientado.updatedAt}</p> */}

      {/*LLAMADO DE ALERTA */}
      {/* El .PARSE CONVIERTE LA FECHA Y HORA EN MILISEGUNDOS  Y PREGUNTO SI LA FECHA ACTUAL MENOS LA FECHA DE CREACION DEL ORIENTADO ES MENOR A 1000 MILISEGUNDOS ENTONCES MOSTRAME ALERT.*/}
      {
        (Date.parse(new Date()) - Date.parse(`${orientedInfo.createdAt}`) < 10000 || active) && <div className={`alert ${!active ? 'show-alert' : 'hidden-alert'}`}>
          <img src={Affirmation} alt="icon de afirmacion" />
          <p className="msg-alert">El Orientado fué ingresado con éxito.</p>
          <img className="iconDelete-alert" src={Delete} onClick={() => setActive(!active)} alt="icon de eliminar" />
        </div>


      }

    </div>
  )
}

export default StudentInfo;
