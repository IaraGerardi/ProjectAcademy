import React from 'react'
import HeaderInicio from '../sidebar-header/components/HeaderInicio'
import { Sidebar } from '../sidebar-header/components/Sidebar.js'
import Select from "react-select";
import makeAnimated from 'react-select/animated';
import { useState, useEffect } from "react";
import axios from 'axios';
import { optionsDuration, optionsHours } from './duration'

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
  const animatedComponents = makeAnimated();

  // URL DE PETICION 

  const URI = "http://localhost:8000/admin/createEvent"

  // PETICION 
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`ORIENTADOR EVENT:${valorOrientador}`)
    console.log(`ORIENTADOS EVENT:${valorOrientados}`)
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
    .then((response) => console.log(response))
  }
  // -------- 


  //obtengo los datos de orientadores
  const ShowData = async () =>{
    const res = await axios.get('http://localhost:8000/admin/orientadores')
    console.log(res.data)
    setOrientadores(res.data)
  }

  useEffect( ()=>{
    ShowData()
  },[])

  //obtengo los datos de orientados
  const ShowDataStudents = async () =>{
    const resp = await axios.get('http://localhost:8000/admin/orientados')
    console.log(resp.data)
    setOrientados(resp.data)
  }

  useEffect( ()=>{
    ShowDataStudents()
  },[])


  //manejador de evento del select 1
  const handlerSelectOne = (e) => {
    console.log(e);
    setValorOrientadores(e.value)
  };

  //manejador de evento del select 2
  const handlerSelectTwo = (e) => {
    console.log(e);
    setValorOrientados(e)
  };

  //manejador del select horario
  const handleHours = (e) => {
    console.log(e.value);
    setHours(e.value)
  }

  //manejador del select duracion
  const handleDuration = (e) => {
    console.log(e.value);
    setDuration(e.value)
  }

  //estilos react-select
  const customStyles = {
     control: base=> ({
      ...base,
      borderRadius:  "8px",
      borderColor: '#cbd5e1',
      fontSize: "15px",
      height: 32,
      minHeight: 32,
      marginTop: '8px',
      })
    }
    
  return (

    <div className="container-P w-full flex"> {/*  containedor padre tamaño igual a app */}
      <Sidebar /> {/* hijo 1 izquierdo sticky */}

    <div className="container-derecho header-sa">{/*  hijo2 derecho  column */}
      <HeaderInicio propNamePage="Eventos"/>
      
      <div className='mt-7 ml-10'>
        
        <div className='mt-5 ml-5'>
          <h2 className="text-2xl font-medium text-slate-700">Crear un evento</h2>
          <h4 className='text-lg text-slate-700'>Puedes crear un primer encuentro entre Orientadores y Orientados.</h4>

        {/* formulario agendar eventos */}
          <form 
          method='POST' 
          onSubmit={handleSubmit} 
          className='mt-5'>

            <h2 className="text-base font-medium text-slate-700">01. Información sobre el evento</h2>

              <div className='flex flex-row py-3 '>

                <div className='flex flex-col'>
                  <label className="text-sm font-medium text-slate-600 mb-2">Nombre del evento</label>
                  <input
                    className='text-sm w-80 h-8 p-2 rounded-lg border'
                    type='text'
                    placeholder='Ingresar nombre'
                    value={nameEvent}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

              <div className='flex flex-col mx-5'>
                <label className="text-sm font-medium text-slate-600">Orientador participante</label>
                <Select
                  placeholder="Seleccionar orientador"
                  options={orientadorEvent.map(elem => ({label: `${elem.name} ${elem.lastname}`, value: elem.id }))}
                  onChange={handlerSelectOne}
                  styles={customStyles}
                  className="text-sm w-80 rounded-lg "
                />
              </div>  

              <div className='flex flex-col'>
                <label className="text-sm font-medium text-slate-600 ">Orientado/es participante/s</label>
                <Select
                  placeholder="Seleccionar orientado"
                  options={orientadosEvent.map(elem => ({label: `${elem.name} ${elem.lastname}`, value:elem.id }))} 
                  onChange={handlerSelectTwo }
                  isMulti
                  components={animatedComponents}
                  styles={customStyles}
                  className="text-sm w-80 rounded-lg "
                />
              </div>

        </div>

        <div className='border-y-2 py-5 my-5 w-5/6'>
            <h2 className="text-base font-medium text-slate-700">02. Días y Horarios disponibles </h2>

        <div className='flex flex-row py-3'>   

          <div className='flex flex-col'>
            <label className="text-sm font-medium text-slate-600 mb-2">Fecha</label>
            <input
            className='text-sm w-80 h-8 p-2 rounded-lg border'
            type='date'
            name='dateEvent'
            value={dateEvent} 
            onChange={(e) => setDateEvent(e.target.value)}
            placeholder='Ingresar fecha' 
            />
          </div>

          <div className='flex flex-col mx-5'>
            <label className="text-sm font-medium text-slate-600">Horario</label>
            <Select
                placeholder="Seleccionar horario"
                value={optionsHours.filter((obj) => obj.value === timeEvent)} // set selected value
                options={optionsHours} 
                onChange={handleHours} 
                styles={customStyles}
                className="text-sm w-80 rounded-lg "
              />
          </div>

          <div className='flex flex-col'>
            <label className="text-sm font-medium text-slate-600">Duración</label>
            <Select
                placeholder="Seleccionar duración"
                value={optionsDuration.filter((obj) => obj.value === durationEvent)}
                options={optionsDuration} 
                onChange={handleDuration} 
                styles={customStyles}
                className="text-sm w-80 rounded-lg " 
              />  
          </div>

          </div> 

        </div>

          <h2 className="text-base font-medium text-slate-700">03. Detalle </h2>

        <div  className="containerInputLabel flex flex-col gap-2 py-3">

          <div className='flex flex-col'> 
            <label className="text-sm font-medium text-slate-600">
              Comentarios del evento
            </label>
            <textarea
              rows="4"
              cols="40"
              name='descriptionEvent'
              onChange={(e) => setDescriptionEvent(e.target.value)}
              placeholder="Escribir comentarios"
              className=" rounded-lg border border-slate-300 w-3/4 lg:w-2/4 placeholder:pl-2"
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
