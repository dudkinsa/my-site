import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={classes.header}>
        <img
            src="https://us.123rf.com/450wm/andyadi/andyadi1802/andyadi180200513/95572662-vector-logo-design-for-beauty-salon-dermatology-center-and-wellness-house-.jpg?ver=6"
            alt="logo"/>
            <div className={classes.loginBlock}>
                {props.isAuth ? props.login : <NavLink  to={'/login'}>Login</NavLink>}
            </div>
    </header>;
}
export default Header;