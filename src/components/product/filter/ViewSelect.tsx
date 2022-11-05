import React from "react";
import Title from "../../../ui-kit/text/title";
import FlexRow from "../../../ui-kit/flex-row/flex-row";
import Icon from "../../../ui-kit/icon/icon";
import Tag from "../../../ui-kit/text/tag";
import {ViewSelectVariant} from "../../../types/product/view-selector";

interface ViewSelectProps {
    view: ViewSelectVariant
    setView: (view: ViewSelectVariant) => void
    lastElement: {
        label: string
        count: number
    }
}

interface ViewInterfaceVariant {
    view: ViewSelectVariant
    label: string
    icon: string
}

const viewVariants: ViewInterfaceVariant[] = [
    {view: "grid", label: "Grid view", icon: "layout-square-grid"},
    {view: "list", label: "List view", icon: "layout-sections"},
]

const ViewSelect: React.FC<ViewSelectProps> = ({view, setView, lastElement}) => {
    return (
        <FlexRow fullWidth={true} style={{justifyContent: "space-between"}}>
            <Title text="Phones" size={32} />

            <FlexRow gap={24}>
                <>
                    {viewVariants.map(variant =>
                        <FlexRow onClick={() => setView(variant.view)} className={`products-view-filter-group${variant.view === view ? ' products-view-filter-group-active' : ''}`} gap={4} key={variant.view}>
                            <Icon symbol={variant.icon} />
                            <div className="products-view-filter-text">{variant.label}</div>
                        </FlexRow>
                    )}
                </>

                <FlexRow gap={4}>
                    <Tag label={lastElement.count} color="primary" size="small" />
                    <div className="products-view-filter-text">{lastElement.label}</div>
                </FlexRow>
            </FlexRow>
        </FlexRow>
    )
}

export default ViewSelect