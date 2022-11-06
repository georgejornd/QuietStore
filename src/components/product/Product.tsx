import React from "react";
import ProductGridVariant from "./view-variants/product-grid-variant";
import {InitialProductProps, ProductViewVariant} from "../../types/product/product";
import ProductListVariant from "./view-variants/product-list-variant";

interface ProductProps extends InitialProductProps{
    variantView: ProductViewVariant
}

const Product: React.FC<ProductProps> = (props) => {
    const discountedPrice = (props.discount && props.discount <= 100) ? (props.price - ((props.price / 100) * props.discount)) : 0
    const propsToVariant = {...props, discountedPrice}

    if (props.variantView === "grid") return <ProductGridVariant {...propsToVariant} />
    if (props.variantView === "list") return <ProductListVariant {...propsToVariant} />
    return <></>
}

export default Product