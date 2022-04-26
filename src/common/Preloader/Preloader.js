import preloader from "../../assets/images/loading_gif.gif";
import React from "react";

let Preloader =(props)=>{
    return(
        <div style={{backgroundColor: 'white'}}>
            <img src={preloader} />
        </div>
    );
}
export default Preloader;