import React from "react";
import FlexRow from "../../ui-kit/flex-row/flex-row";

const navigations = ["Homepage", "Phones"]

const Navigation: React.FC = () => {
    return (
        <div className="navigation">
            {navigations.map((navigation, index) =>
                <FlexRow gap={8} key={navigation}>
                    <div className={`navigation-item navigation-item-text${navigations.length === (index + 1) ? ' navigation-last-item' : ''}`}>{navigation}</div>
                    {navigations.length !== (index + 1) ? <div className="navigation-item">/</div> : <></>}
                </FlexRow>
            )}
        </div>
    )
}

export default Navigation