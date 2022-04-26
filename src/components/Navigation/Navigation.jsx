import React from "react";
import classes from './Navigation.module.css';
import {NavLink} from "react-router-dom";

const Navigation = () => {

    return (
        <nav className={classes.navigation}>
            <div className={classes.item}>
                <NavLink className={(navData) => navData.isActive ? classes.activeLink : ''} to='/profile-content'>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink className={(navData)=> navData.isActive ? classes.activeLink : ''} to ='/dialogs'>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink className={(navData)=> navData.isActive ? classes.activeLink : ''} to ='/users'>Users</NavLink>
            </div>

            <div className={classes.item}>
                <NavLink className={(navData) => navData.isActive ? classes.activeLink : ''} to='/news'>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink className={(navData)=> navData.isActive ? classes.activeLink : ''} to='/music'>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink className={(navData)=> navData.isActive ? classes.activeLink : ''} to='/dialogs-sergey'>Dialogs Sergey</NavLink>
            </div>
            {/*<div className={classes.item}>
                <NavLink className={(navData)=> navData.isActive ? classes.activeLink : ''} to='/page-dialogs'>Page Dialogs</NavLink>
            </div>*/}


        </nav>
    );
}
export default Navigation;