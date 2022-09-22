/* VerifyInput es el prop que va a tener el mensaje de las verificaciones, tanto del front como del back

Ejemplo de como agrego el prop en el log in: 
verifyInput={verifyMessages.passwordLog !== true? verifyMessages.passwordLog : backMessages.passwordLog}

verifyMessages es un objeto que tiene las verificaciones del front, tiene una propiedad por cada input que se verifica, 
y el nombre de esa propiedad es el id del input que se verifica,
En caso de que la propiedad de ese objeto que guarda los mensajes de error del input sea distinto a true (es decir, que no esta verificado) 
el input va a recibir el mensaje que devuelven las validaciones del front, en cambio, si esa propiedad tiene como valor true, 
muestra los mensajes de la verificacion del back*/

import Icon from "../../global-components/Svg-icon";

function InputLabel({ labelName, placeholderName, inputType, propInputName, propInputValue, propsOnchange }) { /* creo 4 props para que el componente padre(FormOrientado) le pase al componente hijo(InputLabel) */
  return (
    <div className="containerInputLabel flex flex-col gap-2">

      {/* En el input de global components tengo un condicional para que si hay un mensaje de error cambie a rojo el borde del input,
      creo que estaria bueno incluirlo en este componente tambien */}
      {/* <input className={`w-80 ${verifyInput !== null && verifyInput !== true ?
        "border border-solid border-red-600"
        : "border border-slate-300"}`} /> */}

      <label htmlFor="" className="font-medium text-slate-600">{labelName}</label> {/* prop1 para pasar el nombre al label  el cual estara arriba del input*/}
      <input type={inputType} name={propInputName} onChange={propsOnchange} value={propInputValue} placeholder={placeholderName} className="w-64 h-8 p-2 rounded-lg border border-slate-300" />
      {/* Si el input no tiene ningun error no se muestra nada, 
      si hay algun error se renderiza el div con el mensaje de error y un icono */}
      {/* Si el input no tiene ninguna verificacion lo ideal seria pasarle como prop verifyInput = {null}, 
      si no probablemente se muestre el icono rojo sin nada al lado todo el tiempo*/}

      {/* {verifyInput !== null && verifyInput !== true ?
        <div className="flex ml-2.5">
          <Icon
            classname="w-3.5 h-3.5 m-1.5 fill-red-600"
            type="exclamationMark"
            width="24" height="24" />
          <span className="text-red-600">{verifyInput}</span>
        </div>
        : null
      } */}
    </div>
  )
}

export default InputLabel;

/*  dejo comentado el prop de value, para cuando necesitemos pasarle el valor */