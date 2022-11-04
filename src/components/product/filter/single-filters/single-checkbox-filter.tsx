import React from "react";
import SingleFilterContainer from "../../../../ui-kit/container/single-filter-container";
import FlexRow from "../../../../ui-kit/flex-row/flex-row";
import Tag from "../../../../ui-kit/text/tag";
import {ICheckboxFilter} from "../../../../types/product/filter/filter";
import Checkbox from "../../../../ui-kit/icon/checkbox";

interface SingleCheckBoxFilterProps {
    checkbox: ICheckboxFilter
    setSelected: (b: boolean) => void
    count: number | "Nbm"
}

const SingleCheckboxFilter: React.FC<SingleCheckBoxFilterProps> = ({checkbox, count, setSelected}) => {
    return (
        <SingleFilterContainer>
            <FlexRow gap={8} className="pointer" onClick={() => setSelected(!checkbox.selected)}>
                <Checkbox selected={checkbox.selected} />
                <label className="pointer">{checkbox.label}</label>
                <Tag label={count} pointer={true} color="secondary" size="small" />
            </FlexRow>
        </SingleFilterContainer>
    )
}

export default SingleCheckboxFilter