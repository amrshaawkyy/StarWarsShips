import React from 'react';
import classes from './Button.css';
const button = (props) => {
    return (
        props.btnType === "Success" ?
            <span className={[classes.Button, classes[props.btnType]].join(' ')}
                onClick={props.clicked} disabled={props.disable} style={{ fontSize: '30px' }}>
                {props.children}
                &#8594;
            </span> : <span className={[classes.Button, classes[props.btnType]].join(' ')}
                onClick={props.clicked} disabled={props.disable} style={{ fontSize: '30px' }}>
                &#8592;
                {props.children}
            </span>
    )
};
export default button; 