import React from "react";
import {BrowserRouter, Route} from 'react-router-dom'
import {Routes} from "react-router";
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import MusicContent from "./components/Music/MusicContent";
import News from "./components/News/News";
/*
import PageDialogs from "./components/PageDialogs/PageDialogs";
*/
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import DialogsSergeyContainer from "./components/DialogsSergey/DialogsSergeyContainer";
import UsersContainer from "./components/Users/usersContainer";
import ProfileContainer from "./components/ProfileContent/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='wrapper-css'>
                <HeaderContainer/>
                <Navigation/>
                <div className='app-css-wrapper-content'>
                    <Routes>
                        <Route path="/profile-content/:userId" element={
                            <ProfileContainer
                                /*store ={props.store}*/
                            />}/>
                        <Route path= "/dialogs/*" element={

                            <DialogsContainer
                                store ={props.store}//Dialogs 8)
                            />}/>
                        <Route path="/news/" element={<News/>}/>
                        <Route path="/music/" element={<MusicContent/>}/>
                        <Route path="/dialogs-sergey/*" element={
                            <DialogsSergeyContainer
                                store ={props.store}
                            />}/>
                             <Route path="/users/*" element={ <UsersContainer/>}/>

                        {/*<Route path="/page-dialogs/*" element={
                            <PageDialogs
                                store ={props.store}
                                userNameData={props.state.pageDialogsPage.userNameData}
                                userMessagesData = {props.state.pageDialogsPage.userMessagesData}
                            />}/>*/}
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
