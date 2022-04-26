import React from "react";
import MyMessages from "./MyMessages/MyMessages";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyMessagesContainer from "./MyMessages/MyMessagesContainer";

const ProfileContent = (props) => {

    return <div>
        <ProfileInfo profile={props.profile}/>
        <MyMessagesContainer
            store ={props.store}
        />
    </div>


}
export default ProfileContent;