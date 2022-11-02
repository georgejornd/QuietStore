import React from "react";
import Title from "../../../ui-kit/text/title";
import FlexRow from "../../../ui-kit/flex-row/flex-row";
import Icon from "../../../ui-kit/icon/icon";
import Tag from "../../../ui-kit/text/tag";

const ViewFilters = () => {
    return (
        <FlexRow style={{justifyContent: "space-between", width: "100%"}}>
            <Title text="Phones" size={32} />

            <FlexRow gap={24}>
                <FlexRow className={`products-view-filter-group products-view-filter-group-active`} gap={4}>
                    <Icon symbol="layout-square-grid" />
                    <div className="products-view-filter-text">Grid view</div>
                </FlexRow>
                <FlexRow className={`products-view-filter-group`} gap={4}>
                    <Icon symbol="layout-sections" />
                    <div className="products-view-filter-text">List view</div>
                </FlexRow>
                <FlexRow gap={4}>
                    <Tag label="117" color="primary" size="small" />
                    <div className="products-view-filter-text">Products</div>
                </FlexRow>
            </FlexRow>
        </FlexRow>
    )
}

export default ViewFilters