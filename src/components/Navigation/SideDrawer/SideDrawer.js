import React from 'react';
import Logo from "../../Logo/Logo";

import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/AUX1/Aux1';
const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo /*height="11%"*/ />
                </div>
                <nav >
                    <div className={classes.container} style={{ borderTop: '1px solid grey' }}>
                        <ul className={classes.menu}>
                            <li>
                                <a className={classes.glow} href="/">HOME</a>
                            </li>
                            <li>
                                <a className={classes.glow} href="https://www.starwars.com/community">COMMUNITY</a>
                            </li>
                            <li>
                                <a className={classes.glow} href="https://www.starwars.com/news">BLOG</a>
                            </li>
                            <li>
                                <a className={classes.glow} href="https://www.starwars.com/databank">DATABANK</a>
                            </li>
                            <li>
                                <a className={classes.glow} href="https://www.starwars.com/video">VIDEO</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </Aux>
    );
};
export default sideDrawer;