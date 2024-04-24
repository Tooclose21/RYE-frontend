import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ChildWelcomePage from './pages/ChildWelcomePage';
import reportWebVitals from './reportWebVitals';
import ChooseGameMode from "./pages/ChooseGameMode";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const rootElement = document.getElementById("root");
    ReactDOM.render(
    < BrowserRouter>
        <Routes>
            <Route exact path="/" element={<ChildWelcomePage/>} />
            <Route path="/ChooseGameMode" element={<ChooseGameMode/>} />
        </Routes>
    </BrowserRouter>,
        rootElement
);

reportWebVitals();
