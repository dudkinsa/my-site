import React from "react";
import classes from './DialogsSergey.module.css'
import {NavLink} from "react-router-dom";

const UserDialogsSergey = (props) => {
    return (
        <div className={classes.nameUser}>
            <NavLink className={(linkData) => linkData.isActive ? classes.activeLink : ''}
                     to={'/dialogs-sergey/' + props.id}>{props.name}</NavLink>
        </div>
    );
}

const MessageDialogsSergey = (props) => {

    return (
        <div className={classes.userMessage}>{props.message}</div>
    );
}

const DialogsSergey = (props) => {
debugger;
    let state =props.dialogsSergeyPage;

    let newArrayUserDialogsSergeyDataConversion = state.userDialogsSergeyData.map(arrayData => <UserDialogsSergey name={arrayData.name} id={arrayData.id}/>)
    let newArrayMessageDialogsSergeyDataConversion = state.messageDialogsSergeyData.map(arrayData => <MessageDialogsSergey message={arrayData.message}/>)
    let newMessagesBody =state.newMessageTextDialogsSergey;

    let onMessageClick =()=>{
        props.sendMessageSD();
    }
    let onMessageChange =(event)=>{
        let body = event.target.value;
        props.changeSymbolMessageBodySD(body);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.nameUsers}>
                {newArrayUserDialogsSergeyDataConversion}
            </div>

            <div className={classes.userDialogs}>
                {newArrayMessageDialogsSergeyDataConversion}
            <div>
            </div>
                <div>
                    <textarea
                        value={newMessagesBody}
                        onChange={onMessageChange}
                        placeholder='Enter message'
                    > </textarea>
                </div>
                <div>
                    <button onClick={onMessageClick}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default DialogsSergey;