import React from "react";

interface TitleProps {
    text: string
    size?: number
}

const Title: React.FC<TitleProps> = ({text, size = 18}) => {
    return (
        <div className="title" style={{fontSize: size + "px"}}>
            {text}
        </div>
    )
}

export default Title