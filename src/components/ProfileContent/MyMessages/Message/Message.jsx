import React from "react";
import classes from './Message.module.css'

const Message = (props) => {
    return (
        <div>
                <div className={classes.post}>
                    <img src="https://www.meme-arsenal.com/memes/a4800eccd928afcff635538f905229ad.jpg" alt="avatar"/>
                    {props.message}
                    <div>
                        <span> Like {props.quantityLikes}</span>
                    </div>
                </div>
             </div>
        );



}
export default Message;