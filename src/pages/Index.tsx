import React, {FC} from "react";
import PageContainer from "../uikit/container/page-сontainer";
import Button from "../uikit/button/button";
import Banner from "../uikit/banner";
import ContentContainer from "../uikit/container/content-container";

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
        </PageContainer>
    )
}

export default Index