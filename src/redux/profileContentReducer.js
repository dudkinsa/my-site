const ADD_MY_MESSAGE_DATA = 'ADD_MY_MESSAGE_DATA';
const CHANGE_SYMBOL_MY_MESSAGE = 'CHANGE_SYMBOL_MY_MESSAGE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    myMessagesData: [
        {id: 1, message: 'Sergey', quantityLike: '450'},
        {id: 2, message: 'Maksim', quantityLike: '150'},
        {id: 3, message: 'Ivan', quantityLike: '250'}
    ],
    newPostText: 'ENTER YOUR NEW MESSAGE',
    profile: null
};

const profileContentReducer = (state = initialState, action) => {

    // это другой вариант логики
    switch (action.type) {
        case ADD_MY_MESSAGE_DATA: {
            let newMessage = {
                id: 4,
                message: state.newPostText,
                quantityLike: 0
            };
            return  {
                ...state,
                myMessagesData: [...state.myMessagesData,newMessage],
                newPostText: ''
            };
        }
        case CHANGE_SYMBOL_MY_MESSAGE: {
            return  {...state,
                newPostText: action.newMessageText
            };
        }
        case SET_USER_PROFILE: {
            return {...state,
            profile: action.profile}
        }
        default:
            return state;
    }

}
export const addMyMessageDataCreator = () => {

    return {
        type: ADD_MY_MESSAGE_DATA
    }
}
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const changeSymbolMyMessageCreator = (text) => {
    return {
        type: CHANGE_SYMBOL_MY_MESSAGE
        , newMessageText: text
    }
}

export default profileContentReducer;