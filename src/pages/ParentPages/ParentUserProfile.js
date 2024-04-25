import React from "react";
import Navbar from "../../components/Navbar.js";
import Button from "../../components/Button";
import blueGhost from "../../images/blueGhost.png";
import {Link } from "react-router-dom";
import '../../styles.css';


function ParentUserProfile() {
    return (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#3A3A72'}}>
            <Navbar style={{ backgroundColor: "#3A3A72" }} textColor="#FBFFEA"/>
            <h1 className={"login--text"}> User profile</h1>

            <img src={blueGhost} className="welcome--img" alt="Blue ghost"/>
        </div>
    );
}

export default ParentUserProfile;