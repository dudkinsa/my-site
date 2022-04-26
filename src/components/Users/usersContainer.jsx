import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsers, setTotalUserCount, toggleIsFetching,
    unfollow, toggleFollowingProgress, getUsersThunkCreator
} from "../../redux/usersReducer";
import * as axios from "axios";
import User from "./user";
import Preloader from "../../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator();
        /*this.props.toggleIsFetching(true); //9) loading
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize)

            .then(data => {
                this.props.toggleIsFetching(false);//10) loading
                this.props.setUsers(data.items);
                this.props.setTotalUserCount(data.totalCount);
            });*/
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);//11) loading
        usersAPI.getUsers(pageNumber,this.props.pageSize)
            .then(data    => {
                this.props.toggleIsFetching(false);//10) loading
                this.props.setUsers(data.items);
            });
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null} {/*//1) loading*/}
            <User
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                toggleFollowingProgress ={this.props.toggleFollowingProgress}
                followingInProgress ={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching, //3) loading
        followingInProgress: state.usersPage.followingInProgress,
    };
}
/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentActionCreator(pageNumber))
        },
        setTotalUserCount: (totalCount) => {
            dispatch(setUserTotalCountActionCreator(totalCount))
        },
        // 8) loading
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingActionCreator(isFetching))
        }
    }
}*/

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUserCount,
    toggleIsFetching, // 8) loading
    toggleFollowingProgress,
    getUsersThunkCreator
})(UsersContainer);
