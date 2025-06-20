import { useState } from 'react'
import '../../style/common.scss'

function InputBox({label, children, value, onChange}) {
  return (
    <>

      <div className="form__item">
        <div className="form__label">
          <label>{label}</label>
        </div>
        <div className="input-type--box">
          {children}
        </div>
      </div>

    </>
  )
}

export default InputBox
