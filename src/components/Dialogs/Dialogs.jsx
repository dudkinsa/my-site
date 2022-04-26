import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
const User = (props) => {
    return (
        <div className={classes.user}>
            <NavLink className={(linkData) => linkData.isActive ? classes.activeLink : ''}
                     to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
}

const MessageUser = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {

    let state = props.messagesPage; //Dialogs 9)

    let newDialogsDataConversion = state.dialogsData.map(arrayData => <User name={arrayData.name} key = {arrayData.id } id={arrayData.id} />);
    let newMessagesDataConversion = state.messagesData.map(messageArrayData => <MessageUser message={messageArrayData.message} key = {messageArrayData.id }/>);
    let newMessagesBody = state.newMessageBody; //Dialogs 10)
    //Dialogs 5)
    let onMessageClick= ()=>{
        props.sendMessage();
        //Dialogs 5)
    }
    //Dialogs 6)
    let onMessageChange= (event)=>{
        let body = event.target.value;
        props.changeSymbolMessageBody(body);

    }
    //Dialogs 6)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsUser}>
                {newDialogsDataConversion}
            </div>
            <div className={classes.messages}>
                {newMessagesDataConversion}
            </div>
            {/*//Dialogs 4)*/}
            <div>
                <div>
                    <textarea value={newMessagesBody}
                              onChange={onMessageChange}
                              placeholder='Enter message'> </textarea>
                </div>
                <div>
                    <button onClick={onMessageClick}>Send</button>
                </div>
            </div>
            {/*//Dialogs 4)*/}

        </div>

    );
}

export default Dialogs;