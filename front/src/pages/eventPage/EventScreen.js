import React from 'react'
import HeaderInicio from '../sidebar-header/components/HeaderInicio'
import { Sidebar } from '../sidebar-header/components/Sidebar.js'
import Select from "react-select";
import { useState, useEffect } from "react";
import axios from 'axios';
import './event.css'

export const EventScreen = () => {

  const URI ='http://localhost:8000/admin/orientadores';

  const [orientador, setOrientador] = useState('')


  const [horario, setHorario] = useState("");

  useEffect( ()=>{
    getOrientadores()
},[])

  const getOrientadores = async () =>{
    const res = await axios.get(URI)
    console.log(res.data)
    setOrientador(res.data)
  }

const optionsTwo  = [
  { value: 'Gonzalo Cataldo', label: 'Gonzalo Cataldo', },
  { value: 'Iara Gerardi', label: 'Iara Gerardi' },
  { value: 'Sebastian Avila', label: 'Sebastian Avila' },
  { value: 'Ayelen Maidana', label: 'Ayelen Maidana' },
  { value: 'Maximiliano Portel', label: 'Maximiliano Portel' },
  { value: 'Macarena Leiva', label: 'Macarena Leiva', },
];


  
  const options = [
    { value: "09:00", label: "09:00 hs" },
    { value: "09:30", label: "09:30 hs" },
    { value: "10:00", label: "10:00 hs" },
    { value: "10:30", label: "10:30 hs" },
  ];
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


    const handleChangeTwo = (e) => {
      setOrientador(e.value);
    };
  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setHorario(e.value);
  };

  return (

    <div className="container-P w-full flex"> {/*  containedor padre tamaño igual a app */}
      <Sidebar /> {/* hijo 1 izquierdo sticky */}

    <div className="container-derecho header-sa">{/*  hijo2 derecho  column */}
      <HeaderInicio propNamePage="Eventos"/>
      
      <div>
        
        <div>
          <h2 className="text-2xl font-medium text-slate-700">Crear un evento</h2>
          <h4>Puedes crear un primer encuentro entre Orientadores y Orientados.</h4>

          <form className='formEvent'>

            <h2 className="text-2xl font-medium text-slate-700">01. Información sobre el evento</h2>

        <div className='style'>
            <label className="font-medium text-slate-600">Nombre del evento</label>
            <input
            className='w-64 h-8 p-2 rounded-lg border'
            type='text'
            placeholder='Ingresar nombre'
            />

            <label className="font-medium text-slate-600">Orientador participante</label>
            <Select
                placeholder="Seleccionar orientador"
                value={optionsTwo.filter((obj) => obj.value === orientador)} // set selected value
                options={optionsTwo} // set list of the data
                onChange={handleChangeTwo } // assign onChange function
                styles={customStyles}//style para react select
                className="w-64 rounded-lg "
              />
            

            <label className="font-medium text-slate-600">Orientado/es participante/s</label>
            <input
            className='w-64 h-8 p-2 rounded-lg border'
            type='search' 
            placeholder='selecciona orientado/es'
            />
        </div>

            <h2 className="text-2xl font-medium text-slate-700">02. Días y Horarios disponibles </h2>
        <div className='style'>   
            <label className="font-medium text-slate-600">Fecha</label>
            <input
            className='w-64 h-8 p-2 rounded-lg border'
            type='date' 
            placeholder='Ingresar fecha' 
            />

            <label className="font-medium text-slate-600">Horario</label>
            <Select
                placeholder="Seleccionar horario"
                value={options.filter((obj) => obj.value === horario)} // set selected value
                options={options} // set list of the data
                onChange={handleChange} // assign onChange function
                styles={customStyles}//style para react select
                className="w-64 rounded-lg "
              />

            <label className="font-medium text-slate-600">Duración</label>
            <Select
                placeholder="Seleccionar duración"
             /*    value={} // set selected value
                options={} // set list of the data
                onChange={} // assign onChange function*/
                styles={customStyles}//style para react select
                className="w-64 rounded-lg " 
              />  
              
          </div> 

          <h2 className="text-2xl font-medium text-slate-700">03. Detalle </h2>

          <div  className="containerInputLabel flex flex-col gap-2">
            <label className="font-medium text-slate-600">
              Comentarios del evento
            </label>
            <textarea
              rows="4"
              cols="40"
              name="why"
              
              placeholder="En este espacio vamos a despejar dudas"
              className=" rounded-lg border border-slate-300 w-3/4 lg:w-2/4 placeholder:pl-2"
            />
          </div>


          </form>
        </div>

      </div>
        
    </div>

    </div>
  
  )
}
