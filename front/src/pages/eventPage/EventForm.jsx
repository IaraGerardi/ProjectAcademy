import React from 'react'
import HeaderInicio from '../sidebar-header/components/HeaderInicio'
import { Sidebar } from '../sidebar-header/components/Sidebar.js'
import Select from "react-select";
import makeAnimated from 'react-select/animated';
import { useState, useEffect } from "react";
import axios from 'axios';
import { optionsDuration, optionsHours } from './duration'
import { useNavigate } from "react-router-dom";
import verifications from "./../../verifyArguments/verifyEvent.json"

export const EventForm = () => {

  const [nameEvent, setName] = useState('')
  const [orientadorEvent, setOrientadores] = useState([])
  const [valorOrientador, setValorOrientadores] = useState([])       
  const [orientadosEvent, setOrientados] = useState([])
  const [valorOrientados, setValorOrientados] = useState([])
  const [dateEvent, setDateEvent] = useState('')
  const [timeEvent, setHours] = useState("");
  const [durationEvent, setDuration] = useState("");
  const [descriptionEvent, setDescriptionEvent] = useState('')
  const [active, setActive] = useState(false);
  const animatedComponents = makeAnimated();
  const navegate = useNavigate();

  // URL DE PETICION 

  const URI = "http://localhost:8000/admin/createEvent"

  // PETICION 
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
      nameEvent,
      orientadorEvent: valorOrientador,
      orientadosEvent: valorOrientados,
      dateEvent,
      timeEvent,
      durationEvent,
      descriptionEvent,
    }
    )
    .then((response) => {
      if (response.status === 200) {
      setActive(!active)
      setTimeout(() => {
        navegate('/eventos')
      }, "2000")
    }
  })
  }
  // -------- 


  //obtengo los datos de orientadores
  const ShowData = async () =>{
    const res = await axios.get('http://localhost:8000/admin/orientadores', { withCredentials: true })
    setOrientadores(res.data)
  }

  useEffect( ()=>{
    ShowData()
  },[])

  //obtengo los datos de orientados
  const ShowDataStudents = async () =>{
    const resp = await axios.get('http://localhost:8000/admin/orientados', { withCredentials: true })
    setOrientados(resp.data)
  }

  useEffect( ()=>{
    ShowDataStudents()
  },[])


  //manejador de evento del select 1
  const handlerSelectOne = (e) => {
    setValorOrientadores(e.value)
  };

  //manejador de evento del select 2
  const handlerSelectTwo = (e) => {
    setValorOrientados(e)
  };

  //manejador del select horario
  const handleHours = (e) => {
    setHours(e.value)
  }

  //manejador del select duracion
  const handleDuration = (e) => {
    setDuration(e.value)
  }

  //estilos react-select
  const customStylesEvent = {
     control: base=> ({
      ...base,
      borderRadius:  "8px",
      borderColor: '#cbd5e1',
      fontSize: "15px",
      minWidth:'100px'
     
      })
    }

  return (

    <div className="container-P w-full flex"> 
      <Sidebar />

    <div className="container-derecho header-sa">
      <HeaderInicio propNamePage="Eventos"/>
      
      <div className='lg:mt-5 lg:ml-8'>
        
        <div className='m-2 md:mt-5 md:ml-5'>
          <h2 className="lg:text-2xl font-medium text-slate-700">Crear un evento</h2>
          <h4 className='lg:text-lg text-slate-700 '>Puedes crear un primer encuentro entre Orientadores y Orientados.</h4>

        {/* formulario agendar eventos */}
          <form 
          method='POST' 
          onSubmit={handleSubmit} 
          className='mt-5 flex flex-col'>

            <h2 className="lg:text-base lg:font-medium text-slate-700 ">01. Información sobre el evento</h2>

              <div className='flex flex-col lg:flex-row md:flex-wrap lg:py-5 '>

                <div className='flex flex-col mt-2'>
                  <label className="text-sm font-medium text-slate-600 ">Nombre del evento</label>
                  <input
                    className='w-64 lg:w-80 text-sm p-2 rounded-lg border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block focus:ring-1'
                    type='text'
                    placeholder='Ingresar nombre'
                    value={nameEvent}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

              <div className='flex flex-col mt-2 lg:mx-8'>
                <label className='text-sm font-medium text-slate-600 '>Orientador participante</label>
                <Select
                  placeholder="Seleccionar orientador"
                  options={orientadorEvent.map(elem => ({label: `${elem.name} ${elem.lastname}`, value: elem.id }))}
                  onChange={handlerSelectOne}
                  styles={customStylesEvent}
                  className='w-64 lg:w-80'
                />
              </div>  

              <div className='flex flex-col mt-2'>
                <label className='text-sm font-medium text-slate-600 '>Orientado/es participante/s</label>
                <Select
                  placeholder="Seleccionar orientado"
                  options={orientadosEvent.map(elem => ({label: `${elem.name} ${elem.lastname}`, value:elem.id }))} 
                  onChange={handlerSelectTwo }
                  isMulti
                  components={animatedComponents}
                  styles={customStylesEvent}
                  className='w-64 lg:w-80'
                />
              </div>

        </div>

        <div className='border-y-2 pb-6 pt-6 w-5/6'>
            <h2 className="lg:text-base lg:font-medium text-slate-700 mb-5">02. Días y Horarios disponibles </h2>

        <div className='flex flex-col lg:flex-row md:flex-wrap '>   

          <div className='flex flex-col'>
            <label className="text-sm font-medium text-slate-600 ">Fecha</label>
            <input
            className='text-sm w-64 lg:w-80 p-2 rounded-lg border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block focus:ring-1'
            type='date'
            name='dateEvent'
            value={dateEvent} 
            onChange={(e) => setDateEvent(e.target.value)}
            placeholder='Ingresar fecha' 
            />
          </div>

          <div className='flex flex-col lg:mx-8'>
            <label className="text-sm font-medium text-slate-600">Horario</label>
            <Select
                placeholder="Seleccionar horario"
                value={optionsHours.filter((obj) => obj.value === timeEvent)} // set selected value
                options={optionsHours} 
                onChange={handleHours} 
                styles={customStylesEvent}
                className="w-64 lg:w-80 "
              />
          </div>

          <div className='flex flex-col'>
            <label className="text-sm font-medium text-slate-600">Duración</label>
            <Select
                placeholder="Seleccionar duración"
                value={optionsDuration.filter((obj) => obj.value === durationEvent)}
                options={optionsDuration} 
                onChange={handleDuration} 
                styles={customStylesEvent}
                className="w-64 lg:w-80 " 
              />  
          </div>

          </div> 

        </div>

          <h2 className="lg:text-base lg:font-medium text-slate-700">03. Detalle </h2>

        <div  className="containerInputLabel flex flex-col gap-2 py-3">

          <div className='flex flex-col '> 
            <label className="text-sm font-medium text-slate-600">
              Comentarios del evento
            </label>
            <textarea
              rows="4"
              cols="40"
              name='descriptionEvent'
              onChange={(e) => setDescriptionEvent(e.target.value)}
              placeholder="Escribir comentarios"
              className="w-64 lg:w-[678px] rounded-lg border border-slate-300 placeholder:pl-2 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block focus:ring-1"
            />
          </div> 

          </div>

          <button className=" w-44 h-10 bg-celesteValtech rounded-lg text-base text-white font-medium " type="submit">
            Agendar evento
          </button>

          </form>
        </div>

      </div>
        
    </div>

    </div>
  
  )
}
