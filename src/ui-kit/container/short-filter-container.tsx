import React from "react";

interface FilterContainerProps {
    children: JSX.Element | JSX.Element[]
}

const ShortFilterContainer: React.FC<FilterContainerProps> = ({children}) => {
    return (
        <div className="short-filter-container">
            {children}
        </div>
    )
}

export default ShortFilterContainer