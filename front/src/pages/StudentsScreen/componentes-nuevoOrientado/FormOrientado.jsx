import InputLabel from "../componentes-nuevoOrientado/InputLabel";
import Select from "react-select";
import React, { useState } from "react";
import axios from "axios";

const url = "http://localhost:8000/admin/create";

function FormOrientado() {
  // ESTADOS DEL FORMULARIO DE SUS RESPECTIVOS INPUT
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");

  const [select, setSelect] = useState("");

  const [telefono, setTelefono] = useState("");
  const [edad, setEdad] = useState("");
  const [colegio, setColegio] = useState("");
  const [domicilio, setDomicilio] = useState("");

  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [nuevacontraseña, setNuevacontraseña] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(url, {
        apellido: apellido,
        email: email,
        select: select,
        telefono: telefono,
        edad: edad,
        colegio: colegio,
        domicilio: domicilio,
        usuario: usuario,
        contraseña: contraseña,
        nuevacontraseña: nuevacontraseña,
      });
      console.log(resp.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const options = [
    { value: "programa1", label: "Orientación vocacional " },
    { value: "programa2", label: "Reorientación vocacional" },
    { value: "programa3", label: "Taller de matemáticas" },
    { value: "programa4", label: "Métodos de estudio" },
  ];

  return (
    <>
      <form
        method="POST"
        className=" flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        {" "}
        {/* abre formulario de alta de oreintado , tiene 4 divs hijos */}
        <div className="container-basicInfo ">
          {" "}
          {/* div1 info basica */}
          <h2>01.Informacion básica</h2>
          {/*  a cada uno de los InputLabel recibe los 4 props  */}
          {/* falta input imagen  */}
          <InputLabel
            labelName="Nombre"
            inputType="text"
            propInputName="name"
            placeholderName="ingresar nombre"
            propInputValue={nombre}
            propsOnchange={(e) => setNombre(e.target.value)}
          />
          <InputLabel
            labelName="Apellido"
            inputType="text"
            propInputName="lastname"
            placeholderName="ingresar Apellido"
            propInputValue={apellido}
            propsOnchange={(e) => setApellido(e.target.value)}
          />
          <InputLabel
            labelName="Email"
            inputType="email"
            propInputName="email"
            placeholderName="ingresar email"
            propInputValue={email}
            propsOnchange={(e) => setEmail(e.target.value)}
          />
          <div>
            <label htmlFor="" className="font-medium text-slate-600">
              Programa
            </label>
            <Select /* componente de react select esta importado arriba */
              placeholder="seleccionar opcion"
              options={options} /* trae un array de objetos con las opciones */
              propInputValue={select}
              onChange={(e) => setSelect(e.target.value)}
            />
          </div>
        </div>
        <div className="container-personalInfo">
          {" "}
          {/* div2 datos personales */}
          <h2>02.Datos personales</h2>
          {/*  a cada uno de los InputLabel recibe los 4 props  */}
          <InputLabel
            labelName="Telefono"
            inputType="phone"
            propInputName="tel"
            placeholderName="ingresar telefono"
            propInputValue={telefono}
            propsOnchange={(e) => setTelefono(e.target.value)}
          />
          <InputLabel
            labelName="Edad"
            inputType="number"
            propInputName="age"
            placeholderName="ingresar edad"
            propInputValue={edad}
            propsOnchange={(e) => setEdad(e.target.value)}
          />
          <InputLabel
            labelName="Colegio"
            inputType="text"
            propInputName="school"
            placeholderName="ingresar colegio"
            propInputValue={colegio}
            propsOnchange={(e) => setColegio(e.target.value)}
          />
          <InputLabel
            labelName="Domicilio"
            inputType="text"
            propInputName="address"
            placeholderName="ingresar domicilio"
            propInputValue={domicilio}
            propsOnchange={(e) => setDomicilio(e.target.value)}
          />
          <div className="containerInputLabel flex flex-col gap-2">
            <label className="font-medium text-slate-600">
              ¿Porque se acercó a nuestra institución?
            </label>
            <textarea
              rows="4"
              cols="40"
              name="why"
              placeholder="Escribe un comentario."
              className=" rounded-lg border border-slate-300"
            />
          </div>
        </div>
        <div className="container-crateUsernamePassword">
          {" "}
          {/* div3 crear usuario y contraseña */}
          <h2>03.Crear usuario y contraseña</h2>
          {/*  a cada uno de los InputLabel recibe los 4 props  */}
          <InputLabel
            labelName="Usuario"
            inputType="text"
            propInputName="dni"
            placeholderName="ingresar DNI del orientado"
            propInputValue={usuario}
            propsOnchange={(e) => setUsuario(e.target.value)}
          />
          <InputLabel
            labelName="Nueva contraseña"
            inputType="password"
            propInputName="password"
            placeholderName="ingresar contraseña"
            propInputValue={contraseña}
            propsOnchange={(e) => setContraseña(e.target.value)}
          />
          <InputLabel
            labelName="Repetir contraseña"
            inputType="password"
            propInputName="passwordrepeat"
            placeholderName="Repetir contraseña"
            propInputValue={nuevacontraseña}
            propsOnchange={(e) => setNuevacontraseña(e.target.value)}
          />
        </div>
        <div>
          {" "}
          {/* div4 botones form */}
          <button className=" w-32 bg-blue-600 " type="submit">
            Ingresar Orientado
          </button>
          <button
            className=" w-32 bg-gray-600 " /*  onClick={propOnClickCancel} */
          >
            Cancelar ingreso
          </button>
        </div>
      </form>
    </>
  );
}

export default FormOrientado;
