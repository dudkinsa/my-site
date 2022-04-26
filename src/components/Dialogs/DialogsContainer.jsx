import React from "react";
import {changeSymbolMessageBodyCreator,  sendMessageCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state)=>{
    return{
        messagesPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        //Dialogs 5a)
        changeSymbolMessageBody: (body)=>{
            dispatch(changeSymbolMessageBodyCreator(body));
        },
        //Dialogs 6a)
        sendMessage: ()=>{
            dispatch(sendMessageCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;