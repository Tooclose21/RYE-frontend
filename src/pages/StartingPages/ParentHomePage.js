import React from "react";
import DarkBlueNavbar from "../../navbars/DarkBlueNavbar";
import Button from "../../components/Button";
import blueGhost from "../../images/blueGhost.png";
import {useNavigate} from "react-router-dom";
import './ParentHomePage.css';


function ParentHomePage() {
    const navigate = useNavigate();
    return (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#FBFFEA'}}>
            <DarkBlueNavbar/>
            <div className={"user--message"} >
                <h1 className={"user--text"} >
                    <span style={{ fontSize: "2em" }}>Welcome back!</span> <br/>
                    Choose where you want to go
                </h1>
            </div>
                <Button loc={{position: 'absolute', top: '40%', left: '42%', width:"15%"}} color="#3A3A72" onClick={() => navigate('/goals')}>Goals</Button>



                <Button loc={{position: 'absolute', top: '50%', left: '42%', width:"15%"}} color="#3A3A72" onClick={() => navigate('/parent-statistics')}>Statistics</Button>


                <Button loc={{position: 'absolute', top: '60%', left: '42%', width:"15%"}} color="#3A3A72" onClick={() => navigate('/parent-profile')}>My account</Button>
            <img src={blueGhost} className="ghost--img" alt="Blue ghost"/>
        </div>
    );
}

export default ParentHomePage;