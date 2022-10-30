import React from "react";

interface FlexRowProps {
    children: JSX.Element[]
    gap: number
}

const FlexRow: React.FC<FlexRowProps> = ({children, gap}) => {
    return (
        <div className="flex-row" style={{gap: gap + "px"}}>
            {children}
        </div>
    )
}

export default FlexRow