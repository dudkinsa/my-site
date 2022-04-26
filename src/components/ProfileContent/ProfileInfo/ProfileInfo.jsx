import React from "react";
import Preloader from "../../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }
    return <div>
        <div>
            <img src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg" alt="image tree"/>
        </div>
        <div>
            <img src={props.profile.photos.large}/>
        </div>
    </div>


}
export default ProfileInfo;