import React from 'react';
import './Forecast.css';

const Forecast = props => {
    return (
        <div 
            className={[
                'forecast',
                props.className,
                props.show ? 'forecast--slidein' : 'forecast--slideout'  
            ].join(' ')}
        >
            FORECAST
        </div>
    );
};

export default Forecast;