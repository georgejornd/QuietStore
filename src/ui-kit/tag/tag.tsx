import React from "react";
import Icon from "../icon/icon";

type TagColor = "primary" | "secondary" | "transparently"
type TagSize = "medium" | "small"

interface TagProps {
    label: string
    color: TagColor
    size: TagSize
    closeIcon?: boolean
    onClose?: () => void
}

const Tag: React.FC<TagProps> = ({label, color, size, closeIcon, onClose}) => {
    return (
        <div className={`tag tag-${color} tag-${size}`}>
            {label}
            {closeIcon && <Icon symbol="close" onClick={onClose} />}
        </div>
    )
}

export default Tag