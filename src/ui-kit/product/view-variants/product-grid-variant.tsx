import React from "react";
import {ProductVariantProps} from "../../../types/product/product";
import Tag from "../../text/tag";
import Button from "../../button/button";
import BlockContainer from "../../container/block-container";
import Title from "../../text/title";
import FlexRow from "../../flex-row/flex-row";

const ProductGridVariant: React.FC<ProductVariantProps> = ({title, description, price, discountedPrice, currency, discount, rating, border}) => {
    return (
        <BlockContainer gap={16} className={`product-block${border ? ' product-block-border' : ''}`}>
            <div className="product-block-image">
                {discount && <Tag label={`- ${discount} %`} color="primary" size="small" />}
            </div>
            <div className="product-block-details">
                <BlockContainer>
                    <Title text={title} weight={500} size={15} />
                    <div className="product-block-description">{description}</div>
                </BlockContainer>
                <FlexRow fullWidth={true} style={{justifyContent: "space-between"}}>
                    <div className="product-block-details-price">
                        <div className="product-block-details-price-title">{(discount ? discountedPrice.toFixed(2) : price) + " " + currency}</div>
                        {discount && <div className="product-block-details-price-discounted">{(price - discountedPrice).toFixed(2) + " " + currency}</div>}
                    </div>
                    <Button label="Buy now" color="secondary" size="small" />
                </FlexRow>
            </div>
        </BlockContainer>
    )
}

export default ProductGridVariant