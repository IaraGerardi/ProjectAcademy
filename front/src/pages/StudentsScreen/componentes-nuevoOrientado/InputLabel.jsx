

function InputLabel({labelName,placeholderName,inputType,propInputName/* ,propInputValue */}) { /* creo 4 props para que el componente padre(FormOrientado) le pase al componente hijo(InputLabel) */
  return (
    <div className="containerInputLabel flex flex-col gap-2">
      <label htmlFor=""  className="font-medium text-slate-600">{labelName}</label> {/* prop1 para pasar el nombre al label  el cual estara arriba del input*/}
      <input type={inputType} name={propInputName} /* value={propInputValue} */ placeholder={placeholderName} className="w-64 h-8 p-2 rounded-lg border border-slate-300"/> {/* input recibe 3 props,para el tipo de input, el comentario que ira como placeholder y el name del input */}
    </div>
  )
}

export default InputLabel;
 
/*  dejo comentado el prop de value, para cuando necesitemos pasarle el valor */
