import React from "react";
import ShortFilterContainer from "../../../../ui-kit/container/short-filter-container";
import FlexRow from "../../../../ui-kit/flex-row/flex-row";
import Tag from "../../../../ui-kit/text/tag";
import Icon from "../../../../ui-kit/icon/icon";

interface ShortCheckBoxFilterProps {
    label: string
    count: number | "Nbm"
    selected: boolean
    setSelected: (b: boolean) => void
}

const ShortCheckboxFilter: React.FC<ShortCheckBoxFilterProps> = ({label, count, selected, setSelected}) => {
    return (
        <ShortFilterContainer>
            <FlexRow gap={8} className="pointer" onClick={() => setSelected(!selected)}>
                <div className={`checkbox${selected ? ' checkbox-selected' : ''}`}>
                    {selected && <Icon symbol="actions-check-simple" />}
                </div>
                <label className="pointer">{label}</label>
                <Tag label={count} pointer={true} color="secondary" size="small" />
            </FlexRow>
        </ShortFilterContainer>
    )
}

export default ShortCheckboxFilter