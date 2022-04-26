import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/api";

let User = (props) => {
// Math.ceil округляет количество странициц в большую сторону
    let pagesCount =  Math.ceil( props.totalUsersCount / props.pageSize);
    let pages = [];
    for( let i =1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map (p => {
                    return <span className={props.currentPage === p ? styles.selectedPage : ''}
                                 onClick={()=> {props.onPageChanged(p);}}>{p}</span>
                })}

            </div>
            {
                props.users.map(u => <div key={u.id}>
                        <span>
                            <NavLink to={"/profile-content/" +u.id}>
                                <div>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                     className={styles.userPhoto}/>
                            </div>
                            </NavLink>
                            <div>
                                {u.followed
                                    ? <button disabled={props.followingInProgress
                                        .some(id=> id === u.id)}
                                              onClick={() => {props.unfollow(u.id)}}>
                                        Unfollow</button>
                                    : <button disabled={props.followingInProgress
                                        .some(id=> id === u.id)}
                                              onClick={() => {props.follow(u.id)}}>
                                        Follow</button>}

                            </div>
                        </span>
                    <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                    <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                </div>)
            }

        </div>
    );
}


export default User;