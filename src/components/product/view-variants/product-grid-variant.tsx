import React from "react";
import {ProductVariantProps} from "../../../types/product/product";
import Tag from "../../../ui-kit/text/tag";
import Button from "../../../ui-kit/button/button";
import BlockContainer from "../../../ui-kit/container/block-container";
import Title from "../../../ui-kit/text/title";
import FlexRow from "../../../ui-kit/flex-row/flex-row";
import Stars from "../Stars";

const ProductGridVariant: React.FC<ProductVariantProps> = ({title, description, price, discountedPrice, currency, discount, rating, border}) => {
    return (
        <BlockContainer gap={16} className={`product-block${border ? ' product-block-border' : ''}`}>
            <div className="product-block-image">
                {discount ? <Tag label={`- ${discount} %`} color="primary" size="small" /> : <></>}
            </div>
            <div className="product-block-details">
                <BlockContainer>
                    <Title text={title} weight={500} size={15} />
                    <div className="product-block-description">{description}</div>
                    {rating ? <Stars top={4} rating={rating} fill="secondary" /> : <></>}
                </BlockContainer>
                <FlexRow fullWidth={true} style={{justifyContent: "space-between"}}>
                    <div className="product-block-details-price">
                        <div className="product-block-details-price-title">{(discount ? discountedPrice.toFixed(2) : price) + " " + currency}</div>
                        {discount ? <div className="product-block-details-price-discounted">{(price - discountedPrice).toFixed(2) + " " + currency}</div> : <></>}
                    </div>
                    <Button label="Buy now" color="secondary" size="small" />
                </FlexRow>
            </div>
        </BlockContainer>
    )
}

export default ProductGridVariant