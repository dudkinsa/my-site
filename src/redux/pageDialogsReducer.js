

let initialState ={
    userNameData: [
        {id: 1, name: 'Sergey'},
        {id: 2, name: 'Maksim'},
        {id: 3, name: 'Oleg'},
        {id: 4, name: 'Valera'}
    ],
    userMessagesData: [
        {message: 'Привет'},
        {message: 'Как дела?'},
        {message: 'Я в порядке'},
        {message: 'Я тоже'}
    ]
};

const pageDialogsReducer = (state =initialState, action)=> {
    return state;
}

export default pageDialogsReducer;