import React from "react";
import Title from "../text/title";
import BlockContainer from "./block-container";

interface BlockWithTitleContainerProps {
    children: JSX.Element | JSX.Element[]
    title: string
    childrenGap?: number
}

const BlockWithTitleContainer: React.FC<BlockWithTitleContainerProps> = ({children, title, childrenGap = 12}) => {
    return (
        <BlockContainer gap={16} fullWidth={true} style={{height: "max-content"}}>
            <Title text={title} />

            <BlockContainer gap={childrenGap} fullWidth={true}>
                {children}
            </BlockContainer>
        </BlockContainer>
    )
}

export default BlockWithTitleContainer