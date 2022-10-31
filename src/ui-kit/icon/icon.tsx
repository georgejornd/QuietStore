import React from "react";

interface IconProps {
    symbol: string
    onClick?: () => void
}

const Icon: React.FC<IconProps> = ({symbol, onClick}) => {
    return (
        <span className="material-symbols-outlined" onClick={onClick}>
            {symbol}
        </span>
    )
}

export default Icon