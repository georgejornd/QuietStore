import React from "react";
import ProductGridVariant from "../../ui-kit/product/view-variants/product-grid-variant";
import {InitialProductProps, ProductViewVariant} from "../../types/product";

interface ProductProps extends InitialProductProps{
    variantView: ProductViewVariant
}

const Product: React.FC<ProductProps> = (props) => {
    const discountedPrice = (props.discount && props.discount <= 100) ? (props.price - ((props.price / 100) * props.discount)) : 0

    // без двойного спреда не принимает discountedPrice
    if (props.variantView === "grid") return <ProductGridVariant {...{...props, discountedPrice: discountedPrice}} />
    return <></>
}

export default Product