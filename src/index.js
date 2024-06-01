import React from 'react';
import './index.css';
import LoginPage from './pages/LoginPages/LoginPage';
import ChildWelcomePage from './pages/StartingPages/ChildWelcomePage';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ParentLoginPage from "./pages/LoginPages/ParentLoginPage.js";
import ChildLoginPage from "./pages/LoginPages/ChildLoginPage";
import RegisterPage from "./pages/Registration/RegisterPage";
import AddAccount from "./pages/Registration/AddAccount";
import CreateChildAccountPage from "./pages/Registration/CreateChildAccountPage";
import ParentHomePage from "./pages/StartingPages/ParentHomePage";
import GoalsPage from "./pages/Games/BeforeGame/GoalsPage";
import ParentUserProfile from "./pages/UserProfile/ParentUserProfile";
import NotificationsPage from "./pages/Games/BeforeGame/NotificationsPage";
import ParentStatisticsPage from "./pages/Stats/Parent/ParentStatisticsPage";
import ChooseGameMode from "./pages/Games/BeforeGame/ChooseGameMode";
import CharacterCustomization from "./pages/CharacterCustomization/CharacterCustomization";
import MimicFromName from "./pages/Games/GameRunning/MimicFromName";
import MimicFromPicture from "./pages/Games/GameRunning/MimicFromPicture";
import RecognizeFromPicture from "./pages/Games/GameRunning/RecognizeFromPicture";
import DailyChallenge from "./pages/Games/GameRunning/DailyChallenge";
import FinishedGame from "./pages/Games/AfterGame/FinishedGame";
import StatsForChild from "./pages/Stats/Child/StatsForChild";
import ChooseGameTime from "./pages/Games/BeforeGame/ChooseGameTime";

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
            <Route exact path="/child-welcome" element={<ChildWelcomePage/>}/>
            <Route path="/ChooseGameMode" element={<ChooseGameMode/>}/>
            <Route path="/ChooseGameTime" element={<ChooseGameTime/>}/>
            <Route path="/CharacterCustomization" element={<CharacterCustomization/>}/>
            <Route path="MimicFromName" element={<MimicFromName/>}/>
            <Route path="MimicFromPicture" element={<MimicFromPicture/>}/>
            <Route path="RecognizeFromPicture" element={<RecognizeFromPicture/>}/>
            <Route path="DailyChallenge" element={<DailyChallenge/>}/>
            <Route path="FinishedGame" element={<FinishedGame/>}/>
            <Route path="StatsForChild" element={<StatsForChild/>}></Route>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
