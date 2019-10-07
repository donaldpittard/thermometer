import React from 'react';
import Temperature from '../Temperature/Temperature.jsx';
import Icon from '../Icon/Icon.jsx';
import SliderIcon from '../SliderIcon/SliderIcon.jsx';
import './MainTemperatureDisplay.css';

const MainTemperatureDisplay = props => {
    const classes = [
        'main-temp-display',
    ];

    if (props.show === false) {
        classes.push('main-temp-display--slideout');
    }

    return (
        <div className={classes.join(' ')}>
            <Temperature 
                temp={props.temp} 
                unit={props.unit} 
                className={props.dark ? 'temp--large temp--dark' : 'temp--large'} 
            />
            <Icon 
                weatherCode={props.weatherCode} 
                className='icon--large' 
                size={210}
                color={props.dark ? '#333333' : '#FFFFFF'}
            />
            <SliderIcon onClick={props.onSliderClick} dark={props.dark} />
        </div>
    );
};

export default MainTemperatureDisplay;