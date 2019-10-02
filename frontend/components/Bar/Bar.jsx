import React from 'react';
import './Bar.css'

const barClass = number => `bar bar--${number}`;

const Bar = ({number, children}) => {
    return (
        <div className={children 
            ? barClass(number) + ' bar--selected' 
            : barClass(number)}
        >
            {children}
        </div>
    );
};

export default Bar;