import React from "react";

interface InputFieldWithIconProps {
    children: JSX.Element[]
    iconPosition: "left" | "right"
}

const InputFieldWithIcon: React.FC<InputFieldWithIconProps> = ({children, iconPosition}) => {
    return (
        <div className={`input-field-with-icon input-field-icon-${iconPosition}`}>
            {children}
        </div>
    )
}

export default InputFieldWithIcon