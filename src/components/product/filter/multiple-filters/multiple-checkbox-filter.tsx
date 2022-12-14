import React from "react";
import BlockWithTitleContainer from "../../../../ui-kit/container/block-with-title-container";
import {ICheckboxFilter} from "../../../../types/product/filter/filter";
import FlexRow from "../../../../ui-kit/flex-row/flex-row";
import Checkbox from "../../../../ui-kit/icon/checkbox";

interface MultipleCheckboxFilterProps {
    title: string
    filters: ICheckboxFilter[]
    setFilter: (id: string) => void
}

const MultipleCheckboxFilter: React.FC<MultipleCheckboxFilterProps> = ({title, filters, setFilter}) => {
    return (
        <BlockWithTitleContainer title={title}>
            {filters.map(filter =>
                <FlexRow className="multiple-checkbox-filter" gap={8} onClick={() => setFilter(filter.id)} key={filter.id}>
                    <Checkbox selected={filter.selected} />
                    <label>{filter.label}</label>
                </FlexRow>
            )}
        </BlockWithTitleContainer>
    )
}

export default MultipleCheckboxFilter