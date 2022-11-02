import Icon from "../../global-components/Svg-icon";

function InputLabel({ labelName, placeholderName, inputType, propInputName, propInputValue, propsOnchange, verifyInput }) {
  return (
    <div className="containerInputLabel flex flex-col gap-2 w-56 md:w-64  h-24  lg:w-72">

      <label htmlFor="" className="font-medium text-slate-600 mt-1">{labelName}</label>
      <input type={inputType} name={propInputName} onChange={propsOnchange} value={propInputValue} placeholder={placeholderName}
        autoComplete="off"
        className={`w-56 md:w-64 lg:w-64 h-8 p-2 rounded-lg border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500`} />

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