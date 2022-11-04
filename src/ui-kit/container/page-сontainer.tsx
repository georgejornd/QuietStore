import React from "react";

interface ContainerProps {
    children: JSX.Element | JSX.Element[] | string
}

const PageContainer: React.FC<ContainerProps> = ({children}) => {
    return (
        <div className="container">
            {children}
        </div>
    )
}

export default PageContainer