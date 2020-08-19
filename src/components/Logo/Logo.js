import React from 'react';
import starwarslogo from '../../assets/Images/logoo.png';
import classes from './Logo.css';
const logo=(props)=>(
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={starwarslogo} alt="StarShips"/>
    </div>
);
export default logo;