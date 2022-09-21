import InputLabel from "../componentes-nuevoOrientado/InputLabel";
import Select from "react-select";
import React, { useState } from "react";
import axios from "axios";

const url = "http://localhost:8000/admin/create";

function FormOrientado() {
  // ESTADOS DEL FORMULARIO DE SUS RESPECTIVOS INPUT
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  // const [select, setSelect] = useState("");
  const [program, setProgram] = useState("");

  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [school, setSchool] = useState("");
  const [address, setAddress] = useState("");

  const [dni, setDni] = useState("");
  const [password, setPassword] = useState("");
  // const [nuevacontraseña, setNuevacontraseña] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(url, {
        name: name,
        password: password,
        lastname: lastname,
        email: email,
        phone: phone,
        program: program,
        // photoProfile: photoProfile,
        dni: dni,
        age: age,
        school: school,
        address: address,

        // apellido: apellido,
        // email: email,
        // select: select,
        // telefono: telefono,
        // edad: edad,
        // colegio: colegio,
        // domicilio: domicilio,
        // usuario: usuario,
        // contraseña: contraseña,
        // nuevacontraseña: nuevacontraseña,
      });
      console.log(resp.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const options = [
    { value: "Orientación vocacional", label: "Orientación vocacional" },
    { value: "Reorientación vocacional", label: "Reorientación vocacional" },
    { value: "Taller de matemáticas", label: "Taller de matemáticas" },
    { value: "Métodos de estudio", label: "Métodos de estudio" },
  ];

  // set value for default selection
  const [selectedValue, setSelectedValue] = useState(3);

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectedValue(e.value);
  };

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
          <h2>01.Informacion básica 1</h2>
          {/*  a cada uno de los InputLabel recibe los 4 props  */}
          {/* falta input imagen  */}
          <InputLabel
            labelName="Nombre"
            inputType="text"
            propInputName="name"
            placeholderName="ingresar nombre"
            propInputValue={name}
            propsOnchange={(e) => setName(e.target.value)}
          />
          <InputLabel
            labelName="Apellido"
            inputType="text"
            propInputName="lastname"
            placeholderName="ingresar Apellido"
            propInputValue={password}
            propsOnchange={(e) => setLastname(e.target.value)}
          />
          <InputLabel
            labelName="Email"
            inputType="email"
            propInputName="email"
            placeholderName="ingresar email"
            propInputValue={email}
            propsOnchange={(e) => setEmail(e.target.value)}
          />
          {/*------ select input ------------- */}
          <div>
            <label htmlFor="" className="font-medium text-slate-600">
              Programa
            </label>
            <Select
              placeholder="Select Option"
              value={options.filter((obj) => obj.value === selectedValue)} // set selected value
              options={options} // set list of the data
              onChange={handleChange} // assign onChange function
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
            propInputValue={phone}
            propsOnchange={(e) => setPhone(e.target.value)}
          />
          <InputLabel
            labelName="Edad"
            inputType="number"
            propInputName="age"
            placeholderName="ingresar edad"
            propInputValue={age}
            propsOnchange={(e) => setAge(e.target.value)}
          />
          <InputLabel
            labelName="Colegio"
            inputType="text"
            propInputName="school"
            placeholderName="ingresar colegio"
            propInputValue={school}
            propsOnchange={(e) => setSchool(e.target.value)}
          />
          <InputLabel
            labelName="Domicilio"
            inputType="text"
            propInputName="address"
            placeholderName="ingresar domicilio"
            propInputValue={address}
            propsOnchange={(e) => setAddress(e.target.value)}
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
            propInputValue={dni}
            propsOnchange={(e) => setDni(e.target.value)}
          />
          <InputLabel
            labelName="Nueva contraseña"
            inputType="password"
            propInputName="password"
            placeholderName="ingresar contraseña"
            propInputValue={password}
            propsOnchange={(e) => setPassword(e.target.value)}
          />
          {/* <InputLabel
            labelName="Repetir contraseña"
            inputType="password"
            propInputName="passwordrepeat"
            placeholderName="Repetir contraseña"
            propInputValue={nuevacontraseña}
            propsOnchange={(e) => setNuevacontraseña(e.target.value)}
          /> */}
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
