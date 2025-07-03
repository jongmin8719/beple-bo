import '../../style/common.scss'

function InputBox({label, type, id, name, placeholder, value, onChange}) {
  return (
    <div className="form__label">
      <label>{label}</label>
    </div>
  )
}

export default InputBox
