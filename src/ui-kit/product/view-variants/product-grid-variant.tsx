import React from "react";
import {ProductVariantProps} from "../../../types/product";
import Tag from "../../text/tag";
import Button from "../../button/button";

const ProductGridVariant: React.FC<ProductVariantProps> = ({title, description, price, discountedPrice, currency, discount, rating, border}) => {
    return (
        <div className={`product-block${border ? ' product-block-border' : ''}`}>
            <div className="product-block-image">
                {discount && <Tag label={`- ${discount} %`} color="primary" size="small" />}
            </div>
            <div className="product-block-details">
                <div className="product-block-details-label">
                    <div className="product-block-details-label-title">{title}</div>
                    <div className="product-block-details-label-description">{description}</div>
                </div>
                <div className="product-block-details-price-button">
                    <div className="product-block-details-price">
                        <div className="product-block-details-price-title">{(discount ? discountedPrice.toFixed(2) : price) + " " + currency}</div>
                        {discount && <div className="product-block-details-price-discounted">{(price - discountedPrice).toFixed(2) + " " + currency}</div>}
                    </div>
                    <Button label="Buy now" color="secondary" size="small" />
                </div>
            </div>
        </div>
    )
}

export default ProductGridVariant