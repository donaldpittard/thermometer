import React from 'react';
import { FaCalendar } from 'react-icons/fa';
import './SliderIcon.css';

const SliderIcon = props => {
    return (
        <span className="slider-icon" onClick={props.onClick}>
            <FaCalendar />
        </span>
    );
};

export default SliderIcon;