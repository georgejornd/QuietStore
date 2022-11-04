import React from "react";
import Icon from "./icon";

interface CheckboxProps {
    selected: boolean
}

const Checkbox: React.FC<CheckboxProps> = ({selected}) => {
    return (
        <div className={`checkbox${selected ? ' checkbox-selected' : ''}`}>
            {selected && <Icon symbol="actions-check-simple" />}
        </div>
    )
}

export default Checkbox