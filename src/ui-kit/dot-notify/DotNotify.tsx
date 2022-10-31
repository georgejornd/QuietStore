import React from "react";

interface DotNotifyProps {
    n: number
}

const DotNotify: React.FC<DotNotifyProps> = ({n}) => {
    return (
        <label className="dot-notify">
            {n}
        </label>
    )
}

export default DotNotify