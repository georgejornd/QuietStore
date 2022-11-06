import React from "react";
import {IconPosition} from "../../types/icon/icon";
import Icon from "../icon/icon";

type ButtonColor = "primary" | "secondary" | "transparently-primary" | "transparently-secondary"
type ButtonSize = "large" | "medium" | "small"

interface ButtonProps {
    label: string
    color: ButtonColor
    size: ButtonSize
    iconPosition?: IconPosition
    iconSymbol?: string
    onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({label, color, size, iconPosition, iconSymbol}) => {
    return (
        <div className={`button ${iconPosition ? " button-icon-".concat(iconPosition) : ''} button-${color} button-${size}`}>
            <label>{label}</label>

            {(iconPosition || iconSymbol) &&
                <div className={`button-icon button-icon-${color}`}>
                    <Icon symbol={iconSymbol ? iconSymbol : `chevron-${iconPosition}-bold`} />
                </div>
            }
        </div>
    )
}

export default Button