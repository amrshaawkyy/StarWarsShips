import React from 'react';
import classes from './Toolbar.css';
import Logo from "../../Logo/Logo";
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={classes.Logo}>
            <Logo  /*height="80%"*/ />
        </div>
        <nav className={classes.DestopOnly}>
            <div className={classes.container} style={{ borderTop: '1px solid grey' }}>
                <ul className={classes.menu}>
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
                    <li>
                        <a className={classes.glow} href="/">HOME</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);
export default toolbar;  