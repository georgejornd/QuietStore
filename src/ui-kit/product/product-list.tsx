import React from "react";

interface ProductListProps {
    children: JSX.Element | JSX.Element[]
    top: number
}

const ProductList: React.FC<ProductListProps> = ({children, top}) => {
    return (
        <div className="product-list" style={{marginTop: top + "px"}}>
            {children}
        </div>
    )
}

export default ProductList