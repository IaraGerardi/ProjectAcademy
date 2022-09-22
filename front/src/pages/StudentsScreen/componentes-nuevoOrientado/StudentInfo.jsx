import React from 'react'

function StudentInfo() {
  return (
    <div className="cotainerForm ml-8 mt-10 mb-10">
         <div className="container-basicInfo ">
        
        {/* div1 info basica */}
        <h2 className="text-2xl font-medium text-slate-700">01.Informacion básica 1</h2>
        
         <span> Nombre y apellido</span>
        <div className=" cajaInputsDatosP flex flex-col flex-wrap h-40">
        <span className='text-slate-400 text-xs'>EMAIL</span>    
        <p>susan.garmendia@daldonso.com</p>
      
        <span className='text-slate-400 text-xs'>PROGRAMA POR INICIAR</span>
        <p>Orientacion vocacional</p>
    
        </div>
      </div>
      <div className="container-personalInfo  text-slate-700">
      
        {/* div2 datos personales */}
        <h2 className="text-2xl font-medium">02.Datos personales</h2>
        {/*  a cada uno de los InputLabel recibe los 4 props  */}
        <div className=" cajaInputsDatosP flex flex-col flex-wrap h-40">
            <span className='text-slate-400 text-xs'>TELEFONO</span>
              <p>nwkhksbvhas</p>
              <span className='text-slate-400 text-xs'>COLEGIO</span>
             <p>jafhbndufoh</p>
             <span className='text-slate-400 text-xs'>EDAD</span>
           <p>afj</p>
           <span className='text-slate-400 text-xs'>DOMICILIO</span>
           <p>amljuofadhuoah</p>
        </div>
        <span className='text-slate-400 text-xs'>PORQUE SE ACERCO A NUESTRA INSTITUCIÓN</span>
       <p>necesita orientacion para elegir una carrera</p>
      </div>

      <div className="container-crateUsernamePassword">

        {/* div3 crear usuario y contraseña */}
        <h2 className="text-2xl font-medium text-slate-700">03.Usuario y contraseña</h2>
        {/*  a cada uno de los InputLabel recibe los 4 props  */}
        <span className='text-slate-400 text-xs'>USUARIO</span>
        <p>hasdjhvhds</p>
        <span className='text-slate-400 text-xs'>CONTRASEÑA</span>
        <p>sadksagjbnd</p>
      </div>

        <button className=" w-44 h-10 mt-10 p-2 bg-celesteValtech rounded-lg text-base text-white font-medium " type="submit" >Asignar Orientador/a</button>
        
    </div>
  )
}

export default StudentInfo;
