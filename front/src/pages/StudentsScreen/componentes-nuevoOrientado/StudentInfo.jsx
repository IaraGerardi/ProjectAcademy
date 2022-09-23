import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';



function StudentInfo() {
    let { id } = useParams();
    const [orientado,setOrientado]=useState([]);//estado donde voy a guardar el objeto del admin  y luego obtener sus datos a traves de la notacion de puntos
     
    const URI=`http://localhost:8000/admin/orientados`;


    useEffect( ()=>{ // la a ejecutar la funcion luego de renderizar la pantalla y no todo el tiempo

        const getOrientadoData= async()=>{
            try{
                const resOrientado = await axios.get(`${URI}/${id}`)//trae uri y le agrega /gdsaiukyhds y lo guarda       /* ${id} */
                setOrientado(resOrientado.data); 
            

            }catch(error){// en caso de fallar 
                console.log (error)
            }
        }
         getOrientadoData(); 
  },[URI]) 


  return (
    <div className="cotainerForm ml-8 mt-10 mb-10">
       <h2 className="text-2xl font-medium text-slate-700">01.Informacion básica 1</h2>
         <div className="container-basicInfo flex flex-row gap-16">{/* div1 info basica */}
         <img src={`../../../img-back/orientados/${orientado.photoProfile}`} alt="" className='w-20 h-20 rounded-full'/>
        
       
        <div>
        <span>{`${orientado.name} ${orientado.lastname}`}</span>
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
              <p>{`${orientado.age}`}</p>
              <span className='text-slate-400 text-xs'>DOMICILIO</span>
              <p>{orientado.address}</p>
          </div>
          
        </div>
        <span className='text-slate-400 text-xs'>PORQUE SE ACERCO A NUESTRA INSTITUCIÓN</span>
       <p>{orientado.why}mfdrsydtfuiljnmbvhgydtu</p>
      </div>

      <div className="container-crateUsernamePassword">

        {/* div3 crear usuario y contraseña */}
        <h2 className="text-2xl font-medium text-slate-700">03.Usuario y contraseña</h2>
        {/*  a cada uno de los InputLabel recibe los 4 props  */}
        <span className='text-slate-400 text-xs'>USUARIO</span>
        <p>{orientado.dni}</p>
        <span className='text-slate-400 text-xs'>CONTRASEÑA</span>
        <p>sadksagjbnd</p>
      </div>

        <button className=" w-44 h-10 mt-10 p-2 bg-celesteValtech rounded-lg text-base text-white font-medium " type="submit" >Asignar Orientador/a</button>
        
    </div>
  )
}

export default StudentInfo;
