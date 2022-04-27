import React from "react";

import ProfileContent from "./ProfileContent";
import * as axios from "axios";


import {getUserProfile} from "../../redux/profileContentReducer";
import {connect} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router";
import {usersAPI} from "../../api/api";
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
        if (!userId) {
            userId= 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return <ProfileContent {...this.props} prifile={this.props.profile}/>
    }
}
let mapStateToProps =(state) =>({
    profile: state.profilePage.profile
})
 let withUrlDataContainerComponent = withRouter(ProfileContainer)// withRouter код для 6 версии. 3)
export default connect(mapStateToProps,{getUserProfile}) (withUrlDataContainerComponent);// withRouter код для 6 версии. 4) вставлен withUrlDataContainerComponent

