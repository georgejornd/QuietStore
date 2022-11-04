import React from "react";
import BlockWithTitleContainer from "../../../../ui-kit/container/block-with-title-container";
import FlexRow from "../../../../ui-kit/flex-row/flex-row";
import Checkbox from "../../../../ui-kit/icon/checkbox";
import Stars from "../../Stars";
import {ICheckboxRatingFilter} from "../../../../types/product/filter/filter";

export interface MultipleCheckboxRatingFilterProps {
    title: string
    filters: ICheckboxRatingFilter[]
    setFilter: (id: string) => void
}

const MultipleCheckboxRatingFilter: React.FC<MultipleCheckboxRatingFilterProps> = ({title, filters, setFilter}) => {
    return (
        <BlockWithTitleContainer title={title}>
            {filters.map(filter =>
                <FlexRow className="multiple-checkbox-filter" gap={8} onClick={() => setFilter(filter.id)} key={filter.id}>
                    <Checkbox selected={filter.selected} />
                    <Stars fill="primary" rating={filter.rating} />
                </FlexRow>
            )}
        </BlockWithTitleContainer>
    )
}

export default MultipleCheckboxRatingFilter