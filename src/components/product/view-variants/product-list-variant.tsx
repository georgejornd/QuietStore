import React from "react";
import BlockContainer from "../../../ui-kit/container/block-container";
import Stars from "../Stars";
import Title from "../../../ui-kit/text/title";
import Button from "../../../ui-kit/button/button";
import FlexRow from "../../../ui-kit/flex-row/flex-row";
import {ProductVariantProps} from "../../../types/product/product";

const ProductListVariant: React.FC<ProductVariantProps> = ({title, description, price, discountedPrice, currency, discount, rating}) => {
    return (
        <div className="product-list-container">
            <FlexRow gap={32}>
                <div className="product-list-image"></div>
                <BlockContainer gap={25}>
                    <BlockContainer gap={8}>
                        <BlockContainer gap={4}>
                            <Title text={title} position="start" />
                            <div className="product-block-description">{description}</div>
                        </BlockContainer>

                        <>{rating && <Stars rating={rating} fill="secondary" />}</>
                    </BlockContainer>
                    <BlockContainer gap={12}>
                        <div className="product-list-characteristic-group">
                            <div className="product-list-characteristic-label">Fresheness</div>
                            <div className="product-list-characteristic-value">
                                <div className="product-list-characteristic-dedicated">New</div>
                                (Extra fresh)
                            </div>
                        </div>
                        <div className="product-list-characteristic-group">
                            <div className="product-list-characteristic-label">Farm</div>
                            <div className="product-list-characteristic-value">
                                Grocery Tarm Fields
                            </div>
                        </div>
                        <div className="product-list-characteristic-group">
                            <div className="product-list-characteristic-label">Delivery</div>
                            <div className="product-list-characteristic-value">
                                Europe
                            </div>
                        </div>
                        <div className="product-list-characteristic-group">
                            <div className="product-list-characteristic-label">Stock</div>
                            <div className="product-list-characteristic-value">
                                <div className="product-list-characteristic-dedicated">320 pcs</div>
                            </div>
                        </div>
                    </BlockContainer>
                </BlockContainer>
            </FlexRow>

            <BlockContainer gap={15} style={{width: "max-content"}}>
                <div>
                    <Title text={(discount ? discountedPrice.toFixed(2) : price) + " " + currency} />
                    {discount && discount > 0 ? <div className="product-block-details-price-discounted">{(price - discountedPrice).toFixed(2) + " " + currency}</div> : <></>}
                </div>
                <div className="product-list-gray">
                    <label>Free Shipping</label>
                    <label>Delivery in 1 day</label>
                </div>
                <BlockContainer gap={12}>
                    <Button label="Product Detail" color="secondary" size="medium" iconPosition="right" />
                    <Button label="Add to wish list" color="transparently-primary" size="small" iconPosition="left" iconSymbol="actions-heart" />
                </BlockContainer>
            </BlockContainer>
        </div>
    )
}

export default ProductListVariant