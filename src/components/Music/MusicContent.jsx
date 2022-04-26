import React from "react";
import classes from './MusicContent.module.css'
import MusicMessages from "./MusicMessages/MusicMessages";

const MusicContent = (props) => {
    return(
        <div>
            <div>
                <img className={classes.image}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLamQpOKFcDvI5vW6DCJFDzALYT4lAJefP4g&usqp=CAU" alt="Nota"/>
            </div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Send</button>
            </div>
            <MusicMessages/>
        </div>
    );
}
export default MusicContent;