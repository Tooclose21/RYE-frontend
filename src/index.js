import React from 'react';
import './index.css';
import LoginPage from './pages/LoginPage';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ParentLoginPage from "./pages/ParentLoginPage.js";
import ChildLoginPage from "./pages/ChildLoginPage";
import RegisterPage from "./pages/RegisterPage";
import AddAccount from "./pages/AddAccount";
import CreateChildAccountPage from "./pages/CreateChildAccountPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<LoginPage />} />
            <Route path="/parent-login" element={<ParentLoginPage />} />
            <Route path="/child-login" element={<ChildLoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/add-sub-account" element={<AddAccount />} />
            <Route path="/create-sub-account" element={<CreateChildAccountPage />} />
        </Routes>
    </BrowserRouter>,
    root
);
reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
