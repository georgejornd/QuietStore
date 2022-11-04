import React, {useState} from "react";
import FlexRow from "../../../ui-kit/flex-row/flex-row";
import Tag from "../../../ui-kit/text/tag";
import SingleSelectFilter from "./single-filters/single-select-filter";
import {ICheckboxFilter, ISelectFilter} from "../../../types/product/filter/filter";
import SingleCheckboxFilter from "./single-filters/single-checkbox-filter";

const SingleFilters = () => {
    const [select, setSelect] = useState<ISelectFilter>({id: "all", label: ""})
    const [checkbox, setCheckbox] = useState<ICheckboxFilter>({id: "123", label: "Checkbox filter", selected: true})

    const selectFilters: ISelectFilter[] = [{id: "1", label: "Filter 1"}, {id: "2", label: "Filter 2"}]

    const handleChangeCheckbox = (b: boolean) => setCheckbox(prev => ({...prev, selected: b}))

    return (
        <div>
            <FlexRow gap={16} top={16}>
                <SingleSelectFilter filters={selectFilters} current={select} setCurrent={setSelect} />
                <SingleCheckboxFilter checkbox={checkbox} setSelected={handleChangeCheckbox} count="Nbm" />
            </FlexRow>
            <FlexRow gap={12} top={16}>
                <div className="applied-filters-label">Applied filters:</div>
                <FlexRow gap={12}>
                    <Tag label="Selected Filter" color="primary" size="small" closeIcon={true} />
                    <Tag label="Selected Filter" color="primary" size="small" closeIcon={true} />
                </FlexRow>
            </FlexRow>
        </div>
    )
}

export default SingleFilters