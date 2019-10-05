import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import './SliderIcon.css';

const SliderIcon = props => {
    return (
        <span className="slider-icon" onClick={props.onClick}>
            <FaCalendarAlt />
        </span>
    );
};

export default SliderIcon;