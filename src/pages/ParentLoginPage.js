import './styles.css';
import Navbar from "./components/Navbar.js";
import Button from "./components/Button";
import React from "react";
import blueGhost from "./images/blueGhost.png";

function ParentLoginPage() {
    return (
        <div>
            <Navbar style={{ backgroundColor: "#B0C5DA" }} textColor="#FFFFFF" />
            <h1 className="login--text" style={{ color: '#FFFFFF' }}> Log in as PARENT</h1>
            <Button loc={{position: 'absolute', top: '30%', left: '59%'}} color="#B0C5DA">Parent</Button>
            <Button loc={{position: 'absolute', top: '40%', left: '59%'}} color="#B0C5DA">Child</Button>
            <h1 className="login--text2" style={{ color: '#FFFFFF' }}> Don't have an account yet?</h1>
            <Button loc={{position: 'absolute', top: '63%', left: '59%'}} color="#B0C5DA">Sign up here</Button>
            <img src={blueGhost} className="welcome--img" alt="Blue ghost" style={{ transform: 'translate(-50%, 5%)' }}/>
        </div>
    );
}

export default ParentLoginPage;