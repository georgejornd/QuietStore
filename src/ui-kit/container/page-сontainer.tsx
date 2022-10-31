import React from "react";

interface ContainerProps {
    children: JSX.Element | JSX.Element[] | string
}

const PageContainer: React.FC<ContainerProps> = ({children}) => {
    return (
        <div className="container">
            <div className="content">
                {children}
            </div>
        </div>
    )
}

export default PageContainer