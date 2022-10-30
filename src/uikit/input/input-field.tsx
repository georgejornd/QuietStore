import React, {ChangeEventHandler} from "react";

interface InputFieldProps {
    value: string | number
    onChange: ChangeEventHandler<HTMLInputElement>
    width?: number
    height?: number
    placeholder?: string
    icon?: {
        symbol: string
        position: "left" | "right"
    }
}

const InputField: React.FC<InputFieldProps> = ({value, onChange, placeholder, width = 305, height = 42}) => {
    return <input className="input-field" value={value} onChange={onChange} placeholder={placeholder} style={{width: width + "px", height: height + "px"}} />
}

export default InputField