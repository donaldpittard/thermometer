import React from 'react';
import styles from './Bar.css'
import Temp from './Temp/Temp.jsx';

const Bar = props => {
    const {number, temp, unit} = props;
    let className = `bar bar--${number}`;

    if (number === 2) {
        className += ` bar--selected`;
    }

    return (
        <div className={className}>
            <Temp temp={temp} unit={unit} />
        </div>
    );
};

export default Bar;