import React from "react";
import Navbar from "../../components/Navbar.js";
import Button from "../../components/Button";
import blueGhost from "../../images/blueGhost.png";
import {Link } from "react-router-dom";
import '../../styles.css';


function LoginPage() {
    return (
        <div>
            <Navbar style={{ backgroundColor: "#88CAFC" }} textColor="#FFEEC0"/>
            <h1 className={"login--text"}> Log in as</h1>
            <Link to="/parent-login">
            <Button loc={{position: 'absolute', top: '30%', left: '59%'}} color="#88CAFC">Parent</Button>
            </Link>

            <Link to="/child-login">
                <Button loc={{position: 'absolute', top: '40%', left: '59%'}} color="#88CAFC">Child</Button>
            </Link>

            <h1 className={"login--text2"}> Don't have an account yet?</h1>
            <Link to="/register">
                <Button loc={{position: 'absolute', top: '63%', left: '59%'}} color="#88CAFC">Sign up here</Button>
            </Link>
            <img src={blueGhost} className="welcome--img" alt="Blue ghost"/>
        </div>
    );
}

export default LoginPage;