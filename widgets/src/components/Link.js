import React from 'react';

const Link =({className,children,href}) => {
    return(
        <a className={className} href={href}>
            {children}
        </a>
    );
}

export default Link;