import React from "react";
import Button from "../../ui-kit/button/button";
import Tag from "../../ui-kit/tag/tag";

interface ProductBlockProps {
    title: string
    description: string
    price: number
    currency: "USD" | "RUB"
    discount?: number
    rating?: number
    border?: boolean
}

const ProductBlock: React.FC<ProductBlockProps> = ({title, description, price, currency, discount, rating, border}) => {
    const discountedPrice = (discount && discount <= 100) ? (price - ((price / 100) * discount)) : 0

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

export default ProductBlock