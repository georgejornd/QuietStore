import React from "react";
import {prepareStyleProperty} from "../../utils/prepare-style-property";

interface BlockContainerProps {
    children: JSX.Element | JSX.Element[]
    className?: string
    fullWidth?: boolean
    gap?: number
    top?: number
    style?: React.CSSProperties
}

const BlockContainer: React.FC<BlockContainerProps> = ({children, className, style, fullWidth, top, gap}) => {
    return (
        <div className={`block-container${className ? ' ' + className : ''}`} style={{gap: prepareStyleProperty("px", gap), marginTop: prepareStyleProperty("px", top), width: fullWidth ? "100%" : undefined, ...style}}>
            {children}
        </div>
    )
}

export default BlockContainer