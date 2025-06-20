import { useState } from 'react'
import '../../style/common.scss'

function InputLine({label, type, id, name, placeholder, value, onChange}) {
  return (
    <>

      <div className="form__item">
        <div className="form__label">
          <label>{label}</label>
        </div>
        <div className="input-type--line">
          <input 
            type={type} 
            id={id} 
            placeholder={placeholder} 
            name={name} 
            value={value} 
            onChange={onChange}
          />
        </div>
      </div>

    </>
  )
}

export default InputLine
