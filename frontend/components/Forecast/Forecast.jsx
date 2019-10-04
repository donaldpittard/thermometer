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
            <ForecastDay day="Monday" />
            <ForecastDay day="Tuesday" />
            <ForecastDay day="Wednesday" />
            <ForecastDay day="Thursday" />
        </div>
    );
};

export default Forecast;