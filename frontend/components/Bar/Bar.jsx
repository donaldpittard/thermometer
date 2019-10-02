import React from 'react';
import styles from './Bar.css'
import Temp from './Temp/Temp.jsx';

const Bar = props => {
    const {number} = props;
    let className = `bar bar--${number}`;
    let temp = '';

    if (number === 2) {
        className += ` bar--selected`;
        temp = 86;
    }

    return (
        <div className={className}>
            <Temp temp={temp} unit={'f'} />
        </div>
    );
};

export default Bar;