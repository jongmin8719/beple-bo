import { useState } from 'react'
import InputBox from '../atomic/InputBox'
import '../../style/Faq.scss'

function Faq() {
    const [value, setValue] = useState('')

    const onChangeValue = (e) => {
        const value = e.target.value;
        setValue(value)
    }

    return (
        <div className="faq__box">
            <InputBox label="내용1">
                <input type="text" value={value} onChange={onChangeValue}/>
            </InputBox>
        </div>
    )
}
export default Faq