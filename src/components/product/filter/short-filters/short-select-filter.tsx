import React from "react";
import ShortFilterContainer from "../../../../ui-kit/container/short-filter-container";
import FlexRow from "../../../../ui-kit/flex-row/flex-row";
import {ISelectFilter} from "../../../../types/filter";

interface ShortSelectFilterProps {
    filters: ISelectFilter[]
    current: ISelectFilter
    setCurrent: (filter: ISelectFilter) => void
}

const ShortSelectFilter: React.FC<ShortSelectFilterProps> = ({filters, current, setCurrent}) => {
    return (
        <ShortFilterContainer>
            <FlexRow gap={16}>
                {filters.map(filter =>
                    <FlexRow className="select-filter-row" gap={8} onClick={() => setCurrent(filter)} key={filter.id}>
                        <div className={`select-filter-circle${filter.id === current.id ? ' select-filter-circle-active' : ''}`} />
                        <label>{filter.label}</label>
                    </FlexRow>
                )}
            </FlexRow>
        </ShortFilterContainer>
    )
}

export default ShortSelectFilter