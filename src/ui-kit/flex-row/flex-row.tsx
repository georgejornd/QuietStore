import React from "react";

interface FlexRowProps {
    children: JSX.Element[]
    gap?: number
    style?: React.CSSProperties
}

const FlexRow: React.FC<FlexRowProps> = ({children, style, gap = "unset"}) => {
    return (
        <div className="flex-row" style={{gap: gap + "px", ...style}}>
            {children}
        </div>
    )
}

export default FlexRow