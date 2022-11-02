import React from "react";

interface ProductListProps {
    children: JSX.Element | JSX.Element[]
    top: number
}

const ProductGridList: React.FC<ProductListProps> = ({children, top}) => {
    return (
        <div className="product-grid-list" style={{marginTop: top + "px"}}>
            {children}
        </div>
    )
}

export default ProductGridList