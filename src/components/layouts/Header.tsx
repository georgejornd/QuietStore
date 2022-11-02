import FlexRow from "../../ui-kit/flex-row/flex-row";
import Icon from "../../ui-kit/icon/icon";
import InputField from "../../ui-kit/input/input-field";
import InputFieldWithIcon from "../../ui-kit/input/input-field-with-icon";
import DotNotify from "../../ui-kit/dot-notify/DotNotify";
import IconWithDotNotify from "../../ui-kit/dot-notify/IconWithDotNotify";
import Dropdown from "../dropdown/dropdown";
import InputFieldWithDropdown from "../../ui-kit/input/input-field-with-dropdown";
import {useState} from "react";
import {Link} from "react-router-dom";

const Header = () => {
    const [value, setValue] = useState<string>("")

    return (
        <div className="header">
            <div className="header-left-side">
                <Link to="/" className="header-title">QuietStore</Link>
            </div>
            <div className="header-center">
                <InputFieldWithDropdown>
                    <Dropdown label="All categories" options={[{label: "123"}, {label: "312"}]} />

                    <InputFieldWithIcon iconPosition="right">
                        <Icon symbol="actions-search" />
                        <InputField value={value} onChange={e => setValue(e.target.value)} placeholder="Search Products" />
                    </InputFieldWithIcon>
                </InputFieldWithDropdown>
            </div>
            <div className="header-right-side">
                <FlexRow gap={34}>
                    <Icon symbol="actions-user" />
                    <IconWithDotNotify>
                        <Icon symbol="ecommerce-basket" />
                        <DotNotify n={4} />
                    </IconWithDotNotify>
                </FlexRow>
            </div>

            <div className="header-categories">
                <Link to="/products" className="header-categories-item">
                    Phones
                </Link>
                <Link to="/products" className="header-categories-item">
                    TV
                </Link>
                <Link to="/products" className="header-categories-item">
                    Personal Computers
                </Link>
                <Link to="/products" className="header-categories-item">
                    For home
                </Link>
                <Link to="/products" className="header-categories-item">
                    Multimedia
                </Link>
                <Link to="/products" className="header-categories-item">
                    Instruments
                </Link>
                <Link to="/products" className="header-categories-item">
                    Auto things
                </Link>
            </div>
        </div>
    )
}

export default Header