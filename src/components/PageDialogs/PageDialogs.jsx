import React from "react";
import classes from './PageDialogs.module.css'
import {NavLink} from "react-router-dom";


const UserName = (props) => {

    return (
        <div className={classes.userNameCSS}>
            <NavLink className={(linkData) =>linkData.isActive ? classes.activeLink : ''}
            to = {'/page-dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
}
const UserMessages = (props) => {
    return (
        <div className={classes.userMessagesCSS}>
            <div>{props.message}</div>
        </div>
    );
}

const PageDialogs = (props) => {

    let newUserNameDataArray = props.userNameData.map(arrayData => <UserName name={arrayData.name} id ={arrayData.id}/>);
    let UserMessagesDataArray = props.userMessagesData.map(arrayData => <UserMessages message ={arrayData.message}/>);
    return (
        <div className={classes.pageDialogsCSS}>
            <div>
                {newUserNameDataArray}
            </div>
            <div>
                {UserMessagesDataArray}
            </div>
        </div>
    );
}
export default PageDialogs;