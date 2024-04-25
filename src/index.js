import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ChildWelcomePage from './pages/ChildWelcomePage';
import reportWebVitals from './reportWebVitals';
import ChooseGameMode from "./pages/ChooseGameMode";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChooseGameTimeRfP from "./pages/ChooseGameTimeRfP";
import ChooseGameTimeMfP from "./pages/ChooseGameTimeMfP";
import ChooseGameTimeMfN from "./pages/ChooseGameTimeMfN";
import CharacterCustomization from "./pages/CharacterCustomization";
import MimicFromName from "./pages/MimicFromName";
import MimicFromPicture from "./pages/MimicFromPicture";
import RecognizeFromPicture from "./pages/RecognizeFromPicture";
import DailyChallenge from "./pages/DailyChallenge";

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
        </Routes>
    </BrowserRouter>,
        rootElement
);

reportWebVitals();
