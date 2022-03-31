import React from "react";

// using CSS Module
import classes from './Card.module.css';

const Card = (props) => {
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>
};

export default Card;