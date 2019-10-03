import React from 'react';
import './Bar.css'

const Bar = props => {
    const componentClasses = [
        'bar',
        `bar--${props.number}`
    ];

    if (props.children) {
        componentClasses.push('bar--selected');
    }

    if (props.hide) {
        componentClasses.push('bar--slideout');
    }

    return (
        <div className={componentClasses.join(' ')}>
            {props.children}
        </div>
    );
};

export default Bar;