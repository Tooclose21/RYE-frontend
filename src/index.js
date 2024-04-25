import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ChildWelcomePage from './pages/ChildPages/ChildWelcomePage';
import reportWebVitals from './reportWebVitals';
import ChooseGameMode from "./pages/ChildPages/ChooseGameMode";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChooseGameTimeRfP from "./pages/ChildPages/ChooseGameTimeRfP";
import ChooseGameTimeMfP from "./pages/ChildPages/ChooseGameTimeMfP";
import ChooseGameTimeMfN from "./pages/ChildPages/ChooseGameTimeMfN";
import CharacterCustomization from "./pages/ChildPages/CharacterCustomization";
import MimicFromName from "./pages/ChildPages/MimicFromName";
import MimicFromPicture from "./pages/ChildPages/MimicFromPicture";
import RecognizeFromPicture from "./pages/ChildPages/RecognizeFromPicture";
import DailyChallenge from "./pages/ChildPages/DailyChallenge";
import FinishedGame from "./pages/ChildPages/FinishedGame";

const rootElement = document.getElementById("root");
    ReactDOM.render(
    < BrowserRouter>
        <Routes>
            <Route exact path="/" element={<ChildWelcomePage/>} />
            <Route path="/ChooseGameMode" element={<ChooseGameMode/>} />
            <Route path="/ChooseGameTimeRfP" element={<ChooseGameTimeRfP/>} />
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
        rootElement
);

reportWebVitals();
