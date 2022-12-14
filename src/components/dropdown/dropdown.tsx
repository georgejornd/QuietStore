import React, {useState} from "react";
import {IOption} from "../../types/dropdown/dropdown";
import Icon from "../../ui-kit/icon/icon";

interface DropdownProps {
    label: string
    options: IOption[]
}

const Dropdown: React.FC<DropdownProps> = ({label, options}) => {
    const [isActive, setIsActive] = useState<boolean>(false)

    const handleChange = () => setIsActive(prev => !prev)

    return (
        <div className={`dropdown${isActive ? ' dropdown-active' : ''}`} onClick={handleChange}>
            <div className="dropdown-label">
                <label>{label}</label>
                <Icon symbol="chevron-down-bold" />
            </div>

            <div className="dropdown-options" onClick={e => e.stopPropagation()}>
                {options.map((option, index) =>
                    <div className="dropdown-option" key={index}>{option.label}</div>
                )}
            </div>
        </div>
    )
}

export default Dropdown