import React from "react";
import Navbar from "../../components/Navbar.js";
import Button from "../../components/Button";
import blueGhost from "../../images/blueGhost.png";
import {Link } from "react-router-dom";
import '../../styles.css';


function ParentHomePage() {
    return (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#FBFFEA'}}>
            <Navbar style={{backgroundColor: "#3A3A72"}} textColor="#FBFFEA"/>
            <div className={"message"} style={{backgroundColor: "#3A3A72", width:"40%"}}>
                <h1 className={"medium--text"} style={{marginLeft: "40%", color: "#FBFFEA"}}>
                    <span style={{ fontSize: "2em" }}>Welcome back!</span> <br/>
                    Choose where you want to go
                </h1>
            </div>
            <Link to="/goals">
                <Button loc={{position: 'absolute', top: '40%', left: '42%', width:"15%"}} color="#3A3A72">Goals</Button>
            </Link>

            <Link to="/">
                <Button loc={{position: 'absolute', top: '50%', left: '42%', width:"15%"}} color="#3A3A72">Statistics</Button>
            </Link>
            <Link to="/parent-profile">
                <Button loc={{position: 'absolute', top: '60%', left: '42%', width:"15%"}} color="#3A3A72">My account</Button>
            </Link>
            <img src={blueGhost} className="welcome--img" alt="Blue ghost"
                 style={{top: "20%", left: "5%", width: '11%', height: '17%'}}/>
        </div>
    );
}

export default ParentHomePage;