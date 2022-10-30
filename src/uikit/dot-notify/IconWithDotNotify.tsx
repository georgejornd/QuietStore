import React from 'react';

interface IconWithDotNotifyProps {
    children: JSX.Element[]
}

const IconWithDotNotify: React.FC<IconWithDotNotifyProps> = ({children}) => {
    return (
        <div className="icon-with-dot-notify">
            {children}
        </div>
    )
}

export default IconWithDotNotify