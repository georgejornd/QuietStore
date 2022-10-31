import React, {FC} from "react";
import PageContainer from "../ui-kit/container/page-сontainer";
import Button from "../ui-kit/button/button";
import Banner from "../ui-kit/banner/banner";
import ContentContainer from "../ui-kit/container/content-container";
import ProductBlock from "../components/product/product-block";
import ProductList from "../ui-kit/product/product-list";
import FlexRow from "../ui-kit/flex-row/flex-row";

const Index: FC = () => {
    return (
        <PageContainer>
            <ContentContainer>
                <Banner
                    title="Space for heading"
                    subtitle="Banner subfocus"
                    buttons={<Button label="Read more" size="medium" color="secondary" arrowPosition="right" />}
                />
            </ContentContainer>
            <ContentContainer>
                <div className="title-block title-center">Best selling</div>

                <ProductList top={32}>
                    <ProductBlock
                        title="Product title"
                        description="Space for a small product description"
                        price={36.99}
                        currency="USD"
                    />
                    <ProductBlock
                        title="Product title"
                        description="Space for a small product description"
                        price={36.99}
                        discount={20}
                        currency="USD"
                    />
                    <ProductBlock
                        title="Product title"
                        description="Space for a small product description"
                        price={36.99}
                        currency="USD"
                    />
                    <ProductBlock
                        title="Product title"
                        description="Space for a small product description"
                        price={36.99}
                        currency="USD"
                    />

                    <ProductBlock
                        title="Product title"
                        description="Space for a small product description"
                        price={36.99}
                        currency="USD"
                    />
                    <ProductBlock
                        title="Product title"
                        description="Space for a small product description"
                        price={36.99}
                        discount={20}
                        currency="USD"
                    />
                    <ProductBlock
                        title="Product title"
                        description="Space for a small product description"
                        price={36.99}
                        currency="USD"
                    />
                    <ProductBlock
                        title="Product title"
                        description="Space for a small product description"
                        price={36.99}
                        currency="USD"
                    />
                </ProductList>
            </ContentContainer>
            <ContentContainer>
                <FlexRow style={{width: "100%", justifyContent: "space-between"}}>
                    <div className="title-block">Phones</div>
                    <Button label="More in phones" color="transparently-secondary" size="small" arrowPosition="right" />
                </FlexRow>

                <ProductList top={32}>
                    <ProductBlock
                        title="Product title"
                        description="Space for a small product description"
                        price={36.99}
                        currency="USD"
                    />
                    <ProductBlock
                        title="Product title"
                        description="Space for a small product description"
                        price={36.99}
                        currency="USD"
                    />
                    <ProductBlock
                        title="Product title"
                        description="Space for a small product description"
                        price={36.99}
                        currency="USD"
                    />
                    <ProductBlock
                        title="Product title"
                        description="Space for a small product description"
                        price={36.99}
                        currency="USD"
                    />
                </ProductList>
            </ContentContainer>
        </PageContainer>
    )
}

export default Index