import React from "react";
import FlexRow from "../../../ui-kit/flex-row/flex-row";
import Tag from "../../../ui-kit/text/tag";
import BlockWithTitleContainer from "../../../ui-kit/container/block-with-title-container";

const CategoriesList: React.FC = () => {
    return (
        <BlockWithTitleContainer title="Categories">
            <FlexRow fullWidth={true} style={{justifyContent: "space-between"}}>
                <label>Category name</label>
                <Tag label="320" color="primary" size="small" />
            </FlexRow>
            <FlexRow fullWidth={true} style={{justifyContent: "space-between"}}>
                <label>Category name</label>
                <Tag label="320" color="primary" size="small" />
            </FlexRow>
            <FlexRow fullWidth={true} style={{justifyContent: "space-between"}}>
                <label>Category name</label>
                <Tag label="320" color="primary" size="small" />
            </FlexRow>
            <FlexRow fullWidth={true} style={{justifyContent: "space-between"}}>
                <label>Category name</label>
                <Tag label="320" color="primary" size="small" />
            </FlexRow>
        </BlockWithTitleContainer>
    )
}

export default CategoriesList