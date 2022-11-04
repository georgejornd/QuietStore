import React from "react";
import BlockContainer from "../container/block-container";
import FlexRow from "../flex-row/flex-row";

interface BannerProps {
    title: string
    subtitle: string
    buttons?: JSX.Element | JSX.Element[]
}

const Banner: React.FC<BannerProps> = ({title, subtitle, buttons}) => {
    return (
        <div className="banner">
            <BlockContainer gap={8}>
                <div className="banner-subtitle">{subtitle}</div>
                <div className="banner-title">{title}</div>
            </BlockContainer>
            {buttons &&
                <FlexRow gap={8}>
                    {buttons}
                </FlexRow>
            }
        </div>
    )
}

export default Banner