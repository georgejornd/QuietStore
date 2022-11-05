import React, {useEffect, useMemo, useState} from "react";
import BlockWithTitleContainer from "../../../../ui-kit/container/block-with-title-container";
import FlexRow from "../../../../ui-kit/flex-row/flex-row";
import Title from "../../../../ui-kit/text/title";
import InputField from "../../../../ui-kit/input/input-field";
import {IRange} from "../../../../types/product/filter/filter";
import useDebounce from "../../../../hooks/useDebounce";

interface RangeFilterProps {
    label: string
    range: IRange
    setRange: (range: IRange) => void
}

const RangeFilter: React.FC<RangeFilterProps> = ({label, range, setRange}) => {
    const [restrictions] = useState([range[0], range[1]])

    const [first, setFirst] = useState<number>(range[0])
    const [second, setSecond] = useState<number>(range[1])

    const pickLine = useMemo(() => {
        const left = first / (restrictions[1] / 100)
        const width = ((second / restrictions[1]) * 100) - left

        return {left, width}
    }, [first, second, restrictions])

    const debouncedFirst = useDebounce<number>(first, 500)
    const debouncedSecond = useDebounce<number>(second, 500)

    useEffect(() => setRange([debouncedFirst, debouncedSecond]), [debouncedFirst, debouncedSecond, setRange])

    const handleChangeFirst = (payload: number) => (payload < second && payload >= restrictions[0]) && setFirst(payload)
    const handleChangeSecond = (payload: number) => (payload > first && payload <= restrictions[1]) && setSecond(payload)

    return (
        <BlockWithTitleContainer title={label} childrenGap={16}>
            <div className="range-picker">
                <div className="range-picker-item range-picker-line range-picker-full-line"></div>
                <div className="range-picker-item range-picker-line range-picker-pick-line" style={{width: pickLine.width + "%", left: pickLine.left + "%"}}></div>

                <input value={first} onChange={e => handleChangeFirst(Number(e.target.value))} type="range" min={restrictions[0]} max={restrictions[1]} className="range-picker-item range-picker-input"/>
                <input value={second} onChange={e => handleChangeSecond(Number(e.target.value))} type="range" min={restrictions[0]} max={restrictions[1]} className="range-picker-item range-picker-input"/>
            </div>
            <FlexRow className="range-input-field-group" gap={14}>
                <div>
                    <Title text="Min" size={12} position="start" />
                    <InputField value={first} onChange={e => handleChangeFirst(Number(e.target.value))} width={85} />
                </div>
                <div className="range-input-field-group-stick">-</div>
                <div>
                    <Title text="Max" size={12} position="start" />
                    <InputField value={second} onChange={e => handleChangeSecond(Number(e.target.value))} width={85} />
                </div>
            </FlexRow>
        </BlockWithTitleContainer>
    )
}

export default RangeFilter