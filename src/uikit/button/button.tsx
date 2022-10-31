import React from "react";
import {IconPosition} from "../../types/icon";
import Icon from "../icon";

type ButtonColor = "primary" | "secondary" | "transparently-primary" | "transparently-secondary"
type ButtonSize = "large" | "medium" | "small"

interface ButtonProps {
    label: string
    color: ButtonColor
    size: ButtonSize
    arrowPosition?: IconPosition
    onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({label, color, size, arrowPosition}) => {
    return (
        <div className={`button${arrowPosition ? " button-icon-".concat(arrowPosition) : ''} button-${color} button-${size}`}>
            <label>{label}</label>

            {arrowPosition &&
                <div className={`button-icon button-icon-${color}`}>
                    <Icon symbol={`chevron_${arrowPosition}`} />
                </div>
            }
        </div>
    )
}

export default Button