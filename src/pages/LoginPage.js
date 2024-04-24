import React from "react";
import Navbar from "./components/Navbar.js";
import Button from "./components/Button";
import blueGhost from "./images/blueGhost.png";
import { useNavigate } from 'react-router-dom'

function LoginPage() {
    return (
        <div>
            <Navbar style={{ backgroundColor: "#88CAFC" }} textColor="#FFEEC0"/>
            <h1 className={"login--text"}> Log in as</h1>
            <Button loc={{position: 'absolute', top: '30%', left: '59%'}} color="#88CAFC">Parent</Button>
            <Button loc={{position: 'absolute', top: '40%', left: '59%'}} color="#88CAFC">Child</Button>
            <h1 className={"login--text2"}> Don't have an account yet?</h1>
            <Button loc={{position: 'absolute', top: '63%', left: '59%'}} color="#88CAFC">Sign up here</Button>
            <img src={blueGhost} className="welcome--img" alt="Blue ghost"/>
        </div>
    );
}

export default LoginPage;