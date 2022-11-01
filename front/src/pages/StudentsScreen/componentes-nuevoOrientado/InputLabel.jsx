/* VerifyInput es el prop que va a tener el mensaje de las verificaciones, tanto del front como del back

Ejemplo de como agrego el prop: 
verifyInput={verifyMessages.lastname ? verifyMessages.lastname :
  // verifyMessages.lastname === true ? backMessages.lastname : 
null}

Tengo que ver como hacer un condicional para que muestre las verificaciones del back, no estoy segura de que asi funcione*/

import Icon from "../../global-components/Svg-icon";

function InputLabel({ labelName, placeholderName, inputType, propInputName, propInputValue, propsOnchange, verifyInput }) { /* creo 4 props para que el componente padre(FormOrientado) le pase al componente hijo(InputLabel) */

  return (
    // Hay que cambiar los estilos para que no cambie tanto cuando hay un error
    <div className="containerInputLabel flex flex-col gap-2 w-56 md:w-64  h-24  lg:w-72">

      <label htmlFor="" className="font-medium text-slate-600 mt-1">{labelName}</label> {/* prop1 para pasar el nombre al label  el cual estara arriba del input*/}
      <input type={inputType} name={propInputName} onChange={propsOnchange} value={propInputValue} placeholder={placeholderName}
        className={`w-56 md:w-64 lg:w-64 h-8 p-2 rounded-lg border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500`} />

      {/* Si el input no tiene ningun error no se muestra nada, 
      si hay algun error se renderiza el div con el mensaje de error y un icono */}

      {verifyInput !== null && verifyInput !== true ?
        <div className="flex items-center relative bottom-2 py-1">
          <Icon
            classname="w-3.5 h-3.5  mr-1 fill-red-600"
            type="exclamationMark"
            width="24" height="24" />
          <span className="text-red-600 text-xs ">{verifyInput}</span>
        </div>
        : null
      }
    </div>
  )
}

export default InputLabel;

/*  dejo comentado el prop de value, para cuando necesitemos pasarle el valor */