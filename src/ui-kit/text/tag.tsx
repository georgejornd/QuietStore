import React from "react";
import Icon from "../icon/icon";

type TagColor = "primary" | "secondary" | "transparently"
type TagSize = "medium" | "small"

interface TagProps {
    label: string | number
    color: TagColor
    size: TagSize
    pointer?: boolean
    closeIcon?: boolean
    onClose?: () => void
}

const Tag: React.FC<TagProps> = ({label, color, size, pointer, closeIcon, onClose}) => {
    return (
        <div className={`tag tag-${color} tag-${size}${pointer || closeIcon ? ' pointer' : ''}`}>
            {label}
            {closeIcon && <Icon symbol="actions-close-simple" onClick={onClose} />}
        </div>
    )
}

export default Tag