import React from "react";

interface ContentContainerProps {
    children: JSX.Element | JSX.Element[]
}

const ContentContainer: React.FC<ContentContainerProps> = ({children}) => {
    return (
        <div className="content-container">
            {children}
        </div>
    )
}

export default ContentContainer