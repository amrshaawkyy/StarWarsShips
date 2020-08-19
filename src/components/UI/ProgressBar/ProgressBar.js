import React from "react";
import classes from './ProgressBar.css';
const ProgressBar = (props) => {
  return (
    <div className={classes.containerStyles}>
      <div className={classes.fillerStyles} style={{ width: `${((props.completed / 6) * 100).toFixed(2)}%`, backgroundColor: props.bgcolor }}>
        <span className={classes.labelStyles}></span>
        {/* {`${completed}`} */}
      </div>
    </div>
  );
};

export default ProgressBar;