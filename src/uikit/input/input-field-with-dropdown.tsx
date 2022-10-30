import React from "react";

interface InputFieldWithDropdownProps {
    children: JSX.Element[]
}

const InputFieldWithDropdown: React.FC<InputFieldWithDropdownProps> = ({children}) => {
    return (
        <div className="input-field-with-dropdown">
            {children}
            <span className="input-field-with-dropdown-stick"></span>
        </div>
    )
}

export default InputFieldWithDropdown