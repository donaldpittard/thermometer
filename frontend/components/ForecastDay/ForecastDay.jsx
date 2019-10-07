import React from 'react';
import './ForecastDay.css';
import Icon from '../Icon/Icon.jsx';
import Temperature from '../Temperature/Temperature.jsx';

const ForecastDay = props => {
    const classes = [
        'forecast-day',
    ];

    return (
        <div className={classes.join(' ')}>
            <div className="forecast-day--heading">
                <h1>{props.day}</h1>
            </div>
            <Icon weatherCode={props.code} size={175} color="#FFFFFF" />
            <Temperature temp={props.temp} unit={props.unit}  className='forecast-day__temp'   />
        </div>
    )
};

export default ForecastDay;