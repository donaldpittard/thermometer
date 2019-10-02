import React from 'react';
import style from './Temp.css';

const Temp = props => {
    const {temp} = props;

    if (!temp) {
        return '';
    }

    return (
        <span className="temp">
            {temp}
            <span>&deg;</span>
        </span>
    )
};

export default Temp;