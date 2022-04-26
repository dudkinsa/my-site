import React from "react";
import classes from './MusicMessage.module.css'

const MusicMessage = (props) => {
    return (
        <div className={classes.image}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Music_01754.jpg"/>
            {props.message}
        </div>
    );
}
export default MusicMessage;