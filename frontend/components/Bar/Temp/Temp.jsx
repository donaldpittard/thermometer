import React from 'react';
import style from './Temp.css';

const Temp = props => {
    const {temp,unit} = props;

    if (!temp) {
        return '';
    }

    return (
        <span className="temp">
            {temp}
            <span className="temp__degree">&deg;{unit}</span>
        </span>
    )
};

export default Temp;