// Importaciones de reacr, react router, hooks y axios
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useVerify from "../../../hooks/useVerify"
import axios from "axios";
// Componentes
import InputLabel from "../componentes-nuevoOrientado/InputLabel";
import Select from "react-select";
// CSS
import '../call-students.css';
import img from '../img/orientadoDefault-removebg-preview.png'
import './upload.css'
import "./alert.css"
// SVG
import Affirmation from "../img/affirmation.svg"
import Delete from "../img/delete.svg"

function FormOrientado() {

   const URI = "http://localhost:8000/admin/create"; 

  // ESTADOS DEL FORMULARIO DE SUS RESPECTIVOS INPUT
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  const [photoProfile, setphotoProfile] = useState("");
  const [program, setProgram] = useState("");

  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [school, setSchool] = useState("");
  const [address, setAddress] = useState("");
  const [why, setWhy] = useState("");
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
    const formData = new FormData() 
    formData.append('photoProfile', photoProfile)
    await axios.post(URI, {
      name: name,
      password: password,
      lastname: lastname,
      email: email,
      phone: phone,
      program: program,
      photoProfile: photoProfile, 
      dni: dni,
      age: age,
      school: school,
      address: address,
      why:why},{
        headers: {
          'Content-Type': 'multipart/form-data'
  }})
  .then((response)=>
  console.log(response))
  };

  // Opciones del select
  const options = [
    { value: "Orientación vocacional", label: "Orientación vocacional" },
    { value: "Reorientación vocacional", label: "Reorientación vocacional" },
    { value: "Taller de matemáticas", label: "Taller de matemáticas" },
    { value: "Métodos de estudio", label: "Métodos de estudio" },
  ];
  //estilos react-select
  const customStyles = {
    control: base => ({
      ...base,
      borderRadius: "8px",
      borderColor: '#cbd5e1',
      fontSize: "15px",
      height: 32,
      minHeight: 32,
      marginTop: '8px',
    })
  }


  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setProgram(e.value);
  };
  const handleCancelForm = (e) => {
    navegate("/orientados/newUsers");
  }

  // Funcion para darle un formato al nombre y apellido

  const handleNameChange = (e) => {
    let value = e.target.value.toLowerCase();
    let arrVar = value.split(" ");

    for (let i = 0; i < arrVar.length; i++) {
      arrVar[i] = arrVar[i].charAt(0).toUpperCase() + arrVar[i].slice(1);
    }

    const nameVar = arrVar.join(" ");

    if (e.target.name === "name") {
      setName(nameVar)
    } else if (e.target.name === "lastname") {
      setLastname(nameVar)
    }
  };

  /* previsualizacion de img */
  const [preview, setPreview] = useState();
  const fileInputRef = useRef();

  useEffect(() => {
    if (photoProfile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(photoProfile);
    } else {
      setPreview(null);
    }
  }, [photoProfile]);


  return (
    <div className="cotainerForm ml-8 mt-10 mb-10">
      <form
        method="POST"
        className=" flex flex-col gap-4"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <h2 className="text-2xl font-medium text-slate-700">01.Informacion básica 1</h2>
        {/* abre formulario de alta de oreintado , tiene 4 divs hijos */}
        <div className="container-basicInfo flex  flex-col lg:flex-row  gap-12 ">

          {/* div1 info basica */}

          {/*  a cada uno de los InputLabel recibe los 4 props  */}

          {/* previsualizacion img */}
          <div>
            {preview ? (
              <img
                className="imgProfile"
                src={preview}
                style={{ objectFit: "cover" }}
                onClick={() => {
                  setphotoProfile(null)
                }}
                alt='default'
              />
            ) : (
              <button
                className="btnUpload"
                onClick={(event) => {
                  event.preventDefault();
                  fileInputRef.current.click();
                }}
              >
                <img src={img} alt='profile' />
              </button>
            )}
            <input
              style={{ display: "none" }}
              ref={fileInputRef}
              type="file"
              onChange={(event) => {
                const file = event.target.files[0];
                if (file && file.type.substring(0, 5) === "image") {
                  setphotoProfile(file);
                } else {
                  setphotoProfile(null);
                }
              }}
            />
          </div>

          <div className=" cajaInputsDatosP flex flex-col w-3/4  md:flex-row md:gap-5 lg:flex-row lg:gap-5  lg:w-4/5">
            <div className=" w-64">
              <InputLabel
                labelName="Nombre"
                inputType="text"
                propInputName="name"
                placeholderName="Ingresar nombre"
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
                placeholderName="Ingresar Apellido"
                propInputValue={lastname}
                propsOnchange={handleNameChange}
                verifyInput={verifyMessages.lastname ? verifyMessages.lastname :
                  // verifyMessages.lastname === true ? backMessages.lastname : 
                  null}
              />
            </div>
            <div className=" w-64">
              <InputLabel
                labelName="Email"
                inputType="email"
                propInputName="email"
                placeholderName="Ingresar email"
                propInputValue={email}
                propsOnchange={(e) => setEmail(e.target.value)}
                verifyInput={verifyMessages.email ? verifyMessages.email :
                  // verifyMessages.email === true ? backMessages.email : 
                  null}
              />
              {/*------ select input ------------- */}
              <div className=" h-16 ">
                <label htmlFor="" className="font-medium text-slate-600">
                  Programa
                </label>
                <Select
                  placeholder="Select Option"
                  value={options.filter((obj) => obj.value === program)} // set selected value
                  options={options} // set list of the data
                  onChange={handleChange} // assign onChange function
                  styles={customStyles}//style para react select
                  className="w-64 rounded-lg "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container-personalInfo  text-slate-700 flex flex-col">
          {" "}
          {/* div2 datos personales */}
          <h2 className=" text-lg  md:text-xl  lg:text-2xl font-medium">02.Datos personales</h2>
          {/*  a cada uno de los InputLabel recibe los 4 props  */}
          <div className=" cajaInputsDatosP  flex  flex-col md:flex-row md:gap-5 lg:flex-row lg:gap-5 h-62">
            <div>
              <InputLabel
                labelName="Telefono"
                inputType="phone"
                propInputName="tel"
                placeholderName="Ingresar telefono"
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
                placeholderName="Ingresar colegio"
                propInputValue={school}
                propsOnchange={(e) => setSchool(e.target.value)}
                verifyInput={verifyMessages.school ? verifyMessages.school :
                  // verifyMessages.school === true ? backMessages.school : 
                  null}
              />
            </div>
            <div>
              <InputLabel
                labelName="Edad"
                inputType="date"
                propInputName="age"
                placeholderName="Ingresar edad"
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
                placeholderName="Ingresar domicilio"
                propInputValue={address}
                propsOnchange={(e) => setAddress(e.target.value)}
                verifyInput={verifyMessages.address ? verifyMessages.address :
                  // verifyMessages.address === true ? backMessages.address : 
                  null}
              />
            </div>
          </div>
          <div className="containerInputLabel flex flex-col gap-2">
            <label className="font-medium text-slate-600">
              ¿Porque se acercó a nuestra institución?
            </label>
            <textarea
              rows="4"
              cols="40"
              name="why"
              onChange={(e) => setWhy(e.target.value)}
              placeholder="Escribe un comentario."
              className=" rounded-lg border border-slate-300 w-3/4 lg:w-2/4 placeholder:pl-2"
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
            placeholderName="Ingresar DNI del orientado"
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
          <button className=" w-32 text-sm underline" onClick={handleCancelForm}>Cancelar ingreso</button>
        </div>


        <div className="alert">

          <img src={Affirmation} alt="icon de afirmacion" />
          <p className="msg-alert">El Orientado fué ingresado con éxito.</p>
          <img src={Delete} alt="icon de eliminar" />
        </div>

      </form>
    </div>
  );
}

export default FormOrientado;
