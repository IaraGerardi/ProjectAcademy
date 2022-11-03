import React from 'react';
import HeaderInicio from '../sidebar-header/components/HeaderInicio';
import { Sidebar } from '../sidebar-header/components/Sidebar.js';
import Select from "react-select";
import FormInput from '../global-components/formInput';
import makeAnimated from 'react-select/animated';
import Icon from '../global-components/Svg-icon';
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

  const navegate = useNavigate();
  const animatedComponents = makeAnimated();
  const URI = `${process.env.REACT_APP_BASE_URL}/events`;

  const [activeVerify, setActiveVerify] = useState({});
  const formValues = [{ inputValue: nameEvent }, { inputValue: valueCounselor }, { inputValue: valueOriented }, { inputValue: dateEvent },
  { inputValue: timeEvent }, { inputValue: durationEvent }, { inputValue: descriptionEvent }];
  const { handleVerifyForm, verifyMessages, isVerified } = useVerify(formValues, verifications);

  useEffect(() => {
    const ShowData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/counselor`, { withCredentials: true })
        setCounselorEvent(res.data.info)
      } catch (err) {
        if (err.response.data.message === 'Not logged') {
          localStorage.removeItem("usuario")
          navegate('/LogIn')
      }
      }
    }
    ShowData();
  }, [navegate])

  const ShowDataStudents = async () => {
    const resp = await axios.get(`${process.env.REACT_APP_BASE_URL}/oriented`, { withCredentials: true })
    setOrientedEvent(resp.data.info)
  }

  useEffect(() => {
    ShowDataStudents();
  }, [])

  const handleTimer = (e) => {
    const inputName = e.target ? e.target.name : e.name ? e.name : e[0].name

    if (activeVerify[inputName] === true) {
      return;
    }
    let timer = setTimeout(() => {
      setActiveVerify({
        ...activeVerify,
        [inputName]: true
      })
    }, 1000)
    return () => clearTimeout(timer);
  }

  useEffect(() => {
    handleVerifyForm();
  }, [nameEvent, valueCounselor, valueOriented, dateEvent, timeEvent, durationEvent, descriptionEvent])

  const showAllVerifications = () => {
    let mutableObj = {};
    Object.keys(verifications).forEach((i) => {
      mutableObj[verifications[i].id] = true;
    });
    setActiveVerify(mutableObj)
  }

  const handleErrorMessage = (property) => {
    if (!(activeVerify[property]) || !(verifyMessages[property])) {
      return null;
    }
    return verifyMessages[property];
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isVerified) {
      showAllVerifications();
      return;
    }
    await axios.post(URI, {
      nameEvent,
      counselorEvent: valueCounselor,
      orientedEvent: valueOriented,
      dateEvent,
      timeEvent,
      durationEvent,
      descriptionEvent,
    }, { withCredentials: true }
    )
      .then((response) => {
        if (response.status === 200) {
          setActive(!active)
          navegate('/eventos')
        }
      })
  }

  useEffect(() => {

    const timeArray = [];
    let i = 15;
    let time = "";

    const handlerDurationEvent = () => {

      do {
        (i.toString().length <= 2) ? time = `00${i}` : time = `0${i}`;
        time = `${time.slice(0, 2)}:${time.slice(-2)}:00`
        timeArray.push({ name: "eventDuration", value: time, label: time })
        parseInt(i.toString().slice(-2)) < 45 ? i += 15 : i += 55;
      } while (i <= 800)

      setTimeOptArray(timeArray);
    }
    handlerDurationEvent();
  }, [])

  const handlerSelectOne = (e) => {
    setValueCounselor(e);
    handleTimer(e);
  };

  const handlerSelectTwo = (e) => {
    setValueOriented(e);
    handleTimer(e);
  };

  const handleHours = (e) => {
    setHours(e.value);
    handleTimer(e);
  }

  const handleDuration = (e) => {
    setDuration(e.value);
    handleTimer(e);
  }

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

        <div className='lg:mt-6 lg:m-0 md:ml-5'>

          <div className='m-2 md:mt-5 md:ml-5 lg:pl-[70px]'>
            <h2 className="lg:text-2xl md:text-xl font-medium text-slate-700 pl-5 lg:pl-0">Crear un evento</h2>
            <h4 className='lg:text-lg md:text-base text-slate-700 text-sm pl-5 lg:pl-0'>Puedes crear un primer encuentro entre Orientadores y Orientados.</h4>

            <form
              onSubmit={handleSubmit}
              className='mt-5 flex flex-col lg:m-0 md:mr-20  lg:max-w-max'>

              <h2 className="lg:text-base font-medium text-slate-700 lg:pt-3 ml-5 lg:ml-0">01. Información sobre el evento</h2>

              <div className='flex flex-col lg:flex-row md:flex-wrap lg:py-2 pl-3 pt-2 '>
                <FormInput
                  onHandleChange={(e) => { setName(e.target.value); handleTimer(e); }}
                  inputClass=" w-56 md:w-80 lg:w-[298px] text-sm p-2 rounded-lg border shadow-sm border-slate-300
                  placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block focus:ring-1"
                  labelClass="text-sm font-medium text-slate-600"
                  containerClass="flex flex-col px-2 h-20"
                  id="eventName"
                  type="text"
                  errorClass="mt-[5px]"
                  label="Nombre del evento"
                  placeholder="Ingresar nombre"
                  verifyInput={handleErrorMessage("eventName")}
                />

                <div className='flex flex-col px-2 h-20'>
                  <label className='text-sm font-medium text-slate-600 mt-2 lg:mt-0'>Orientador participante</label>
                  <Select
                    Name="valueCounselor"
                    inputId="counselor"
                    placeholder="Seleccionar orientador"
                    options={counselorEvent.map(elem => ({ name: "valueCounselor", label: `${elem.name} ${elem.lastname}`, value: elem.id }))}
                    onChange={handlerSelectOne}
                    styles={customStylesEvent}
                    className='w-56 md:w-80 lg:w-[298px]'
                  />
                  {!(activeVerify.valueCounselor) ? null : verifyMessages.valueCounselor &&
                    verifyMessages.valueCounselor !== null && verifyMessages.valueCounselor !== true ?
                    <div className={`flex items-center relative bottom-3 py-2 mt-[5px]`}>
                      <Icon
                        classname="w-3.5 h-3.5 mr-1 fill-red-600"
                        type="exclamationMark"
                        width="24" height="24" />
                      <span className="text-red-600 text-xs ">{verifyMessages.valueCounselor}</span>
                    </div>
                    : null
                  }
                </div>

                <div className='flex flex-col px-2 h-20'>
                  <label className='text-sm font-medium text-slate-600 mt-2 lg:mt-0'>Orientado/es participante/s</label>
                  <Select
                    Name="oriented"

                    placeholder="Seleccionar orientado"
                    options={orientedEvent.map(elem => ({ name: "oriented", label: `${elem.name} ${elem.lastname}`, value: elem.id }))}
                    onChange={handlerSelectTwo}
                    isMulti
                    components={animatedComponents}
                    styles={customStylesEvent}
                    className='w-56 md:w-80 lg:w-[298px]'
                  />
                  {!(activeVerify.oriented) ? null : verifyMessages.oriented &&
                    verifyMessages.oriented !== null && verifyMessages.oriented !== true ?
                    <div className={`flex items-center relative bottom-3 py-2 mt-[5px]`}>
                      <Icon
                        classname="w-3.5 h-3.5 mr-1 fill-red-600"
                        type="exclamationMark"
                        width="24" height="24" />
                      <span className="text-red-600 text-xs">{verifyMessages.oriented}</span>
                    </div>
                    : null
                  }
                </div>

              </div>

              <div className='border-y-2 md:flex-wrap lg:pb-0 md:pb-5 pb-4 pt-6  mt-4 lg:mt-0'>
                <h2 className="lg:text-base font-medium text-slate-700 mb-4 ml-5 lg:ml-0">02. Días y Horarios disponibles </h2>

                <div className='flex flex-col lg:flex-row md:flex-wrap lg:py-3 pl-3 pt-2 '>
                  {/* Agregarle altura al input en si */}
                  <FormInput
                    onHandleChange={(e) => { setDateEvent(e.target.value); handleTimer(e); }}
                    inputClass="text-sm w-56 md:w-80 lg:w-[298px] p-2 rounded-lg border shadow-sm
                    border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block 
                    focus:ring-1 h-10"
                    labelClass="text-sm font-medium text-slate-600"
                    containerClass="flex flex-col px-2 h-20"
                    errorClass="h-2 relative top-[0.1px]"
                    id="eventDate"
                    type="date"
                    label="Fecha"
                    placeholder="Ingresar fecha"
                    verifyInput={handleErrorMessage("eventDate")}
                  />

                  <div className='flex flex-col px-2 h-20'>
                    <label className="text-sm font-medium text-slate-600 mt-2 lg:mt-0">Horario</label>
                    <Select
                      placeholder="Seleccionar horario"
                      value={optionsHours.filter((obj) => obj.value === timeEvent)} // set selected value
                      options={optionsHours}
                      onChange={handleHours}
                      styles={customStylesEvent}
                      className="w-56 md:w-80 lg:w-[298px] "
                    />
                    {!(activeVerify.eventTime) ? null : verifyMessages.eventTime &&
                      verifyMessages.eventTime !== null && verifyMessages.eventTime !== true ?
                      <div className={`flex items-center relative bottom-3 py-2 mt-[5px]`}>
                        <Icon
                          classname="w-3.5 h-3.5 mr-1 fill-red-600"
                          type="exclamationMark"
                          width="24" height="24" />
                        <span className="text-red-600 text-xs ">{verifyMessages.eventTime}</span>
                      </div>
                      : null
                    }
                  </div>

                  <div className='flex flex-col px-2 h-20'>
                    <label className="text-sm font-medium text-slate-600 mt-2 lg:mt-0">Duración</label>
                    <Select
                      placeholder="Seleccionar duración"
                      value={timeOptArray.filter((obj) => obj.value === durationEvent)}
                      options={timeOptArray}
                      onChange={handleDuration}
                      styles={customStylesEvent}
                      className="w-56 md:w-80 lg:w-[298px] "
                    />
                    {!(activeVerify.duration) ? null : verifyMessages.duration &&
                      verifyMessages.duration !== null && verifyMessages.duration !== true ?
                      <div className={`flex items-center relative bottom-3 py-2 mt-[5px]`}>
                        <Icon
                          classname="w-3.5 h-3.5 mr-1 fill-red-600"
                          type="exclamationMark"
                          width="24" height="24" />
                        <span className="text-red-600 text-xs ">{verifyMessages.duration}</span>
                      </div>
                      : null
                    }
                  </div>

                </div>

              </div>

              <div className="containerInputLabel flex flex-col gap-2 py-3 ">
                <h2 className="lg:text-base font-medium text-slate-700 ml-5 lg:ml-0">03. Detalle </h2>
                <div className='flex flex-col pl-4 '>
                  <FormInput
                    onHandleChange={(e) => { setDescriptionEvent(e.target.value); handleTimer(e); }}
                    inputClass="md:w-80 lg:w-[620px] h-20 rounded-lg border border-slate-300 placeholder:pl-2 shadow-sm
                    placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block focus:ring-1 resize-none"
                    labelClass="text-sm font-medium text-slate-600 "
                    containerClass="flex flex-col w-56 md:w-80 lg:w-[620px] h-30"
                    errorClass="mt-[5px]"
                    id="eventComments"
                    type="textarea"
                    label="Comentarios del evento"
                    placeholder="Escribir comentarios"
                    verifyInput={handleErrorMessage("eventComments")}
                  />
                </div>
              </div>

              <button type="submit"
                className={`w-44 h-10 lg:mt-0 ml-9 md:ml-4 lg:ml-4 bg-celesteValtech rounded-lg text-base text-white font-medium`}>
                Agendar evento
              </button>

            </form>
          </div>

        </div>

      </div>

    </div>

  )
}
