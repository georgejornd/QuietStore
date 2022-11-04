import React from "react";
import FlexRow from "../flex-row/flex-row";

interface ProductListProps {
    children: JSX.Element | JSX.Element[]
    className?: string
    top?: number
    gap?: number
}

const ProductGridList: React.FC<ProductListProps> = ({children, top, gap}) => {
    return (
        <FlexRow fullWidth={true} style={{flexWrap: "wrap"}} top={top} gap={gap}>
            {children}
        </FlexRow>
    )
}

export default ProductGridList