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


export const EventForm = () => {

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
  const formValues = [{ inputValue: nameEvent }, { inputValue: valueCounselor }, { inputValue: valueOriented }, { inputValue: dateEvent },
  { inputValue: timeEvent }, { inputValue: durationEvent }, { inputValue: descriptionEvent }];
  const { handleVerifyForm, verifyMessages, isVerified } = useVerify(formValues, verifications);

  // URL DE PETICION 

  const URI = `${process.env.REACT_APP_BASE_URL}/events/create`

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

  useEffect(()=>{
    handleVerifyForm();
  },[nameEvent, valueCounselor, valueOriented, dateEvent, timeEvent, durationEvent, descriptionEvent])
  // PETICION 
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
      nameEvent,
      counselorEvent: valueCounselor,
      orientedEvent: valueOriented,
      dateEvent,
      timeEvent,
      durationEvent,
      descriptionEvent,
    }, {withCredentials: true}
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
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/counselor`, { withCredentials: true })
    setCounselorEvent(res.data)
  }

  useEffect(() => {
    ShowData()
  }, [])

  //obtengo los datos de orientados
  const ShowDataStudents = async () => {
    const resp = await axios.get(`${process.env.REACT_APP_BASE_URL}/oriented`, { withCredentials: true })
    setOrientedEvent(resp.data)
  }

  useEffect(() => {
    ShowDataStudents()
  }, [])

  //funcion para opciones de duración

  useEffect(() => {
    const timeArray = []
    let i = 15
    let time = ""
    const handlerDurationEvent = () => {

      do {

        (i.toString().length <= 2) ? time = `00${i}` : time = `0${i}`;
        time = `${time.slice(0, 2)}:${time.slice(-2)}:00`
        timeArray.push({ value: time, label: time })
        parseInt(i.toString().slice(-2)) < 45 ? i += 15 : i += 55;
      } while (i <= 800)

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

        <div className='lg:mt-5 lg:m-8'>

          <div className='m-2 md:mt-5 md:ml-5'>
              <h2 className="lg:text-2xl font-medium text-slate-700">Crear un evento</h2>
              <h4 className='lg:text-lg text-slate-700 text-sm'>Puedes crear un primer encuentro entre Orientadores y Orientados.</h4>

            {/* formulario agendar eventos */}
            <form
              onSubmit={handleSubmit}
              className='mt-5 flex flex-col lg:m-0 lg:mr-20 md:mr-20'>

              <h2 className="lg:text-base font-medium text-slate-700 lg:pt-3">01. Información sobre el evento</h2>

              <div className='flex flex-col lg:flex-row md:flex-wrap lg:py-2 pl-3 pt-2 '>
                <FormInput
                  onHandleChange={(e) => { setName(e.target.value); handleTimer(e); }}
                  inputClass="w-56 md:w-80 lg:w-80 text-sm p-2 rounded-lg border shadow-sm border-slate-300
                  placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block focus:ring-1"
                  labelClass="text-sm font-medium text-slate-600"
                  containerClass="flex flex-col px-2"
                  id="eventName" 
                  type="text" 
                  label="Nombre del evento" 
                  placeholder="Ingresar nombre"
                  verifyInput={!(activeVerify.eventName) ? null :
                  verifyMessages.eventName && verifyMessages.eventName !== true
                  ? verifyMessages.eventName : null} 
                />

                <div className='flex flex-col px-2'>
                  <label className='text-sm font-medium text-slate-600 mt-2 lg:mt-0'>Orientador participante</label>
                  <Select
                    placeholder="Seleccionar orientador"
                    options={counselorEvent.map(elem => ({ label: `${elem.name} ${elem.lastname}`, value: elem.id }))}
                    onChange={handlerSelectOne}
                    styles={customStylesEvent}
                    className='w-56 md:w-80  lg:w-80'
                  />
                </div>

                <div className='flex flex-col px-2'>
                  <label className='text-sm font-medium text-slate-600 mt-2 lg:mt-0'>Orientado/es participante/s</label>
                  <Select
                    placeholder="Seleccionar orientado"
                    options={orientedEvent.map(elem => ({ label: `${elem.name} ${elem.lastname}`, value: elem.id }))}
                    onChange={handlerSelectTwo}
                    isMulti
                    components={animatedComponents}
                    styles={customStylesEvent}
                    className='w-56 md:w-80 lg:w-80'
                  />
                </div>

              </div>

              <div className='border-y-2 pb-6 pt-6  mt-4 '>
                <h2 className="lg:text-base font-medium text-slate-700 mb-4">02. Días y Horarios disponibles </h2>

                <div className='flex flex-col lg:flex-row md:flex-wrap lg:py-3 pl-3 pt-2 '>
                
                  <FormInput
                    onHandleChange={(e) => { setDateEvent(e.target.value); handleTimer(e); }}
                    inputClass="text-sm w-56 md:w-80 lg:w-80 p-2 rounded-lg border shadow-sm
                    border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block 
                    focus:ring-1"
                    labelClass="text-sm font-medium text-slate-600" 
                    containerClass="flex flex-col px-2"
                    id="eventDate" 
                    type="date" 
                    label="Fecha" 
                    placeholder="Ingresar fecha"
                    verifyInput={!(activeVerify.eventDate) ? null :
                    verifyMessages.eventDate && verifyMessages.eventDate !== true
                    ? verifyMessages.eventDate : null} 
                  />


                  <div className='flex flex-col px-2'>
                    <label className="text-sm font-medium text-slate-600 mt-2 lg:mt-0">Horario</label>
                    <Select
                      placeholder="Seleccionar horario"
                      value={optionsHours.filter((obj) => obj.value === timeEvent)} // set selected value
                      options={optionsHours}
                      onChange={handleHours}
                      styles={customStylesEvent}
                      className="w-56 md:w-80 lg:w-80 "
                    />
                  </div>

                  <div className='flex flex-col px-2'>
                    <label className="text-sm font-medium text-slate-600 mt-2 lg:mt-0">Duración</label>
                    <Select
                      placeholder="Seleccionar duración"
                      value={timeOptArray.filter((obj) => obj.value === durationEvent)}
                      options={timeOptArray}
                      onChange={handleDuration}
                      styles={customStylesEvent}
                      className="w-56 md:w-80 lg:w-80 "
                    />
                  </div>

                </div>

              </div>
              
              <div className="containerInputLabel flex flex-col gap-2 py-3 ">
                <h2 className="lg:text-base font-medium text-slate-700">03. Detalle </h2>
                <div className='flex flex-col pl-4'>
                  <FormInput
                    onHandleChange={(e) => { setDescriptionEvent(e.target.value); handleTimer(e); }}
                    inputClass="md:w-80 lg:w-[660px] h-20 rounded-lg border border-slate-300 placeholder:pl-2 shadow-sm
                    placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block focus:ring-1"
                    labelClass="text-sm font-medium text-slate-600" 
                    containerClass="flex flex-col w-56"
                    id="eventComments" 
                    type="textarea" 
                    label="Comentarios del evento" 

                    placeholder="Escribir comentarios"
                    verifyInput={!(activeVerify.eventComments) ? null :
                    verifyMessages.eventComments && verifyMessages.eventComments !== true
                    ? verifyMessages.eventComments : null} 
                  />
                </div>
              </div>

              <button disabled={!isVerified} className=" w-44 h-10 ml-9 md:ml-3 lg:ml-3 bg-celesteValtech rounded-lg text-base text-white font-medium" type="submit">
                Agendar evento
              </button>

            </form>
          </div>

        </div>

      </div>

    </div>

  )
}
