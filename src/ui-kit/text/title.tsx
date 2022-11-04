import React from "react";

interface TitleProps {
    text: string
    position?: "start" | "center" | "end"
    size?: number
    weight?: number
}

const Title: React.FC<TitleProps> = ({text, size = 18, weight = 600, position = "start"}) => {
    return (
        <div className="title" style={{fontSize: size + "px", fontWeight: weight, justifyContent: position}}>
            {text}
        </div>
    )
}

export default Title