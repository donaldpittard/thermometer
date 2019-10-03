import React from 'react';
import './Forecast.css';

const Forecast = props => {
    return (
        <div 
            className={[
                'forecast',
                props.className
            ].join(' ')}
        >
            FORECAST
        </div>
    );
};

export default Forecast;