import React from "react";
import classes from './MusicMessages.module.css'
import MusicMessage from "./MusicMessage/MusicMessage";

const MusicMessages = () => {
    return(

        <div>
            <div>

            </div>
            <div>
                <MusicMessage message = 'Привет'/>
                <MusicMessage message = 'Как дела'/>
                <MusicMessage message = 'Хорошо'/>
            </div>
        </div>
    );
}
export default MusicMessages;