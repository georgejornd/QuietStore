import React from "react";
import Title from "../text/title";
import BlockContainer from "./block-container";

interface BlockWithTitleContainerProps {
    children: JSX.Element | JSX.Element[]
    title: string
}

const BlockWithTitleContainer: React.FC<BlockWithTitleContainerProps> = ({children, title}) => {
    return (
        <BlockContainer gap={16} fullWidth={true}>
            <Title text={title} />

            <BlockContainer gap={12} fullWidth={true}>
                {children}
            </BlockContainer>
        </BlockContainer>
    )
}

export default BlockWithTitleContainer