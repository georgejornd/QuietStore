import React from "react";
import {prepareStyleProperty} from "../../utils/prepare-style-property";

type StarsFill = "primary" | "secondary"

interface StarsProps {
    rating: number
    fill: StarsFill
    top?: number
}

const Stars: React.FC<StarsProps> = ({rating, fill, top}) => {
    const width = ((rating * 10) / 0.5) + "%"

    return (
        <div className="stars stars-background" style={{marginTop: prepareStyleProperty("px", top)}}>
            <div className={`stars stars-line stars-line-${fill}`} style={{width}}></div>
        </div>
    )
}

export default Stars