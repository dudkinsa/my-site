import React from "react";
import classes from './MyMessages.module.css'
import Message from "./Message/Message";


const MyMessages = (props) => {

    let newMessagesDataConversion =
            props.myMessagesData.map(arrayData => <Message message={arrayData.message} quantityLikes = {arrayData.quantityLike}/>);

    let newMessageElement =React.createRef();
    let addMessage =()=>{
        props.addMessage();


    }
    let onMessageChange =()=>{
        let text = newMessageElement.current.value;
        props.changeSymbolMyMessage(text);

    }

    return (
        <div>
            <div>
                Avatar + description
            </div>
            My post
            <div>
                <div>
                    <textarea onChange={onMessageChange}
                              ref={newMessageElement}
                                value={props.newPostText}> </textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Send</button>
                </div>
                <div className={classes.post}>
                    {newMessagesDataConversion}
                </div>


            </div>
        </div>
    );


}
export default MyMessages;