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
/* import '../call-students.css'; */
import img from '../img/orientadoDefault-removebg-preview.png'
import './upload.css'
import "./alert.css"
// SVG
import Affirmation from "../img/affirmation.svg"
import Delete from "../img/delete.svg"

function FormOrientado() {
  let timer = "";
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
  const [confirmPassword, setConfirmPassword] = useState("");

  const [active, setActive] = useState(false);
  const [activeVerify, setActiveVerify] = useState({});
  const [backMessages, setBackMessages] = useState({ emailLog: null, passwordLog: null, });
  
  const navegate = useNavigate();


  // Argumentos para la verificacion del formulario
  let formValues = [
    { inputValue: name }, { inputValue: lastname }, { inputValue: email }, { inputValue: program }, { inputValue: phone },
    { inputValue: age }, { inputValue: school }, { inputValue: address }, { inputValue: why }, { inputValue: dni },
    { inputValue: password }, { inputValue: confirmPassword }, { inputValue: photoProfile.name ? photoProfile.name : photoProfile }
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
    timer = setTimeout(() => {
      setActiveVerify({
        ...activeVerify,
        [e.target.name]: true
      })
    }, 2000)
    return () => clearTimeout(timer);
  }

  useEffect(() => {
    handleSetNull(backMessages);
    handleVerifyForm();
  }, [name, lastname, email, program, phone, age, school, address, why, dni, password, confirmPassword])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isVerified) {
      return;
    }
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
      why: why
    },
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((response) => {
        if (response.status == 200) {
          setActive(!active)
          setTimeout(() => {
            navegate(`/orientados/StudentInfo/${response.data.id}`)
          }, "4000")
        }
      })
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
    
    })
  }

  // handle onChange event of the dropdown
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
    <div className="cotainerForm mt-10 mb-10 mx-6 w-auto">
      <form
        className=" flex flex-col gap-4 "
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <h2 className="text-lg  md:text-xl  lg:text-2xl font-medium text-slate-700">01.Informacion básica 1</h2>
        {/* abre formulario de alta de orientado , tiene 4 divs hijos */}
        <div className="container-basicInfo flex  flex-col gap-5 lg:flex-row  lg:gap-5 md:w-full lg:h-48">

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

          <div className="cajaInputsDatosP flex flex-col gap-0 md:min-w-3/4 md:flex-row md:gap-5 lg:flex-row lg:gap-10 lg:w-4/5 lg:h-48 ">
            <div className=" w-72 flex flex-col ">
              <InputLabel
                labelName="Nombre"
                inputType="text"
                propInputName="name"
                placeholderName="Ingresar nombre"
                propInputValue={name}
                propsOnchange={(e) => { handleTimer(e); handleNameChange(e) }}
                verifyInput={!(activeVerify.name) ? null : verifyMessages.name ? verifyMessages.name : null}
              />
              <InputLabel
                labelName="Apellido"
                inputType="text"
                propInputName="lastname"
                placeholderName="Ingresar Apellido"
                propInputValue={lastname}
                propsOnchange={(e) => { handleTimer(e); handleNameChange(e); }}
                verifyInput={!(activeVerify.lastname) ? null : verifyMessages.lastname ? verifyMessages.lastname : null}
              />
            </div>
            <div className=" w-72">
              <InputLabel
                labelName="Email"
                inputType="email"
                propInputName="email"
                placeholderName="Ingresar email"
                propInputValue={email}
                propsOnchange={(e) => { handleTimer(e); setEmail(e.target.value) }}
                verifyInput={!(activeVerify.email) ? null : verifyMessages.email ? verifyMessages.email :
                  // verifyMessages.email === true ? backMessages.email : 
                  null}
              />
              {/*------ select input ------------- */}
              <div className=" w-72 h-24 flex flex-col gap-2">
                <label htmlFor="" className="font-medium text-slate-600 mt-1">
                  Programa
                </label>
                <Select
                  placeholder="Select Option"
                  value={options.filter((obj) => obj.value === program)} // set selected value
                  options={options} // set list of the data
                  onChange={(e) => { handleProgramChange(e); }} // assign onChange function
                  styles={customStyles}//style para react select
                  className={`w-64 h-8 rounded-lg
                        ${verifyMessages.program && verifyMessages.program !== null ? "border-red-600" : null}`}
                />
                {!(activeVerify.program) ? null : verifyMessages.program &&
                  (verifyMessages.program !== null && verifyMessages.program !== true) ?
                  <div className="flex ml-2.5 items-center relative bottom-2">
                    <Icon
                      classname="w-3.5 h-3.5 m-1.5 text-sm fill-red-600"
                      type="exclamationMark"
                      width="24" height="24" />
                    <span className="text-red-600 text-sm">{verifyMessages.program}</span>
                  </div>
                  : null
                }
                {/* agregar verificaciones del programa*/}
              </div>
            </div>
          </div>
        </div>
        <div className="container-personalInfo  text-slate-700 flex flex-col h-max md:h-96 lg:h-96 gap-3">
          {" "}
          {/* div2 datos personales */}
          <h2 className=" text-lg  md:text-xl  lg:text-2xl font-medium ">02.Datos personales</h2>
          {/*  a cada uno de los InputLabel recibe los 4 props  */}
          <div className=" cajaInputsDatosP  flex  flex-col md:flex-row md:gap-5 lg:flex-row lg:gap-5  ">
            <div>
              <InputLabel
                labelName="Telefono"
                inputType="phone"
                propInputName="tel"
                placeholderName="Ingresar telefono"
                propInputValue={phone}
                propsOnchange={(e) => { handleTimer(e); setPhone(e.target.value) }}
                verifyInput={!(activeVerify.tel) ? null : verifyMessages.tel ? verifyMessages.tel : null}
              />
              <InputLabel
                labelName="Colegio"
                inputType="text"
                propInputName="school"
                placeholderName="Ingresar colegio"
                propInputValue={school}
                propsOnchange={(e) => { handleTimer(e); setSchool(e.target.value) }}
                verifyInput={!(activeVerify.school) ? null : verifyMessages.school ? verifyMessages.school : null}
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
                verifyInput={!(activeVerify.age) ? null : verifyMessages.age ? verifyMessages.age : null}
              />

              <InputLabel
                labelName="Domicilio"
                inputType="text"
                propInputName="address"
                placeholderName="Ingresar domicilio"
                propInputValue={address}
                propsOnchange={(e) => { handleTimer(e); setAddress(e.target.value) }}
                verifyInput={!(activeVerify.address) ? null : verifyMessages.address ? verifyMessages.address : null}
              />
            </div>
          </div>
          <FormInput
            onHandleChange={(e) => { handleTimer(e); setWhy(e.target.value) }}
            labelClass="font-medium text-slate-600"
            containerClass="containerInputLabel flex flex-col gap-2 h-36 w-72 md:w-full md:min-w-full lg:max-w-11/12"
            col="45"
            rows="4"
            inputClass="rounded-lg border  pl-3 pt-2 w-64 md:w-[570px] lg:w-[570px] md:max-w-6/12  placeholder:pl-1  resize-none"
            id="why" type="textarea" label="¿Porque se acercó a nuestra institución?" placeholder="Escribe un comentario."
            verifyInput={!(activeVerify.why) ? null
              : verifyMessages.why && verifyMessages.why !== true ? verifyMessages.why
                : backMessages.why ? backMessages.why : null} />
        </div>
        <div className="container-crateUsernamePassword">
          {" "}
          {/* div3 crear usuario y contraseña */}
          <h2 className="text-lg  md:text-xl  lg:text-2xl font-medium text-slate-700">03.Crear usuario y contraseña</h2>
          {/*  a cada uno de los InputLabel recibe los 4 props  */}

          <InputLabel
            labelName="Usuario"
            inputType="text"
            propInputName="dni"
            placeholderName="Ingresar DNI del orientado"
            propInputValue={dni}
            propsOnchange={(e) => { handleTimer(e); setDni(e.target.value) }}
            verifyInput={!(activeVerify.dni) ? null : verifyMessages.dni ? verifyMessages.dni :
              // verifyMessages.dni === true ? backMessages.dni : 
              null}
          />
          <InputLabel
            labelName="Nueva contraseña"
            inputType="password"
            propInputName="password"
            placeholderName="ingresar contraseña"
            propInputValue={password}
            propsOnchange={(e) => { handleTimer(e); setPassword(e.target.value) }}
            verifyInput={!(activeVerify.password) ? null : verifyMessages.password ? verifyMessages.password : null}
          />
          <InputLabel
            labelName="Repetir contraseña"
            inputType="password"
            propInputName="passwordrepeat"
            placeholderName="Repetir contraseña"
            propInputValue={confirmPassword}
            propsOnchange={(e) => { handleTimer(e); setConfirmPassword(e.target.value) }}
            verifyInput={!(activeVerify.passwordrepeat) ? null : verifyMessages.passwordrepeat ? verifyMessages.passwordrepeat : null}
          />

        </div>
        <div className="mt-2">
          {/* div4 botones form */}
          <button type="submit" disabled={!isVerified}
            className={`w-44 h-10 bg-celesteValtech rounded-lg text-base text-white font-medium ${(!isVerified) ? "opacity-50" : null}`}>
            Ingresar Orientado
          </button>
          <button className=" w-32 text-sm underline" onClick={handleCancelForm}>Cancelar ingreso</button>
        </div>


        <div className={`alert ${active ? 'mostrar-alert' : 'ocultar-alert'}`}>
          <img src={Affirmation} alt="icon de afirmacion" />
          <p className="msg-alert">El Orientado fué ingresado con éxito.</p>
          <img className="iconDelete-alert" src={Delete} onClick={() => setActive(!active)} alt="icon de eliminar" />
        </div>

      </form>
    </div>
  );
}

export default FormOrientado;