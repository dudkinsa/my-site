import React from "react";
import {changeSymbolMessageBodySDCreator, sendMessageSDCreator} from "../../redux/sergeyDialogReducer";
import DialogsSergey from "./DialogsSergey";


const DialogsSergeyContainer = (props) => {

    let state =props.store.getState().dialogsSergeyPage;

    let onMessageClick =()=>{
        props.store.dispatch(sendMessageSDCreator())
    }

    let onMessageChange =(body)=>{
        props.store.dispatch(changeSymbolMessageBodySDCreator(body))
    }
    return (
        <DialogsSergey
            changeSymbolMessageBodySD={onMessageChange}
            sendMessageSD ={onMessageClick}
            dialogsSergeyPage={state}
        />
    );
}

export default DialogsSergeyContainer;