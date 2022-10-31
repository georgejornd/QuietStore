import React from "react";

interface BannerProps {
    title: string
    subtitle: string
    buttons?: JSX.Element | JSX.Element[]
}

const Banner: React.FC<BannerProps> = ({title, subtitle, buttons}) => {
    return (
        <div className="banner">
            <div className="banner-label">
                <div className="banner-subtitle">{subtitle}</div>
                <div className="banner-title">{title}</div>
            </div>
            <div className="banner-buttons">
                {buttons}
            </div>
        </div>
    )
}

export default Banner