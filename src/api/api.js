import * as axios from "axios";

const instance= axios.create({
withCredentials:true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '7033f14c-fcab-4243-a426-9579c0201be9'
    }

});

export const usersAPI ={
    getUsers (currentPage,pageSize){
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });
    }
}




