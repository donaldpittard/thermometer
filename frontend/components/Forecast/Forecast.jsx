import React from 'react';
import ForecastDay from '../ForecastDay/ForecastDay.jsx';
import './Forecast.css';

const Forecast = props => {
    return (
        <div 
            onClick={props.onClick}
            className={[
                'forecast',
                props.className,
                props.show ? 'forecast--slidein' : 'forecast--slideout'  
            ].join(' ')}
        >
            {props.forecast.map(forecast => <ForecastDay key={forecast.day} unit={props.unit} {...forecast} />)}
        </div>
    );
};

export default Forecast;