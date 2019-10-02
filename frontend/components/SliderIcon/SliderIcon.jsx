import React from 'react';
import { FaChevronCircleLeft } from 'react-icons/fa';
import './SliderIcon.css';

const SliderIcon = props => {
    return (
        <span className="slider-icon" onClick={props.onClick}>
            <FaChevronCircleLeft />
        </span>
    );
};

export default SliderIcon;