
import '../styles.css';
import Navbar from "../components/Navbar";
import React from "react";
import Button from "../components/Buttons";
import {Link } from 'react-router-dom'
import blueGhost from "../images/blueGhost.png";

function MimicFromName() {
    return (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#F2EFE3'}}>
            <Navbar style={{backgroundColor: "#F0BE5E"}} textColor="#FDFEFF"/>
            <h1 className="mfm--headline">Mimic from emotion name</h1>
            <h1 className={"emotion--name"}>Angry</h1>
            <Button loc={{position: 'absolute', top: '80%', left: '43%', width: '15%', height: '8%', color: '#F8A365'}}
                    color="#FEE8AA">Take a picture</Button>
            <Button loc={{position: 'absolute', top: '80%', left: '70%', width: '10%', height: '8%', color: '#F8A365'}}
                    color="#FEE8AA">Finish</Button>
            <h1 className="counter--text">1/5</h1>
        </div>
    );
}

export default MimicFromName;
