import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import './SliderIcon.css';

const SliderIcon = props => {
    const classes = [
        'slider-icon',
        props.dark ? 'slider-icon--dark' : 'slider-icon--light'
    ];

    return (
        <span className={classes.join(' ')} onClick={props.onClick}>
            <FaCalendarAlt />
        </span>
    );
};

export default SliderIcon;