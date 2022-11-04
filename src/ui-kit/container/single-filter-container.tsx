import React from "react";

interface FilterContainerProps {
    children: JSX.Element | JSX.Element[]
}

const SingleFilterContainer: React.FC<FilterContainerProps> = ({children}) => {
    return (
        <div className="single-filter-container">
            {children}
        </div>
    )
}

export default SingleFilterContainer