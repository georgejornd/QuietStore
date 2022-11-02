import React from "react";

interface IconProps {
    symbol: string
    pointer?: boolean
    className?: string
    onClick?: () => void
}

const Icon: React.FC<IconProps> = ({symbol, className, onClick, pointer = true}) => {
    return (
        <span className={`icon${className ? ' ' + className : ''}`} style={{cursor: pointer ? "pointer" : "default"}} onClick={onClick}>
            <img src={`/assets/icons/ic-${symbol}.svg`} alt={symbol} />
        </span>
    )
}

export default Icon