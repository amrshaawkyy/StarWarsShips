import React from 'react';
import Aux from '../../hoc/AUX1/Aux1';
import classes from './Starship.css';
import ProgressBar from "../UI/ProgressBar/ProgressBar";
const Starship = (props) => (
    <Aux>
        <article className={classes.Starship} onClick={props.clicked}>
            <h1>Name: {props.name.charAt(0).toUpperCase() + props.name.slice(1)}</h1>
            <h1>Crew: {props.crew === '0' ? "None" : props.crew}</h1>
            <h1>Passengers: {props.passengers === '0' ? "None" : props.passengers}</h1>
            <div className={classes.ex}>
                <h1>Hyperdrive Class: </h1>
                <ProgressBar className={classes.progress} bgcolor={"green"} completed={props.hyperdrive_rating } />
            </div>
        </article>
    </Aux>
);

export default Starship;