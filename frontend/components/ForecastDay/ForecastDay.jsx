import React from 'react';
import './ForecastDay.css';

const ForecastDay = props => {
    const classes = [
        'forecast-day',
    ];

    return (
        <div className={classes.join(' ')}>
            <h1>{props.day}</h1>
        </div>
    )
};

export default ForecastDay;