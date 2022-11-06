import React from "react";
import {IconPosition} from "../../types/icon/icon";

interface InputFieldWithIconProps {
    children: JSX.Element[]
    iconPosition: IconPosition
}

const InputFieldWithIcon: React.FC<InputFieldWithIconProps> = ({children, iconPosition}) => {
    return (
        <div className={`input-field-with-icon input-field-icon-${iconPosition}`}>
            {children}
        </div>
    )
}

export default InputFieldWithIcon