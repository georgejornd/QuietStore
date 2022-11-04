import React from "react";
import ShortFilterContainer from "../../../../ui-kit/container/short-filter-container";
import FlexRow from "../../../../ui-kit/flex-row/flex-row";
import Tag from "../../../../ui-kit/text/tag";
import {ICheckboxFilter} from "../../../../types/product/filter/filter";
import Checkbox from "../../../../ui-kit/icon/checkbox";

interface ShortCheckBoxFilterProps {
    checkbox: ICheckboxFilter
    setSelected: (b: boolean) => void
    count: number | "Nbm"
}

const ShortCheckboxFilter: React.FC<ShortCheckBoxFilterProps> = ({checkbox, count, setSelected}) => {
    return (
        <ShortFilterContainer>
            <FlexRow gap={8} className="pointer" onClick={() => setSelected(!checkbox.selected)}>
                <Checkbox selected={checkbox.selected} />
                <label className="pointer">{checkbox.label}</label>
                <Tag label={count} pointer={true} color="secondary" size="small" />
            </FlexRow>
        </ShortFilterContainer>
    )
}

export default ShortCheckboxFilter