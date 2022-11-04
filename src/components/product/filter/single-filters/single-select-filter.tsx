import React from "react";
import SingleFilterContainer from "../../../../ui-kit/container/single-filter-container";
import FlexRow from "../../../../ui-kit/flex-row/flex-row";
import {ISelectFilter} from "../../../../types/product/filter/filter";

interface SingleSelectFilterProps {
    filters: ISelectFilter[]
    current: ISelectFilter
    setCurrent: (filter: ISelectFilter) => void
}

const SingleSelectFilter: React.FC<SingleSelectFilterProps> = ({filters, current, setCurrent}) => {
    return (
        <SingleFilterContainer>
            <FlexRow gap={16}>
                {filters.map(filter =>
                    <FlexRow className="select-filter-row" gap={8} onClick={() => setCurrent(filter)} key={filter.id}>
                        <div className={`select-filter-circle${filter.id === current.id ? ' select-filter-circle-active' : ''}`} />
                        <label>{filter.label}</label>
                    </FlexRow>
                )}
            </FlexRow>
        </SingleFilterContainer>
    )
}

export default SingleSelectFilter