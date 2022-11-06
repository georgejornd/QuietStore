import React, {FC} from "react";
import Button from "../ui-kit/button/button";
import Banner from "../ui-kit/banner/banner";
import ContentContainer from "../ui-kit/container/content-container";
import Product from "../components/product/Product";
import FlexRow from "../ui-kit/flex-row/flex-row";
import Title from "../ui-kit/text/title";
import {products} from "../consts";
import ProductGridList from "../ui-kit/product/product-grid-list";

const Index: FC = () => {
    return (
        <>
            <ContentContainer>
                <Banner
                    title="Space for heading"
                    subtitle="Banner subfocus"
                    buttons={<Button label="Read more" size="medium" color="secondary" iconPosition="right" />}
                />
            </ContentContainer>
            <ContentContainer>
                <Title text="Best selling" position="center" />

                <ProductGridList top={32} gap={30}>
                    {products.map(product =>
                        <Product
                            key={product.id}
                            variantView="grid"
                            id={product.id}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            discount={product.discount}
                            currency={product.currency}
                        />
                    )}
                </ProductGridList>
            </ContentContainer>
            <ContentContainer>
                <FlexRow fullWidth={true} style={{justifyContent: "space-between"}}>
                    <Title text="Phones" />
                    <Button label="More in phones" color="transparently-secondary" size="small" iconPosition="right" />
                </FlexRow>

                <ProductGridList top={32} gap={30}>
                    {products.map(product =>
                        <Product
                            key={product.id}
                            variantView="grid"
                            id={product.id}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            discount={product.discount}
                            currency={product.currency}
                        />
                    )}
                </ProductGridList>
            </ContentContainer>
        </>
    )
}

export default Index