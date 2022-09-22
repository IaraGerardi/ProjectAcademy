// Importaciones de reacr, react router, hooks y axios
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useVerify from "../../../hooks/useVerify"
import axios from "axios";
// Componentes
import InputLabel from "../componentes-nuevoOrientado/InputLabel";
import Select from "react-select";
import { UploadImg } from "./UploadImg";
// CSS
import '../call-students.css';

function FormOrientado() {

  const url = "http://localhost:8000/admin/create";

  // ESTADOS DEL FORMULARIO DE SUS RESPECTIVOS INPUT
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  /* const [photoProfile, setphotoProfile] = useState(); */
  const [program, setProgram] = useState("");

  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [school, setSchool] = useState("");
  const [address, setAddress] = useState("");

  const [dni, setDni] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")

  const navegate = useNavigate();

  // Argumentos para la verificacion del formulario
  let verificationArgs = [
    { inputValue: name, payload: { id: "name", type: "text" } },
    { inputValue: lastname, payload: { id: "lastname", type: "password" } },
    { inputValue: email, payload: { id: "email", type: "email", noSpaces: true } },
    { inputValue: program, payload: { id: "program", type: "program" } },
    { inputValue: phone, payload: { id: "phone", type: "phone" } },
    { inputValue: age, payload: { id: "age", type: "age" } },
    { inputValue: school, payload: { id: "school", type: "school" } },
    { inputValue: address, payload: { id: "address", type: "address" } },
    { inputValue: dni, payload: { id: "dni", type: "dni", noSpaces: true } },
    { inputValue: password, payload: { id: "password", tType: "password", noSpaces: true } },
    { inputValue: confirmPassword, payload: { id: "confirmPassword", type: "confirmPassword", firstPass: password, noSpaces: true } },
  ]
  let { verifyForm, verifyMessages, isVerified } = useVerify(verificationArgs);

  const handleSubmit = async (e) => {
    e.preventDefault();
    verifyForm();
    try {
      const resp = await axios.post(url, {
        name: name,
        password: password,
        lastname: lastname,
        email: email,
        phone: phone,
        program: program,
        /*photoProfile: photoProfile,*/ 
        dni: dni,
        age: age,
        school: school,
        address: address, });

      navegate("/orientados/StudentInfo");
    } catch (error) {
      console.log(error.response);
    }
  };

  // Opciones del select
  const options = [
    { value: "Orientación vocacional", label: "Orientación vocacional" },
    { value: "Reorientación vocacional", label: "Reorientación vocacional" },
    { value: "Taller de matemáticas", label: "Taller de matemáticas" },
    { value: "Métodos de estudio", label: "Métodos de estudio" },
  ];

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setProgram(e.value);
  };

  // Funcion para darle un formato al nombre y apellido

  const handleNameChange = (e) => {
    let value = e.target.value;
    let arrVar = value.split(" ");

    for (let i = 0; i < arrVar.length; i++) {
      arrVar[i] = arrVar[i].charAt(0).toUpperCase() + arrVar[i].slice(1);
    }

    const nameVar = arrVar.join(" ");

    if (e.target.name === "name") {
      setName(nameVar)
    } else if(e.target.name === "lastname"){
      setLastname(nameVar)
    }
  };

  return (
    <div className="cotainerForm ml-8 mt-10 mb-10">
      <form
        method="POST"
        className=" flex flex-col gap-4"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >

        {/* abre formulario de alta de oreintado , tiene 4 divs hijos */}
        <div className="container-basicInfo ">

          {/* div1 info basica */}
          <h2 className="text-2xl font-medium text-slate-700">01.Informacion básica 1</h2>
          {/*  a cada uno de los InputLabel recibe los 4 props  */}
          {/* falta input imagen  */}
          <UploadImg />

          <div className=" cajaInputsDatosP flex flex-col flex-wrap h-40">
            <InputLabel
              labelName="Nombre"
              inputType="text"
              propInputName="name"
              placeholderName="ingresar nombre"
              propInputValue={name}
              propsOnchange={handleNameChange}
              verifyInput={verifyMessages.name ? verifyMessages.name :
                // verifyMessages.name === true ? backMessages.name : 
                null}
            />
            <InputLabel
              labelName="Apellido"
              inputType="text"
              propInputName="lastname"
              placeholderName="ingresar Apellido"
              propInputValue={lastname}
              propsOnchange={handleNameChange}
              verifyInput={verifyMessages.lastname ? verifyMessages.lastname :
                // verifyMessages.lastname === true ? backMessages.lastname : 
                null}
            />
            <InputLabel
              labelName="Email"
              inputType="email"
              propInputName="email"
              placeholderName="ingresar email"
              propInputValue={email}
              propsOnchange={(e) => setEmail(e.target.value)}
              verifyInput={verifyMessages.email ? verifyMessages.email :
                // verifyMessages.email === true ? backMessages.email : 
                null}
            />
            {/*------ select input ------------- */}
            <div>
              <label htmlFor="" className="font-medium text-slate-600">
                Programa
              </label>
              <Select
                placeholder="Select Option"
                value={options.filter((obj) => obj.value === program)} // set selected value
                options={options} // set list of the data
                onChange={handleChange} // assign onChange function
                className="w-64 rounded-lg "
              />
            </div>
          </div>
        </div>
        <div className="container-personalInfo  text-slate-700">
          {" "}
          {/* div2 datos personales */}
          <h2 className="text-2xl font-medium">02.Datos personales</h2>
          {/*  a cada uno de los InputLabel recibe los 4 props  */}
          <div className=" cajaInputsDatosP flex flex-col flex-wrap h-40">
            <InputLabel
              labelName="Telefono"
              inputType="phone"
              propInputName="tel"
              placeholderName="ingresar telefono"
              propInputValue={phone}
              propsOnchange={(e) => setPhone(e.target.value)}
              verifyInput={verifyMessages.phone ? verifyMessages.phone :
                // verifyMessages.phone === true ? backMessages.phone : 
                null}
            />
            <InputLabel
              labelName="Colegio"
              inputType="text"
              propInputName="school"
              placeholderName="ingresar colegio"
              propInputValue={school}
              propsOnchange={(e) => setSchool(e.target.value)}
              verifyInput={verifyMessages.school ? verifyMessages.school :
                // verifyMessages.school === true ? backMessages.school : 
                null}
            />
            <InputLabel
              labelName="Edad"
              inputType="date"
              propInputName="age"
              placeholderName="ingresar edad"
              propInputValue={age}
              propsOnchange={(e) => setAge(e.target.value)}
              verifyInput={verifyMessages.age ? verifyMessages.age :
                // verifyMessages.age === true ? backMessages.age : 
                null}
            />

            <InputLabel
              labelName="Domicilio"
              inputType="text"
              propInputName="address"
              placeholderName="ingresar domicilio"
              propInputValue={address}
              propsOnchange={(e) => setAddress(e.target.value)}
              verifyInput={verifyMessages.address ? verifyMessages.address :
                // verifyMessages.address === true ? backMessages.address : 
                null}
            />
          </div>
          <div className="containerInputLabel flex flex-col gap-2">
            <label className="font-medium text-slate-600">
              ¿Porque se acercó a nuestra institución?
            </label>
            <textarea
              rows="4"
              cols="40"
              name="why"
              placeholder="Escribe un comentario."
              className=" rounded-lg border border-slate-300 w-2/4 placeholder:pl-2"
            />
          </div>
        </div>
        <div className="container-crateUsernamePassword">
          {" "}
          {/* div3 crear usuario y contraseña */}
          <h2 className="text-2xl font-medium text-slate-700">03.Crear usuario y contraseña</h2>
          {/*  a cada uno de los InputLabel recibe los 4 props  */}
          <InputLabel
            labelName="Usuario"
            inputType="text"
            propInputName="dni"
            placeholderName="ingresar DNI del orientado"
            propInputValue={dni}
            propsOnchange={(e) => setDni(e.target.value)}
            verifyInput={verifyMessages.dni ? verifyMessages.dni :
              // verifyMessages.dni === true ? backMessages.dni : 
              null}
          />
          <InputLabel
            labelName="Nueva contraseña"
            inputType="password"
            propInputName="password"
            placeholderName="ingresar contraseña"
            propInputValue={password}
            propsOnchange={(e) => setPassword(e.target.value)}
            verifyInput={verifyMessages.password ? verifyMessages.password :
              // verifyMessages.password === true ? backMessages.password : 
              null}
          />
          <InputLabel
            labelName="Repetir contraseña"
            inputType="password"
            propInputName="passwordrepeat"
            placeholderName="Repetir contraseña"
            propInputValue={confirmPassword}
            propsOnchange={(e) => setConfirmPassword(e.target.value)}
            verifyInput={verifyMessages.confirmPassword ? verifyMessages.confirmPassword :
              // verifyMessages.confirmPassword === true ? backMessages.confirmPassword : 
              null}
          />
        </div>
        <div className="mt-10">
          {/* div4 botones form */}
          <button className=" w-44 h-10 bg-celesteValtech rounded-lg text-base text-white font-medium " type="submit">
            Ingresar Orientado
          </button>
          <button
            className=" w-32 text-sm underline " /*  onClick={propOnClickCancel} */
          >
            Cancelar ingreso
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormOrientado;
