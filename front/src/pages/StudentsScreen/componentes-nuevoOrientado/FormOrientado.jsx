// Importaciones de react, react router, hooks y axios
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useVerify from "../../../hooks/useVerify";
import verifications from "../../../verifyArguments/verifyOrientado.json"
import axios from "axios";
// Componentes
import InputLabel from "../componentes-nuevoOrientado/InputLabel";
import Select from "react-select";
import Icon from "../../global-components/Svg-icon";
import FormInput from "../../global-components/formInput";
// CSS

import img from '../img/orientadoDefault-removebg-preview.png'
import './upload.css'
import "./alert.css"



function FormOrientado() {
  const URI = `${process.env.REACT_APP_BASE_URL}/oriented`;

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
  const [confirmPassword, setConfirmPassword] = useState("");

  const [active, setActive] = useState(false);
  const [activeVerify, setActiveVerify] = useState({});
  const [backMessages, setBackMessages] = useState({ email: null, dni: null, });

  const navegate = useNavigate();

  let formValues = [
    { inputValue: name }, { inputValue: lastname }, { inputValue: email }, { inputValue: program }, { inputValue: phone },
    { inputValue: age }, { inputValue: school }, { inputValue: address }, { inputValue: why }, { inputValue: dni },
    { inputValue: password }, { inputValue: confirmPassword }
  ]

  let { handleVerifyForm, verifyMessages, isVerified } = useVerify(formValues, verifications);

  const handleSetNull = (obj) => {
    Object.keys(obj).forEach((index) => {
      obj[index] = null;
    });
  }

  const handleTimer = (e) => {
    if (activeVerify[e.target.name] === true) {
      return;
    }
    let timer = setTimeout(() => {
      setActiveVerify({
        ...activeVerify,
        [e.target.name]: true
      })
    }, 8000)
    return () => clearTimeout(timer);
  }

  useEffect(() => {
    handleSetNull(backMessages);
    handleVerifyForm();
  }, [name, lastname, email, program, phone, age, school, address, why, dni, password, confirmPassword])

  const handleErrorMessage = (property) => {

    if (!(activeVerify[property]) || !(verifyMessages[property])) {
      return null;
    }

    if (property !== "dni" && property !== "email") {
      return verifyMessages[property];
    }

    if (verifyMessages[property] !== true) {
      return verifyMessages[property];
    } else {
      return backMessages[property];
    }

  }

  const showAllVerifications = () => {
    let mutableObj = {};
    Object.keys(verifications).forEach((i) => {
      mutableObj[verifications[i].id] = true;
    });
    setActiveVerify(mutableObj)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isVerified) {
      showAllVerifications();
      return;
    }

    try {
      const formData = new FormData()
      formData.append('photoProfile', photoProfile)
      const response = await axios.post(URI, {
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
        why: why
      },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
      console.log(response.data, response.data.info)
      if (response.status === 200) {
        setActive(!active)
        navegate(`/orientados/StudentInfo/${response.data.info}`)
      }
    } catch (err) {
      const errors = err.response.data.info.errors

      for (let i = 0; i < errors.length; i++) {
        setBackMessages(prevBackMessages => ({
          ...prevBackMessages,
          [errors[i].param]: errors[i].msg,
        }))
      }
    }
  };

  const options = [
    { value: "Orientación vocacional", label: "Orientación vocacional" },
    { value: "Reorientación vocacional", label: "Reorientación vocacional" },
    { value: "Taller de matemáticas", label: "Taller de matemáticas" },
    { value: "Métodos de estudio", label: "Métodos de estudio" },
  ];

  const customStyles = {
    control: base => ({
      ...base,
      borderRadius: "8px",
      borderColor: '#cbd5e1',
      fontSize: "15px",
      height: 32,
      minHeight: 32,

    })
  }

  const handleProgramChange = (e) => {
    setProgram(e.value);
  };

  const handleCancelForm = (e) => {
    navegate("/orientados/newUsers");
  }

  const handleNameChange = (e) => {
    let value = e.target.value.toLowerCase();
    let valueArray = value.split(" ");

    for (let i = 0; i < valueArray.length; i++) {
      valueArray[i] = valueArray[i].charAt(0).toUpperCase() + valueArray[i].slice(1);
    }

    const newValue = valueArray.join("");
    if (e.target.name === "name") {
      setName(newValue)
    } else if (e.target.name === "lastname") {
      setLastname(newValue)
    }
  };

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
    <div className="cotainerForm mt-12 mb-10  ml-10 mr-4 md:ml-14 lg:ml-24 lg:mr-4 w-auto">
      <form
        className=" flex flex-col gap-4 w-56 md:w-full lg:w-full"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <h2 className="text-lg  md:text-xl  lg:text-2xl font-medium text-slate-700">01.Informacion básica 1</h2>
        <div className="container-basicInfo flex  flex-col gap-5 lg:flex-row  lg:gap-5 md:w-full lg:h-48">

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

          <div className="cajaInputsDatosP flex flex-col gap-0 md:min-w-3/4 md:flex-row md:gap-5 lg:flex-row lg:gap-10 lg:w-4/5 lg:h-48 ">
            <div className=" w-56  md:w-72 lg:w-72 flex flex-col ">
              <InputLabel
                labelName="Nombre"
                inputType="text"
                propInputName="name"
                placeholderName="Ingresar nombre"
                propInputValue={name}
                propsOnchange={(e) => { handleTimer(e); handleNameChange(e) }}
                verifyInput={handleErrorMessage("name")}
              />
              <InputLabel
                labelName="Apellido"
                inputType="text"
                propInputName="lastname"
                placeholderName="Ingresar Apellido"
                propInputValue={lastname}
                propsOnchange={(e) => { handleTimer(e); handleNameChange(e); }}
                verifyInput={handleErrorMessage("lastname")}
              />
            </div>
            <div className=" w-56  md:w-72 lg:w-72">
              <InputLabel
                labelName="Email"
                inputType="email"
                propInputName="email"
                placeholderName="Ingresar email"
                propInputValue={email}
                propsOnchange={(e) => { handleTimer(e); setEmail(e.target.value) }}
                verifyInput={handleErrorMessage("email")}
              />
              <div className=" w-56 md:w-72 lg:-72 h-24 flex flex-col gap-2">
                <label htmlFor="" className="font-medium text-slate-600 mt-1">
                  Programa
                </label>
                <Select
                  placeholder="Select Option"
                  value={options.filter((obj) => obj.value === program)}
                  options={options}
                  onChange={(e) => { handleProgramChange(e); }}
                  styles={customStyles}
                  className={`w-56 md:w-64 lg:w-64 h-8 rounded-lg`}
                />
                {!(activeVerify.program) ? null : verifyMessages.program &&
                  (verifyMessages.program !== null && verifyMessages.program !== true) ?
                  <div className="flex items-center relative bottom-2">
                    <Icon
                      classname="w-3.5 h-3.5 my-1.5 fill-red-600"
                      type="exclamationMark"
                      width="24" height="24" />
                    <span className="text-red-600 ml-1.5 text-xs">{verifyMessages.program}</span>
                  </div>
                  : null
                }
              </div>
            </div>
          </div>
        </div>
        <div className="container-personalInfo  text-slate-700 flex flex-col h-max md:h-full lg:h-full gap-3">
          
          <h2 className=" text-lg  md:text-xl  lg:text-2xl font-medium ">02.Datos personales</h2>
          <div className=" cajaInputsDatosP  flex  flex-col md:flex-row md:gap-5 lg:flex-row lg:gap-5  ">
            <div >
              <InputLabel
                labelName="Telefono"
                inputType="phone"
                propInputName="tel"
                placeholderName="Ingresar telefono"
                propInputValue={phone}
                propsOnchange={(e) => { handleTimer(e); setPhone(e.target.value) }}
                verifyInput={handleErrorMessage("tel")}
              />
              <InputLabel
                labelName="Colegio"
                inputType="text"
                propInputName="school"
                placeholderName="Ingresar colegio"
                propInputValue={school}
                propsOnchange={(e) => { handleTimer(e); setSchool(e.target.value) }}
                verifyInput={handleErrorMessage("school")}
              />
            </div>
            <div>
              <InputLabel
                labelName="Edad"
                inputType="date"
                propInputName="age"
                placeholderName="Ingresar edad"
                propInputValue={age}
                propsOnchange={(e) => { handleTimer(e); setAge(e.target.value) }}
                verifyInput={handleErrorMessage("age")}
              />

              <InputLabel
                labelName="Domicilio"
                inputType="text"
                propInputName="address"
                placeholderName="Ingresar domicilio"
                propInputValue={address}
                propsOnchange={(e) => { handleTimer(e); setAddress(e.target.value) }}
                verifyInput={handleErrorMessage("address")}
              />
            </div>
          </div>
          <FormInput
            onHandleChange={(e) => { handleTimer(e); setWhy(e.target.value) }}
            labelClass="font-medium text-slate-600"
            containerClass="containerInputLabel flex flex-col gap-2 h-36 w-full md:w-full md:min-w-full lg:max-w-11/12"
            col="45"
            rows="4"
            inputClass="rounded-lg border  pl-3 pt-2 w-56 md:w-[570px] lg:w-[570px] md:max-w-6/12  placeholder:pl-1  resize-none  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            id="why" type="textarea" label="¿Porque se acercó a nuestra institución?" placeholder="Escribe un comentario."
            verifyInput={handleErrorMessage("why")} />
          <h2 className="text-lg  md:text-xl  lg:text-2xl font-medium text-slate-700">03.Crear usuario y contraseña</h2>

          <InputLabel
            labelName="Usuario"
            inputType="text"
            propInputName="dni"
            placeholderName="Ingresar DNI del orientado"
            propInputValue={dni}
            propsOnchange={(e) => { handleTimer(e); setDni(e.target.value) }}
            verifyInput={handleErrorMessage("dni")}
          />
          <InputLabel
            labelName="Nueva contraseña"
            inputType="password"
            propInputName="password"
            placeholderName="ingresar contraseña"
            propInputValue={password}
            propsOnchange={(e) => { handleTimer(e); setPassword(e.target.value) }}
            verifyInput={handleErrorMessage("password")}
          />
          <InputLabel
            labelName="Repetir contraseña"
            inputType="password"
            propInputName="passwordrepeat"
            placeholderName="Repetir contraseña"
            propInputValue={confirmPassword}
            propsOnchange={(e) => { handleTimer(e); setConfirmPassword(e.target.value) }}
            verifyInput={handleErrorMessage("passwordrepeat")}
          />

        </div>
        <div className="mt-2">
          <button type="submit" className={`w-44 h-10 bg-celesteValtech rounded-lg text-base text-white font-medium`}>
            Ingresar Orientado
          </button>
          <button className=" w-32 text-sm underline" onClick={handleCancelForm}>Cancelar ingreso</button>
        </div>

      </form>
    </div>
  );
}

export default FormOrientado;