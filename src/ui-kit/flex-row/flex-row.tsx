import React from "react";

interface FlexRowProps {
    children: JSX.Element | JSX.Element[]
    onClick?: () => void
    className?: string
    gap?: number
    top?: number
    style?: React.CSSProperties
}

const FlexRow: React.FC<FlexRowProps> = ({children, onClick, className, style, top = 0, gap = "unset"}) => {
    return (
        <div className={`flex-row${className ? ' ' + className : ''}`} style={{gap: gap + "px", marginTop: top + "px", ...style}} onClick={onClick}>
            {children}
        </div>
    )
}

export default FlexRow