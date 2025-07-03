import '../../../style/common.scss'

function Input({type, id, name, placeholder, value, onChange, inputType}) {
  if(type === 'text') {
    return (
      <div className={"input-type--" + inputType}>
        <input 
          type={type}
          id={id}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    )
  }
}

export default Input