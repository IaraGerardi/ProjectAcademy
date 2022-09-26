import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';



function StudentInfo() {


  const [orientado, setOrientado] = useState([]);//estado donde voy a guardar el objeto del admin  y luego obtener sus datos a traves de la notacion de puntos
  const [image, setImage] = useState("default.png");
  const [age, setAge] = useState(null);
  const URI = `http://localhost:8000/admin/orientados`;
  const navigate=useNavigate()


  useEffect(() => { // la a ejecutar la funcion luego de renderizar la pantalla y no todo el tiempo

    const getOrientadoData = async () => {
      try {
        const resOrientado = await axios.get(`${URI}`)//trae uri y le agrega /gdsaiukyhds y lo guarda     
         const lastOrientado=resOrientado.data 
         const lastOrientadoLength=lastOrientado[lastOrientado.length-1] 
         /* console.log(lastOrientadoLength) */
        setOrientado(lastOrientadoLength)
      
        if (lastOrientadoLength.photoProfile) {
          setImage(lastOrientadoLength.photoProfile)
        }
 console.log(lastOrientado.photoProfile)


      } catch (error) {// en caso de fallar 
        console.log(error)
      }
    }
    getOrientadoData();
  }, [])

/*   console.log(orientado) */

  const getAge = value => {
    let currentDate = new Date().toLocaleDateString('en-us', { year: "numeric", month: "numeric", day: "numeric" });
    let currentYear = currentDate.substr(currentDate.length-4, 4);
    let birthDate = new Date(value).toLocaleDateString('en-us', { year: "numeric", month: "numeric", day: "numeric" });
    let birthYear = birthDate.substr(birthDate.length-4, 4);
    console.log(currentDate)
    let age = parseInt(currentYear - birthYear)
    console.log(age)
    console.log(birthDate)
    let months = currentDate.substr(0, 1) - birthDate.substr(0, 1);
    if (months < 0 || (months === 0 && currentDate.substr(0, 1) < birthDate.substr(0, 1))) {
      age--;
    }
    setAge(age);
  }

  useEffect(() => {
    getAge(orientado.age);
    console.log(orientado.age)
  }, [orientado.age]);

/*   console.log(orientado.photoProfile)
  console.log(age) */
  const handleAssign=()=>{
    navigate(`/orientados/${orientado.id}`)
  }
 
  return (
    <div className="cotainerForm ml-8 mt-10 mb-10">
      <h2 className="text-2xl font-medium text-slate-700">01.Informacion básica </h2>
      <div className="container-basicInfo flex flex-row gap-16">{/* div1 info basica */}
        <img src={require(`../../../img-back/orientados/${image}`)} alt="" className='w-20 h-20 rounded-full object-cover' />


        <div className='flex flex-col gap-5'>
          <span className='text-2xl font-semibold mt-3'>{`${orientado.name} ${orientado.lastname}`}</span>
          <div className=" cajaInputsDatosP flex flex-col flex-wrap h-40">
            <span className='text-slate-400 text-xs'>EMAIL</span>
            <p>{orientado.email}</p>

            <span className='text-slate-400 text-xs'>PROGRAMA POR INICIAR</span>
            <p>{orientado.program}</p>
          </div>


        </div>
      </div>
      <div className="container-personalInfo  text-slate-700">

        {/* div2 datos personales */}
        <h2 className="text-2xl font-medium">02.Datos personales</h2>
        {/*  a cada uno de los InputLabel recibe los 4 props  */}
        <div className=" cajaInputsDatosP flex flex-row h-32 gap-20">
          <div>
            <span className='text-slate-400 text-xs'>TELEFONO</span>
            <p>{orientado.phone}</p>
            <span className='text-slate-400 text-xs'>COLEGIO</span>
            <p>{orientado.school}</p>
          </div>
          <div>
            <span className='text-slate-400 text-xs'>EDAD</span>
            <p>{`${age} Años`}</p>
            <span className='text-slate-400 text-xs'>DOMICILIO</span>
            <p>{orientado.address}</p>
          </div>

        </div>
        <span className='text-slate-400 text-xs'>PORQUE SE ACERCO A NUESTRA INSTITUCIÓN</span>
        <p>{orientado.why}</p>
      </div>

      <div className="container-crateUsernamePassword">

        {/* div3 crear usuario y contraseña */}
        <h2 className="text-2xl font-medium text-slate-700">03.Usuario y contraseña</h2>
        {/*  a cada uno de los InputLabel recibe los 4 props  */}
        <span className='text-slate-400 text-xs'>USUARIO</span>
        <p>{orientado.dni}</p>
        <div className='flex flex-col'>
          <span className='text-slate-400 text-xs'>CONTRASEÑA</span>
          <input className='outline-none' type="password" defaultValue="password" readOnly />
        </div>
      </div>

      <button className=" w-44 h-10 mt-10 p-2 bg-celesteValtech rounded-lg text-base text-white font-medium " onClick={handleAssign} >Asignar Orientador/a</button>

    </div>
  )
}

export default StudentInfo;
