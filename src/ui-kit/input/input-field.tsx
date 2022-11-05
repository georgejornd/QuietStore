import React, {ChangeEventHandler} from "react";

interface InputFieldProps {
    value: string | number
    onChange: ChangeEventHandler<HTMLInputElement>
    width?: number
    height?: number
    placeholder?: string
    type?: React.HTMLInputTypeAttribute
    max?: number
    min?: number
}

const InputField: React.FC<InputFieldProps> = ({value, onChange, placeholder, type, max, min, width = 305, height = 42}) => {
    return <input className="input-field" type={type} value={value} onChange={onChange} placeholder={placeholder} max={max} min={min} style={{width: width + "px", height: height + "px"}} />
}

export default InputField