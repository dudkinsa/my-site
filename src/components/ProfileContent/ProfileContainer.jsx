import React from "react";

import ProfileContent from "./ProfileContent";
import * as axios from "axios";


import {setUserProfile} from "../../redux/profileContentReducer";
import {connect} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router";
// withRouter код для 6 версии. 1)
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params, }}
            />
        );
    }
    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
    componentDidMount() {

        let userId = this.props.router.params.userId ; // withRouter код для 6 версии. 2)

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return <ProfileContent {...this.props} prifile={this.props.profile}/>
    }
}
let mapStateToProps =(state) =>({
    profile: state.profilePage.profile
})
 let withUrlDataContainerComponent = withRouter(ProfileContainer)// withRouter код для 6 версии. 3)
export default connect(mapStateToProps,{setUserProfile}) (withUrlDataContainerComponent);// withRouter код для 6 версии. 4) вставлен withUrlDataContainerComponent

