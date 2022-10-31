import FlexRow from "../../ui-kit/flex-row/flex-row";
import Icon from "../../ui-kit/icon/icon";
import InputField from "../../ui-kit/input/input-field";
import InputFieldWithIcon from "../../ui-kit/input/input-field-with-icon";
import DotNotify from "../../ui-kit/dot-notify/DotNotify";
import IconWithDotNotify from "../../ui-kit/dot-notify/IconWithDotNotify";
import Dropdown from "../dropdown/dropdown";
import InputFieldWithDropdown from "../../ui-kit/input/input-field-with-dropdown";
import {useState} from "react";

const Header = () => {
    const [value, setValue] = useState<string>("")

    return (
        <div className="header">
            <div className="header-left-side">
                <div className="header-title">JorndShop</div>
            </div>
            <div className="header-center">
                <InputFieldWithDropdown>
                    <Dropdown label="All categories" options={[{label: "123"}, {label: "312"}]} />

                    <InputFieldWithIcon iconPosition="right">
                        <Icon symbol="search" />
                        <InputField value={value} onChange={e => setValue(e.target.value)} placeholder="Search Products" />
                    </InputFieldWithIcon>
                </InputFieldWithDropdown>
            </div>
            <div className="header-right-side">
                <FlexRow gap={34}>
                    <Icon symbol="person" />
                    <IconWithDotNotify>
                        <Icon symbol="shopping_bag" />
                        <DotNotify n={4} />
                    </IconWithDotNotify>
                </FlexRow>
            </div>

            <div className="header-categories">
                <div className="header-categories-item">
                    Phones
                </div>
                <div className="header-categories-item">
                    TV
                </div>
                <div className="header-categories-item">
                    Personal Computers
                </div>
                <div className="header-categories-item">
                    For home
                </div>
                <div className="header-categories-item">
                    Multimedia
                </div>
                <div className="header-categories-item">
                    Instruments
                </div>
                <div className="header-categories-item">
                    Auto things
                </div>
            </div>
        </div>
    )
}

export default Header