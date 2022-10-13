import React from 'react';
import HeaderInicio from '../sidebar-header/components/HeaderInicio';
import { Sidebar } from '../sidebar-header/components/Sidebar.js';
import Select from "react-select";
import FormInput from '../global-components/formInput';
import makeAnimated from 'react-select/animated';
import { useState, useEffect } from "react";
import axios from 'axios';
import { optionsHours } from './duration';
import { useNavigate } from "react-router-dom";
import useVerify from "../../hooks/useVerify";
import verifications from "./../../verifyArguments/verifyEvent.json";
import Config from "../../config.json";


export const EventForm = () => {

  const {BASE_URL}=Config

  const [nameEvent, setName] = useState('')
  const [counselorEvent, setCounselorEvent] = useState([])
  const [valueCounselor, setValueCounselor] = useState([])
  const [orientedEvent, setOrientedEvent] = useState([])
  const [valueOriented, setValueOriented] = useState([])
  const [dateEvent, setDateEvent] = useState('')
  const [timeEvent, setHours] = useState("");
  const [durationEvent, setDuration] = useState("");
  const [descriptionEvent, setDescriptionEvent] = useState('')
  const [active, setActive] = useState(false);
  const [timeOptArray, setTimeOptArray] = useState([]);

  const animatedComponents = makeAnimated();
  const navegate = useNavigate();
  // Verifications
  let timer = null;
  const [activeVerify, setActiveVerify] = useState({});
  const formValues = [{ inputValue: nameEvent }, { inputValue: counselorEvent }];
  const { handleVerifyForm, verifyMessages, isVerified } = useVerify(formValues, verifications);

  // URL DE PETICION 

  const URI =`${BASE_URL}/create`

  const handleTimer = (e) => {
    if (activeVerify[e.target.id] === true) {
      return;
    }
    timer = setTimeout(() => {
      setActiveVerify({
        ...activeVerify,
        [e.target.id]: true
      })
    }, 8000)
    return () => clearTimeout(timer);
  }

  // PETICION 
  const handleSubmit = async (e) => {
    e.preventDefault();
    handleVerifyForm();
    await axios.post(URI, {
      nameEvent,
      counselorEvent: valueCounselor,
      orientedEvent: valueOriented,
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
  const ShowData = async () => {
    const res = await axios.get('http://localhost:8000/counselor', { withCredentials: true })
    setCounselorEvent(res.data)
  }

  useEffect(() => {
    ShowData()
  }, [])

  //obtengo los datos de orientados
  const ShowDataStudents = async () => {
    const resp = await axios.get('http://localhost:8000/oriented', { withCredentials: true })
    setOrientedEvent(resp.data)
  }

  useEffect(() => {
    ShowDataStudents()
  }, [])

  //funcion para opciones de duración

  const timeArray = []
  let i = 15
  let time = ""

  useEffect(() => {
  const handlerDurationEvent = () =>{

    

do {

    (i.toString().length <= 2) ? time = `00${i}`: time = `0${i}`;
    time = `${time.slice(0,2)}:${time.slice(-2)}:00`
    timeArray.push({value: time, label: time})
    parseInt(i.toString().slice(-2)) < 45 ? i += 15 : i += 55;
} while (i < 800)

setTimeOptArray(timeArray)

  }
  handlerDurationEvent()
}, [])

  //manejador de evento del select 1
  const handlerSelectOne = (e) => {
    setValueCounselor(e.value)
  };

  //manejador de evento del select 2
  const handlerSelectTwo = (e) => {
    setValueOriented(e)
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
    control: base => ({
      ...base,
      borderRadius: "8px",
      borderColor: '#cbd5e1',
      fontSize: "15px",
      minWidth: '100px'

    })
  }



  return (

    <div className="container-P w-full flex">
      <Sidebar />

      <div className="container-derecho header-sa">
        <HeaderInicio propNamePage="Eventos" />

        <div className='lg:mt-5 lg:ml-8'>

          <div className='m-2 md:mt-5 md:ml-5'>
            <h2 className="lg:text-2xl font-medium text-slate-700">Crear un evento</h2>
            <h4 className='lg:text-lg text-slate-700 '>Puedes crear un primer encuentro entre Orientadores y Orientados.</h4>

            {/* formulario agendar eventos */}
            <form
              onSubmit={handleSubmit}
              className='mt-5 flex flex-col'>

              <h2 className="lg:text-base lg:font-medium text-slate-700 ">01. Información sobre el evento</h2>

              <div className='flex flex-col lg:flex-row md:flex-wrap lg:py-5 '>

                <FormInput
                  onHandleChange={(e) => { setName(e.target.value); handleTimer(e); }}
                  inputClass="w-64 lg:w-80 text-sm p-2 rounded-lg border shadow-sm border-slate-300
                  placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block focus:ring-1"
                  labelClass="text-sm font-medium text-slate-600" containerClass="flex flex-col mt-2"
                  id="eventName" type="text" label="Nombre del evento" placeholder="Ingresar nombre"
                  verifyInput={!(activeVerify.eventName) ? null :
                    verifyMessages.eventName && verifyMessages.eventName !== true
                      ? verifyMessages.eventName : null} />

                <div className='flex flex-col mt-2 lg:mx-8'>
                  <label className='text-sm font-medium text-slate-600 '>Orientador participante</label>
                  <Select
                    placeholder="Seleccionar orientador"
                    options={counselorEvent.map(elem => ({ label: `${elem.name} ${elem.lastname}`, value: elem.id }))}
                    onChange={handlerSelectOne}
                    styles={customStylesEvent}
                    className='w-64 lg:w-80'
                  />
                </div>

                <div className='flex flex-col mt-2'>
                  <label className='text-sm font-medium text-slate-600 '>Orientado/es participante/s</label>
                  <Select
                    placeholder="Seleccionar orientado"
                    options={orientedEvent.map(elem => ({ label: `${elem.name} ${elem.lastname}`, value: elem.id }))}
                    onChange={handlerSelectTwo}
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

                  <FormInput
                    onHandleChange={(e) => { setDateEvent(e.target.value); handleTimer(e); }}
                    inputClass="text-sm w-80 h-8 p-2 rounded-lg border"
                    labelClass="text-sm font-medium text-slate-600 mb-2" containerClass="flex flex-col"
                    id="eventDate" type="date" label="Fecha" placeholder="Ingresar fecha"
                    verifyInput={!(activeVerify.eventDate) ? null :
                      verifyMessages.eventDate && verifyMessages.eventDate !== true
                        ? verifyMessages.eventDate : null} />


                  {/* <div className='flex flex-col'>
                    <label className="text-sm font-medium text-slate-600 ">Fecha</label>
                    <input
                      className='text-sm w-64 lg:w-80 p-2 rounded-lg border shadow-sm
                       border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block 
                       focus:ring-1'
                      type='date'
                      name='dateEvent'
                      value={dateEvent}
                      onChange={(e) => setDateEvent(e.target.value)}
                      placeholder='Ingresar fecha'
                    />
                  </div> */}

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
                      value={timeOptArray.filter((obj) => obj.value === durationEvent)}
                      options={timeOptArray}      
                      onChange={handleDuration}
                      styles={customStylesEvent}
                      className="w-64 lg:w-80 "
                    />
                  </div>

                </div>

              </div>

              <h2 className="lg:text-base lg:font-medium text-slate-700">03. Detalle </h2>

              <FormInput
                onHandleChange={(e) => { setDescriptionEvent(e.target.value); handleTimer(e); }}
                inputClass=" rounded-lg border border-slate-300 w-3/4 lg:w-2/4 placeholder:pl-2"
                labelClass="text-sm font-medium text-slate-600 mb-2" containerClass="flex flex-col"
                id="eventComments" type="textarea" label="Comentarios" placeholder="Escribir comentarios"
                verifyInput={!(activeVerify.eventComments) ? null :
                  verifyMessages.eventComments && verifyMessages.eventComments !== true
                    ? verifyMessages.eventComments : null} />

              {/* <div className="containerInputLabel flex flex-col gap-2 py-3">

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
                    className="w-64 lg:w-[678px] rounded-lg border border-slate-300 placeholder:pl-2 shadow-sm
                     placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block focus:ring-1"
                  />
                </div>

              </div> */}

              <button disabled={!isVerified} className=" w-44 h-10 bg-celesteValtech rounded-lg text-base text-white font-medium" type="submit">
                Agendar evento
              </button>

            </form>
          </div>

        </div>

      </div>

    </div>

  )
}
