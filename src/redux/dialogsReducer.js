const CHANGE_SYMBOL_MESSAGE_BODY = 'CHANGE_SYMBOL_MESSAGE_BODY';//Dialogs
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState ={
        dialogsData: [
            {id: 1, name: 'Sergey'},
            {id: 2, name: 'Maksim'},
            {id: 3, name: 'Ivan'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Olya'},
            {id: 6, name: 'Natasha'},
        ],
        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'Fine'}
        ],
        newMessageBody: '' //Dialogs 1
};

const dialogsReducer = (state =initialState, action)=>{
    let stateCopy;
    //другой вариант логики
    switch (action.type) {
        case CHANGE_SYMBOL_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return  {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData,{id: 4, message: body}]
            };
        default:
            return state;
    }
    return state;

    // первый вариант логики
    /*if(action.type === CHANGE_SYMBOL_MESSAGE_BODY){
        state.newMessageBody = action.body;
    } else if(action.type === SEND_MESSAGE){
        let body = state.newMessageBody;
        state.newMessageBody = '';
        state.messagesData.push({id: 4, message: body});
    }

    return state;*/
}
///Dialogs 3)
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const changeSymbolMessageBodyCreator = (body) =>
    ({ type: CHANGE_SYMBOL_MESSAGE_BODY, body: body });
export default dialogsReducer;