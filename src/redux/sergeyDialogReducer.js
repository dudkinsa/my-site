

const CHANGE_SYMBOL_MESSAGE_BODY_SD = 'CHANGE_SYMBOL_MESSAGE_BODY_SD';//Dialogs
const SEND_MESSAGE_SD = 'SEND_MESSAGE_SD';

let initialState ={
        userDialogsSergeyData: [
            {id: 1, name: 'Kolya'},
            {id: 2, name: 'Valera'},
            {id: 3, name: 'Senya'},
            {id: 4, name: 'Nikita'},
            {id: 5, name: 'Kira'}
        ],
        messageDialogsSergeyData: [
            {message: 'Привет'},
            {message: 'Как дела?'},
            {message: 'Хорошо. А у тебя?'},
            {message: 'Тоже'}
        ],
        newMessageTextDialogsSergey: ''
};

const sergeyDialogsReducer = (state =initialState, action) =>{

if (action.type === CHANGE_SYMBOL_MESSAGE_BODY_SD){
    state.newMessageTextDialogsSergey =action.body;
}else if(action.type ===SEND_MESSAGE_SD){
    let body = state.newMessageTextDialogsSergey;
    state.newMessageTextDialogsSergey = '';
    state.messageDialogsSergeyData.push( {message: body})
}
return state;
}
export const sendMessageSDCreator = () => ({type: SEND_MESSAGE_SD})
export const changeSymbolMessageBodySDCreator = (body) =>
    ({ type: CHANGE_SYMBOL_MESSAGE_BODY_SD, body: body });
export default sergeyDialogsReducer ;