import React from "react";
import {prepareStyleProperty} from "../../utils/prepare-style-property";

interface FlexRowProps {
    children: JSX.Element | JSX.Element[]
    onClick?: () => void
    className?: string
    fullWidth?: boolean
    gap?: number
    top?: number
    style?: React.CSSProperties
}

const FlexRow: React.FC<FlexRowProps> = ({children, onClick, className, style, fullWidth, top, gap}) => {
    return (
        <div className={`flex-row${className ? ' ' + className : ''}`} style={{gap: prepareStyleProperty("px", gap), marginTop: prepareStyleProperty("px", top), width: fullWidth ? "100%" : undefined, ...style}} onClick={onClick}>
            {children}
        </div>
    )
}

export default FlexRow