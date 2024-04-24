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


const rootElement = document.getElementById("root");
    ReactDOM.render(
    < BrowserRouter>
        <Routes>
            <Route exact path="/" element={<ChildWelcomePage/>} />
            <Route path="/ChooseGameMode" element={<ChooseGameMode/>} />
            <Route path="/ChooseGameTimeRfP" element={<ChooseGameTimeRfP/>} />
            <Route path="/ChooseGameTimeMfP" element={<ChooseGameTimeMfP/>}/>
            <Route path="/ChooseGameTimeMfN" element={<ChooseGameTimeMfN/>}/>
        </Routes>
    </BrowserRouter>,
        rootElement
);

reportWebVitals();
