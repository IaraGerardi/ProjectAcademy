import InputLabel from "../componentes-nuevoOrientado/InputLabel"
import Select from 'react-select';
import { UploadImg } from "./UploadImg";


function FormOrientado() {

  const options = [
    { value: 'programa1', label: 'Orientación vocacional ' },
    { value: 'programa2', label: 'Reorientación vocacional' },
    { value: 'programa3', label: 'Taller de matemáticas' },
    { value: 'programa4', label: 'Métodos de estudio' },
  ]

  
  
  return (
    <>
    <form  action="" className=" flex flex-col gap-4"> {/* abre formulario de alta de oreintado , tiene 4 divs hijos */}

        <div className="container-basicInfo "> {/* div1 info basica */}
         <h2>01.Informacion básica</h2>{/*  a cada uno de los InputLabel recibe los 4 props  */}
          
          {/*  input imagen  */}
          <UploadImg />
         
         <InputLabel labelName="Nombre" inputType="text" propInputName="name" placeholderName="ingresar nombre"/>
         <InputLabel labelName="Apellido" inputType="text" propInputName="lastname" placeholderName="ingresar Apellido"/>
         <InputLabel labelName="Email" inputType="email" propInputName="email" placeholderName="ingresar email"/>

         <div>
          <label htmlFor="" className="font-medium text-slate-600">Programa</label>
         <Select /* componente de react select esta importado arriba */
         placeholder="seleccionar opcion"
         options={options} /* trae un array de objetos con las opciones */
         />
         </div>
        </div>

        <div className="container-personalInfo"> {/* div2 datos personales */}
         <h2>02.Datos personales</h2>{/*  a cada uno de los InputLabel recibe los 4 props  */}
         <InputLabel labelName="Telefono" inputType="phone"  propInputName="tel" placeholderName="ingresar telefono"/>
         <InputLabel labelName="Edad" inputType="number" propInputName="age" placeholderName="ingresar edad"/>
         <InputLabel labelName="Colegio" inputType="text" propInputName="school" placeholderName="ingresar colegio"/>
         <InputLabel labelName="Domicilio" inputType="text" propInputName="address" placeholderName="ingresar domicilio"/>

         <div className="containerInputLabel flex flex-col gap-2"> 
          <label  className="font-medium text-slate-600">¿Porque se acercó a nuestra institución?</label>
          <textarea rows="4" cols="40" name="why" placeholder="Escribe un comentario." className=" rounded-lg border border-slate-300"/>
         </div>

        </div>

        <div className="container-crateUsernamePassword"> {/* div3 crear usuario y contraseña */}
        <h2>03.Crear usuario y contraseña</h2>{/*  a cada uno de los InputLabel recibe los 4 props  */}
        <InputLabel labelName="Usuario" inputType="text" propInputName="dni" placeholderName="ingresar DNI del orientado"/>
        <InputLabel labelName="Nueva contraseña" inputType="password" propInputName="password" placeholderName="ingresar contraseña"/>
        <InputLabel labelName="Repetir contraseña" inputType="password" propInputName="passwordrepeat" placeholderName="Repetir contraseña"/>
        </div>


        <div> {/* div4 botones form */}
        <button className=" w-32 bg-blue-600 " type="submit">Ingresar Orientado</button>
              <button  className=" w-32 bg-gray-600 "/*  onClick={propOnClickCancel} */>Cancelar ingreso</button>
        </div>
       
    </form>
      
    </>
  )
}

export default FormOrientado
