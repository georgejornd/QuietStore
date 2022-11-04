import React from "react";

type StarsFill = "primary" | "secondary"

interface StarsProps {
    rating: number
    fill: StarsFill
}

const Stars: React.FC<StarsProps> = ({rating, fill}) => {
    const width = ((rating * 10) / 0.5) + "%"

    return (
        <div className="stars stars-background">
            <div className={`stars stars-line stars-line-${fill}`} style={{width}}></div>
        </div>
    )
}

export default Stars