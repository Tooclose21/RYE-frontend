import React from 'react';
import './index.css';
import LoginPage from './pages/ParentPages/LoginPage';
import ChildWelcomePage from './pages/ChildPages/ChildWelcomePage';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ParentLoginPage from "./pages/ParentPages/ParentLoginPage.js";
import ChildLoginPage from "./pages/ParentPages/ChildLoginPage";
import RegisterPage from "./pages/ParentPages/RegisterPage";
import AddAccount from "./pages/ParentPages/AddAccount";
import CreateChildAccountPage from "./pages/ParentPages/CreateChildAccountPage";
import ParentHomePage from "./pages/ParentPages/ParentHomePage";
import GoalsPage from "./pages/ParentPages/GoalsPage";
import ParentUserProfile from "./pages/ParentPages/ParentUserProfile";
import NotificationsPage from "./pages/ParentPages/NotificationsPage";
import ParentStatisticsPage from "./pages/ParentPages/ParentStatisticsPage";
import ChooseGameMode from "./pages/ChildPages/ChooseGameMode";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ChooseGameTimeRfP from "./pages/ChildPages/ChooseGameTimeRfP";
import ChooseGameTimeMfP from "./pages/ChildPages/ChooseGameTimeMfP";
import ChooseGameTimeMfN from "./pages/ChildPages/ChooseGameTimeMfN";
import CharacterCustomization from "./pages/ChildPages/CharacterCustomization";
import MimicFromName from "./pages/ChildPages/MimicFromName";
import MimicFromPicture from "./pages/ChildPages/MimicFromPicture";
import RecognizeFromPicture from "./pages/ChildPages/RecognizeFromPicture";
import DailyChallenge from "./pages/ChildPages/DailyChallenge";
import FinishedGame from "./pages/ChildPages/FinishedGame";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<LoginPage/>}/>
            <Route path="/parent-login" element={<ParentLoginPage/>}/>
            <Route path="/child-login" element={<ChildLoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/add-sub-account" element={<AddAccount/>}/>
            <Route path="/create-sub-account" element={<CreateChildAccountPage/>}/>
            <Route path="/main-page" element={<ParentHomePage/>}/>
            <Route path="/goals" element={<GoalsPage/>}/>
            <Route path="/parent-profile" element={<ParentUserProfile/>}/>
            <Route path="/set-notifications" element={<NotificationsPage/>}/>
            <Route path="/parent-statistics" element={<ParentStatisticsPage/>}/>
            <Route exact path="/" element={<ChildWelcomePage/>}/>
            <Route path="/ChooseGameMode" element={<ChooseGameMode/>}/>
            <Route path="/ChooseGameTimeRfP" element={<ChooseGameTimeRfP/>}/>
            <Route path="/ChooseGameTimeMfP" element={<ChooseGameTimeMfP/>}/>
            <Route path="/ChooseGameTimeMfN" element={<ChooseGameTimeMfN/>}/>
            <Route path="/CharacterCustomization" element={<CharacterCustomization/>}/>
            <Route path="MimicFromName" element={<MimicFromName/>}/>
            <Route path="MimicFromPicture" element={<MimicFromPicture/>}/>
            <Route path="RecognizeFromPicture" element={<RecognizeFromPicture/>}/>
            <Route path="DailyChallenge" element={<DailyChallenge/>}/>
            <Route path="FinishedGame" element={<FinishedGame/>}/>

        </Routes>
    </BrowserRouter>,
    root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
