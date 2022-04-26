import React from "react";
import {addMyMessageDataCreator, changeSymbolMyMessageCreator} from "../../../redux/profileContentReducer";
import MyMessages from "./MyMessages";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        myMessagesData: state.profilePage.myMessagesData,
        newPostText: state.profilePage.newPostText
    }
}
    let mapDispatchToProps = (dispatch) => {
        return {
            changeSymbolMyMessage: (text)=>{
                let action = changeSymbolMyMessageCreator(text);
                dispatch(action);
            },
            addMessage: ()=>{
                dispatch(addMyMessageDataCreator());
            }
        }
}
const MyMessagesContainer =connect(mapStateToProps,mapDispatchToProps) (MyMessages);
export default MyMessagesContainer;