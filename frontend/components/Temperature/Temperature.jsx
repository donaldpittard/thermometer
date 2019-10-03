import React from 'react';
import './Temperature.css';
import {units} from '../../lib/utils';

const Temperature = ({temp, className, unit=units.fahrenheit, ...props}) => {
    if (temp === null) {
        return '';
    }

    return (
        <span className={`temp ${className}`} {...props}>
            {temp}
            <span className="temp__degree">&deg;{unit}</span>
        </span>
    )
};

export default Temperature;